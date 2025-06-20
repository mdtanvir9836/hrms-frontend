import { Button } from "@mui/material";
import React, { useEffect } from "react";
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
import { useNavigate, useNavigation } from "react-router-dom";
import { fetchUserProfiles } from "../../redux/slice/userProfileSlice";

function RequestPage() {
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
    <div className="_110my71a pt-5">
      <div className="_18xzzfe0 regular" data-size="regular">
        <main className="content level-1">
          <div
            className="purg7v1 purg7vx purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _4onk9z0"
            style={{ "--purg7v0": "var(--_1wf7mbl3k)", borderRadius: 10 }}
          >
            <div
              className="purg7v1 purg7v4e purg7vc9 _15se5fi6f _15se5fi7m _15se5fi5s _4onk9z2"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                className="purg7v1 purg7v6d purg7vc9 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  className="purg7v1 purg7v3b purg7vc7 purg7vcf purg7vd0 purg7vdb _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    className="purg7v1 purg7vc7 purg7vcf purg7vum _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                      style={{
                        "--purg7v0": "transparent",
                        opacity: 1,
                        transform: "translateX(0px) translateZ(0px)",
                      }}
                    >
                      <div
                        className="purg7v1 purg7v73 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      ></div>
                      <a className="wsh9h10" title="Me" href="/profile">
                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                          style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                        >
                          <span
                            title="Me"
                            className="_1sco1wt2"
                            style={{ "--_1sco1wt0": 1 }}
                          >
                            Inbox
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="purg7v1 purg7v3x purg7vc9 purg7vcf purg7v64 _15se5fi0 _4onk9z1"
              data-scroll-container="true"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v8r purg7v9x purg7vx purg7vc9 purg7v64 _15se5fi0 bfo8zk3 bfo8zk0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vc9 purg7vdc purg7v64 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc9 purg7vv2 purg7v64 _15se5fi0 p-8"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7v9u purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7vc9 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div
                          class="purg7v1 purg7van purg7vc7 purg7vd9 _15se5fi7m _15se5fi5s _15se5fi6f gap-4"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7vc9 _15se5fi0 _1ynfa8f0 _1ynfa8f1"
                            role="button"
                            style={{ "--purg7v0": "transparent" }}
                            // onClick={navigate("/teamgrid/inbox/requests")}
                          >
                            <div
                              class="purg7v1 purg7vc7 purg7vd6 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl4k)" }}
                              >
                                Requests
                              </span>
                            </div>
                          </div>
                          <div
                            class="purg7v1 purg7vc9 _15se5fi0 _1ynfa8f0 "
                            role="button"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vc7 purg7vd6 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                              >
                                Notifications
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          class="purg7v1 purg7vc9 purg7vuv _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7v9v purg7vc7 purg7vda _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <ul
                          class="purg7v1 purg7vc9 purg7vum _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                          style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                        >
                          <div
                            class="purg7v1 purg7v6e purg7vm purg7vc9 purg7vda _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <span
                              class="_6o3wap1 _6o3wapn _6o3wapt _6o3wap7 _6o3wap9"
                              style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                            >
                              Active requests
                            </span>
                            <span
                              class="_6o3wap1 _6o3wapo _6o3wapu _6o3wap7 _6o3wap9"
                              style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                            >
                              {
                                leaves.filter(
                                  (leave) => leave.status === "pending"
                                ).length
                              }
                            </span>
                          </div>
                        </ul>
                      </div>
                      {leaves.length > 0 && (
                        <div
                          class="purg7v1 purg7vc9 _15se5fi0 mt-5 p-2"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7v9t purg7vc9 purg7vcg _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <button class="_1dd5s8j0 tether-target tether-enabled tether-pinned tether-pinned-left tether-element-attached-top tether-target-attached-bottom tether-pinned-right">
                              <div
                                class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0 _1dd5s8j1"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap6 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                                >
                                  All requests
                                </span>
                              </div>
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                              >
                                <FaAngleDown />
                              </svg>
                            </button>
                          </div>

                          {leaves.length > 0 &&
                            leaves.map((leave) => {
                              if (leave?.status === "pending") {
                                return (
                                  <div
                                    class="purg7v1 purg7vx purg7vc9 purg7vcf _15se5fi0 "
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div
                                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                      style={{ "--purg7v0": "transparent" }}
                                    >
                                      <ul
                                        class="purg7v1 purg7vc9 purg7vum _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                                        style={{
                                          "--purg7v0": "var(--_1wf7mbl3k)",
                                        }}
                                      >
                                        <div
                                          class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                          aria-label="Inbox requests"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <div
                                            class="purg7v1 purg7vc9 _15se5fi0 _1ftas4e0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            <div
                                              class="purg7v1 purg7vug purg7vc9 _15se5fi0"
                                              role="button"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <li
                                                class="purg7v1 purg7v79 purg7v83 purg7vc7 purg7vcf purg7vd0 get7bh0 "
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <div
                                                  class="purg7v1 purg7vx purg7vc7 purg7vcg purg7vd0 purg7vda _15se5fi0"
                                                  style={{
                                                    "--purg7v0": "transparent",
                                                  }}
                                                >
                                                  <div
                                                    class="purg7v1 purg7vx purg7vc7 purg7vcg purg7vd0 _15se5fi0"
                                                    style={{
                                                      "--purg7v0":
                                                        "transparent",
                                                    }}
                                                  >
                                                    <div
                                                      class="purg7v1 purg7v12 purg7vc7 purg7vcg purg7vdb _15se5fi0"
                                                      style={{
                                                        "--purg7v0":
                                                          "transparent",
                                                      }}
                                                    >
                                                      <div
                                                        class="purg7v1 purg7vc7 purg7vcf purg7vcq purg7vd0 _15se5fi0"
                                                        style={{
                                                          "--purg7v0":
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          class="purg7v1 purg7vc9 _15se5fi0"
                                                          style={{
                                                            "--purg7v0":
                                                              "transparent",
                                                          }}
                                                        >
                                                          <div
                                                            class="purg7v1 purg7vb purg7v3b purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                                                            style={{
                                                              "--purg7v0":
                                                                "transparent",
                                                            }}
                                                          >
                                                            {allProfiles.length >
                                                              0 &&
                                                              allProfiles.map(
                                                                (profile) => {
                                                                  if (
                                                                    profile?.userId ===
                                                                    leave
                                                                      ?.userId
                                                                      ?._id
                                                                  ) {
                                                                    return profile.photo ? (
                                                                      <img
                                                                        src={
                                                                          profile.photo
                                                                        }
                                                                        class="cp7gaj0"
                                                                      />
                                                                    ) : (
                                                                      <div
                                                                        className="_1319drc8 _1319drc4"
                                                                        aria-label="Mahadeb Dutta"
                                                                        role="img"
                                                                      >
                                                                        <CiCalendar
                                                                          size={
                                                                            30
                                                                          }
                                                                        />
                                                                      </div>
                                                                    );
                                                                  }
                                                                }
                                                              )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        class="purg7v1 purg7v12 purg7vc9 purg7vd8 _15se5fi0"
                                                        style={{
                                                          "--purg7v0":
                                                            "transparent",
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
                                                              {allUser.length >
                                                                0 &&
                                                                allUser.map(
                                                                  (user) => {
                                                                    if (
                                                                      user?._id ===
                                                                      leave
                                                                        ?.userId
                                                                        ?._id
                                                                    ) {
                                                                      return `${user.firstName} ${user.lastName}`;
                                                                    }
                                                                  }
                                                                )}
                                                              's
                                                            </b>{" "}
                                                            time off request is
                                                            pending
                                                          </div>
                                                        </span>
                                                        <div
                                                          class="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                                                          style={{
                                                            "--purg7v0":
                                                              "transparent",
                                                          }}
                                                        >
                                                          <span
                                                            class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                                            style={{
                                                              "--_6o3wap0":
                                                                "var(--_1wf7mbl3r)",
                                                            }}
                                                          >
                                                            <div
                                                              class="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                                              style={{
                                                                "--purg7v0":
                                                                  "transparent",
                                                              }}
                                                            >
                                                              <svg
                                                                aria-hidden="true"
                                                                class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                                                style={{
                                                                  "--_1qphaha0":
                                                                    "var(--_1wf7mbl3q)",
                                                                }}
                                                              >
                                                                <CiCalendar
                                                                  size={22}
                                                                />
                                                              </svg>
                                                              Due date:{" "}
                                                              {new Date(
                                                                leave.startDate
                                                              ).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                  month:
                                                                    "short",
                                                                  day: "2-digit",
                                                                  year: "numeric",
                                                                }
                                                              )}
                                                            </div>
                                                          </span>
                                                        </div>
                                                        <span
                                                          class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                                          style={{
                                                            "--_6o3wap0":
                                                              "var(--_1wf7mbl3r)",
                                                          }}
                                                        >
                                                          {new Date(
                                                            leave.updatedAt
                                                          ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                              month: "short",
                                                              day: "2-digit",
                                                              year: "numeric",
                                                            }
                                                          )}{" "}
                                                          · Time off
                                                        </span>
                                                        <span
                                                          class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                                                          style={{
                                                            "--_6o3wap0":
                                                              "var(--_1wf7mbl3r)",
                                                          }}
                                                        >
                                                          <span
                                                            title="Holidays on January 17, 2025"
                                                            class="_1sco1wt2"
                                                            style={{
                                                              "--_1sco1wt0": 1,
                                                            }}
                                                          >
                                                            {leaveTypes.length >
                                                              0 &&
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
                                                            ).toLocaleDateString(
                                                              "en-US",
                                                              {
                                                                month: "long",
                                                                day: "2-digit",
                                                                year: "numeric",
                                                              }
                                                            )}
                                                            {leave.startDate !==
                                                              leave.endDate &&
                                                              " - "}
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
                                                    <div
                                                      class="purg7v1 purg7vc7 purg7vcg purg7vda _15se5fi0"
                                                      style={{
                                                        "--purg7v0":
                                                          "transparent",
                                                      }}
                                                    >
                                                      <div
                                                        class="purg7v1 purg7v8r purg7vah purg7vc9 _15se5fi0"
                                                        style={{
                                                          "--purg7v0":
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          class="purg7v1 purg7vc9 _15se5fi0"
                                                          role="button"
                                                          style={{
                                                            "--purg7v0":
                                                              "transparent",
                                                          }}
                                                        >
                                                          <div
                                                            class="purg7v1 purg7vc7 purg7vd6 _15se5fi0"
                                                            style={{
                                                              "--purg7v0":
                                                                "transparent",
                                                            }}
                                                          >
                                                            {/* <button
                                                    class="_1nz7aia7 reject"
                                                    type="button"
                                                    style={{
                                                      "--_1nz7aia2":
                                                        "var(--_1wf7mbl52)",
                                                      "--_1nz7aia1":
                                                        "var(--_1wf7mbl52)",
                                                      "--_1nz7aia0": "none",
                                                      backgroundColor:
                                                        "var(--seicjt3v);",
                                                        borderBlockColor: "var(--seicjt3v)",
                                                    }}
                                                  > */}
                                                            {/* <span
                                                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                                      style={{
                                                        "--_6o3wap0":
                                                          "var(--seicjt3v)",
                                                      }}
                                                    > */}
                                                            <Button
                                                              variant="outlined"
                                                              color="error"
                                                              onClick={() =>
                                                                handleReject(
                                                                  leave._id
                                                                )
                                                              }
                                                              sx={{
                                                                borderRadius:
                                                                  "50px", // Makes it oval-shaped
                                                                padding:
                                                                  "3px 15px", // Adjust padding for desired oval effect
                                                                textTransform:
                                                                  "none", // Removes uppercase transformation
                                                              }}
                                                            >
                                                              Reject
                                                            </Button>

                                                            {/* </span> */}
                                                            {/* </button> */}
                                                            {/* <button
                                                    class="_1nz7aia3 _1nz7aia6"
                                                    type="button"
                                                    style={{
                                                      "--_1nz7aia2":
                                                        "var(--_1wf7mbl52)",
                                                      "--_1nz7aia1":
                                                        "var(--_1wf7mbl52)",
                                                      "--_1nz7aia0": "none",
                                                    }}
                                                  >
                                                    <span
                                                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                                      style={{
                                                        "--_6o3wap0":
                                                          "var(--seicjt3p)",
                                                      }}
                                                    >
                                                      Approve
                                                    </span>
                                                  </button> */}
                                                            <Button
                                                              variant="outlined"
                                                              color="success"
                                                              onClick={() =>
                                                                handleApprove(
                                                                  leave._id
                                                                )
                                                              }
                                                              sx={{
                                                                borderRadius:
                                                                  "50px", // Makes it oval-shaped
                                                                padding:
                                                                  "3px 15px", // Adjust padding for desired oval effect
                                                                textTransform:
                                                                  "none", // Removes uppercase transformation
                                                              }}
                                                            >
                                                              Approve
                                                            </Button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <svg
                                                    aria-hidden="true"
                                                    class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                                    style={{
                                                      "--_1qphaha0":
                                                        "var(--_1wf7mbl3s)",
                                                    }}
                                                  >
                                                    <use xlink:href="/assets/medium-symbols.o9x3thcc74.svg#chevron-down"></use>
                                                  </svg>
                                                </div>
                                              </li>
                                            </div>
                                          </div>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RequestPage;
