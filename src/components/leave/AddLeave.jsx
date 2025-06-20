import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { fetchLeaveAllocationByEmployee } from "../../redux/slice/leaveAllocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextField, CssBaseline, Container } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  DesktopDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createLeaveRequest } from "../../redux/slice/leaveSlice";

function AddLeave({
  closeModal,
  requestLeave,
  setRequestLeave,
  handleAddLeave,
  userId,
  handleChange,
  handleFileChange,
}) {
  // const [requestLeave, setRequestLeave] = useState({
  //   userId,
  //   leaveTypeId: "",
  //   reason: "",
  //   leaveDuration: "full_day",
  //   half: "first_half",
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   supportingDocuments: null,
  // });
  console.log("requestLeave", requestLeave);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(fetchLeaveAllocationByEmployee(userId));
    }
  }, [userId]);

  const leaveAllocation = useSelector((state) =>
    state.leaveAllocation?.allocationByEmployee
      ? state.leaveAllocation?.allocationByEmployee
      : []
  );
  // console.log(leaveAllocation);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setRequestLeave((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (e) => {
  //   setRequestLeave((prev) => ({
  //     ...prev,
  //     supportingDocuments: e.target.files[0], // Capture the file
  //   }));
  // };

  return (
    <div>
      <div
        class="cnz6kw0 cnz6kw1 flex"
        aria-modal="true"
        style={{ opacity: 1 }}
      >
        <div
          class="cnz6kw4 flex justify-center items-center"
          aria-label="Add time off"
          style={{ transform: "none" }}
        >
          <div
            class="purg7v1 purg7v3x purg7vc9 purg7vuc _15se5fi0 _1y2tv659 w-1/3"
            style={{
              "--purg7v0": "transparent",
              background: "rgb(255, 255, 255)",
            }}
          >
            <div class="cnz6kw6">
              <div
                class="purg7v1 purg7ve purg7v3e purg7vc9 purg7vcf purg7vcz _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <svg
                  aria-hidden="true"
                  class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                  style={{ "--_1qphaha0": "var(--seicjt4u)" }}
                >
                  <use xlink:href="/assets/large-symbols.lnup1txy2w.svg#beach"></use>
                </svg>
              </div>
            </div>
            <div
              class="purg7v1 purg7v7a purg7v8y purg7vc9 _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v91 purg7v9r purg7vud purg7vc9 purg7vdb purg7v64 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <span
                  class="_6o3wap1 _6o3wapn _6o3wapu _6o3wap7 _6o3wap9"
                  style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                >
                  Add time off
                </span>
              </div>
              <div
                class="purg7v1 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <span
                  class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wapz"
                  style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                >
                  Request time off and select the type of absence.
                </span>
              </div>
            </div>
            <form class="tY4kP" onSubmit={handleAddLeave}>
              <div
                class="purg7v1 purg7v7a purg7v8z purg7v9v purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div class="OV-fI">
                  <div
                    class="purg7v1  purg7vc9 purg7vd8 _15se5fi0"
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
                              Type of absence
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
                              <select
                                name="leaveTypeId"
                                value={requestLeave.leaveTypeId}
                                onChange={(e)=>{handleChange(e)}}
                                class="t5hzt70 border-none w-3/4"
                              >
                                <option value="">Select type of absence</option>
                                {leaveAllocation.length > 0 &&
                                  leaveAllocation.map((allocated) => {
                                    return (
                                      <option value={allocated.leaveTypeId._id}>
                                        {allocated.leaveTypeId.name}
                                      </option>
                                    );
                                  })}
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
                            Description
                          </span>
                        </div>
                      </div>
                      <div
                        class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1 "
                        style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                      >
                        <textarea
                          name="reason"
                          value={requestLeave.reason}
                          onChange={(e)=>{handleChange(e)}}
                          class="_7f9aoq0 border-none"
                          style={{ height: "88px !important" }}
                        ></textarea>
                      </div>
                    </div>
                  </label>
                </div>
                <div class="OV-fI">
                  <div
                    class="purg7v1 purg7v68 purg7vc7 _15se5fi0 _1y2tv656"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <label
                      class={`_0JTeE ${requestLeave.leaveDuration === "half_day" && "tjUQY"}`}
                    >
                      <input
                        type="radio"
                        name="leaveDuration"
                        value="half_day"
                        checked={requestLeave.leaveDuration === "half_day"}
                        onChange={(e)=>{handleChange(e)}}
                        hidden
                      />
                      <span class="_0ECLd">Half day</span>
                    </label>
                    <label
                      class={`_0JTeE ${requestLeave.leaveDuration === "full_day" && "tjUQY"}`}
                    >
                      <input
                        type="radio"
                        name="leaveDuration"
                        value="full_day"
                        checked={requestLeave.leaveDuration === "full_day"}
                        onChange={(e)=>{handleChange(e)}}
                        hidden
                      />
                      <span class="_0ECLd">Days</span>
                    </label>
                  </div>
                </div>
                {requestLeave.leaveDuration === "half_day" && (
                  <div class="OV-fI">
                    <div
                      class="purg7v1 purg7vc9 purg7vcz _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <label class="i1omw">
                        <input
                          type="radio"
                          name="half"
                          value="first_half"
                          checked={requestLeave.half === "first_half"}
                          onChange={(e)=>{handleChange(e)}}
                        />
                        <span class="y5M9C">First half of the day</span>
                      </label>
                      <label class="i1omw">
                        <input
                          type="radio"
                          name="half"
                          value="second_half"
                          checked={requestLeave.half === "second_half"}
                          onChange={(e)=>{handleChange(e)}}
                        />
                        <span class="y5M9C">Second half of the day</span>
                      </label>
                    </div>
                  </div>
                )}
                <div className="OV-fI">
                  <div role="tooltip">
                    <div
                      className="purg7v1 purg7vc9 _15se5fi0 tether-target tether-pinned tether-element-attached-bottom tether-target-attached-top tether-enabled"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        role="presentation"
                        tabIndex={0}
                        className="SXVSd false"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                          border: "2px dashed #ccc",
                          borderRadius: "8px",
                        }}
                      >
                        {/* Hidden File Input */}
                        <input
                          id="fileInput"
                          type="file"
                          onChange={(e)=>{handleFileChange(e)}}
                          accept=".pdf,.doc,.docx,.jpg,.png"
                          style={{ display: "none" }}
                        />
                        {/* Clickable Text for Upload */}
                        <span
                          className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                            display: "inline-block",
                            textAlign: "center",
                            fontSize: "16px",
                            color: "#333",
                          }}
                        >
                          (Optional) Drop your absence document here or{" "}
                          <strong>click to select</strong>
                        </span>
                      </div>
                    </div>
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
                            Date range
                          </span>
                        </div>
                      </div>
                      {/* <div
                        class="purg7v1 purg7v5x purg7vc9 _15se5fio _15se5fi2 _15se5fi1v _1y2tv656 hqyye1"
                        style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                      > */}
                      {/* <div
                          class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vv2 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          > */}
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "2%",
                          }}
                        >
                          <DesktopDatePicker
                            name="startDate"
                            label="Start Date"
                            value={requestLeave.startDate}
                            onChange={(date) =>
                              setRequestLeave((prev) => ({
                                ...prev,
                                startDate: date,
                              }))
                            }
                            format="dd/MM/yyyy"
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                margin="normal"
                              />
                            )}
                          />
                          <DesktopDatePicker
                            name="endDate"
                            label="End Date"
                            format="dd/MM/yyyy"
                            value={requestLeave.endDate}
                            onChange={(date) =>
                              setRequestLeave((prev) => ({
                                ...prev,
                                endDate: date,
                              }))
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                margin="normal"
                              />
                            )}
                          />
                        </div>
                      </LocalizationProvider>
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
                    {/* </div> */}
                    {/* </div>
                    </div> */}
                  </label>
                </div>
                {/* <div
                  class="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7v79 purg7v83 purg7vud purg7vc7 purg7vd9 _15se5fi0 _1y2tv656"
                    style={{
                      "--purg7v0": "var(--_1wf7mbl37)",
                      overflowWrap: "break-word",
                    }}
                  >
                    <div
                      class="purg7v1 purg7vc7 purg7vcz _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        Requests for time off by supervisors and admins will be
                        auto-approved.
                      </span>
                    </div>
                  </div>
                </div>*/}
              </div>
              <div
                class="purg7v1 purg7v7a purg7v82 purg7vc7 purg7vcc purg7vcf purg7vcy purg7vd8 _15se5fi0 _1y2tv6516 _1y2tv651h zinm410"
                style={{ "--purg7v0": "transparent" }}
              >
                <button
                  class="_1nz7aia3 _1nz7aia4"
                  type="submit"
                  style={{
                    "--_1nz7aia2": "var(--_1wf7mbl52)",
                    "--_1nz7aia1": "var(--_1wf7mbl52)",
                    "--_1nz7aia0": "none",
                  }}
                  disabled={
                    !requestLeave.leaveTypeId ||
                    !requestLeave.reason ||
                    !requestLeave.startDate ||
                    !requestLeave.endDate
                  }
                >
                  <span
                    class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                    style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                  >
                    Request for Time Off
                  </span>
                </button>
              </div>
            </form>
            <button
              type="button"
              aria-label="Close"
              class="cnz6kw7"
              color="overlayIconSecondary"
              onClick={closeModal}
            >
              <svg
                aria-hidden="true"
                class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
              >
                <IoMdClose size={20} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLeave;
