/**
 * Include your custom JavaScript here.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Announcement Carousel
  (function announcementCarousel() {
    var announcementTop = document.querySelector('#announcement-bar-top .announcement-bar__carousel');
    if (announcementTop) {
      new Flickity(announcementTop, {
        cellAlign: 'center',
        draggable: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 5000,
      });
    }

    var announcementBottom = document.querySelector('#announcement-bar-bottom .announcement-bar__carousel');
    if (announcementBottom) {
      new Flickity(announcementBottom, {
        cellAlign: 'center',
        draggable: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 5000,
      });
    }
  })();

  // Button Popup
  (function buttonPopup() {
    var buttonPopup = document.getElementById('button_popup--cta');
    if (buttonPopup) {
      var modalPopup = document.querySelector('.modal--button_popup');
      var buttonPopupCta = buttonPopup.querySelector('.heading');
      var buttonPopupClose = buttonPopup.querySelector('.button_popup--cta__close');
      if (buttonPopupCta && modalPopup) {
        buttonPopupCta.addEventListener('click', function () {
          modalPopup.setAttribute('aria-hidden', 'false');
          buttonPopup.style.display = "none";
        });
      }
      if (buttonPopupClose) {
        buttonPopupClose.addEventListener('click', function () {
          buttonPopup.style.display = "none";
        });
      }
      if (modalPopup) {
        var modalPopupClose = modalPopup.querySelector('.popup-newsletter__close');
        if (modalPopupClose) {
          modalPopupClose.addEventListener('click', function () {
            modalPopup.setAttribute('aria-hidden', 'true');
          });
        }
      }
    }

    // Handle URL with customer_posted=true
    if (window.location.href.indexOf("customer_posted=true") > -1) {
      if (buttonPopup) {
        var modalPopup = document.querySelector('.modal--button_popup');
        if (modalPopup) {
          modalPopup.setAttribute('aria-hidden', 'false');
          buttonPopup.style.display = "none";
        }
      }
    }
  })();

  // Button Popup Link
  (function buttonPopupLink() {
    var buttonPopup = document.getElementById('button_popup--link');
    if (buttonPopup) {
      var buttonPopupClose = buttonPopup.querySelector('.button_popup--link__close');
      if (buttonPopupClose) {
        buttonPopupClose.addEventListener('click', function () {
          buttonPopup.style.display = "none";
        });
      }
      var modalPopup = document.querySelector('.modal--button_popup');
      if (modalPopup) {
        var modalPopupClose = modalPopup.querySelector('.popup-newsletter__close');
        if (modalPopupClose) {
          modalPopupClose.addEventListener('click', function () {
            modalPopup.setAttribute('aria-hidden', 'true');
          });
        }
      }
    }

    // Handle URL with customer_posted=true
    if (window.location.href.indexOf("customer_posted=true") > -1) {
      if (buttonPopup) {
        var modalPopup = document.querySelector('.modal--button_popup');
        if (modalPopup) {
          modalPopup.setAttribute('aria-hidden', 'false');
          buttonPopup.style.display = "none";
        }
      }
    }
  })();

  // Blog Notice "Leia Mais" Button
  (function blogNoticeToggle() {
    let currUrl = window.location.href;
    if (currUrl.includes("blog-page")) {
      var noticeText = document.getElementById("noticeText");
      if (noticeText) {
        var toggleButton = document.getElementById("toggleButton");
        var isExpanded = false;
        var originalText = noticeText.textContent.trim();
        var firstSentence = originalText.split('.')[0] + "...";
        if (originalText !== firstSentence) {
          noticeText.textContent = firstSentence;
        }

        if (toggleButton) {
          toggleButton.addEventListener("click", function () {
            if (!isExpanded) {
              noticeText.textContent = originalText;
              toggleButton.textContent = "Leia menos";
            } else {
              noticeText.textContent = firstSentence;
              toggleButton.textContent = "Leia mais";
            }
            isExpanded = !isExpanded;
          });
        }
      }
    }
  })();
});
