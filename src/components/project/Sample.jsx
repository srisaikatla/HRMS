import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import HolidayTab from "../components/hr/holiday/HolidayList";
import AllEmployees from "../components/hr/employe/AllEmployees";
import LeaveRequest from "../components/hr/employe/LeaveRequest";
import Attendance from "../components/hr/employe/Attendance";
import DepartmentList from "../components/hr/employe/DepartmentList";
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
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaUser,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaClipboardList,
  FaBuilding,
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";

const SideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hr Dashboard");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showHrManagementOptions, setShowHrManagementOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    {
      title: "HR Management",
      icon: <FaUserFriends />,
      hasSubOptions: true,
    },
    { title: "PayRoll", icon: <FaMoneyCheckAlt /> },
    { title: "Reports", icon: <FaFileAlt />, hasSubOptions: true },
    { title: "Accounts", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Authentication", icon: <FaLock />, hasSubOptions: true },
  ];

  const employeeOptions = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Leave Requests", icon: <FaClipboardList /> },
    { title: "Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },
  ];

  const projectOptions = [
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", icon: <FaFileAlt /> },
    { title: "Chat", icon: <FaUser /> },
    { title: "Project", icon: <FaTasks />, hasSubOptions: true },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", icon: <GoProjectSymlink /> },
    { title: "Project List", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", icon: <GrProjects /> },
    { title: "Project Detail", icon: <TbListDetails /> },
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

  const authOptions = [
    { title: "Login", link: "/login", icon: <FaBuilding /> },
    { title: "Register", link: "/register", icon: <FaBuilding /> },
    {
      title: "Forgot Password",
      link: "/forget-password",
      icon: <FaBuilding />,
    },
    { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  ];

  const handleOptionClick = (option) => {
    switch (option.title) {
      case "HR Management":
        setShowHrManagementOptions(!showHrManagementOptions);
        break;
      case "Employee":
        setShowEmployeeOptions(!showEmployeeOptions);
        break;
      case "Project":
        setShowProjectOptions(!showProjectOptions);
        break;
      case "Reports":
        setShowReportOptions(!showReportOptions);
        break;
      case "Accounts":
        setShowAccountOptions(!showAccountOptions);
        break;
      case "Authentication":
        setShowAuthOptions(!showAuthOptions);
        break;
      default:
        setActiveTab(option.title);
        setShowEmployeeOptions(false);
        setShowProjectOptions(false);
        setShowReportOptions(false);
        setShowAccountOptions(false);
        setShowAuthOptions(false);
        break;
    }
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleOptionClickNavigate = (authOption) => {
    navigate(authOption.link);
  };

  return (
    <div className="relative h-auto bg-[#0098f1] bg-opacity-10">
      <NavBar />
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
              <p className="text-[16px] pl-2">Welcome User</p>
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
          <div className="pr-2">
            <ul className="pt-3 pr-1">
              {options.map((option) => (
                <React.Fragment key={option.title}>
                  <li
                    className={`flex justify-between text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                      activeTab === option.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="flex items-center">
                      <span className="text-[20px]">{option.icon}</span>
                      {!isSidebarCollapsed && (
                        <span className="pl-5">{option.title}</span>
                      )}
                    </div>
                    {option.hasSubOptions &&
                      (!isSidebarCollapsed ? (
                        <span className="text-[20px] pr-3">
                          {showHrManagementOptions ||
                          showEmployeeOptions ||
                          showReportOptions ||
                          showAccountOptions ||
                          showAuthOptions ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </span>
                      ) : (
                        <span className="text-[20px] pr-3">
                          <FaChevronDown />
                        </span>
                      ))}
                  </li>
                  {option.title === "HR Management" &&
                    showHrManagementOptions && (
                      <ul className="">
                        <li
                          className="flex justify-between text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out"
                          onClick={() =>
                            handleOptionClick({ title: "Employee" })
                          }
                        >
                          <div className="flex items-center">
                            <span className="text-[20px]">
                              <FaUserFriends />
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-5">Employee</span>
                            )}
                          </div>
                          {showEmployeeOptions && !isSidebarCollapsed ? (
                            <span className="text-[20px] pr-3">
                              <FaChevronUp />
                            </span>
                          ) : (
                            <span className="text-[20px] pr-3">
                              <FaChevronDown />
                            </span>
                          )}
                        </li>
                        {showEmployeeOptions && (
                          <ul className="">
                            {employeeOptions.map((employeeOption) => (
                              <li
                                key={employeeOption.title}
                                className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                                  activeTab === employeeOption.title
                                    ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                    : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                                }`}
                                onClick={() =>
                                  handleOptionClick(employeeOption)
                                }
                              >
                                <div className="flex items-center">
                                  <span className="text-[20px]">
                                    {employeeOption.icon}
                                  </span>
                                  {!isSidebarCollapsed && (
                                    <span className="pl-5">
                                      {employeeOption.title}
                                    </span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </ul>
                    )}
                  {option.title === "Reports" && showReportOptions && (
                    <ul className="">
                      {reportOptions.map((reportOption) => (
                        <li
                          key={reportOption.title}
                          className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                            activeTab === reportOption.title
                              ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                              : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                          }`}
                          onClick={() => handleOptionClick(reportOption)}
                        >
                          <div className="flex items-center">
                            <span className="text-[20px]">
                              {reportOption.icon}
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-5">{reportOption.title}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {option.title === "Accounts" && showAccountOptions && (
                    <ul className="">
                      {accountOptions.map((accountOption) => (
                        <li
                          key={accountOption.title}
                          className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                            activeTab === accountOption.title
                              ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                              : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                          }`}
                          onClick={() => handleOptionClick(accountOption)}
                        >
                          <div className="flex items-center">
                            <span className="text-[20px]">
                              {accountOption.icon}
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-5">
                                {accountOption.title}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {option.title === "Authentication" && showAuthOptions && (
                    <ul className="">
                      {authOptions.map((authOption) => (
                        <li
                          key={authOption.title}
                          className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                            activeTab === authOption.title
                              ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                              : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                          }`}
                          onClick={() => handleOptionClickNavigate(authOption)}
                        >
                          <div className="flex items-center">
                            <span className="text-[20px]">
                              {authOption.icon}
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-5">{authOption.title}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
        {selectedHeader === "Project" && (
          <div className="pr-2">
            <ul className="pt-3 pr-1">
              {projectOptions.map((option) => (
                <React.Fragment key={option.title}>
                  <li
                    className={`flex justify-between text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                      activeTab === option.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="flex items-center">
                      <span className="text-[20px]">{option.icon}</span>
                      {!isSidebarCollapsed && (
                        <span className="pl-5">{option.title}</span>
                      )}
                    </div>
                    {option.hasSubOptions &&
                      (!isSidebarCollapsed ? (
                        <span className="text-[20px] pr-3">
                          {showProjectOptions ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </span>
                      ) : (
                        <span className="text-[20px] pr-3">
                          <FaChevronDown />
                        </span>
                      ))}
                  </li>
                  {option.title === "Project" && showProjectOptions && (
                    <ul className="">
                      {projectDropdownOptions.map((projectDropdownOption) => (
                        <li
                          key={projectDropdownOption.title}
                          className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer hover:bg-[#008ef5] transition duration-300 ease-in-out ${
                            activeTab === projectDropdownOption.title
                              ? "bg-white  rounded-r-full text-[#ef5f2b]"
                              : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                          }`}
                          onClick={() =>
                            handleOptionClick(projectDropdownOption)
                          }
                        >
                          <div className="flex items-center">
                            <span className="text-[20px]">
                              {projectDropdownOption.icon}
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-5">
                                {projectDropdownOption.title}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className={`flex-1 ml-4 transition-all ${
          isSidebarCollapsed ? "ml-[100px]" : "ml-[240px]"
        }`}
      >
        {activeTab === "Hr Dashboard" && <HrDashboard />}
        {activeTab === "Holiday" && <HolidayTab />}
        {activeTab === "Events" && <Events />}
        {activeTab === "Activities" && <Activities />}
        {activeTab === "HR Social" && <HrSocial />}
        {activeTab === "All Employees" && <AllEmployees />}
        {activeTab === "Leave Requests" && <LeaveRequest />}
        {activeTab === "Attendance" && <Attendance />}
        {activeTab === "Department" && <DepartmentList />}
        {activeTab === "Account Payment" && <AccountPayments />}
        {activeTab === "Account Expenses" && <AccountExpenses />}
        {activeTab === "Account Invoice" && <AccountInvoice />}
        {activeTab === "Report Invoice" && <ReportInvoice />}
        {activeTab === "Report Expenses" && <ReportExpenses />}
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
      </div>
    </div>
  );
};

export default SideBar;
