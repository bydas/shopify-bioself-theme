/*==============================================================================
# WARNING: This file is auto-generated and any changes that are made may be lost.
==============================================================================*/

(function() {
  var head = document.getElementsByTagName('head')[0];
  var startingTime = new Date().getTime();

  if (typeof jQuery == 'undefined') {
    var jQueryScript = document.createElement('script');
    jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    jQueryScript.type = 'text/javascript';
    head.appendChild(jQueryScript);
  }

  if (typeof Mustache == 'undefined') {
    var mustacheScript = document.createElement('script');
    mustacheScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.js';
    mustacheScript.type = 'text/javascript';
    head.appendChild(mustacheScript);
  }

  if (window.location.search.indexOf('selector_section_mode') > -1) {
    var script = document.createElement('script');
    window.selector_section_mode = true;
    script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'back-in-stock.appikon.com/theme-settings/element-selector.js';
    script.type = 'text/javascript';
    head.appendChild(script);
  }

  // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
          $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            console.log("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });

})();

function deferJquery(method) {
  if (window.jQuery)
      method();
  else
      setTimeout(function() { deferJquery(method) }, 50);
}

function deferBisProductPageButton (callback) {
  if (jQuery('#SI_trigger').length) {
    callback();
  } else {
    setTimeout(function() {
      deferBisProductPageButton(callback);
    }, 50);
  }
}

function getRandomSubscribeAPIPath() {
  const apiGatewayPaths=[]
  apiGatewayPaths.push('xsy6rdr4zb') //Load balancer
  //apiGatewayPaths.push('pw4ndd3ije')
  //apiGatewayPaths.push('056wq1p6oa')
  //apiGatewayPaths.push('obx6oifedg')
  //apiGatewayPaths.push('seknvpr88e')

  return apiGatewayPaths[Math.floor(Math.random()*apiGatewayPaths.length)]
}

(async function () {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 ms delay to load all the page before inserting button
    var popupFormTemplate = `<!doctype html><!--[if lt IE 7]>
<html class="ie6">
   <![endif]--><!--[if IE 7]>
   <html class="ie7">
      <![endif]--><!--[if IE 8]>
      <html class="ie8">
         <![endif]--><!--[if gt IE 8]><!-->
         <html>
            <!--<![endif]-->
            <head>
               <link rel='stylesheet' href="https://fonts.googleapis.com/css?family={{ popup_theme.text_font_name }}" />
               <meta name="viewport" content="width=device-width">
               <style> {{{styles}}} {{{ popup_theme.signup_form_custom_css }}} {{#popup_theme}} #container { font-family: {{ popup_theme.text_font_name}}, sans-serif; background: {{ popup_theme.background_color }}; border-color: {{ popup_theme.border_color }}; border-width: {{ popup_theme.border_width }}px; border-style: solid; } body { color: {{ popup_theme.text_color }}; } body.fadein { background: rgba( {{ popup_theme.fade_color_rgb }}, 0.65); } #submit-btn { color: {{ popup_theme.button_text_color }}; background-color: {{ popup_theme.button_background_color }}; border-color: {{ popup_theme.button_background_color }}; border-radius: {{ popup_theme.button_corner_radius }}px; } .input-lg { border-radius: {{ popup_theme.input_border_radius }}px; border-color: {{ popup_theme.input_border_color }}; border-width: {{ input_border_width }}px;  }  .close { color: {{ popup_theme.close_button_color }}; } .alert-danger { border-color: {{ popup_theme.failure_background_color }}; background-color: {{ popup_theme.failure_background_color }}; color: {{ popup_theme.failure_text_color }}; } .alert-success { background-color: {{ popup_theme.success_background_color }}; border-color: {{ popup_theme.success_background_color }}; color: {{ popup_theme.success_text_color }}; } .alert-success a { color: {{ popup_theme.success_text_color }}; } {{/popup_theme}}
   .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .popup-form-hidden-tab{
    display:none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  .appikon-bis-form-hide-warning{
    display:none
}
.appikon-bis-form-warning{
     color:red
}

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }</style>
               {{#show_phone_number_field}}
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.5/css/intlTelInput.css" integrity="sha256-rTKxJIIHupH7lFo30458ner8uoSSRYciA0gttCkw1JE=" crossorigin="anonymous" />
               {{/show_phone_number_field}}
            </head>
            <body class="action-close">
               <div id="SIModal" class="">
                  <div class="" id="container">
                     <button type="button" class="close action-close" data-dismiss="modal">&times;</button>
                     <h3 class="modal-title">{{{headline}}}</h3>
                     <p>{{{body_copy}}}</p>
                     <hr>
                     <h4 class="product-name">{{{product.title}}}</h4>
                     <form action="#" class="form-horizontal clearfix">
                        <div id="variant-select-container">
                           <div class="form-group {{#single_variant_product}}single_variant_product_select{{/single_variant_product}}">
                              <div class="col-xs-12">
                                 <select id="variants" class="selectpicker form-control input-lg {{#is_default_variant}}default_variant{{/is_default_variant}} {{#single_variant_product}}single_variant_product{{/single_variant_product}}">
                                    {{#unavailableVariants}}
                                    <option value="{{id}}">{{title}}</option>
                                    {{/unavailableVariants}}
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div id="customer-contact-container">
                          {{#show_phone_number_field}}
                            {{^only_sms_enabled}}
                              <div class="form-group">
                                <div class="col-xs-12 btn-group btn-group-justified">
                                  {{#show_sms_first}}
                                    <div class="btn-group"> <button type="button" class="btn btn-success" id="sms-tab">{{{ sms_tab_text }}}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn btn-default" id="email-tab">{{{ email_tab_text }}}</button> </div>
                                  {{/show_sms_first}}
                                  {{^show_sms_first}}
                                    <div class="btn-group"> <button type="button" class="btn btn-success" id="email-tab">{{{ email_tab_text }}}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn btn-default" id="sms-tab">{{{ sms_tab_text }}}</button> </div>
                                  {{/show_sms_first}}
                                </div>
                              </div>
                            {{/only_sms_enabled}}
                          {{/show_phone_number_field}}

                          {{#customer_name_enabled}}
                            <div id="customer-name" class="form-group">
                              <div class="col-xs-12">
                                <input id="appikon-bis-popup-form-name" type="text" placeholder="Name" class="form-control input-lg" value="{{customer.name}}">
                              </div>
                            </div>
                          {{/customer_name_enabled}}

                          {{#show_phone_number_field}}
                            <div id="phone-number" class="form-group {{^only_sms_enabled}}{{^show_sms_first}}popup-form-hidden-tab{{/show_sms_first}}{{/only_sms_enabled}}">
                              <div class="col-xs-12">
                                 <input id="appikon-bis-popup-form-phone-no" type="number" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control input-lg" value="{{customer.phone}}">
                              </div>
                            </div>
                          {{/show_phone_number_field}}

                          {{^only_sms_enabled}}
                            <div id="email-address" class="form-group {{#show_sms_first}}popup-form-hidden-tab{{/show_sms_first}}">
                              <div class="col-xs-12">
                                <input id="appikon-bis-popup-form-email" type="email" placeholder="{{email_address_label}}" class="form-control input-lg" value="{{customer.email}}">
                                <small class="appikon-bis-form-hide-warning" id="appikon-bis-form-email-warning">{{{email_invalid}}}</small>
                              </div>
                            </div>
                          {{/only_sms_enabled}}

                           {{#push_owl_enabled}}
                           <div id="send_to_push_owl" class="form-group">
                              <div class="col-xs-12">
                                <h6><b>{{{push_notification_label}}}</b></h6>
                                <label class="switch">
                                  <input id="enable_push_notification" type="checkbox" />
                                  <span class="slider round"></span>
                                </label>
                              </div>
                            </div>
                            {{/push_owl_enabled}}

                           {{#show_fb}}
                           <div id="fb-share-to-messenger-container" class="form-group">
                              <div class="col-xs-12">
                                 <h6><b>{{{ fb_instruction_message }}}</b></h6>
                                 <div id="fb-share-to-messenger-sub-container"></div>
                              </div>
                           </div>
                           <div id="fb-root"></div>
                           <script>
                            window.fbAsyncInit = function () {
                              FB.init({ 
                                appId: '2440781236012932',
                                autoLogAppEvents: false,
                                xfbml: true,
                                version: 'v15.0'
                              });
                              afterFBInit();
                            }; 
                            
                            (function () {
                              var script = document.createElement("script");
                              script.src =
                                document.location.protocol +
                                "//connect.facebook.net/{{fb_cta_button_language}}/sdk.js";
                              script.async = true;
                              document.getElementById("fb-root").appendChild(script);
                            })();

                            function afterFBInit() {
                              (function () {
                                var variantsDropdown = document.getElementById("variants");
                                variantsDropdown.onchange = function () {
                                  reloadFBWidget();
                                };
                              })();
                              var reloadFBWidget = function () {
                                var variantsDropdown = document.getElementById("variants");
                                var selectedIndex = variantsDropdown.selectedIndex;
                                if (selectedIndex == null) {
                                  console.log("selected index is null.");
                                  return;
                                }
                                var selectedVariantId = variantsDropdown.options[selectedIndex].value;
                                var sendToMessengerElement = document.createElement("div");
                                sendToMessengerElement.setAttribute("cta_text", "{{fb_cta_button_text}}");
                                sendToMessengerElement.setAttribute("class", "fb-send-to-messenger");
                                sendToMessengerElement.setAttribute("messenger_app_id", "2440781236012932");
                                sendToMessengerElement.setAttribute("page_id", "{{fb_page_id}}");
                                sendToMessengerElement.setAttribute(
                                  "data-ref",
                                  selectedVariantId +
                                    "_fbd_" +
                                    "{{shop_myshopify_domain}}" +
                                    "_fbd_" +
                                    "{{product.id}}"
                                );
                                sendToMessengerElement.setAttribute("size", "large");
                                sendToMessengerElement.setAttribute("color", "blue");
                                var fbShareToMessengerSubContainer = document.getElementById(
                                  "fb-share-to-messenger-sub-container"
                                );
                                fbShareToMessengerSubContainer.innerHTML = "";
                                fbShareToMessengerSubContainer.appendChild(sendToMessengerElement);
                                FB.XFBML.parse();
                              };
                              reloadFBWidget();
                            }

                            </script>


                           {{/show_fb}}

                        </div>
                        {{#show_phone_number_field}}<script> var emailButton, smsButton; var phoneNumberDiv = document.querySelector('#phone-number'); var emailAddressDiv = document.querySelector('#email-address'); emailButton = document.querySelector('#customer-contact-container .btn-group > button#email-tab'); smsButton = document.querySelector('#customer-contact-container .btn-group > button#sms-tab');   var showEmailField = function  () { phoneNumberDiv.classList.add('popup-form-hidden-tab'); emailAddressDiv.classList.remove('popup-form-hidden-tab'); emailButton.classList.add('btn-success');emailButton.classList.remove('btn-default'); smsButton.classList.remove('btn-success'); smsButton.classList.add('btn-default'); emailButton.classList.toggle('active');}; var showPhoneField = function(){emailAddressDiv.classList.add('popup-form-hidden-tab'); phoneNumberDiv.classList.remove('popup-form-hidden-tab');smsButton.classList.add('btn-success');smsButton.classList.remove('btn-default');smsButton.classList.toggle('active');emailButton.classList.remove('btn-success');emailButton.classList.add('btn-default');};emailButton && emailButton.addEventListener('click', showEmailField);smsButton && smsButton.addEventListener('click', showPhoneField); </script>{{/show_phone_number_field}}
                        
                        
                        
                        
                        {{#quantity_field_enabled}}
                          <div id="quantity-field-container">
                             <div class="form-group form-group-lg">
                                <label class="col-xs-offset-3 col-xs-5 control-label" for="quantity_required"> {{quantity_required_label}} </label>
                                <div class="col-xs-4"> <input type="number" id="quantity_required" min="1" max="9999" value="1" step="1" class="form-control text-right"> </div>
                             </div>
                          </div>
                        {{/quantity_field_enabled}}
                        {{> accepts_marketing}}
                        {{> recaptcha }}
                        
                        {{#show_terms_and_conditions}}
                        <div class="appikon-bis-tc-checkbox">
                          <input type="checkbox" id="acceptTermsAndConditionsForPopupForm">
                          <label style="font-weight:300" class="terms_and_conditions" for="terms_and_conditions">{{{terms_and_conditions_text}}}</label>
                        </div>
                        {{/show_terms_and_conditions}}

                        <div class="form-group">
                           <div class="col-xs-12"> <button type="submit" id="submit-btn" class="btn btn-success btn-lg btn-block"> {{{button_label}}} </button> </div>
                        </div>
                        <div id="message_holder"></div>
                        <div class="completed_message alert alert-success"> {{{registration_complete}}} <a href="#" class="action-close">{{{ close_label }}}</a> </div>

                        <!-- Default unchecked -->
                        {{#newsletter_permission_enabled}}
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" name="customer_accepts_marketing"  id="customer_accepts_marketing" {{#newsletter_permission_default_checked}}checked{{/newsletter_permission_default_checked}}>
                          <label class="custom-control-label" for="customer_accepts_marketing">{{{newsletter_permission_text}}}</label>
                        </div>
                        {{/newsletter_permission_enabled}}
                         
                     </form>

                     <p class="small-print">{{{footer_copy}}}</p>
                     {{#madeby_link_visible}}
                     <p class="small-print text-right"> Powered by <a href="https://apps.shopify.com/customer-back-in-stock-alert-user-notification-app/?utm_source=referral&utm_medium=powered-by&utm_campaign={{shop_myshopify_domain}}" target="_blank">Back In Stock (by Appikon)</a> </p>
                     {{/madeby_link_visible}}
                  </div>
               </div>


               {{{ content_for_body}}}
               <script>
                  const submitButton=document.getElementById('submit-btn');
                  const emailField=document.getElementById('appikon-bis-popup-form-email')
                  const smsField=document.getElementById('appikon-bis-popup-form-phone-no')
                  const emailFieldWarningElement=document.getElementById('appikon-bis-form-email-warning');
                  emailField && emailField.addEventListener("change", function() {
                                var appikonBisPopUpFormEmail = emailField.value;
                                const emailPattern = /^\\w+([.+-]?\\w+)*@\\w+([.+-]?\\w+)*(\\.\\w{2,})+$/; //email simple pattern
                                if (!emailPattern.test(appikonBisPopUpFormEmail)) {
                                    emailFieldWarningElement.classList.remove("appikon-bis-form-hide-warning")
                                    emailFieldWarningElement.classList.add("appikon-bis-form-warning");
                                    submitButton.setAttribute('disabled','true');
                                } else {
                                    emailFieldWarningElement.classList.remove("appikon-bis-form-warning")
                                    emailFieldWarningElement.classList.add("appikon-bis-form-hide-warning");
                                    submitButton.removeAttribute('disabled','true');
                                }
                  })

                  const smsTab = document.getElementById("sms-tab");
                  smsTab && smsTab.addEventListener("click", function() {
                        submitButton.removeAttribute('disabled');
                        emailField.value = "";
                        emailFieldWarningElement.classList.add("appikon-bis-form-hide-warning");
                        emailFieldWarningElement.classList.remove("appikon-bis-form-warning")
                  })

                  const emailTab = document.getElementById("email-tab");
                  emailTab && emailTab.addEventListener("click", function() {
                        submitButton.removeAttribute('disabled');
                        smsField.value = "";

                  })
                </script>
            </body>
         </html>`;


    var cssReset = ".si-reset>div{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:normal;font:normal normal 100% \"Helvetica Neue\", Helvetica, Arial, sans-serif;text-align:left;text-align-last:start;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;-moz-animation:none 0 ease 0 1 normal;-ms-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;-moz-play-state:running;-ms-animation-play-state:running;animation-play-state:running;appearance:normal;azimuth:center;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;break-after:auto;break-before:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-webkit-column-fill:balance;-webkit-column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-webkit-column-span:1;-webkit-column-width:auto;-webkit-columns:auto auto;-moz-column-count:auto;-moz-column-fill:balance;-moz-column-gap:normal;-moz-column-rule:medium medium #1f1f1f;-moz-column-span:1;-moz-column-width:auto;-moz-columns:auto auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium medium #1f1f1f;column-span:1;column-width:auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0% 0%;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:invert none medium;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;perspective:none;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;-moz-transform:none;transform:none;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:all 0 ease 0;-moz-transition:all 0 ease 0;-o-transition:all 0 ease 0;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(enabled=false)\";filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.si-reset{z-index:999999}.si-reset div{display:block}.si-reset .si-button{cursor:pointer;text-shadow:1px 1px 0 rgba(0,0,0,0.2);-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:none}.si-reset.si-edge-left,.si-reset.si-edge-right{transform-origin:left bottom;white-space:nowrap;position:fixed}.si-reset.si-edge-left{left:0}.si-reset.si-edge-right{right:0}.si-reset.si-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-webkit-transform-origin:left bottom;-moz-transform:rotate(90deg);-moz-transform-origin:left bottom;-ms-transform:rotate(90deg);-ms-transform-origin:left bottom;-o-transform:rotate(90deg);-o-transform-origin:left bottom;transform:rotate(90deg)}.si-reset.si-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-webkit-transform-origin:100% 100%;-moz-transform:rotate(270deg);-moz-transform-origin:100% 100%;-ms-transform:rotate(270deg);-ms-transform-origin:100% 100%;-o-transform:rotate(270deg);-o-transform-origin:100% 100%;transform:rotate(270deg)}.si-reset.si-edge-bottom{position:fixed;bottom:0}.si-reset img{display:block;cursor:pointer}.si-reset.preview{position:absolute !important}.si-reset .si-button.with-si-image{-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;-ms-filter:none;filter:none}\n";

    function loadScript(t, e, n) {
      var i = (e = void 0 !== e ? e : document).getElementsByTagName("head")[0]
        , r = e.createElement("script");
      r.type = "text/javascript",
        r.src = t,
        r.onreadystatechange = n,
        r.onload = n,
        i.appendChild(r)
    }

    !function (t, e) {
      "object" == typeof exports && exports && "string" != typeof exports.nodeName ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t.Mustache = {},
        e(t.Mustache))
    }(this, function (t) {
      function e(t) {
        return "function" == typeof t
      }

      function n(t) {
        return m(t) ? "array" : typeof t
      }

      function i(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      }

      function r(t, e) {
        return null != t && "object" == typeof t && e in t
      }

      function o(t, e) {
        return null != t && "object" != typeof t && t.hasOwnProperty && t.hasOwnProperty(e)
      }

      function s(t, e) {
        return v.call(t, e)
      }

      function a(t) {
        return !s(y, t)
      }

      function u(t) {
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return S[t]
        })
      }

      function l(e, n) {
        function r() {
          if (v && !y)
            for (; g.length;)
              delete f[g.pop()];
          else
            g = [];
          v = !1,
            y = !1
        }

        function o(t) {
          if ("string" == typeof t && (t = t.split(b, 2)),
          !m(t) || 2 !== t.length)
            throw new Error("Invalid tags: " + t);
          s = new RegExp(i(t[0]) + "\\s*"),
            u = new RegExp("\\s*" + i(t[1])),
            l = new RegExp("\\s*" + i("}" + t[1]))
        }

        if (!e)
          return [];
        var s, u, l, d = [], f = [], g = [], v = !1, y = !1;
        o(n || t.tags);
        for (var S, k, E, C, x, P, T = new p(e); !T.eos();) {
          if (S = T.pos,
            E = T.scanUntil(s))
            for (var N = 0, D = E.length; N < D; ++N)
              a(C = E.charAt(N)) ? g.push(f.length) : y = !0,
                f.push(["text", C, S, S + 1]),
                S += 1,
              "\n" === C && r();
          if (!T.scan(s))
            break;
          if (v = !0,
            k = T.scan(w) || "name",
            T.scan(_),
            "=" === k ? (E = T.scanUntil(I),
              T.scan(I),
              T.scanUntil(u)) : "{" === k ? (E = T.scanUntil(l),
              T.scan(B),
              T.scanUntil(u),
              k = "&") : E = T.scanUntil(u),
            !T.scan(u))
            throw new Error("Unclosed tag at " + T.pos);
          if (x = [k, E, S, T.pos],
            f.push(x),
          "#" === k || "^" === k)
            d.push(x);
          else if ("/" === k) {
            if (!(P = d.pop()))
              throw new Error('Unopened section "' + E + '" at ' + S);
            if (P[1] !== E)
              throw new Error('Unclosed section "' + P[1] + '" at ' + S)
          } else
            "name" === k || "{" === k || "&" === k ? y = !0 : "=" === k && o(E)
        }
        if (P = d.pop())
          throw new Error('Unclosed section "' + P[1] + '" at ' + T.pos);
        return h(c(f))
      }

      function c(t) {
        for (var e, n, i = [], r = 0, o = t.length; r < o; ++r)
          (e = t[r]) && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1],
            n[3] = e[3]) : (i.push(e),
            n = e));
        return i
      }

      function h(t) {
        for (var e, n = [], i = n, r = [], o = 0, s = t.length; o < s; ++o)
          switch ((e = t[o])[0]) {
            case "#":
            case "^":
              i.push(e),
                r.push(e),
                i = e[4] = [];
              break;
            case "/":
              r.pop()[5] = e[2],
                i = r.length > 0 ? r[r.length - 1][4] : n;
              break;
            default:
              i.push(e)
          }
        return n
      }

      function p(t) {
        this.string = t,
          this.tail = t,
          this.pos = 0
      }

      function d(t, e) {
        this.view = t,
          this.cache = {
            ".": this.view
          },
          this.parent = e
      }

      function f() {
        this.cache = {}
      }

      var g = Object.prototype.toString
        , m = Array.isArray || function (t) {
        return "[object Array]" === g.call(t)
      }
        , v = RegExp.prototype.test
        , y = /\S/
        , S = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      }
        , _ = /\s*/
        , b = /\s+/
        , I = /\s*=/
        , B = /\s*\}/
        , w = /#|\^|\/|>|\{|&|=|!/;
      p.prototype.eos = function () {
        return "" === this.tail
      }
        ,
        p.prototype.scan = function (t) {
          var e = this.tail.match(t);
          if (!e || 0 !== e.index)
            return "";
          var n = e[0];
          return this.tail = this.tail.substring(n.length),
            this.pos += n.length,
            n
        }
        ,
        p.prototype.scanUntil = function (t) {
          var e, n = this.tail.search(t);
          switch (n) {
            case -1:
              e = this.tail,
                this.tail = "";
              break;
            case 0:
              e = "";
              break;
            default:
              e = this.tail.substring(0, n),
                this.tail = this.tail.substring(n)
          }
          return this.pos += e.length,
            e
        }
        ,
        d.prototype.push = function (t) {
          return new d(t, this)
        }
        ,
        d.prototype.lookup = function (t) {
          var n, i = this.cache;
          if (i.hasOwnProperty(t))
            n = i[t];
          else {
            for (var s, a, u, l = this, c = !1; l;) {
              if (t.indexOf(".") > 0)
                for (s = l.view,
                       a = t.split("."),
                       u = 0; null != s && u < a.length;)
                  u === a.length - 1 && (c = r(s, a[u]) || o(s, a[u])),
                    s = s[a[u++]];
              else
                s = l.view[t],
                  c = r(l.view, t);
              if (c) {
                n = s;
                break
              }
              l = l.parent
            }
            i[t] = n
          }
          return e(n) && (n = n.call(this.view)),
            n
        }
        ,
        f.prototype.clearCache = function () {
          this.cache = {}
        }
        ,
        f.prototype.parse = function (e, n) {
          var i = this.cache
            , r = e + ":" + (n || t.tags).join(":")
            , o = i[r];
          return null == o && (o = i[r] = l(e, n)),
            o
        }
        ,
        f.prototype.render = function (t, e, n, i) {
          var r = this.parse(t, i)
            , o = e instanceof d ? e : new d(e);
          return this.renderTokens(r, o, n, t, i)
        }
        ,
        f.prototype.renderTokens = function (t, e, n, i, r) {
          for (var o, s, a, u = "", l = 0, c = t.length; l < c; ++l)
            a = undefined,
              "#" === (s = (o = t[l])[0]) ? a = this.renderSection(o, e, n, i) : "^" === s ? a = this.renderInverted(o, e, n, i) : ">" === s ? a = this.renderPartial(o, e, n, r) : "&" === s ? a = this.unescapedValue(o, e) : "name" === s ? a = this.escapedValue(o, e) : "text" === s && (a = this.rawValue(o)),
            a !== undefined && (u += a);
          return u
        }
        ,
        f.prototype.renderSection = function (t, n, i, r) {
          function o(t) {
            return s.render(t, n, i)
          }

          var s = this
            , a = ""
            , u = n.lookup(t[1]);
          if (u) {
            if (m(u))
              for (var l = 0, c = u.length; l < c; ++l)
                a += this.renderTokens(t[4], n.push(u[l]), i, r);
            else if ("object" == typeof u || "string" == typeof u || "number" == typeof u)
              a += this.renderTokens(t[4], n.push(u), i, r);
            else if (e(u)) {
              if ("string" != typeof r)
                throw new Error("Cannot use higher-order sections without the original template");
              null != (u = u.call(n.view, r.slice(t[3], t[5]), o)) && (a += u)
            } else
              a += this.renderTokens(t[4], n, i, r);
            return a
          }
        }
        ,
        f.prototype.renderInverted = function (t, e, n, i) {
          var r = e.lookup(t[1]);
          if (!r || m(r) && 0 === r.length)
            return this.renderTokens(t[4], e, n, i)
        }
        ,
        f.prototype.renderPartial = function (t, n, i, r) {
          if (i) {
            var o = e(i) ? i(t[1]) : i[t[1]];
            return null != o ? this.renderTokens(this.parse(o, r), n, i, o) : void 0
          }
        }
        ,
        f.prototype.unescapedValue = function (t, e) {
          var n = e.lookup(t[1]);
          if (null != n)
            return n
        }
        ,
        f.prototype.escapedValue = function (e, n) {
          var i = n.lookup(e[1]);
          if (null != i)
            return t.escape(i)
        }
        ,
        f.prototype.rawValue = function (t) {
          return t[1]
        }
        ,
        t.name = "mustache.js",
        t.version = "3.0.1",
        t.tags = ["{{", "}}"];
      var k = new f;
      return t.clearCache = function () {
        return k.clearCache()
      }
        ,
        t.parse = function (t, e) {
          return k.parse(t, e)
        }
        ,
        t.render = function (t, e, i, r) {
          if ("string" != typeof t)
            throw new TypeError('Invalid template! Template should be a "string" but "' + n(t) + '" was given as the first argument for mustache#render(template, view, partials)');
          return k.render(t, e, i, r)
        }
        ,
        t.to_html = function (n, i, r, o) {
          var s = t.render(n, i, r);
          if (!e(o))
            return s;
          o(s)
        }
        ,
        t.escape = u,
        t.Scanner = p,
        t.Context = d,
        t.Writer = f,
        t
    }),
      function () {
        var t = [].slice
          , e = {}.hasOwnProperty;
        this.SI = {
          PRODUCT_HANDLE_REGEX: /\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/,
          $: function (t, e) {
            var n;
            return null == e && (e = document),
              null == t.nodeType || 3 !== (n = t.nodeType) && 9 !== n ? e.querySelector ? e.querySelector(t) : "." === t[0] ? this.findElmByClassName(t.slice(1), e)[0] : "#" === t[0] ? e.getElementById(t.slice(1)) : e.getElementById(t) : t
          },
          findElmByClassName: function (t, e) {
            var n, i, r, o, s;
            for (s = [],
                   i = 0,
                   r = (o = e.getElementsByTagName("*")).length; i < r; i++)
              (n = o[i]).className.match(t) && s.push(n);
            return s
          },
          removeClassName: function (t, e) {
            return "classList" in t ? t.classList.remove(e) : t.className = t.className.replace(RegExp("\\b" + class_name + "\\b", "g"), "")
          },
          isVisible: function (t) {
            return null != t.offsetParent
          },
          extend: function () {
            var n, i, r, o, s, a, u;
            for (o = arguments[0],
                   n = 0,
                   r = (a = 2 <= arguments.length ? t.call(arguments, 1) : []).length; n < r; n++) {
              s = a[n];
              for (i in s)
                e.call(s, i) && ((u = s[i]) instanceof Array ? o[i] = u.slice(0) : null == o[i] || "[object Object]" !== Object.prototype.toString.call(u) ? o[i] = u : o[i] = this.extend(o[i], u))
            }
            return o
          },
          defer: function (t, e) {
            return setTimeout(e, t)
          },
          log: function (t) {
            return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("[Back in Stock] " + t) : void 0
          },
          windowSize: function () {
            return {
              width: window.innerWidth || document.documentElement.clientWidth,
              height: window.innerHeight || document.documentElement.clientHeight
            }
          },
          css: function (t, e) {
            var n, i;
            for (n in e)
              i = e[n],
                t.style[n] = i;
            return t
          },
          injectCSS: function (t) {
            var e;
            return e = document.createElement("style"),
              document.getElementsByTagName("head")[0].appendChild(e),
              e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
          },
          urlIsProductPage: function () {
            return null != decodeURIComponent(window.location.pathname).match(this.PRODUCT_HANDLE_REGEX)
          },
          toQueryString: function (t, e) {
            var n, i, r, o;
            i = [];
            for (n in t)
              o = t[n],
              e && (n = e + "[" + n + "]"),
                r = "object" == typeof o ? this.toQueryString(o, n) : n + "=" + encodeURIComponent(o),
                i.push(r);
            return i.join("&")
          },
          urlParamsToObject: function () {
            var t, e, n, i, r;
            for (r = {},
                   n = 0,
                   i = (e = location.search.substr(1).split("&")).length; n < i; n++)
              r[(t = e[n].split("="))[0]] = t[1];
            return r
          },
          urlParam: function (t) {
            return this.urlParamsToObject()[t] || null
          },
          request: function (t, e) {
            var n, i, r, o, s, a;
            if (null == e && (e = {}),
              o = SI.extend({
                method: "GET"
              }, e),
              a = new XMLHttpRequest,
              i = new SI.Promise,
              a.onreadystatechange = function () {
                if (4 === a.readyState)
                  return i.resolve(!(200 === a.status), a.responseText)
              }
              ,
              a.open(o.method, t, !0),
            null != e.headers) {
              r = e.headers;
              for (n in r)
                s = r[n],
                  a.setRequestHeader(n, s)
            }
            return a.send(o.data),
              i
          },
          submitNotificationData: function (url, data) {
            var xmlhttp = new XMLHttpRequest();
            var i = new SI.Promise;
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState === 4) { //XMLHttpRequest.DONE
                if (xmlhttp.status === 200) {
                  return i.resolve(!(200 === xmlhttp.status), xmlhttp.responseText)
                }
              }
            };

            xmlhttp.open("GET", url + '?' + SI.toQueryString(data), true);
            xmlhttp.send();
            return i;
          },
          requestJSONP: function (t, e) {
            var n, i, r, o;
            o = document.createElement("script"),
              i = "JSONP" + (new Date).getTime(),
              r = new SI.Promise;
            for (n in e)
              e[n],
              n + "=" + e;
            return null == window._SI && (window._SI = {}),
              window._SI[i] = function (t) {
                return delete SI[i],
                  r.resolve(t)
              }
              ,
              o.src = t + "?callback=_SI." + i + "&" + SI.toQueryString(e),
              document.getElementsByTagName("head")[0].appendChild(o),
              r
          },
          parseJSON: function (t) {
            if ("string" == typeof t) {
              if (window.JSON && window.JSON.parse)
                return window.JSON.parse(t);
              if (t = t.replace(/^\s+|\s+$/g, ""),
                !/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                throw "Invalid JSON";
              return new Function("return " + t)()
            }
          },
          on: function (t, e, n) {
            return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
          },
          domReady: function () {
            var t;
            return null == this._domReadyPromise && (this._domReadyPromise = new SI.Promise,
              "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", (t = this,
                  function () {
                    return t._domReadyPromise.resolve(t)
                  }
              )) : this._domReadyPromise.resolve()),
              this._domReadyPromise
          },
          preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
              t
          },
          jsonFromParams: function (t) {
            var e, n, i, r, o;
            for (o = {},
                   n = 0,
                   r = (e = t.split("&")).length; n < r; n++)
              o[(i = e[n].split("="))[0]] = i[1];
            return JSON.stringify(o)
          },
          execute: function (t) {
            var e, n, i, r;
            try {
              return t()
            } catch (o) {
              return n = o,
                i = SI.Config.app_hostname || "back-in-stock.appikon.com",
                r = "https://" + i + "/events/api",
                e = {
                  event: {
                    message: n.message,
                    stack: n.stack
                  }
                },
                SI.request(r, {
                  method: "POST",
                  data: SI.toQueryString(e)
                })
            }
          },
          helpers: {
            smallProductImage: function () {
              return function (t, e) {
                var n;
                return e((n = t.split(".")).slice(0, n.length - 1).join(".") + "_small." + n.slice(-1))
              }
            }
          },
          createPopover: function (t) {
            var e;
            return null == t && (t = {}),
              e = SI.extend(SI.Config, "undefined" != typeof _SIConfig && null !== _SIConfig ? _SIConfig : {}, t),
              new SI.Popover(e)
          },
          genericTriggerHandler: function (t) {
            var e, n, i, r, o, s;
            if (null != (o = ((t = t || window.event).target || t.srcElement).className) && "function" == typeof o.match ? o.match(/SI_trigger/) : void 0) {
              if (SI.preventDefault(t),
                this.popovers = this.popovers || {},
                r = t.target.getAttribute("data-product-data"),
                s = t.target.getAttribute("data-variant-id"),
                r)
                try {
                  i = JSON.parse(r)
                } catch (a) {
                  t = a,
                    SI.log("Could not parse product data: " + t.message)
                }
              return e = (null != i ? i.handle : void 0) || t.target.getAttribute("data-product-handle"),
                (n = this.popovers[e] || (this.popovers[e] = SI.createPopover({
                  productHandle: e,
                  product: i,
                  button: {
                    visible: !1
                  }
                }))).ready.then(function () {
                  return SI.defer(13, function () {
                    return n.form.show({
                      variantId: s
                    })
                  })
                })
            }
          },
          create: function (t, e, n, i) {
            return null == n && (n = ""),
            null == i && (i = {}),
            null == this._base && (this._base = new SI.Base,
                this._base.onError = function () {
                }
                ,
                this._base.onSuccess = function () {
                }
            ),
              this._base.create(t, e, n, i)
          },
          init: function () {
            var t;
            if (t = window._siq || [],
              window._siq = (new SI.CmdQueue).push.apply(this, t),
            !0 === SI.Config.generic_trigger_handler && SI.on(document, "click", SI.genericTriggerHandler),
              window.SIMobiliaForm = SI.MobiliaForm,
              SI.urlIsProductPage())
              return SI.popup = SI.createPopover(),
                window.SIPopover = SI.popup
          }
        }
      }
        .call(this),
      function () {
        var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
              if (e in this && this[e] === t)
                return e;
            return -1
          }
        ;
        SI.Base = function () {
          function e(t) {
            null == t && (t = SI.Config),
              this.settings = SI.extend({
                position_left: !0,
                button_url: "//" + t.app_hostname + "/images/content/notify_btn.png"
              }, t),
              this._variantsByTitle = {},
              this._variantsById = {},
              this.productHandle = this.settings.productHandle,
              this.product = this.settings.product,
              this.ajaxOpts = {
                url: "https://" + t.app_hostname + "/prod/api"
              }
          }

          return e.prototype.variantIsUnavailable = function (e) {
            var n;
            return this.variantSoldOut(e) && this.variantMeetsInventoryManagementPolicy(e) && this.variantMeetsPreorderPolicy(e) && (n = this.settings.hide_for_product_tag,
            t.call(this.product.tags, n) < 0) && this.showForCollections(this.product.collections)
          }
            ,
            e.prototype.variantSoldOut = function (t) {
              1 !== this.settings.instock_qty_level && !1 === this.settings.preorder_enabled && SI.log("Warning: Show for preorder is off: ignoring custom instock_qty_level setting.");
              if (null != t.inventory_quantity) {
                return t.inventory_quantity < this.settings.instock_qty_level
              } else {
                if (this.settings.preorder_enabled == true) {
                  return true;
                }
                //!0 === this.settings.preorder_enabled && SI.log("Warning: inventory_quantity not available but show for preorder is enabled.");
                !1 === this.settings.instock_qty_level && SI.log("Warning: instock_qty_level is set but inventory_quantity not available.");
                return !1 === t.available
              }
            }
            ,
            e.prototype.variantMeetsInventoryManagementPolicy = function (t) {
              return !this.settings.require_inventory_management || t.inventory_management && t.inventory_management.length > 0
            }
            ,
            e.prototype.variantMeetsPreorderPolicy = function (t) {
              return !!this.settings.preorder_enabled || !1 === t.available
            }
            ,
            e.prototype.showForCollections = function (t) {
              if(t && t.length && this.settings.hide_for_collections) {
                for (i=0; i < t.length ; i++) {
                  if(this.settings.hide_for_collections.indexOf(t[i].id) > -1) {
                    return false;
                  }
                }
              }
              return true;
            }
            ,
            e.prototype.filterDuplicateSKUs = function (t) {
              var e, n, i, r, o, s;
              for (r = {},
                     o = function (t) {
                       var e;
                       return !((null != (e = s.sku) ? e.length : void 0) > 0) || null == r[t] && ((r[t] = 1) && !0)
                     }
                     ,
                     i = [],
                     e = 0,
                     n = t.length; e < n; e++)
                o((s = t[e]).sku) && i.push(s);
              return i
            }
            ,
            e.prototype.getProducts = function () {
              var t, e, n, i;
              return this.ready = new SI.Promise,
                n = this,
                t = function () {
                  if (n.processProductVariants(n.product),
                  n.variants.length > 0)
                    return n.ready.resolve(n.variants)
                }
                ,
                this.product ? t() : (e = this._productDataURL()) && SI.request(e).then((i = this,
                    function (e, n) {
                      return e ? SI.log("SI.Base: error loading product data (" + n + ")") : (i.product = SI.parseJSON(n),
                        t())
                    }
                )),
                this.ready
            }
            ,
            e.prototype.processProductVariants = function (t) {
              var e, n, i, r, o;
              for (e = 0,
                     n = (i = t.variants).length; e < n; e++)
                r = i[e],
                  this._variantsByTitle[r.title] = SI.extend({}, r),
                  this._variantsById[r.id] = SI.extend({}, r);
              if (this.variants = function () {
                var t, e, n, i;
                for (i = [],
                       t = 0,
                       e = (n = this.product.variants).length; t < e; t++)
                  o = n[t],
                  this.variantIsUnavailable(o) && i.push(o);
                return i
              }
                .call(this),
              !0 === this.settings.ignore_duplicate_skus)
                return this.variants = this.filterDuplicateSKUs(this.variants)
            }
            ,
            e.prototype.create = function (email, e, productId, stockNotificationRequestDetails) {
              var finalRequestObj, s;
              var mainThis = this;

              null == productId && (productId = this.product.id);
              null == stockNotificationRequestDetails && (stockNotificationRequestDetails = {});

              SI.extend(this.ajaxOpts, {
                key: "callback"
              });

              var requestObj = {
                product_no: productId,
                quantity_required: stockNotificationRequestDetails.quantity_required || 1,
                accepts_marketing: stockNotificationRequestDetails.accepts_marketing || !1,
                customer_utc_offset: 60 * (new Date).getTimezoneOffset()
              };

              if (stockNotificationRequestDetails.customer_name) {
                requestObj.customer_name = stockNotificationRequestDetails.customer_name;
              }

              var variant_title = undefined;
              var variant_sku = undefined;
              if (this.product !== undefined) {
                requestObj['product_title'] = this.product.title;
                requestObj['product_vendor'] = this.product.vendor;
                requestObj['product_handle'] = this.product.handle;

                var variant = this.product.variants.find(variant => {
                    return variant.id == parseInt(e)
                });
                variant_title = variant.title;
                variant_sku = variant.sku;
              }

              null != email && (requestObj.email = email);

              if(stockNotificationRequestDetails.pushSubscriptionToken) {
                requestObj.pushSubscriptionToken = stockNotificationRequestDetails.pushSubscriptionToken;
              }

              null != stockNotificationRequestDetails.phone_number && (requestObj.phone_number = stockNotificationRequestDetails.phone_number);
              finalRequestObj = {
                shop: this.settings.shop,
                notification: requestObj,
                variant: {
                  variant_no: e
                }
              };

              if (variant_title !== undefined) {
                finalRequestObj.variant['variant_title'] = variant_title
              }
              if (variant_sku !== undefined) {
                finalRequestObj.variant['sku'] = variant_sku
              }

              null != stockNotificationRequestDetails.recaptcha_response && (finalRequestObj.recaptcha_response = stockNotificationRequestDetails.recaptcha_response);

              return SI.submitNotificationData(this.ajaxOpts.url, finalRequestObj).then((
                  function (st, resp) {
                    resp = SI.parseJSON(resp);
                    return "OK" === resp.status ? mainThis.onSuccess(resp) : mainThis.onError(resp)
                  }
              ))
            }
            ,
            e.prototype._productDataURL = function () {
              var t;
              if (t = this.productHandle || this._parseProductHandleFromURL())
                return "//" + window.location.hostname + "/products/" + t + ".js"
            }
            ,
            e.prototype._parseProductHandleFromURL = function () {
              var t;
              return (t = decodeURIComponent(window.location.pathname).match(SI.PRODUCT_HANDLE_REGEX)) && t[1]
            }
            ,
            e
        }()
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        };
        SI.CmdQueue = function () {
          function e() {
            this.push = t(this.push, this)
          }

          return e.prototype.push = function () {
            var t, e, n;
            for (t = 0,
                   n = arguments.length; t < n; t++)
              "function" == typeof (e = arguments[t]) && e();
            return this
          }
            ,
            e
        }()
      }
        .call(this),
      function () {
        SI.detectVariant = function (popup) {
          var e, n, i, r;
          i = SI.urlParam("variant");
          if (i) {
            return popup._variantsById[i]
          } else {

            r = function () {
              var t, n, i, r, s;
              i = document.querySelectorAll("select.single-option-selector");
              s = [];

              var singleOptionSelector = SI.$("select.single-option-selector");
              if (singleOptionSelector != null && singleOptionSelector.selectedIndex != null && singleOptionSelector.selectedIndex !== -1) {
                s.push(singleOptionSelector[singleOptionSelector.selectedIndex].value)
              } else {
                s.push(void 0);
              }

              return s
            }();
            n = popup._variantsByTitle[r.join(" / ")]
            if (n) {
              return n;
            } else {
              
              if (false === popup.product.available) {
                return popup.product.variants[0];
              } else {
                var variant = SI.Config.product?.selected_or_first_available_variant;
                if (variant && variant.inventory_quantity != null) {
                  if (variant.inventory_quantity < popup.settings.instock_qty_level && popup.settings.preorder_enabled) {
                    return variant;
                  } else {
                    return void 0;
                  }
                } else {
                  return void 0;
                }
              }
            }
          }
        }
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        };
        SI.Button = function () {
          function e(e, n) {
            var i, r, o, s, a, u, l, c, h, p;
            this.settings = e,
              this.delegate = n,
              this.hide = t(this.hide, this),
              this.show = t(this.show, this),
              this.toggle = t(this.toggle, this),
              this.click = t(this.click, this),
            null == (i = this.settings).caption && (i.caption = "NOTIFY WHEN AVAILABLE"),
            null == (r = this.settings).bold && (r.bold = !0),
            null == (o = this.settings).position && (o.position = "right-top"),
            null == (s = this.settings).font_size && (s.font_size = 16),
            null == (a = this.settings).background_color && (a.background_color = "#46B941"),
            null == (u = this.settings).text_color && (u.text_color = "#FFF"),
            null == (l = this.settings).border_color && (l.border_color = "#3DA439"),
            null == (c = this.settings).border_width && (c.border_width = 1),
            null == (h = this.settings).border_radius && (h.border_radius = 3),
            null == (p = this.settings).corner_offset && (p.corner_offset = 100),
              this.ready = new SI.Promise,
              this.render()
          }

          return e.prototype.render = function () {
            var t, e, n, i, r, o;
            return i = new SI.Promise,
              this.wrap = document.createElement("div"),
              t = (n = this.settings.position.split("-"))[0],
              e = n[1],
              r = "",
            !1 === this.settings.use_image && ("left-top" === this.settings.position ? r = "si-rotate-90" : "right-top" === this.settings.position && (r = "si-rotate-270")),
              this.wrap.className = "si-reset si-edge-" + t + " si-edge-" + e + " " + r,
              this.elm = this.settings.use_image ? this.buildImage(i) : this.buildButton(i),
              this.wrap.appendChild(this.elm),
              SI.injectCSS(SI.css_reset),
              (this.settings.container || document.getElementsByTagName("body")[0]).appendChild(this.wrap),
              this.setOffsetPosition(e, r),
              SI.on(this.wrap, "click", this.click),
              i.then((o = this,
                  function () {
                    return o.ready.resolve()
                  }
              ))
          }
            ,
            e.prototype.buildButton = function (t) {
              var e, n, i, r;
              return (n = document.createElement("div")).className = "si-button SI_trigger",
                "textContent" in n ? n.textContent = this.settings.caption : n.innerText = this.settings.caption,
                e = {
                  background: this.settings.background_color,
                  color: this.settings.text_color,
                  padding: "0.7em 1.3em",
                  border: "solid " + this.settings.border_color,
                  "font-weight": !0 === this.settings.bold ? "bold" : void 0,
                  "font-size": this.settings.font_size + "px"
                },
                r = this.settings.border_width,
                e["border-width"] = r + "px " + r + "px 0 " + r + "px",
                i = this.settings.border_radius,
                e["border-radius"] = i + "px " + i + "px 0 0",
                SI.css(n, e),
                t.resolve(),
                n
            }
            ,
            e.prototype.buildImage = function (t) {
              var e;
              return (e = document.createElement("img")).className = "si-image SI_trigger",
                e.src = this.settings.image,
                e.onload = function () {
                  return t.resolve()
                }
                ,
                e
            }
            ,
            e.prototype.setOffsetPosition = function (t, e) {
              var n, i;
              return i = {},
                n = this.settings.corner_offset,
              "top" === t && !0 === e && (n -= this.elm.offsetHeight),
                i[t] = n + "px",
                SI.css(this.wrap, i)
            }
            ,
            e.prototype.click = function (t) {
              var e;
              return e = this.elm.getAttribute("data-variant-id"),
                SI.preventDefault(t),
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
                this.delegate.isOpen ? this.delegate.hide() : this.delegate.show({
                  variantId: e
                })
            }
            ,
            e.prototype.toggle = function (t) {
              null == t && (t = this.elm.isOpen);
              if (this.settings.always_show_widget) {
                this.elm.style.display = "block";
              } else {
                this.elm.style.display = t ? "block" : "none";
              }
              return this
            }
            ,
            e.prototype.show = function () {
              return this.toggle(!0)
            }
            ,
            e.prototype.hide = function () {
              return this.toggle(!1)
            }
            ,
            e
        }()
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        }
          , e = {}.hasOwnProperty;
        SI.Form = function () {
          function n(e, n) {
            if(typeof jQuery !== 'undefined'){
              var iframe=jQuery("#SI_frame")
              if(iframe.length!==0){
                iframe[0].remove();
              }
            }
            var i, r, o, s, a, u, l;
            this.popover = e,
              this.submitButton = t(this.submitButton, this),
              this.showMessage = t(this.showMessage, this),
              this.reset = t(this.reset, this),
              this.toggleComplete = t(this.toggleComplete, this),
              this.submit = t(this.submit, this),
              this.hide = t(this.hide, this),
              this.show = t(this.show, this),
              this.blurEmailField = t(this.blurEmailField, this),
              this.focusEmailField = t(this.focusEmailField, this),
              this.injectCSS = t(this.injectCSS, this),
              this.isOpen = !1,
              this.pushSubscriptionToken = null,
              i = {
                id: "SI_frame",
                frameBorder: 0,
                src: "about:blank",
                allowTransparency: !0
              },
              r = {
                background: "none",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                border: "0",
                overflow: "hidden",
                display: "none"
              },
              s = 999999,
              a = SI.extend({}, r, {
                left: 0,
                width: "100%",
                "z-index": s + 1
              }),
              a = SI.extend({}, a, this.popover.settings.iframe_css),
              this.injectCSS(this.renderCSS(i.id, a) + n),
              this.frame = document.createElement("iframe");
            for (o in i)
              u = i[o],
                this.frame.setAttribute(o, u);
            SI.defer(50, (l = this,
                function () {
                  var t;
                  return t = SI.extend({
                    quantity_field_enabled: l.popover.settings.quantity_field_enabled
                  }, l.popover.settings.labels),
                    l.render(l.popover.product, t)
                }
            )),
              (this.popover.settings.root || document.getElementsByTagName("body")[0]).appendChild(this.frame)
          }

                    var i, r, o;
                    n.prototype.renderFinally = function (iframeElem, templateVars, partials) {
                        var mainThis = this;
                        iframeElem.open();
                        iframeElem.write(Mustache.render(popupFormTemplate, templateVars, partials));
                        iframeElem.close();

                        SI.on(iframeElem.getElementsByTagName("form")[0], "submit", this.submit);

                        iframeElem.getElementById("enable_push_notification") && SI.on(iframeElem.getElementById("enable_push_notification"), "change", function () {
                            if (this.checked) {
                                SI.log('checked');
                                this.checked = false;
                                var localThis = this;
                                if (window.pushowl) {
                                    var registerForEvent = pushowl.registerForEvent('back_in_stock', true);
                                    registerForEvent.then(function (fulfilled) {
                                        SI.log('fullfilled');
                                        localThis.checked = true;
                                        mainThis.pushSubscriptionToken = fulfilled.pushowl_subscriber_token;
                                        SI.log(mainThis.pushSubscriptionToken);
                                    }).catch(function (error) {
                                        SI.log('failed');
                                        localThis.checked = false;
                                        mainThis.pushSubscriptionToken = null;
                                        SI.log(mainThis.pushSubscriptionToken);
                                    });
                                }
                            } else {
                                SI.log('unchecked');
                                mainThis.pushSubscriptionToken = null;
                            }
                        });

            this.backdrop = SI.$("body", iframeElem);

            var onClose = function (t) {
              if ((t.target || t.srcElement).className.indexOf("action-close") > -1) {
                SI.preventDefault(t);
                return mainThis.hide()
              }
            };
            SI.on(iframeElem, "click", onClose);
            SI.on(iframeElem, "touchend", onClose);

            if (this.popover.settings.show_phone_number_field) {
              var smsSupportDetails = {
                preferredCountries: this.popover.settings.preferredCountries,
                utilsScript: o
              };
              return loadScript(r, this.frameDoc(), (function () {
                  return mainThis.intlTelInput = mainThis.frame.contentWindow.intlTelInput(mainThis.frameDoc().querySelector("#phone-number input"), smsSupportDetails)
                }
              ))
            }
          };
          return n.prototype.ACTIVE_CLASS_NAME = "si-popover-active",
            r = (i = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input") + "/17.0.5/js/intlTelInput.min.js",
            o = i + "/16.0.2/js/utils.js",
            n.prototype.frameDoc = function () {
              return this.frame.contentDocument || this.frame.contentWindow.document
            }
            ,
            n.prototype.emailField = function () {
              return this.frameDoc().querySelector("#email-address input")
            }
            ,
            n.prototype.mobileDevice = function () {
              return "absolute" === ("function" == typeof window.getComputedStyle ? window.getComputedStyle(this.frame).getPropertyValue("position") : void 0)
            }
            ,
            n.prototype.renderCSS = function (t, n) {
              var i, r;
              return "#" + t + " { " + function () {
                var t;
                t = [];
                for (i in n)
                  e.call(n, i) && (r = n[i],
                    t.push(i + ": " + r + ";"));
                return t
              }().join("\n") + " }\n"
            }
            ,
            n.prototype.injectCSS = function (t) {
              return this.styleElm = document.createElement("style"),
                document.getElementsByTagName("head")[0].appendChild(this.styleElm),
                this.styleElm.styleSheet ? this.styleElm.styleSheet.cssText = t : this.styleElm.appendChild(document.createTextNode(t)),
                this.styleElm
            }
            ,
            n.prototype.selectVariant = function (t) {
              var e, n, i, r, o, s;
              if (null != t)
                for (t = parseInt(t, 10),
                       e = n = 0,
                       i = (o = (s = SI.$("#variants", this.frameDoc())).options).length; n < i; e = ++n)
                  if (r = o[e],
                  parseInt(r.value, 10) === t)
                    return s.selectedIndex = e
            }
            ,
            n.prototype.focusEmailField = function () {
              var t, e;
              try {
                if ((e = this.emailField()) && "focus" in e)
                  return e.focus()
              } catch (n) {
                return t = n,
                  SI.log(null != t ? t.message : void 0)
              }
            }
            ,
            n.prototype.blurEmailField = function () {
              var t, e;
              try {
                if ((e = this.emailField()) && "blur" in e)
                  return e.blur()
              } catch (n) {
                return t = n,
                  SI.log(null != t ? t.message : void 0)
              }
            }
            ,
            n.prototype.show = function (t) {
              var e;
              return null == t && (t = {}),
              "variantId" in t && this.selectVariant(t.variantId),
                this.frame.style.display = "block",
                SI.defer(130, (e = this,
                    function () {
                      return e.backdrop.className += " fadein",
                        SI.defer(100, e.focusEmailField)
                    }
                )),
                SI.$("body").className += " " + this.ACTIVE_CLASS_NAME,
              !0 === this.mobileDevice() && (this.frame.style.height = this.frame.parentElement.scrollHeight + "px"),
                this.isOpen = !0,
                this
            }
            ,
            n.prototype.hide = function () {
              return this.isOpen = !1,
                this.backdrop.className = this.backdrop.className.replace(/fadein/, ""),
                document.getElementsByTagName("body")[0].style.overflow = "",
                this.blurEmailField(),
                SI.removeClassName(SI.$("body"), this.ACTIVE_CLASS_NAME),
                this.frame.style.display = "none",
                this.reset(),
                this.frame
            }
            ,
            n.prototype.render = function (t, e) {
              var onClose, iframeElem, smsSupportDetails, a, partials, l, templateVars;
              var mainThis = this;

              templateVars = SI.extend({}, e, SI.helpers, {
                product: SI.extend(t, {
                  variants: this.popover.variants
                }),
                unavailableVariants: this.popover.variants,
                styles: this.popover.settings.styles,
                single_variant_product: 1 === function () {
                  var variantArray;
                  variantArray = [];
                  for (a in this.popover._variantsById) {
                    variantArray.push(a);
                  }
                  return variantArray
                }
                  .call(this).length,
                popup_theme: this.popover.settings.popup_theme,
                popup_js: this.popover.settings.popup_js,
                is_default_variant: 1 === this.popover.variants.length && ("Default" === (l = this.popover.variants[0].title) || "Default Title" === l || "DEFAULT TITLE" === l),
                madeby_link_visible: this.popover.settings.madeby_link_visible,
                customer: this.popover.settings.customer,
                content_for_body: this.popover.settings.content_for_body,
                shop_myshopify_domain: this.popover.settings.shop,
                show_phone_number_field: this.popover.settings.show_phone_number_field,
                customer_name_enabled: this.popover.settings.customer_name_enabled,
                only_sms_enabled: this.popover.settings.only_sms_enabled,
                show_sms_first: this.popover.settings.show_sms_first,
                show_fb: this.popover.settings.show_fb,
                newsletter_permission_enabled: this.popover.settings.newsletter_permission_enabled,
                newsletter_permission_default_checked: this.popover.settings.newsletter_permission_default_checked,
                newsletter_permission_text: this.popover.settings.newsletter_permission_text,
                push_owl_enabled: false,
                fb_page_id: this.popover.settings.fb_page_id,
                show_terms_and_conditions: this.popover.settings.show_terms_and_conditions,
                terms_and_condtions_text: this.popover.settings.terms_and_condtions_text
              });
              partials = SI.Config.partials;
              iframeElem = this.frameDoc();

              if (this.popover.settings.push_owl_enabled && window.pushowl) {
                window.pushowl.isEnabled().then(function (res) {
                  SI.log(JSON.stringify(res));
                  templateVars.push_owl_enabled = true;
                  return mainThis.renderFinally(iframeElem, templateVars, partials);
                }).catch(function (error) {
                  templateVars.push_owl_enabled = false;
                  return mainThis.renderFinally(iframeElem, templateVars, partials);
                })
              } else {
                return this.renderFinally(iframeElem, templateVars, partials);
              }
            }
            ,
            n.prototype.renderDone = function () {
              return this.toggleComplete(),
                SI.defer(1e4, (t = this,
                    function () {
                      return t.hide
                    }
                ));
              var t
            }
            ,
            n.prototype.submit = function (t) {
              var e, stockNotificationRequestDetails, emailFinal, r, o, s, a, email;


              SI.preventDefault(t);
              this.reset();
              this.submitButton().setAttribute("disabled", "disabled");
              var options = SI.$("#variants", this.frameDoc()).getElementsByTagName("option");
              var productInfo = function () {
                var validOptions = [];
                var optionsLength = options.length;
                for (var t = 0; t < optionsLength; t++) {
                  r = options[t];
                  r.selected && validOptions.push(r);
                }
                return validOptions
              }()[0];
              s = SI.$("#quantity_required", this.frameDoc());
              e = SI.$("#customer_accepts_marketing", this.frameDoc());
              a = SI.$("#g-recaptcha-response", this.frameDoc());
              tc  =  SI.$("#acceptTermsAndConditionsForPopupForm", this.frameDoc());

              if (!this.popover.settings.recaptcha_enabled || (null != a ? a.value : void 0)) {
                stockNotificationRequestDetails = {
                  quantity_required: (null != s ? s.value : void 0) || 1,
                  accepts_marketing: !0 === (null != e ? e.checked : void 0),
                  recaptcha_response: null != a ? a.value : void 0,
                  pushSubscriptionToken: this.pushSubscriptionToken,
                };

                if(this.popover.settings.customer_name_enabled){
                  name = SI.$("#appikon-bis-popup-form-name", this.frameDoc())?.value;
                  stockNotificationRequestDetails.customer_name=name
                }

                email = this.emailField();
                emailFinal = (null != email ? email.value : void 0) || null;

                if (this.popover.settings.show_phone_number_field) {
                  o = SI.$("#phone-number", this.frameDoc());
                  if (SI.isVisible(o)) {
                    stockNotificationRequestDetails.phone_number = this.intlTelInput.getNumber();
                    emailFinal = null;
                  }
                }
                if(this.popover.settings.show_terms_and_conditions == true){         
                   var isTcAccepted =  !0 === (null != tc ? tc.checked : void 0);
                   if(isTcAccepted === false){
                    this.showMessage("Please accept Terms And Conditions");
                    return;
                   }

                }

                if (!emailFinal && !stockNotificationRequestDetails.phone_number && !stockNotificationRequestDetails.pushSubscriptionToken) {
                  this.showMessage(SI.Config.labels.empty_email_phone_validation_message);
                return;
                } else {
                  return this.popover.create(emailFinal, productInfo.value, null, stockNotificationRequestDetails);
                }
              }

              this.showMessage("Please solve the CAPTCHA to proceed.")
            }
            ,
            n.prototype.toggleComplete = function (t) {
              var e;
              return null == t && (t = !0),
                e = SI.$("#container", this.frameDoc()),
                this.submitButton().removeAttribute("disabled"),
                t ? e.className += " complete" : e.className = e.className.replace(/complete/g, ""),
                this
            }
            ,
            n.prototype.reset = function () {
              return this.showMessage(""),
                this.toggleComplete(!1)
            }
            ,
            n.prototype.showMessage = function (t, e) {
              var n;
              return null == e && (e = "#message_holder"),
                n = SI.$(e, this.frameDoc()),
                this.submitButton().removeAttribute("disabled"),
                t && t.length > 0 ? n.innerHTML = Mustache.render('<p class="alert alert-danger">{{message}}</p>', {
                  message: t
                }) : n.innerHTML = ""
            }
            ,
            n.prototype.submitButton = function () {
              return this._submitButton || (this._submitButton = SI.$("[type=submit]", this.frameDoc()))
            }
            ,
            n
        }()
      }
        .call(this),
      function () {
        var t = function (t, n) {
          function i() {
            this.constructor = t
          }

          for (var r in n)
            e.call(n, r) && (t[r] = n[r]);
          return i.prototype = n.prototype,
            t.prototype = new i,
            t.__super__ = n.prototype,
            t
        }
          , e = {}.hasOwnProperty;
        SI.MobiliaForm = function (e) {
          function n(t, e) {
            var i;
            this.formEl = t,
            null == e && (e = SI.Config),
              n.__super__.constructor.call(this, e),
              this.productId = this.formEl.parentNode.getAttribute("id").split("-").slice(-1)[0],
              i = {
                accepts_marketing: null != this.acceptsMarketingState() ? this.acceptsMarketingState() : null,
                quantity_required: null != this.quantity_required() ? this.quantity_required() : null
              },
              this.create(this.email(), this.variant(), this.productId, i)
          }

          return t(n, e),
            n.prototype.email = function () {
              return $(this.formEl).find('[name="contact[email]"]').val()
            }
            ,
            n.prototype.acceptsMarketingState = function () {
              var t;
              if ((t = $(this.formEl).find('[name="customer_accepts_marketing"]')).is(":checked"))
                return t.val()
            }
            ,
            n.prototype.quantity_required = function () {
              var t;
              if (null != (t = $(this.formEl).find('[name="qty_required"]'))[0])
                return t.val()
            }
            ,
            n.prototype.variant = function () {
              var t;
              return null != (t = $(this.formEl).closest(".product-" + this.productId).find("[name=id]"))[0] ? t.val() : (t = $("#product-form-" + this.productId + " [name=id], #product-form-" + this.productId + " input[name=id], #product-select-" + this.productId).eq(0).val()) || $(this.formEl).data("first-variant")
            }
            ,
            n.prototype.onError = function (t) {
              var e, n;
              return n = function () {
                var n;
                n = [];
                for (e in t.errors)
                  n.push(t.errors[e].join());
                return n
              }(),
                this.render(t.status.toLowerCase(), n.join(" "))
            }
            ,
            n.prototype.onSuccess = function (t) {
              return this.render(t.status.toLowerCase(), t.message)
            }
            ,
            n.prototype.render = function (t, e) {
              return null == t && (t = ""),
              null == e && (e = ""),
                $(this.formEl).find(".SI_response").html($("<span>", {
                  "class": t,
                  html: e
                }))
            }
            ,
            n
        }(SI.Base)
      }
        .call(this),
      function () {
        var t = function (t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        }
          , e = function (t, e) {
          function i() {
            this.constructor = t
          }

          for (var r in e)
            n.call(e, r) && (t[r] = e[r]);
          return i.prototype = e.prototype,
            t.prototype = new i,
            t.__super__ = e.prototype,
            t
        }
          , n = {}.hasOwnProperty;
        SI.Popover = function (n) {
          function i(e) {
            var n, r, o, s;
            null == e && (e = SI.Config),
              this.toggle = t(this.toggle, this),
              this.createUI = t(this.createUI, this),
              this.triggerHandler = t(this.triggerHandler, this),
              this.variantChanged = t(this.variantChanged, this),
              n = {
                trigger: "SI_trigger"
              },
              this.settings = SI.extend(n, e),
              i.__super__.constructor.call(this, this.settings),
            this.settings.trigger && SI.on(document, "click", this.triggerHandler),
              this.getProducts().then((s = this,
                  function () {
                    return s.createUI()
                  }
              )),
            null != this.settings.multivariantDropdownContainer && !0 === (null != (o = this.settings.button) ? o.visible : void 0) && (r = SI.$(this.settings.multivariantDropdownContainer)) && SI.on(r, "change", this.variantChanged)
          }

          return e(i, n),
            i.prototype.create = function (t, e, n, r) {
              return null == n && (n = this.product.id),
              null == r && (r = {}),
              this.settings.reCAPTCHAEnabled && this.form.frame.contentWindow.grecaptcha.reset(),
                i.__super__.create.apply(this, arguments)
            }
            ,
            i.prototype.variantChanged = function () {
              var t, e, n, i;
              if (e = SI.$("[name=id]", SI.$(this.settings.multivariantDropdownContainer)),
                t = null,
              null != (t = (i = SI.detectVariant(this)) ? i.id : e ? "SELECT" === e.nodeName && e.selectedIndex >= 0 ? e.children[e.selectedIndex].value : e.value : null != (n = this.product.variants[0]) ? n.id : void 0))
                return this.toggleForVariant(t)
            }
            ,
            i.prototype.triggerHandler = function (t) {
              var e, n;
              for (e = t.target || t.srcElement,
                     n = []; e;) {
                if (null != e.getAttribute && (e.getAttribute("id") === this.settings.trigger || e.getAttribute("className") === this.settings.trigger)) {
                  SI.preventDefault(t),
                    this.form.selectVariant(e.getAttribute("data-variant-id")),
                    this.toggle();
                  break
                }
                n.push(e = e.parentNode)
              }
              return n
            }
            ,
            i.prototype.createUI = function () {
              if (this.form = new SI.Form(this, this.settings.mobile_css),
              !0 === this.settings.button.visible)
                return this.button = new SI.Button(this.settings.button, this.form),
                  this.button.ready.then((t = this,
                      function () {
                        return null != t.settings.multivariantDropdownContainer ? t.variantChanged() : t.button.toggle(t.variants.length > 0)
                      }
                  ));
              var t
            }
            ,
            i.prototype.toggle = function (t) {
              return null == t && (t = this.form.isOpen),
                t ? this.hide() : this.show(),
                this
            }
            ,
            i.prototype.hide = function () {
              return this.form.hide()
            }
            ,
            i.prototype.show = function (t) {
              return this.form.show(t)
            }
            ,
            i.prototype.alert = function (t) {
              return console && console.log && console.log("SI.Popover.alert() is deprecated."),
                alert(t)
            }
            ,
            i.prototype.onError = function (t) {
              var e, n, i;
              if (n = function () {
                var n, r;
                n = t.errors,
                  r = [];
                for (e in n)
                  i = n[e],
                    r.push(i);
                return r
              }(),
              null != this.form)
                return this.form.showMessage(SIConfig.labels.empty_email_phone_validation_message)
            }
            ,
            i.prototype.onSuccess = function () {
              if (null != this.form)
                return this.form.renderDone()
            }
            ,
            i.prototype.toggleForVariant = function (t) {
              var e;
              if (null != (e = this._variantsById[t] || this._variantsByTitle[t]) && null != this.button)
                return this.button.elm.setAttribute("data-variant-id", e.id),
                  this.button.toggle(this.variantIsUnavailable(e))
            }
            ,
            i
        }(SI.Base)
      }
        .call(this),
      function () {
        var t = [].slice;
        SI.Promise = function () {
          function e() {
            this.resolved = !1,
              this.callbacks = [],
              this.data = null
          }

          return e.prototype.then = function (t) {
            return this.callbacks.push(t),
              this.resolved ? this.execute() : this
          }
            ,
            e.prototype.resolve = function () {
              var e;
              return e = 1 <= arguments.length ? t.call(arguments, 0) : [],
                this.data = e,
                this.resolved = !0,
                this.execute()
            }
            ,
            e.prototype.execute = function () {
              for (var t; t = this.callbacks.shift();)
                t.apply(t, this.data);
              return this
            }
            ,
            e
        }()
      }
        .call(this),
      function () {
        SI.Analytics = function () {
          function t() {
            this.key = "si_id",
              this.endpoint = "//" + SI.Config.conversions_hostname + "/prod/api"
          }

          t.prototype.init = function () {
            this.identify();
            if (window.location.pathname.match(/\/checkouts/)) {
              SI.log('bis checkout check.');
              return this.trackCheckout();
            }
          };

          t.prototype.createCookie = function (t, e, n) {
            var i, r;
            return n ? ((i = new Date).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
              r = "; expires=" + i.toGMTString()) : r = "",
              document.cookie = encodeURIComponent(t) + "=" + e + r + "; path=/;"
          };

          t.prototype.getCookie = function (t) {
            var e, n;
            return 0 === document.cookie.length ? null : -1 === (n = document.cookie.indexOf(t + "=")) ? null : (n = n + t.length + 1,
            -1 === (e = document.cookie.indexOf(";", n)) && (e = document.cookie.length),
              unescape(document.cookie.substring(n, e)))
          };

          t.prototype.deleteCookie = function (t) {
            return this.createCookie(t, "", -1)
          };

          t.prototype.identify = function () {
            if (null !== window.location.search.match(this.key)) {
              SI.log('bis cookie read successfully.');
              return this.createCookie(this.key, SI.urlParam(this.key), 30);
            }
          };

          t.prototype.trackCheckout = function () {
            var t, e, n, i, r, o, s, a;
            if (null != (t = this.getCookie(this.key))) {
              SI.log('bis cookie about to be used for checkout.');
              return this.track("checkout", {
                checkout_token: "undefined" != typeof Shopify && null !== Shopify && null != (e = Shopify.checkout) ? e.token : void 0,
                si_id: t,
                order_id: "undefined" != typeof Shopify && null !== Shopify && null != (n = Shopify.checkout) ? n.order_id : void 0,
                subtotal_price: "undefined" != typeof Shopify && null !== Shopify && null != (i = Shopify.checkout) ? i.subtotal_price : void 0,
                total_price: "undefined" != typeof Shopify && null !== Shopify && null != (r = Shopify.checkout) ? r.total_price : void 0,
                checkout_step: "undefined" != typeof Shopify && null !== Shopify && null != (o = Shopify.Checkout) ? o.step : void 0,
                order_created_at: "undefined" != typeof Shopify && null !== Shopify && null != (s = Shopify.checkout) ? s.created_at : void 0,
                location: window.location.toString()
              }).then((a = this,
                  function () {
                    //return a.deleteCookie(a.key)
                  }
              ));
            } else {
              SI.log('bis cookie was null.');
            }
          };

          t.prototype.track = function (t, e) {
            var n, i, r;
            e = SI.extend({
              name: t,
              shop_name: SI.Config.shop
            }, e);

            i = function () {
              var t;
              t = [];
              for (n in e)
                r = e[n],
                  t.push(n + "=" + r);
              return t
            }().join("&");

            return SI.request(this.endpoint, {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              data: JSON.stringify(e)
            })
          };
          return t;
        }()
      }
        .call(this);

    SI.Config = {
      "app_hostname": getRandomSubscribeAPIPath()+".execute-api.us-west-1.amazonaws.com",
      "conversions_hostname": "ifouxf840g.execute-api.us-west-1.amazonaws.com",
      "instock_qty_level": 1,
      "preorder_enabled": false,
      "require_inventory_management": true,
      "ignore_duplicate_skus": false,
      "generic_trigger_handler": true,
      "quantity_field_enabled": false,
      "labels": {
                "headline": "Notificar Quando Disponível",
                "email_address_label": "Endereço de email",
                "product_field_label": "Select product",
                "button_label": "Notificar-me quando disponível",
                "body_copy": "Enviaremos uma notificação assim que este produto estiver disponível novamente.",
                "footer_copy": "Respeitamos a tua privacidade e não partilhamos o teu e-mail com ninguém.",
                "registration_complete": "Notificação registada.",
                "email_invalid": " Endereço de email inválido",
                "uniqueness_of_email": "You have already registered for a notification for that item.",
                "close_label": "Fechar",
                "quantity_required_label": "Quantity required",
                "email_tab_text": "Email",
                "sms_tab_text": "SMS",
                "fb_instruction_message": " Clique abaixo para receber notifica\u00E7\u00E3o no Facebook Messenger",
                "fb_cta_button_text": "GET_THIS_IN_MESSENGER",
                "fb_cta_button_language": "pt_PT",
                "push_notification_label": "Notifique-me também por notificação push",
                "empty_email_phone_validation_message": "Forneça e-mail ou número de telefone.",
                 "terms_and_conditions_text": "I accept the terms and conditions"
      },
        "form_display_type": "POPUP",
        "madeby_link_visible": false,
        "hide_for_product_tag": "notify-it-hidden",
        "hide_for_collections": "",
        "recaptcha_enabled": null,
        "content_for_body": "",
        "show_phone_number_field": false,
        "only_sms_enabled": false,
        "customer_name_enabled": true,
        "show_notify_me_button_on_collection_page": true,
        "show_sms_first": false,
        "push_owl_enabled" : false,
        "show_fb" : false,
        "fb_page_id" : "",
        "newsletter_permission_enabled": false,
        "show_terms_and_conditions": false,
        "newsletter_permission_default_checked": false,
        "newsletter_permission_text": "Signup for newsletter?",
        "popup_theme": {
                     "text_font_name": "Helvetica",
                     "background_color": "#ffffff",
                     "border_color": "#ffffff",
                     "border_width": 1,
                     "text_color": "#000000",
                     "button_background_color": "#3c763d",
                     "button_text_color": "#ffffff",
                     "button_corner_radius": 25,
                     "input_border_radius": 25,
                     "input_border_width": 1,
                     "input_border_color": "#3c763d",
                     "success_background_color": "#ffffff",
                     "success_text_color": "#000000",
                     "failure_background_color": "#f2dede",
                     "failure_text_color": "#a94442",
                     "close_button_color": "#ffffff",
                    "fade_color": "#000000",
                    "fade_color_rgb": "0,0,0",
                     "selected_tab_text_color": "#ffffff",
                     "selected_tab_background_color": "#ffffff",
                     "signup_form_custom_css": "h3.modal-title {\ncolor: #308a36;\n}\n\nbutton.close.action-close {\n    color: #308a36;\n}\n\nselect#variants {\n    display: none;\n}\n\n@media screen and (max-width: 450px) {\n    .product-item--list .product-item__action-button.button.button--small.button--primary {\n        min-width: 50px;\n        border-radius: 50%;\n        font-size: 8px !important;\n    }\n}\n#SIModal div#container {\n    top: 60%;\n}\n\n@media only screen and (max-width: 600px) {\ndiv#SIModal {\n    top: 20%;\n    position: relative;\n}\n}\n\nbutton#SI_trigger {\n    background: #8a9297 !important;\n    color: white;\n    border-radius: 10px !important;\n    font-weight: 300 !important;\nborder-color: #ffffff00 !important;\n}\n\n\n"
      },
      "mobile_css": ".si-reset\u003ediv{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size-adjust:none;font-size:100%;font-style:normal;letter-spacing:normal;font-stretch:normal;font-variant:normal;font-weight:normal;font:normal normal 100% \"Helvetica Neue\", Helvetica, Arial, sans-serif;text-align:left;text-align-last:start;text-decoration:none;text-emphasis:none;text-height:auto;text-indent:0;text-justify:auto;text-outline:none;text-shadow:none;text-transform:none;text-wrap:normal;alignment-adjust:auto;alignment-baseline:baseline;-webkit-animation:none 0 ease 0 1 normal;-moz-animation:none 0 ease 0 1 normal;-ms-animation:none 0 ease 0 1 normal;animation:none 0 ease 0 1 normal;-webkit-animation-play-state:running;-moz-play-state:running;-ms-animation-play-state:running;animation-play-state:running;appearance:normal;azimuth:center;backface-visibility:visible;background:none 0 0 auto repeat scroll padding-box transparent;background-color:transparent;background-image:none;baseline-shift:baseline;binding:none;bleed:6pt;bookmark-label:content();bookmark-level:none;bookmark-state:open;bookmark-target:none;border:0 none transparent;border-radius:0;bottom:auto;box-align:stretch;box-decoration-break:slice;box-direction:normal;box-flex:0.0;box-flex-group:1;box-lines:single;box-ordinal-group:1;box-orient:inline-axis;box-pack:start;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;break-after:auto;break-before:auto;break-inside:auto;caption-side:top;clear:none;clip:auto;color:inherit;color-profile:auto;-webkit-column-count:auto;-webkit-column-fill:balance;-webkit-column-gap:normal;-webkit-column-rule:medium medium #1f1f1f;-webkit-column-span:1;-webkit-column-width:auto;-webkit-columns:auto auto;-moz-column-count:auto;-moz-column-fill:balance;-moz-column-gap:normal;-moz-column-rule:medium medium #1f1f1f;-moz-column-span:1;-moz-column-width:auto;-moz-columns:auto auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium medium #1f1f1f;column-span:1;column-width:auto;columns:auto auto;content:normal;counter-increment:none;counter-reset:none;crop:auto;cursor:auto;direction:ltr;display:inline;dominant-baseline:auto;drop-initial-after-adjust:text-after-edge;drop-initial-after-align:baseline;drop-initial-before-adjust:text-before-edge;drop-initial-before-align:caps-height;drop-initial-size:auto;drop-initial-value:initial;elevation:level;empty-cells:show;fit:fill;fit-position:0% 0%;float:none;float-offset:0 0;grid-columns:none;grid-rows:none;hanging-punctuation:none;height:auto;hyphenate-after:auto;hyphenate-before:auto;hyphenate-character:auto;hyphenate-lines:no-limit;hyphenate-resource:none;hyphens:manual;icon:auto;image-orientation:auto;image-rendering:auto;image-resolution:normal;inline-box-align:last;left:auto;line-height:inherit;line-stacking:inline-line-height exclude-ruby consider-shifts;list-style:disc outside none;margin:0;marks:none;marquee-direction:forward;marquee-loop:1;marquee-play-count:1;marquee-speed:normal;marquee-style:scroll;max-height:none;max-width:none;min-height:0;min-width:0;move-to:normal;nav-down:auto;nav-index:auto;nav-left:auto;nav-right:auto;nav-up:auto;opacity:1;orphans:2;outline:invert none medium;outline-offset:0;overflow:visible;overflow-style:auto;padding:0;page:auto;page-break-after:auto;page-break-before:auto;page-break-inside:auto;page-policy:start;perspective:none;perspective-origin:50% 50%;position:static;presentation-level:0;punctuation-trim:none;quotes:none;rendering-intent:auto;resize:none;right:auto;rotation:0;rotation-point:50% 50%;ruby-align:auto;ruby-overhang:none;ruby-position:before;ruby-span:none;size:auto;string-set:none;table-layout:auto;top:auto;-webkit-transform:none;-moz-transform:none;transform:none;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:all 0 ease 0;-moz-transition:all 0 ease 0;-o-transition:all 0 ease 0;transition:all 0 ease 0;unicode-bidi:normal;vertical-align:baseline;white-space:normal;white-space-collapse:collapse;widows:2;width:auto;word-break:normal;word-spacing:normal;word-wrap:normal;z-index:auto;text-align:start;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(enabled=false)\";filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.si-reset{z-index:999999}.si-reset div{display:block}.si-reset .si-button{cursor:pointer;text-shadow:1px 1px 0 rgba(0,0,0,0.2);-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:none}.si-reset.si-edge-left,.si-reset.si-edge-right{transform-origin:left bottom;white-space:nowrap;position:fixed}.si-reset.si-edge-left{left:0}.si-reset.si-edge-right{right:0}.si-reset.si-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-webkit-transform-origin:left bottom;-moz-transform:rotate(90deg);-moz-transform-origin:left bottom;-ms-transform:rotate(90deg);-ms-transform-origin:left bottom;-o-transform:rotate(90deg);-o-transform-origin:left bottom;transform:rotate(90deg)}.si-reset.si-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-webkit-transform-origin:100% 100%;-moz-transform:rotate(270deg);-moz-transform-origin:100% 100%;-ms-transform:rotate(270deg);-ms-transform-origin:100% 100%;-o-transform:rotate(270deg);-o-transform-origin:100% 100%;transform:rotate(270deg)}.si-reset.si-edge-bottom{position:fixed;bottom:0}.si-reset img{display:block;cursor:pointer}.si-reset.preview{position:absolute !important}.si-reset .si-button.with-si-image{-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;-ms-filter:none;filter:none}\n",
      "button": {
                "use_image": false,
                "caption": " AVISAR QUANDO DISPONÍVEL",
                "font_size": 16,
                "bold": true,
                "position": "right-top",
                "corner_offset": 100,
                "background_color": "#308a36",
                "selected_selector": "",
                "placement": "",
                "text_color": "#ffffff",
                "border_color": "#308a36",
                "border_width": 1,
                "border_radius": 3,
                "image": "//static.back-in-stock.appikon.com/assets/widget/notify-btn-vertical-f46bd7ac1b51e7d3c6a766d843fe60b46f8628e13e717124d83ffe65be466f4d.png",
                "visible": false,
                "always_show_widget": false,
                "widget_button_enabled": true,
                "countdown_timer_enabled": false,
                "countdown_timer_reset_enabled": false,
                "countdown_timer_expiration": "-1",
                "countdown_timer_products": "[]"
      },
      "main_button": {
            "main_caption": "Notificar Quando Disponível!",
            "main_css_classes": "",
            "main_button_width": "100",
            "main_button_height": "",
            "main_caption_size": "15",
            "main_margin_top": "0",
            "main_margin_bottom": "0",
            "main_margin_left": "0",
            "main_margin_right": "0",
            "main_text_color": "",
            "main_hover_text_color": "",
            "main_text_style": "NORMAL",
            "main_background_color": "",
            "main_hover_background_color": "",
            "main_border_color": "",
            "main_hover_border_color": "",
            "main_border_size": "1",
            "main_border_radius": "25"
      },
      "partials": {},
        "preferredCountries": ["PT"],
        "multivariant_dropdown_container": "document",
        "shop": "bioself-natura.myshopify.com",
        "styles": "/*!\n * Bootstrap v3.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:14px;line-height:1.42857143;color:#333333;background-color:#ffffff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#ffffff;border:1px solid #dddddd;border-radius:4px;-webkit-transition:all 0.2s ease-in-out;-o-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eeeeee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=\"button\"]{cursor:pointer}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:400;line-height:1;color:#777777}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777777}.text-primary{color:#337ab7}a.text-primary:hover,a.text-primary:focus{color:#286090}.text-success{color:#3c763d}a.text-success:hover,a.text-success:focus{color:#2b542c}.text-info{color:#31708f}a.text-info:hover,a.text-info:focus{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover,a.text-warning:focus{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover,a.text-danger:focus{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover,a.bg-primary:focus{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eeeeee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline\u003eli{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width: 768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eeeeee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:\"\\2014 \\00A0\"}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eeeeee;border-left:0}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:\"\"}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:\"\\00A0 \\2014\"}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 768px){.container{width:750px}}@media (min-width: 992px){.container{width:970px}}@media (min-width: 1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.row-no-gutters{margin-right:0;margin-left:0}.row-no-gutters [class*=\"col-\"]{padding-right:0;padding-left:0}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0%}@media (min-width: 768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0%}}@media (min-width: 992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0%}}@media (min-width: 1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0%}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=\"search\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;appearance:none}input[type=\"radio\"],input[type=\"checkbox\"]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=\"radio\"][disabled],input[type=\"checkbox\"][disabled],input[type=\"radio\"].disabled,input[type=\"checkbox\"].disabled,fieldset[disabled] input[type=\"radio\"],fieldset[disabled] input[type=\"checkbox\"]{cursor:not-allowed}input[type=\"file\"]{display:block}input[type=\"range\"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=\"file\"]:focus,input[type=\"radio\"]:focus,input[type=\"checkbox\"]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555555;background-color:#ffffff;background-image:none;border:1px solid #cccccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.form-control::-moz-placeholder{color:#999999;opacity:1}.form-control:-ms-input-placeholder{color:#999999}.form-control::-webkit-input-placeholder{color:#999999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eeeeee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}@media screen and (-webkit-min-device-pixel-ratio: 0){input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{line-height:34px}input[type=\"date\"].input-sm,input[type=\"time\"].input-sm,input[type=\"datetime-local\"].input-sm,input[type=\"month\"].input-sm,.input-group-sm input[type=\"date\"],.input-group-sm input[type=\"time\"],.input-group-sm input[type=\"datetime-local\"],.input-group-sm input[type=\"month\"]{line-height:30px}input[type=\"date\"].input-lg,input[type=\"time\"].input-lg,input[type=\"datetime-local\"].input-lg,input[type=\"month\"].input-lg,.input-group-lg input[type=\"date\"],.input-group-lg input[type=\"time\"],.input-group-lg input[type=\"datetime-local\"],.input-group-lg input[type=\"month\"]{line-height:46px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.radio input[type=\"radio\"],.radio-inline input[type=\"radio\"],.checkbox input[type=\"checkbox\"],.checkbox-inline input[type=\"checkbox\"]{position:absolute;margin-top:4px \\9;margin-left:-20px}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label ~ .form-control-feedback{top:25px}.has-feedback label.sr-only ~ .form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width: 768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group\u003e.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type=\"radio\"],.form-inline .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width: 768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width: 768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width: 768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#333333;text-decoration:none}.btn:active,.btn.active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);opacity:0.65;-webkit-box-shadow:none;box-shadow:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333333;background-color:#ffffff;border-color:#cccccc}.btn-default:focus,.btn-default.focus{color:#333333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active,.btn-default.active,.open\u003e.dropdown-toggle.btn-default{color:#333333;background-color:#e6e6e6;background-image:none;border-color:#adadad}.btn-default:active:hover,.btn-default.active:hover,.open\u003e.dropdown-toggle.btn-default:hover,.btn-default:active:focus,.btn-default.active:focus,.open\u003e.dropdown-toggle.btn-default:focus,.btn-default:active.focus,.btn-default.active.focus,.open\u003e.dropdown-toggle.btn-default.focus{color:#333333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus{background-color:#ffffff;border-color:#cccccc}.btn-default .badge{color:#ffffff;background-color:#333333}.btn-primary{color:#ffffff;background-color:#337ab7;border-color:#2e6da4}.btn-primary:focus,.btn-primary.focus{color:#ffffff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#ffffff;background-color:#286090;border-color:#204d74}.btn-primary:active,.btn-primary.active,.open\u003e.dropdown-toggle.btn-primary{color:#ffffff;background-color:#286090;background-image:none;border-color:#204d74}.btn-primary:active:hover,.btn-primary.active:hover,.open\u003e.dropdown-toggle.btn-primary:hover,.btn-primary:active:focus,.btn-primary.active:focus,.open\u003e.dropdown-toggle.btn-primary:focus,.btn-primary:active.focus,.btn-primary.active.focus,.open\u003e.dropdown-toggle.btn-primary.focus{color:#ffffff;background-color:#204d74;border-color:#122b40}.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#ffffff}.btn-success{color:#ffffff;background-color:#ffffff;border-color:#ffffff}.btn-success:focus,.btn-success.focus{color:#ffffff;background-color:#ffffff;border-color:#ffffff}.btn-success:hover{color:#ffffff;background-color:#ffffff;border-color:#ffffff}.btn-success:active,.btn-success.active,.open\u003e.dropdown-toggle.btn-success{color:#ffffff;background-color:#ffffff;background-image:none;border-color:#ffffff}.btn-success:active:hover,.btn-success.active:hover,.open\u003e.dropdown-toggle.btn-success:hover,.btn-success:active:focus,.btn-success.active:focus,.open\u003e.dropdown-toggle.btn-success:focus,.btn-success:active.focus,.btn-success.active.focus,.open\u003e.dropdown-toggle.btn-success.focus{color:#ffffff;background-color:#ffffff;border-color:#ffffff}.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus{background-color:#ffffff;border-color:#ffffff}.btn-success .badge{color:#ffffff;background-color:#ffffff}.btn-info{color:#ffffff;background-color:#5bc0de;border-color:#46b8da}.btn-info:focus,.btn-info.focus{color:#ffffff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#ffffff;background-color:#31b0d5;border-color:#269abc}.btn-info:active,.btn-info.active,.open\u003e.dropdown-toggle.btn-info{color:#ffffff;background-color:#31b0d5;background-image:none;border-color:#269abc}.btn-info:active:hover,.btn-info.active:hover,.open\u003e.dropdown-toggle.btn-info:hover,.btn-info:active:focus,.btn-info.active:focus,.open\u003e.dropdown-toggle.btn-info:focus,.btn-info:active.focus,.btn-info.active.focus,.open\u003e.dropdown-toggle.btn-info.focus{color:#ffffff;background-color:#269abc;border-color:#1b6d85}.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#ffffff}.btn-warning{color:#ffffff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:focus,.btn-warning.focus{color:#ffffff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#ffffff;background-color:#ec971f;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open\u003e.dropdown-toggle.btn-warning{color:#ffffff;background-color:#ec971f;background-image:none;border-color:#d58512}.btn-warning:active:hover,.btn-warning.active:hover,.open\u003e.dropdown-toggle.btn-warning:hover,.btn-warning:active:focus,.btn-warning.active:focus,.open\u003e.dropdown-toggle.btn-warning:focus,.btn-warning:active.focus,.btn-warning.active.focus,.open\u003e.dropdown-toggle.btn-warning.focus{color:#ffffff;background-color:#d58512;border-color:#985f0d}.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#ffffff}.btn-danger{color:#ffffff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:focus,.btn-danger.focus{color:#ffffff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#ffffff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open\u003e.dropdown-toggle.btn-danger{color:#ffffff;background-color:#c9302c;background-image:none;border-color:#ac2925}.btn-danger:active:hover,.btn-danger.active:hover,.open\u003e.dropdown-toggle.btn-danger:hover,.btn-danger:active:focus,.btn-danger.active:focus,.open\u003e.dropdown-toggle.btn-danger:focus,.btn-danger:active.focus,.btn-danger.active.focus,.open\u003e.dropdown-toggle.btn-danger.focus{color:#ffffff;background-color:#ac2925;border-color:#761c19}.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#ffffff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#777777;text-decoration:none}.btn-lg,.btn-group-lg\u003e.btn{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-sm,.btn-group-sm\u003e.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs\u003e.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group\u003e.btn,.btn-group-vertical\u003e.btn{position:relative;float:left}.btn-group\u003e.btn:hover,.btn-group-vertical\u003e.btn:hover,.btn-group\u003e.btn:focus,.btn-group-vertical\u003e.btn:focus,.btn-group\u003e.btn:active,.btn-group-vertical\u003e.btn:active,.btn-group\u003e.btn.active,.btn-group-vertical\u003e.btn.active{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar\u003e.btn,.btn-toolbar\u003e.btn-group,.btn-toolbar\u003e.input-group{margin-left:5px}.btn-group\u003e.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group\u003e.btn:first-child{margin-left:0}.btn-group\u003e.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group\u003e.btn:last-child:not(:first-child),.btn-group\u003e.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group\u003e.btn-group{float:left}.btn-group\u003e.btn-group:not(:first-child):not(:last-child)\u003e.btn{border-radius:0}.btn-group\u003e.btn-group:first-child:not(:last-child)\u003e.btn:last-child,.btn-group\u003e.btn-group:first-child:not(:last-child)\u003e.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group\u003e.btn-group:last-child:not(:first-child)\u003e.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group\u003e.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group\u003e.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical\u003e.btn,.btn-group-vertical\u003e.btn-group,.btn-group-vertical\u003e.btn-group\u003e.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical\u003e.btn-group\u003e.btn{float:none}.btn-group-vertical\u003e.btn+.btn,.btn-group-vertical\u003e.btn+.btn-group,.btn-group-vertical\u003e.btn-group+.btn,.btn-group-vertical\u003e.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical\u003e.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical\u003e.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical\u003e.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical\u003e.btn-group:not(:first-child):not(:last-child)\u003e.btn{border-radius:0}.btn-group-vertical\u003e.btn-group:first-child:not(:last-child)\u003e.btn:last-child,.btn-group-vertical\u003e.btn-group:first-child:not(:last-child)\u003e.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical\u003e.btn-group:last-child:not(:first-child)\u003e.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified\u003e.btn,.btn-group-justified\u003e.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified\u003e.btn-group .btn{width:100%}.btn-group-justified\u003e.btn-group .dropdown-menu{left:auto}[data-toggle=\"buttons\"]\u003e.btn input[type=\"radio\"],[data-toggle=\"buttons\"]\u003e.btn-group\u003e.btn input[type=\"radio\"],[data-toggle=\"buttons\"]\u003e.btn input[type=\"checkbox\"],[data-toggle=\"buttons\"]\u003e.btn-group\u003e.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert\u003ep,.alert\u003eul{margin-bottom:0}.alert\u003ep+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000000;text-shadow:0 1px 0 #ffffff;filter:alpha(opacity=20);opacity:0.2}.close:hover,.close:focus{color:#000000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:0.5}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0, -25%);-ms-transform:translate(0, -25%);-o-transform:translate(0, -25%);transform:translate(0, -25%);-webkit-transition:-webkit-transform 0.3s ease-out;-o-transition:-o-transform 0.3s ease-out;transition:transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#ffffff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:0.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width: 992px){.modal-lg{width:900px}}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical\u003e.btn-group:before,.btn-group-vertical\u003e.btn-group:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after{display:table;content:\" \"}.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical\u003e.btn-group:after,.modal-header:after,.modal-footer:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}.iti{width:100%}body,html{background:transparent;-webkit-font-smoothing:antialiased;height:100%}body{overflow:hidden;-moz-transition:background-color 0.15s linear;-webkit-transition:background-color 0.15s linear;-o-transition:background-color 0.15s linear;transition:background-color 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86)}body.fadein{background:rgba(0,0,0,0.65)}#container{background:white;padding:12px 18px 40px 18px}@media only screen and (min-width: 500px){#container{border-radius:5px;padding:30px 40px}}@media only screen and (min-width: 992px){#container{position: fixed; width: 460px; top: 50%; left: 50%; transform:translate(-50%, -50%); margin: auto}}.fade{opacity:0;-webkit-transition:opacity 0.15s linear;-o-transition:opacity 0.15s linear;transition:opacity 0.15s linear}.fade.in{opacity:1}.modal{overflow-x:hidden;overflow-y:auto}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-background-clip:padding-box;background-clip:padding-box;outline:0}.modal-title{margin:0;line-height:1.42857143}h3{font-size:24px}h4{font-size:18px;margin-top:10px;margin-bottom:10px}h3,h4{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}@media screen and (-webkit-min-device-pixel-ratio: 0){select:focus,textarea:focus,input:focus{font-size:16px;background:#eee}}#variant-select-container .input-lg{font-size:15px}#customer-contact-container a.btn{font-weight:bold}#customer-contact-container .input-lg{font-size:15px}#quantity-field-container label{font-weight:normal;font-size:14px;padding-top:13px}#quantity-field-container input{font-size:15px}#submit-btn{font-weight:bold;font-size:15px;padding:14px;border-radius:3px}.alert{padding:6px 11px;font-size:13px;margin:15px 0}.alert-success a{color:#244825}.modal-body{padding:22px 40px;font-size:13px;line-height:180%}.modal-body h3:first-child{margin-top:0}.modal-title{margin:0;font-size:22px}.modal-content .close{font-size:30px}.modal-backdrop.in{filter:alpha(opacity=65);opacity:.65}.small-print{opacity:0.835;font-size:13px;line-height:150%}.small-print a{color:inherit;text-decoration:underline}.product-name{margin-bottom:20px}label.accepts-marketing{filter:alpha(opacity=825);opacity:0.825}@media only screen and (max-width: 786px){.modal-body{padding:20px 30px}}@media only screen and (max-width: 500px){.modal-dialog{margin:0}.modal-content{border-radius:0}}@media only screen and (min-width: 500px){#SIModal{max-width:460px;margin:auto}}.ie8 #SIModal{width:100%;max-width:460px;margin:auto;border:1px solid #999}select.default_variant{display:none}.ie8 .modal-dialog{width:460px !important;margin:10px auto}.completed_message{display:none}.complete .completed_message{display:block}#SIModal.in{position:relative;z-index:1050;height:100%;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}\n"
    };

        SI.Config.multivariantDropdownContainer = document;
        SI.Config.shop = 'bioself-natura.myshopify.com';

    SI.Config = SI.extend(SI.Config, "undefined" != typeof _SIConfig && null !== _SIConfig ? _SIConfig : {})

    window.SIConfig = SI.Config;

      if(SI.Config.button.selected_selector !== "" && !document.querySelector(SI.Config.button.selected_selector)){
        console.log("BIS: button not found. Wrong selector")
      }
      else{
        console.log("BIS: button found.")
      }

    SI.domReady().then(SI.init);

    (new SI.Analytics()).init();

    

    var bisProductPageFunction = function () {
        
      var bisCheckCondition = SI.Config.show_notify_me_button_on_collection_page;

      if(SI.urlIsProductPage() == false && SI.Config.show_notify_me_button_on_collection_page == false) {   
          jQuery(".SI_trigger").hide()
      }

      var bisInlineFormStyle = document.createElement('style');

bisInlineFormStyle.id = "bisInlineFormStyle";
bisInlineFormStyle.innerHTML = `.appikon-bis-inline-form-wrapper {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 15px auto;
    border-radius: 2px;
    max-width: 600px;
    overflow: auto;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-title {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    margin-bottom: 15px;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-title h3 {
    text-transform: none;
    margin: 0px;
    padding: 0px;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-description {
    margin: 0px;
    padding: 0px;
    margin-bottom: 10px;
    line-height: 1.4em;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-submit {
    width: 100%;
    margin: 0px;
    margin-top: 10px;
    text-align: center;
}
.appikon-bis-inline-form-wrapper #appikon-bis-inline-form-message {
    margin: 0px;
    padding: 0px;
    margin-top: 10px;
    text-align: center;
}
.appikon-bis-inline-form-wrapper #appikon-bis-inline-form-message > p {
    margin: 0px;
    padding: 6px 11px;
    border: 1px solid transparent;
    border-radius: 2px;
}
.appikon-bis-inline-form-success {
    background-color: #dff0d8;
    border-color: #dff0d8;
    color: #3c763d;
}
.appikon-bis-inline-form-error {
    border-color: #f2dede;
    background-color: #f2dede;
    color: #a94442;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-footer {
    margin-top: 10px;
    font-size: small;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-powered-by {
    padding: 0px;
    margin-top: 10px;
    text-align: center;
    opacity: .8;
}
.appikon-bis-inline-form-wrapper .appikon-bis-inline-form-powered-by hr {
    margin: 10px 0;
    border: 0;
    border-bottom: 1px solid #ccc;
}
.appikon-bis-form-hide-warning{
    display:none
}
.appikon-bis-form-warning{
     color:red
}
.btn-group-justified {
    display: inline-block;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
}
.btn-success,.btn-default {
    width: 100%;
    padding:2px;
    border-radius:5px;
}
.btn-default{
    background-color: #F1F5F0;
  border:none;
    color:black;
}
.inline-form-hidden-tab{
    display:none
}
#email-address, #phone-number{
    margin-top:20px;
}

.appikon-bis-inline-input-section input{
     padding: 8px 15px;
    width: 100%;
}
.btn-group-justified>.btn, .btn-group-justified>.btn-group {
    display: table-cell;
    float: none;
    width: 1%;
}
.iti.iti--allow-dropdown{
    width:100%;
}
.appikon-bis-newsletter-checkbox{
    display: flex;
    padding: 7px;
}
.appikon-bis-tc-checkbox{
    display: flex;
   padding:4px;
}
.appikon-bis-tc-checkbox label{
    margin-top:11px;
    margin-left:5px;
}
.appikon-bis-newsletter-checkbox label{
    margin:10px;
    font-weight:bold;  
}
`;
document.head.appendChild(bisInlineFormStyle);
 if (typeof intlTelInput == 'undefined') {       
    var intlTelInputCSS = document.createElement('link');
    intlTelInputCSS.rel="stylesheet";
    intlTelInputCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.5/css/intlTelInput.css";
    intlTelInputCSS.integrity="sha256-rTKxJIIHupH7lFo30458ner8uoSSRYciA0gttCkw1JE=";
    intlTelInputCSS.crossOrigin="anonymous";
    document.head.appendChild(intlTelInputCSS);
    
  }
 

var appikonBisInlineFormTemplate = `<div id="appikon-bis-inline-form-wrapper" class="appikon-bis-inline-form-wrapper">
        <div class="clearfix">
               <style> {{#popup_theme}} #appikon-bis-inline-form-submit { color: {{ popup_theme.button_text_color }}; background-color: {{ popup_theme.button_background_color }}; border-color: {{ popup_theme.button_background_color }}; border-radius: {{ popup_theme.button_corner_radius }}px; } .input-lg { border-radius: {{ popup_theme.input_border_radius }}px; border-color: {{ popup_theme.input_border_color }}; border-width: {{ input_border_width }}px;  } .btn-success{ background-color :{{popup_theme.selected_tab_background_color}}; color:{{popup_theme.selected_tab_text_color}} } .alert-danger { border-color: {{ popup_theme.failure_background_color }}; background-color: {{ popup_theme.failure_background_color }}; color: {{ popup_theme.failure_text_color }}; } .alert-success { background-color: {{ popup_theme.success_background_color }}; border-color: {{ popup_theme.success_background_color }}; color: {{ popup_theme.success_text_color }}; } .alert-success a { color: {{ popup_theme.success_text_color }}; } {{/popup_theme}} </style>
            <div class="appikon-bis-inline-form-title">
                <h3>{{{labels.headline}}}</h3>
            </div>
            <div class="appikon-bis-inline-form-description">{{{labels.body_copy}}}</div>
            <div class="appikon-bis-inline-form-data">
                <form id="appikon-bis-inline-form">
                        <div id="customer-contact-container">
                          {{#show_phone_number_field}}
                            {{^only_sms_enabled}}
                              <div class="form-group">
                                <div class="col-xs-12 btn-group btn-group-justified">
                                  {{#show_sms_first}}
                                 
                                    <div class="btn-group"> <button type="button" class="btn-success" id="sms-tab">{{{ labels.sms_tab_text }}}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn-default" id="email-tab">{{{ labels.email_tab_text }}}</button> </div>
                                  
                                  {{/show_sms_first}}
                                  {{^show_sms_first}}
                                   
                                    <div class="btn-group"> <button type="button" class="btn-success" id="email-tab">{{{ labels.email_tab_text }}}</button> </div>
                                    <div class="btn-group"> <button type="button" class="btn-default" id="sms-tab">{{{ labels.sms_tab_text }}}</button> </div>
                         
                                  {{/show_sms_first}}
                                </div>
                              </div>
                            {{/only_sms_enabled}}
                          {{/show_phone_number_field}}
                    
                        {{#customer_name_enabled}}
                            <div id="customer-name" class="form-group">
                              <div class="col-xs-12">
                                <input id="appikon-bis-inline-form-name" type="text" placeholder="{{customer_name_label}}" class="form-control input-lg" value="{{customer.name}}">
                              </div>
                            </div>
                          {{/customer_name_enabled}}

                      {{#show_phone_number_field}}
                            <div id="phone-number" class="form-group {{^only_sms_enabled}}{{^show_sms_first}}inline-form-hidden-tab{{/show_sms_first}}{{/only_sms_enabled}}">
                              <div class="appikon-bis-inline-input-section">
                                 <input id="appikon-bis-inline-form-phone-no" type="number" class="form-control input-lg" value="{{customer.phone}}">
                              </div>
                            </div>
                          {{/show_phone_number_field}}

                          {{^only_sms_enabled}}
                            <div id="email-address" class="form-group {{#show_sms_first}}inline-form-hidden-tab{{/show_sms_first}}">
                              <div class="appikon-bis-inline-input-section">
                                 <input id="appikon-bis-inline-form-email" class="appikon-bis-inline-form-input input-lg" type="email" name="appikon-bis-inline-form-email"
                        placeholder="{{labels.email_address_label}}" value="{{customer.email}}"/>
                        <small class="appikon-bis-form-hide-warning" id="appikon-bis-form-email-warning">{{labels.email_invalid}}</small>
                              </div>
                            </div>
                          {{/only_sms_enabled}}
                      {{#show_phone_number_field}} <script> var emailButton, smsButton; var phoneNumberDiv = document.querySelector('#phone-number'); var emailAddressDiv = document.querySelector('#email-address'); emailButton = document.querySelector('#customer-contact-container .btn-group > button#email-tab');smsButton  = document.querySelector('#customer-contact-container .btn-group > button#sms-tab') ;  var showEmailField = function  () { phoneNumberDiv.classList.add('inline-form-hidden-tab'); emailAddressDiv.classList.remove('inline-form-hidden-tab'); emailButton.classList.add('btn-success');emailButton.classList.remove('btn-default'); smsButton.classList.remove('btn-success'); smsButton.classList.add('btn-default'); emailButton.classList.toggle('active');}; var showPhoneField = function(){emailAddressDiv.classList.add('inline-form-hidden-tab'); phoneNumberDiv.classList.remove('inline-form-hidden-tab');smsButton.classList.add('btn-success');smsButton.classList.remove('btn-default');smsButton.classList.toggle('active');emailButton.classList.remove('btn-success');emailButton.classList.add('btn-default');};emailButton.addEventListener('click', showEmailField);smsButton.addEventListener('click', showPhoneField); </script> {{/show_phone_number_field}}
                    
                    {{#show_terms_and_conditions}}
                        <div class="appikon-bis-tc-checkbox">
                          <input type="checkbox" id="acceptTermsAndConditionsForInlineForm">
                          <label style="font-weight:300" class="terms_and_conditions" for="terms_and_conditions">{{{labels.terms_and_conditions_text}}}</label>
                        </div>
                    {{/show_terms_and_conditions}}

                    <button id="appikon-bis-inline-form-submit" class="btn button appikon-bis-inline-form-submit">{{labels.button_label}}</button>
                      
                    {{#newsletter_permission_enabled}}
                        <div class="appikon-bis-newsletter-checkbox">
                          <input type="checkbox" class="custom-control-input" name="customer_accepts_marketing"  id="customer_accepts_marketing" {{#newsletter_permission_default_checked}}checked{{/newsletter_permission_default_checked}}>
                          <label  for="customer_accepts_marketing">{{newsletter_permission_text}}</label>
                        </div>
                    {{/newsletter_permission_enabled}}
                </div>
                </form>
                <div id="appikon-bis-inline-form-message"></div>
            </div>
            <div class="appikon-bis-inline-form-footer">
                <div id="appikon-bis-inline-form-footer-note">{{{labels.footer_copy}}}</div>
                {{#madeby_link_visible}}
                <div class="appikon-bis-inline-form-powered-by">
                    <hr>
                    <span>Powered by
                        <a href="https://apps.shopify.com/customer-back-in-stock-alert-user-notification-app/?utm_source=referral&utm_medium=powered-by&utm_campaign={{shop}}" target="_blank">Back In Stock (by Appikon)</a>
                    </span>
                </div>
                {{/madeby_link_visible}}
            </div>
        </div>
         <script>
         function renderIntlInput(){
         const smsField=document.getElementById('appikon-bis-inline-form-phone-no');
         var appikonBisInlineFormTemplateVars = SI.extend({}, SI.Config);
                  function loadScript(t, e, n) {
                  var i = document.getElementsByTagName("head")[0]
                  , r = e.createElement("script");
                  r.type = "text/javascript",
                  r.src = t,
                  r.onreadystatechange = n,
                  r.onload = n,
                  i.appendChild(r)
                  }
                  var  r = (i = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input") + "/17.0.5/js/intlTelInput.min.js";
                  var o = i + "/16.0.2/js/utils.js";

                  var smsSupportDetails = {
                        preferredCountries: appikonBisInlineFormTemplateVars.preferredCountries,
                        utilsScript: o
                  };

              loadScript(r,document , (function () {
                   window.appikonBisInlineFormIntlTelInput = intlTelInput(smsField, smsSupportDetails)
                }
            ));                   
         }
        </script>
         {{^only_sms_enabled}}
         {{#show_phone_number_field}}
         <script>  
     
            const submitButton=document.getElementById('appikon-bis-inline-form-submit');
            const emailField=document.getElementById('appikon-bis-inline-form-email');
            const smsField=document.getElementById('appikon-bis-inline-form-phone-no');
            const emailFieldWarningElement=document.getElementById('appikon-bis-form-email-warning');
            document.getElementById("sms-tab").addEventListener("click", function() {
                submitButton.removeAttribute('disabled');
                emailField.value = "";
                emailFieldWarningElement.classList.add("appikon-bis-form-hide-warning");
                emailFieldWarningElement.classList.remove("appikon-bis-form-warning")
            })
            document.getElementById("email-tab").addEventListener("click", function() {
                submitButton.removeAttribute('disabled');
                smsField.value = "";        
            })
            document.getElementById("customer-contact-container").addEventListener("mouseover", function() {
                if(emailField.value.length>0 || smsField.value.length>0){
                     submitButton.removeAttribute('disabled');
                 }   
            })
            renderIntlInput()
                 
        </script>
        {{/show_phone_number_field}}

        {{^show_phone_number_field}}
        <script>
            const submitButton=document.getElementById('appikon-bis-inline-form-submit');
            const emailField=document.getElementById('appikon-bis-inline-form-email');    
            const emailFieldWarningElement=document.getElementById('appikon-bis-form-email-warning');    
            document.getElementById("customer-contact-container").addEventListener("mouseover", function() {
                if(emailField.value.length>0){
                    submitButton.removeAttribute('disabled');
                    }   
            })
        </script>
        {{/show_phone_number_field}}
        
        {{/only_sms_enabled}} 
        {{#only_sms_enabled}} 
        <script>
            const submitButton=document.getElementById('appikon-bis-inline-form-submit');    
            const smsField=document.getElementById('appikon-bis-inline-form-phone-no');
            document.getElementById("customer-contact-container").addEventListener("mouseover", function() {
            if(smsField.value.length>0){
                 submitButton.removeAttribute('disabled');
            }   
            })
            renderIntlInput()
        </script>
        {{/only_sms_enabled}} 
        </div>
        `;

SI.Config.isInlineFormEnabled = "INLINE" === SI.Config.form_display_type.toUpperCase();

var appikonBisInlineFormTemplateVars = SI.extend({}, SI.Config);

var appikonBisInlineForm = jQuery('<div style="display: none"></div>');

if(SI.Config.isInlineFormEnabled) {

    appikonBisInlineForm = jQuery(Mustache.render(appikonBisInlineFormTemplate.trim(), appikonBisInlineFormTemplateVars));

     if(!appikonBisInlineFormTemplateVars.only_sms_enabled){
        
        appikonBisInlineForm.find('#appikon-bis-inline-form-email').on('change', function (t) {
        var appikonBisInlineFormEmail = appikonBisInlineForm.find('#appikon-bis-inline-form-email').val();
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailPattern.test(appikonBisInlineFormEmail)) {
        jQuery('#appikon-bis-form-email-warning').removeClass("appikon-bis-form-hide-warning").addClass("appikon-bis-form-warning");
        jQuery('#appikon-bis-inline-form-submit').attr("disabled","true");
        }else {
        jQuery('#appikon-bis-form-email-warning').removeClass("appikon-bis-form-warning").addClass("appikon-bis-form-hide-warning");
        jQuery('#appikon-bis-inline-form-submit').removeAttr("disabled","true");
        }
        })
   
        appikonBisInlineForm.find('#appikon-bis-inline-form-submit').on('click', function (t) {
            var input = jQuery('#appikon-bis-inline-form-phone-no');  
         SI.preventDefault(t)
         t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
         var appikonBisInlineFormEmail = appikonBisInlineForm.find('#appikon-bis-inline-form-email').val();
         if(typeof(window.appikonBisInlineFormIntlTelInput) === "undefined"){
             var appikonBisInlineFormPhoneNumber ='';
         }else{
             var appikonBisInlineFormPhoneNumber = appikonBisInlineFormIntlTelInput.getNumber(); 
         }
         if(appikonBisInlineFormTemplateVars.show_terms_and_conditions == true){ 
                var BisInlineFormMessage = appikonBisInlineForm.find('#appikon-bis-inline-form-message');
                var tcAccepted;
                if (jQuery('#acceptTermsAndConditionsForInlineForm').is(":checked")){
                   tcAccepted = true;
                }else{
                tcAccepted = false;
                 }
                if(tcAccepted == false){
                   BisInlineFormMessage.html(jQuery("<p>", {
                  "class": "appikon-bis-inline-form-error",
                   html: "Please accept Terms And Conditions"
                }))
                return;   
                }else{
                  BisInlineFormMessage.html("");
                } 
            }    
         var appikonBisacceptMarketing = appikonBisInlineForm.find('[name="customer_accepts_marketing"]').is(":checked");       
          var appikonBisInlineFormMessage = appikonBisInlineForm.find('#appikon-bis-inline-form-message');
         if(!appikonBisInlineFormEmail && !appikonBisInlineFormPhoneNumber){   
         jQuery('#appikon-bis-inline-form-submit').attr("disabled","true");
          appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-error",
                    html: SI.Config.labels.empty_email_phone_validation_message
                    }))
         }else{          
             if(appikonBisInlineFormEmail.length == 0){
                 appikonBisInlineFormEmail = null; 
             }
             if(appikonBisInlineFormPhoneNumber.length == 0){
                appikonBisInlineFormPhoneNumber = null;
             }
            
             if(appikonBisInlineFormTemplateVars.show_terms_and_conditions == true){ 
                var BisInlineFormMessage = appikonBisInlineForm.find('#appikon-bis-inline-form-message');
                var tcAccepted;
                if (jQuery('#acceptTermsAndConditionsForInlineForm').is(":checked")){
                   tcAccepted = true;
                }else{
                tcAccepted = false;
                 }
                if(tcAccepted == false){
                   BisInlineFormMessage.html(jQuery("<p>", {
                  "class": "appikon-bis-inline-form-error",
                   html: "Please accept Terms And Conditions"
                }))
                return;   
                }else{
                  BisInlineFormMessage.html("");
                } 
            }

             var appikonBisInlineFormVariantId = null;
             var currentVariant = SI.detectVariant(SI.popup);
          if (currentVariant && SI.popup.variantIsUnavailable(currentVariant)) {
              appikonBisInlineFormVariantId = currentVariant.id;
          } else {
              appikonBisInlineFormVariantId = SI.popup.variants[0].id;
          }
       
        appikonBisInlineFormMessage.html('');
        jQuery(t.target).prop('disabled', true);   
        SI.create(appikonBisInlineFormEmail, appikonBisInlineFormVariantId, SI.popup.product.id , {phone_number : appikonBisInlineFormPhoneNumber , accepts_marketing:appikonBisacceptMarketing })
            .then(function (st, resp) {
                resp = SI.parseJSON(resp);
                if("OK" === resp.status) {
                    appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-success",
                    html: SI.Config.labels.registration_complete
                    }))
                } else if("Error" === resp.status) {
                    appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-error",
                    html: SI.Config.labels.empty_email_phone_validation_message
                    }))
                }
                jQuery(t.target).prop('disabled', false);
            });
        }  
    });
    }else{

    appikonBisInlineForm.find('#appikon-bis-inline-form-submit').on('click', function (t) {
        var input = jQuery('#appikon-bis-inline-form-phone-no');  
        SI.preventDefault(t)
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
       
        if(typeof(window.appikonBisInlineFormIntlTelInput) === "undefined"){
            var appikonBisInlineFormPhoneNumber ='';
        }else{
            var appikonBisInlineFormPhoneNumber = appikonBisInlineFormIntlTelInput.getNumber(); 
        }  
        if(appikonBisInlineFormTemplateVars.show_terms_and_conditions == true){ 
        var BisInlineFormMessage = appikonBisInlineForm.find('#appikon-bis-inline-form-message');
           var tcAccepted;
           if (jQuery('#acceptTermsAndConditionsForInlineForm').is(":checked")){
              tcAccepted = true;
           }else{
               tcAccepted = false;
           }
          
           if(tcAccepted == false){
              BisInlineFormMessage.html(jQuery("<p>", {
                "class": "appikon-bis-inline-form-error",
                html: "Please accept Terms And Conditions"
            }))
            return;   
           }else{
               BisInlineFormMessage.html("");
           } 
        }
            
          
        var appikonBisacceptMarketing = appikonBisInlineForm.find('[name="customer_accepts_marketing"]').is(":checked");       
         var appikonBisInlineFormMessage = appikonBisInlineForm.find('#appikon-bis-inline-form-message');
        if(!appikonBisInlineFormPhoneNumber){   
        jQuery('#appikon-bis-inline-form-submit').attr("disabled","true");
         appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-error",
                    html: SI.Config.labels.empty_email_phone_validation_message
                    }))
        }else{            
            if(appikonBisInlineFormPhoneNumber.length == 0){
                appikonBisInlineFormPhoneNumber = null;
            }

             var appikonBisInlineFormVariantId = null;
        var currentVariant = SI.detectVariant(SI.popup);
        if (currentVariant && SI.popup.variantIsUnavailable(currentVariant)) {
            appikonBisInlineFormVariantId = currentVariant.id;
        } else {
            appikonBisInlineFormVariantId = SI.popup.variants[0].id;
        }
       
        appikonBisInlineFormMessage.html('');
        jQuery(t.target).prop('disabled', true);   
        SI.create(null, appikonBisInlineFormVariantId, SI.popup.product.id , {phone_number : appikonBisInlineFormPhoneNumber , accepts_marketing:appikonBisacceptMarketing })
            .then(function (st, resp) {
                resp = SI.parseJSON(resp);
                if("OK" === resp.status) {
                    appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-success",
                    html: SI.Config.labels.registration_complete
                    }))
                } else if("Error" === resp.status) {
                    appikonBisInlineFormMessage.html(jQuery("<p>", {
                    "class": "appikon-bis-inline-form-error",
                    html: SI.Config.labels.empty_email_phone_validation_message
                    }))
                }

                jQuery(t.target).prop('disabled', false);
            });
        }
       
    });
    }
}

      if (SI.urlIsProductPage() === true) {      SI.popup.ready.then(function () {          if (SI.popup.variants.length < 1 || !SI.Config.button.widget_button_enabled) {          console.log("A");              return;          }          var KT_TOTAL = 0;          if (SI.Config.button.countdown_timer_enabled) {              var style = document.createElement('style');
          style.id = "CountdownTimerUltimate";
          style.innerHTML = `.countdown-KT-full-width {
    width: 100%
  }

  @media (min-width: 981px) {
    .countdown-KT-full-width {
      text-align: center
    }
  }

  @media (max-width: 980px) {
    .countdown-KT-full-width {
      text-align: center
    }
  }

  .countdown-KT {
    margin-top: 0;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.3
  }

  .countdown-KT .countdown-section-KT {
    display: inline-block
  }

  .countdown-KT .separator-KT {
    color: rgba(0, 0, 0, 1.00);
    position: relative;
    display: inline-block;
    vertical-align: top;
    height: 46px;
    top: 13px;
    margin: 0 5px;
    font-weight: 900
  }

  .countdown-KT .message-KT {
    display: inline-block;
    color: rgba(0, 0, 0, 1.00);
    text-align: center;
    font-family: Josefin Sans, serif;
    font-size: 16pt;
    width: 100%;
    margin: 5px 0;
    padding-left: 5px;
    padding-right: 5px
  }

  .countdown-KT .digit-KT {
    display: inline-block;
    margin: 0 2px;
    width: 28px;
    height: 45px;
    -webkit-perspective: 100px;
    perspective: 100px
  }

  .countdown-KT .title-KT {
    display: block;
    color: rgba(0, 0, 0, 1.00);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 8pt;
    position: relative;
    text-align: center;
    margin-top: 5px
  }

  .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-KT {
    background-color: rgba(255, 255, 255, 1.00);
    color: rgba(0, 0, 0, 1.00);
    font-family: Josefin Sans, serif;
    font-size: 24pt;
    position: absolute;
    border-radius: 6px 6px 0 0;
    width: 28px;
    height: 22px;
    overflow: hidden;
    text-align: center
  }

  .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-bottom-back-KT {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .5)
  }

  .countdown-KT .digit-KT .card-bottom-back-KT, .countdown-KT .digit-KT .card-bottom-KT {
    background-color: rgba(255, 255, 255, 1.00);
    color: rgba(0, 0, 0, 1.00);
    font-family: Josefin Sans, serif;
    font-size: 24pt;
    position: absolute;
    top: 23px;
    border-radius: 0 0 6px 6px;
    width: 28px;
    height: 22px;
    overflow: hidden;
    text-align: center
  }

  .countdown-KT .digit-KT .card-KT, .countdown-KT .digit-KT .card-bottom-back-KT {
    z-index: 1
  }

  .countdown-KT .digit-KT .card-back-KT, .countdown-KT .digit-KT .card-bottom-KT {
    z-index: 0
  }

  .countdown-KT .digit-KT .card-back-text-KT, .countdown-KT .digit-KT .card-text-KT {
    line-height: 1.19;
    position: relative;
    top: 6px
  }

  .countdown-KT .digit-KT .card-bottom-back-text-KT, .countdown-KT .digit-KT .card-bottom-text-KT {
    line-height: 1.19;
    position: relative;
    top: -17px
  }

  .countdown-KT .flip-KT .card-KT {
    -webkit-animation: flipTop-KT .5s cubic-bezier(0.56, 0.56, 0.69, 0.69);
    animation: flipTop-KT .5s cubic-bezier(0.56, 0.56, 0.69, 0.69);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom
  }

  .countdown-KT .flip-KT .card-bottom-KT {
    z-index: 2;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: flipBottom-KT 1.0s cubic-bezier(0.56, 0.56, 0.69, 0.69);
    animation: flipBottom-KT 1.0s cubic-bezier(0.56, 0.56, 0.69, 0.69)
  }

  @-webkit-keyframes flipTop-KT {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg)
    }
    99% {
      -webkit-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @keyframes flipTop-KT {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg)
    }
    99% {
      -webkit-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

  @-webkit-keyframes flipBottom-KT {
    0% {
      opacity: 0
    }
    50% {
      opacity: 0;
      -webkit-transform: rotateX(90deg);
      transform: rotateX(90deg)
    }
    51% {
      opacity: 1
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg)
    }
  }

  @keyframes flipBottom-KT {
    0% {
      opacity: 0
    }
    50% {
      opacity: 0;
      -webkit-transform: rotateX(90deg);
      transform: rotateX(90deg)
    }
    51% {
      opacity: 1
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg)
    }
  }

  .hide-KT {
    display: none
  }

  .fade-in-KT {
    -webkit-animation: fade-in-anim-KT 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-anim-KT 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
  }

  @media (max-width: 768px) {
    .countdown-KT .message-KT {
      text-align: center !important
    }
  }

  @-webkit-keyframes fade-in-anim-KT {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes fade-in-anim-KT {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }`;

          logic();


          function logic() {
            document.head.appendChild(style);
            jQuery('body').append(`<div id="KILATECH_CountdownTimer_MAIN" style="display: none !important;">
</div>`);
          }

    loadAppkionTimer();

    function loadAppkionTimer() {
      //var KT_TOTAL = 0;
      var KT_countdown_update = null;

      function playanimation(old_value, new_value, type) {
        old_value = '0' + old_value;
        old_value = old_value.split("").reverse();
        new_value = '0' + new_value;
        new_value = new_value.split("").reverse();
        var left = '.countdown-KT .' + type + '0';
        var right = '.countdown-KT .' + type + '1';
        var isRightFlip = false;
        var isLeftFlip = false;
        isRightFlip = jQuery(right + ' .card-text-KT').text() != jQuery(right + ' .card-back-text-KT').text();
        isLeftFlip = jQuery(left + ' .card-text-KT').text() != jQuery(left + ' .card-back-text-KT').text();
        if (isRightFlip) {
          jQuery(right).addClass("flip-KT");
        }
        if (isLeftFlip) {
          jQuery(left).addClass("flip-KT");
        }
        setTimeout(function () {
          jQuery(right + ' .card-text-KT').html(old_value[0]);
          jQuery(right + ' .card-bottom-back-text-KT').html(old_value[0]);
          jQuery(right + ' .card-back-text-KT').html(new_value[0]);
          jQuery(right + ' .card-bottom-text-KT').html(new_value[0]);
          jQuery(left + ' .card-text-KT').html(old_value[1]);
          jQuery(left + ' .card-bottom-back-text-KT').html(old_value[1]);
          jQuery(left + ' .card-back-text-KT').html(new_value[1]);
          jQuery(left + ' .card-bottom-text-KT').html(new_value[1]);
          if (isLeftFlip) {
            jQuery(left).removeClass("flip-KT");
          }
          if (isRightFlip) {
            jQuery(right).removeClass("flip-KT");
          }
        }, 900);
      }

      function update_KT_CT() {
        var days_old = Math.floor(KT_TOTAL / (60 * 60 * 24));
        var hrs_old = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
        var mins_old = Math.floor((KT_TOTAL % (60 * 60)) / 60);
        var secs_old = KT_TOTAL % (60);
        KT_TOTAL--;
        var days = Math.floor(KT_TOTAL / (60 * 60 * 24));
        var hrs = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
        var mins = Math.floor((KT_TOTAL % (60 * 60)) / 60);
        var secs = KT_TOTAL % (60);
        if (KT_TOTAL < 0) {
          jQuery('.countdown-KT-full-width').css("display", "none");
          clearInterval(KT_countdown_update);
          return;
        }
        playanimation(days_old, days, 'days');
        playanimation(hrs_old, hrs, 'hrs');
        playanimation(mins_old, mins, 'mins');
        playanimation(secs_old, secs, 'secs');
      }

      function initDigit(old_value, new_value, type) {
        old_value = '0' + old_value;
        old_value = old_value.split("").reverse();
        new_value = '0' + new_value;
        new_value = new_value.split("").reverse();
        var left = '.countdown-KT .' + type + '0';
        var right = '.countdown-KT .' + type + '1';
        jQuery(right + ' .card-text-KT').html(old_value[0]);
        jQuery(right + ' .card-bottom-back-text-KT').html(old_value[0]);
        jQuery(right + ' .card-back-text-KT').html(new_value[0]);
        jQuery(right + ' .card-bottom-text-KT').html(new_value[0]);
        jQuery(left + ' .card-text-KT').html(old_value[1]);
        jQuery(left + ' .card-bottom-back-text-KT').html(old_value[1]);
        jQuery(left + ' .card-back-text-KT').html(new_value[1]);
        jQuery(left + ' .card-bottom-text-KT').html(new_value[1]);
      }

      function initValues() {
        var days_old = Math.floor(KT_TOTAL / (60 * 60 * 24));
        var hrs_old = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
        var mins_old = Math.floor((KT_TOTAL % (60 * 60)) / 60);
        var secs_old = KT_TOTAL % (60);
        KT_TOTAL--;
        var days = Math.floor(KT_TOTAL / (60 * 60 * 24));
        var hrs = Math.floor((KT_TOTAL % (60 * 60 * 24)) / (60 * 60));
        var mins = Math.floor((KT_TOTAL % (60 * 60)) / 60);
        var secs = KT_TOTAL % (60);
        initDigit(days_old, days, 'days');
        initDigit(hrs_old, hrs, 'hrs');
        initDigit(mins_old, mins, 'mins');
        initDigit(secs_old, secs, 'secs');
      }

      function start_Countdown_KT() {

        var variant_id;
        var variant = SI.detectVariant(SI.popup);
        if (variant && SI.popup.variantIsUnavailable(variant)) {
            variant_id = variant.id;
        }
        var products = JSON.parse(SI.Config.button.countdown_timer_products);
        var selectedVariant = products.find(p => p.variantId == variant_id || (p.variantId == 0 && p.productId == SI.popup.product.id));

        KT_TOTAL = selectedVariant ? Math.round((selectedVariant.expirationTime - Date.now())/1000) : -1;

        if(SI.Config.button.countdown_timer_expiration && SI.Config.button.countdown_timer_reset_enabled) {
            var n = 2;
            while(KT_TOTAL <= 0) {
                KT_TOTAL = Math.round((SI.Config.button.countdown_timer_expiration + (n * 86400) - Date.now())/1000);
                n = n * 2;
            }
        }

        if (KT_TOTAL < 0) {
          return
        }

        initValues();
        KT_countdown_update = window.setInterval(() => {
          update_KT_CT();
        }, 1000);
        jQuery('.countdown-KT-full-width').removeClass('hide-KT');
        jQuery('.countdown-KT-full-width').addClass('fade-in-KT');
      }

      start_Countdown_KT();
    }
          }            var link = jQuery('<button>', {              text: SI.Config.button.caption ,              css: {                  width: '100%'              },              class: 'product-form__submit button button--full-width button--secondary',              href: '#',              id: 'SI_trigger'          }).hide();                    if(SI.Config.isInlineFormEnabled) {           link = appikonBisInlineForm;          }              var customSelector = '.product-form';          var placement = 'AFTER';            if(jQuery('#SI_trigger').length == 0  && jQuery('#appikon-bis-inline-form-wrapper').length == 0){              if (placement === "BEFORE") {                  jQuery(link).insertBefore(customSelector);              } else if (placement === "AFTER") {                  jQuery(link).insertAfter(customSelector);              } else if (placement === "FIRST_CHILD") {                  jQuery(customSelector).prepend(link);              } else if (placement === "LAST_CHILD") {                  jQuery(customSelector).append(link);              }          }                       var countdownTimer = jQuery('<div class="countdown-KT-full-width hide-KT"id="countdownultimate-KT"><div class="countdown-KT"><div class="message-KT">Product Becoming Available in</div><br style="height: 0px;"><div class="countdown-section-KT day"><div class="digit-KT days0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT days1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">DAYS</div></div><div class="separator-KT sday">:</div><div class="countdown-section-KT hour"><div class="digit-KT hrs0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT hrs1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">HRS</div></div><div class="separator-KT shour">:</div><div class="countdown-section-KT minute"><div class="digit-KT mins0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT mins1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">MINS</div></div><div class="separator-KT sminute">:</div><div class="countdown-section-KT second"><div class="digit-KT secs0"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="digit-KT secs1"><div class="card-KT"><div class="card-text-KT"></div></div><div class="card-back-KT"><div class="card-back-text-KT"></div></div><div class="card-bottom-KT"><div class="card-bottom-text-KT"></div></div><div class="card-bottom-back-KT"><div class="card-bottom-back-text-KT"></div></div></div><div class="title-KT">SECS</div></div><div style="text-align: right;display: block !important;width: 100% !important; max-width: 100% !important; height: 100% !important; max-height: 100% !important;"></div></div></div>');          if (SI.Config.button.countdown_timer_enabled && KT_TOTAL >= 0) {            if(jQuery('form[action="/cart/add"]').length == 0){            jQuery(countdownTimer).insertAfter(link)                        }else{            jQuery('form[action="/cart/add"]').append(countdownTimer);            }                                  }            var variant_id;          var reload = function () {              setTimeout(function () {                  try {                      if (SI.Config.button.always_show_widget) {                          variant_id = SI.popup.variants[0].id;                         link.show();                          if (SI.Config.button.countdown_timer_enabled && KT_TOTAL >= 0) {                              countdownTimer.show();                          }                      } else {                          var variant = SI.detectVariant(SI.popup);                          if (variant && SI.popup.variantIsUnavailable(variant)) {                              variant_id = variant.id;                            link.show();                                                        if (SI.Config.button.countdown_timer_enabled && KT_TOTAL >= 0) {                                  countdownTimer.show();                              }                          } else {                              link.hide();                              if (SI.Config.button.countdown_timer_enabled && KT_TOTAL >= 0) {                                  countdownTimer.hide();                              }                            }                      }                  } catch (e) {                      console.log(e)                  }              }, 13);          };            link.click(function () {              SI.popup.form.selectVariant(variant_id)          });            setTimeout(reload, 13);          jQuery(document).on('change', reload);          jQuery('[class*="swatch" i]').on('click tap touchstart', reload);          jQuery('[class*="option" i]').on('click tap touchstart', '*', reload);          jQuery('[id*="SingleOptionSelector" i]').on('click tap touchstart', '*', reload);   });  }

      deferBisProductPageButton(setBisProductPageButtonStyles);
    }

    function setBisProductPageButtonStyles() {

      var mainButtonSettings = SI.Config.main_button;

      var mainButton = jQuery("#SI_trigger");

      if(mainButtonSettings.main_caption) {
        if(mainButton.is('input')) {
          mainButton.val(mainButtonSettings.main_caption);
        } else {
          mainButton.html(mainButtonSettings.main_caption);
        }
      }

      if(mainButtonSettings.main_css_classes) {
        var originalMainCssClasses = mainButton.attr("class");
        mainButton.attr( "class", mainButtonSettings.main_css_classes.trim() + " " + originalMainCssClasses);
      }

      if(mainButtonSettings.main_button_width) {
        mainButton.css("width", mainButtonSettings.main_button_width + "%");
      }

      if(mainButtonSettings.main_button_height) {
        mainButton.css("height", mainButtonSettings.main_button_height + "px");
      }

      if(mainButtonSettings.main_caption_size) {
        mainButton.css("font-size", mainButtonSettings.main_caption_size + "px");
      }

      if(mainButtonSettings.main_margin_top) {
        mainButton.css("margin-top",  mainButtonSettings.main_margin_top + "px");
      }

      if(mainButtonSettings.main_margin_bottom) {
        mainButton.css("margin-bottom", mainButtonSettings.main_margin_bottom + "px");
      }

      if(mainButtonSettings.main_margin_left) {
        mainButton.css("margin-left", mainButtonSettings.main_margin_left + "px");
      }

      if(mainButtonSettings.main_margin_right) {
        mainButton.css("margin-right", mainButtonSettings.main_margin_right + "px");
      }

      if(mainButtonSettings.main_text_color) {
        mainButton.css("color", mainButtonSettings.main_text_color);
      }

      if(mainButtonSettings.main_hover_text_color) {
        var originalMainButtonHoverTextColor;
        mainButton.hover(
          function(){
            originalMainButtonHoverTextColor = jQuery(this).css("color");
            jQuery(this).css("color", mainButtonSettings.main_hover_text_color);
          },
          function(){
            jQuery(this).css("color", originalMainButtonHoverTextColor
              ? originalMainButtonHoverTextColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_text_style) {
        switch (mainButtonSettings.main_text_style) {
            case 'NORMAL':
              mainButton.css("font-weight", "normal");
              mainButton.css("font-style", "normal");
              break;

            case 'BOLD':
              mainButton.css("font-weight", "bold");
              break;

            case 'ITALIC':
              mainButton.css("font-style", "italic");
              break;

            case 'UNDERLINE':
              mainButton.css("text-decoration", "underline");
              break;

            default:
        }
      }

      if(mainButtonSettings.main_background_color) {
        mainButton.css("background-color", mainButtonSettings.main_background_color);
      }

      if(mainButtonSettings.main_hover_background_color) {
        var originalMainHoverBgColor;
        mainButton.hover(
          function(){
            originalMainHoverBgColor = jQuery(this).css("background-color");
            jQuery(this).css("background-color", mainButtonSettings.main_hover_background_color);
          },
          function(){
            jQuery(this).css("background-color", originalMainHoverBgColor
              ? originalMainHoverBgColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_border_color) {
        mainButton.css("border-color", mainButtonSettings.main_border_color);
      }

      if(mainButtonSettings.main_hover_border_color) {
        var originalMainHoverBorderColor;
        mainButton.hover(
          function(){
            originalMainHoverBorderColor = jQuery(this).css("border-color");
            jQuery(this).css("border-color", mainButtonSettings.main_hover_border_color);
          },
          function(){
            jQuery(this).css("border-color", originalMainHoverBorderColor
              ? originalMainHoverBorderColor
              : "");
          }
        );
      }

      if(mainButtonSettings.main_border_size) {
        mainButton.css("border-width", mainButtonSettings.main_border_size + "px");
      }

      if(mainButtonSettings.main_border_radius) {
        mainButton.css("border-radius", mainButtonSettings.main_border_radius + "px");
      }
    }

    SI.domReady().then(deferJquery(bisProductPageFunction));

  }
)();



