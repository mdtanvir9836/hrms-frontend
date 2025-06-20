import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "../../profile/Profile";
import Personal from "../../profile/Personal";
import Agreement from "../../profile/Agreement";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmploymentInfoByUserId } from "../../../redux/slice/employeeSlice";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa6";
import { fetchUserById } from "../../../redux/slice/userSlice";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import Document from "./document/Document";
import TimeOff from "../../leave/timeOff/TimeOff";

function EditEmployee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useParams().id;
  console.log("userId", userId);
  const { employee } = useSelector((state) => state.employee);
  console.log("employmentInfos", employee);
  const { users } = useSelector((state) => state.user);
  console.log("users", users);
  const [active, setActive] = useState(0); // Initial state
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case `/teamgrid/employees/edit_employee/${userId}/employee/profile`:
        setActive(1);
        break;
      case `/teamgrid/employees/edit_employee/${userId}/employee/personal`:
        setActive(2);
        break;
      case `/teamgrid/employees/edit_employee/${userId}/employee/agreement`:
        setActive(3);
        break;
      case `/teamgrid/employees/edit_employee/${userId}/employee/document`:
        setActive(4);
        break;
      case `/teamgrid/employees/edit_employee/${userId}/employee/timeoff`:
        setActive(5);
        break;
      default:
        setActive(0); // Default case
    }
  }, [location.pathname]); // Run only when `location.pathname` changes

  useEffect(() => {
    if (userId) {
      dispatch(fetchEmploymentInfoByUserId(userId));
      dispatch(fetchUserById(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className="_110my71a pt-5">
      <div className="_18xzzfe0 regular" data-size="regular">
        <main className="content level-1">
          <div
            className="purg7v1 purg7vx purg7v3x purg7vc9 purg7vu8 purg7vum purg7vuu _15se5fi0 _4onk9z0"
            style={{ "--purg7v0": "var(--_1wf7mbl3k)", borderRadius: 10 }}
          >
            <div
              class="purg7v1 purg7v4e purg7vc9 _15se5fi6f _15se5fi7m _15se5fi5s _4onk9z2"
              style={{ "--purg7v0": "transparent" }}
            >
              <div
                class="purg7v1 purg7v6d purg7vc9 _15se5fi0"
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
                            Employee
                          </span>
                        </span>
                      </a>
                      <FaAngleRight size={12} color="grey" />
                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11 ml-1"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        <span
                          title="Me"
                          className="_1sco1wt2 font-medium text-black"
                          style={{ "--_1sco1wt0": 1 }}
                        >
                          {users?.firstName} {users?.lastName}
                        </span>
                      </span>
                    </div>
                  </div>
                  {active === 4 && (
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
                  )}
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
                    class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div class="WbGnp -top-5">
                      <div class="rH205">
                        <Link to={"/teamgrid/employees/list"}>
                          <div class="ckhy410 -mb-4">
                            <button
                              class="_1nz7aia3 _1nz7aia4"
                              aria-label="Employees"
                              type="button"
                              style={{
                                "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                "--_1nz7aia1": "var(--_1wf7mbl4v)",
                                "--_1nz7aia0": "none",
                              }}
                              // onClick={() => {
                              //   navigate("/teamgrid/employees/list");
                              // }}
                            >
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                style={{
                                  "--_1qphaha0": "var(--seicjt3i)",
                                  marginTop: "3px",
                                  marginLeft: "3px",
                                }}
                              >
                                <FaArrowLeft size={20} />
                              </svg>
                            </button>
                          </div>
                        </Link>
                      </div>
                      <div class="KaEH6">
                        <div
                          class="purg7v1 purg7vc7 purg7vcf purg7vdb _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7va purg7vc9 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          ></div>
                          <div
                            class="purg7v1 purg7vk purg7vug purg7vuk purg7vc7 purg7vcf purg7vcz purg7vd9 _15se5fi0"
                            role="button"
                            tabindex="0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div class="HhHsu">
                              <div class="zY8mV">
                                <div
                                  class="purg7v1 purg7va purg7v3a purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                >
                                  {users?.photo ? (
                                    <img
                                      src={users?.photo}
                                      class="cp7gaj0"
                                      style={{
                                        backgroundColor: "transparent",
                                      }}
                                    />
                                  ) : (
                                    <div
                                      class="_1319drc8 _1319drc4 p-1 py-3"
                                      aria-label="Mahadeb Dutta"
                                      role="img"
                                    >
                                      {users?.firstName
                                        ?.charAt(0)
                                        .toUpperCase()}
                                      {users?.lastName?.charAt(0).toUpperCase()}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapt _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                              >
                                {users?.firstName} {users?.lastName}
                              </span>
                            </div>
                            <div
                              class="purg7v1 purg7vc9 _15se5fi0"
                              style={{
                                "--purg7v0": "transparent",
                                opacity: 0.5,
                              }}
                            >
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                              >
                                <use xlink:href="/assets/small-symbols.npd95zexj0.svg#chevron-up"></use>
                              </svg>
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                              >
                                <use xlink:href="/assets/small-symbols.npd95zexj0.svg#chevron-down"></use>
                              </svg>
                            </div>
                          </div>
                          <div
                            class="purg7v1 purg7va purg7vc9 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <button class="QQROW">
                              <svg
                                aria-hidden="true"
                                class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                style={{ "--_1qphaha0": "var(--_1wf7mbl3p)" }}
                              >
                                <use xlink:href="/assets/small-symbols.npd95zexj0.svg#chevron-right"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="qGH4r" style={{ top: 32 }}>
                        <div
                          class="purg7v1 purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <button
                            type="button"
                            id="radix-:r71:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <button
                              class="_1nz7aia3 _1nz7aia5 "
                              type="button"
                              style={{
                                "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                "--_1nz7aia1": "var(--_1wf7mbl4v)",
                                "--_1nz7aia0": "none",
                              }}
                            >
                              {active === 5 ? (
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                                  onClick={() => {
                                    navigate(
                                      `/teamgrid/employees/edit_employee/${userId}/employee/timeoff/leaveSettings`
                                    );
                                  }}
                                >
                                  <IoSettingsOutline size={23} color="#ccc" />
                                </svg>
                              ) : (
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                                >
                                  <FiMoreVertical size={23} color="#ccc" />
                                </svg>
                              )}
                            </button>
                          </button>
                        </div>
                      </div>
                      {/* <div class="koe8Z"></div> */}
                    </div>
                    <div class="WbGnp -top-5">
                      {/* <div class="rH205"></div> */}
                      <div class="KaEH6">
                        <div
                          dir="ltr"
                          data-orientation="horizontal"
                          class="_1j3ip2u0 null"
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            class="_1j3ip2u1 _1j3ip2u2"
                            tabindex="0"
                            data-orientation="horizontal"
                            style={{ outline: "none" }}
                          >
                            <button
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="radix-:r4o:-content-Profile"
                              data-state={active === 1 ? "active" : "inactive"}
                              id="radix-:r4o:-trigger-Profile"
                              class="d03moe1 d03moe0"
                              tabindex="0"
                              data-orientation="horizontal"
                              onClick={() => {
                                navigate(
                                  `/teamgrid/employees/edit_employee/${userId}/employee/profile`
                                );
                                setActive(1);
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span class="d03moe3">Profile</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r4o:-content-Personal"
                              data-state={active === 2 ? "active" : "inactive"}
                              id="radix-:r4o:-trigger-Personal"
                              class="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              onClick={() => {
                                navigate(
                                  `/teamgrid/employees/edit_employee/${userId}/employee/personal`
                                );
                                setActive(2);
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span class="d03moe3">Personal</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r4o:-content-Agreements"
                              data-state={active === 3 ? "active" : "inactive"}
                              id="radix-:r4o:-trigger-Agreements"
                              class="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              onClick={() => {
                                navigate(
                                  `/teamgrid/employees/edit_employee/${userId}/employee/agreement`
                                );
                                setActive(3);
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span class="d03moe3">Agreements</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r4o:-content-Documents"
                              data-state={active === 4 ? "active" : "inactive"}
                              id="radix-:r4o:-trigger-Documents"
                              class="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              onClick={() => {
                                navigate(
                                  `/teamgrid/employees/edit_employee/${userId}/employee/document`
                                );
                                setActive(4);
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span class="d03moe3">Documents</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-:r4o:-content-Time off"
                              data-state={active === 5 ? "active" : "inactive"}
                              id="radix-:r4o:-trigger-Time off"
                              class="d03moe1 d03moe0"
                              tabindex="-1"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                              onClick={() => {
                                navigate(
                                  `/teamgrid/employees/edit_employee/${userId}/employee/timeoff`
                                );
                                setActive(5);
                              }}
                            >
                              <span
                                class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                              >
                                <span class="d03moe3">Time off</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="qGH4r"></div>
                      <div class="koe8Z"></div>
                    </div>
                    {/* <Outlet/> */}
                    {active === 1 ? (
                      <Profile />
                    ) : active === 2 ? (
                      <Personal />
                    ) : active === 3 ? (
                      <Agreement />
                    ) : active === 4 ? (
                      <Document userId={userId} />
                    ) : (
                      active === 5 && <TimeOff />
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

export default EditEmployee;
