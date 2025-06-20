import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { FaAngleDown, FaArrowRight, FaUsers } from "react-icons/fa6";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { RiMore2Fill } from "react-icons/ri";
import {
  deleteEmploymentInfo,
  fetchAllEmploymentInfos,
} from "../../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./addEmp/AddEmployee";
import { Menu, MenuItem } from "@mui/material";
import getUserIdFromToken from "../../utility/Token";
import { fetchUsers } from "../../redux/slice/userSlice";
import { fetchUserProfiles } from "../../redux/slice/userProfileSlice";

function EmployeePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const orgId = localStorage.getItem("orgId");
  const token = localStorage.getItem("token");
  const [role, setRole] = useState(null);
  console.log("role", role);

  useEffect(() => {
    dispatch(fetchAllEmploymentInfos());
    dispatch(fetchUserProfiles());
    if (token) {
      const userRole = getUserIdFromToken(token);
      setRole(userRole.role.toLowerCase()); // Ensure consistent lowercase role comparison
    }
  }, [dispatch, token]);

  const { employmentInfos } = useSelector((state) => state.employee);
  const { allProfiles } = useSelector((state) => state.profile);
  console.log("allProfiles", allProfiles);

  const employeeList = employmentInfos.filter(
    (emp) => emp.userId?.organizationId === orgId
  );
  console.log("employeeList", employeeList);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmploymentInfo(id)).unwrap();
    dispatch(fetchAllEmploymentInfos());
    handleClose();
  };
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isSecondMenuOpen = Boolean(menuAnchorEl);

  // Function to handle the second menu opening
  const handleSecondMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  // Function to handle the second menu closing
  const handleSecondMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleExportData = () => {
    // Map to extract only name and email (adding mock emails for this example)
    const dataToExport = employeeList.map((employee) => {
      const alluser = allProfiles.find(
        (user) => user.userId === employee.userId._id
      );
      
      
      if (alluser) {
        console.log("alluser",alluser);
        return {
          name: `${employee.userId.firstName} ${employee.userId.lastName}`,
          email: employee.userId.email,
          contactNumber: alluser.contactNumber,
          dob: alluser.dob,
          gender: alluser.gender,
          address: alluser.address,
          city: alluser.city,
          state: alluser.state,
          country: alluser.country,
          zipCode: alluser.zipCode,
          hireDate: employee.hireDate,
          jobTitle: employee.jobTitle,
          salary: employee.salary.numberDecimal,
          department: employee.department,
          employmentStatus: employee.employmentStatus,
          employmentType: employee.employmentType,
          probationPeriod: employee.probationPeriod,
        };
      }
      return null; // If no matching user is found, return null (optional)
    });
    // .filter((item) => item !== null);

    // Convert the filtered data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

    // Create a workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    // Export the workbook to a file
    XLSX.writeFile(workbook, "EmployeeData.xlsx");
    closeModal();
  };

  const handleEdit = (id) => {
    navigate(`/teamgrid/employees/edit_employee/${id}/employee/profile`);
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

                      <span
                        className="_6o3wap1 _6o3wapl _6o3wapt _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                        style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                      >
                        <span
                          title="Employee"
                          className="_1sco1wt2"
                          style={{ "--_1sco1wt0": 1 }}
                        >
                          Employee
                        </span>
                      </span>
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
                class="purg7v1 purg7v8r purg7v9x purg7vx purg7vc9 purg7v64 _15se5fi0 bfo8zk2 bfo8zk0"
                style={{ "--purg7v0": "transparent" }}
              >
                <div
                  class="purg7v1 purg7vc9 purg7vdc purg7v64 _15se5fi0"
                  style={{
                    "--purg7v0": "transparent",
                    padding: 10,
                    paddingLeft: 20,
                  }}
                >
                  <div
                    class="purg7v1 purg7vc9 purg7vv2 purg7v64 _15se5fi0"
                    style={{ "--purg7v0": "transparent" }}
                  >
                    <div
                      class="purg7v1 purg7vc9 purg7vdc _15se5fi0"
                      style={{ "--purg7v0": "transparent" }}
                    >
                      <div
                        class="purg7v1 purg7v71 purg7v7w purg7vx purg7vc9 purg7v64 _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        <div class="_7ygv9y0">
                          <div class="_7ygv9y1 _7ygv9y3">
                            <div
                              class="purg7v1 purg7vbo purg7vc9 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div class="_17d9nud0">
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
                                        <div
                                          aria-hidden="true"
                                          class="_1qphaha1 _1qphaha5 _1qphaha6 _1qphaha7"
                                          style={{
                                            "--_1qphaha0": "var(--seicjt35)",
                                          }}
                                        >
                                          <FaUsers size={30} color="#1F74EC" />
                                        </div>
                                      </div>
                                      <div
                                        class="purg7v1 purg7vc7 purg7vci purg7vd8 _15se5fi0"
                                        style={{ "--purg7v0": "transparent" }}
                                      >
                                        <span
                                          class="_6o3wap1 _6o3wapo _6o3wapt _6o3wap7 _6o3wap9"
                                          style={{
                                            "--_6o3wap0": "var(--seicjt2t)",
                                          }}
                                        >
                                          Employees
                                        </span>
                                      </div>
                                      <span
                                        class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9 _6o3wap11"
                                        style={{
                                          "--_6o3wap0": "var(--seicjt2u)",
                                        }}
                                      >
                                        <span
                                          title="View all employees at your organization. Use the filter to display terminated employees."
                                          class="_1sco1wt1"
                                          style={{ "--_1sco1wt0": 5 }}
                                        >
                                          View all employees at your
                                          organization. Use the filter to
                                          display terminated employees.
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="_7ygv9y1 _7ygv9y3">
                            <ul
                              class="purg7v1 purg7vc9 purg7vum _15se5fi1 _15se5fio _15se5fi1v _1y2tv656"
                              style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                            >
                              <li
                                class="purg7v1 purg7v79 purg7v83 purg7vc7 purg7vcf purg7vd0 get7bh0 "
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  1 pending to accept
                                </span>
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                                >
                                  <button
                                    class="_1nz7aia3 _1nz7aia5"
                                    type="button"
                                    style={{
                                      "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                      "--_1nz7aia1": "var(--_1wf7mbl4v",
                                      "--_1nz7aia0": "none",
                                    }}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                      style={{
                                        "--_1qphaha0": "var(--seicjt3o)",
                                      }}
                                    >
                                      <IoSettingsOutline
                                        color={"#ccc"}
                                        size={23}
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                              <li
                                class="purg7v1 purg7v79 purg7v83 purg7vc7 purg7vcf purg7vd0 get7bh0 "
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <span
                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3s)" }}
                                >
                                  0 not invited
                                </span>
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapv _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--_1wf7mbl3r)" }}
                                >
                                  <button
                                    class="_1nz7aia3 _1nz7aia5"
                                    type="button"
                                    disabled=""
                                    style={{
                                      "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                      "--_1nz7aia1": "var(--_1wf7mbl4v",
                                      "--_1nz7aia0": "none",
                                    }}
                                  >
                                    <svg
                                      aria-hidden="true"
                                      class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                      style={{
                                        "--_1qphaha0": "var(--seicjt3o)",
                                      }}
                                    >
                                      <IoSettingsOutline
                                        color={"#ccc"}
                                        size={23}
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="purg7v1 purg7vc9 purg7vdc _15se5fi0"
                        style={{ "--purg7v0": "transparent" }}
                      >
                        {/* <div
                          class="purg7v1 purg7v9u purg7vc9 _15se5fi0"
                          style={{"--purg7v0": "transparent"}}
                        >
                          <div
                            class="purg7v1 purg7v78 purg7v82 purg7vx purg7vc7 purg7vcf purg7vck purg7vcx _1y2tv656"
                            style="--purg7v0: var(--_1wf7mbl37);"
                          >
                            <div role="tooltip">
                              <div
                                class="purg7v1 purg7vbh purg7vc9 _15se5fi0 tether-target tether-enabled tether-out-of-bounds tether-out-of-bounds-left tether-element-attached-top tether-element-attached-center tether-target-attached-bottom tether-target-attached-center"
                                style={{"--purg7v0": "transparent"}}
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                  style="--_1qphaha0: var(--_1wf7mbl3r);"
                                >
                                  <use xlink:href="/assets/medium-symbols.o9x3thcc74.svg#info-circle-line"></use>
                                </svg>
                              </div>
                            </div>
                            <span
                              class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap7 _6o3wap9 _6o3wapx"
                              style={{"--_6o3wap0": "var(--_1wf7mbl3r)"}}
                            >
                              We’ve generated test employees to improve your
                              experience during the trial.
                            </span>
                            <div
                              class="purg7v1 purg7vc9 purg7vch purg7v63 _15se5fi0"
                              style={{"--purg7v0": "transparent"}}
                            >
                              <div
                                class="purg7v1 purg7vc8 purg7v64 _15se5fi0"
                                style={{"--purg7v0": "transparent"}}
                              >
                                <button
                                  class="_1nz7aia3 _1nz7aia5"
                                  type="button"
                                  style="--_1nz7aia2: var(--_1wf7mbl52); --_1nz7aia1: var(--_1wf7mbl52); --_1nz7aia0: none;"
                                >
                                  <span
                                    class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                    style={{"--_6o3wap0": "var(--seicjt3j)"}}
                                  >
                                    Delete all
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div
                          class="purg7v1 purg7vc9 _15se5fi0"
                          style={{ "--purg7v0": "transparent" }}
                        >
                          <div
                            class="purg7v1 purg7v9s purg7vx purg7vc7 purg7vcf purg7vd0 purg7vd8 _15se5fi0"
                            style={{ "--purg7v0": "transparent" }}
                          >
                            <div
                              class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <div
                                class="purg7v1 purg7vc7 purg7vcf purg7vd8 purg7v63 _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <div
                                  class="purg7v1 purg7v77 purg7v80 purg7vug purg7vc7 purg7vcf purg7vd0 purg7vd7 _15se5fi2 _15se5fi1v _15se5fio _1y2tv656"
                                  role="button"
                                  tabindex="0"
                                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vd7 _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <div role="tooltip">
                                      <div
                                        class="purg7v1 purg7vc9 _15se5fi0 tether-target tether-pinned tether-pinned-left tether-element-attached-top tether-target-attached-bottom tether-enabled tether-pinned-right"
                                        style={{ "--purg7v0": "transparent" }}
                                      ></div>
                                    </div>
                                    <span
                                      class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                                      style={{
                                        "--_6o3wap0": "var(--_1wf7mbl3s)",
                                      }}
                                    >
                                      Filter
                                    </span>
                                  </div>
                                  <svg
                                    aria-hidden="true"
                                    class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                    style={{
                                      "--_1qphaha0": "var(--_1wf7mbl3p)",
                                      marginLeft: 5,
                                    }}
                                  >
                                    <FaAngleDown />
                                  </svg>
                                </div>
                                <div
                                  class="purg7v1 purg7v77 purg7v80 purg7vug purg7vc7 purg7vcf purg7vd0 purg7vd7 _15se5fi2 _15se5fi1v _15se5fio _1y2tv656"
                                  role="button"
                                  tabindex="0"
                                  style={{ "--purg7v0": "var(--_1wf7mbl3k)" }}
                                >
                                  <div
                                    class="purg7v1 purg7vc7 purg7vd7 _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <span
                                      class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap7 _6o3wap9"
                                      style={{
                                        "--_6o3wap0": "var(--_1wf7mbl3s)",
                                      }}
                                    >
                                      Group
                                    </span>
                                  </div>
                                  <svg
                                    aria-hidden="true"
                                    class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                    style={{
                                      "--_1qphaha0": "var(--_1wf7mbl3p)",
                                      marginLeft: 5,
                                    }}
                                  >
                                    <FaAngleDown />
                                  </svg>
                                </div>
                                <div
                                  class="purg7v1 purg7vc9 purg7v64 _15se5fi0"
                                  style={{ "--purg7v0": "transparent" }}
                                ></div>
                                <div
                                  className="search-container"
                                  style={{
                                    "--purg7v0": "transparent",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    className="search-input-wrapper"
                                    style={{
                                      "--purg7v0": "var(--_1wf7mbl3k)",
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "center",
                                      border: "1px solid #ccc",
                                      borderRadius: "50px",
                                      padding: 1,
                                      paddingRight: 15,
                                      backgroundColor: "white",
                                    }}
                                    role="button"
                                  >
                                    <IoSearch
                                      size={20}
                                      style={{
                                        color: "var(--_1wf7mbl3p)",
                                        cursor: "pointer",
                                        marginLeft: "10px",
                                      }}
                                    />
                                    <input
                                      type="text"
                                      className="search-input"
                                      placeholder="Search"
                                      aria-label="Search for items"
                                      role="searchbox"
                                      // value={searchValue}
                                      // onChange={handleSearchChange}
                                      style={{
                                        flex: 1,
                                        border: "none",
                                        outline: "none",
                                        fontSize: "16px",
                                        height: "50%",
                                        width: "70%",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="purg7v1 purg7vc9 purg7v63 _15se5fi0"
                              style={{ "--purg7v0": "transparent" }}
                            >
                              <button
                                class="_1nz7aia3 _1nz7aia5 flex justify-center items-center"
                                aria-expanded="false"
                                aria-haspopup="menu"
                                data-state="closed"
                                id="radix-:rs:"
                                type="button"
                                style={{
                                  "--_1qphaha0": "var(--_1wf7mbl3p)",
                                  padding: 15,
                                  gap: 10,
                                }}
                              >
                                <AiOutlineBars color="#ccc" />

                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{ "--_6o3wap0": "var(--seicjt3j)" }}
                                >
                                  Bulk edit
                                </span>
                              </button>
                            </div>
                            <div class="ckhy410" onClick={openModal}>
                              <button
                                class="_1nz7aia3 _1nz7aia4"
                                type="button"
                                style={{
                                  "--_1nz7aia2": "var(--_1wf7mbl52)",
                                  "--_1nz7aia1": "var(--_1wf7mbl51)",
                                  "--_1nz7aia0": "none",
                                  width: "100%",
                                  textWrap: "nowrap",
                                }}
                                disabled={
                                  role !== "admin" && role !== "super_admin"
                                }
                              >
                                <svg
                                  aria-hidden="true"
                                  class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                  style={{ "--_1qphaha0": "var(--seicjt3i)" }}
                                >
                                  <IoMdAdd size={25} />
                                </svg>
                                <span
                                  class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9"
                                  style={{
                                    "--_6o3wap0": "var(--seicjt3d)",
                                    textWrap: "nowrap",
                                  }}
                                >
                                  New employee
                                </span>
                              </button>
                            </div>
                            {isModalOpen && (
                              <div className="modal z-10">
                                <div className="modal-content">
                                  <AddEmployee closeModal={closeModal} />
                                </div>
                              </div>
                            )}
                            <div>
                              {/* Existing Menu or Other Buttons Here */}

                              {/* Trigger Button for the New Menu */}
                              <button
                                type="button"
                                id="radix-:ru:"
                                aria-haspopup="menu"
                                aria-expanded={isSecondMenuOpen}
                                onClick={handleSecondMenuOpen}
                                style={{
                                  border: "none",
                                  background: "none",
                                  cursor: "pointer",
                                }}
                              >
                                <button
                                  className="_1nz7aia3 _1nz7aia5"
                                  aria-label="Show more"
                                  type="button"
                                  style={{
                                    "--_1nz7aia2": "var(--_1wf7mbl4v)",
                                    "--_1nz7aia1": "var(--_1wf7mbl4v)",
                                    "--_1nz7aia0": "none",
                                  }}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                    style={{ "--_1qphaha0": "var(--seicjt3o)" }}
                                  >
                                    <RiMore2Fill size={24} color="#ccc" />
                                  </svg>
                                </button>
                              </button>

                              {/* MUI Menu for the Second Trigger */}
                              <Menu
                                id="second-menu"
                                anchorEl={menuAnchorEl}
                                open={isSecondMenuOpen}
                                onClose={handleSecondMenuClose}
                                MenuListProps={{
                                  "aria-labelledby": "radix-:ru:",
                                }}
                              >
                                <MenuItem onClick={handleExportData}>
                                  Export Employee Data
                                </MenuItem>
                                <MenuItem onClick={handleSecondMenuClose}>
                                  Import Employee Data
                                </MenuItem>
                                {/* <MenuItem onClick={handleSecondMenuClose}>
                                  Option C
                                </MenuItem> */}
                              </Menu>
                            </div>
                          </div>
                          <div
                            class="purg7v1 purg7vx purg7vc9 _15se5fio _15se5fi1 _15se5fi1v _1y2tv656"
                            style={{ "--purg7v0": "transparent", zIndex: 1 }}
                          >
                            <div
                              style={{
                                clipPath:
                                  "inset(0 0 0 0 round var(--_1wf7mbl13))",
                              }}
                            >
                              <div
                                class="purg7v1 purg7vx purg7vc9 purg7vuu _15se5fi0"
                                style={{ "--purg7v0": "transparent" }}
                              >
                                <table class="_1crjfjs0 _1crjfjs1 _1crjfjs71 hackSafari">
                                  <thead>
                                    <tr class="_3oac2m0  undefined">
                                      <th
                                        class="_1gp55io8 _1gp55ioai"
                                        style={{ width: "120px" }}
                                      >
                                        <div
                                          class="purg7v1 purg7v3x purg7vc7 purg7vcf purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <div
                                            class="purg7v1 purg7vc7 purg7vcf _15se5fi0"
                                            role="button"
                                            tabindex="0"
                                            style={{
                                              "--purg7v0": "transparent",
                                            }}
                                          >
                                            <div class="_19fhzu70">
                                              <div class="_19fhzu75">
                                                <input
                                                  id=":r1c:"
                                                  type="checkbox"
                                                  aria-checked="false"
                                                  aria-label="Select all"
                                                  class="_19fhzu77 _19fhzu7a"
                                                  value=""
                                                />
                                                <div class="_19fhzu76"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8 ml-2"
                                        role="columnheader"
                                        aria-sort="ascending"
                                        aria-label="sort by first_name in ascending order"
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vcx purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <button
                                            type="button"
                                            class="_15ojh3a1 _15ojh3a0"
                                          >
                                            <div
                                              class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wapx _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3s)",
                                                }}
                                              >
                                                <span
                                                  title="First name"
                                                  class="_1sco1wt2"
                                                  style={{
                                                    "--_1sco1wt0": 1,
                                                    paddingLeft: "10px",
                                                  }}
                                                >
                                                  First name
                                                </span>
                                              </span>
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <div class="_6pjm5v0">
                                                  <div class="_6pjm5v1">
                                                    <svg
                                                      aria-hidden="true"
                                                      class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                      style={{
                                                        "--_1qphaha0":
                                                          "var(--_1wf7mbl3s)",
                                                      }}
                                                    >
                                                      <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                    </svg>
                                                  </div>
                                                  <div class="_6pjm5v2">
                                                    <svg
                                                      aria-hidden="true"
                                                      class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                      style={{
                                                        "--_1qphaha0":
                                                          "var(--_1wf7mbl3o)",
                                                      }}
                                                    >
                                                      <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8"
                                        role="columnheader"
                                        aria-sort="ascending"
                                        aria-label="sort by last_name in ascending order"
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vcx purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <button
                                            type="button"
                                            class="_15ojh3a1 _15ojh3a0"
                                          >
                                            <div
                                              class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wapx _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3r)",
                                                }}
                                              >
                                                <span
                                                  title="Last name"
                                                  class="_1sco1wt2"
                                                  style={{ "--_1sco1wt0": 1 }}
                                                >
                                                  Last name
                                                </span>
                                              </span>
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                  style={{
                                                    "--_1qphaha0":
                                                      "var(--_1wf7mbl3p)",
                                                  }}
                                                >
                                                  <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8 ml-2"
                                        role="columnheader"
                                        aria-sort="ascending"
                                        aria-label="sort by job in ascending order"
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vcx purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <button
                                            type="button"
                                            class="_15ojh3a1 _15ojh3a0"
                                          >
                                            <div
                                              class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wapx _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3r)",
                                                }}
                                              >
                                                <span
                                                  title="Job"
                                                  class="_1sco1wt2"
                                                  style={{ "--_1sco1wt0": 1 }}
                                                >
                                                  Job
                                                </span>
                                              </span>
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                  style={{
                                                    "--_1qphaha0":
                                                      "var(--_1wf7mbl3p)",
                                                  }}
                                                >
                                                  <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8"
                                        role="columnheader"
                                        aria-sort="ascending"
                                        aria-label="sort by starts_on in ascending order"
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vcx purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <button
                                            type="button"
                                            class="_15ojh3a1 _15ojh3a0"
                                          >
                                            <div
                                              class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wapx _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3r)",
                                                }}
                                              >
                                                <span
                                                  title="Hired"
                                                  class="_1sco1wt2"
                                                  style={{
                                                    "--_1sco1wt0": 1,
                                                    paddingLeft: "15px",
                                                  }}
                                                >
                                                  Hired
                                                </span>
                                              </span>
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                  style={{
                                                    "--_1qphaha0":
                                                      "var(--_1wf7mbl3p)",
                                                  }}
                                                >
                                                  <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8"
                                        role="columnheader"
                                        aria-sort="ascending"
                                        aria-label="sort by status in ascending order"
                                      >
                                        <div
                                          class="purg7v1 purg7vc7 purg7vcx purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        >
                                          <button
                                            type="button"
                                            class="_15ojh3a1 _15ojh3a0"
                                          >
                                            <div
                                              class="purg7v1 purg7vx purg7vc7 purg7vcf purg7vd6 _15se5fi0"
                                              style={{
                                                "--purg7v0": "transparent",
                                              }}
                                            >
                                              <span
                                                class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wapx _6o3wapz _6o3wap11"
                                                style={{
                                                  "--_6o3wap0":
                                                    "var(--_1wf7mbl3r)",
                                                }}
                                              >
                                                <span
                                                  title="Status"
                                                  class="_1sco1wt2"
                                                  style={{
                                                    "--_1sco1wt0": 1,
                                                    paddingLeft: "15px",
                                                  }}
                                                >
                                                  Status
                                                </span>
                                              </span>
                                              <div
                                                class="purg7v1 purg7vc9 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <svg
                                                  aria-hidden="true"
                                                  class="_1qphaha1 _1qphaha3 _1qphaha6 _1qphaha7"
                                                  style={{
                                                    "--_1qphaha0":
                                                      "var(--_1wf7mbl3p)",
                                                  }}
                                                >
                                                  <use xlink:href="/assets/small-symbols.npd95zexj0.svg#caret-double"></use>
                                                </svg>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        class="_1gp55io8"
                                        style={{ width: 120 }}
                                      >
                                        <div
                                          class="purg7v1 purg7v3x purg7vc7 purg7vcf purg7vd7 _15se5fi0"
                                          style={{ "--purg7v0": "transparent" }}
                                        ></div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {employeeList.length > 0 &&
                                      employeeList.map((emp) => {
                                        return (
                                          <tr class="_3oac2m0  undefined">
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="purg7v1 purg7v78 purg7v83 purg7vx purg7v3x purg7vc7 purg7vcf purg7vda _15se5fi0"
                                                role="button"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                }}
                                              >
                                                <div class="_19fhzu70">
                                                  <div class="_19fhzu75">
                                                    <input
                                                      id=":r1d:"
                                                      type="checkbox"
                                                      aria-checked="false"
                                                      aria-label="Cristobal Nájera"
                                                      class="_19fhzu77 _19fhzu7a"
                                                      value=""
                                                    />
                                                    <div class="_19fhzu76"></div>
                                                  </div>
                                                </div>
                                                {emp.userId?.photo ? (
                                                  <div
                                                    class="purg7v1 purg7vc9 purg7v65 _15se5fi0"
                                                    style={{
                                                      "--purg7v0":
                                                        "transparent",
                                                    }}
                                                  >
                                                    <div
                                                      data-state="closed"
                                                      onClick={() =>
                                                        handleEdit(
                                                          emp?.userId?._id
                                                        )
                                                      }
                                                      style={{
                                                        display: "block",
                                                      }}
                                                    >
                                                      <div
                                                        class="purg7v1 purg7vd purg7v3d purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                                                        style={{
                                                          "--purg7v0":
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          class="cp7gaj0"
                                                          style={{
                                                            backgroundImage: `url(${emp.userId?.photo})`,
                                                            backgroundColor:
                                                              "transparent",
                                                            width: "50px",
                                                            height: "50px",
                                                          }}
                                                        ></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <div
                                                    class="purg7v1 purg7vc9 purg7v65 _15se5fi0"
                                                    style={{
                                                      "--purg7v0":
                                                        "transparent",
                                                    }}
                                                  >
                                                    <a
                                                      data-state="closed"
                                                      href="/employees/2341197"
                                                      style={{
                                                        display: "block",
                                                      }}
                                                    >
                                                      <div
                                                        class="purg7v1 purg7vd purg7v3d purg7vc9 purg7vv2 purg7v63 _15se5fi0"
                                                        style={{
                                                          "--purg7v0":
                                                            "transparent",
                                                        }}
                                                      >
                                                        <div
                                                          class="_1319drc8 _1319drc4 px-3"
                                                          aria-label="Mahadeb Dutta"
                                                          role="img"
                                                        >
                                                          {emp?.userId?.firstName
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                          {emp?.userId?.lastName
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>
                                                )}
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="_1gp55io6"
                                                onClick={() =>
                                                  handleEdit(emp?.userId?._id)
                                                }
                                              >
                                                <span
                                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3s)",
                                                  }}
                                                >
                                                  <span
                                                    title="Cristobal"
                                                    class="_1sco1wt2"
                                                    style={{
                                                      "--_1sco1wt0": 1,
                                                    }}
                                                  >
                                                    {emp?.userId?.firstName}
                                                  </span>
                                                </span>
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="_1gp55io6"
                                                onClick={() =>
                                                  handleEdit(emp?.userId?._id)
                                                }
                                              >
                                                <span
                                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap6 _6o3wap9"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3s)",
                                                  }}
                                                >
                                                  {emp?.userId?.lastName}
                                                </span>
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="_1gp55io6"
                                                onClick={() =>
                                                  handleEdit(emp?.userId?._id)
                                                }
                                              >
                                                <span
                                                  class="_6o3wap1 _6o3wapm _6o3wapu _6o3wap6 _6o3wap9"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3s)",
                                                  }}
                                                >
                                                  {emp.jobTitle}
                                                </span>
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="_1gp55io6"
                                                onClick={() =>
                                                  handleEdit(emp?.userId?._id)
                                                }
                                              >
                                                <span
                                                  class="_6o3wap1 _6o3wapm _6o3wapv _6o3wap6 _6o3wap9 _6o3wapy _6o3wap11"
                                                  style={{
                                                    "--_6o3wap0":
                                                      "var(--_1wf7mbl3r)",
                                                  }}
                                                >
                                                  <span
                                                    title="5 days ago"
                                                    class="_1sco1wt2"
                                                    style={{
                                                      "--_1sco1wt0": 1,
                                                    }}
                                                  >
                                                    {moment(
                                                      emp.hireDate
                                                    ).fromNow()}
                                                  </span>
                                                </span>
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="_1gp55io6"
                                                onClick={() =>
                                                  handleEdit(emp?.userId?._id)
                                                }
                                              >
                                                <div
                                                  class="purg7v1 purg7vc7 _15se5fi0"
                                                  style={{
                                                    "--purg7v0": "transparent",
                                                  }}
                                                >
                                                  <div
                                                    class={`_1f91gq25 _1f91gq2v ${
                                                      emp?.employmentStatus ===
                                                      "active"
                                                        ? "_1f91gq2a"
                                                        : "_1f91gq2g"
                                                    }`}
                                                  >
                                                    <div class="_1f91gq20">
                                                      <div
                                                        class="_1m2pwdr0 _1m2pwdr6 _1m2pwdr8"
                                                        style={{
                                                          minWidth: "10px",
                                                          minHeight: "10px",
                                                          backgroundColor:
                                                            emp?.employmentStatus ===
                                                            "active"
                                                              ? "rgb(57, 181, 190)"
                                                              : "rgb(245, 186, 88)",
                                                        }}
                                                      ></div>
                                                    </div>
                                                    <div
                                                      class="_6o3wap1 _6o3wapl _6o3wapu _6o3wap7 _6o3wap9 _6o3wapy _6o3wap10 _6o3wap11"
                                                      style={{
                                                        "--_6o3wap0":
                                                          "var(--_1wf7mbl3s)",
                                                      }}
                                                    >
                                                      <span
                                                        title="status"
                                                        class="_1sco1wt2"
                                                        style={{
                                                          "--_1sco1wt0": 1,
                                                        }}
                                                      >
                                                        {emp?.employmentStatus}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </td>
                                            <td
                                              class="_1gp55io0 _1gp55io3"
                                              style={{
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                              }}
                                            >
                                              <div
                                                class="purg7v1 purg7vbk purg7vc7 purg7vcy purg7vd8 _15se5fi0"
                                                style={{
                                                  "--purg7v0": "transparent",
                                                  paddingRight: 10,
                                                }}
                                              >
                                                <button
                                                  type="button"
                                                  id="basic-button"
                                                  aria-controls={
                                                    open
                                                      ? "basic-menu"
                                                      : undefined
                                                  }
                                                  aria-haspopup="true"
                                                  aria-expanded={
                                                    open ? "true" : undefined
                                                  }
                                                  onClick={handleClick}
                                                  disabled={
                                                    role !== "admin" &&
                                                    role !== "super_admin"
                                                  }
                                                >
                                                  <button
                                                    class="_1nz7aia3 _1nz7aia5"
                                                    type="button"
                                                    style={{
                                                      "--_1nz7aia2":
                                                        "var(--_1wf7mbl4v)",
                                                      "--_1nz7aia1":
                                                        "var(--_1wf7mbl4v",
                                                      "--_1nz7aia0": "none",
                                                    }}
                                                  >
                                                    <svg
                                                      aria-hidden="true"
                                                      class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                                      style={{
                                                        "--_1qphaha0":
                                                          "var(--seicjt3o)",
                                                      }}
                                                    >
                                                      <RiMore2Fill
                                                        size={24}
                                                        color="#ccc"
                                                      />
                                                    </svg>
                                                  </button>
                                                </button>
                                                <Menu
                                                  id="basic-menu"
                                                  anchorEl={anchorEl}
                                                  open={open}
                                                  onClose={handleClose}
                                                  MenuListProps={{
                                                    "aria-labelledby":
                                                      "basic-button",
                                                  }}
                                                >
                                                  <MenuItem
                                                    onClick={() =>
                                                      handleDelete(emp?._id)
                                                    }
                                                    class="text-red-500 p-1 px-2 font-semibold"
                                                  >
                                                    Terminated Employee
                                                  </MenuItem>
                                                </Menu>
                                                <button
                                                  class="_1nz7aia3 _1nz7aia5"
                                                  type="button"
                                                  style={{
                                                    "--_1nz7aia2":
                                                      "var(--_1wf7mbl4v)",
                                                    "--_1nz7aia1":
                                                      "var(--_1wf7mbl4v",
                                                    "--_1nz7aia0": "none",
                                                  }}
                                                  onClick={() =>
                                                    handleEdit(emp?.userId?._id)
                                                  }
                                                >
                                                  <svg
                                                    aria-hidden="true"
                                                    class="_1qphaha1 _1qphaha4 _1qphaha6 _1qphaha7"
                                                    style={{
                                                      "--_1qphaha0":
                                                        "var(--seicjt3o)",
                                                    }}
                                                  >
                                                    <FaArrowRight
                                                      size={24}
                                                      color="#ccc"
                                                    />
                                                  </svg>
                                                </button>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>
                                </table>
                              </div>
                              <div class="_1imiqi60 _1imiqi61">
                                <div
                                  class="purg7v1 purg7v79 purg7v82 purg7vc7 purg7vd8 purg7v64 _15se5fi2l _15se5fi1y _15se5fi3s"
                                  style={{ "--purg7v0": "var(--_1wf7mbl3m)" }}
                                >
                                  <div
                                    class="purg7v1 purg7vx purg7vc9 _15se5fi0"
                                    style={{ "--purg7v0": "transparent" }}
                                  >
                                    <span
                                      class="_6o3wap1 _6o3wapk _6o3wapu _6o3wap7 _6o3wap9"
                                      style={{
                                        "--_6o3wap0": "var(--_1wf7mbl3r)",
                                      }}
                                    >
                                      Showing {employeeList.length} items
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default EmployeePage;
