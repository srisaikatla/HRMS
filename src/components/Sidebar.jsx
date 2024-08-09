import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import HolidayTab from "../components/hr/holiday/HolidayList";
import ViewEmployees from "../components/hr/employe/AllEmployees";
import LeaveRequest from "../components/hr/employe/LeaveRequest";
import Attendance from "../components/hr/employe/Attendance";
import DepartmentList from "../components/hr/hr_management/department/DepartmentList";
import AccountPayments from "../components/hr/account/AccountPayments";
import AccountExpenses from "../components/hr/account/AccountExpenses";
import AccountInvoice from "../components/hr/account/AccountInvoice";
import ReportInvoice from "../components/hr/report/ReportInvoice";
import ReportExpenses from "../components/hr/report/ReportExpenses";
import { useSelector } from "react-redux";
import ForHrSidebar from "./ForHrSidebar";
import ForProjectSidebar from "./ForProjectSidebar";
import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
import Activities from "../components/hr/activities/Activities";
import Events from "../components/hr/events/Events";
import HrSocial from "../components/hr/hr_social/HrSocial";
import UserList from "../components/hr/user/UserList";
import Dashboard from "../components/project/projectDashboard/Dashboard";
import AddProject from "./project/projecttab/AddProject";
import ProjectGrid from "./project/projecttab/ProjectGrid";
import Tickets from "./project/tickets/Tickets";
import Teams from "./project/teams/Teams";
import Chat from "./project/chat/Chat";
import ProjectList from "./project/projecttab/ProjectList";
import ProjectDetails from "./project/projecttab/ProjectDetail";
import Inbox from "./project/inbox/Inbox";
import { getUser } from "../State/Auth/Action";
import EmployeImport from "./hr/hr_management/employeImport/EmployeImport"
import Compensation from "./hr/hr_management/compensation/Compensation";
import PayrollDashboard from "./hr/payroll/payroll_dashboard/PayrollDashboard";
import PaySlip from "./hr/payroll/paySlips/PaySlips"
import Settlement from "./hr/payroll/settlement/Settlement";
import PayrollSettings from "./hr/payroll/payroll_setting/PayrollSettings";
import PayrollForms from "./hr/payroll/payroll_forms/PayrollForms";
import OnBoarding from "./hr/hr_management/onBoarding/OnBoarding";
import ITDeclarations from "./hr/hr_management/it_Declarations/ITDeclarations";
const SideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hr Dashboard");
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  return (
    <div className="relative h-auto bg-[#0098f1]  bg-opacity-10">
      <NavBar />
      <div
        className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${isSidebarCollapsed ? "w-16" : "w-[240px]"
          } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center pt-10  pb-5 pl-5">
          <IoMdMenu
            className="text-white h-[30px] absolute  top-4 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div>
          {!isSidebarCollapsed && (
            <div className="flex items-center relative top-0 pb-4 px-2">
              <img
                src={profile}
                className="rounded-full w-[50px] h-[50px]"
                alt="Profile"
              />
              <p className="text-[16px] pl-2">Welcome {auth.user ? auth.user.firstName : "user"}</p>
            </div>
          )}
        </div>

        {!isSidebarCollapsed && (
          <div className="text-[16px] text-white flex justify-around pr-5 pb-3 items-center">
            <span
              className={`cursor-pointer ${selectedHeader === "Hr"
                ? "underline decoration-2 underline-offset-8"
                : ""
                }`}
              onClick={() => handleHeaderClick("Hr")}
            >
              Hr
            </span>
            <span
              className={`cursor-pointer ${selectedHeader === "Project"
                ? "underline decoration-3  underline-offset-8"
                : ""
                }`}
              onClick={() => handleHeaderClick("Project")}
            >
              Projects
            </span>
          </div>
        )}
        {selectedHeader === "Hr" && (
          <>
            <ForHrSidebar isSidebarCollapsed={isSidebarCollapsed} activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}

        {selectedHeader === "Project" && (
          <>
            <ForProjectSidebar isSidebarCollapsed={isSidebarCollapsed} activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}
      </div>

      <div
        className={`flex-1 ml-4 transition-all ${isSidebarCollapsed ? "ml-[100px]" : "ml-[240px]"
          }`}
      >
        {activeTab === "Hr Dashboard" && <HrDashboard />}
        {activeTab === "Holiday" && <HolidayTab />}
        {activeTab === "Events" && <Events />}
        {activeTab === "Activities" && <Activities />}
        {activeTab === "HR Social" && <HrSocial />}
        {activeTab === "All Employees" && <ViewEmployees />}
        {/* {activeTab === "Leave Requests" && <LeaveRequest />} */}
        {/* {activeTab === "Attendance" && <Attendance />} */}
        {activeTab === "Department" && <DepartmentList />}
        {activeTab === "Report Invoice" && <ReportInvoice />}
        {activeTab === "Report Expenses" && <ReportExpenses />}
        {activeTab === "Account Payment" && <AccountPayments />}
        {activeTab === "Account Expenses" && <AccountExpenses />}
        {activeTab === "Account Invoice" && <AccountInvoice />}
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Inbox" && <Inbox />}
        {activeTab === "Chat" && <Chat />}
        {activeTab === "Add Project" && <AddProject />}
        {activeTab === "Project List" && <ProjectList />}
        {activeTab === "Project Grid" && <ProjectGrid />}
        {activeTab === "Project Detail" && <ProjectDetails />}
        {activeTab === "Clients" && <UserList />}
        {activeTab === "Teams" && <Teams />}
        {activeTab === "Tickets" && <Tickets />}
        {activeTab === "Employee Import" && <EmployeImport />}
        {activeTab === "Compensation" && <Compensation />}
        {activeTab === "DashBoard" && <PayrollDashboard />}
        {activeTab === "Payslips" && <PaySlip />}
        {activeTab === "Settlements" && <Settlement />}
        {activeTab === "Payroll settings" && <PayrollSettings />}
        {activeTab === "Payroll Forms" && <PayrollForms />}
        {activeTab === "Onboarding" && <OnBoarding />}
        {activeTab === "IT Declarations" && <ITDeclarations />}
      </div>
    </div>
  );
};

export default SideBar;
