import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Personal from "./Personal";
import Agreement from "./Agreement";

function Index() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0); // Initial state
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/teamgrid/me/profile":
        setActive(1);
        break;
      case "/teamgrid/me/personal":
        setActive(2);
        break;
      case "/teamgrid/me/agreement":
        setActive(3);
        break;
      default:
        setActive(0); // Default case
    }
  }, [location.pathname]); // Run only when `location.pathname` changes


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
                            Me
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="purg7v1 purg7v3x purg7vc9 purg7vcf purg7v64 _15se5fi0 _4onk9z1"
              data-scroll-container="true"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                className="purg7v1 purg7v8r purg7v9x purg7vx purg7vc9 purg7v64 _15se5fi0 bfo8zk4 bfo8zk0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  className="purg7v1 purg7vc9 purg7vdc purg7v64 _15se5fi0"
                  style={{ "--purg7v0": "transparent" }}
                >
                  <div
                    className="purg7v1 purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div className="WbGnp mb-3 ">
                      <div className="rH205"></div>
                      <div className="KaEH6">
                        <div
                          dir="ltr"
                          data-orientation="horizontal"
                          className="_1j3ip2u0 null"
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            className="_1j3ip2u1 _1j3ip2u2"
                            tabindex="0"
                            data-orientation="horizontal"
                            style={{ outline: "none" }}
                          >
                            <button
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="radix-:r11:-content-Profile"
                              data-state={active === 1 ? "active" : "inactive"}
                              id="radix-:r11:-trigger-Profile"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              onClick={() => {
                                navigate("/teamgrid/me/profile");
                                setActive(1);
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span className="d03moe3">Profile</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r11:-content-Personal"
                              data-state={active === 2 ? "active" : "inactive"}
                              id="radix-:r11:-trigger-Personal"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                              onClick={() => {
                                navigate("/teamgrid/me/personal");
                                setActive(2);
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span className="d03moe3">Personal</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r11:-content-Agreements"
                              data-state={active === 3 ? "active" : "inactive"}
                              id="radix-:r11:-trigger-Agreements"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                              onClick={() => {
                                navigate("/teamgrid/me/agreement");
                                setActive(3);
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span className="d03moe3">Agreements</span>
                              </span>
                            </button>
                            {/* <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r11:-content-Competencies"
                              data-state="inactive"
                              id="radix-:r11:-trigger-Competencies"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              <a href="/profile/competencies">
                                <span
                                  className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  <span className="d03moe3">Competencies</span>
                                </span>
                              </a>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r11:-content-Time planning"
                              data-state="inactive"
                              id="radix-:r11:-trigger-Time planning"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              <a href="/profile/planning_versions">
                                <span
                                  className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  <span className="d03moe3">Time planning</span>
                                </span>
                              </a>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r11:-content-Others"
                              data-state="inactive"
                              id="radix-:r11:-trigger-Others"
                              className="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              <a href="/profile/custom_tables">
                                <span
                                  className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  <span className="d03moe3">Others</span>
                                </span>
                              </a>
                            </button> */}
                          </div>
                        </div>
                      </div>
                      <div className="qGH4r"></div>
                      <div className="koe8Z"></div>
                    </div>
                    {/* <Outlet/> */}
                    {active === 1 ? (
                      <Profile />
                    ) : active === 2 ? (
                      <Personal />
                    ) : (
                      active === 3 && <Agreement />
                    )}
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

export default Index;
