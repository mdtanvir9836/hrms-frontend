import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa6";
import { FiToggleLeft } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS
import { Formik, Form } from "formik";

function AddEmployeeFour({ handleSubmit, userId }) {
  const [toggle, setToggle] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(true);
  const initialValues = {
    userId: userId,
    hireDate: "",
    // employmentStatus: "inactive",
  };
  return (
    <div
      class="purg7v1 purg7vc9 purg7vum purg7vv2 purg7v64 _15se5fi0"
      style={{ "--purg7v0": "transparent" }}
    >
      <div
        class="purg7v1 purg7v8r purg7v5x purg7vc9 purg7v64 _15se5fi0"
        style={{
          "--purg7v0": "transparent",
          opacity: 1,
          transform: "translateX(0%) translateZ(0px)",
        }}
      >
        <div
          class="purg7v1 purg7vc9 purg7vut purg7v64 _15se5fi0"
          style={{ "--purg7v0": "transparent" }}
        >
          <div
            class="purg7v1 purg7vc7 purg7vde _15se5fi0"
            style={{ "--purg7v0": "transparent", height: "70%" }}
          >
            <div
              class="purg7v1 w-[90%] purg7vc9 purg7vdb _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <span
                class="_6o3wap1 _6o3wapn _6o3wapu _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
              >
                Set Silpi agreement start date and access to Teamgrid
              </span>
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
                        Start date
                      </span>
                    </div>
                  </div>
                  <div
                    class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                    style={{ "--purg7v0": "var(--_1wf7mbl3k)", width: "70%" }}
                  >
                    <div
                      class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <Formik
                          initialValues={initialValues}
                          onSubmit={handleSubmit}
                        >
                          {({ values, setFieldValue }) => (
                            <Form>
                              {handleSubmit(values)}
                              <DatePicker
                                selected={
                                  values.hireDate && new Date(values.hireDate)
                                } // Ensure dob is a Date object
                                onChange={(date) =>
                                  setFieldValue("hireDate", date)
                                } // Update Formik value on change
                                dateFormat="dd-MM-yyyy" // Customize date format
                                placeholderText="Select Expiry Date"
                                className="form-control w-full border-none" // Optional: Add your styles
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={120} // Show a dropdown of the past 120 years
                                maxDate={new Date(2100, 0, 1)} // Maximum date: January 1, 2100
                                minDate={new Date()} // Minimum  date: Today's date
                              />
                              {/* {values.hireDate &&
                              new Date(values.hireDate) <= new Date()
                                ? values.employmentStatus === "active"
                                : values.employmentStatus === "inactive"} */}
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <div
                        class="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                        ></svg>
                      </div>
                    </div>
                    <div class="aheixa0">
                      <div class="aheixa1"></div>
                      <div class="aheixa2">
                        <div role="tooltip">
                          <div class="purg7v1 purg7vc9 _15se5fi0 _1y2tv652 tether-target tether-pinned tether-pinned-right tether-element-attached-bottom tether-target-attached-top tether-enabled">
                            <FaExclamationCircle />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <div
                class="purg7v1 purg7v6d purg7vc7 purg7vcg purg7vd0 purg7vda _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                style={{
                  "--purg7v0": "transparent",
                  width: "70%",
                  height: "28%",
                }}
              >
                <div
                  class="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <span
                    class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                    style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                  >
                    Send Teamgrid invitation
                  </span>
                  <span
                    class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                    style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                  >
                    Sends an email with a link to join Teamgrid.
                  </span>
                </div>
                <button
                  type="button"
                  aria-pressed="false"
                  data-state="off"
                  class="ktk14f5 w-1/6"
                  onClick={() => setToggle(!toggle)}
                >
                  <div class="ktk14f0">
                    <div
                      class="ktk14f1 ktk14f4 ktk14f68 ktk14fel"
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <div
                        class="ktk14f2 ktk14f3"
                        style={{
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        }}
                      >
                        <div
                          class="ktk14f6"
                          style={{ opacity: 1, transform: "none" }}
                        >
                          <svg
                            aria-hidden="true"
                            class="_1qphaha1 _1qphaha2 _1qphaha6 _1qphaha7"
                            style={{ "--_1qphaha0": "var(--seicjt6d)" }}
                          >
                            {toggle ? (
                              <FaToggleOn size={35} color="var(--_1wf7mbl4i)" />
                            ) : (
                              <FiToggleLeft color="#ccc" size={35} />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div
                class="purg7v1 purg7vc9 purg7vd7 _15se5fi0"
                style={{ "--purg7v0": "transparent", width: "70%" }}
              >
                <span
                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                >
                  Employee onboarding
                </span>
                <div
                  class="purg7v1 purg7vc9 purg7vda _15se5fi0"
                  style={{ "--purg7v0": "transparent", width: "100%" }}
                >
                  <div
                    class="purg7v1 purg7vc9 _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v6d purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button type="button" style={{ width: "100%" }}>
                        <div
                          class="purg7v1 purg7vud purg7vc9 purg7vd8 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7vc7 purg7vcf purg7vd0 purg7vda _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                                width: "100%",
                                marginTop: -100,
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9 _6o3wap11"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span
                                  title="Activate Onboarding space"
                                  class="_1sco1wt1"
                                  style={{ "--_1sco1wt0": 3 }}
                                >
                                  Activate Onboarding space
                                </span>
                              </span>
                            </div>
                            <button
                              type="button"
                              aria-pressed="false"
                              data-state="off"
                              class="ktk14f5 w-1/6"
                              onClick={() => setToggleBtn(!toggleBtn)}
                            >
                              <div class="ktk14f0">
                                <div
                                  class="ktk14f1 ktk14f4 ktk14f68 ktk14fel"
                                  style={{
                                    transform: "none",
                                    transformOrigin: "50% 50% 0px",
                                  }}
                                >
                                  <div
                                    class="ktk14f2 ktk14f3"
                                    style={{
                                      transform: "none",
                                      transformOrigin: "50% 50% 0px",
                                    }}
                                  >
                                    <div
                                      class="ktk14f6"
                                      style={{ opacity: 1, transform: "none" }}
                                    >
                                      <svg
                                        aria-hidden="true"
                                        class="_1qphaha1 _1qphaha2 _1qphaha6 _1qphaha7"
                                        style={{
                                          "--_1qphaha0": "var(--seicjt6d)",
                                        }}
                                      >
                                        {toggleBtn ? (
                                          <FaToggleOn
                                            size={35}
                                            color="var(--_1wf7mbl4i)"
                                          />
                                        ) : (
                                          <FiToggleLeft
                                            color="#ccc"
                                            size={35}
                                          />
                                        )}
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                          <div
                            class="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                            style={{
                              "--purg7v0": "transparent",
                              marginTop: -100,
                            }}
                          >
                            <span
                              class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                              style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                            >
                              <span
                                title="A personal space to complete their onboarding-related tasks."
                                class="_1sco1wt1"
                                style={{ "--_1sco1wt0": 3 }}
                              >
                                A personal space to complete their
                                onboarding-related tasks.
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div style={{ height: "auto", opacity: 1 }}>
                      <div
                        class="purg7v1 purg7v6e purg7vc9 _15se5fi0 _1y2tv651e _1y2tv6513"
                        style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                      >
                        <div
                          class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <button
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:r86:"
                            data-state="closed"
                          >
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
                                      Select an onboarding
                                    </span>
                                  </div>
                                </div>
                                <div
                                  class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                                >
                                  <div
                                    class="purg7v1 purg7v78 purg7v81 purg7vx purg7v3c purg7vug purg7vc7 purg7vcf _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7vx purg7vc7 purg7vd7 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vud purg7vc9 purg7vum _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <span
                                          class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wapy _6o3wapz _6o3wap11"
                                          style={{
                                            "--_6o3wap0": "var(--_1wf7mbl3p)",
                                          }}
                                        >
                                          <span
                                            title="Select an onboarding workflow..."
                                            class="_1sco1wt2"
                                            style={{ "--_1sco1wt0": 1 }}
                                          >
                                            Select an onboarding workflow...
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <svg
                                      aria-hidden="true"
                                      class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                      style={{
                                        "--_1qphaha0": "var(--_1wf7mbl3p)",
                                      }}
                                    >
                                      <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-down"></use>
                                    </svg>
                                  </div>
                                  <div class="aheixa0">
                                    <div class="aheixa1"></div>
                                    <div class="aheixa2">
                                      <div role="tooltip">
                                        <div class="purg7v1 purg7vc9 _15se5fi0 _1y2tv652 tether-target tether-pinned tether-pinned-right tether-element-attached-bottom tether-target-attached-top tether-enabled">
                                          <FaExclamationCircle />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeFour;
