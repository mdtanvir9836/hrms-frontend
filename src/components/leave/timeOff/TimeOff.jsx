import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { IoAddSharp, IoCalendarClearOutline } from "react-icons/io5";
import AddLeave from "../AddLeave";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { fetchEmploymentInfoByUserId } from "../../../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaveAllocationByEmployee } from "../../../redux/slice/leaveAllocationSlice";
import { FaArrowRight } from "react-icons/fa";
import { BsCalendar2Check, BsCalendar2Date } from "react-icons/bs";
import { fetchUserById } from "../../../redux/slice/userSlice";
import {
  createLeaveRequest,
  fetchLeavesByUserId,
  updateLeave,
} from "../../../redux/slice/leaveSlice";
import TimeOffTab from "./TimeOffTab";

function TimeOff() {
  const param = useParams().id;
  const userId = param ? param : localStorage.getItem("userId");
  const dispatch = useDispatch();
  // console.log("userId", userId);
  const { users } = useSelector((state) => state.user);
  console.log("users", users);
  const { leave } = useSelector((state) => state.leaves);
  console.log("leave", leave);
  const [leaveId, setLeaveId] = useState(null);

  const [requestLeave, setRequestLeave] = useState({
    userId,
    leaveTypeId: "",
    reason: "",
    leaveDuration: "full_day",
    half: "first_half",
    startDate: new Date(),
    endDate: new Date(),
    supportingDocuments: null,
  });

  // Fetch leave data when leaveId changes
  useEffect(() => {
    if (leaveId) {
      const updateData = leave.find((item) => item._id === leaveId);

      if (updateData) {
        setRequestLeave({
          userId: updateData.userId,
          leaveTypeId: updateData.leaveTypeId?._id || "",
          reason: updateData.reason || "",
          leaveDuration: updateData.leaveDuration || "full_day",
          half: updateData.half || "first_half",
          startDate: new Date(updateData.startDate),
          endDate: new Date(updateData.endDate),
          supportingDocuments: updateData.supportingDocuments || null,
          status: "pending",
        });
      } else {
        console.error("Leave data not found");
      }
    }
  }, [leaveId, leave]); // Added `leave` as a dependency for accuracy

  useEffect(() => {
    if (userId) {
      dispatch(fetchLeaveAllocationByEmployee(userId));
      dispatch(fetchUserById(userId));
      dispatch(fetchLeavesByUserId(userId));
    }
  }, [userId, dispatch]);

  const leaveAllocation = useSelector((state) =>
    state.leaveAllocation?.allocationByEmployee
      ? state.leaveAllocation?.allocationByEmployee
      : []
  );
  // console.log(leaveAllocation);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [leaveTypeId, setleaveTypeId] = useState("6776349d3d6285f0c80ffe2e");
  // console.log("leaveTypeId", leaveTypeId);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setShowLeave(!showLeave);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestLeave((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setRequestLeave((prev) => ({
      ...prev,
      supportingDocuments: e.target.files[0], // Capture the file properly
    }));
  };

  const handleLeaveType = (id) => {
    setleaveTypeId(id);
    setShowLeave(false);
    handleClose();
  };

  const today = new Date();
  const pendingReview =
    leave.length > 0 && leave.filter((leave) => leave.status === "pending");
  const currentAndUpcoming =
    leave.length > 0 &&
    leave.filter(
      (leave) =>
        leave.status === "approved" && new Date(leave.startDate) >= today
    );
  const pastTimeOff =
    leave.length > 0 &&
    leave.filter(
      (leave) => leave.status === "approved" && new Date(leave.endDate) < today
    );

  const handleAddLeave = async () => {
    try {
      if (leaveId) {
        await dispatch(
          updateLeave({ leaveId, leaveData: requestLeave })
        ).unwrap();
      } else {
        await dispatch(createLeaveRequest(requestLeave)).unwrap();
      }
      dispatch(fetchLeavesByUserId(userId));
      closeModal();
    } catch (error) {
      console.error("Error in handleAddLeave:", error);
    }
  };

  // const renderYearView = () => {
  //   const months = Array.from({ length: 12 }, (_, i) => i); // Months: [0, 1, 2, ..., 11]
  //   return months.map((month) => (
  //     <Box key={month} sx={{ margin: "10px", width: "260px" }}>
  //       {/* <Typography
  //         variant="subtitle1"
  //         align="center"
  //         sx={{ fontWeight: "bold" }}
  //       >
  //         {new Date(2024, month).toLocaleString("default", { month: "long" })}
  //       </Typography> */}
  //       <DateCalendar
  //         value={new Date(2024, month)}
  //         readOnly
  //         currentMonth={new Date(2024, month)}
  //       />
  //     </Box>
  //   ));
  // };

  return (
    <div
      class="purg7v1 purg7vx purg7vc9 purg7vuy _15se5fi0"
      style={{
        "--purg7v0": "transparent",
        ...(param ? {} : { overflowY: "auto" }),
      }}
    >
      <div
        class="purg7v1 purg7v6i purg7vc9 _15se5fi0"
        style={{ "--purg7v0": "transparent" }}
      >
        <div
          class="purg7v1 purg7vx purg7vc9 purg7v64 _15se5fi0"
          style={{ "--purg7v0": "transparent" }}
        >
          <div
            class="purg7v1 purg7vc7 purg7v64 _15se5fi0"
            style={{ "--purg7v0": "transparent" }}
          >
            <div
              class="purg7v1 purg7vbl purg7vc9 purg7vdc _15se5fi0 _1a1q07o0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7vc9 purg7vdc _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v74 purg7vc7 purg7vcf purg7vd0 purg7vda _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <button type="button" class="_15ojh3a1" disabled="">
                      <svg
                        aria-hidden="true"
                        class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                        style={{ "--_1qphaha0": "var(--_1wf7mbl3k)" }}
                      >
                        <use xlink:href="/assets/medium-symbols.o9x3thcc74.svg#chevron-left"></use>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="purg7v1 purg7v68 purg7vx purg7vc9 purg7vd0 _15se5fio _15se5fi1 _15se5fi1v _1y2tv656"
                    style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                  >
                    <div
                      class="purg7v1 purg7vc9 purg7vcz _15se5fi6f _15se5fi5s _15se5fi7m"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div class="q6vr3">
                        <div class="YAACG">
                          <div
                            class="purg7v1 purg7vc9 purg7vcf _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div role="tooltip">
                              <div
                                class="purg7v1 purg7vug purg7vc7 purg7vcf purg7vd0 purg7vd8 _15se5fi0 tether-target tether-enabled tether-pinned tether-pinned-bottom tether-pinned-left"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                {/* <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  <span
                                    title="leave"
                                    class="_1sco1wt2"
                                    style={{ "--_1sco1wt0": 1 }}
                                  >
                                    Leave Type
                                  </span>
                                </span> */}
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3r)" }}
                                  onClick={handleClick}
                                >
                                  {showLeave ? (
                                    <CiCircleChevDown size={20} color="#000" />
                                  ) : (
                                    <CiCircleChevUp size={20} color="#000" />
                                  )}
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          {leaveAllocation.length > 0 &&
                            leaveAllocation.map((allocated) => {
                              return (
                                <MenuItem
                                  onClick={() =>
                                    handleLeaveType(allocated.leaveTypeId._id)
                                  }
                                >
                                  {allocated.leaveTypeId.name}
                                </MenuItem>
                              );
                            })}

                          {/* <MenuItem
                            onClick={() =>
                              handleLeaveType("6776349d3d6285f0c80ffe2e")
                            }
                          >
                            Casual Leave
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              handleLeaveType("677634af3d6285f0c80ffe31")
                            }
                          >
                            Maternity Leave
                          </MenuItem> */}
                        </Menu>

                        <div
                          class="purg7v1 purg7v81 purg7vk purg7vuf purg7vc9 _15se5fi0 justify-center items-center"
                          style={{
                            "--purg7v0": "transparent",
                            margin: "auto",
                          }}
                        >
                          <span
                            class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                            style={{
                              "--_6o3wap0": "var(--_1wf7mbl3s)",
                            }}
                          >
                            {leaveAllocation.length > 0 &&
                              leaveAllocation.map((allocated) => {
                                if (allocated.leaveTypeId._id === leaveTypeId) {
                                  return (
                                    <span
                                      title="leave"
                                      class="_1sco1wt2"
                                      style={{ "--_1sco1wt0": 1 }}
                                    >
                                      {allocated.leaveTypeId.name}
                                    </span>
                                  );
                                }
                              })}
                          </span>
                        </div>

                        <div class="bzZMY">
                          <div class="_1f91gq25 _1f91gq29 _1f91gq2v">
                            <div
                              class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                              style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                            >
                              <span
                                title="Days"
                                class="_1sco1wt2"
                                style={{ "--_1sco1wt0": 1 }}
                              >
                                Days
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {leaveAllocation.length > 0 &&
                      leaveAllocation.map((allocated) => {
                        if (
                          allocated.leaveTypeId._id === leaveTypeId &&
                          allocated.userId === userId
                        ) {
                          return (
                            <ul
                              class="purg7v1 purg7v78 purg7v90 purg7v9u purg7vx purg7vc7 purg7vcf purg7vcz purg7vdc _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vf purg7v3x purg7vuf purg7vug purg7vc9 purg7vcf purg7vcz _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7v3c purg7vc9 purg7vcz _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                                    role="button"
                                    tabindex="0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7vc9 purg7vcf purg7vd6 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <span
                                          class="_6o3wap1 _6o3wapo _6o3wapu _6o3wap7 _6o3wap9"
                                          style={{
                                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                                          }}
                                        >
                                          {allocated.allocatedLeaves}
                                        </span>
                                      </div>
                                      <span
                                        class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Accrued
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="purg7v1 purg7vf purg7v3x purg7vuf purg7vug purg7vc9 purg7vcf purg7vcz _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7v3c purg7vc9 purg7vcz _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                                    role="button"
                                    tabindex="0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7vc9 purg7vcf purg7vd6 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <span
                                          class="_6o3wap1 _6o3wapo _6o3wapu _6o3wap7 _6o3wap9"
                                          style={{
                                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                                          }}
                                        >
                                          {allocated.allocatedLeaves -
                                            allocated.usedLeaves}
                                        </span>
                                      </div>
                                      <span
                                        class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Available
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="purg7v1 purg7vf purg7v3x purg7vuf purg7vug purg7vc9 purg7vcf purg7vcz _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7v3c purg7vc9 purg7vcz _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                                    role="button"
                                    tabindex="0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7vc9 purg7vcf purg7vd6 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <span
                                          class="_6o3wap1 _6o3wapo _6o3wapu _6o3wap7 _6o3wap9"
                                          style={{
                                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                                          }}
                                        >
                                          {allocated.usedLeaves}
                                        </span>
                                      </div>
                                      <span
                                        class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                        style={{
                                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                                        }}
                                      >
                                        Taken
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ul>
                          );
                        }
                      })}
                  </div>
                  <div
                    class="purg7v1 purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <button type="button" class="_15ojh3a1">
                      <svg
                        aria-hidden="true"
                        class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                        style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                      >
                        <use xlink:href="/assets/medium-symbols.o9x3thcc74.svg#chevron-right"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="purg7v1 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt35)" }}
                        >
                          <BsCalendar2Check size={25} color="#1F74EC" />
                        </svg>
                      </div>
                      <div
                        class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <span
                          class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                        >
                          Time off requests pending review
                        </span>
                      </div>
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                        style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                      >
                        <span
                          title="You can approve or reject these time off requests. You will also be able to make any necessary adjustments."
                          class="_1sco1wt1"
                          style={{ "--_1sco1wt0": 5 }}
                        >
                          {param
                            ? "You can approve or reject these time off requests. You will also be able to make any necessary adjustments."
                            : "These time off requests have not been approved yet. Your supervisor will review them soon."}
                        </span>
                      </span>
                    </div>
                  </div>
                  <ul class="_1akjzoy0">
                    {pendingReview.length > 0 ? (
                      pendingReview.map((leave) => {
                        return (
                          <TimeOffTab
                            openModal={openModal}
                            leave={leave}
                            setLeaveId={setLeaveId}
                          />
                        );
                      })
                    ) : (
                      <span
                        className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        No pending leaves
                      </span>
                    )}
                  </ul>
                </div>
              </div>

              <div
                class="purg7v1 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt35)" }}
                        >
                          <BsCalendar2Date size={25} color="#1F74EC" />
                        </svg>
                      </div>
                      <div
                        class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <span
                          class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                        >
                          Current & upcoming time off
                        </span>
                      </div>
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                        style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                      >
                        <span
                          title="These are the days Elisa will be out of the office."
                          class="_1sco1wt1"
                          style={{ "--_1sco1wt0": 5 }}
                        >
                          These are the days {param ? users.firstName : "you"}{" "}
                          will be out of the office.
                        </span>
                      </span>
                    </div>
                  </div>
                  <ul class="_1akjzoy0">
                    {currentAndUpcoming.length > 0 ? (
                      currentAndUpcoming.map((leave) => {
                        return (
                          <TimeOffTab
                            leave={leave}
                            openModal={openModal}
                            setLeaveId={setLeaveId}
                          />
                        );
                      })
                    ) : (
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        No upcoming leaves
                      </span>
                    )}
                  </ul>
                </div>
              </div>

              <div
                class="purg7v1 purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7v9r purg7vc9 purg7vd8 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc7 purg7vcc purg7vd0 purg7vdb _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v2o purg7vc9 purg7vd8 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt35)" }}
                        >
                          <IoCalendarClearOutline size={25} color="#1F74EC" />
                        </svg>
                      </div>
                      <div
                        class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <span
                          class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                        >
                          Past time off
                        </span>
                      </div>
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                        style={{ "--_6o3wap0": "var(--seicjt2u)" }}
                      >
                        <span
                          title="This is Alejandro time off history. You can modify or delete these requests."
                          class="_1sco1wt1"
                          style={{ "--_1sco1wt0": 5 }}
                        >
                          {param
                            ? `This is ${users.firstName} time off history. You can
                          modify or delete these requests.`
                            : "This is your time off history. Past absences can’t be edited."}
                        </span>
                      </span>
                    </div>
                  </div>
                  <ul class="_1akjzoy0">
                    {pastTimeOff.length > 0 ? (
                      pastTimeOff.map((leave) => {
                        return <TimeOffTab leave={leave} />;
                      })
                    ) : (
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        No past absences this year
                      </span>
                    )}
                  </ul>
                </div>

                {/* <button type="button" class="_15ojh3a1">
                  <div
                    class="purg7v1 purg7v83 purg7vc7 purg7vcf purg7vd8 purg7v64 _15se5fi0"
                    style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                  >
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                      style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                    >
                      Show past years' absences
                    </span>
                    <svg
                      aria-hidden="true"
                      class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                      style={{ "--_1qphaha0": "var(--_1wf7mbl3s)" }}
                    >
                      <use xlink:href="/assets/small-symbols.npd95zexj0.svg#chevron-down"></use>
                    </svg>
                  </div>
                </button> */}
              </div>
            </div>
            <div
              class="purg7v1 purg7vc9 _15se5fi0 _1a1q07o1"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v6f purg7vc9 purg7vdc _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc7 purg7vcf purg7vcz _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    {/* <div
                      class="purg7v1 purg7v78 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <span
                        class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        2024
                      </span>
                    </div> */}
                    <div
                      class="purg7v1 purg7vug purg7vc9 _15se5fi0"
                      role="button"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <svg
                        aria-hidden="true"
                        class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                        style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                      >
                        <use xlink:href="/assets/small-symbols.npd95zexj0.svg#chevron-right"></use>
                      </svg>
                    </div>
                  </div>
                  <button
                    class="_1nz7aia3 _1nz7aia4"
                    type="button"
                    style={{
                      "--_1nz7aia2": "var(--_1wf7mbl52)",
                      "--_1nz7aia1": "var(--_1wf7mbl51)",
                      "--_1nz7aia0": "none",
                    }}
                    onClick={openModal}
                  >
                    <svg
                      aria-hidden="true"
                      class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                      style={{ "--_1qphaha0": "var(--seicjt3i)" }}
                    >
                      <IoAddSharp size={22} />
                    </svg>
                    <span
                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                      style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                    >
                      Add Time Off
                    </span>
                  </button>
                  {isModalOpen && (
                    <div className="modal z-10">
                      {/* <div className="modal-content"> */}
                      <AddLeave
                        closeModal={closeModal}
                        requestLeave={requestLeave}
                        setRequestLeave={setRequestLeave}
                        handleAddLeave={handleAddLeave}
                        userId={userId}
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                      />
                      {/* </div> */}
                    </div>
                  )}
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "20px",
                      }}
                    >
                      <DateCalendar
                        sx={{
                          width: "500px", // Set custom width
                          height: "600px", // Set custom height
                          "& .MuiPickersCalendarHeader-root": {
                            fontSize: "1.5rem", // Increase font size for the header
                          },
                          "& .MuiDayCalendar-root": {
                            fontSize: "1.2rem", // Increase font size for days
                          },
                        }}
                      />
                    </div>
                  </LocalizationProvider>
                </Box>
              </div>
              {/* <div
                class="purg7v1 purg7v7a purg7v93 purg7v9v purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div class="WToIY medium XOGJ7">
                  <div
                    class="purg7v1 purg7vc7 purg7vd0 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  ></div>
                  <div class="Z2tZY">
                    <span
                      class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                      style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                    >
                      Time off allowance adjustments
                    </span>
                  </div>
                  <div class="lsgRP">
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                      style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                    >
                      Add or subtract hours or days from this person’s time off
                      allowance.
                    </span>
                  </div>
                </div>
                <div
                  class="purg7v1 purg7v84 purg7vc9 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <button
                    class="_1nz7aia3 _1nz7aia5"
                    type="button"
                    style="--_1nz7aia2: var(--_1wf7mbl52); --_1nz7aia1: var(--_1wf7mbl52); --_1nz7aia0: none;"
                  >
                    <span
                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                      style="--_6o3wap0: var(--seicjt3j);"
                    >
                      Add adjustment
                    </span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeOff;
