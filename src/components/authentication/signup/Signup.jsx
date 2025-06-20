import React, { useState } from "react";
import "../../../style/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-screen md:h-screen flex flex-col md:flex-row relative transition-opacity duration-100"
      style={{ opacity: "100px" }}
    >
      <div className="hidden md:block w-2/5 bg-slateBlue-10 p-s48 relative overflow-hidden max-w-[740px]">
        <div className="absolute w-full h-full left-0 top-0 bg-slateBlue-10">
          <div
            className="absolute rounded-full opacity-70 h-[1600px] w-[1600px] left-[-960px] bottom-[-1300px] rotate-[-75deg]"
            style={{
              background:
                "linear-gradient(159.7deg, rgba(255, 255, 255, 0.8) 40.15%, rgba(255, 255, 255, 0) 89.92%)",
            }}
          ></div>
          <div
            className="absolute rounded-full opacity-70 h-[909px] w-[909px] right-[-650px] top-[-645px] rotate-[120deg]"
            style={{
              background:
                "linear-gradient(159.7deg, rgba(255, 255, 255, 0.8) 40.15%, rgba(255, 255, 255, 0) 89.92%)",
            }}
          ></div>
        </div>
        <div className="flex flex-col relative h-full items-center">
          <div className="max-w-[468px] h-full flex flex-col gap-sm">
            <div className="w-full self-start">
              <a
                className="text-viridian-120 font-medium"
                target="_self"
                href="/"
              >
                <img
                  alt="HRMS logo"
                  loading="lazy"
                  width="153"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://assets.HRMShr.com/assets/public/HRMS-logo-d7cd28b139c5b1a895799fe8d14afb76cd8f132013701c94dddded205ad0af88.svg"
                />
              </a>
            </div>
            <div className="m-auto">
              <span className="font-sans max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline lg:text-6xl">
                Explore how HRMS can work for you
              </span>
              <div className="mt-sm">
                <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                  <span className="font-sans max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                    +600,000
                  </span>
                  <span className="font-sans max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                    {" "}
                    users worldwide.
                  </span>
                </p>
                <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                  <span className="font-sans max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                    +11,000
                  </span>
                  <span className="font-sans max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                    {" "}
                    companies use HRMS.
                  </span>
                </p>
                <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                  <span className="font-sans max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                    +40h
                  </span>
                  <span className="font-sans max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                    {" "}
                    per month saved in manual work.
                  </span>
                </p>
              </div>
              <div className="mt-sm">
                <img
                  alt="HRMS clients"
                  title="HRMS clients"
                  loading="lazy"
                  width="2401"
                  height="175"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-auto object-contain"
                  style={{ color: "transparent" }}
                  srcset="https://www.datocms-assets.com/58969/1712074563-company-logos-demo-us.png?auto=format&amp;fit=max&amp;w=3840&amp;q=75 1x"
                  src="https://www.datocms-assets.com/58969/1712074563-company-logos-demo-us.png?auto=format&amp;fit=max&amp;w=3840&amp;q=75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col p-lg xl:px-s48 w-full overflow-auto">
        {/* <EmailVerification /> */}

        {/* <OrganizationAdd/> */}
        <div
          style={{ marginTop: 20, marginRight: 30 }}
          class="font-sans max-w-full text-base md:text-sm font-normal whitespace-pre-wrap text-left text-neutral-100 inline mt-auto self-start md:self-end mr-4 mb-sm mt-xl md:mt-0"
        >
          Do you already have an account?{" "}
          <button
            class="text-viridian-120 font-medium underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
