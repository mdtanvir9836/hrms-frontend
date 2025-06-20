import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Authentication Pages
import Signup from "./components/authentication/signup/Signup";
import EmailVerification from "./components/authentication/signup/FirstPage";
import OrganizationAdd from "./components/authentication/signup/OrganizationAdd";
import InterestedPart from "./components/authentication/signup/FifthPage";
import MailSendPage from "./components/authentication/signup/MailSendPage";
import SetPassword from "./components/authentication/signup/SetPassword";
import SecondPage from "./components/authentication/signup/SecondPage";
import ThirdPage from "./components/authentication/signup/ThirdPage";
import FourthPage from "./components/authentication/signup/ForthPage";
import Login from "./components/authentication/signin/Login";

// Home/Dashboard
import CompanySelector from "./components/Home/CompanySelector";
import Dashboard from "./components/Home/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Index from "./components/profile/Index";
import Agreement from "./components/profile/Agreement";
import Personal from "./components/profile/Personal";
import Profile from "./components/profile/Profile";
import MainPage from "./components/sidebar/MainPage";
import EmployeePage from "./components/employee/EmployeePage";
import AddEmployee from "./components/employee/addEmp/AddEmployee";
import EditEmployee from "./components/employee/editEmp/EditEmployee";
import Document from "./components/employee/editEmp/document/Document";
import TimeOff from "./components/leave/timeOff/TimeOff";
import LeaveSettings from "./components/leave/LeaveSettings";
import RequestPage from "./components/inbox/RequestPage";
import MyTimeOff from "./components/Home/MyTimeOff";
import MyDocument from "./components/Home/MyDocument";
import AgreementDocument from "./components/employee/editEmp/document/partOfDocument/Agreement";
import FamilyAndMedical from "./components/employee/editEmp/document/partOfDocument/FamilyAndMedical";
import Id from "./components/employee/editEmp/document/partOfDocument/Id";
import Onboarding from "./components/employee/editEmp/document/partOfDocument/Onboarding";
import Payslip from "./components/employee/editEmp/document/partOfDocument/Payslip";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/organization-setup" element={<OrganizationAdd />} />
        <Route path="/interested-part" element={<InterestedPart />} />
        <Route path="/mail-send" element={<MailSendPage />} />
        <Route path="/set-password/:id" element={<SetPassword />} />

        {/* Multi-Step Signup Process */}
        <Route path="/name-setup" element={<SecondPage />} />
        <Route path="/role-setup" element={<ThirdPage />} />
        <Route path="/company-setup" element={<FourthPage />} />

        {/* Company Selector */}
        <Route path="/company_selector" element={<CompanySelector />} />

        {/* Private Routes */}
        <Route
          path="/teamgrid"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        >
          {/* Nested under MainPage */}
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="me"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          >
            {/* Nested under 'me' */}
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="personal"
              element={
                <PrivateRoute>
                  <Personal />
                </PrivateRoute>
              }
            />
            <Route
              path="agreement"
              element={
                <PrivateRoute>
                  <Agreement />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="timeOff"
            element={
              <PrivateRoute>
                <MyTimeOff />
              </PrivateRoute>
            }
          />
          <Route
            path="document"
            element={
              <PrivateRoute>
                <MyDocument />
              </PrivateRoute>
            }
          />

          <Route
            path="document/:catId"
            element={
              <PrivateRoute>
                <AgreementDocument />
              </PrivateRoute>
            }
          />

          <Route path="employees">
            <Route
              path="list"
              element={
                <PrivateRoute>
                  <EmployeePage />
                </PrivateRoute>
              }
            />
            <Route
              path="add-employee"
              element={
                <PrivateRoute>
                  <AddEmployee />
                </PrivateRoute>
              }
            />
            <Route
              path="edit_employee/:id/employee/document/:catId"
              element={
                <PrivateRoute>
                  <AgreementDocument />
                </PrivateRoute>
              }
            />

            <Route
              path="edit_employee/:id/employee/document/family-and-medical-document"
              element={
                <PrivateRoute>
                  <FamilyAndMedical />
                </PrivateRoute>
              }
            />
            <Route
              path="edit_employee/:id/employee/document/id-document"
              element={
                <PrivateRoute>
                  <Id />
                </PrivateRoute>
              }
            />
            <Route
              path="edit_employee/:id/employee/document/onboarding-document"
              element={
                <PrivateRoute>
                  <Onboarding />
                </PrivateRoute>
              }
            />
            <Route
              path="edit_employee/:id/employee/document/payslip-document"
              element={
                <PrivateRoute>
                  <Payslip />
                </PrivateRoute>
              }
            />
            <Route
              path="edit_employee/:id"
              element={
                <PrivateRoute>
                  <EditEmployee />
                </PrivateRoute>
              }
            >
              <Route
                path="employee/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="employee/personal"
                element={
                  <PrivateRoute>
                    <Personal />
                  </PrivateRoute>
                }
              />
              <Route
                path="employee/agreement"
                element={
                  <PrivateRoute>
                    <Agreement />
                  </PrivateRoute>
                }
              />
              <Route
                path="employee/document"
                element={
                  <PrivateRoute>
                    <Document />
                  </PrivateRoute>
                }
              ></Route>

              <Route
                path="employee/timeoff"
                element={
                  <PrivateRoute>
                    <TimeOff />
                  </PrivateRoute>
                }
              >
                <Route
                  path="leaveSettings"
                  element={
                    <PrivateRoute>
                      <LeaveSettings />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>
          </Route>
          <Route path="inbox">
            <Route
              path="requests"
              element={
                <PrivateRoute>
                  <RequestPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>

        {/* Fallback for Invalid Routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
