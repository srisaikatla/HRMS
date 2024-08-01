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
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    { title: "Employee", icon: <FaUserFriends /> },
    { title: "PayRoll", icon: <FaMoneyCheckAlt /> },
    { title: "Reports", icon: <FaFileAlt /> },
    { title: "Accounts", icon: <FaMoneyCheckAlt /> },
    { title: "Authentication", icon: <FaLock /> },
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
    { title: "Project", icon: <FaTasks /> },
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
      case "Employee":
        setShowEmployeeOptions(!showEmployeeOptions);
        break;
      case "Projects":
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
  // Initialize navigate function

  const handleOptionClickNavigate = (authOption) => {
    navigate(authOption.link); // Navigate to the link specified in authOption
  };
  return (
    <div className="relative h-auto bg-[#0098f1]  bg-opacity-10">
      <NavBar />
      <div
        className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
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
              <p className="text-[16px] pl-2">Welcome User</p>
            </div>
          )}
        </div>

        {/*  */}
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
          <div className="mt-4">
            {options.map((option, index) => (
              <div key={index}>
                <div
                  className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                    activeTab === option.title
                      ? "bg-white rounded-r-full text-[#ef5f2b]"
                      : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-xl">{option.icon}</span>
                  {!isSidebarCollapsed && (
                    <span className="pl-2">{option.title}</span>
                  )}
                  {!isSidebarCollapsed &&
                    (option.title === "Employee" ? (
                      showEmployeeOptions ? (
                        <FaChevronUp className="ml-auto" />
                      ) : (
                        <FaChevronDown className="ml-auto" />
                      )
                    ) : option.title === "Project" ? (
                      showProjectOptions ? (
                        <FaChevronUp className="ml-auto " />
                      ) : (
                        <FaChevronDown className="ml-auto" />
                      )
                    ) : option.title === "Reports" ? (
                      showReportOptions ? (
                        <FaChevronUp className="ml-auto" />
                      ) : (
                        <FaChevronDown className="ml-auto" />
                      )
                    ) : option.title === "Accounts" ? (
                      showAccountOptions ? (
                        <FaChevronUp className="ml-auto" />
                      ) : (
                        <FaChevronDown className="ml-auto" />
                      )
                    ) : option.title === "Authentication" ? (
                      showAuthOptions ? (
                        <FaChevronUp className="ml-auto" />
                      ) : (
                        <FaChevronDown className="ml-auto" />
                      )
                    ) : null)}
                </div>
                {option.title === "Employee" && showEmployeeOptions && (
                  <div className="">
                    {employeeOptions.map((empOption, empIndex) => (
                      <div
                        key={empIndex}
                        className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                          activeTab === empOption.title
                            ? "bg-white bg-opacity-60 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => handleOptionClick(empOption)}
                      >
                        <span className="text-xl">{empOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="pl-2">{empOption.title}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {option.title === "Projects" && showProjectOptions && (
                  <div className="">
                    {projectOptions.map((projOption, projIndex) => (
                      <div
                        key={projIndex}
                        className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                          activeTab === projOption.title
                            ? "bg-white  rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => handleOptionClick(projOption)}
                      >
                        <span className="text-xl">{projOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="pl-2 b">{projOption.title}</span>
                        )}
                      </div>
                    ))}
                    {showProjectOptions && (
                      <div className="">
                        {projectDropdownOptions.map((projOption, projIndex) => (
                          <div
                            key={projIndex}
                            className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                              activeTab === projOption.title
                                ? "bg-white rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => handleOptionClick(projOption)}
                          >
                            <span className="text-xl">{projOption.icon}</span>
                            {!isSidebarCollapsed && (
                              <span className="pl-2">{projOption.title}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {option.title === "Reports" && showReportOptions && (
                  <div className="">
                    {reportOptions.map((reportOption, reportIndex) => (
                      <div
                        key={reportIndex}
                        className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                          activeTab === reportOption.title
                            ? "bg-white bg-opacity-60 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => handleOptionClick(reportOption)}
                      >
                        <span className="text-xl">{reportOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="pl-2">{reportOption.title}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {option.title === "Accounts" && showAccountOptions && (
                  <div className="">
                    {accountOptions.map((accountOption, accountIndex) => (
                      <div
                        key={accountIndex}
                        className={`flex items-center p-3 my-1 px-4 cursor-pointer ${
                          activeTab === accountOption.title
                            ? "bg-white bg-opacity-60 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => handleOptionClick(accountOption)}
                      >
                        <span className="text-xl">{accountOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="pl-2">{accountOption.title}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {option.title === "Authentication" && showAuthOptions && (
                  <div className="">
                    {authOptions.map((authOption, authIndex) => (
                      <div
                        key={authIndex}
                        className={`flex items-center my-1 p-3 px-4 cursor-pointer ${
                          activeTab === authOption.title
                            ? "bg-white bg-opacity-60 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-60  hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => handleOptionClickNavigate(authOption)}
                      >
                        <span className="text-xl">{authOption.icon}</span>
                        {!isSidebarCollapsed && (
                          <span className="pl-2">{authOption.title}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {/*  */}
        {selectedHeader === "Project" && (
          <div className="mt-4">
            {projectOptions.map((option, index) => (
              <div key={index}>
                <div
                  className={`flex items-center p-3 px-4 my-1  cursor-pointer ${
                    activeTab === option.title
                      ? "bg-white rounded-r-full text-[#ef5f2b]"
                      : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-full"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-xl">{option.icon}</span>
                  {!isSidebarCollapsed && (
                    <span className="pl-2">{option.title}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`flex-1 ml-4 transition-all ${
          isSidebarCollapsed ? "ml-[100px]" : "ml-[240px]"
        }`}
      >
        <div className="">
          {/* Content of the right-side components */}
          {activeTab === "Hr Dashboard" && <HrDashboard />}
          {activeTab === "Holiday" && <HolidayTab />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Activities" && <Activities />}
          {activeTab === "HR Social" && <HrSocial />}
          {activeTab === "All Employees" && <AllEmployees />}
          {activeTab === "Leave Requests" && <LeaveRequest />}
          {activeTab === "Attendance" && <Attendance />}
          {activeTab === "Department" && <DepartmentList />}
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Inbox" && <Inbox />}
          {activeTab === "Chat" && <Chat />}
          {/* {activeTab === "Project" && <ProjectList />} */}
          {activeTab === "Clients" && <UserList />}
          {activeTab === "Teams" && <Teams />}
          {activeTab === "Tickets" && <Tickets />}
          {activeTab === "Add Project" && <AddProject />}
          {activeTab === "Project List" && <ProjectList />}
          {activeTab === "Project Grid" && <ProjectGrid />}
          {activeTab === "Project Detail" && <ProjectDetails />}
          {activeTab === "Report Invoice" && <ReportInvoice />}
          {activeTab === "Report Expenses" && <ReportExpenses />}
          {activeTab === "Account Payment" && <AccountPayments />}
          {activeTab === "Account Expenses" && <AccountExpenses />}
          {activeTab === "Account Invoice" && <AccountInvoice />}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
