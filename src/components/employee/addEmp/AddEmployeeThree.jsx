import { Field, Form, Formik } from "formik";
import React from "react";
import { updateUserAsync } from "../../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

function AddEmployeeThree({ handleSubmit, userId, next, setNext }) {
  const dispatch = useDispatch();
  const handleRole = (values) => {
    if (next === true && values?.roleId) {
      dispatch(updateUserAsync({ userId, userData: values }))
        .unwrap()
        .then(() => {
          setNext(false);
        })
        .catch((err) => {
          console.error("Submission error:", err);
        });
    }
  };

  const initialValues = {
    userId: userId,
    jobTitle: "",
    salary: "",
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
            style={{ "--purg7v0": "transparent" }}
          >
            <div
              class="purg7v1 purg7vn purg7vc9 purg7vdb _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <span
                class="_6o3wap1 _6o3wapn _6o3wapu _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
              >
                Add contract information
              </span>
              <div
                class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r7a:"
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
                            style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                          >
                            Role
                          </span>
                        </div>
                      </div>
                      <div
                        class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                        style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                      >
                        <div
                          class="purg7v1 purg7v78 purg7v81 purg7v3c purg7vug purg7vc7 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd0 purg7vum purg7vd6 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <Formik
                              initialValues={{ roleId: "" }}
                              onSubmit={handleRole}
                            >
                              {({ values }) => (
                                <Form>
                                  {handleRole(values)}
                                  <Field
                                    as="select"
                                    name="roleId"
                                    class="t5hzt70 border-none"
                                    style={{ "--_1sco1wt0": 1 }}
                                  >
                                    <option value="" disabled>
                                      Select a role
                                    </option>
                                    <option value="66debf22e49b29d10a56cf2e">
                                      Admin
                                    </option>
                                    <option value="66e2a0a8483f6fcc9cdbda9f">
                                      Employee
                                    </option>
                                  </Field>
                                </Form>
                              )}
                            </Formik>
                          </div>
                          <div
                            class="purg7v1 purg7vc9 purg7vcf purg7vcz _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <svg
                              aria-hidden="true"
                              class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                              style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                            >
                              <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-down"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </button>
              </div>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values }) => (
                  <Form className="w-full">
                    {handleSubmit(values)}
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r7b:"
                        data-state="closed"
                        disabled=""
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
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  Level
                                </span>
                              </div>
                            </div>
                            <div class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1">
                              <div
                                class="purg7v1 purg7v78 purg7v81 purg7v3c purg7vug purg7vc7 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd0 purg7vum purg7vd6 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <Field
                                    as="select"
                                    name="jobTitle"
                                    class="t5hzt70 border-none"
                                    style={{ "--_1sco1wt0": 1 }}
                                  >
                                    <option value="" disabled>
                                      Select level
                                    </option>
                                    <option value="associateTrainee">
                                      Associate Trainee
                                    </option>
                                    <option value="associate">Associate</option>
                                    <option value="seniorAssociate">
                                      Senior Associate
                                    </option>
                                    <option value="lead">Lead</option>
                                    <option value="manager">Manager</option>
                                    <option value="seniorManager">
                                      Senior Manager
                                    </option>
                                    <option value="director">Director</option>
                                    <option value="seniorDirector">
                                      Senior Director
                                    </option>
                                    <option value="vicePresident">
                                      Vice President
                                    </option>
                                    <option value="seniorVicePresident">
                                      Senior Vice President
                                    </option>
                                    <option value="chiefOfficer">
                                      Chief Officer
                                    </option>
                                  </Field>
                                </div>
                                <div
                                  class="purg7v1 purg7vc9 purg7vcf purg7vcz _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
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
                              </div>
                            </div>
                          </div>
                        </label>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vc7 purg7vda _15se5fi0 mt-5"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r7c:"
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
                                    Salary type
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
                                      <div
                                        class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <Field
                                          as="select"
                                          class="t5hzt70 border-none"
                                          name="salaryType"
                                        >
                                          <option value="yearly">Yearly</option>
                                          <option value="monthly">
                                            Monthly
                                          </option>
                                          <option value="weekly">Weekly</option>
                                          <option value="daily">Daily</option>
                                          <option value="hourly">Hourly</option>
                                        </Field>
                                      </div>
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
                              </div>
                            </div>
                          </label>
                        </button>
                      </div>
                      <div
                        class="purg7v1 purg7vx purg7vc9 _15se5fi0 mrpl5v0"
                        style={{ "--purg7v0": "transparent" }}
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
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  Gross salary
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
                                  class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <Field
                                    class="_1tr1dnd0"
                                    type="number"
                                    name="salary"
                                    style={{
                                      paddingRight: "var(--_1wf7mbl4y)",
                                    }}
                                  />
                                </div>
                                <div
                                  class="purg7v1 purg7vbi purg7vc9 _15se5fi0"
                                  style={{
                                    "--purg7v0": "transparent",
                                    paddingRight: 10,
                                  }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <span
                                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                      style={{
                                        "--_6o3wap0": "var(--_1wf7mbl3p)",
                                      }}
                                    >
                                      LPA
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              {/* <div
                class="purg7v1 purg7vc7 purg7vda _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
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
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                        >
                          Hours
                        </span>
                      </div>
                    </div>
                    <div
                      class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                      style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                    >
                      <input class="_1tr1dnd0" type="number" min="0" value="" />
                    </div>
                  </div>
                </label>
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
                          Frequency
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
                          class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <select class="t5hzt70 border-none w-3/4">
                            <option value="">-- None --</option>
                            <option value="week">Week</option>
                            <option value="day">Day</option>
                            <option value="month">Month</option>
                            <option value="yearly">Year</option>
                          </select>
                        </div>
                        <div
                          class="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <svg
                            aria-hidden="true"
                            class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                            style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                          >
                            <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-down"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div> */}
              {/* <button
                type="button"
                aria-pressed="false"
                data-state="off"
                aria-label="Has trial period"
                class="ktk14f5"
              >
                <div class="ktk14f0">
                  <div
                    class="ktk14f1 ktk14f65 ktk14fei"
                    style={{transform: "none", transformOrigin: "50% 50% 0px"}}
                  >
                    <div
                      class="ktk14f2 "
                      style={{transform: "none", transformOrigin: "50% 50% 0px"}}
                    >
                      <div class="ktk14f6" style={{opacity: 1, transform: "none"}}>
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha2 _1qphaha6 _1qphaha7"
                          style={{"--_1qphaha0": "var(--seicjt6b)"}}
                        >
                          <use xlink:href="/assets/tiny-symbols.hcag0b77bn.svg#cross"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span
                    class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                    style={{"--_6o3wap0": "var(--seicjt2t)"}}
                  >
                    Has trial period
                  </span>
                </div>
              </button> */}
            </div>
            {/* <div
              class="purg7v1 purg7v91 purg7v2k purg7vc9 _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v8z purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v79 purg7v83 purg7vud purg7vc7 purg7vd9 _15se5fi0 _1y2tv656"
                  style={{"--purg7v0": "var(--_1wf7mbl3m)", overflowWrap: "break-word"}}
                >
                  <span
                    class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                    style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                  >
                    Many processes are closely related to the employee's role.
                    We recommend you to complete this information.
                  </span>
                </div>
              </div>
              <div
                class="purg7v1 purg7v94 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              ></div>
              <div
                class="purg7v1 purg7v95 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              ></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeThree;
