import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/images/logo.png';
import { useFormik } from "formik";
import * as Yup from "yup";

function FifthPage() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const checkboxOptions = [
    { name: "time_tracking", label: "Time tracking" },
    { name: "time_off", label: "Time off" },
    { name: "shift_management", label: "Shift management" },
    { name: "people_engagement", label: "People engagement" },
    { name: "performance", label: "Performance" },
    { name: "recruitment", label: "Recruitment" },
    { name: "expenses", label: "Expenses" },
    { name: "trainings", label: "Trainings" },
    { name: "it_management", label: "IT Management" },
    { name: "workspaces", label: "Space Management" },
    { name: "projects", label: "Project Management" },
  ];

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    explore_first: Yup.array()
      .of(Yup.string())
      .min(1, "Please select at least one option")
      .required("This field is required"),
  });

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      explore_first: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
      // Example navigation after successful submission
      navigate("/next-page");
    },
  });


  return (
    <div class="flex flex-col-reverse lg:flex-row">
      <div class="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
        <div
          class="md:block w-full md:w-1/2 md:h-auto h-full p-10 relative overflow-hidden"
          style={{ width: isWideScreen ? "55%" : "100%" }}
        >
          <div class="flex flex-col relative h-full items-center">
            <div class="h-full w-full flex flex-col gap-xl">
              <div class="w-full self-start">
                <img
                  alt="HRMS logo"
                  loading="lazy"
                  width="123"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src={logo}
                />
              </div>
              <div class="md:px-24  px-s24 my-auto self-center max-w-s640 h-full w-full">
              <form
                  className="flex flex-col w-full h-full"
                  onSubmit={formik.handleSubmit}
                  noValidate
                >
                  <div className="my-auto">
                    <div className="flex flex-col gap-md justify-center items-center w-full">
                      <div className="flex flex-col justify-center w-full gap-xs items-left">
                        <div className="text-left gap-xs flex flex-col -mt-2xs">
                          <h2 className="tracking-normal md:tracking-wide lg:tracking-widest max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-neutral-100 inline text-left">
                            Which part of HRMS are you interested to
                            explore? Welcome! Let's get started
                          </h2>
                          <div className="self-start">
                            <p className="text-left mt-sm first:mt-0">
                              <span className="max-w-full text-md font-normal whitespace-pre-wrap text-neutral-80 inline text-left">
                                Choose the perfect apps for your business now,
                                you can add more anytime
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-md justify-center my-auto w-full">
                        <div>
                          <div
                            name="explore_first"
                            className="flex flex-col gap-3"
                          >
                            {checkboxOptions.map((option, index) => (
                              <div className="mb-sm" key={index}>
                                <div className="mx-sm">
                                  <label className="space-x-xs flex">
                                    <input
                                      type="checkbox"
                                      name="explore_first"
                                      value={option.name}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      checked={formik.values.explore_first.includes(
                                        option.name
                                      )}
                                      className="border-1 border-neutral-40 rounded-2xs ring-transparent h-s w-s focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-neutral-20 checked:text-viridian-100 hover:checked:text-viridian-120 hover:border-neutral-60"
                                    />
                                    <div className="relative space-y-2xs ml-2">
                                      <div className="focus:ring-0 focus:outline-none leading-none">
                                        <div className="max-w-full text-xs md:text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                                          {option.label}
                                        </div>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                          {formik.touched.explore_first &&
                            formik.errors.explore_first && (
                              <p className="text-red-500 text-sm mt-2">
                                {formik.errors.explore_first}
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="w-full max-w-s136 flex justify-start">
                      <div className="flex flex-row items-center gap-sm w-full">
                        <div className="w-full bg-viridian-20 h-xs rounded-md">
                          <div
                            className="bg-viridian-60 h-xs rounded-md"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <span className="max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                          4/4
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex-grow">
                        <button
                          type="submit"
                          className="inline-flex focus:outline-none w-full sm:w-full"
                        >
                          <div className="p-1 px-7 group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 items-center min-h-lg px-m py-2xs w-full sm:w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100 ">
                            <div className="max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                              Continue
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:block xl:pl-128 w-1/2 overflow-auto"
          style={{
            backgroundColor: "rgb(233, 233, 236)",
          }}
        >
          <div className="flex flex-row h-full xl:max-w-[544px] items-center justify-center pl-48 pr-16 py-24">
            <div className="flex pl-s32 w-full items-center">
              <div
                className="absolute top-s112 bottom-s112 flex rounded-xl w-[1200px] max-h-[700px]"
                style={{
                  boxShadow:
                    "0px -8px 16px rgba(40, 40, 61, 0.05), 0px 16px 24px rgba(40, 40, 61, 0.05), 0px 4px 8px rgba(40, 40, 61, 0.05)",
                  "--tw-shadow-color": "rgba(40, 40, 61, 0.05)",
                  "--tw-shadow-colored":
                    "0px -8px 16px var(--tw-shadow-color), 0px 16px 24px var(--tw-shadow-color), 0px 4px 8px var(--tw-shadow-color)",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <div className="flex flex-row pl-5 pr-5 py-10 w-full rounded-2xs">
                  <div className="flex flex-col max-w-xs gap-lg py-s4 overflow-y-auto min-w-[240px] items-start">
                    <div>
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
                    </div>
                    <div className="flex flex-col gap-sm mt-5">
                      <div className="flex flex-row gap-xs items-center">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            aria-labelledby=""
                            aria-label=""
                            className="fill-current h-md w-md min-w-md"
                            style={{ color: "rgb(211 211 216)" }}
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.698 2.798a2 2 0 0 1 2.604 0l6.349 5.443A1 1 0 0 1 20 9v9a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 .35-.76l6.348-5.442ZM18 9.46l-6-5.143L6 9.46V17h3v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h3V9.46Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="">
                          <span
                            className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left inline"
                            style={{ color: "rgb(211 211 216)" }}
                          >
                            Dashboard
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-xs items-center">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            aria-labelledby=""
                            aria-label=""
                            className="fill-current h-md w-md min-w-md"
                            style={{ color: "rgb(211 211 216)" }}
                          >
                            <path d="M9 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM10 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM9 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M8 4a2 2 0 0 0-2 2v12H5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2H8Zm0 14h2v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h2V6H8v12Z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="">
                          <span
                            className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left inline"
                            style={{ color: "rgb(211 211 216)" }}
                          >
                            Company
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-xs items-center">
                        <div
                          className="flex min-w-md w-5 h-6 rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                        <div
                          className="flex min-w-20 w-16 h-6 rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-xs items-center">
                        <div
                          className="flex min-w-md w-5 h-6  rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                        <div
                          className="flex min-w-20 w-16 h-6 rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                      </div>
                      <div className="flex flex-row gap-xs items-center">
                        <div
                          className="flex min-w-md w-5 h-6 rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                        <div
                          className="flex min-w-20 w-16 h-6 rounded-sm"
                          style={{
                            backgroundColor: "rgb(233, 233, 236)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center gap-xs">
                      <div
                        className="flex min-w-md w-md h-md rounded-sm"
                        style={{
                          backgroundColor: "rgb(233, 233, 236)",
                        }}
                      >
                        <span className=" max-w-full text-xs font-semibold whitespace-pre-wrap text-left text-radical-100 inline"></span>
                      </div>
                      <div
                        className="line-clamp-1 w-20 h-8"
                        style={{
                          backgroundColor: "rgb(233, 233, 236)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex py-14 rounded-md h-full w-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
