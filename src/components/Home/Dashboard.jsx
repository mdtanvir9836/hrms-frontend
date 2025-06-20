import React, { useEffect, useState } from "react";
import {
  BsCalendar2X,
  BsCalendarDate,
  BsFillRocketTakeoffFill,
} from "react-icons/bs";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FiInbox } from "react-icons/fi";
import {
  MdCelebration,
  MdMoveToInbox,
  MdOutlineMoveToInbox,
} from "react-icons/md";
import { FaAngleUp, FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import "../../style/Dashboard.css";
import Tab from "../sidebar/Tab";
import logo from "../.././assets/images/logo.png";
import { LuUsers, LuWorkflow } from "react-icons/lu";
import {
  PiMicrosoftWordLogoLight,
  PiUserDuotone,
  PiUsersThree,
} from "react-icons/pi";
import { TbDeviceDesktopAnalytics, TbMoneybag } from "react-icons/tb";
import { HiOutlineClipboardDocument, HiOutlineLink } from "react-icons/hi2";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import getUserIdFromToken from "../../utility/Token";
import { fetchUserById } from "../../redux/slice/userSlice";
import Inbox from "./Inbox";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  // console.log("userId",userId);
  const token = localStorage.getItem("token");
  // console.log(token);
  const orgId = localStorage.getItem("orgId");

  useEffect(() => {
    if (token) {
      const user = getUserIdFromToken(token);
      !userId && localStorage.setItem("userId", user?.id);
      !orgId && localStorage.setItem("orgId", user?.organizationId);
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [userId]);

  const { users } = useSelector((state) => state.user);
  // console.log(users);

  return (
    <div className="_110my71a">
      {" "}
      <div className="_18xzzfe0 regular" data-size="regular">
        {" "}
        <main className="content level-1">
          {" "}
          <div className="xqeexf0 flex flex-row" style={{ opacity: 1 }}>
            <div class="grid-container">
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
                        Teams
                      </span>
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
                      <div
                        className="purg7v1 purg7v79 purg7v84 purg7v3x purg7vc9 purg7vcf purg7vcz _15se5fi0"
                        style={{ background: "transparent" }}
                      >
                        <div
                          className="purg7v1 purg7v9s purg7vc9 _15se5fi0"
                          style={{
                            background: "transparent",
                          }}
                        >
                          <LuUsers size={30} />
                        </div>

                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                          }}
                        >
                          You don't belong to any team.
                        </span>

                        <div
                          className="purg7v1 purg7v8x purg7vc9 _15se5fi0"
                          style={{
                            background: "transparent",
                          }}
                        >
                          <a
                            className="ckhy410"
                            href="/employees/teams/list/add"
                          >
                            <button
                              className="_1nz7aia3 _1nz7aia5"
                              type="button"
                              style={{
                                "--_1nz7aia2": "var(--_1wf7mbl52)",

                                "--_1nz7aia1": "var(--_1wf7mbl52)",

                                "--_1nz7aia0": "none",
                              }}
                            >
                              <span
                                className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                style={{
                                  "--_6o3wap0": "var(--seicjt3j)",
                                }}
                              >
                                Add team
                              </span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="react-resizable-handle react-resizable-handle-se"></span>
              </div>

              <Inbox />

              <div class="grid-item">
                <div
                  className="purg7v1 purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _1y2tv656"
                  role="region"
                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                >
                  <div
                    className="purg7v1 purg7v78 purg7v5d purg7vc7 purg7vcf purg7vd0 _15se5fi7m _15se5fi5s _15se5fi6f w-full"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v82 purg7v3d purg7vc7 purg7vcf purg7vd0 purg7v64 _15se5fi0 w-full"
                      style={{ background: "transparent" }}
                    >
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9 _6o3wapx w-full"
                        style={{
                          "--_6o3wap0": "var(--_1wf7mbl3s)",

                          whiteSpace: "nowrap",
                        }}
                      >
                        Public holidays
                      </span>

                      <a
                        aria-label="View on calendar"
                        title="View on calendar"
                        className="_90embe2"
                        href="/calendar"
                      >
                        <FaArrowRight />
                      </a>
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
                      <div
                        className="purg7v1 purg7v79 purg7v84 purg7v3x purg7vc9 purg7vcf purg7vcz _15se5fi0"
                        style={{ background: "transparent" }}
                      >
                        <div
                          className="purg7v1 purg7v9s purg7vc9 _15se5fi0"
                          style={{
                            background: "transparent",
                          }}
                        >
                          <BsCalendar2X size={30} />
                        </div>

                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                          }}
                        >
                          There are no holidays coming up.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="react-resizable-handle react-resizable-handle-se"></span>
              </div>
              <div class="grid-item">
                <div
                  className="purg7v1 purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _1y2tv656"
                  role="region"
                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
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
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap7 _6o3wap9 _6o3wapx "
                        style={{
                          "--_6o3wap0": "var(--_1wf7mbl3s)",
                        }}
                      >
                        Events
                      </span>
                    </div>
                  </div>

                  <div
                    className="purg7v1 purg7v79 purg7v84 purg7v3x purg7vc9 purg7vcf purg7vcz _15se5fi0"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v9s purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <BsCalendarDate size={30} />
                    </div>

                    <span
                      className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                      style={{
                        "--_6o3wap0": "var(--_1wf7mbl3r)",
                      }}
                    >
                      No events coming up.
                    </span>

                    <div
                      className="purg7v1 purg7v8x purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <a className="ckhy410" href="/dashboard/post/new">
                        <button
                          className="_1nz7aia3 _1nz7aia5"
                          type="button"
                          style={{
                            "--_1nz7aia2": "var(--_1wf7mbl52)",

                            "--_1nz7aia1": "var(--_1wf7mbl52)",

                            "--_1nz7aia0": "none",
                          }}
                        >
                          <span
                            className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                            style={{
                              "--_6o3wap0": "var(--seicjt3j)",
                            }}
                          >
                            Add event
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <span className="react-resizable-handle react-resizable-handle-se"></span>
              </div>
              <div class="grid-item">
                <div
                  className="purg7v1 purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _1y2tv656"
                  role="region"
                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
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
                        Links
                      </span>
                    </div>
                  </div>

                  <div
                    className="purg7v1 purg7v79 purg7v84 purg7v3x purg7vc9 purg7vcf purg7vcz _15se5fi0"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v9s purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <HiOutlineLink size={30} />
                    </div>

                    <span
                      className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                      style={{
                        "--_6o3wap0": "var(--_1wf7mbl3r)",
                      }}
                    >
                      There are no links defined.
                    </span>

                    <div
                      className="purg7v1 purg7v8x purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <a
                        className="ckhy410"
                        href="/dashboard/company_links/edit"
                      >
                        <button
                          className="_1nz7aia3 _1nz7aia5"
                          type="button"
                          style={{
                            "--_1nz7aia2": "var(--_1wf7mbl52)",

                            "--_1nz7aia1": "var(--_1wf7mbl52)",

                            "--_1nz7aia0": "none",
                          }}
                        >
                          <span
                            className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 "
                            style={{
                              "--_6o3wap0": "var(--seicjt3j)",
                            }}
                          >
                            Add links
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="react-resizable-handle react-resizable-handle-se"></span>
              </div>
            </div>
            {/* <span>
                              <div
                                className="purg7v1 purg7v6f purg7vc7 purg7vu8 purg7vv2 _15se5fi0 _1y2tv656 _1nnz6vu5"
                                style={{"--purg7v0": "var(--_1wf7mbl3l)"}}
                              >
                                <div
                                  className="purg7v1 purg7vc9 purg7vum purg7vuu _15se5fi0 _1y2tv658 _1nnz6vu0"
                                  style={{background: "transparent"}}
                                >
                                  <img
                                    src="https://www.datocms-assets.com/58969/1711467579-time-tracking.png?fm=webp"
                                    className="_1nnz6vu1"
                                  />
                                </div>
                                <div
                                  className="purg7v1 purg7v3x purg7vc9 purg7vcz _15se5fi0 _1nnz6vu2"
                                  style={{background: "transparent"}}
                                >
                                  <div
                                    className="purg7v1 purg7v9r purg7vc9 _15se5fi0"
                                    style={{background: "transparent"}}
                                  >
                                    <span
                                      className="_6o3wap1 _6o3wapn _6o3wapu _6o3wap7 _6o3wap9"
                                      style={{"--_6o3wap0": "var(--_1wf7mbl3s)"}}
                                    >
                                      Track your employees working hours
                                    </span>
                                  </div>
                                  <div
                                    className="purg7v1 purg7v9u purg7vc9 _15se5fi0 _1nnz6vu3"
                                    style={{background: "transparent"}}
                                  >
                                    <span
                                      className="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                                      style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                                    >
                                      Track your employees' working hours daily,
                                      and approve or reject their timesheets, to
                                      better manage employee productivity.
                                      Monitor employee attendance; know when and
                                      where employees are working.
                                    </span>
                                  </div>
                                  <div
                                    className="purg7v1 purg7vc7 purg7vd8 _15se5fi0"
                                    style={{background: "transparent"}}
                                  >
                                    <div
                                      className="purg7v1 purg7vc7 purg7vd8 _15se5fi0"
                                      style={{background: "transparent"}}
                                    >
                                      <a
                                        className="ckhy410"
                                        href="/modules/time-tracking?upsell_origin=discoverability_widget"
                                      >
                                        <button
                                          className="_1nz7aia3 _1nz7aia5"
                                          type="button"
                                          style={{"--_1nz7aia2": "var(--_1wf7mbl52)", "--_1nz7aia1" : "var(--_1wf7mbl52)", "--_1nz7aia0": "none"}}
                                        >
                                          <span
                                            className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                            style={{"--_6o3wap0": "var(--seicjt3j)"}}
                                          >
                                            View module
                                          </span>
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    className="purg7v1 purg7vc9 _15se5fi0 _1nnz6vu4"
                                    style={{background: "transparent"}}
                                  >
                                    <button type="button" className="_15ojh3a1">
                                      <div
                                        className="purg7v1 purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                        style={{background: "transparent"}}
                                      >
                                        <span
                                          className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wap5"
                                          style={{"--_6o3wap0": "var(--seicjt31)"}}
                                        >
                                        <FaAngleDown size={20} />
                                        </span>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </span> */}
            {/* <div className="grid-container "> */}
            <div
              className="grid-item"
              style={{ position: "absolute", top: 700, marginLeft: 20 }}
            >
              <div
                className="purg7v1 purg7vc9 _15se5fi0"
                style={{ background: "transparent" }}
              >
                <div
                  className="purg7v1 purg7vc9 _15se5fi0 _1hqyq4d0"
                  style={{ background: "transparent" }}
                >
                  <div className="xwvnte0">
                    <div
                      className="purg7v1 purg7vc9 purg7vu8 _15se5fi0 _1y2tv656"
                      style={{
                        "--purg7v0": "var(--_1wf7mbl3k)",
                      }}
                    >
                      <div
                        className="purg7v1 purg7vx purg7vc7 purg7vcf _15se5fi7m _15se5fi6f _15se5fi5s"
                        style={{ background: "transparent" }}
                      >
                        <div
                          className="purg7v1 purg7v6e purg7vug purg7vc7 purg7vcf _15se5fi0"
                          role="button"
                          tabindex="0"
                          style={{ background: "transparent" }}
                        >
                          <span
                            className="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                            style={{
                              "--_6o3wap0": "var(--_1wf7mbl3r)",
                            }}
                          >
                            All communities
                          </span>

                          <div
                            className="purg7v1 purg7vak purg7vc9 _15se5fi0"
                            style={{
                              background: "transparent",
                            }}
                          >
                            <FaAngleDown />
                          </div>
                        </div>
                      </div>

                      <div
                        className="purg7v1 purg7v6e purg7vc9 _15se5fi0"
                        style={{ background: "transparent" }}
                      >
                        <div
                          className="purg7v1 purg7vc9 purg7vcg purg7vdc _15se5fi0"
                          style={{ background: "transparent" }}
                        >
                          <p
                            className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap8 _6o3wap9"
                            style={{
                              "--_6o3wap0": "var(--_1wf7mbl3r)",
                            }}
                          >
                            Here you can see posts from all the communities you
                            belong to. Select a specific community to see its
                            posts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="xwvnte1">
                    <div className="_1JNYU fNgXP">
                      <div>
                        <div
                          className="purg7v1 purg7vc9 purg7vdb _15se5fi0"
                          style={{ background: "transparent" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
