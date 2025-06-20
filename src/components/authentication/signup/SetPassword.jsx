import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchUserById, updateUserAsync } from "../../../redux/slice/userSlice";
import logo from "../../../assets/images/smallLogo.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const userId = useParams().id;
  const dispatch = useDispatch();
  // const userId = localStorage.getItem("userId");
  // console.log(userId);

  const { loading, error, users } = useSelector((state) => state.user);

  // console.log(users);

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [userId]);

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
  });

  // const validationSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .required("Password is required")
  //     .min(12, "Password must be at least 12 characters long")
  //     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  //     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  //     .matches(/\d/, "Password must contain at least one number")
  //     .matches(/[!@#$%^&*]/, "Password must contain at least one special character"),
  // });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values); // Add this
    dispatch(updateUserAsync({ userId, userData: values }))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <main class="flex flex-col w-full min-h-[80vh] md:h-screen overflow-x-hidden justify-center items-center bg-slate-200 bg-transparent rounded-lg">
      <div className="w-full md:w-[35%] max-w-lg bg-white rounded-lg shadow-lg p-3">
        <div className=" max-w-form w-full bg-glassLinearGradient filter drop-shadow-glassDropShadow backdrop-filter backdrop-blur-glassBackDrop backdrop-blur-xl p-s shadow-sm rounded-1lg border border-white">
          <div className="bg-white h-full rounded-1md shadow-lg py-l px-m p-10  rounded-md">
            <div className="flex flex-col gap-md justify-center items-center w-full">
              <div className="flex flex-col justify-center w-full gap-xs items-center">
                <div className="text-center gap-xs flex flex-col -mt-2xs">
                  <h2 className=" max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-center text-neutral-100 inline ">
                    Set your password
                  </h2>
                  <div className="self-start">
                    <p className="text-center mt-sm first:mt-0">
                      <span className=" max-w-full text-sm font-normal whitespace-pre-wrap text-neutral-80 inline text-center">
                        To make your password more secure, please use the
                        requested format.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <Formik
                initialValues={{ password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form
                    className="w-full"
                    novalidate=""
                    action="javascript:void(0);"
                  >
                    <div className="flex flex-col gap-sm w-full">
                      <div className="flex flex-col gap-sm">
                        <div>
                          <div className="relative">
                            <div className="w-full">
                              <div className="relative text-ellipsis overflow-hidden">
                                <Field
                                  className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                                  placeholder="Password"
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                />
                                <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                  Password
                                </label>
                              </div>
                            </div>
                            <div
                              className="absolute top-0 right-0 h-full w-s56 pr-s2 flex items-center justify-center cursor-pointer  mr-2"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <IoEyeOffOutline />
                              ) : (
                                <IoEyeOutline />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2xs mb-xs">
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-neutral-40 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.5 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              12 characters long
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-neutral-40 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.5 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              Uppercase letters (A-Z)
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-neutral-40 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.5 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              Lowercase letters (a-z)
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-neutral-40 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.5 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              Symbols (@, #, $, %, !, &amp;, ...)
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-neutral-40 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.5 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              Numbers (0-9)
                            </span>
                          </div>
                          <div className="flex flex-row items-center gap-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              aria-labelledby=""
                              aria-label=""
                              className="fill-current text-viridian-100 h-md w-md min-w-md"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18.1 6.2a1 1 0 0 1 .2 1.4l-7.5 10a1 1 0 0 1-1.507.107l-4-4a1 1 0 1 1 1.414-1.414l3.185 3.185L16.7 6.4a1 1 0 0 1 1.4-.2Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                              English alphabet characters only (avoid êáñ字ж,
                              etc)
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className=" max-w-full text-base font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                        <div className=" max-w-full text-xs md:text-xs font-normal whitespace-pre-wrap text-left text-neutral-80 inline">
                          By setting my password, I accept HRMS's{" "}
                          <a
                            className="text-neutral-80 font-normal underline"
                            target="_blank"
                            href="/terms-of-use"
                          >
                            Terms and Conditions
                          </a>
                          .
                        </div>
                      </span>
                      <div className="">
                        <div className="flex-grow">
                          <button
                            type="submit"
                            className="inline-flex focus:outline-none w-full sm:w-full"
                            disabled={isSubmitting}
                          >
                            <div className="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 py-s px-l w-full sm:w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] hover:text-white hover:border-radical-100 hover:bg-radical-100 cursor-pointer">
                              <div className=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                {" "}
                              </div>
                              <div className=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                Continue
                              </div>
                            </div>
                          </button>
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
    </main>
  );
}

export default SetPassword;
