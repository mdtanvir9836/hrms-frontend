import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  addOrganization,
  resetState,
} from "../../../redux/slice/oraganizationSlice";
import logo from '../../../assets/images/logo.png';

function FirstPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, organization } = useSelector(
    (state) => state.organization
  );

  const validationSchema = Yup.object().shape({
    noEmployees: Yup.number()
      .required("Number of Employees is required")
      .positive("Must be a positive number")
      .integer("Must be an integer"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Work email is required"),
  });

  const initialValues = {
    noEmployees: "",
    email: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(addOrganization(values))
      .unwrap()
      .then(() => {
        navigate("/name-setup");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <>
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
                    src={logo}
                  />
                </a>
              </div>
              <div className="m-auto">
                <span className=" max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline lg:text-6xl">
                  Explore how HRMS can work for you
                </span>
                <div className="mt-sm">
                  <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                    <span className=" max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                      +600,000
                    </span>
                    <span className=" max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                      {" "}
                      users worldwide.
                    </span>
                  </p>
                  <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                    <span className=" max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                      +11,000
                    </span>
                    <span className=" max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                      {" "}
                      companies use HRMS.
                    </span>
                  </p>
                  <p className="first:mt-0 mt-xs last:mb-0 break-words block">
                    <span className=" max-w-full text-4xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline mr-xs">
                      +40h
                    </span>
                    <span className=" max-w-full text-base md:text-lg font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
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
          <div class="xl:max-w-s544 md:flex md:flex-grow justify-center items-center mx-auto w-full">
            <div class="md:hidden self-start">
              <a class="text-viridian-120 font-medium" target="_self" href="/">
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
            </div>
            <div class="mt-xl md:pt-s88 xl:pt-s42 md:my-auto w-full">
              <div class="flex flex-col gap-md justify-center items-center w-full">
                <div class="flex flex-col justify-center w-full gap-xs items-left">
                  <div class="text-left gap-xs flex flex-col -mt-2xs">
                    <h2 class=" max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline ">
                      What's your business
                    </h2>
                    <div class="self-start">
                      <p class="text-left mt-sm first:mt-0">
                        <span class=" max-w-full text-sm font-normal whitespace-pre-wrap text-left text-neutral-80 inline ">
                          Tell us a little about yourself so we can tailor your
                          experience
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-md w-full">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting,values }) => (
                      <Form className="w-full">
                        <input
                          class="absolute left-[-9999px] top-[-9999px]"
                          autocomplete="nope"
                          type="text"
                          name="HRMS_first_name"
                        />
                        <div class="flex flex-col gap-sm w-full">
                          <div>
                            <div class="flex flex-col w-full">
                              <div class="relative">
                                <Field
                                  as="select"
                                  name="noEmployees"
                                  class="peer w-full px-sm rounded-md focus:outline-none focus:ring-transparent placeholder-transparent border-neutral-20 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 pt-m h-2xl truncate pr-s24"
                                  style={{
                                    paddingTop:
                                      values.noEmployees === ""
                                        ? "1rem"
                                        : "",
                                    color:
                                      values.noEmployees === "" &&
                                      "gray",
                                    paddingBottom:
                                    values.noEmployees === ""
                                        ? "1rem"
                                        : "",
                                    backgroundColor:
                                    values.noEmployees !== "" &&
                                      "#e8f0ff",
                                  }}
                                >
                                  <option
                                    class="text-neutral-60"
                                    disabled
                                    value=""
                                  >
                                    Number of Employees
                                  </option>
                                  <option class="text-neutral-120" value="10">
                                    1 - 10
                                  </option>
                                  <option class="text-neutral-120" value="30">
                                    11 - 30
                                  </option>
                                  <option class="text-neutral-120" value="50">
                                    31 - 50
                                  </option>
                                  <option class="text-neutral-120" value="100">
                                    51 - 100
                                  </option>
                                  <option class="text-neutral-120" value="150">
                                    101 - 150
                                  </option>
                                  <option class="text-neutral-120" value="300">
                                    151 - 300
                                  </option>
                                  <option class="text-neutral-120" value="500">
                                    301 - 500
                                  </option>
                                  <option class="text-neutral-120" value="1000">
                                    501 - 1000
                                  </option>
                                  <option class="text-neutral-120" value="1001">
                                    1000+
                                  </option>
                                </Field>

                                {values.noEmployees !== "" && (
                                  <label class="absolute left-0 transition-all truncate text-ellipsis pointer-events-none text-neutral-60 text-2xs top-xs peer-focus:text-viridian-100 pl-sm">
                                    Number of Employees
                                  </label>
                                )}
                                <ErrorMessage
                                  name="noEmployees"
                                  component="div"
                                  className="text-red-500 text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="w-full">
                              <div class="relative text-ellipsis overflow-hidden">
                                <div class="absolute top-1/2 -translate-y-1/2 left-sm z-10">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    aria-labelledby=""
                                    aria-label=""
                                    class="fill-current text-gray-800 h-md w-md min-w-md"
                                  >
                                    <path
                                      fill="#A8A8B1"
                                      fill-rule="evenodd"
                                      d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm12.586 0H7.414l3.879 3.879a1 1 0 0 0 1.414 0L16.586 8ZM6 9.414V16h12V9.414l-3.879 3.879a3 3 0 0 1-4.242 0L6 9.414Z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <Field
                                  name="email"
                                  type="email"
                                  class="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100  rounded-md h-2xl pt-m pl-s48 disabled:hover:cursor-not-allowed"
                                  placeholder="Work email address"
                                ></Field>
                                <label class="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-s48 peer-focus:text-viridian-100">
                                  Work email address
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="mx-sm">
                            <span class=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-80 inline">
                              <div class="relative">
                                <div class="">
                                  <div class=" max-w-full text-xs md:text-xs font-normal whitespace-pre-wrap text-left">
                                    By submitting my personal data, I consent to
                                    HRMS collecting, processing and storing
                                    my information in accordance with the{" "}
                                    <a
                                      class="text-neutral-80 font-medium underline"
                                      target="_blank"
                                      href="/terms-of-use"
                                    >
                                      Terms and Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a
                                      class="text-neutral-80 font-medium underline"
                                      target="_blank"
                                      href="/privacy"
                                    >
                                      Privacy Policy
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                          {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                          )}
                          <button
                            type="submit"
                            disabled={isSubmitting || loading}
                            class="inline-flex focus:outline-none w-full"
                          >
                            <div class="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 py-s px-l w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100 text-center">
                              <div class=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline ">
                                {" "}
                              </div>
                              <div className="max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline tracking-wide">
                                {loading ? "Submitting..." : "Continue"}
                              </div>
                            </div>
                          </button>
                        </div>
                        <div id="here-is-the-captcha">
                          <div>
                            <div>
                              <div
                                class="grecaptcha-badge"
                                data-style="bottomright"
                                style={{
                                  width: "256px",
                                  height: "60px",
                                  display: "block",
                                  transition: "right 0.3s",
                                  position: "fixed",
                                  bottom: "14px",
                                  right: "-186px",
                                  boxShadow: "gray 0px 0px 5px",
                                  borderRadius: "2px",
                                  overflow: "hidden",
                                }}
                              >
                                <div class="grecaptcha-logo">
                                  <iframe
                                    title="reCAPTCHA"
                                    width="256"
                                    height="60"
                                    role="presentation"
                                    name="a-imkq8xhnk1pd"
                                    frameborder="0"
                                    scrolling="no"
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le9b3AiAAAAAPEjviTu1fzKA7kRMfgKb6-EKcD6&amp;co=aHR0cHM6Ly9mYWN0b3JpYWxoci5jb206NDQz&amp;hl=en&amp;type=image&amp;v=pPK749sccDmVW_9DSeTMVvh2&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=ft79eidrz2yj"
                                  ></iframe>
                                </div>
                                <div class="grecaptcha-error"></div>
                                <textarea
                                  id="g-recaptcha-response"
                                  name="g-recaptcha-response"
                                  class="g-recaptcha-response"
                                  style={{
                                    width: "250px",
                                    height: "40px",
                                    border: "1px solid rgb(193, 193, 193)",
                                    margin: "10px 25px",
                                    padding: "0px",
                                    resize: "none",
                                    display: "none",
                                  }}
                                ></textarea>
                              </div>
                              <iframe style={{ display: "none" }}></iframe>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full md:flex lg:flex items-center justify-center flex-col">
            <div
              className="relative text-center my-lg text-neutral-40"
              style={{
                borderTop: "1px solid gray",
                height: "1px",
                width: "50%",
              }}
            >
              <span
                className="relative px-sm text-neutral-40 bg-white"
                style={{ top: "-18px" }}
              >
                or
              </span>
            </div>

            <div class="grid gap-sm grid-cols-1" style={{ width: "53%" }}>
              <a
                href="https://HRMS-production.auth.eu-central-1.amazoncognito.com/oauth2/authorize?redirect_uri=https://api.HRMShr.com/cognito/oauth&amp;response_type=CODE&amp;client_id=53avjrh4f9bre669tbhbeo03gn&amp;scope=email%20openid%20profile%20aws.cognito.signin.user.admin&amp;state=eyJob3N0IjoiYXBpLmZhY3RvcmlhbGhyLmNvbSIsImlzX3NpZ251cCI6Inll%0AcyIsInJldHVybl90byI6Imh0dHBzOi8vZmFjdG9yaWFsaHIuY29tIiwibG9j%0AYWxlIjoiZW4tVVMifQ%3D%3D%0A&amp;identity_provider=Google"
                class="text-viridian-120 font-medium"
                target="_self"
                title="Continue with Google"
              >
                <div
                  class="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 items-center min-h-xl px-m w-full text-neutral-100 border-neutral-100 bg-transparent cursor-pointer hover:text-neutral-100 hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-5 py-sm h-auto"
                  style={{ padding: 8 }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      fill="none"
                      viewBox="0 0 25 24"
                      aria-labelledby=""
                      aria-label=""
                      class="fill-current h-md w-md min-w-md mr-2xs"
                    >
                      <path
                        fill="#4285F4"
                        d="M20.65 12.22c0-.66-.054-1.142-.172-1.642h-7.69v2.98H17.3c-.09.74-.582 1.855-1.674 2.604l-.016.1 2.432 1.846.169.016c1.547-1.4 2.439-3.46 2.439-5.904Z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M12.787 20.069c2.212 0 4.068-.714 5.425-1.944l-2.585-1.963c-.692.473-1.62.803-2.84.803a4.922 4.922 0 0 1-4.66-3.336l-.096.008-2.528 1.918-.034.09c1.347 2.622 4.114 4.424 7.318 4.424Z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M8.127 13.63a4.853 4.853 0 0 1-.273-1.589c0-.553.1-1.088.264-1.587l-.005-.107L5.553 8.4l-.084.039a7.905 7.905 0 0 0-.873 3.603c0 1.294.318 2.516.873 3.604l2.658-2.016Z"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M12.787 7.118c1.538 0 2.576.65 3.167 1.195l2.312-2.212C16.846 4.808 15 4.014 12.787 4.014c-3.204 0-5.97 1.802-7.318 4.424l2.649 2.016a4.942 4.942 0 0 1 4.67-3.336Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="font-medium" style={{ padding: 10 }}>
                    Continue with Google
                  </span>
                </div>
              </a>
              <a
                href="https://HRMS-production.auth.eu-central-1.amazoncognito.com/oauth2/authorize?redirect_uri=https://api.HRMShr.com/cognito/oauth&amp;response_type=CODE&amp;client_id=53avjrh4f9bre669tbhbeo03gn&amp;scope=email%20openid%20profile%20aws.cognito.signin.user.admin&amp;state=eyJob3N0IjoiYXBpLmZhY3RvcmlhbGhyLmNvbSIsImlzX3NpZ251cCI6Inll%0AcyIsInJldHVybl90byI6Imh0dHBzOi8vZmFjdG9yaWFsaHIuY29tIiwibG9j%0AYWxlIjoiZW4tVVMifQ%3D%3D%0A&amp;identity_provider=Microsoft"
                class="text-viridian-120 font-medium"
                target="_self"
                title="Continue with Microsoft"
              >
                <div
                  class="group box-border border-solid border-2 rounded-full focus:outline-none duration-100 flex justify-center items-center min-h-xl px-m w-full text-neutral-100 border-neutral-100 bg-transparent cursor-pointer hover:text-neutral-100 hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-5 py-sm h-auto"
                  style={{ padding: 8 }}
                >
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
                        fill="#F1511B"
                        d="M11.604 11.603H4V4h7.604v7.603Z"
                      ></path>
                      <path
                        fill="#80CC28"
                        d="M20 11.603h-7.604V4h7.603v7.603H20Z"
                      ></path>
                      <path
                        fill="#00ADEF"
                        d="M11.604 20H4v-7.602h7.604V20Z"
                      ></path>
                      <path
                        fill="#FBBC09"
                        d="M20 20h-7.604v-7.602h7.603V20H20Z"
                      ></path>
                    </svg>
                  </div>
                  <span class="font-medium" style={{ padding: 10 }}>
                    Continue with Microsoft
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{ marginTop: 20, marginRight: 30 }}
            class=" max-w-full text-base md:text-sm font-normal whitespace-pre-wrap text-left text-neutral-100 inline mt-auto self-start md:self-end mr-4 mb-sm mt-xl md:mt-0"
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
    </>
  );
}

export default FirstPage;
