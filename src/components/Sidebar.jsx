import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import HolidayTab from "../components/hr/holiday/HolidayList";
import ViewEmployees from "../components/hr/employe/AllEmployees";
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
import { SiHdfcbank } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiHandDepositFill } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
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
  const [showPayrollOptions, setShowPayrollOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showHrManagementOptions, setShowHrManagementOptions] = useState(false);
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
    { title: "PayRoll", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Reports", icon: <FaFileAlt />, hasSubOptions: true },
    { title: "Accounts", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Authentication", icon: <FaLock />, hasSubOptions: true },
  ];

  const employeeOptions = [
    { title: "New Employee", icon: <FaBuilding /> },
    { title: "View Employees", icon: <FaUsers /> },
    { title: "Compensation", icon: <FaBuilding /> },
    { title: "Employee Import", icon: <FaBuilding /> },
    // { title: "Leave Requests", icon: <FaClipboardList /> },
    // { title: "Attendance", icon: <FaCalendarCheck /> },
    { title: "Department", icon: <FaBuilding /> },

    { title: "Onboarding", icon: <FaBuilding /> },
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
  const payrollOptions = [
    { title: "DashBoard", icon: <TbMoneybag /> },
    { title: "Run payroll", icon: <GiPayMoney /> },
    { title: "Payroll Summary", icon: <MdOutlinePayment /> },
    { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
    // { title: "Advances/loans", icon: <LiaMoneyCheckAltSolid /> },
    { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
    { title: "Settlements", icon: <FaMoneyBillTransfer /> },
    { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
    // { title: "Direct deposits", icon: <PiHandDepositFill /> },
    // { title: "YTD import", icon: <FaMoneyBillTrendUp /> },
    // { title: "Gratuity Calculator", icon: <TbMoneybag /> },
    // { title: "Estimated tax sheet", icon: <BsFileEarmarkSpreadsheet /> },
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
      case "PayRoll":
        setShowPayrollOptions(!showPayrollOptions);
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
        setShowPayrollOptions(false);
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
          <div className="pr-2">
            <ul className="pt-3 pr-1">
              {options.map((option) => (
                <React.Fragment key={option.title}>
                  <li
                    className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${
                      activeTab === option.title
                        ? "bg-white rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="flex items-center">
                      {option.icon}
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {option.title}
                      </span>
                    </div>
                    {!isSidebarCollapsed && option.hasSubOptions && (
                      <span className="pr-5">
                        {option.title === "Employee" && showEmployeeOptions ? (
                          <FaChevronUp />
                        ) : option.title === "Projects" &&
                          showProjectOptions ? (
                          <FaChevronUp />
                        ) : option.title === "Reports" && showReportOptions ? (
                          <FaChevronUp />
                        ) : option.title === "PayRoll" && showPayrollOptions ? (
                          <FaChevronUp />
                        ) : option.title === "Accounts" &&
                          showAccountOptions ? (
                          <FaChevronUp />
                        ) : option.title === "Authentication" &&
                          showAuthOptions ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    )}
                  </li>
                  {/*  */}
                  {/* {!isSidebarCollapsed &&
                    option.title === "Employee" &&
                    showEmployeeOptions && (
                      <ul className="">
                        {employeeOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => setActiveTab(subOption.title)}
                          >
                            {subOption.icon}
                            <span className="pl-2">{subOption.title}</span>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  {!isSidebarCollapsed &&
                    option.title === "HR Management" &&
                    showHrManagementOptions && (
                      <ul className="">
                        <li
                          className={`flex justify-between text-[16px] bg-opacity-50  pl-5 py-3 mb-1 cursor-pointer   ${
                            activeTab === showHrManagementOptions.title
                              ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                              : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                          }`}
                          onClick={() =>
                            handleOptionClick({ title: "Employee" })
                          }
                        >
                          <div className="flex items-center ">
                            <span className="text-[20px]">
                              <FaUserFriends />
                            </span>
                            {!isSidebarCollapsed && (
                              <span className="pl-2">Employee</span>
                            )}
                          </div>
                          {showEmployeeOptions && !isSidebarCollapsed ? (
                            <span className="pr-5">
                              <FaChevronUp />
                            </span>
                          ) : (
                            <span className=" pr-5">
                              <FaChevronDown />
                            </span>
                          )}
                        </li>
                        {!isSidebarCollapsed && showEmployeeOptions && (
                          <ul className="">
                            {employeeOptions.map((employeeOption) => (
                              <li
                                key={employeeOption.title}
                                className={`text-[16px] pl-5 py-3 mb-1 cursor-pointer   ${
                                  activeTab === employeeOption.title
                                    ? "bg-white bg-opacity-30 rounded-r-full text-[#ef5f2b]"
                                    : "hover:bg-white hover:bg-opacity-30 hover:text-[#ef5f2b] hover:rounded-r-full"
                                }`}
                                onClick={() => {
                                  handleOptionClick(employeeOption);
                                  setActiveTab(employeeOption.title);
                                }}
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

                  {!isSidebarCollapsed &&
                    option.title === "Projects" &&
                    showProjectOptions && (
                      <ul className="">
                        {projectOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-between items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => handleOptionClick(subOption)}
                          >
                            <div className="flex items-center">
                              {subOption.icon}
                              <span className="pl-2">{subOption.title}</span>
                            </div>
                            {!isSidebarCollapsed && subOption.hasSubOptions && (
                              <span className="pr-5">
                                {subOption.title === "Project" &&
                                showProjectOptions ? (
                                  <FaChevronUp />
                                ) : (
                                  <FaChevronDown />
                                )}
                              </span>
                            )}
                          </li>
                        ))}

                        {showProjectOptions && (
                          <ul className="pt-3 text-[16px]">
                            {projectDropdownOptions.map((dropdownOption) => (
                              <li
                                key={dropdownOption.title}
                                onClick={() =>
                                  setActiveTab(dropdownOption.title)
                                }
                                className={`${
                                  activeTab === dropdownOption.title
                                    ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                    : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                                } py-2 pl-12 flex items-center cursor-pointer`}
                              >
                                <span className="pr-2">
                                  {dropdownOption.icon}
                                </span>
                                {dropdownOption.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </ul>
                    )}
                  {!isSidebarCollapsed &&
                    option.title === "Reports" &&
                    showReportOptions && (
                      <ul className="">
                        {reportOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => setActiveTab(subOption.title)}
                          >
                            {subOption.icon}
                            <span className="pl-2">{subOption.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  {/*  */}
                  {!isSidebarCollapsed &&
                    option.title === "PayRoll" &&
                    showPayrollOptions && (
                      <ul className="">
                        {payrollOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => setActiveTab(subOption.title)}
                          >
                            {subOption.icon}
                            <span className="pl-2">{subOption.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  {/*  */}
                  {!isSidebarCollapsed &&
                    option.title === "Accounts" &&
                    showAccountOptions && (
                      <ul className="">
                        {accountOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => setActiveTab(subOption.title)}
                          >
                            {subOption.icon}
                            <span className="pl-2">{subOption.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  {!isSidebarCollapsed &&
                    option.title === "Authentication" &&
                    showAuthOptions && (
                      <ul className="">
                        {authOptions.map((authOption) => (
                          <li
                            key={authOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === authOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() =>
                              handleOptionClickNavigate(authOption)
                            }
                          >
                            {authOption.icon}
                            <span className="pl-2">{authOption.title}</span>
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
                    className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${
                      activeTab === option.title
                        ? "bg-white rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="flex items-center">
                      {option.icon}
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {option.title}
                      </span>
                    </div>
                    {!isSidebarCollapsed && option.hasSubOptions && (
                      <span className="pr-5">
                        {option.title === "Project" && showProjectOptions ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    )}
                  </li>
                  {!isSidebarCollapsed &&
                    option.title === "Project" &&
                    showProjectOptions && (
                      <ul className="">
                        {projectDropdownOptions.map((subOption) => (
                          <li
                            key={subOption.title}
                            className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
                              activeTab === subOption.title
                                ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                                : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                            }`}
                            onClick={() => setActiveTab(subOption.title)}
                          >
                            {subOption.icon}
                            <span className="pl-2">{subOption.title}</span>
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
        {activeTab === "View Employees" && <ViewEmployees />}
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
      </div>
    </div>
  );
};

export default SideBar;
