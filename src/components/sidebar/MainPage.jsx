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
  MdOutlineEventBusy,
  MdOutlineMoveToInbox,
} from "react-icons/md";
import { FaAngleUp, FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

import Tab from "./Tab";
import logo from "../../assets/images/logo.png";
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
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../../redux/slice/userSlice";
import Dashboard from "../Home/Dashboard";
import getUserIdFromToken from "../../utility/Token";
function MainPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);
  // console.log("role", role);

  useEffect(() => {
    if (token) {
      const userData = getUserIdFromToken(token);
      setUserData(userData); // Ensure consistent lowercase role comparison
    }
  }, [dispatch, token]);
  const [menuState, setMenuState] = useState({
    dashboard: false,
    inbox: false,
    discover: false,
    me: false,
    timeOff:false,
    tasks: false,
    myDocuments: false,
    employees: false,
    calender: false,
    analytics: false,
    payroll: false,
    documents: false,
    finance: false,
    software: false,
    workflows: false,
    settings: false,
  });

  const [submenu, setSubmenu] = useState({
    dashboard: [],
    inbox: ["Requests", "Notifications"],
    discover: [
      "Welcome Space",
      "HRMS 2025",
      "News",
      "Integrations",
      "Marketplace",
    ],
    me: ["Profile", "Personal", "Agreements", "Time Planing", "Others"],
    timeOff:[],
    tasks: [],
    myDocuments: [],
    employees: ["Employees", "Activity", "Teams", "Org Chart", "Jobs"],
    calender: ["Calendar", "Team View"],
    analytics: ["Insights", "Advance Reports"],
    payroll: [],
    documents: [
      "Public",
      "Private",
      "Employee",
      "Send in bulk",
      "Ducument Templates",
      "Trash",
    ],
    finance: [
      "Financial Workspace",
      "Accounting",
      "Invoices",
      "Bank Accounts",
      "Vendors",
    ],
    software: ["Applications", "Employees"],
    workflows: ["Onboarding", "Offboarding", "Custom"],
    settings: [],
  });

  const handleToggle = (section) => {
    setMenuState((prevState) => ({
      ...prevState,
      [section.toLowerCase()]: !prevState[section.toLowerCase()],
    }));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    handleClose();
    navigate("/login");
  };

  return (
    <div id="HRMSRoot" className="w-full bg-[#F5F6F8]">
      <div
        id="HRMS-one-layout"
        className="flex h-screen w-screen flex-col" /* dark:bg-[#0D1625] z-1 */
      >
        <div
          role="search"
          className="zmp1vx0"
          style={{ display: "none", opacity: 1 }}
        ></div>

        <div className="_110my710">
          <button
            class="_110my711"
            aria-label="Toggle navigation"
            aria-controls="sidebar"
          >
            <span class="_110my713"></span>
          </button>
          <div className="_110my715 w-full sticky" style={{ opacity: 1 }}>
            <div
              className="purg7v1 purg7v6b purg7vx purg7vug purg7vc7 purg7vcf purg7vcz purg7vd9 _15se5fi0 flex justify-center items-center"
              role="button"
              style={{
                background:
                  "linear-gradient(90deg, rgb(31, 116, 236) 15%, rgb(44, 130, 240) 50%, rgb(20, 94, 200) 85%)",
                flexDirection: "row",
              }}
            >
              <span
                className="_6o3wap1 _6o3wapm _6o3wapt _6o3wap7 _6o3wap9"
                style={{ color: "#ffffff", fontSize: 25, padding: 5 }}
              >
                {/* You have 7 days left in your all-in-one HRMS trial, upgrade
              anytime */}
                Teamgrid
              </span>
              {/* <a className="ckhy410 p-1" href="/upgrade-plan">
              <button
                className="_1nz7aia3 _1nz7aia4"
                type="button"
                style={{
                  background: "#ffffff",
                  color: "blue",
                  borderRadius: 20,
                  padding: 2,
                  border: "solid 3px rgb(43, 58, 226)",
                }}
              >
                <span className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 px-1">
                  Get your plan
                </span>
              </button>
            </a> */}
            </div>
            <div
              className="purg7v1 purg7vc9 purg7vda _15se5fi0"
              style={{
                background: "transparent",
                position: "fixed",
                right: "38px",
              }}
            >
              <div
                className="purg7v1 purg7vb purg7v3b purg7vug purg7vc9 purg7vcf purg7vcz _15se5fi0 _1y2tv65a"
                role="button"
                tabindex="0"
                style={{
                  background: "var(--_1wf7mbl3r)",
                  bottom: "18px",
                  right: "21px",
                  position: "fixed",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>

          <div className="flex mt-4 overflow-auto">
            <div
              className="_110my717 mt-3"
              id="sidebar"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="purg7v1 purg7vr purg7v3x purg7vc9 _15se5fi0 _1l9rkvi0"
                style={{ background: "transparent" }}
              >
                <div
                  className="purg7v1 purg7v77 purg7v83 purg7vc9 purg7vcg purg7vd8 _15se5fi0"
                  style={{ background: "transparent" }}
                >
                  <a href="/dashboard">
                    <div className="_1fhbq8e2" role="img" aria-label="Logo">
                      <img
                        alt="HRMS logo"
                        loading="lazy"
                        width="123"
                        height="32"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src={logo}
                      />
                    </div>
                  </a>
                </div>
                <nav
                  className="purg7v1 purg7v8x purg7v9s purg7vc9 purg7vut purg7vda _15se5fi0"
                  style={{ background: "transparent" }}
                >
                  <div
                    className="search-bar-container"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="search-icon"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                      }}
                    >
                      <IoSearch size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="search-input"
                      style={{
                        padding: "10px 10px 10px 40px", // Left padding for the icon
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        width: "100%",
                        outline: "none",
                        fontSize: "14px",
                      }}
                    />
                    <div
                      className="shortcut-hint"
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                        fontSize: "12px",
                      }}
                    >
                      Ctrl+K
                    </div>
                  </div>

                  <div
                    className="purg7v1 purg7vc9 _15se5fi0"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7vug purg7vc9 _15se5fi0 _1y2tv656 _19r0lu31"
                      role="button"
                      style={{ background: "transparent" }}
                    >
                      <div
                        className="purg7v1 purg7v80 purg7val purg7vc7 purg7vcf purg7vd8 _15se5fi0 _19r0lu30"
                        style={{ background: "transparent" }}
                      >
                        <svg
                          aria-hidden="true"
                          className="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                          style={{ color: "#1F74EC" }}
                        >
                          <BsFillRocketTakeoffFill />
                        </svg>
                        <span
                          className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                          style={{
                            "--_6o3wap0": "var(--_1wf7mbl3r)",
                            fontWeight: "600",
                          }}
                        >
                          Get your plan
                        </span>
                      </div>
                    </div>
                    <div
                      className="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <div
                        className="purg7v1 purg7vc9 _15se5fi0"
                        style={{ background: "transparent" }}
                      >
                        <Tab
                          isOpen={menuState.dashboard}
                          handleToggle={handleToggle}
                          level={"Dashboard"}
                          title={"dashboard"}
                          icon={<GoHome size={20} />}
                          submenu={submenu.dashboard}
                          link={"/teamgrid/dashboard"}
                        />

                        <Tab
                          isOpen={menuState.inbox}
                          handleToggle={handleToggle}
                          level={"Inbox"}
                          title={"inbox"}
                          icon={<FiInbox size={20} />}
                          submenu={submenu.inbox}
                          link={"/teamgrid/inbox/requests"}
                        />

                        <Tab
                          isOpen={menuState.discover}
                          handleToggle={handleToggle}
                          level={"Discover HRMS"}
                          title={"discover"}
                          icon={<MdCelebration size={20} />}
                          submenu={submenu.discover}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v75 purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <span
                        className="_6o3wap1 _6o3wapk _6o3waps _6o3wap7 _6o3wap9 _6o3wapw"
                        style={{ "--_6o3wap0": "var(--seicjt56)" }}
                      >
                        You
                      </span>
                    </div>
                    <div
                      className="purg7v1 purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <Tab
                        isOpen={menuState.me}
                        handleToggle={handleToggle}
                        level={"Me"}
                        title={"me"}
                        icon={<PiUserDuotone size={20} />}
                        submenu={submenu.me}
                        link={"/teamgrid/me/profile"}
                      />

                      <Tab
                        isOpen={menuState.timeOff}
                        handleToggle={handleToggle}
                        level={"Time Off"}
                        title={"timeOff"}
                        icon={<MdOutlineEventBusy size={20} />}
                        submenu={submenu.timeOff}
                        link={"/teamgrid/timeOff"}
                      />

                      <Tab
                        isOpen={menuState.tasks}
                        handleToggle={handleToggle}
                        level={"Tasks"}
                        title={"tasks"}
                        icon={<MdTaskAlt size={20} />}
                        submenu={submenu.tasks}
                      />

                      <Tab
                        isOpen={menuState.myDocuments}
                        handleToggle={handleToggle}
                        level={"My Documents"}
                        title={"myDocuments"}
                        icon={<IoDocumentTextOutline size={20} />}
                        submenu={submenu.myDocuments}
                        link={"/teamgrid/document"}
                      />
                    </div>
                  </div>
                  <div
                    className="purg7v1 purg7vc9 purg7vd8 _15se5fi0"
                    style={{ background: "transparent" }}
                  >
                    <div
                      className="purg7v1 purg7v75 purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <span
                        className="_6o3wap1 _6o3wapk _6o3waps _6o3wap7 _6o3wap9 _6o3wapw"
                        style={{ "--_6o3wap0": "var(--seicjt56)" }}
                      >
                        Your company
                      </span>
                    </div>
                    <div
                      className="purg7v1 purg7vc9 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <Tab
                        isOpen={menuState.employees}
                        handleToggle={handleToggle}
                        level={"Employees"}
                        title={"employees"}
                        icon={<PiUsersThree size={20} />}
                        submenu={submenu.employees}
                        link={"/teamgrid/employees/list"}
                      />

                      <Tab
                        isOpen={menuState.calender}
                        handleToggle={handleToggle}
                        level={"Calender"}
                        title={"calender"}
                        icon={<CiCalendar size={20} />}
                        submenu={submenu.calender}
                      />

                      <Tab
                        isOpen={menuState.analytics}
                        handleToggle={handleToggle}
                        level={"Analytics"}
                        title={"analytics"}
                        icon={<TbDeviceDesktopAnalytics size={20} />}
                        submenu={submenu.analytics}
                      />
                      <Tab
                        isOpen={menuState.payroll}
                        handleToggle={handleToggle}
                        level={"Payroll"}
                        title={"payroll"}
                        icon={<BiMoneyWithdraw size={20} />}
                        submenu={submenu.payroll}
                      />

                      <Tab
                        isOpen={menuState.documents}
                        handleToggle={handleToggle}
                        level={"Documents"}
                        title={"documents"}
                        icon={<HiOutlineClipboardDocument size={20} />}
                        submenu={submenu.documents}
                      />

                      <Tab
                        isOpen={menuState.finance}
                        handleToggle={handleToggle}
                        level={"Finance"}
                        title={"finance"}
                        icon={<TbMoneybag size={20} />}
                        submenu={submenu.finance}
                      />

                      <Tab
                        isOpen={menuState.software}
                        handleToggle={handleToggle}
                        level={"Software"}
                        title={"software"}
                        icon={<PiMicrosoftWordLogoLight size={20} />}
                        submenu={submenu.software}
                      />

                      <Tab
                        isOpen={menuState.workflows}
                        handleToggle={handleToggle}
                        level={"Workflows"}
                        title={"workflows"}
                        icon={<LuWorkflow size={20} />}
                        submenu={submenu.workflows}
                      />

                      <Tab
                        isOpen={menuState.settings}
                        handleToggle={handleToggle}
                        level={"Settings"}
                        title={"settings"}
                        icon={<IoSettingsOutline size={20} />}
                        submenu={submenu.settings}
                      />
                    </div>
                  </div>
                  <button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="vy1za90"
                    style={{ "background-color": "var(--seicjt4x)" }}
                  >
                    <div
                      className="purg7v1 purg7vc7 purg7vcf purg7vd8 _15se5fi0"
                      style={{ background: "transparent" }}
                    >
                      <div
                        className="purg7v1 purg7va purg7v3a purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                        style={{ background: "transparent" }}
                      >
                        <div
                          className="_1319drc8 _1319drc4"
                          aria-label="Mahadeb Dutta"
                          role="img"
                        >
                          {userData?.firstName?.charAt(0).toUpperCase()}
                          {userData?.lastName?.charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                        style={{ "--_6o3wap0": " var(--seicjt51)" }}
                      >
                        {userData?.firstName}{" "}
                        {userData?.lastName?.charAt(0).toUpperCase()}.
                      </span>
                    </div>
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Preferences</MenuItem>
                    <MenuItem onClick={handleClose}>Notifications</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </nav>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
