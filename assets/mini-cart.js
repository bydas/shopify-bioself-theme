;(function () {
  if (window.BYDasMiniCart) return

  // Mapa global para armazenar estoque dos produtos
  window.__inventoryMap = window.__inventoryMap || {}

  const API_COMPARE_PRICES = 'https://bioself.apps.bydas.com/?action=get_compared_prices'

  // Cache para preços comparados
  const comparePriceCache = new Map()
  const CACHE_TTL = 5 * 60 * 1000

  // Estado centralizado do carrinho
  const cartState = {
    cart: null,
    comparedPrices: null,
    lastVariantHash: null,
    listeners: new Set(),
    fetching: null,
    updating: null,

    async fetchCart() {
      if (this.fetching) return this.fetching
      this.fetching = getCart().then(cart => {
        this.cart = cart
        this.fetching = null
        return cart
      })
      return this.fetching
    },

    async update(force = false) {
      // Se já estiver atualizando, retorna a promise existente
      if (this.updating && !force) return this.updating

      this.updating = (async () => {
        const cart = await this.fetchCart()
        const variantGids = cart.items.map(i => 'gid://shopify/ProductVariant/' + i.variant_id)
        const hash = variantGids.sort().join(',')

        if (hash !== this.lastVariantHash || force) {
          this.comparedPrices = await fetchComparedPricesWithCache(variantGids)
          this.lastVariantHash = hash
        }

        this.notify()
        this.updating = null
        return cart
      })()

      return this.updating
    },

    notify() {
      this.listeners.forEach(fn => {
        try {
          fn(this.cart, this.comparedPrices)
        } catch (e) {
          console.error('Erro em listener do carrinho:', e)
        }
      })
    },

    subscribe(fn) {
      this.listeners.add(fn)
      // Se já houver dados, chama imediatamente
      if (this.cart) fn(this.cart, this.comparedPrices)
    },

    unsubscribe(fn) {
      this.listeners.delete(fn)
    }
  }

  // Cache para fetchComparedPrices
  async function fetchComparedPricesWithCache(variantGids) {
    if (!variantGids.length) return []

    const key = variantGids.sort().join('|')
    const cached = comparePriceCache.get(key)

    if (cached && cached.expiry > Date.now()) {
      return cached.data
    }

    const data = await fetchComparedPrices(variantGids)
    comparePriceCache.set(key, { data, expiry: Date.now() + CACHE_TTL })
    return data
  }

  // Funções auxiliares
  function escapeHtml(str) {
    return String(str || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;')
  }

  function formatMoneyEUR(cents) {
    const v = Number(cents || 0) / 100
    try {
      const number = new Intl.NumberFormat('pt-PT', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(v)
      return '€' + number
    } catch (e) {
      return '€' + v.toFixed(2)
    }
  }

  function getDecRemoveSvg(qty, extraClass = '') {
    if ((qty || 0) > 1) {
      return `<svg ${extraClass ? `class="${extraClass}"` : ''} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5H11.6667V6.66667H0V5Z" fill="black" />
            </svg>`
    }

    return `<svg ${extraClass ? `class="${extraClass}"` : ''} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 15C2.04167 15 1.64931 14.8368 1.32292 14.5104C0.996528 14.184 0.833333 13.7917 0.833333 13.3333V2.5H0V0.833333H4.16667V0H9.16667V0.833333H13.3333V2.5H12.5V13.3333C12.5 13.7917 12.3368 14.184 12.0104 14.5104C11.684 14.8368 11.2917 15 10.8333 15H2.5ZM10.8333 2.5H2.5V13.3333H10.8333V2.5ZM4.16667 11.6667H5.83333V4.16667H4.16667V11.6667ZM7.5 11.6667H9.16667V4.16667H7.5V11.6667Z" fill="#1C1B1F" />
        </svg>`
  }

  async function getCart() {
    const res = await fetch('/cart.js', { credentials: 'same-origin' })
    return res.json()
  }

  async function changeLineItemQty(line, quantity) {
    const res = await fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ line, quantity }),
    })

    if (!res.ok) {
      let text = 'Não foi possível atualizar a quantidade.'
      try {
        const bodyText = await res.text()
        if (bodyText) text = bodyText
      } catch (e) {}
      throw new Error(text)
    }

    return res.json()
  }

  async function fetchComparedPrices(variantGids) {
    if (!variantGids || !variantGids.length) return []
    try {
      const response = await fetch(API_COMPARE_PRICES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_ids: variantGids }),
      })

      if (!response.ok) throw new Error('HTTP ' + response.status)

      const data = await response.json()
      return data.compare_at_prices || []
    } catch (e) {
      console.error('Erro ao buscar preços comparativos:', e)
      return []
    }
  }

  function buildComparedPriceMap(comparedPrices) {
    const map = {}
    ;(comparedPrices || []).forEach((item) => {
      if (!item?.id || !item?.compare_at_price) return

      const match = String(item.id).match(/ProductVariant\/(\d+)/)
      const numericId = match ? parseInt(match[1], 10) : null
      if (!numericId) return

      const cents = Math.round(parseFloat(item.compare_at_price) * 100)
      if (Number.isFinite(cents)) map[numericId] = cents
    })
    return map
  }

  function calculateTotalSavings(cartItems, comparedPriceMap) {
    let totalSavings = 0
    ;(cartItems || []).forEach((item) => {
      const compareCents = comparedPriceMap[item.variant_id]
      const currentCents = Number(item.final_price ?? item.price ?? 0)
      if (compareCents && compareCents > currentCents) {
        totalSavings += (compareCents - currentCents) * (item.quantity || 0)
      }
    })
    return totalSavings
  }

  function isCartCall(url) {
    if (typeof url !== 'string') return false
    return url.includes('/cart/add') || url.includes('/cart/change') || url.includes('/cart/update')
  }

  // Hook no fetch
  const state = {
    hookedFetch: false,
    instances: new Set(),
  }

  function hookFetchOnce() {
    if (state.hookedFetch) return
    state.hookedFetch = true

    const originalFetch = window.fetch
    window.fetch = function () {
      return originalFetch.apply(this, arguments).then(async (response) => {
        const url = arguments[0]

        if (isCartCall(url)) {
          let errorText = null

          if (!response.ok) {
            try {
              const cloned = response.clone()
              errorText = await cloned.text()
            } catch (e) {}
          }

          // Notifica todas as instâncias
          const tasks = []
          state.instances.forEach((inst) => {
            tasks.push(
              inst.externalCartEvent({
                ok: response.ok,
                errorText,
              })
            )
          })

          try {
            await Promise.all(tasks)
          } catch (e) {}
        }

        return response
      })
    }
  }

  function createMessenger(msgEl) {
    let lastMsgType = null
    let timer = null

    function clear() {
      if (!msgEl) return
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      lastMsgType = null
      msgEl.textContent = ''
      msgEl.classList.remove('is-visible', 'is-error', 'is-info')
      msgEl.scrollTop = 0
    }

    function show(text, type = 'error') {
      if (!msgEl) return
      if (!text || String(text).includes('DOCTYPE')) return

      if (timer) clearTimeout(timer)

      lastMsgType = type
      try {
        msgEl.textContent = String(JSON.parse(text)?.message || text)
      } catch (error) {
        msgEl.textContent = String(text)
      }

      msgEl.classList.add('is-visible')
      msgEl.classList.toggle('is-error', type === 'error')
      msgEl.classList.toggle('is-info', type === 'info')

      timer = setTimeout(() => clear(), 8000)
    }

    function getLastType() {
      return lastMsgType
    }

    return { show, clear, getLastType }
  }

  function createLocker(setLoading, setLineControlsDisabled) {
    let inFlight = 0
    const busyLines = new Set()

    async function runLocked(line, li, fn) {
      if (busyLines.has(line)) return

      busyLines.add(line)
      inFlight++
      setLoading(true)
      setLineControlsDisabled(li, true)

      try {
        await fn()
      } finally {
        busyLines.delete(line)
        inFlight = Math.max(0, inFlight - 1)
        if (inFlight === 0) setLoading(false)
        setLineControlsDisabled(li, false)
      }
    }

    async function externalLoading(fn) {
      inFlight++
      setLoading(true)
      try {
        await fn()
      } finally {
        inFlight = Math.max(0, inFlight - 1)
        if (inFlight === 0) setLoading(false)
      }
    }

    return { runLocked, externalLoading }
  }

  // ----------------------------
  // Sidebar instance
  // ----------------------------
  function mountSidebar(opts) {
    const asideBar = document.getElementById(opts.asideId)
    const sidebar = document.getElementById(opts.sidebarId)
    const totalEl = document.getElementById(opts.totalId)
    const discountEl = document.getElementById(opts.discountId)
    const msgEl = document.getElementById(opts.messageId)

    if (!sidebar || sidebar.dataset.miniCartMounted === '1') return
    sidebar.dataset.miniCartMounted = '1'

    const messenger = createMessenger(msgEl)

    function setLoading(isLoading) {
      sidebar.classList.toggle('is-loading', !!isLoading)
    }

    function setLineControlsDisabled(li, disabled) {
      const box = li?.querySelector('.update-quantity')
      if (!box) return
      const svgs = box.querySelectorAll('svg')
      const input = box.querySelector('input[type="number"]')

      svgs.forEach((s) => s.classList.toggle('is-disabled', !!disabled))
      if (input) input.disabled = !!disabled
    }

    function getMaxFromLi(li) {
      const raw = li?.getAttribute('data-max')
      if (!raw) return null
      const n = parseInt(raw, 10)
      return Number.isFinite(n) ? n : null
    }

    function findLiByKey(escapedKey) {
      return sidebar.querySelector(`li[data-key="${escapedKey}"]`)
    }

    function getUlContainer() {
      let ul = sidebar.querySelector('ul#mini-cart-items')
      if (!ul) {
        ul = document.createElement('ul')
        ul.id = 'mini-cart-items'
        sidebar.appendChild(ul)
      }
      return ul
    }

    function getMaxFromExistingLi(li) {
      const raw = li?.getAttribute('data-max')
      return raw ? raw : ''
    }

    function buildItemLiFromCartItem(it, line, maxInventory, comparedPriceCents) {
      const currentCents = Number(it.final_price ?? it.price ?? 0)
      const fallbackCompare = Number(it.original_price ?? currentCents)
      const originalCents = comparedPriceCents !== null ? comparedPriceCents : fallbackCompare

      const shouldShowCompare = originalCents > currentCents

      const img = it.image
        ? `<img src="${escapeHtml(it.image)}" alt="${escapeHtml(it.product_title || it.title)}" width="auto" height="auto" />`
        : ''

      const compare = shouldShowCompare
        ? `<span class="comparative-mini-cart-price">${escapeHtml(formatMoneyEUR(originalCents))}</span>`
        : ''

      const removeIcon = getDecRemoveSvg(it.quantity)

      return `
            <li
                data-line="${line}"
                data-key="${escapeHtml(it.key)}"
                data-variant-id="${it.variant_id}"
                data-max="${escapeHtml(maxInventory)}"
            >
                <a href="${escapeHtml(it.url)}">
                ${img}
                <div>
                    <h5>${escapeHtml(formatMoneyEUR(currentCents))}</h5>
                    ${compare}
                </div>
                </a>

                <div class="update-quantity">
                ${removeIcon}

                <input type="number" value="${it.quantity}" min="1" step="1" max="999" />

                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6.66667H0V5H5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667Z" fill="black" />
                </svg>
                </div>
            </li>
        `.trim()
    }

    function syncUiWithCart(cartJson, comparedPrices) {
      const items = cartJson.items || []
      const comparedPriceMap = buildComparedPriceMap(comparedPrices)

      const keysNow = new Set(items.map((it) => escapeHtml(it.key)))

      sidebar.querySelectorAll('li[data-key]').forEach((li) => {
        const key = li.getAttribute('data-key')
        if (key && !keysNow.has(key)) {
          li.remove()
        }
      })

      items.forEach((it, idx) => {
        const line = idx + 1
        const existingLi = findLiByKey(escapeHtml(it.key))

        const currentCents = Number(it.final_price ?? it.price ?? 0)
        const backendCompare = comparedPriceMap[it.variant_id] ?? null
        const fallbackCompare = Number(it.original_price ?? currentCents)
        const originalCents = backendCompare !== null ? backendCompare : fallbackCompare

        const inventory = window.__inventoryMap[it.variant_id]
        const maxInventory = inventory !== undefined ? inventory : ''

        if (existingLi) {
          existingLi.setAttribute('data-line', String(line))
          if (maxInventory) {
            existingLi.setAttribute('data-max', maxInventory)
          }

          const input = existingLi.querySelector('.update-quantity input[type="number"]')
          if (input) input.value = it.quantity

          const box = existingLi.querySelector('.update-quantity')
          if (box) {
            const svgs = box.querySelectorAll('svg')
            const decSvg = svgs && svgs[0]
            if (decSvg) {
              decSvg.outerHTML = getDecRemoveSvg(it.quantity)
            }
          }

          const h5 = existingLi.querySelector('a div h5')
          if (h5) h5.textContent = formatMoneyEUR(currentCents)

          const compareEl = existingLi.querySelector('.comparative-mini-cart-price')
          const shouldShowCompare = originalCents > currentCents

          if (shouldShowCompare) {
            const compareText = formatMoneyEUR(originalCents)
            if (compareEl) compareEl.textContent = compareText
            else {
              const priceRow = existingLi.querySelector('a div')
              if (priceRow) {
                priceRow.insertAdjacentHTML(
                  'beforeend',
                  `<span class="comparative-mini-cart-price">${escapeHtml(compareText)}</span>`
                )
              }
            }
          } else if (compareEl) {
            compareEl.remove()
          }

          const a = existingLi.querySelector('a')
          if (a && it.url) a.setAttribute('href', it.url)
          const img = existingLi.querySelector('a img')
          if (img && it.image) img.setAttribute('src', it.image)
        } else {
          let preservedMax = ''
          const sameVariant = sidebar.querySelector(`li[data-variant-id="${it.variant_id}"]`)
          if (sameVariant) preservedMax = getMaxFromExistingLi(sameVariant)

          const maxForNewItem = maxInventory || preservedMax
          const html = buildItemLiFromCartItem(it, line, maxForNewItem, backendCompare)
          const ul = getUlContainer()
          ul.insertAdjacentHTML('afterbegin', html)
        }
      })

      items.forEach((it) => {
        const li = findLiByKey(escapeHtml(it.key))
        if (!li) return

        const rawMax = li.getAttribute('data-max')
        const max = rawMax ? parseInt(rawMax, 10) : NaN

        const box = li.querySelector('.update-quantity')
        const svgs = box ? box.querySelectorAll('svg') : null
        const plusSvg = svgs ? svgs[1] : null

        if (plusSvg && Number.isFinite(max)) {
          plusSvg.classList.toggle('is-disabled', it.quantity >= max)
        }
      })

      if (discountEl) {
        const savings = calculateTotalSavings(items, comparedPriceMap)
        discountEl.textContent = formatMoneyEUR(savings)
      }
    }

    // Atualização via estado centralizado
    function updateFromState(cart, comparedPrices) {
      if (cart.item_count > 0) {
        if (asideBar) asideBar.classList.add('is-visible')
        if (totalEl) totalEl.textContent = formatMoneyEUR(cart.total_price)
      } else {
        if (asideBar) asideBar.classList.remove('is-visible')
        if (totalEl) totalEl.textContent = '€0.00'
        if (discountEl) discountEl.textContent = '€0.00'
      }

      syncUiWithCart(cart, comparedPrices)
    }

    // Inscreve no estado centralizado
    cartState.subscribe(updateFromState)

    const locker = createLocker(setLoading, setLineControlsDisabled)

    // Debounce para change no input
    const debouncedChange = (() => {
      let timer
      return (line, li, newQty, currentQty) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (newQty === currentQty) return
          locker.runLocked(line, li, async () => {
            try {
              const cartAfter = await changeLineItemQty(line, newQty)
              const serverQty = cartAfter.items?.[line - 1]?.quantity ?? newQty

              if (serverQty < newQty) {
                messenger.show(
                  'Devido à disponibilidade atual, foi possível adicionar apenas ' +
                    serverQty +
                    ` ${serverQty > 1 ? 'itens' : 'item'}.`,
                  'error'
                )
              }

              await cartState.update(true) // força atualização do estado

              if (serverQty <= 0) {
                li.remove()
              }
            } catch (err) {
              const input = li.querySelector('.update-quantity input')
              if (input) input.value = currentQty
              messenger.show(err?.message || 'Não foi possível atualizar a quantidade.', 'error')
            }
          })
        }, 500)
      }
    })()

    document.addEventListener('click', (e) => {
      const svg = e.target.closest('#' + opts.sidebarId + ' .update-quantity svg')
      if (!svg) return

      const updateBox = svg.closest('.update-quantity')
      const input = updateBox?.querySelector('input[type="number"]')
      const li = svg.closest('li')
      if (!input || !li) return

      const svgs = updateBox.querySelectorAll('svg')
      const isDecrement = svgs[0] === svg
      const isIncrement = svgs[1] === svg
      if (!isDecrement && !isIncrement) return

      const line = parseInt(li.getAttribute('data-line'), 10)
      if (!line || Number.isNaN(line)) return

      const current = parseInt(input.value, 10) || 0
      const next = isIncrement ? current + 1 : current - 1
      const desired = Math.max(0, next)

      messenger.clear()
      input.value = desired

      locker.runLocked(line, li, async () => {
        try {
          const cartAfter = await changeLineItemQty(line, desired)
          const serverQty = cartAfter.items?.[line - 1]?.quantity ?? desired

          if (isIncrement && serverQty < desired) {
            messenger.show(
              'Devido à disponibilidade atual, foi possível adicionar apenas ' +
                serverQty +
                ` ${serverQty > 1 ? 'itens' : 'item'}.`,
              'error'
            )
          }

          await cartState.update(true)

          if (serverQty <= 0) {
            li.remove()
          }
        } catch (err) {
          input.value = current
          messenger.show(err?.message || 'Não foi possível atualizar a quantidade.', 'error')
        }
      })
    })

    document.addEventListener('change', (e) => {
      const input = e.target.closest(
        '#' + opts.sidebarId + ' .update-quantity input[type="number"]'
      )
      if (!input) return

      const li = input.closest('li')
      const line = parseInt(li?.getAttribute('data-line'), 10)
      if (!li || !line || Number.isNaN(line)) return

      let desired = Math.max(0, parseInt(input.value, 10) || 0)
      const max = getMaxFromLi(li)

      if (max !== null && desired > max) {
        desired = max
        input.value = max
      }

      const current = parseInt(input.defaultValue, 10) || 0
      messenger.clear()

      debouncedChange(line, li, desired, current)
    })

    const instance = {
      externalCartEvent: async ({ ok, errorText }) => {
        return locker.externalLoading(async () => {
          if (!ok) {
            if (errorText) messenger.show(errorText, 'error')
          } else {
            if (messenger.getLastType() !== 'error') messenger.clear()
          }
          await cartState.update()
        })
      },
    }

    state.instances.add(instance)
    hookFetchOnce()

    // Inicia a carga inicial apenas se o carrinho ainda não foi carregado
    if (!cartState.cart) {
      locker.externalLoading(() => cartState.update())
    }
  }

  // ----------------------------
  // Modal instance
  // ----------------------------
  function mountModal(opts) {
    const modal = document.getElementById(opts.modalId)
    if (!modal || modal.dataset.miniCartMounted === '1') return
    modal.dataset.miniCartMounted = '1'

    const itemsEl = document.getElementById(opts.itemsId)
    const totalEl = document.getElementById(opts.totalId)
    const discountEl = document.getElementById(opts.discountId)
    const discountAllocations = document.querySelectorAll('.mini-cart-modal-discount_application')
    const msgEl = document.getElementById(opts.messageId)

    if (!itemsEl) return

    const messenger = createMessenger(msgEl)

    function setLoading(isLoading) {
      modal.classList.toggle('is-loading', !!isLoading)
    }

    function setLineControlsDisabled(li, disabled) {
      const box = li?.querySelector('.update-quantity-modal')
      if (!box) return

      const svgs = box.querySelectorAll('svg')
      const input = box.querySelector('input[type="number"]')

      svgs.forEach((s) => s.classList.toggle('is-disabled', !!disabled))
      if (input) input.disabled = !!disabled

      const removeBtn = li?.querySelector('.js-remove')
      if (removeBtn) removeBtn.style.pointerEvents = disabled ? 'none' : ''
      if (removeBtn) removeBtn.style.opacity = disabled ? '0.6' : ''
    }

    function getMaxFromLi(li) {
      const raw = li?.getAttribute('data-max')
      if (!raw) return null
      const n = parseInt(raw, 10)
      return Number.isFinite(n) ? n : null
    }

    function findLiByKey(escapedKey) {
      return itemsEl.querySelector(`li[data-key="${escapedKey}"]`)
    }

    function applyPlusDisableByMax(li, qty) {
      const max = getMaxFromLi(li)
      const plus = li?.querySelector('.update-quantity-modal .js-inc')
      if (!plus) return

      if (max === null) {
        plus.classList.remove('is-disabled')
        return
      }
      plus.classList.toggle('is-disabled', qty >= max)
    }

    function buildLiFromCartItem(it, line, comparedPriceMap, maxInventory) {
      const currentCents = Number(it.final_price ?? it.price ?? 0)
      const backendCompare = comparedPriceMap[it.variant_id] ?? null
      const fallbackCompare = Number(it.original_price ?? currentCents)
      const originalCents = backendCompare !== null ? backendCompare : fallbackCompare
      const showCompare = originalCents > currentCents

      const img = it.image
        ? `<img src="${escapeHtml(it.image)}" alt="${escapeHtml(it.product_title || it.title)}" />`
        : ''

      const compareHtml = showCompare
        ? `<span class="mini-cart-modal-compare">${escapeHtml(formatMoneyEUR(originalCents))}</span>`
        : ''

      const removeIcon = getDecRemoveSvg(it.quantity, 'js-dec')

      return `
            <li
            data-line="${line}"
            data-key="${escapeHtml(it.key)}"
            data-variant-id="${it.variant_id}"
            data-max="${escapeHtml(maxInventory)}"
            >
            <a class="mini-cart-modal-item-link" href="${escapeHtml(it.url)}">
                ${img}
            </a>

            <div class="mini-cart-modal-item-details">
                <a href="${escapeHtml(it.url)}">
                <h4>${escapeHtml(it.product_title || it.title)}</h4>
                </a>

                <div class="mini-cart-modal-item-pricing">
                <h5>${escapeHtml(formatMoneyEUR(currentCents))}</h5>
                ${compareHtml}
                </div>

                <div class="mini-cart-modal-item-actions">
                <div class="update-quantity-modal">
                    ${removeIcon}

                    <input type="number" name="quantity" value="${it.quantity}" min="1" step="1" max="999" />

                    <svg class="js-inc" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 6.66667H0V5H5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667Z" fill="black" />
                    </svg>
                </div>

                <span class="js-remove">Remover</span>
                </div>
            </div>
            </li>
        `.trim()
    }

    function syncUiWithCart(cartJson, comparedPrices) {
      const items = cartJson.items || []
      const keysNow = new Set(items.map((it) => escapeHtml(it.key)))
      const comparedPriceMap = buildComparedPriceMap(comparedPrices)

      itemsEl.querySelectorAll('li[data-key]').forEach((li) => {
        const key = li.getAttribute('data-key')
        if (key && !keysNow.has(key)) li.remove()
      })

      items.forEach((it, idx) => {
        const line = idx + 1
        const li = findLiByKey(escapeHtml(it.key))

        const currentCents = Number(it.final_price ?? it.price ?? 0)
        const backendCompare = comparedPriceMap[it.variant_id] ?? null
        const fallbackCompare = Number(it.original_price ?? currentCents)
        const originalCents = backendCompare !== null ? backendCompare : fallbackCompare

        const inventory = window.__inventoryMap[it.variant_id]
        const maxInventory = inventory !== undefined ? inventory : ''

        if (li) {
          li.setAttribute('data-line', String(line))
          if (maxInventory) {
            li.setAttribute('data-max', maxInventory)
          }

          const input = li.querySelector('.update-quantity-modal input[type="number"]')
          if (input) input.value = it.quantity

          const box = li.querySelector('.update-quantity-modal')
          if (box) {
            const svgs = box.querySelectorAll('svg')
            const currentDec = box.querySelector('svg.js-dec') || svgs[0]
            if (currentDec) {
              const wasDisabled = currentDec.classList.contains('is-disabled')
              const cls = wasDisabled ? 'js-dec is-disabled' : 'js-dec'
              currentDec.outerHTML = getDecRemoveSvg(it.quantity, cls)
            }
          }

          const h5 = li.querySelector('.mini-cart-modal-item-pricing h5')
          if (h5) h5.textContent = formatMoneyEUR(currentCents)

          const shouldShowCompare = originalCents > currentCents
          const compareEl = li.querySelector('.mini-cart-modal-compare')

          if (shouldShowCompare) {
            const txt = formatMoneyEUR(originalCents)
            if (compareEl) compareEl.textContent = txt
            else {
              const pricing = li.querySelector('.mini-cart-modal-item-pricing')
              if (pricing)
                pricing.insertAdjacentHTML(
                  'beforeend',
                  `<span class="mini-cart-modal-compare">${escapeHtml(txt)}</span>`
                )
            }
          } else if (compareEl) {
            compareEl.remove()
          }

          applyPlusDisableByMax(li, it.quantity)
        } else {
          itemsEl.insertAdjacentHTML(
            'afterbegin',
            buildLiFromCartItem(it, line, comparedPriceMap, maxInventory)
          )
          const newLi = findLiByKey(escapeHtml(it.key))
          if (newLi) applyPlusDisableByMax(newLi, it.quantity)
        }
      })

      if (totalEl) totalEl.textContent = formatMoneyEUR(cartJson.total_price || 0)
      if (discountEl) {
        const savings = calculateTotalSavings(items, comparedPriceMap)
        discountEl.textContent = formatMoneyEUR(savings)
      }
      discountAllocations.forEach((d) => {
        let totalDiscount = 0

        items.forEach((i) => {
          const discountFound = i.discounts.find((dis) => dis.title === d.dataset.title)
          if (discountFound && discountFound.amount) totalDiscount += discountFound.amount
        })

        const p = d.querySelector('.mini-cart-modal-discount-price')
        if (p) p.innerText = formatMoneyEUR(totalDiscount)
      })
    }

    function updateFromState(cart, comparedPrices) {
      syncUiWithCart(cart, comparedPrices)
    }

    cartState.subscribe(updateFromState)

    const locker = createLocker(setLoading, setLineControlsDisabled)

    const debouncedChange = (() => {
      let timer
      return (line, li, newQty, currentQty) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          if (newQty === currentQty) return
          locker.runLocked(line, li, async () => {
            try {
              const cartAfter = await changeLineItemQty(line, newQty)
              const serverQty = cartAfter.items?.[line - 1]?.quantity ?? newQty

              if (serverQty < newQty) {
                messenger.show(
                  'Devido à disponibilidade atual, foi possível adicionar apenas ' +
                    serverQty +
                    ` ${serverQty > 1 ? 'itens' : 'item'}.`,
                  'error'
                )
              }

              await cartState.update(true)

              if (serverQty <= 0) li.remove()
            } catch (err) {
              const input = li.querySelector('.update-quantity-modal input')
              if (input) input.value = currentQty
              messenger.show(err?.message || 'Não foi possível atualizar a quantidade.', 'error')
            }
          })
        }, 500)
      }
    })()

    document.addEventListener('click', (e) => {
      const inThisModal = e.target.closest('#' + opts.modalId)
      if (!inThisModal) return

      if (modal.classList.contains('is-loading')) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      const svg = e.target.closest('#' + opts.modalId + ' .update-quantity-modal svg')
      if (svg) {
        const li = svg.closest('li[data-line]')
        const input = li?.querySelector('.update-quantity-modal input[type="number"]')
        if (!li || !input) return

        const line = parseInt(li.getAttribute('data-line'), 10)
        if (!line || Number.isNaN(line)) return

        const current = parseInt(input.value, 10) || 0
        const isInc = svg.classList.contains('js-inc')
        const isDec = svg.classList.contains('js-dec')
        if (!isInc && !isDec) return

        const next = isInc ? current + 1 : current - 1
        let desired = Math.max(0, next)

        messenger.clear()
        input.value = desired

        locker.runLocked(line, li, async () => {
          try {
            const cartAfter = await changeLineItemQty(line, desired)
            const serverQty = cartAfter.items?.[line - 1]?.quantity ?? desired

            if (isInc && serverQty < desired) {
              messenger.show(
                'Devido à disponibilidade atual, foi possível adicionar apenas ' +
                  serverQty +
                  ` ${serverQty > 1 ? 'itens' : 'item'}.`,
                'error'
              )
            }

            await cartState.update(true)
            if (serverQty <= 0) li.remove()
          } catch (err) {
            input.value = current
            messenger.show(err?.message || 'Não foi possível atualizar a quantidade.', 'error')
          }
        })

        return
      }

      const removeBtn = e.target.closest('#' + opts.modalId + ' .js-remove')
      if (removeBtn) {
        const li = removeBtn.closest('li[data-line]')
        const line = parseInt(li?.getAttribute('data-line'), 10)
        if (!li || !line || Number.isNaN(line)) return

        messenger.clear()

        locker.runLocked(line, li, async () => {
          try {
            await changeLineItemQty(line, 0)
            await cartState.update(true)
          } catch (err) {
            messenger.show(err?.message || 'Não foi possível remover o item.', 'error')
          }
        })
      }
    })

    document.addEventListener('change', (e) => {
      const input = e.target.closest(
        '#' + opts.modalId + ' .update-quantity-modal input[type="number"]'
      )
      if (!input) return

      const li = input.closest('li[data-line]')
      const line = parseInt(li?.getAttribute('data-line'), 10)
      if (!li || !line || Number.isNaN(line)) return

      let desired = Math.max(0, parseInt(input.value, 10) || 0)
      const current = parseInt(input.defaultValue, 10) || 0
      messenger.clear()

      debouncedChange(line, li, desired, current)
    })

    const instance = {
      externalCartEvent: async ({ ok, errorText }) => {
        return locker.externalLoading(async () => {
          if (!ok) {
            if (errorText) messenger.show(errorText, 'error')
          } else {
            if (messenger.getLastType() !== 'error') messenger.clear()
          }
          await cartState.update()
        })
      },
    }

    state.instances.add(instance)
    hookFetchOnce()

    if (!cartState.cart) {
      locker.externalLoading(() => cartState.update())
    }
  }

  // ----------------------------
  // Interceptação global dos botões de adicionar ao carrinho
  // ----------------------------
  document.addEventListener(
    'click',
    async (e) => {
      const btn = e.target.closest(
        'button[data-variant-id][data-inventory][data-action="add-to-cart"], button[data-variant-id][data-inventory]#add-to-cart'
      )
      if (!btn) return

      e.preventDefault()
      e.stopPropagation()

      const variantId = btn.getAttribute('data-variant-id')
      const inventory = parseInt(btn.getAttribute('data-inventory'), 10)
      if (isNaN(inventory)) return

      window.__inventoryMap[variantId] = inventory

      let qty = 1
      const form = btn.closest('form') ?? btn.closest('aside')
      if (form) {
        const qtyInput = form.querySelector('input[name="quantity"]')
        if (qtyInput) {
          qty = parseInt(qtyInput.value, 10) || 1
        }
      } else {
        const qtyInput = document.querySelector('input[name="quantity"]')
        if (
          qtyInput &&
          qtyInput.closest('.product') &&
          qtyInput.closest('.product').contains(btn)
        ) {
          qty = parseInt(qtyInput.value, 10) || 1
        }
      }
      qty = Math.max(1, qty)

      let currentQty = 0
      if (cartState.cart) {
        const existingItem = cartState.cart.items.find(item => item.variant_id == variantId)
        currentQty = existingItem ? existingItem.quantity : 0
      }

      const totalAfter = currentQty + qty
      let finalQty = qty

      if (totalAfter > inventory) {
        const available = inventory - currentQty
        if (available <= 0) {
          alert('Produto esgotado.')
          return
        }
        finalQty = available
        alert(`A quantidade foi ajustada para ${available} devido ao estoque disponível.`)
      }

      try {
        const res = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: finalQty }),
        })
        if (!res.ok) {
          const errText = await res.text()
          throw new Error(errText)
        }
      } catch (err) {
        alert('Erro ao adicionar: ' + err.message)
      }
    },
    { capture: true }
  )

  window.BYDasMiniCart = {
    mountSidebar,
    mountModal,
    utils: {
      formatMoneyEUR,
      escapeHtml,
      fetchComparedPrices: fetchComparedPricesWithCache,
      buildComparedPriceMap,
      calculateTotalSavings,
      changeLineItemQty,
      getCart,
    },
  }
})()