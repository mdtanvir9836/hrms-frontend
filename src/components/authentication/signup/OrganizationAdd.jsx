import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrganizationAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contact_first_name: "",
    contact_last_name: "",
    contact_jobtitle: "",
    company_name: "",
    website: "",
    industry_type: "",
    phone_country_selector: "",
    company_phone: "",
    subscribe_to_newsletter: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
    <div className="xl:max-w-s544 md:flex md:flex-grow justify-center items-center mx-auto w-full">
      <div className="md:hidden self-start">
        <a className="text-viridian-120 font-medium" target="_self" href="/">
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
      <div className="mt-xl md:pt-s88 xl:pt-s42 md:my-auto w-full">
        <div className="flex flex-col gap-md justify-center items-center w-full">
          <div className="flex flex-col justify-center w-full gap-xs items-left">
            <div className="text-left gap-xs flex flex-col -mt-2xs">
              <h2 className="font-sans max-w-full text-2xl md:text-3xl font-bold whitespace-pre-wrap text-left text-neutral-100 inline ">
                You're nearly there
              </h2>
              <div className="self-start">
                <p className="text-left mt-sm first:mt-0">
                  <span className="font-sans max-w-full text-sm font-normal whitespace-pre-wrap text-left text-neutral-80 inline ">
                    With this data, your demo will be as personalized as
                    possible.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <form className="w-full" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-sm w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <div>
                  <div className="w-full">
                    <div className="relative text-ellipsis overflow-hidden">
                      <input
                        maxLength="100"
                        className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                        placeholder="First name"
                        type="text"
                        name="contact_first_name"
                        value={formData.contact_first_name}
                        onChange={handleChange}
                      />
                      <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                        First name
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full">
                    <div className="relative text-ellipsis overflow-hidden">
                      <input
                        maxLength="100"
                        className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                        placeholder="Last name"
                        type="text"
                        name="contact_last_name"
                        value={formData.contact_last_name}
                        onChange={handleChange}
                      />
                      <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <div className="relative">
                    <select
                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                      name="contact_jobtitle"
                      value={formData.contact_jobtitle}
                      onChange={handleChange}
                      style={{
                        paddingTop: formData.contact_jobtitle === "" ? "1rem" : "",
                        color: formData.contact_jobtitle === "" && "gray",
                        paddingBottom:
                        formData.contact_jobtitle === "" ? "1rem" : "",
                        backgroundColor:
                        formData.contact_jobtitle !== "" && "#e8f0ff",
                      }}
                     
                    >
                      <option className="text-neutral-120" disabled value="">
                        Your role
                      </option>
                      <option
                        className="text-neutral-120"
                        value="administrative_team"
                      >
                        Administrative/Accounting Team
                      </option>
                      <option className="text-neutral-120" value="hr_manager">
                        HR Manager
                      </option>
                      <option
                        className="text-neutral-120"
                        value="hr_specialist"
                      >
                        HR Specialist
                      </option>
                      <option className="text-neutral-120" value="student">
                        I'm a student
                      </option>
                      <option className="text-neutral-120" value="intern">
                        I'm an intern
                      </option>
                      <option className="text-neutral-120" value="it_team">
                        IT Team
                      </option>
                      <option
                        className="text-neutral-120"
                        value="management_team"
                      >
                        Management Team
                      </option>
                      <option
                        className="text-neutral-120"
                        value="operations_team"
                      >
                        Operations Team
                      </option>
                      <option className="text-neutral-120" value="other">
                        Other
                      </option>
                    </select>
                    {formData.contact_jobtitle !== "" && (<label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                      Your role
                    </label>)}
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <div className="relative text-ellipsis overflow-hidden">
                    <input
                      maxLength="100"
                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                      placeholder="Company name"
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                    <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                      Company name
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <div className="relative text-ellipsis overflow-hidden">
                    <input
                      maxLength="100"
                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                      placeholder="Company website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                    <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                      Company website
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <div className="relative">
                    <select
                      className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-md h-2xl pt-m disabled:hover:cursor-not-allowed"
                      name="industry_type"
                      value={formData.industry_type}
                      onChange={handleChange}
                      style={{
                        paddingTop: formData.industry_type === "" ? "1rem" : "",
                        color: formData.industry_type === "" && "gray",
                        paddingBottom:
                        formData.industry_type === "" ? "1rem" : "",
                        backgroundColor:
                        formData.industry_type !== "" && "#e8f0ff",
                      }}
                    >
                      <option className="text-neutral-120" disabled value="">
                        Industry
                      </option>
                      <option
                        className="text-neutral-120"
                        value="Aerospace &amp; Defence"
                      >
                        Aerospace &amp; Defense
                      </option>
                      <option className="text-neutral-120" value="Agriculture">
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
                      <option className="text-neutral-120" value="Chemicals">
                        Chemicals
                      </option>
                      <option
                        className="text-neutral-120"
                        value="Commercial &amp; Professional Services"
                      >
                        Commercial &amp; Professional Services
                      </option>
                      <option className="text-neutral-120" value="Commodities">
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
                      <option className="text-neutral-120" value="Education">
                        Education
                      </option>
                      <option className="text-neutral-120" value="Energy">
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
                      <option className="text-neutral-120" value="Hospitality">
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
                      <option className="text-neutral-120" value="Machinery">
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
                      <option className="text-neutral-120" value="Military">
                        Military
                      </option>
                      <option
                        className="text-neutral-120"
                        value="Non-Profit Organisation"
                      >
                        Non-Profit Organization
                      </option>
                      <option className="text-neutral-120" value="Other">
                        Other
                      </option>
                      <option
                        className="text-neutral-120"
                        value="Pharmaceuticals &amp; Biotechnology"
                      >
                        Pharmaceuticals &amp; Biotechnology
                      </option>
                      <option className="text-neutral-120" value="Real Estate">
                        Real Estate
                      </option>
                      <option
                        className="text-neutral-120"
                        value="Research &amp; Consulting Services"
                      >
                        Research &amp; Consulting Services
                      </option>
                      <option className="text-neutral-120" value="Retailing">
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
                      <option className="text-neutral-120" value="Utilities">
                        Utilities
                      </option>
                    </select>
                    {formData.industry_type && (<label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                      Industry
                    </label>)}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex w-full">
                  <div className="flex hover:z-10 w-full">
                    <div className="w-[80px] relative">
                      <div className="flex flex-col">
                        <div className="relative">
                          <select
                            className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 rounded-l-md h-2xl pt-m disabled:hover:cursor-not-allowed text-transparent"
                            name="phone_country_selector"
                            value={formData.phone_country_selector}
                            onChange={handleChange}
                          >
                            <option className="text-neutral-120" value="AF">
                              Afghanistan (+93)
                            </option>
                            <option className="text-neutral-120" value="AL">
                              Albania (+355)
                            </option>
                            <option className="text-neutral-120" value="DE">
                              Germany (+49)
                            </option>
                            <option className="text-neutral-120" value="AD">
                              Andorra (+376)
                            </option>
                            <option className="text-neutral-120" value="AO">
                              Angola (+244)
                            </option>
                            <option className="text-neutral-120" value="AI">
                              Anguilla (+1264)
                            </option>
                            <option className="text-neutral-120" value="AG">
                              Antigua and Barbuda (+1268)
                            </option>
                            <option className="text-neutral-120" value="SA">
                              Saudi Arabia (+966)
                            </option>
                            <option className="text-neutral-120" value="DZ">
                              Algeria (+213)
                            </option>
                            <option className="text-neutral-120" value="AR">
                              Argentina (+54)
                            </option>
                            <option className="text-neutral-120" value="AM">
                              Armenia (+374)
                            </option>
                            <option className="text-neutral-120" value="AW">
                              Aruba (+297)
                            </option>
                            <option className="text-neutral-120" value="AU">
                              Australia (+61)
                            </option>
                            <option className="text-neutral-120" value="AT">
                              Austria (+43)
                            </option>
                            <option className="text-neutral-120" value="AZ">
                              Azerbaijan (+994)
                            </option>
                            <option className="text-neutral-120" value="BS">
                              Bahamas (+1242)
                            </option>
                            <option className="text-neutral-120" value="BH">
                              Bahrain (+973)
                            </option>
                            <option className="text-neutral-120" value="BD">
                              Bangladesh (+880)
                            </option>
                            <option className="text-neutral-120" value="BB">
                              Barbados (+1246)
                            </option>
                            <option className="text-neutral-120" value="BE">
                              Belgium (+32)
                            </option>
                            <option className="text-neutral-120" value="BZ">
                              Belize (+501)
                            </option>
                            <option className="text-neutral-120" value="BJ">
                              Benin (+229)
                            </option>
                            <option className="text-neutral-120" value="BM">
                              Bermuda (+1441)
                            </option>
                            <option className="text-neutral-120" value="BY">
                              Belarus (+375)
                            </option>
                            <option className="text-neutral-120" value="BO">
                              Bolivia (+591)
                            </option>
                            <option className="text-neutral-120" value="BA">
                              Bosnia and Herzegovina (+387)
                            </option>
                            <option className="text-neutral-120" value="BW">
                              Botswana (+267)
                            </option>
                            <option className="text-neutral-120" value="BR">
                              Brazil (+55)
                            </option>
                            <option className="text-neutral-120" value="BN">
                              Brunei (+673)
                            </option>
                            <option className="text-neutral-120" value="BG">
                              Bulgaria (+359)
                            </option>
                            <option className="text-neutral-120" value="BF">
                              Burkina Faso (+226)
                            </option>
                            <option className="text-neutral-120" value="BI">
                              Burundi (+257)
                            </option>
                            <option className="text-neutral-120" value="BT">
                              Bhutan (+975)
                            </option>
                            <option className="text-neutral-120" value="CV">
                              Cape Verde (+238)
                            </option>
                            <option className="text-neutral-120" value="KH">
                              Cambodia (+855)
                            </option>
                            <option className="text-neutral-120" value="CM">
                              Cameroon (+237)
                            </option>
                            <option className="text-neutral-120" value="CA">
                              Canada (+1)
                            </option>
                            <option className="text-neutral-120" value="BQ">
                              Caribbean Netherlands (+599)
                            </option>
                            <option className="text-neutral-120" value="TD">
                              Chad (+235)
                            </option>
                            <option className="text-neutral-120" value="CL">
                              Chile (+56)
                            </option>
                            <option className="text-neutral-120" value="CN">
                              China (+86)
                            </option>
                            <option className="text-neutral-120" value="CY">
                              Cyprus (+357)
                            </option>
                            <option className="text-neutral-120" value="VA">
                              Vatican City (+39)
                            </option>
                            <option className="text-neutral-120" value="CO">
                              Colombia (+57)
                            </option>
                            <option className="text-neutral-120" value="KM">
                              Comoros (+269)
                            </option>
                            <option className="text-neutral-120" value="KP">
                              North Korea (+850)
                            </option>
                            <option className="text-neutral-120" value="KR">
                              South Korea (+82)
                            </option>
                            <option className="text-neutral-120" value="CI">
                              Ivory Coast (+225)
                            </option>
                            <option className="text-neutral-120" value="CR">
                              Costa Rica (+506)
                            </option>
                            <option className="text-neutral-120" value="HR">
                              Croatia (+385)
                            </option>
                            <option className="text-neutral-120" value="CU">
                              Cuba (+53)
                            </option>
                            <option className="text-neutral-120" value="CW">
                              Curaçao (+599)
                            </option>
                            <option className="text-neutral-120" value="DK">
                              Denmark (+45)
                            </option>
                            <option className="text-neutral-120" value="DM">
                              Dominica (+1767)
                            </option>
                            <option className="text-neutral-120" value="EC">
                              Ecuador (+593)
                            </option>
                            <option className="text-neutral-120" value="EG">
                              Egypt (+20)
                            </option>
                            <option className="text-neutral-120" value="SV">
                              El Salvador (+503)
                            </option>
                            <option className="text-neutral-120" value="AE">
                              United Arab Emirates (+971)
                            </option>
                            <option className="text-neutral-120" value="ER">
                              Eritrea (+291)
                            </option>
                            <option className="text-neutral-120" value="SK">
                              Slovakia (+421)
                            </option>
                            <option className="text-neutral-120" value="SI">
                              Slovenia (+386)
                            </option>
                            <option className="text-neutral-120" value="ES">
                              Spain (+34)
                            </option>
                            <option
                              className="text-neutral-120"
                              value="US"
                              selected
                            >
                              United States (+1)
                            </option>
                            <option className="text-neutral-120" value="EE">
                              Estonia (+372)
                            </option>
                            <option className="text-neutral-120" value="SZ">
                              Eswatini (+268)
                            </option>
                            <option className="text-neutral-120" value="ET">
                              Ethiopia (+251)
                            </option>
                            <option className="text-neutral-120" value="FJ">
                              Fiji (+679)
                            </option>
                            <option className="text-neutral-120" value="PH">
                              Philippines (+63)
                            </option>
                            <option className="text-neutral-120" value="FI">
                              Finland (+358)
                            </option>
                            <option className="text-neutral-120" value="FR">
                              France (+33)
                            </option>
                            <option className="text-neutral-120" value="GA">
                              Gabon (+241)
                            </option>
                            <option className="text-neutral-120" value="GM">
                              Gambia (+220)
                            </option>
                            <option className="text-neutral-120" value="GE">
                              Georgia (+995)
                            </option>
                            <option className="text-neutral-120" value="GH">
                              Ghana (+233)
                            </option>
                            <option className="text-neutral-120" value="GI">
                              Gibraltar (+350)
                            </option>
                            <option className="text-neutral-120" value="GD">
                              Grenada (+1473)
                            </option>
                            <option className="text-neutral-120" value="GR">
                              Greece (+30)
                            </option>
                            <option className="text-neutral-120" value="GL">
                              Greenland (+299)
                            </option>
                            <option className="text-neutral-120" value="GP">
                              Guadeloupe (+590)
                            </option>
                            <option className="text-neutral-120" value="GU">
                              Guam (+1671)
                            </option>
                            <option className="text-neutral-120" value="GT">
                              Guatemala (+502)
                            </option>
                            <option className="text-neutral-120" value="GY">
                              Guyana (+592)
                            </option>
                            <option className="text-neutral-120" value="HT">
                              Haiti (+509)
                            </option>
                            <option className="text-neutral-120" value="NL">
                              Netherlands (+31)
                            </option>
                            <option className="text-neutral-120" value="HN">
                              Honduras (+504)
                            </option>
                            <option className="text-neutral-120" value="HK">
                              Hong Kong (+852)
                            </option>
                            <option className="text-neutral-120" value="HU">
                              Hungary (+36)
                            </option>
                            <option className="text-neutral-120" value="IN">
                              India (+91)
                            </option>
                            <option className="text-neutral-120" value="ID">
                              Indonesia (+62)
                            </option>
                            <option className="text-neutral-120" value="IR">
                              Iran (+98)
                            </option>
                            <option className="text-neutral-120" value="IQ">
                              Iraq (+964)
                            </option>
                            <option className="text-neutral-120" value="IE">
                              Ireland (+353)
                            </option>
                            <option className="text-neutral-120" value="IL">
                              Israel (+972)
                            </option>
                            <option className="text-neutral-120" value="IT">
                              Italy (+39)
                            </option>
                            <option className="text-neutral-120" value="JP">
                              Japan (+81)
                            </option>
                            <option className="text-neutral-120" value="KE">
                              Kenya (+254)
                            </option>
                            <option className="text-neutral-120" value="KR">
                              South Korea (+82)
                            </option>
                            <option className="text-neutral-120" value="MX">
                              Mexico (+52)
                            </option>
                            <option className="text-neutral-120" value="NG">
                              Nigeria (+234)
                            </option>
                            <option className="text-neutral-120" value="PH">
                              Philippines (+63)
                            </option>
                            <option className="text-neutral-120" value="RU">
                              Russia (+7)
                            </option>
                            <option className="text-neutral-120" value="ZA">
                              South Africa (+27)
                            </option>
                            <option className="text-neutral-120" value="ES">
                              Spain (+34)
                            </option>
                            <option className="text-neutral-120" value="GB">
                              United Kingdom (+44)
                            </option>
                            <option
                              className="text-neutral-120"
                              value="US"
                              selected
                            >
                              United States (+1)
                            </option>
                          </select>
                          <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100"></label>
                        </div>
                      </div>
                      <div class="absolute top-0 left-0 flex h-full w-full align-center px-sm pointer-events-none"><img loading="lazy" class="object-contain w-md" alt="Bharôt" src="https://flagcdn.com/40x30/in.png"/></div>
                    </div>
                    <div className="relative w-full -ml-[1px]" >
                      <div className="w-full ">
                        <div
                          className="relative 
                          text-ellipsis overflow-hidden"
                        >
                          <input
                            style={{ paddingLeft: "15px",width: "100%",
                              borderTopRightRadius: "8px",
                              borderBottomRightRadius: "8px" }}
                            className="peer w-full px-sm placeholder-transparent border-neutral-20 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:bg-neutral-5 disabled:border-neutral-20 hover:border-neutral-40 focus:border-viridian-100 h-2xl pt-m disabled:hover:cursor-not-allowed rounded-none rounded-r-md"
                            placeholder="Phone"
                            type="tel"
                            name="company_phone"
                            value={formData.company_phone}
                            onChange={handleChange}
                          />
                          <label className="absolute left-0 text-2xs top-xs transition-all truncate max-w-full peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 pointer-events-none text-neutral-60 peer-focus:text-2xs peer-focus:top-xs peer-focus:translate-y-0 pl-sm peer-focus:text-viridian-100">
                            Phone
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-sm">
                <label className="space-x-xs flex">
                  <input
                    type="checkbox"
                    className="border-1 border-neutral-40 rounded-2xs ring-transparent h-s w-s focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-neutral-20 checked:text-viridian-100 hover:checked:text-viridian-120 hover:border-neutral-60"
                    name="subscribe_to_newsletter"
                    checked={formData.subscribe_to_newsletter}
                    onChange={handleChange}
                  />
                  <div className="relative space-y-2xs  ml-2">
                    <div className="focus:ring-0 focus:outline-none leading-none">
                      <div className="font-sans max-w-full text-xs md:text-xs font-normal whitespace-pre-wrap text-left text-neutral-100 inline text-neutral-80">
                        HRMS will send you members-only deals, inspiration,
                        SMS and marketing emails. You can unsubscribe at any
                        time.
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="">
                <div className="flex-grow">
                  <button
                    type="submit"
                    className="inline-flex focus:outline-none w-full sm:w-full"
                    onClick={() => navigate("/interested-part")}
                  >
                    <div className="group box-border inline-flex justify-center border-solid border-2 rounded-full focus:outline-none duration-100 py-s px-l w-full sm:w-full text-white border-radical-120 bg-radical-120 cursor-pointer hover:text-white hover:border-radical-100 hover:bg-radical-100">
                      <div className="font-sans max-w-full text-base md:text-sm font-semibold whitespace-pre-wrap text-center inline">
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

export default OrganizationAdd;
