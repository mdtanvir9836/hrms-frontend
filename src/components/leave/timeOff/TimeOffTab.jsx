import React from "react";
import { FaArrowRight } from "react-icons/fa";

function TimeOffTab({ openModal, leave, setLeaveId }) {
  return (
    <li class="_1akjzoy3" onClick={() => openModal()}>
      <div class="FeTbt" onClick={() => setLeaveId(leave._id)}>
        <div class="ymp25l0 isClickable" role="button">
          <div class="ymp25l2">
            <div class="ymp25l1">
              <div class="JkmfO">
                <div
                  class="purg7v1 purg7vbk purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    class="purg7v1 purg7vc purg7v3c purg7vuf purg7vc9 purg7v63 _15se5fio _15se5fi1 _15se5fi1v _1y2tv658"
                    style={{
                      "--purg7v0": "var(--_1wf7mbl3l)",
                    }}
                  >
                    <div
                      class="purg7v1 purg7v7y purg7vc9 purg7vcz _15se5fi0 _1y2tv65k _1y2tv65v"
                      style={{
                        "--purg7v0": "var(--_1wf7mbl49)",
                      }}
                    >
                      <span
                        class="_6o3wap1 _6o3wapj _6o3waps _6o3wap7 _6o3wap9 _6o3wapw"
                        style={{
                          "--_6o3wap0": "var(--_1wf7mbl3k)",
                        }}
                      >
                        {new Date(leave.startDate).toLocaleString("default", {
                          month: "short",
                        })}
                      </span>
                    </div>
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapt _6o3wap7 _6o3wap9"
                      style={{
                        "--_6o3wap0": "var(--_1wf7mbl3s)",
                      }}
                    >
                      {new Date(leave.startDate).getDate()}
                    </span>
                  </div>
                  {leave.startDate !== leave.endDate && (
                    <>
                      {" "}
                      <svg
                        aria-hidden="true"
                        class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                        style={{
                          "--_1qphaha0": "var(--_1wf7mbl3p)",
                        }}
                      >
                        <FaArrowRight size={20} />
                      </svg>
                      <div
                        class="purg7v1 purg7vc purg7v3c purg7vuf purg7vc9 purg7v63 _15se5fio _15se5fi1 _15se5fi1v _1y2tv658"
                        style={{
                          "--purg7v0": "var(--_1wf7mbl3l)",
                        }}
                      >
                        <div
                          class="purg7v1 purg7v7y purg7vc9 purg7vcz _15se5fi0 _1y2tv65k _1y2tv65v"
                          style={{
                            "--purg7v0": "var(--_1wf7mbl49)",
                          }}
                        >
                          <span
                            class="_6o3wap1 _6o3wapj _6o3waps _6o3wap7 _6o3wap9 _6o3wapw"
                            style={{
                              "--_6o3wap0": "var(--_1wf7mbl3k)",
                            }}
                          >
                            {new Date(leave.endDate).toLocaleString("default", {
                              month: "short",
                            })}
                          </span>
                        </div>
                        <span
                          class="_6o3wap1 _6o3wapm _6o3wapt _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3s)",
                          }}
                        >
                          {new Date(leave.endDate).getDate()}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div class="dq48J">
                  <div class="Ce64u">
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap11"
                      style={{
                        "--_6o3wap0": "var(--_1wf7mbl3s)",
                      }}
                    >
                      <span
                        title="Holidays"
                        class="_1sco1wt2"
                        style={{ "--_1sco1wt0": 1 }}
                      >
                        Holidays
                      </span>
                    </span>
                  </div>
                  <div class="_9XuFn">
                    <span
                      class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                      style={{
                        "--_6o3wap0": "var(--_1wf7mbl3r)",
                      }}
                    >
                      {`${
                        Math.ceil(
                          Math.abs(
                            new Date(leave.endDate) - new Date(leave.startDate)
                          ) /
                            (1000 * 60 * 60 * 24)
                        ) + 1
                      } ${
                        Math.ceil(
                          Math.abs(
                            new Date(leave.endDate) - new Date(leave.startDate)
                          ) /
                            (1000 * 60 * 60 * 24)
                        ) +
                          1 ===
                        1
                          ? "day"
                          : "days"
                      }`}{" "}
                      ({new Date(leave.endDate).getFullYear()})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TimeOffTab;
