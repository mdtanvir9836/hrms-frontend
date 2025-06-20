import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  approveLeaveRequest,
  rejectLeaveRequest,
  viewLeaves,
} from "../../redux/slice/leaveSlice";
import { fetchUserById, fetchUsers } from "../../redux/slice/userSlice";
import { fetchLeaveTypes } from "../../redux/slice/leaveTypeSlice";
import { fetchUserProfiles } from "../../redux/slice/userProfileSlice";
import moment from "moment";

function Inbox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { leaves } = useSelector((state) => state.leaves);
  console.log("leaves", leaves);
  const { allUser } = useSelector((state) => state.user);
  console.log("users", allUser);
  const { leaveTypes } = useSelector((state) => state.leaveTypes);
  console.log("leaveTypes", leaveTypes);
  const { allProfiles } = useSelector((state) => state.profile);
  console.log("allProfiles", allProfiles);

  useEffect(() => {
    dispatch(viewLeaves());
    dispatch(fetchUsers());
    dispatch(fetchLeaveTypes());
    dispatch(fetchUserProfiles());
  }, [dispatch]);

  const handleApprove = async (leaveId) => {
    // const managerComments = prompt("Enter comments for approval:");
    // if (!managerComments) return;

    try {
      await dispatch(
        approveLeaveRequest({ leaveId, managerComments: "approve" })
      ).unwrap();
      await dispatch(viewLeaves());
      // alert("Leave request approved successfully.");
    } catch (error) {
      console.error("Error approving leave request:", error);
      window.location.reload();
    }
  };

  // Function to handle leave rejection with manager comments
  const handleReject = async (leaveId) => {
    // const managerComments = prompt("Enter comments for rejection:");
    // if (!managerComments) return;

    try {
      await dispatch(
        rejectLeaveRequest({ leaveId, managerComments: "reject" })
      ).unwrap();
      await dispatch(viewLeaves());
      // alert("Leave request rejected successfully.");
    } catch (error) {
      console.error("Error rejecting leave request:", error);
      window.location.reload();
    }
  };

  return (
    <div class="grid-item">
      <div
        className="purg7v1 purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _1y2tv656"
        role="region"
        style={{
          "--purg7v0": "var(--_1wf7mbl3k)",
          width: "100%",
        }}
      >
        <div
          className="purg7v1 purg7v78 purg7v5d purg7vc7 purg7vcf purg7vd0 _15se5fi7m _15se5fi5s _15se5fi6f"
          style={{ background: "transparent" }}
        >
          <div
            className="purg7v1 purg7v82 purg7v3d purg7vc7 purg7vcf purg7vd0 purg7v64 _15se5fi0"
            style={{ background: "transparent" }}
          >
            <span
              className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9 _6o3wapx"
              style={{
                "--_6o3wap0": "var(--_1wf7mbl3s)",
              }}
            >
              Inbox
            </span>
            <Link to={"/teamgrid/inbox/requests"} className="_90embe2">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div
          className="purg7v1 purg7v3x purg7vc9 purg7vut _15se5fi0"
          style={{ background: "transparent" }}
        >
          <div
            className="purg7v1 purg7v3x purg7vc9 purg7vcf purg7vcz _15se5fi0"
            style={{ background: "transparent" }}
          >
            {}
            <div
              class="purg7v1 purg7v3x purg7vc9 purg7vut _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vx purg7vc9 _15se5fi5s _15se5fi7m _15se5fi6f"
                  aria-label="Inbox requests"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc9 _15se5fi0 _1ftas4e0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    {leaves.length > 0 &&
                    leaves.some((leave) => leave?.status === "pending") ? (
                      leaves.map((leave) => {
                        if (leave?.status === "pending") {
                          return (
                            <li
                              class="purg7v1 purg7v78 purg7v82 purg7vc7 purg7vcf purg7vd0 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                              //   onClick={navigate("/teamgrid/inbox/requests")}
                            >
                              <div
                                class="purg7v1 purg7vx purg7vc7 purg7vcg purg7vd0 purg7vda _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7vx purg7vc9 purg7vcg purg7vd0 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  <Link to={"/teamgrid/inbox/requests"}>
                                    <div
                                      class="purg7v1 purg7v12 purg7vc7 purg7vcf purg7vda _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vc7 purg7vcf purg7vcq purg7vd0 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <div
                                          class="purg7v1 purg7vc9 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <div
                                            class="purg7v1 purg7vb purg7v3b purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            {allProfiles.length > 0 &&
                                              allProfiles.map((profile) => {
                                                if (
                                                  profile?.userId ===
                                                  leave?.userId?._id
                                                ) {
                                                  return profile.photo ? (
                                                    <img
                                                      src={profile.photo}
                                                      class="cp7gaj0"
                                                    />
                                                  ) : (
                                                    <div
                                                      className="_1319drc8 _1319drc4"
                                                      aria-label="Mahadeb Dutta"
                                                      role="img"
                                                    >
                                                      <CiCalendar size={30} />
                                                    </div>
                                                  );
                                                }
                                              })}
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="purg7v1 purg7vc9 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <div
                                          class="purg7v1 purg7vbj purg7vc9 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <div
                                            class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            <span
                                              class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                              style={{
                                                "--_6o3wap0":
                                                  "var(--_1wf7mbl3r)",
                                              }}
                                            >
                                              Due date:{" "}
                                              {new Date(
                                                leave.startDate
                                              ).toLocaleDateString("en-GB")}
                                            </span>
                                            <div
                                              class="purg7v1 purg7vc9 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <div class="_1f91gq26 _1f91gq25 _1f91gq2c _1f91gq2v">
                                                <div
                                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3s)",
                                                  }}
                                                >
                                                  <span
                                                    title="Due in 3 days"
                                                    class="_1sco1wt2"
                                                    style={{ "--_1sco1wt0": 1 }}
                                                  >
                                                    Due in{" "}
                                                    {moment(
                                                      leave.startDate
                                                    ).diff(
                                                      moment(),
                                                      "days"
                                                    )}{" "}
                                                    Day
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span
                                            class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                            style={{
                                              "--_6o3wap0": "var(--_1wf7mbl3s)",
                                            }}
                                          >
                                            <span
                                              class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9 _6o3wapz"
                                              style={{
                                                "--_6o3wap0":
                                                  "var(--_1wf7mbl3s)",
                                              }}
                                            >
                                              <div class="_1ftas4e1">
                                                <b>
                                                  {allUser.length > 0 &&
                                                    allUser.map((user) => {
                                                      if (
                                                        user?._id ===
                                                        leave?.userId?._id
                                                      ) {
                                                        return `${user.firstName} ${user.lastName}`;
                                                      }
                                                    })}
                                                </b>{" "}
                                                time off request is pending
                                              </div>
                                            </span>
                                          </span>
                                          <div
                                            class="purg7v1 purg7v7z purg7vc9 _15se5fi0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            <span
                                              class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                                              style={{
                                                "--_6o3wap0":
                                                  "var(--_1wf7mbl3r)",
                                              }}
                                            >
                                              <span
                                                title="Holidays on January 10, 2025"
                                                class="_1sco1wt2"
                                                style={{ "--_1sco1wt0": 1 }}
                                              >
                                                {leaveTypes.length > 0 &&
                                                  leaveTypes.map(
                                                    (leaveType) => {
                                                      if (
                                                        leaveType._id ===
                                                        leave.leaveTypeId
                                                      ) {
                                                        return leaveType.name;
                                                      }
                                                    }
                                                  )}{" "}
                                                on{" "}
                                                {new Date(
                                                  leave.startDate
                                                ).toLocaleDateString("en-US", {
                                                  month: "long",
                                                  day: "2-digit",
                                                  year: "numeric",
                                                })}
                                                {leave.startDate !==
                                                  leave.endDate && " - "}
                                                {leave.startDate !==
                                                  leave.endDate &&
                                                  new Date(
                                                    leave.endDate
                                                  ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                      month: "long",
                                                      day: "2-digit",
                                                      year: "numeric",
                                                    }
                                                  )}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <div
                                    class="purg7v1 purg7vc7 purg7vcg purg7vda _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7v8w purg7vas purg7vc9 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <div
                                        class="purg7v1 purg7vc9 _15se5fi0"
                                        role="button"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vd6 _15se5fi0"
                                          style={{
                                            "--purg7v0": "transparent",
                                          }}
                                        >
                                          <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() =>
                                              handleReject(leave._id)
                                            }
                                            sx={{
                                              borderRadius: "50px", // Makes it oval-shaped
                                              padding: "3px 15px", // Adjust padding for desired oval effect
                                              textTransform: "none", // Removes uppercase transformation
                                            }}
                                          >
                                            Reject
                                          </Button>
                                          <Button
                                            variant="outlined"
                                            color="success"
                                            onClick={() =>
                                              handleApprove(leave._id)
                                            }
                                            sx={{
                                              borderRadius: "50px", // Makes it oval-shaped
                                              padding: "3px 15px", // Adjust padding for desired oval effect
                                              textTransform: "none", // Removes uppercase transformation
                                            }}
                                          >
                                            Approve
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        }
                      })
                    ) : (
                      <div
                        className="purg7v1 purg7v92 purg7v9x purg7vuf purg7vc9 purg7vcf _15se5fi0"
                        style={{
                          "--purg7v0": "transparent",

                          transform: "translateY(70px)",
                        }}
                      >
                        <div
                          className="purg7v1 purg7v9r purg7vc9 _15se5fi0"
                          style={{
                            background: "transparent",
                          }}
                        >
                          <MdOutlineMoveToInbox size={30} />
                        </div>

                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                          }}
                        >
                          Nice job!
                        </span>

                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                          }}
                        >
                          You've reached Inbox zero.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="react-resizable-handle react-resizable-handle-se"></span>
    </div>
  );
}

export default Inbox;
