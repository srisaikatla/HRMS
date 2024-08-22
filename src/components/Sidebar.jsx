import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";

import HolidayTab from "../components/hr/holiday/HolidayList";
import AllEmployee from "../components/hr/hr_management/allEmployee/AllEmployee";
import LeaveRequest from "../components/hr/hr_management/leaveRequest/LeaveRequest";

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
// import EmployeImport from "./hr/hr_management/employeImport/EmployeImport";
import Compensation from "./hr/hr_management/compensation/Compensation";
import PayrollDashboard from "./hr/payroll/payroll_dashboard/PayrollDashboard";
import PaySlip from "./hr/payroll/paySlips/PaySlips";
import Settlement from "./hr/payroll/settlement/Settlement";
import PayrollSettings from "./hr/payroll/payroll_setting/PayrollSettings";
import PayrollForms from "./hr/payroll/payroll_forms/PayrollForms";
import OnBoarding from "./hr/hr_management/onBoarding/OnBoarding";
import ITDeclarations from "./hr/hr_management/it_Declarations/ITDeclarations";
import PayrollSummary from "./hr/payroll/payrollSummary/PayrollSummary";
import RunPayRoll from "./hr/payroll/runPayRoll/RunPayroll";

import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaLock,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineSocialDistance } from "react-icons/md";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import {
  FaTasks,
  FaUserFriends,
  FaFileAlt,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";
const SideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hr Dashboard");
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });
  const payrollOptions = [
    { title: "DashBoard", icon: <TbMoneybag /> },
    { title: "Run payroll", icon: <GiPayMoney /> },
    { title: "Payroll Summary", icon: <MdOutlinePayment /> },
    { title: "Payroll settings", icon: <MdAdminPanelSettings /> },

    { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
    { title: "Settlements", icon: <FaMoneyBillTransfer /> },
    { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
  ];

  const authOptions = [
    { title: "Logout", link: "/login", icon: <FaBuilding /> },
    { title: "Register", link: "/register", icon: <FaBuilding /> },
    {
      title: "Forgot Password",
      link: "/forget-password",
      icon: <FaBuilding />,
    },
    { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  ];
  const employeeOptions = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Compensation", icon: <FaBuilding /> },

    { title: "IT Declarations", icon: <FaBuilding /> },
    { title: "Leaves", icon: <FaBuilding /> },
    { title: "Emp Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },

    { title: "Onboarding", icon: <FaBuilding /> },
  ];

  const reportOptions = [
    { title: "Report Invoice", icon: <FaFileAlt /> },
    { title: "Report Expenses", icon: <FaFileAlt /> },
  ];

  const accountOptions = [
    { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
    { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
    { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
  ];
  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    {
      title: "HR Management",
      icon: <FaUserFriends />,
      subOptions: employeeOptions,
    },
    {
      title: "PayRoll",
      icon: <FaMoneyCheckAlt />,
      subOptions: payrollOptions,
    },
    {
      title: "Reports",
      icon: <FaFileAlt />,
      subOptions: reportOptions,
    },
    {
      title: "Accounts",
      icon: <FaMoneyCheckAlt />,
      subOptions: accountOptions,
    },
    {
      title: "Authentication",
      icon: <FaLock />,
      subOptions: authOptions,
    },
  ];
  const projectDropdownOptions = [
    { title: "Add Project", icon: <GoProjectSymlink /> },
    { title: "Project List", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", icon: <GrProjects /> },
    { title: "Project Detail", icon: <TbListDetails /> },
  ];

  const projectOptions = [
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", icon: <FaFileAlt /> },
    { title: "Chat", icon: <FaUser /> },
    {
      title: "Project",
      icon: <FaTasks />,
      subOptions: projectDropdownOptions,
    },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const handleMouseOver = (event, title) => {
    if (isSidebarCollapsed) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        show: true,
        title,
        position: { x: rect.right + 10, y: rect.top },
      });
    }
  };

  const handleMouseOut = () => {
    setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
  };

  return (
    <div className="relative h-auto bg-[#0098f1] bg-opacity-10">
      <NavBar
        onIconClick={handleIconClick}
        options={options}
        projectOptions={projectOptions}
      />
      <div
        className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center pt-10 pb-5 pl-5">
          <IoMdMenu
            className="text-white h-[30px] absolute top-4 cursor-pointer"
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
              <p className="text-[16px] pl-2">
                Welcome {auth.user ? auth.user.firstName : "user"}
              </p>
            </div>
          )}
        </div>

        {!isSidebarCollapsed && (
          <div className="text-[16px] text-white flex justify-around pr-5 pb-3 items-center">
            <span
              className={`cursor-pointer ${
                selectedHeader === "Hr"
                  ? "underline decoration-2 underline-offset-8"
                  : ""
              }`}
              onClick={() => handleHeaderClick("Hr")}
            >
              Hr
            </span>
            <span
              className={`cursor-pointer ${
                selectedHeader === "Project"
                  ? "underline decoration-3 underline-offset-8"
                  : ""
              }`}
              onClick={() => handleHeaderClick("Project")}
            >
              Projects
            </span>
          </div>
        )}
        {selectedHeader === "Hr" && (
          <ForHrSidebar
            isSidebarCollapsed={isSidebarCollapsed}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        )}
        {selectedHeader === "Project" && (
          <ForProjectSidebar
            isSidebarCollapsed={isSidebarCollapsed}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        )}
      </div>

      <div
        className={`flex-1 ml-4 transition-all ${
          isSidebarCollapsed ? "ml-[70px]" : "ml-[240px]"
        }`}
      >
        {activeTab === "Holiday" && <HolidayTab />}
        {activeTab === "Events" && <Events />}
        {activeTab === "Activities" && <Activities />}
        {activeTab === "HR Social" && <HrSocial />}
        {activeTab === "All Employees" && <AllEmployee />}
        {activeTab === "Leaves" && <LeaveRequest />}

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
        {activeTab === "Leaves" && <Leaves />}
        {activeTab === "DashBoard" && <PayrollDashboard />}
        {activeTab === "Payslips" && <PaySlip />}
        {activeTab === "Settlements" && <Settlement />}
        {activeTab === "Payroll settings" && <PayrollSettings />}
        {activeTab === "Payroll Forms" && <PayrollForms />}
        {activeTab === "Onboarding" && <OnBoarding />}
        {activeTab === "IT Declarations" && <ITDeclarations />}
        {activeTab === "Payroll Summary" && <PayrollSummary />}
        {activeTab === "Run payroll" && <RunPayRoll />}
        {activeTab === "Emp Attendance" && <EmployeAttandance />}
        {activeTab === "Leaves" && <Leaves />}
      </div>

      {tooltip.show && (
        <div
          className="absolute  bg-white text-[#e65f2b] p-2 rounded-md shadow-lg z-50"
          style={{
            top: `${tooltip.position.y}px`,
            left: `${tooltip.position.x}px`,
          }}
        >
          {tooltip.title}
        </div>
      )}
    </div>
  );
};

export default SideBar;
