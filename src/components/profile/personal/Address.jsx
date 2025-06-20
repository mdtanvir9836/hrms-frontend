import React, { useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCaretDown, FaRoute } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../../redux/slice/userSlice";
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
} from "../../../redux/slice/userProfileSlice";
import { useParams } from "react-router-dom";

export default function Address() {
  const dispatch = useDispatch();
  const editId = useParams().id;
  console.log("editId", editId);
  const userId = editId? editId : localStorage.getItem("userId");
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
      dispatch(getUserProfile(userId));
    }
  }, [userId]);

  const { users } = useSelector((state) => state.user);
  const { status, profiles } = useSelector((state) => state.profile);
  // console.log(profiles);

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string()
      .required("ZIP Code is required")
      .matches(/^[0-9]{5,6}$/, "ZIP Code must be 5 or 6 digits"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  });

  // Initial form values
  const initialValues = {
    userId: userId,
    address: profiles[0]?.address || "",
    city: profiles[0]?.city || "",
    zipCode: profiles[0]?.zipCode || "",
    country: profiles[0]?.country || "",
    state: profiles[0]?.state || ""
  };
  // console.log(initialValues);

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    if (profiles[0]?._id) {
      dispatch(
        updateUserProfile({ id: profiles[0]?._id, profileData: values })
      ).unwrap();
    } else
      dispatch(createUserProfile(values))
        .unwrap()
        .then(() => {
          // navigate("/name-setup");
          dispatch(getUserProfile(userId));
        })
        .catch((err) => {
          console.error("Submission error:", err);
        })
        .finally(() => {
          setSubmitting(false);
        });
  };
  return (
    <div class="JsOur jZmi-">
      <div class="LmTK2 _3k5ae">
        <div class="_6o1-A">
          <div class="WToIY medium XOGJ7">
            <div
              class="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div class="_6ILTG">
                <FaRoute size={30} color="#1F74EC" />
              </div>
            </div>
            <div class="Z2tZY">
              <span
                class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
              >
                Address
              </span>
            </div>
            <div class="lsgRP">
              <span
                class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
              >
                Fill in your address.
              </span>
            </div>
          </div>
        </div>
        <div class="YI2-W">
          <div class="_6NtRo">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              {({ values, isSubmitting, setFieldValue }) => (
                <Form class="tY4kP">
                  {/* {console.log(values)} */}
                  <div class="OV-fI">
                    <div id="address">
                      <div class="OV-fI">
                        <label class="hqyye0">
                          <div
                            class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  Address line
                                </span>
                              </div>
                            </div>
                            <div
                              class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                              style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                            >
                              <Field
                                class="_1tr1dnd0"
                                type="text"
                                name="address"
                                value={values.address || profiles[0]?.address} // Use short-circuit evaluation
                                onChange={(event) =>
                                  setFieldValue("address", event.target.value)
                                } // Extract value from event
                              />
                              <div class="aheixa0">
                                <div class="aheixa1"></div>
                                <div class="aheixa2">
                                  <div role="tooltip">
                                    <FaExclamationCircle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div class="OV-fI WWFF9">
                        <div class="OnRSf">
                          <label class="hqyye0">
                            <div
                              class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <span
                                    class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                    style={{
                                      "--_6o3wap0": "var(--_1wf7mbl3s)",
                                    }}
                                  >
                                    City
                                  </span>
                                </div>
                              </div>
                              <div
                                class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                              >
                                <Field
                                  class="_1tr1dnd0"
                                  type="text"
                                  name="city"
                                  value={values.city || profiles[0]?.city} // Use short-circuit evaluation
                                  onChange={(event) =>
                                    setFieldValue("city", event.target.value)
                                  } // Extract value from event
                                />
                                <div class="aheixa0">
                                  <div class="aheixa1"></div>
                                  <div class="aheixa2">
                                    <div role="tooltip">
                                      <FaExclamationCircle />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div class="OnRSf">
                          <label class="hqyye0">
                            <div
                              class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <span
                                    class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                    style={{
                                      "--_6o3wap0": "var(--_1wf7mbl3s)",
                                    }}
                                  >
                                    Zip code
                                  </span>
                                </div>
                              </div>
                              <div
                                class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                              >
                                <Field
                                  class="_1tr1dnd0"
                                  type="text"
                                  name="zipCode"
                                  value={values.zipCode || profiles[0]?.zipCode}
                                  // Use short-circuit evaluation
                                  onChange={(event) =>
                                    setFieldValue("zipCode", event.target.value)
                                  } // Extract value from event
                                />
                                <div class="aheixa0">
                                  <div class="aheixa1"></div>
                                  <div class="aheixa2">
                                    <div role="tooltip">
                                      <FaExclamationCircle />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="OV-fI">
                        <label class="hqyye0">
                          <div
                            class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  State / Province / Region
                                </span>
                              </div>
                            </div>
                            <div
                              class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                              style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                            >
                              <Field
                                class="_1tr1dnd0"
                                type="text"
                                name="state"
                                value={values.state || profiles[0]?.state}
                                // Use short-circuit evaluation
                                onChange={(event) =>
                                  setFieldValue("state", event.target.value)
                                } // Extract value from event
                              />
                              <div class="aheixa0">
                                <div class="aheixa1"></div>
                                <div class="aheixa2">
                                  <div role="tooltip">
                                    <FaExclamationCircle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div class="OV-fI">
                        <label class="hqyye0">
                          <div
                            class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vc9 purg7vd5 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                style={{
                                  "--purg7v0": "transparent",
                                  width: "90%",
                                }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  Country
                                </span>
                              </div>
                            </div>
                            <div
                              class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                              style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                            >
                              <div
                                class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7vc9 _15se5fi0 w-[90%]"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <Field
                                    class="t5hzt70 border-none"
                                    name="country"
                                    as="select"
                                    value={
                                      values.country || profiles[0]?.country
                                    }
                                    // Use short-circuit evaluation
                                    onChange={(event) =>
                                      setFieldValue(
                                        "country",
                                        event.target.value
                                      )
                                    } // Extract value from event
                                  >
                                    <option value="">-- choose --</option>
                                    <option value="af">Afghanistan</option>
                                    <option value="al">Albania</option>
                                    <option value="dz">Algeria</option>
                                    <option value="as">American Samoa</option>
                                    <option value="ad">Andorra</option>
                                    <option value="ao">Angola</option>
                                    <option value="ai">Anguilla</option>
                                    <option value="aq">Antarctica</option>
                                    <option value="ag">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="ar">Argentina</option>
                                    <option value="am">Armenia</option>
                                    <option value="aw">Aruba</option>
                                    <option value="au">Australia</option>
                                    <option value="at">Austria</option>
                                    <option value="az">Azerbaijan</option>
                                    <option value="bs">Bahamas</option>
                                    <option value="bh">Bahrain</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bb">Barbados</option>
                                    <option value="by">Belarus</option>
                                    <option value="be">Belgium</option>
                                    <option value="bz">Belize</option>
                                    <option value="bj">Benin</option>
                                    <option value="bm">Bermuda</option>
                                    <option value="bt">Bhutan</option>
                                    <option value="bo">Bolivia</option>
                                    <option value="ba">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="bw">Botswana</option>
                                    <option value="bv">Bouvet Island</option>
                                    <option value="br">Brazil</option>
                                    <option value="io">
                                      British Indian Ocean Territory
                                    </option>
                                    <option value="vg">
                                      British Virgin Islands
                                    </option>
                                    <option value="bn">Brunei</option>
                                    <option value="bg">Bulgaria</option>
                                    <option value="bf">Burkina Faso</option>
                                    <option value="bi">Burundi</option>
                                    <option value="kh">Cambodia</option>
                                    <option value="cm">Cameroon</option>
                                    <option value="ca">Canada</option>
                                    <option value="cv">Cape Verde</option>
                                    <option value="bq">
                                      Caribbean Netherlands
                                    </option>
                                    <option value="ky">Cayman Islands</option>
                                    <option value="cf">
                                      Central African Republic
                                    </option>
                                    <option value="td">Chad</option>
                                    <option value="cl">Chile</option>
                                    <option value="cn">China</option>
                                    <option value="cx">Christmas Island</option>
                                    <option value="cc">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="co">Colombia</option>
                                    <option value="km">Comoros</option>
                                    <option value="ck">Cook Islands</option>
                                    <option value="cr">Costa Rica</option>
                                    <option value="hr">Croatia</option>
                                    <option value="cu">Cuba</option>
                                    <option value="cw">Curaçao</option>
                                    <option value="cy">Cyprus</option>
                                    <option value="cz">Czechia</option>
                                    <option value="cd">DR Congo</option>
                                    <option value="dk">Denmark</option>
                                    <option value="dj">Djibouti</option>
                                    <option value="dm">Dominica</option>
                                    <option value="do">
                                      Dominican Republic
                                    </option>
                                    <option value="ec">Ecuador</option>
                                    <option value="eg">Egypt</option>
                                    <option value="sv">El Salvador</option>
                                    <option value="gq">
                                      Equatorial Guinea
                                    </option>
                                    <option value="er">Eritrea</option>
                                    <option value="ee">Estonia</option>
                                    <option value="sz">Eswatini</option>
                                    <option value="et">Ethiopia</option>
                                    <option value="fk">Falkland Islands</option>
                                    <option value="fo">Faroe Islands</option>
                                    <option value="fj">Fiji</option>
                                    <option value="fi">Finland</option>
                                    <option value="fr">France</option>
                                    <option value="gf">French Guiana</option>
                                    <option value="pf">French Polynesia</option>
                                    <option value="tf">
                                      French Southern and Antarctic Lands
                                    </option>
                                    <option value="ga">Gabon</option>
                                    <option value="gm">Gambia</option>
                                    <option value="ge">Georgia</option>
                                    <option value="de">Germany</option>
                                    <option value="gh">Ghana</option>
                                    <option value="gi">Gibraltar</option>
                                    <option value="gr">Greece</option>
                                    <option value="gl">Greenland</option>
                                    <option value="gd">Grenada</option>
                                    <option value="gp">Guadeloupe</option>
                                    <option value="gu">Guam</option>
                                    <option value="gt">Guatemala</option>
                                    <option value="gg">Guernsey</option>
                                    <option value="gn">Guinea</option>
                                    <option value="gw">Guinea-Bissau</option>
                                    <option value="gy">Guyana</option>
                                    <option value="ht">Haiti</option>
                                    <option value="hm">
                                      Heard Island and McDonald Islands
                                    </option>
                                    <option value="hn">Honduras</option>
                                    <option value="hk">Hong Kong</option>
                                    <option value="hu">Hungary</option>
                                    <option value="is">Iceland</option>
                                    <option value="in">India</option>
                                    <option value="id">Indonesia</option>
                                    <option value="ir">Iran</option>
                                    <option value="iq">Iraq</option>
                                    <option value="ie">Ireland</option>
                                    <option value="im">Isle of Man</option>
                                    <option value="il">Israel</option>
                                    <option value="it">Italy</option>
                                    <option value="ci">Ivory Coast</option>
                                    <option value="jm">Jamaica</option>
                                    <option value="jp">Japan</option>
                                    <option value="je">Jersey</option>
                                    <option value="jo">Jordan</option>
                                    <option value="kz">Kazakhstan</option>
                                    <option value="ke">Kenya</option>
                                    <option value="ki">Kiribati</option>
                                    <option value="xk">Kosovo</option>
                                    <option value="kw">Kuwait</option>
                                    <option value="kg">Kyrgyzstan</option>
                                    <option value="la">Laos</option>
                                    <option value="lv">Latvia</option>
                                    <option value="lb">Lebanon</option>
                                    <option value="ls">Lesotho</option>
                                    <option value="lr">Liberia</option>
                                    <option value="ly">Libya</option>
                                    <option value="li">Liechtenstein</option>
                                    <option value="lt">Lithuania</option>
                                    <option value="lu">Luxembourg</option>
                                    <option value="mo">Macau</option>
                                    <option value="mg">Madagascar</option>
                                    <option value="mw">Malawi</option>
                                    <option value="my">Malaysia</option>
                                    <option value="mv">Maldives</option>
                                    <option value="ml">Mali</option>
                                    <option value="mt">Malta</option>
                                    <option value="mh">Marshall Islands</option>
                                    <option value="mq">Martinique</option>
                                    <option value="mr">Mauritania</option>
                                    <option value="mu">Mauritius</option>
                                    <option value="yt">Mayotte</option>
                                    <option value="mx">Mexico</option>
                                    <option value="fm">Micronesia</option>
                                    <option value="md">Moldova</option>
                                    <option value="mc">Monaco</option>
                                    <option value="mn">Mongolia</option>
                                    <option value="me">Montenegro</option>
                                    <option value="ms">Montserrat</option>
                                    <option value="ma">Morocco</option>
                                    <option value="mz">Mozambique</option>
                                    <option value="mm">Myanmar</option>
                                    <option value="na">Namibia</option>
                                    <option value="nr">Nauru</option>
                                    <option value="np">Nepal</option>
                                    <option value="nl">Netherlands</option>
                                    <option value="nc">New Caledonia</option>
                                    <option value="nz">New Zealand</option>
                                    <option value="ni">Nicaragua</option>
                                    <option value="ne">Niger</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="nu">Niue</option>
                                    <option value="nf">Norfolk Island</option>
                                    <option value="kp">North Korea</option>
                                    <option value="mk">North Macedonia</option>
                                    <option value="mp">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="no">Norway</option>
                                    <option value="om">Oman</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="pw">Palau</option>
                                    <option value="ps">Palestine</option>
                                    <option value="pa">Panama</option>
                                    <option value="pg">Papua New Guinea</option>
                                    <option value="py">Paraguay</option>
                                    <option value="pe">Peru</option>
                                    <option value="ph">Philippines</option>
                                    <option value="pn">Pitcairn Islands</option>
                                    <option value="pl">Poland</option>
                                    <option value="pt">Portugal</option>
                                    <option value="pr">Puerto Rico</option>
                                    <option value="qa">Qatar</option>
                                    <option value="cg">
                                      Republic of the Congo
                                    </option>
                                    <option value="ro">Romania</option>
                                    <option value="ru">Russia</option>
                                    <option value="rw">Rwanda</option>
                                    <option value="re">Réunion</option>
                                    <option value="bl">Saint Barthélemy</option>
                                    <option value="sh">
                                      Saint Helena, Ascension and Tristan da
                                      Cunha
                                    </option>
                                    <option value="kn">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="lc">Saint Lucia</option>
                                    <option value="mf">Saint Martin</option>
                                    <option value="pm">
                                      Saint Pierre and Miquelon
                                    </option>
                                    <option value="vc">
                                      Saint Vincent and the Grenadines
                                    </option>
                                    <option value="ws">Samoa</option>
                                    <option value="sm">San Marino</option>
                                    <option value="sa">Saudi Arabia</option>
                                    <option value="sn">Senegal</option>
                                    <option value="rs">Serbia</option>
                                    <option value="sc">Seychelles</option>
                                    <option value="sl">Sierra Leone</option>
                                    <option value="sg">Singapore</option>
                                    <option value="sx">Sint Maarten</option>
                                    <option value="sk">Slovakia</option>
                                    <option value="si">Slovenia</option>
                                    <option value="sb">Solomon Islands</option>
                                    <option value="so">Somalia</option>
                                    <option value="za">South Africa</option>
                                    <option value="gs">South Georgia</option>
                                    <option value="kr">South Korea</option>
                                    <option value="ss">South Sudan</option>
                                    <option value="es">Spain</option>
                                    <option value="lk">Sri Lanka</option>
                                    <option value="sd">Sudan</option>
                                    <option value="sr">Suriname</option>
                                    <option value="sj">
                                      Svalbard and Jan Mayen
                                    </option>
                                    <option value="se">Sweden</option>
                                    <option value="ch">Switzerland</option>
                                    <option value="sy">Syria</option>
                                    <option value="st">
                                      São Tomé and Príncipe
                                    </option>
                                    <option value="tw">Taiwan</option>
                                    <option value="tj">Tajikistan</option>
                                    <option value="tz">Tanzania</option>
                                    <option value="th">Thailand</option>
                                    <option value="tl">Timor-Leste</option>
                                    <option value="tg">Togo</option>
                                    <option value="tk">Tokelau</option>
                                    <option value="to">Tonga</option>
                                    <option value="tt">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="tn">Tunisia</option>
                                    <option value="tr">Turkey</option>
                                    <option value="tm">Turkmenistan</option>
                                    <option value="tc">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="tv">Tuvalu</option>
                                    <option value="ug">Uganda</option>
                                    <option value="ua">Ukraine</option>
                                    <option value="ae">
                                      United Arab Emirates
                                    </option>
                                    <option value="gb">United Kingdom</option>
                                    <option value="us">United States</option>
                                    <option value="um">
                                      United States Minor Outlying Islands
                                    </option>
                                    <option value="vi">
                                      United States Virgin Islands
                                    </option>
                                    <option value="uy">Uruguay</option>
                                    <option value="uz">Uzbekistan</option>
                                    <option value="vu">Vanuatu</option>
                                    <option value="va">Vatican City</option>
                                    <option value="ve">Venezuela</option>
                                    <option value="vn">Vietnam</option>
                                    <option value="wf">
                                      Wallis and Futuna
                                    </option>
                                    <option value="eh">Western Sahara</option>
                                    <option value="ye">Yemen</option>
                                    <option value="zm">Zambia</option>
                                    <option value="zw">Zimbabwe</option>
                                    <option value="ax">Åland Islands</option>
                                  </Field>
                                </div>
                                <FaCaretDown color="#ccc" />
                              </div>
                              <div class="aheixa0">
                                <div class="aheixa1"></div>
                                <div class="aheixa2">
                                  <div role="tooltip">
                                    <FaExclamationCircle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div
                        class="purg7v1 purg7v79 purg7v83 purg7vud purg7vc7 purg7vd9 _15se5fi0 _1y2tv656"
                        style={{
                          "--purg7v0": "var(--_1wf7mbl37)",
                          overflowWrap: "break-word",
                          gap: 20,
                        }}
                      >
                        <span
                          class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          Required information
                        </span>
                        <span
                          class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          Your company needs the{" "}
                          <span
                            class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                            style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                          >
                            Address
                          </span>{" "}
                          of this person to process the new hire. Can you help?
                        </span>
                      </div>
                    </div>
                   
                  </div>
                  <div class="OV-fI zyPqg">
                      <div class="OnRSf">
                        {values &&
                          (values.address ||
                            values.city ||
                            values.country ||
                            values.state ||
                            values.zipCode) && (
                            <button
                              className="_1nz7aia3 _1nz7aia4"
                              type="submit"
                              disabled={isSubmitting || status=="loading"}
                              style={{
                                "--_1nz7aia2": "var(--_1wf7mbl52)",
                                "--_1nz7aia1": "var(--_1wf7mbl52)",
                                "--_1nz7aia0": "none",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                              >
                                Save
                              </span>
                            </button>
                          )}
                      </div>
                    </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
