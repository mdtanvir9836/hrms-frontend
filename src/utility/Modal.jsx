import React from "react";
import "../style/Modal.css"

function Modal() {
  return (
    <div class="fac-cookiebot">
      <div class="fcm-modal">
        <div class="fcm-title-wrapper">
          <span class="fcm-title">This website uses cookies</span>
          <div class="fcm-lock">
            <svg
              class="icon"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00004 2.83333C8.07964 2.83333 7.19195 3.20635 6.53363 3.87839C5.87451 4.55124 5.50004 5.46884 5.50004 6.43056V8.66667H12.5V6.43056C12.5 5.46884 12.1256 4.55124 11.4665 3.87839C10.8081 3.20636 9.92045 2.83333 9.00004 2.83333ZM14.8334 8.66667V6.43056C14.8334 4.86535 14.2245 3.35952 13.1333 2.24557C12.0413 1.1308 10.555 0.5 9.00004 0.5C7.44509 0.5 5.95881 1.1308 4.86679 2.24557C3.77557 3.35952 3.16671 4.86535 3.16671 6.43056V8.66667C1.87804 8.66667 0.833374 9.71134 0.833374 11V18C0.833374 19.2887 1.87804 20.3333 3.16671 20.3333H14.8334C16.122 20.3333 17.1667 19.2887 17.1667 18V11C17.1667 9.71134 16.122 8.66667 14.8334 8.66667ZM3.16671 11V18H14.8334V11H3.16671ZM9.00004 12.1667C9.64437 12.1667 10.1667 12.689 10.1667 13.3333V15.6667C10.1667 16.311 9.64437 16.8333 9.00004 16.8333C8.35571 16.8333 7.83337 16.311 7.83337 15.6667V13.3333C7.83337 12.689 8.35571 12.1667 9.00004 12.1667Z"
                fill="#07A2AD"
              ></path>
            </svg>
          </div>
        </div>
        <div class="fcm-description">
          <span>
            HRMS uses cookies to personalise content and ads, to provide
            social media features and to analyse our traffic.
            <br />
            We also share information about your use of our site with our social
            media, advertising and analytics partners who may combine it with
            other information that you've provided to them or that they've
            collected from your use of their services.
            <a href="/cookies" target="_blank">
              Manage cookies
            </a>
          </span>
          <a class="fcm-customize">Customize</a>
          <div style={{display: "none"}}>
            <div>
              <div class="fcm-customize-wrapper">
                <label class="fcm-customize-options" for="necessary">
                  <div class="fcm-customize-option">
                    <span>Necessary</span>
                    <input
                      disabled=""
                      type="checkbox"
                      value="necessary"
                      id="necessary"
                    />
                  </div>
                  <p>
                    Necessary cookies help make a website usable by enabling
                    basic functions like page navigation and access to secure
                    areas of the website. The website cannot function properly
                    without these cookies.
                  </p>
                </label>
                <label class="fcm-customize-options" for="statistics">
                  <div class="fcm-customize-option">
                    <span>Statistics</span>
                    <input type="checkbox" value="statistics" id="statistics" />
                  </div>
                  <p>
                    Statistic cookies help website owners to understand how
                    visitors interact with websites by collecting and reporting
                    information anonymously.
                  </p>
                </label>
                <label class="fcm-customize-options" for="marketing">
                  <div class="fcm-customize-option">
                    <span>Marketing</span>
                    <input type="checkbox" value="marketing" id="marketing" />
                  </div>
                  <p>
                    Marketing cookies are used to track visitors across
                    websites. The intention is to display ads that are relevant
                    and engaging for the individual user and thereby more
                    valuable for publishers and third party advertisers.
                  </p>
                </label>
                <label class="fcm-customize-options" for="preferences">
                  <div class="fcm-customize-option">
                    <span>Preferences</span>
                    <input
                      type="checkbox"
                      value="preferences"
                      id="preferences"
                    />
                  </div>
                  <p>
                    Preference cookies enable a website to remember information
                    that changes the way the website behaves or looks, like your
                    preferred language or the region that you are in.
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="fcm-button-wrapper">
          <button class="fcm-button fcm-secondary" style={{display: "none"}}>
            Allow selection
          </button>
          <button class="fcm-button fcm-secondary">Reject cookies</button>
          <button class="fcm-button fcm-primary">Accept cookies</button>
        </div>
        <div class="fcm-close" style={{display: "none"}}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Modal;
