import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateOrganization } from "../../../redux/slice/oraganizationSlice";
import { sendEmail } from "../../../redux/slice/emailSlice";
import { fetchCountries } from "../../../redux/slice/CountrySlice";
import logo from "../../../assets/images/smallLogo.png";
import { fetchUserById } from "../../../redux/slice/userSlice";

function ForthPage() {
  const orgId = localStorage.getItem("orgId");
  // console.log(orgId);
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.user);
  const { countries } = useSelector((state) => state.countries);
  // console.log(users);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, []);

  const [initialValues, setInitialValues] = useState({
    name: "",
    industry: "",
    phone: "",
    country: "",
    subscribe_to_newsletter: false,
  });

  // console.log(initialValues);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Company name is required")
      .max(30, "Company name must be less than 30 characters"),
    industry: Yup.string().required("Please select an industry"),
    phone: Yup.string().required("Phone number is required"),
    // country: Yup.string().required("Country number is required"),
    subscribe_to_newsletter: Yup.boolean().required("Please agree"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateOrganization({ id: orgId, updateData: values })).unwrap();
    dispatch(sendEmail(users?.email))
      .unwrap()

      .then(() => {
        navigate("/mail-send");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div class="flex flex-col-reverse lg:flex-row">
      <div class="w-full h-screen flex md:flex-row flex-col relative overflow-hidden">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true} // Allows reinitializing initialValues dynamically
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, isSubmitting }) => (
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
                      <Form class="flex flex-col w-full h-full">
                        <div class="my-auto">
                          <div class="flex flex-col gap-md justify-center items-center w-full">
                            <div class="flex flex-col justify-center w-full gap-xs items-left">
                              <div class="text-left gap-xs flex flex-col -mt-2xs">
                                <h2 class="tracking-normal md:tracking-wide lg:tracking-widest  max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-neutral-100 inline text-left">
                                  Welcome ! Let's get started
                                </h2>
                                <div class="self-start">
                                  <p class="text-left mt-sm first:mt-0">
                                    <span class=" max-w-full text-md font-normal whitespace-pre-wrap text-neutral-80 inline text-left">
                                      This will help us to personalize your
                                      experience in Teamgrid
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-md justify-center my-auto w-full">
                              <div>
                                <div className="w-full">
                                  <div className="relative text-ellipsis overflow-hidden">
                                    <Field
                                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                                      placeholder="Company name"
                                      type="text"
                                      name="name"
                                      onChange={handleChange}
                                      value={values.name}
                                    />
                                    <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                      Company name
                                    </label>
                                    <ErrorMessage
                                      name="name"
                                      component="div"
                                      className="text-red-500 text-sm"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="flex flex-col w-full">
                                  <div className="relative">
                                    <Field
                                      as="select"
                                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                                      name="industry"
                                      value={values.industry}
                                      onChange={handleChange}
                                      style={{
                                        paddingTop:
                                          values.industry === "" ? "1rem" : "",
                                        color: values.industry === "" && "gray",
                                        paddingBottom:
                                          values.industry === "" ? "1rem" : "",
                                        backgroundColor:
                                          values.industry !== "" && "#e8f0ff",
                                      }}
                                    >
                                      <option
                                        className="text-neutral-120"
                                        disabled
                                        value=""
                                      >
                                        Industry
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Aerospace &amp; Defence"
                                      >
                                        Aerospace &amp; Defense
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Agriculture"
                                      >
                                        Agriculture
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Automobiles &amp; Components"
                                      >
                                        Automobiles &amp; Components
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Banking &amp; Insurance"
                                      >
                                        Banking &amp; Insurance
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Chemicals"
                                      >
                                        Chemicals
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Commercial &amp; Professional Services"
                                      >
                                        Commercial &amp; Professional Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Commodities"
                                      >
                                        Commodities
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Construction &amp; Engineering"
                                      >
                                        Construction &amp; Engineering
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Consumer Durables &amp; Apparel"
                                      >
                                        Consumer Durables &amp; Apparel
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Consumer Services"
                                      >
                                        Consumer Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Containers &amp; Packaging"
                                      >
                                        Containers &amp; Packaging
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Diversified Financials"
                                      >
                                        Diversified Financials
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Education"
                                      >
                                        Education
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Energy"
                                      >
                                        Energy
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Food &amp; Staples Retailing"
                                      >
                                        Food &amp; Staples Retailing
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Food, Beverage &amp; Tobacco"
                                      >
                                        Food, Beverage &amp; Tobacco
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Government Administration"
                                      >
                                        Government Administration
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Health Care Equipment &amp; Services"
                                      >
                                        Health Care Equipment &amp; Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Hospitality"
                                      >
                                        Hospitality
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Internet &amp; Direct Marketing Retail"
                                      >
                                        Internet &amp; Direct Marketing Retail
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Legal Services"
                                      >
                                        Legal Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Machinery"
                                      >
                                        Machinery
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Manufacturing"
                                      >
                                        Manufacturing
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Media &amp; Entertainment"
                                      >
                                        Media &amp; Entertainment
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Metals &amp; Mining"
                                      >
                                        Metals &amp; Mining
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Military"
                                      >
                                        Military
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Non-Profit Organisation"
                                      >
                                        Non-Profit Organization
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Other"
                                      >
                                        Other
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Pharmaceuticals &amp; Biotechnology"
                                      >
                                        Pharmaceuticals &amp; Biotechnology
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Real Estate"
                                      >
                                        Real Estate
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Research &amp; Consulting Services"
                                      >
                                        Research &amp; Consulting Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Retailing"
                                      >
                                        Retailing
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Semiconductors"
                                      >
                                        Semiconductors
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Software &amp; IT Services"
                                      >
                                        Software &amp; IT Services
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Technology Hardware &amp; Equipment"
                                      >
                                        Technology Hardware &amp; Equipment
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Telecommunication"
                                      >
                                        Telecommunication
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Trading Companies &amp; Distributors"
                                      >
                                        Trading Companies &amp; Distributors
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Transportation"
                                      >
                                        Transportation
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Travel &amp; Tourism"
                                      >
                                        Travel &amp; Tourism
                                      </option>
                                      <option
                                        className="text-neutral-120"
                                        value="Utilities"
                                      >
                                        Utilities
                                      </option>
                                    </Field>
                                    {values.industry && (
                                      <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                        Industry
                                      </label>
                                    )}
                                    <ErrorMessage
                                      name="industry"
                                      component="div"
                                      className="text-red-500 text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="flex w-full">
                                  <div className="flex hover:z-10 w-full">
                                    <div className="w-[80px] relative">
                                      <div className="flex flex-col">
                                        <div className="relative">
                                          <Field
                                            as="select"
                                            className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-white disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-l-md h-2xl pt-m disabled:hover:cursor-not-allowed text-transparent"
                                            name="country"
                                            value={values.country}
                                            onChange={handleChange}
                                            style={{
                                              backgroundColor:
                                                values.country !== "" &&
                                                "#e8f0ff",
                                            }}
                                          >
                                            <option
                                              className="text-neutral-120"
                                              value="+91"
                                              selected
                                            >
                                              India +91
                                            </option>

                                            {countries.length > 0 &&
                                              countries.map((country) => (
                                                <option
                                                  className="text-neutral-120"
                                                  value={country.name}
                                                  // selected
                                                >
                                                  {country.name}{" "}
                                                  {country.dial_code}
                                                </option>
                                              ))}
                                          </Field>
                                          <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100"></label>
                                          <ErrorMessage
                                            name="country"
                                            component="div"
                                            className="text-red-500 text-sm"
                                          />
                                        </div>
                                      </div>
                                      <div class="absolute top-0 left-0 flex h-full w-full align-center px-sm pointer-events-none">
                                        {values.country ? (
                                          countries.length > 0 ? (
                                            countries.map((country) => {
                                              if (
                                                country.name === values.country
                                              ) {
                                                return (
                                                  <img
                                                    key={country.name} // Add a unique key for each map iteration
                                                    loading="lazy"
                                                    className="object-contain w-md" // Use `className` instead of `class`
                                                    alt={country.name}
                                                    src={country.flag}
                                                  />
                                                );
                                              }
                                            })
                                          ) : (
                                            <img
                                              loading="lazy"
                                              className="object-contain w-md"
                                              alt="Bharôt"
                                              src="https://flagcdn.com/40x30/in.png"
                                            />
                                          )
                                        ) : (
                                          <img
                                            loading="lazy"
                                            className="object-contain w-md"
                                            alt="Bharôt"
                                            src="https://flagcdn.com/40x30/in.png"
                                          />
                                        )}
                                      </div>
                                    </div>
                                    <div className="relative w-full -ml-[1px]">
                                      <div className="w-full ">
                                        <div className="flex relative text-ellipsis overflow-hidden">
                                          <Field
                                            style={{
                                              paddingLeft: "15px",
                                              width: "100%",
                                              borderTopRightRadius: "8px",
                                              borderBottomRightRadius: "8px",
                                            }}
                                            className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 h-2xl pt-m disabled:hover:cursor-not-allowed rounded-none rounded-r-md"
                                            placeholder="Phone"
                                            type="text"
                                            name="phone"
                                            value={`${values.country ? (countries.length > 0 ? countries.find((c) => c.name === values.country?values.country:"india")?.dial_code || "+91" : "+91") : "+91"}${values.phone || ""}`}
                                            onChange={(e) => {
                                              const inputValue = e.target.value;
                                              const countryCode = values.country
                                                ? countries.length > 0
                                                  ? countries.find(
                                                      (c) =>
                                                        c.name ===
                                                        values.country
                                                    )?.dial_code || "+91"
                                                  : "+91"
                                                : "+91";

                                              const phone =
                                                inputValue.startsWith(
                                                  countryCode
                                                )
                                                  ? inputValue.slice(
                                                      countryCode.length
                                                    )
                                                  : inputValue;

                                              handleChange({
                                                target: {
                                                  name: "phone",
                                                  value: phone,
                                                },
                                              });
                                            }}
                                          />
                                          <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                                            Phone
                                          </label>
                                          <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500 text-sm"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mx-sm">
                                <label className="space-x-xs flex">
                                  <Field
                                    type="checkbox"
                                    className="border-1 border-neutral-40 rounded-2xs ring-transparent h-s w-s focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-neutral-20 checked:text-viridian-100 hover:checked:text-viridian-120 hover:border-neutral-60"
                                    name="subscribe_to_newsletter"
                                    checked={values.subscribe_to_newsletter}
                                    onChange={handleChange}
                                    style={{
                                      background: values.subscribe_to_newsletter
                                        ? "#007d71"
                                        : "#ffffff",
                                    }}
                                  />
                                  <div className="relative space-y-2xs  ml-2">
                                    <div className="focus:ring-0 focus:outline-none leading-none">
                                      <div className=" max-w-full text-xs md:text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                                        HRMS will send you members-only
                                        deals, inspiration, SMS and marketing
                                        emails. You can unsubscribe at any time.
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                          <div class="w-full max-w-s136 flex justify-start">
                            <div class="flex flex-row items-center gap-sm w-full">
                              <div class="w-full bg-viridian-20 h-xs rounded-md">
                                <div
                                  class="bg-viridian-60 h-xs rounded-md"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                              <span class=" max-w-full text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline">
                                3/4
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
                                <div class="p-1 px-7 group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 items-center min-h-lg px-m py-2xs w-full sm:w-full text-white border-[rgb(31,116,236)] bg-[rgb(31,116,236)] cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100 ">
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
                <div class="flex flex-row h-full xl:max-w-544 items-center justify-center rounded-2xl">
                  <div class="relative">
                    <div class="absolute h-28 w-28 border bg-white rounded-3xl -top-10 right-[37%] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="114"
                        height="154"
                        viewBox="0 0 24 24"
                        aria-labelledby=""
                        aria-label=""
                        class="fill-current text-radical-100 h-2xl w-2xl min-w-2xl"
                      >
                        <path d="M9 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM10 10a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM9 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M8 4a2 2 0 0 0-2 2v12H5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2H8Zm0 14h2v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h2V6H8v12Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex flex-col gap-sm w-[400px] h-[200px] bg-white rounded-t-lg rounded-b-lg items-center justify-end pb-[40px] shadow-sm">
                      {values.name ? (
                        <div class="line-clamp-1 text-center">
                          <span class=" max-w-full text-2xl font-normal whitespace-pre-wrap text-left text-neutral-80 inline">
                            {values.name}
                          </span>
                        </div>
                      ) : (
                        <div class="line-clamp-1 text-center bg-neutral-10 w-[180px] h-[28px]"></div>
                      )}
                      {values.industry ? (
                        <div class="line-clamp-1 text-center">
                          <span class=" max-w-full text-xl font-normal whitespace-pre-wrap text-left text-neutral-60 inline">
                            {values.industry}
                          </span>
                        </div>
                      ) : (
                        <div class="line-clamp-1 text-center bg-neutral-10 w-[232px] h-[28px]"></div>
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

export default ForthPage;
