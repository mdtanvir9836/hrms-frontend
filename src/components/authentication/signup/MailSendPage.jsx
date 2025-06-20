import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../../redux/slice/userSlice";
import logo from '../../../assets/images/logo.png';

function MailSendPage() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const { loading, error, users } = useSelector(
    (state) => state.user
  );
   useEffect(()=>{
      dispatch(fetchUserById(userId))
    },[])
  return (
    <main class="flex sm:h-screen w-screen overflow-x-hidden flex-row">
      <div class="flex flex-col h-[720px] sm:h-screen w-screen overflow-hidden">
        <a
          class="self-center mt-16"
          title="HRMS"
          href="https://HRMShr.com"
        >
        <img
                    alt="HRMS logo"
                    loading="lazy"
                    width="153"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={logo}
                  />
        </a>
        <div class="flex flex-1 flex-col items-center justify-center sm:mt-md sm:mb-0 my-s128 px-md">
          <div class="flex flex-col items-center justify-center gap-y-md max-w-[544px] mb-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="none"
              viewBox="0 0 72 72"
              aria-labelledby=""
              aria-label=""
              class="fill-current text-gray-800 h-s72 w-s72 min-w-s72"
            >
              <path
                fill="#fff"
                stroke="#515164"
                stroke-width="2"
                d="m6.522 31.932.71.699-.71-.7a4.14 4.14 0 0 0-1.188 2.903v30.38a4.14 4.14 0 0 0 4.14 4.14h52.988a4.14 4.14 0 0 0 4.14-4.14V34.845a4.14 4.14 0 0 0-1.206-2.92l-2.939-2.953L41.76 8.181l-3.03-3.045a4.14 4.14 0 0 0-5.887.018l-2.979 3.031-19.867 20.21-3.475 3.537Z"
              ></path>
              <rect
                width="51.038"
                height="31.443"
                x="10.482"
                y="9.114"
                fill="#fff"
                rx="2.278"
              ></rect>
              <path
                fill="#fff"
                stroke="#515164"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M66.75 65.25v0c0-.944-.511-1.813-1.336-2.271l-28.1-15.624a3.14 3.14 0 0 0-3.068.01L6.582 62.97a2.616 2.616 0 0 0-1.331 2.28v0"
              ></path>
              <path
                stroke="#515164"
                stroke-linecap="round"
                stroke-width="2"
                d="m5.143 34.66.002.431A3.27 3.27 0 0 0 6.756 37.9l21.31 12.54"
              ></path>
              <path
                fill="#515164"
                d="M65.716 34.268a1 1 0 1 1 2 .035l-2-.035ZM43.55 51.39a1 1 0 0 1-1.015-1.723l1.015 1.723Zm24.165-17.088-.009.484-2-.035.009-.484 2 .035Zm-2.11 4.088-22.055 13-1.015-1.723 22.054-13 1.016 1.723Zm2.101-3.604a4.27 4.27 0 0 1-2.101 3.604l-1.016-1.723a2.27 2.27 0 0 0 1.117-1.916l2 .035Z"
              ></path>
              <path
                fill="#fff"
                stroke="#515164"
                stroke-linecap="round"
                stroke-width="2"
                d="M61.546 39.57V11.704A2.747 2.747 0 0 0 58.8 8.956h-45.53a2.747 2.747 0 0 0-2.748 2.747v27.868"
              ></path>
              <path
                fill="#07A2AD"
                d="M36.098 37.608c-5.381-.005-9.742-4.366-9.748-9.746v-.195c.107-5.356 4.518-9.622 9.874-9.552 5.359.072 9.655 4.453 9.62 9.81-.035 5.358-4.388 9.683-9.746 9.683Zm-4.475-10.146-1.374 1.374 3.899 3.9 7.798-7.798-1.374-1.384-6.424 6.423-2.525-2.515Z"
              ></path>
            </svg>
            <div class="flex flex-col items-center justify-center text-center gap-y-sm">
              <div class="text-center">
                <h1 class="font-sans max-w-full text-3xl md:text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline">
                  Check your email
                </h1>
              </div>
              <div class="font-sans max-w-full text-base md:text-sm font-normal whitespace-pre-wrap text-center text-neutral-100 inline">
                Almost there! We just sent an email to{" "}
                {users?.email} so you can confirm your address
                and activate your account.
              </div>
              <a
                href="/confirm_new?email=contact2mahadebdutta%40gmail.com"
                class="text-viridian-120 font-medium underline px-sm"
                target="_self"
              >
                Resend the email
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-sm w-full md:w-auto md:flex-row justify-center items-center lg:flex-row mt-5">
            <a
              class="text-viridian-120 font-medium"
              target="_self"
              title="Open Gmail"
              href="https://mail.google.com/mail/u/contact2mahadebdutta@gmail.com/#search/from:(info@reply.HRMS.co)+in:anywhere"
            >
              <div class="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 py-s pr-l pl-ml text-neutral-100 border-neutral-100 bg-transparent hover:text-neutral-100 hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-5 cursor-pointer py-sm h-auto w-full px-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-labelledby=""
                    aria-label=""
                    class="fill-current h-md w-md min-w-md mr-2xs"
                  >
                    <path
                      fill="#4285F4"
                      d="M6.848 18.926V11.24L4.464 9.058l-2.138-1.21v9.722c0 .75.609 1.356 1.357 1.356h3.165Z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M17.701 18.926h3.166c.75 0 1.356-.608 1.356-1.357V7.847l-2.421 1.387-2.1 2.005v7.687Z"
                    ></path>
                    <path
                      fill="#EA4335"
                      d="m6.848 11.239-.324-3.004.324-2.875 5.426 4.07 5.427-4.07.362 2.72-.362 3.159-5.427 4.07-5.426-4.07Z"
                    ></path>
                    <path
                      fill="#FBBC04"
                      d="M17.701 5.36v5.879l4.522-3.392V6.04c0-1.678-1.915-2.634-3.255-1.628l-1.267.95Z"
                    ></path>
                    <path
                      fill="#C5221F"
                      d="m2.326 7.847 2.08 1.56 2.442 1.832V5.36l-1.266-.95C4.24 3.406 2.326 4.362 2.326 6.04v1.808Z"
                    ></path>
                  </svg>
                </div>
                <span class="font-medium">Open Gmail</span>
              </div>
            </a>
            <a
              href="https://outlook.live.com/mail/?login_hint=contact2mahadebdutta%40gmail.com"
              class="text-viridian-120 font-medium"
              target="_self"
              title="Open Outlook"
            >
              <div class="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 py-s pr-l pl-ml text-neutral-100 border-neutral-100 bg-transparent cursor-pointer hover:text-neutral-100 hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-5 py-sm h-auto w-full px-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-labelledby=""
                    aria-label=""
                    class="fill-current h-md w-md min-w-md mr-2xs"
                  >
                    <path
                      fill="#0072C6"
                      d="M14.141 6.817v3.52l1.232.775c.044.01.09.01.135 0l5.296-3.57a.754.754 0 0 0-.617-.725h-6.046Z"
                    ></path>
                    <path
                      fill="#0072C6"
                      d="m14.14 11.65 1.124.772a.336.336 0 0 0 .349 0c-.193.117 5.19-3.457 5.19-3.457v6.471a.907.907 0 0 1-.958 1H14.14V11.65Zm-5.813-1.622a1.034 1.034 0 0 0-.913.538 2.656 2.656 0 0 0-.338 1.426c-.026.497.092.99.338 1.422a1.029 1.029 0 0 0 1.781.014c.244-.43.359-.92.331-1.414a2.809 2.809 0 0 0-.321-1.466.988.988 0 0 0-.878-.52Z"
                    ></path>
                    <path
                      fill="#0072C6"
                      d="M3 5.028v13.775L13.479 21V3L3 5.028Zm7.012 9.216a2.077 2.077 0 0 1-1.735.875 2.05 2.05 0 0 1-1.698-.847 3.51 3.51 0 0 1-.652-2.208 3.772 3.772 0 0 1 .666-2.324 2.1 2.1 0 0 1 1.764-.89 2.003 2.003 0 0 1 1.678.85c.455.655.68 1.442.643 2.239a3.704 3.704 0 0 1-.666 2.305Z"
                    ></path>
                  </svg>
                </div>
                <span class="font-medium">Open Outlook</span>
              </div>
            </a>
          </div>
        </div>
        <div class="py-md">
          <footer class="">
            <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 mb-4xl md:mb-auto">
              <nav
                class="-mx-5 -my-2 flex flex-wrap justify-center items-center gap-sm"
                aria-label="Footer"
              >
                <div class="flex flex-row justify-center">
                  <span class="font-sans max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-60 inline">
                    © 2024 HRMS
                  </span>
                </div>
                <div class="flex flex-row justify-center">
                  <a
                    class="text-viridian-120 font-medium"
                    target="_blank"
                    href="/privacy"
                  >
                    <span class="font-sans max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-60 inline hover:text-neutral-100">
                      Privacy
                    </span>
                  </a>
                </div>
                <div class="flex flex-row justify-center">
                  <a
                    class="text-viridian-120 font-medium"
                    target="_blank"
                    href="/legal"
                  >
                    <span class="font-sans max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-60 inline hover:text-neutral-100">
                      Legal
                    </span>
                  </a>
                </div>
                <div class="flex flex-row justify-center">
                  <a
                    class="text-viridian-120 font-medium"
                    target="_blank"
                    href="/terms-of-use"
                  >
                    <span class="font-sans max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-60 inline hover:text-neutral-100">
                      Terms &amp; Conditions
                    </span>
                  </a>
                </div>
                <div class="flex flex-row justify-center">
                  <a
                    class="text-viridian-120 font-medium"
                    target="_blank"
                    href="/cookies"
                  >
                    <span class="font-sans max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-60 inline hover:text-neutral-100">
                      Cookies
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default MailSendPage;
