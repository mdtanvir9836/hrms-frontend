import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import AddEmployeeOne from "./AddEmployeeOne";
import AddEmployeeTwo from "./AddEmployeeTwo";
import AddEmployeeThree from "./AddEmployeeThree";
import AddEmployeeFour from "./AddEmployeeFour";
import { RiUserAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { createUserProfile } from "../../../redux/slice/userProfileSlice";
import {
  createEmploymentInfo,
  fetchAllEmploymentInfos,
  updateEmploymentInfo,
} from "../../../redux/slice/employeeSlice";
import { addUserAsync } from "../../../redux/slice/userSlice";
import { createLeaveAllocation } from "../../../redux/slice/leaveAllocationSlice";

function AddEmployee({ closeModal }) {
  const dispatch = useDispatch()
  const [active, setActive] = useState(1);
  console.log("active", active);
  const [userId, setUserId] = useState("");
  console.log("userId", userId);
  const [next, setNext] = useState(false);
  const [empId, setEmpId] = useState("");
  console.log("empId", empId);
  const allocateSickLeave = {
    userId,
    leaveTypeId: "6776342b3d6285f0c80ffe2c",
    allocatedLeaves: 10,
  };
  const allocatedCasualLeaves = {
    userId,
    leaveTypeId: "6776349d3d6285f0c80ffe2e",
    allocatedLeaves: 13,
  };

  useEffect(() => {
    if (userId) {
      dispatch(createLeaveAllocation(allocateSickLeave));
      dispatch(createLeaveAllocation(allocatedCasualLeaves));
    }
  }, [dispatch, userId]);

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);

    let dispatchAction;
    if (next) {
      switch (active) {
        case 1:
          dispatchAction = dispatch(addUserAsync(values));

          break;
        case 2:
          dispatchAction = dispatch(createUserProfile(values));
          break;
        case 3:
          dispatchAction = dispatch(createEmploymentInfo(values));
          break;
        default:
          dispatchAction = dispatch(
            updateEmploymentInfo({ id: empId, employmentData: values })
          );
          break;
      }

      dispatchAction
        .unwrap()
        .then((result) => {
          if (active === 1) {
            setUserId(result?.user._id);
            setActive(2);
            setNext(false);
          } else if (active === 2) {
            setActive(3);
            setNext(false);
          } else if (active === 3) {
            console.log("Employee Created", result);
            setEmpId(result?._id);
            setActive(4);
            setNext(false);
          } else {
            setNext(false);
            dispatch(fetchAllEmploymentInfos());
            closeModal();
          }
        })
        .catch((err) => {
          console.error("Submission error:", err);
        });
    }
  };

  return (
    <div
      class="purg7v1 purg7vc9 _15se5fi0 _79rwa52"
      style={{ "--purg7v0": "transparent" }}
    >
      <div
        class="purg7v1 purg7vc9 _15se5fi0"
        style={{ "--purg7v0": "transparent", opacity: 1, transform: "none" }}
      >
        <div
          role="dialog"
          id="radix-:r1l:"
          aria-describedby="radix-:r1n:"
          aria-labelledby="radix-:r1m:"
          data-state="open"
          class="_79rwa51"
          tabindex="-1"
        >
          <div
            class="purg7v1 purg7vc9 _15se5fi0 _79rwa53"
            role="button"
            style={{ "--purg7v0": "transparent" }}
            onClick={closeModal}
          >
            <svg
              aria-hidden="true"
              class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
              style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
            >
              <IoMdClose size={20} />
            </svg>
          </div>
          <div
            class="purg7v1 purg7vc9 purg7vub purg7vuu _15se5fi0 _1y2tv656"
            style={{
              "--purg7v0": "transparent",
              width: "1078px",
              height: "628px",
            }}
          >
            <div
              class="purg7v1 purg7v3x purg7vc9 purg7vuu purg7vdc _15se5fi0"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v6h purg7v9m purg7v3y purg7vc7 purg7vdf purg7v64 _15se5fi0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vk purg7v1k purg7vc9 purg7vdb _15se5fi0"
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
                            <RiUserAddLine size={35} color="#1f74ec" />
                          </svg>
                        </div>
                        <div
                          class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <span
                            class="_6o3wap1 _6o3wapo _6o3wapt _6o3wap7 _6o3wap9"
                            style={{ "--_6o3wap0": "var(--seicjt2t)" }}
                          >
                            New employee
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="purg7v1 purg7vx purg7vc9 purg7vd6 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        type="button"
                        class="_15ojh3a1"
                        onClick={() => setActive(1)}
                      >
                        <div
                          class="purg7v1 purg7v81 purg7vbj purg7vam purg7vx purg7vud purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                            backgroundColor: ` ${active >= 1 ? "#f5f5f5" : ""}`,
                            borderRadius: 8,
                          }}
                        >
                          <div
                            class="purg7v1 purg7vc9 purg7vv1 _15se5fi0 _1y2tv656"
                            style={{
                              "--purg7v0": "var(--_1wf7mbl3m)",
                              zIndex: 0,
                              inset: "0px",
                              opacity: 1,
                            }}
                          ></div>
                          <div
                            class="purg7v1 purg7vc7 purg7vcf purg7vv2 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent", zIndex: 1 }}
                          >
                            {active == 1 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3r)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3k)" }}
                                >
                                  1
                                </span>
                              </div>
                            )}
                            {active > 1 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 yj7h241"
                                style={{ "--purg7v0": "var(--_1wf7mbl4i)" }}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3k)" }}
                                >
                                  <FaCheck />
                                </svg>
                              </div>
                            )}
                            <span
                              class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                              style={{
                                "--_6o3wap0": `${active >= 1 ? "var(--_1wf7mbl3r)" : "var(--_1wf7mbl3p)"}`,
                              }}
                            >
                              <span
                                title="General information"
                                class="_1sco1wt2"
                                style={{ "--_1sco1wt0": 1 }}
                              >
                                General information
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        type="button"
                        class="_15ojh3a1"
                        disabled=""
                        onClick={() => setActive(2)}
                      >
                        <div
                          class="purg7v1 purg7v81 purg7vbj purg7vam purg7vx purg7vud purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                            backgroundColor: ` ${active >= 2 ? "#f5f5f5" : ""}`,
                            borderRadius: 8,
                          }}
                        >
                          <div
                            class="purg7v1 purg7vc7 purg7vcf purg7vv2 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent", zIndex: 1 }}
                          >
                            {active == 2 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3r)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3k)" }}
                                >
                                  2
                                </span>
                              </div>
                            )}
                            {active > 2 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 yj7h241"
                                style={{ "--purg7v0": "var(--_1wf7mbl4i)" }}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3k)" }}
                                >
                                  <FaCheck />
                                </svg>
                              </div>
                            )}
                            {active < 2 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3p)" }}
                                >
                                  2
                                </span>
                              </div>
                            )}
                            <span
                              class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                              style={{
                                "--_6o3wap0": `${active >= 2 ? "var(--_1wf7mbl3r)" : "var(--_1wf7mbl3p)"}`,
                              }}
                            >
                              <span
                                title="Personal details"
                                class="_1sco1wt2"
                                style={{ "--_1sco1wt0": 1 }}
                              >
                                Personal details
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        type="button"
                        class="_15ojh3a1"
                        disabled=""
                        onClick={() => setActive(3)}
                      >
                        <div
                          class="purg7v1 purg7v81 purg7vbj purg7vam purg7vx purg7vud purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                            backgroundColor: ` ${active >= 3 ? "#f5f5f5" : ""}`,
                            borderRadius: 8,
                          }}
                        >
                          <div
                            class="purg7v1 purg7vc7 purg7vcf purg7vv2 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent", zIndex: 1 }}
                          >
                            {active == 3 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3r)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3k)" }}
                                >
                                  3
                                </span>
                              </div>
                            )}
                            {active > 3 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 yj7h241"
                                style={{ "--purg7v0": "var(--_1wf7mbl4i)" }}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3k)" }}
                                >
                                  <FaCheck />
                                </svg>
                              </div>
                            )}
                            {active < 3 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3p)" }}
                                >
                                  3
                                </span>
                              </div>
                            )}
                            <span
                              class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                              style={{
                                "--_6o3wap0": `${active >= 3 ? "var(--_1wf7mbl3r)" : "var(--_1wf7mbl3p)"}`,
                              }}
                            >
                              <span
                                title="Agreement information"
                                class="_1sco1wt2"
                                style={{ "--_1sco1wt0": 1 }}
                              >
                                Agreement information
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        type="button"
                        class="_15ojh3a1"
                        disabled=""
                        onClick={() => setActive(4)}
                      >
                        <div
                          class="purg7v1 purg7v81 purg7vbj purg7vam purg7vx purg7vud purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                          style={{
                            "--purg7v0": "transparent",
                            backgroundColor: ` ${active === 4 ? "#f5f5f5" : ""}`,
                            borderRadius: 8,
                          }}
                        >
                          <div
                            class="purg7v1 purg7vc7 purg7vcf purg7vv2 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent", zIndex: 1 }}
                          >
                            {active == 4 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3r)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3k)" }}
                                >
                                  4
                                </span>
                              </div>
                            )}
                            {active > 4 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 yj7h241"
                                style={{ "--purg7v0": "var(--_1wf7mbl4i)" }}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--_1wf7mbl3k)" }}
                                >
                                  <FaCheck />
                                </svg>
                              </div>
                            )}
                            {active < 4 && (
                              <div
                                class="purg7v1 purg7vc9 purg7v63 _15se5fi0 _1y2tv650 yj7h240 sizes.undefined"
                                style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9"
                                  style={{
                                    "--_6o3wap0": `${active >= 4 ? "var(--_1wf7mbl3r)" : "var(--_1wf7mbl3p)"}`,
                                  }}
                                >
                                  4
                                </span>
                              </div>
                            )}
                            <span
                              class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                              style={{ "--_6o3wap0": "var(--_1wf7mbl3p)" }}
                            >
                              <span
                                title="Start date"
                                class="_1sco1wt2"
                                style={{ "--_1sco1wt0": 1 }}
                              >
                                Start date
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {active === 1 ? (
                  <AddEmployeeOne handleSubmit={handleSubmit} />
                ) : active === 2 ? (
                  <AddEmployeeTwo handleSubmit={handleSubmit} userId={userId} />
                ) : active === 3 ? (
                  <AddEmployeeThree
                    handleSubmit={handleSubmit}
                    userId={userId}
                    next={next}
                    setNext={setNext}
                  />
                ) : (
                  active === 4 && (
                    <AddEmployeeFour
                      handleSubmit={handleSubmit}
                      userId={userId}
                    />
                  )
                )}
              </div>
              <div
                class="purg7v1 purg7v7a purg7v3e purg7vc7 purg7vcf purg7vd0 _15se5fi1y _15se5fi3s _15se5fi2c"
                style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
              >
                <div
                  class="purg7v1 purg7vc9 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                ></div>
                <div
                  class="purg7v1 purg7vc7 purg7vcf purg7vda _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <button
                    class="_1nz7aia3 _1nz7aia5"
                    type="button"
                    disabled={active === 1}
                    style={{
                      "--_1nz7aia2": "var(--_1wf7mbl4v)",
                      "--_1nz7aia1": "var(--_1wf7mbl4v)",
                      "--_1nz7aia0": "none",
                    }}
                    onClick={() => {
                      active === 4
                        ? setActive(3)
                        : active === 3
                          ? setActive(2)
                          : active === 2 && setActive(1);
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                      style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                    >
                      <FaArrowLeft size={25} color="#ccc" />
                    </svg>
                  </button>
                  <button
                    class="_1nz7aia3 _1nz7aia4"
                    type="button"
                    style={{
                      "--_1nz7aia2": "var(--_1wf7mbl4v)",
                      "--_1nz7aia1": "var(--_1wf7mbl4v)",
                      "--_1nz7aia0": "none",
                    }}
                    onClick={() => setNext(true)}
                  >
                    <span
                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 p-4"
                      style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                    >
                      {active === 4 ? "Add Employee" : "Next"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
