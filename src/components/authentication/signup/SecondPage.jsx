import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addUserAsync, fetchUserById } from "../../../redux/slice/userSlice";
import logo from "../../../assets/images/smallLogo.png";
import { fetchOrganizationById } from "../../../redux/slice/oraganizationSlice";

function FifthPage() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orgId = localStorage.getItem("orgId");
  // console.log(orgId);
  const userId = localStorage.getItem("userId");
  // console.log(userId);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrganizationById(orgId));
  }, [orgId]);

  useEffect(()=>{
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  },[userId])

  const { loading, error, organization } = useSelector(
    (state) => state.organization
  );
  const { users } = useSelector((state) => state.user);

  console.log("users", users);


  console.log("organization", organization);

  const email = organization?.email? organization?.email:""
  console.log("email",email);
  
  

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .max(15, "First name must be less than 15 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .max(15, "Last name must be less than 15 characters"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email:email,
    organizationId: orgId
  };

  // console.log(initialValues);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values); // Add this
   values.email && dispatch(addUserAsync(values))
      .unwrap()
      .then(() => {
        navigate("/role-setup");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, errors }) => (
            <>
              {console.log(values)}
              <div
                className="md:block w-full md:w-1/2 md:h-auto h-full p-10 relative overflow-hidden"
                style={{ width: isWideScreen ? "55%" : "100%" }}
              >
                <div className="flex flex-col relative h-full items-center">
                  <div className="h-full w-full flex flex-col gap-xl">
                    <div className="w-full self-start">
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
                    <div className="md:px-24  px-s24 my-auto self-center max-w-s640 h-full w-full">
                      <Form className="flex flex-col w-full h-full">
                        <div className="my-auto">
                          <div className="flex flex-col gap-md justify-center items-center w-full">
                            <div className="flex flex-col justify-center w-full gap-xs items-left">
                              <div className="text-left gap-xs flex flex-col -mt-2xs">
                                <h2 className="tracking-normal md:tracking-wide lg:tracking-widest  max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-neutral-100 inline text-left">
                                  Start your journey with Teamgrid
                                </h2>
                                <div className="self-start">
                                  <p className="text-left mt-sm first:mt-0 md:w-[89%]">
                                    <span className=" max-w-full text-md font-normal whitespace-pre-wrap text-neutral-80 inline text-left">
                                      Set up your{" "}
                                      <span className="font-bold">
                                        7-days trial
                                      </span>{" "}
                                      account and start using the{" "}
                                      <a
                                        className="text-viridian-120 font-medium"
                                        target="_blank"
                                        href="/starter-plan"
                                      >
                                        Starter Plans
                                      </a>
                                      , a tailored collection of products
                                      designed to help your business according
                                      to your needs.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-md justify-center my-auto w-full md:pr-10">
                              <div>
                                <div className="w-full">
                                  <div className="relative text-ellipsis overflow-hidden">
                                    <Field
                                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                                      placeholder="First name"
                                      type="text"
                                      name="firstName"
                                    />
                                    <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                      First name
                                    </label>
                                    <ErrorMessage
                                      name="first_name"
                                      component="div"
                                      className="text-red-500 text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="w-full">
                                  <div className="relative text-ellipsis overflow-hidden">
                                    <Field
                                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                                      placeholder="Last name"
                                      type="text"
                                      name="lastName"
                                    />
                                    <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                      Last name
                                    </label>
                                    <ErrorMessage
                                      name="last_name"
                                      component="div"
                                      className="text-red-500 text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-start">
                              <p className="text-left mt-sm first:mt-0">
                                <span className=" max-w-full text-sm font-normal whitespace-pre-wrap text-neutral-80 inline text-left">
                                  Signing up as {email}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                          <div className="w-full max-w-s136 flex justify-start">
                            <div className="flex flex-row items-center gap-sm w-full">
                              <div className="w-full bg-viridian-20 h-xs rounded-md">
                                <div
                                  className="bg-viridian-60 h-xs rounded-md"
                                  style={{ width: "25%" }}
                                ></div>
                              </div>
                              <span className=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                                1/4
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <div className="flex-grow">
                              {error && (
                                <div className="text-red-500 text-sm">
                                  {error}
                                </div>
                              )}
                              <button
                                type="submit"
                                disabled={isSubmitting || loading}
                                className="inline-flex focus:outline-none w-full sm:w-full"
                              >
                                <div className="p-1 px-7 group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 items-center min-h-lg px-m py-2xs w-full sm:w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100">
                                  <div className=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                    {" "}
                                  </div>
                                  <div className=" max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
                                    {loading ? "Submitting..." : "Continue"}
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                      {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block xl:pl-s128 w-1/2 overflow-auto bg-neutral-10">
                <div className="flex flex-row h-full xl:max-w-544 items-center justify-center rounded-xl">
                  <div className="flex flex-col w-[400px] h-[200px] rounded-xl shadow-sm">
                    <div className="flex flex-row w-full h-full bg-neutral-5 rounded-t-lg rounded-r-lg gap-sm items-center px-10 ">
                      {values.firstName || values.lastName ? (
                        <div className="flex flex-row w-full items-center rounded-xl gap-md">
                          <div className="flex bg-radical-20 items-center justify-center min-w-s56 w-s56 h-s56 rounded-lg">
                            <span className=" max-w-full text-xl font-semibold whitespace-pre-wrap text-left text-radical-100 inline p-3">
                              {values.firstName.charAt(0).toUpperCase()}
                              {values.lastName.charAt(0).toUpperCase()}
                            </span>
                          </div>

                          <div className="line-clamp-1">
                            <span className=" max-w-full text-xl font-normal whitespace-pre-wrap text-left text-neutral-80 inline">
                              {values.firstName} {values.lastName}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-row w-full items-center gap-md">
                          <div className="flex bg-neutral-10 min-w-[56px] w-[56px] h-[56px] rounded-lg">
                            <span className=" max-w-full text-xl font-semibold whitespace-pre-wrap text-left text-radical-100 inline"></span>
                          </div>
                          <div className="line-clamp-1 bg-neutral-10 w-[200px] h-[28px]"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row w-full h-full bg-white rounded-b-lg items-center px-lg">
                      {users.length>0 && users?.roleId ? (
                        <div className="flex items-center justify-center">
                          <span className="bg-viridian-20 text-viridian-120 font-normal px-s12 py-3xs rounded-full leading-sm inline-block">
                            {users.roleId}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center bg-neutral-10 w-[200px] h-[28px] ml-10"></div>
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

export default FifthPage;
