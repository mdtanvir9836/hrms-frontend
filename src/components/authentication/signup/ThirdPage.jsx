import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchUserById, updateUserAsync } from "../../../redux/slice/userSlice";
import logo from "../../../assets/images/smallLogo.png";

function ThirdPage() {
  const navigate = useNavigate();
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  // console.log(userId);

  const { loading, error, users } = useSelector((state) => state.user);

  // console.log(users);
  

    useEffect(() => {
      dispatch(fetchUserById(userId));
    }, [userId]);

  const validationSchema = Yup.object().shape({
    roleId: Yup.string().required("Role is required"),
  });

  const initialValues = {
    roleId: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values); // Add this
    dispatch(updateUserAsync({ userId, userData: values }))
      .unwrap()
      .then(() => {
        navigate("/company-setup");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div class="flex flex-col-reverse lg:flex-row">
      <div class="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <>
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
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={logo}
                      />
                    </div>
                    <div class="md:px-24  px-s24 my-auto self-center max-w-s640 h-full w-full">
                      <Form class="flex flex-col w-full h-full" noValidate>
                        {/* {console.log(values)} */}
                        <div class="my-auto">
                          <div class="flex flex-col gap-md justify-center items-center w-full">
                            <div class="flex flex-col justify-center w-full gap-xs items-left">
                              <div class="text-left gap-xs flex flex-col -mt-2xs">
                                <h2 class="tracking-normal md:tracking-wide lg:tracking-widest  max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-neutral-100 inline text-left">
                                  What defines better your role?
                                </h2>
                                <div class="self-start">
                                  <p class="text-left mt-sm first:mt-0">
                                    <span class=" max-w-full text-md font-normal whitespace-pre-wrap text-neutral-80 inline text-left">
                                      Tell us a little about yourself so we can
                                      tailor your experience
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-md justify-center my-auto w-full md:pr-10">
                              <div>
                                <div class="flex flex-col w-full">
                                  <div class="relative">
                                    <Field
                                      as="select"
                                      name="roleId"
                                      class="peer w-full px-sm rounded-md focus:outline-none focus:ring-transparent placeholder-transparent border-neutral-20 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 pt-m h-2xl truncate pr-s24"
                                      style={{
                                        paddingTop:
                                          values.roleId === "" ? "1rem" : "",
                                        color: values.roleId === "" && "gray",
                                        paddingBottom:
                                          values.roleId === "" ? "1rem" : "",
                                      }}
                                    >
                                      <option
                                        class="text-neutral-120"
                                        disabled
                                        value=""
                                      >
                                        Your role
                                      </option>
                                      <option
                                        class="text-neutral-120"
                                        value="66debfaae49b29d10a56cf37"
                                      >
                                        Super Admin
                                      </option>
                                      <option
                                        class="text-neutral-120"
                                        value="66debf22e49b29d10a56cf2e"
                                      >
                                        Admin
                                      </option>
                                      <option
                                        class="text-neutral-120"
                                        value="66e2a0a8483f6fcc9cdbda9f"
                                      >
                                        Employee
                                      </option>

                                      {/* <option
                                    class="text-neutral-120"
                                    disabled
                                    value=""
                                  >
                                    Your role
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="administrative_team"
                                  >
                                    Administrative/Accounting Team
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="hr_manager"
                                  >
                                    HR Manager
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="hr_specialist"
                                  >
                                    HR Specialist
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="student"
                                  >
                                    I'm a student
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="intern"
                                  >
                                    I'm an intern
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="it_team"
                                  >
                                    IT Team
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="management_team"
                                  >
                                    Management Team
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="operations_team"
                                  >
                                    Operations Team
                                  </option>
                                  <option
                                    class="text-neutral-120"
                                    value="other"
                                  >
                                    Other
                                  </option> */}
                                    </Field>
                                    {values.roleId !== "" && (
                                      <label class="absolute left-0 transition-all truncate text-ellipsis pointer-events-none text-neutral-60 text-2xs top-xs peer-focus:text-viridian-100 pl-sm">
                                        Your role
                                      </label>
                                    )}
                                    <ErrorMessage
                                      name="roleId"
                                      component="div"
                                      className="text-red-500 text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                          <div class="w-full max-w-s136 flex justify-start">
                            <div class="flex flex-row items-center gap-sm w-full">
                              <div class="w-full bg-viridian-20 h-xs rounded-md">
                                <div
                                  class="bg-viridian-60 h-xs rounded-md"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                              <span class=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                                2/4
                              </span>
                            </div>
                          </div>
                          <div class="">
                            <div class="flex-grow">
                              {error && (
                                <div className="text-red-500 text-sm">
                                  {error}
                                </div>
                              )}
                              <button
                                type="submit"
                                disabled={isSubmitting || loading}
                                class="inline-flex focus:outline-none w-full sm:w-full"
                              >
                                <div class="p-1 px-7 group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 items-center min-h-lg px-m py-2xs w-full sm:w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100">
                                  <div class=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                    {" "}
                                  </div>
                                  <div class=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                    {loading ? "Submitting..." : "Continue"}
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden md:block xl:pl-s128 w-1/2 overflow-auto bg-neutral-10">
                <div class="flex flex-row h-full xl:max-w-544 items-center justify-center rounded-xl">
                  <div class="flex flex-col w-[400px] h-[200px] rounded-xl shadow-sm">
                    <div class="flex flex-row w-full h-full bg-neutral-5 rounded-t-lg rounded-r-lg gap-sm items-center px-10 ">
                      <div class="flex flex-row w-full items-center rounded-xl gap-md">
                        <div class="flex bg-radical-20 items-center justify-center min-w-s56 w-s56 h-s56 rounded-xl">
                          <span class=" max-w-full text-xl font-semibold whitespace-pre-wrap text-left text-radical-100 inline p-3">
                          {users?.firstName?.charAt(0).toUpperCase()}
                          {users?.lastName?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div class="line-clamp-1">
                          <span class=" max-w-full text-xl font-normal whitespace-pre-wrap text-left text-neutral-80 inline">
                            {users?.firstName}{" "}{users?.lastName}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row w-full h-full bg-white rounded-b-lg items-center px-lg">
                      {values.roleId ? (
                        <div class="flex items-center justify- ml-10">
                          <span class="bg-viridian-20 text-viridian-120 font-normal px-3 py-1 rounded-full leading-sm inline-block">
                            {values.roleId==="66debfaae49b29d10a56cf37"? "Super Admin" : values.roleId==="66debf22e49b29d10a56cf2e"? "Admin":values.roleId==="66e2a0a8483f6fcc9cdbda9f" && "Employee"}
                          </span>
                        </div>
                      ) : (
                        <div class="flex items-center justify-center bg-neutral-10 w-[200px] h-[28px] ml-10"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ThirdPage;
