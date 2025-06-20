import React, { useEffect } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { HiOutlineIdentification } from "react-icons/hi2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
} from "../../../redux/slice/userProfileSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS
import { useParams } from "react-router-dom";

function IdentityDocument() {
  const dispatch = useDispatch();
  const { loading, profiles } = useSelector((state) => state.profile);
  console.log(profiles);
  const editId = useParams().id;
  console.log("editId", editId);
  const userId = editId? editId : localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(getUserProfile(userId));
    }
  }, [dispatch, userId]);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    idNumber: Yup.string()
      .required("ID Number is required")
      .min(2, "ID Number must be at least 2 characters long"),
    idExpiryDate: Yup.date()
      .required("ID Expiry Date is required")
      .typeError("Invalid date format"),
  });

  // Initial form values
  const initialValues = {
    userId: userId,
    idNumber: profiles[0]?.idNumber || "",
    idExpiryDate: profiles[0]?.idExpiryDate || "",
  };
  console.log("initialValues", initialValues);

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
                <HiOutlineIdentification size={35} color="#1F74EC" />
              </div>
            </div>
            <div class="Z2tZY">
              <span
                class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
              >
                Identification documents
              </span>
            </div>
            <div class="lsgRP">
              <span
                class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
              >
                Complete your identification information to verify your
                identity, generate agreements, and process payroll accurately
              </span>
            </div>
          </div>
        </div>
        <div class="YI2-W">
          <div class="_6NtRo">
            <div id="identification">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={handleSubmit}
              >
                {({ values, isSubmitting, setFieldValue }) => (
                  <Form class="tY4kP">
                    {console.log(values)}
                    <div class="OV-fI WWFF9"></div>
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
                                ID Number
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
                              name="idNumber"
                              value={values.idNumber || profiles[0]?.idNumber}
                              onChange={(event) =>
                                setFieldValue("idNumber", event.target.value)
                              }
                            />
                          </div>
                          <ErrorMessage
                            name="idNumber"
                            component="div"
                            className="text-red-500 text-sm"
                          />
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
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                ID expiration date
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
                                <DatePicker
                                  selected={
                                    values.idExpiryDate
                                      ? new Date(values.idExpiryDate)
                                      : profiles[0]?.idExpiryDate
                                  } // Ensure dob is a Date object
                                  onChange={(date) =>
                                    setFieldValue("idExpiryDate", date)
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
                              </div>
                              <div
                                class="purg7v1 purg7vc9 _15se5fi0 ydan0q0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <FaCaretDown color="#ccc" />
                              </div>
                            </div>
                          </div>
                          <ErrorMessage
                            name="idExpiryDate"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </label>
                      <div class="OV-fI zyPqg mt-3">
                        <div class="OnRSf">
                          {values &&
                            (values.idNumber || values.idExpiryDate) && (
                              <button
                                className="_1nz7aia3 _1nz7aia4"
                                type="submit"
                                disabled={isSubmitting || loading}
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
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityDocument;
