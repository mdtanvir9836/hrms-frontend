import React, { useEffect } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationCircle } from "react-icons/fa";
import {
  createBankDetails,
  getBankDetailsByUser,
  updateBankDetails,
} from "../../../redux/slice/bankSlice";
import { useParams } from "react-router-dom";

function BankDetails() {
  const dispatch = useDispatch();
  const { status, bankDetails } = useSelector((state) => state.bank);
  // console.log("bankDetails", bankDetails);
  const editId = useParams().id;
  console.log("editId", editId);
  const userId = editId? editId : localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      dispatch(getBankDetailsByUser(userId));
    }
  }, [dispatch, userId]);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    accountNumber: Yup.string()
      .required("Account number is required")
      .min(2, "Account number must be at least 2 characters long")
      .max(16, "Account number must not exceed 16 characters"),
    ifsc: Yup.string()
      .required("IFSC code is required")
      .matches(
        /^[A-Za-z]{4}[0-9]{7}$/,
        "IFSC code must be 4 letters followed by 7 digits"
      ),
  });

  // Initial form values
  const initialValues = {
    userId: userId,
    accountNumber: bankDetails?.accountNumber || "",
    ifsc: bankDetails?.ifsc || "",
  };

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    if (bankDetails?._id) {
      dispatch(
        updateBankDetails({ id: bankDetails?._id, data: values })
      ).unwrap();
    } else
      dispatch(createBankDetails(values))
        .unwrap()
        .then(() => {
          // navigate("/name-setup");
          dispatch(getBankDetailsByUser(userId));
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
                <HiOutlineBanknotes size={30} color="#1F74EC" />
              </div>
            </div>
            <div class="Z2tZY">
              <span
                class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
              >
                Bank information
              </span>
            </div>
            <div class="lsgRP">
              <span
                class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
              >
                Enter your bank account details.
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
                              Account number
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
                            name="accountNumber"
                            value={
                              values.accountNumber || bankDetails?.accountNumber
                            } // Use short-circuit evaluation
                            onChange={(event) =>
                              setFieldValue("accountNumber", event.target.value)
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
                        <ErrorMessage
                          name="accountNumber"
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
                              IFSE Code
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
                            name="ifsc"
                            value={values.ifsc || bankDetails?.ifsc} // Use short-circuit evaluation
                            onChange={(event) =>
                              setFieldValue("ifsc", event.target.value)
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
                        <ErrorMessage
                          name="ifsc"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </label>
                    <div class="OV-fI zyPqg mt-3">
                      <div class="OnRSf">
                        {values && (values.accountNumber || values.ifsc) && (
                          <button
                            className="_1nz7aia3 _1nz7aia4"
                            type="submit"
                            disabled={isSubmitting || status == "loading"}
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
  );
}

export default BankDetails;
