import React from "react";
import Document from "../employee/editEmp/document/Document";
import { HiOutlineUpload } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

function MyDocument() {
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
                            My Document
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    class="purg7v1 purg7vc7 purg7vcy purg7vd8 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        class="_1nz7aia3 _1nz7aia4"
                        type="button"
                        style={{
                          "--_1nz7aia2": "var(--_1wf7mbl4v)",
                          "--_1nz7aia1": "var(--_1wf7mbl4v)",
                          "--_1nz7aia0": "none",
                          padding: 10,
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt3i)" }}
                        >
                          <HiOutlineUpload size={22} />
                        </svg>
                        <span
                          class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                          style={{ "--_6o3wap0": "var(--seicjt3d)" }}
                        >
                          Upload files
                        </span>
                      </button>
                    </div>
                    <div
                      class="purg7v1 purg7vc9 _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <button
                        class="_1nz7aia3 _1nz7aia5"
                        type="button"
                        style={{
                          "--_1nz7aia2": "var(--_1wf7mbl4v)",
                          "--_1nz7aia1": "var(--_1wf7mbl4v)",
                          "--_1nz7aia0": "none",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                          style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                        >
                          <IoSettingsOutline size={23} color="#ccc" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Document />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyDocument;
