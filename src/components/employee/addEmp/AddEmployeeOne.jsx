import React, { useEffect } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaExclamationCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync } from "../../../redux/slice/userSlice";
import { fetchOrganizationById } from "../../../redux/slice/oraganizationSlice";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

function AddEmployeeOne({ handleSubmit }) {
  const dispatch = useDispatch();
  const orgId = localStorage.getItem("orgId");
  useEffect(() => {
    dispatch(fetchOrganizationById(orgId));
  }, [orgId]);

  const { loading, error, organization } = useSelector(
    (state) => state.organization
  );

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .max(15, "First name must be less than 15 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .max(15, "Last name must be less than 15 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    organizationId: orgId,
  };

  // console.log(initialValues);

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
          transform: "none",
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
                Fill in the employee's general information
              </span>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={handleSubmit}
              >
                {({ values }) => (
                  <Form className="w-full">
                    {handleSubmit(values)}
                    <div
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
                                style={{
                                  "--_6o3wap0": "var(--_1wf7mbl3s)",
                                }}
                              >
                                First name
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
                              name="firstName"
                            />
                            <div class="aheixa0">
                              <div class="aheixa1"></div>
                              <div class="aheixa2">
                                <div role="tooltip">
                                  <div class="purg7v1 purg7vc9 _15se5fi0 _1y2tv652 tether-target tether-pinned tether-pinned-right tether-element-attached-bottom tether-target-attached-top tether-enabled tether-pinned-left">
                                    <FaExclamationCircle />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-red-500 text-sm"
                          />
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
                                style={{
                                  "--_6o3wap0": "var(--_1wf7mbl3s)",
                                }}
                              >
                                Last name
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
                              name="lastName"
                            />
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
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </label>
                    </div>
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
                              Email
                            </span>
                          </div>
                        </div>
                        <div
                          class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                          style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                        >
                          <Field class="_1tr1dnd0" type="email" name="email" />
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
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </label>
                  </Form>
                )}
              </Formik>
              <div
                class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <button
                  type="button"
                  id="radix-:r1t:"
                  aria-haspopup="menu"
                  aria-expanded="false"
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
                            Legal entity
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
                              class="purg7v1 purg7vbh purg7vam purg7va purg7v3a purg7vc9 purg7vcf purg7vcz _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7 mr-2"
                                style={{
                                  "--_1qphaha0": "var(--_1wf7mbl3r)",
                                }}
                              >
                                <HiOutlineOfficeBuilding size={22} />
                              </svg>
                            </div>
                            <div
                              class="purg7v1 purg7vud purg7vc9 purg7vum _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wapy _6o3wapz _6o3wap11"
                                style={{
                                  "--_6o3wap0": "var(--_1wf7mbl3s)",
                                }}
                              >
                                <span
                                  title="Ideal E design "
                                  class="_1sco1wt2"
                                  style={{ "--_1sco1wt0": 1 }}
                                >
                                  {organization?.name}{" "}
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
                      </div>
                    </div>
                  </label>
                </button>
              </div>
              <div
                class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <button
                  type="button"
                  id="radix-:r1v:"
                  aria-haspopup="menu"
                  aria-expanded="false"
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
                            Payroll policy
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
                                  title="Choose"
                                  class="_1sco1wt2"
                                  style={{ "--_1sco1wt0": 1 }}
                                >
                                  Choose
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
                      </div>
                    </div>
                  </label>
                </button>
              </div>
            </div>
            <div
              class="purg7v1 purg7v2j purg7vc9 purg7vcy _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeOne;
