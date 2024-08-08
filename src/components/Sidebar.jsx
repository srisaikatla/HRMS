// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { IoMdMenu } from "react-icons/io";
// // import profile from "../assets/hr/employee/profile/profile.jpg";
// // import NavBar from "./NavBar";
// // import HolidayTab from "../components/hr/holiday/HolidayList";
// // import AllEmployees from "../components/hr/employe/AllEmployees";
// // import LeaveRequest from "../components/hr/employe/LeaveRequest";
// // import Attendance from "../components/hr/employe/Attendance";
// // import DepartmentList from "../components/hr/employe/DepartmentList";
// // import AccountPayments from "../components/hr/account/AccountPayments";
// // import AccountExpenses from "../components/hr/account/AccountExpenses";
// // import AccountInvoice from "../components/hr/account/AccountInvoice";
// // import ReportInvoice from "../components/hr/report/ReportInvoice";
// // import ReportExpenses from "../components/hr/report/ReportExpenses";
// // import { useSelector, useDispatch } from "react-redux";
// // import { TbMoneybag } from "react-icons/tb";
// // import { GiPayMoney } from "react-icons/gi";
// // import { MdOutlinePayment } from "react-icons/md";
// // import { MdAdminPanelSettings } from "react-icons/md";
// // import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// // import { LiaMoneyCheckAltSolid } from "react-icons/lia";
// // import { FaMoneyBillTransfer } from "react-icons/fa6";
// // import { GiTakeMyMoney } from "react-icons/gi";
// // import { PiHandDepositFill } from "react-icons/pi";
// // import { FaMoneyBillTrendUp } from "react-icons/fa6";

// // import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
// // import { MdOutlineSocialDistance } from "react-icons/md";
// // import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
// // import { GrProjects } from "react-icons/gr";
// // import { TbListDetails } from "react-icons/tb";
// // // import ForHrSidebar from "./ForHrSidebar";
// // import ForProjectSidebar from "./ForProjectSidebar";
// // import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
// // import Activities from "../components/hr/activities/Activities";
// // import Events from "../components/hr/events/Events";
// // import HrSocial from "../components/hr/hr_social/HrSocial";
// // import UserList from "../components/hr/user/UserList";
// // import Dashboard from "../components/project/projectDashboard/Dashboard";
// // import AddProject from "./project/projecttab/AddProject";
// // import ProjectGrid from "./project/projecttab/ProjectGrid";
// // import Tickets from "./project/tickets/Tickets";
// // import Teams from "./project/teams/Teams";
// // import Chat from "./project/chat/Chat";
// // import ProjectList from "./project/projecttab/ProjectList";
// // import ProjectDetails from "./project/projecttab/ProjectDetail";
// // import Inbox from "./project/inbox/Inbox";
// // import { getUser } from "../State/Auth/Action";
// // import {
// //   FaTachometerAlt,
// //   FaCalendarAlt,
// //   FaCalendarCheck,
// //   FaTasks,
// //   FaUserFriends,
// //   FaMoneyCheckAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaLock,
// //   FaChevronDown,
// //   FaChevronUp,
// //   FaUsers,
// //   FaClipboardList,
// //   FaBuilding,
// // } from "react-icons/fa";
// // import { logout } from "../State/Auth/Action";


// // const SideBar = () => {
// //   const navigate = useNavigate();
// //   const [activeTab, setActiveTab] = useState("Hr Dashboard");
// //   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
// //   const [showProjectOptions, setShowProjectOptions] = useState(false);
// //   const [showReportOptions, setShowReportOptions] = useState(false);
// //   const [showAccountOptions, setShowAccountOptions] = useState(false);
// //   const [showAuthOptions, setShowAuthOptions] = useState(false);
// //   const [showPayOptions, setShowPayOptions] = useState(false);
// //   const [selectedHeader, setSelectedHeader] = useState("Hr");
// //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
// //   const jwt = localStorage.getItem("jwt");
// //   const auth = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();

// //   const options = [
// //     { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
// //     { title: "Holiday", icon: <FaCalendarAlt /> },
// //     { title: "Events", icon: <FaCalendarCheck /> },
// //     { title: "Activities", icon: <FaTasks /> },
// //     { title: "HR Social", icon: <MdOutlineSocialDistance /> },
// //     { title: "Employee", icon: <FaUserFriends /> },
// //     { title: "PayRoll", icon: <FaMoneyCheckAlt /> },
// //     { title: "Reports", icon: <FaFileAlt /> },
// //     { title: "Accounts", icon: <FaMoneyCheckAlt /> },
// //     { title: "Authentication", icon: <FaLock /> },
// //   ];

// //   const employeeOptions = [
// //     { title: "All Employees", icon: <FaUsers /> },
// //     { title: "Leave Requests", icon: <FaClipboardList /> },
// //     { title: "Attendance", icon: <FaCalendarCheck /> },
// //     { title: "Department", icon: <FaBuilding /> },
// //   ];

// //   const projectOptions = [
// //     { title: "Dashboard", icon: <FaTachometerAlt /> },
// //     { title: "Inbox", icon: <FaFileAlt /> },
// //     { title: "Chat", icon: <FaUser /> },
// //     { title: "Project", icon: <FaTasks /> },
// //     { title: "Clients", icon: <FaUserFriends /> },
// //     { title: "Teams", icon: <FaUsers /> },
// //     { title: "Tickets", icon: <FaClipboardList /> },
// //   ];

// //   const projectDropdownOptions = [
// //     { title: "Add Project", icon: <GoProjectSymlink /> },
// //     { title: "Project List", icon: <GoProjectRoadmap /> },
// //     { title: "Project Grid", icon: <GrProjects /> },
// //     { title: "Project Detail", icon: <TbListDetails /> },
// //   ];

// //   const reportOptions = [
// //     { title: "Report Invoice", icon: <FaFileAlt /> },
// //     { title: "Report Expenses", icon: <FaFileAlt /> },
// //   ];

// //   const accountOptions = [
// //     { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
// //     { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
// //     { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
// //   ];

// //   const authOptions = [
// //     { title: "Logout", link: "/login", icon: <FaBuilding /> },
// //     { title: "Register", link: "/register", icon: <FaBuilding /> },
// //     {
// //       title: "Forget Password",
// //       link: "/forget-password",
// //       icon: <FaBuilding />,
// //     },
// //     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
// //   ];
// //   const payrollOptions = [
// //     { title: "DashBoard", icon: <TbMoneybag /> },
// //     { title: "Run payroll", icon: <GiPayMoney /> },
// //     { title: "Payroll Summary", icon: <MdOutlinePayment /> },
// //     { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
// //     // { title: "Advances/loans", icon: <LiaMoneyCheckAltSolid /> },
// //     { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
// //     { title: "Settlements", icon: <FaMoneyBillTransfer /> },
// //     { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
// //     // { title: "Direct deposits", icon: <PiHandDepositFill /> },
// //     // { title: "YTD import", icon: <FaMoneyBillTrendUp /> },
// //     // { title: "Gratuity Calculator", icon: <TbMoneybag /> },
// //     // { title: "Estimated tax sheet", icon: <BsFileEarmarkSpreadsheet /> },
// //   ];

// //   const handleOptionClick = (option) => {
// //     switch (option.title) {
// //       case "Employee":
// //         setShowEmployeeOptions(!showEmployeeOptions);
// //         break;
// //       case "Projects":
// //         setShowProjectOptions(!showProjectOptions);
// //         break;
// //       case "Reports":
// //         setShowReportOptions(!showReportOptions);
// //         break;
// //       case "Accounts":
// //         setShowAccountOptions(!showAccountOptions);
// //         break;
// //       case "Authentication":
// //         setShowAuthOptions(!showAuthOptions);
// //         break;
// //       case "PayRoll":
// //         setShowPayOptions(!showPayOptions);
// //         break;
// //       default:
// //         setActiveTab(option.title);
// //         // setShowEmployeeOptions(false);
// //         // setShowProjectOptions(false);
// //         // setShowReportOptions(false);
// //         // setShowAccountOptions(false);
// //         // setShowAuthOptions(false);
// //         break;
// //     }
// //   };

// //   useEffect(() => {
// //     if (jwt) {
// //       dispatch(getUser(jwt));
// //     }
// //   }, [jwt, auth.jwt, dispatch]);

// //   const handleHeaderClick = (header) => {
// //     setSelectedHeader(header);
// //   };

// //   const toggleSidebar = () => {
// //     setIsSidebarCollapsed(!isSidebarCollapsed);
// //   };
// //   // Initialize navigate function

// //   const handleOptionClickNavigate = (authOption) => {
// //     navigate(authOption.link); // Navigate to the link specified in authOption
// //   };

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     localStorage.removeItem("jwt");
// //     navigate("/login");
// //   };
// //   return (
// //     <div className="relative ">
// //       <NavBar />
// //       <div
// //         className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${isSidebarCollapsed ? "w-16" : "w-[240px]"
// //           } transition-all duration-300 ease-in-out`}
// //       >
// //         <div className="flex justify-between items-center pt-10  pb-5 pl-5">
// //           <IoMdMenu
// //             className="text-white h-[30px] absolute  top-4 cursor-pointer"
// //             onClick={toggleSidebar}
// //           />
// //         </div>
// //         <div>
// //           {!isSidebarCollapsed && (
// //             <div className="flex items-center relative top-0 pb-4 px-2">
// //               <img
// //                 src={profile}
// //                 className="rounded-full w-[50px] h-[50px]"
// //                 alt="Profile"
// //               />
// //               <p className="text-[16px] pl-2">Welcome {auth.user ? auth.user.firstName : "user"}</p>
// //             </div>
// //           )}
// //         </div>

// //         {/*  */}
// //         {!isSidebarCollapsed && (
// //           <div className="text-[16px] text-white flex justify-around pr-5 pb-3 items-center">
// //             <span
// //               className={`cursor-pointer ${selectedHeader === "Hr"
// //                 ? "underline decoration-2 underline-offset-8"
// //                 : ""
// //                 }`}
// //               onClick={() => handleHeaderClick("Hr")}
// //             >
// //               Hr
// //             </span>
// //             <span
// //               className={`cursor-pointer ${selectedHeader === "Project"
// //                 ? "underline decoration-3  underline-offset-8"
// //                 : ""
// //                 }`}
// //               onClick={() => handleHeaderClick("Project")}
// //             >
// //               Projects
// //             </span>
// //           </div>
// //         )}
// //         {selectedHeader === "Hr" && (
// //           <div className="mt-4">
// //             {options.map((option, index) => (
// //               <div key={index}>
// //                 <div
// //                   className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === option.title
// //                     ? "bg-white rounded-r-[10px] text-[#ef5f2b]"
// //                     : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                     }`}
// //                   onClick={() => handleOptionClick(option)}
// //                 >
// //                   <span className="text-xl">{option.icon}</span>
// //                   {!isSidebarCollapsed && (
// //                     <span className="pl-2">{option.title}</span>
// //                   )}
// //                   {!isSidebarCollapsed &&
// //                     (option.title === "Employee" ? (
// //                       showEmployeeOptions ? (
// //                         <FaChevronUp className="ml-auto" />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : option.title === "PayRoll" ? (
// //                       showPayOptions ? (
// //                         <FaChevronUp className="ml-auto " />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ): option.title === "Project" ? (
// //                       showProjectOptions ? (
// //                         <FaChevronUp className="ml-auto " />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : option.title === "Reports" ? (
// //                       showReportOptions ? (
// //                         <FaChevronUp className="ml-auto" />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : option.title === "Accounts" ? (
// //                       showAccountOptions ? (
// //                         <FaChevronUp className="ml-auto" />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : option.title === "Authentication" ? (
// //                       showAuthOptions ? (
// //                         <FaChevronUp className="ml-auto" />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : null)}
// //                 </div>
// //                 {option.title === "Employee" && showEmployeeOptions && (
// //                   <div className="">
// //                     {employeeOptions.map((empOption, empIndex) => (
// //                       <div
// //                         key={empIndex}
// //                         className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === empOption.title
// //                           ? "bg-white bg-opacity-60 rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={() => handleOptionClick(empOption)}
// //                       >
// //                         <span className="text-xl">{empOption.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2">{empOption.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {option.title === "PayRoll" && showPayOptions && (
// //                   <div className="">
// //                     {payrollOptions.map((payoptions, payIndex) => (
// //                       <div
// //                         key={payIndex}
// //                         className={`flex items-center my-1 p-3 px-4 cursor-pointer ${activeTab === payoptions.title
// //                           ? "bg-white bg-opacity-60 rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white hover:bg-opacity-60  hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={()=>handleOptionClick(payoptions)}
// //                       >
// //                         <span className="text-xl">{payoptions.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2">{payoptions.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {option.title === "Projects" && showProjectOptions && (
// //                   <div className="">
// //                     {projectOptions.map((projOption, projIndex) => (
// //                       <div
// //                         key={projIndex}
// //                         className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === projOption.title
// //                           ? "bg-white  rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={() => handleOptionClick(projOption)}
// //                       >
// //                         <span className="text-xl">{projOption.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2 b">{projOption.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                     {showProjectOptions && (
// //                       <div className="">
// //                         {projectDropdownOptions.map((projOption, projIndex) => (
// //                           <div
// //                             key={projIndex}
// //                             className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === projOption.title
// //                               ? "bg-white rounded-r-[10px] text-[#ef5f2b]"
// //                               : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                               }`}
// //                             onClick={() => handleOptionClick(projOption)}
// //                           >
// //                             <span className="text-xl">{projOption.icon}</span>
// //                             {!isSidebarCollapsed && (
// //                               <span className="pl-2">{projOption.title}</span>
// //                             )}
// //                           </div>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //                 {option.title === "Reports" && showReportOptions && (
// //                   <div className="">
// //                     {reportOptions.map((reportOption, reportIndex) => (
// //                       <div
// //                         key={reportIndex}
// //                         className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === reportOption.title
// //                           ? "bg-white bg-opacity-60 rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={() => handleOptionClick(reportOption)}
// //                       >
// //                         <span className="text-xl">{reportOption.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2">{reportOption.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {option.title === "Accounts" && showAccountOptions && (
// //                   <div className="">
// //                     {accountOptions.map((accountOption, accountIndex) => (
// //                       <div
// //                         key={accountIndex}
// //                         className={`flex items-center p-3 my-1 px-4 cursor-pointer ${activeTab === accountOption.title
// //                           ? "bg-white bg-opacity-60 rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white hover:bg-opacity-60 hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={() => handleOptionClick(accountOption)}
// //                       >
// //                         <span className="text-xl">{accountOption.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2">{accountOption.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //                 {option.title === "Authentication" && showAuthOptions && (
// //                   <div className="">
// //                     {authOptions.map((authOption, authIndex) => (
// //                       <div
// //                         key={authIndex}
// //                         className={`flex items-center my-1 p-3 px-4 cursor-pointer ${activeTab === authOption.title
// //                           ? "bg-white bg-opacity-60 rounded-r-[10px] text-[#ef5f2b]"
// //                           : "hover:bg-white hover:bg-opacity-60  hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                           }`}
// //                         onClick={() =>
// //                           authOption.title === "Logout"
// //                             ? handleLogout()
// //                             : handleOptionClickNavigate(authOption)
// //                         }
// //                       >
// //                         <span className="text-xl">{authOption.icon}</span>
// //                         {!isSidebarCollapsed && (
// //                           <span className="pl-2">{authOption.title}</span>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //         {/*  */}
// //         {selectedHeader === "Project" && (
// //           <div className="mt-4">
// //             {projectOptions.map((option, index) => (
// //               <div key={index}>
// //                 <div
// //                   className={`flex items-center p-3 px-4 my-1  cursor-pointer ${activeTab === option.title
// //                     ? "bg-white rounded-r-[10px] text-[#ef5f2b]"
// //                     : "hover:bg-white  hover:text-[#ef5f2b] hover:rounded-r-[10px]"
// //                     }`}
// //                   onClick={() => handleOptionClick(option)}
// //                 >
// //                   <span className="text-xl">{option.icon}</span>
// //                   {!isSidebarCollapsed && (
// //                     <span className="pl-2">{option.title}</span>
// //                   )}
// //                   {/* {!isSidebarCollapsed &&
// //                     (option.title === "Project" ? (
// //                       showProjectOptions ? (
// //                         <FaChevronUp className="ml-auto" />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : option.title === "PayRoll" ? (
// //                       showPayOptions ? (
// //                         <FaChevronUp className="ml-auto " />
// //                       ) : (
// //                         <FaChevronDown className="ml-auto" />
// //                       )
// //                     ) : null)} */}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //       <div
// //         className={`flex-1 ml-4 transition-all ${isSidebarCollapsed ? "ml-[100px]" : "ml-[240px]"
// //           }`}
// //       >
// //         {/* Content of the right-side components */}
// //         {activeTab === "Hr Dashboard" && <HrDashboard />}
// //         {activeTab === "Holiday" && <HolidayTab />}
// //         {activeTab === "Events" && <Events />}
// //         {activeTab === "Activities" && <Activities />}
// //         {activeTab === "HR Social" && <HrSocial />}
// //         {activeTab === "All Employees" && <AllEmployees />}
// //         {activeTab === "Leave Requests" && <LeaveRequest />}
// //         {activeTab === "Attendance" && <Attendance />}
// //         {activeTab === "Department" && <DepartmentList />}
// //         {activeTab === "Dashboard" && <Dashboard />}
// //         {activeTab === "Inbox" && <Inbox />}
// //         {activeTab === "Chat" && <Chat />}
// //         {/* {activeTab === "Project" && <ProjectList />} */}
// //         {activeTab === "Clients" && <UserList />}
// //         {activeTab === "Teams" && <Teams />}
// //         {activeTab === "Tickets" && <Tickets />}
// //         {activeTab === "Add Project" && <AddProject />}
// //         {activeTab === "Project List" && <ProjectList />}
// //         {activeTab === "Project Grid" && <ProjectGrid />}
// //         {activeTab === "Project Detail" && <ProjectDetails />}
// //         {activeTab === "Report Invoice" && <ReportInvoice />}
// //         {activeTab === "Report Expenses" && <ReportExpenses />}
// //         {activeTab === "Account Payment" && <AccountPayments />}
// //         {activeTab === "Account Expenses" && <AccountExpenses />}
// //         {activeTab === "Account Invoice" && <AccountInvoice />}
// //       </div>
// //     </div>
// //   );
// // };
// // export default SideBar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import profile from "../assets/hr/employee/profile/profile.jpg";
// import NavBar from "./NavBar";
// import HolidayTab from "../components/hr/holiday/HolidayList";
// import ViewEmployees from "../components/hr/employe/AllEmployees";
// import LeaveRequest from "../components/hr/employe/LeaveRequest";
// import Attendance from "../components/hr/employe/Attendance";
// import DepartmentList from "../components/hr/employe/DepartmentList";
// import AccountPayments from "../components/hr/account/AccountPayments";
// import AccountExpenses from "../components/hr/account/AccountExpenses";
// import AccountInvoice from "../components/hr/account/AccountInvoice";
// import ReportInvoice from "../components/hr/report/ReportInvoice";
// import ReportExpenses from "../components/hr/report/ReportExpenses";
// import { useSelector } from "react-redux";
// import ForHrSidebar from "./ForHrSidebar";
// import ForProjectSidebar from "./ForProjectSidebar";
// import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
// import Activities from "../components/hr/activities/Activities";
// import Events from "../components/hr/events/Events";
// import HrSocial from "../components/hr/hr_social/HrSocial";
// import UserList from "../components/hr/user/UserList";
// import Dashboard from "../components/project/projectDashboard/Dashboard";
// import AddProject from "./project/projecttab/AddProject";
// import ProjectGrid from "./project/projecttab/ProjectGrid";
// import Tickets from "./project/tickets/Tickets";
// import Teams from "./project/teams/Teams";
// import Chat from "./project/chat/Chat";
// import ProjectList from "./project/projecttab/ProjectList";
// import ProjectDetails from "./project/projecttab/ProjectDetail";
// import Inbox from "./project/inbox/Inbox";
// import {
//   FaTachometerAlt,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaUserFriends,
//   FaMoneyCheckAlt,
//   FaFileAlt,
//   FaUser,
//   FaLock,
//   FaChevronDown,
//   FaChevronUp,
//   FaUsers,
//   FaClipboardList,
//   FaBuilding,
// } from "react-icons/fa";
// import { SiHdfcbank } from "react-icons/si";
// import { GiPayMoney } from "react-icons/gi";
// import { MdOutlinePayment } from "react-icons/md";
// import { MdAdminPanelSettings } from "react-icons/md";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { LiaMoneyCheckAltSolid } from "react-icons/lia";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { PiHandDepositFill } from "react-icons/pi";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { TbMoneybag } from "react-icons/tb";
// import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
// import { MdOutlineSocialDistance } from "react-icons/md";
// import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
// import { GrProjects } from "react-icons/gr";
// import { TbListDetails } from "react-icons/tb";

// const SideBar = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("Hr Dashboard");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [showProjectOptions, setShowProjectOptions] = useState(false);
//   const [showReportOptions, setShowReportOptions] = useState(false);
//   const [showPayrollOptions, setShowPayrollOptions] = useState(false);
//   const [showAccountOptions, setShowAccountOptions] = useState(false);
//   const [showAuthOptions, setShowAuthOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("Hr");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [showHrManagementOptions, setShowHrManagementOptions] = useState(false);
//   const options = [
//     { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
//     { title: "Holiday", icon: <FaCalendarAlt /> },
//     { title: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     { title: "HR Social", icon: <MdOutlineSocialDistance /> },

//     {
//       title: "HR Management",
//       icon: <FaUserFriends />,
//       hasSubOptions: true,
//     },
//     { title: "PayRoll", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
//     { title: "Reports", icon: <FaFileAlt />, hasSubOptions: true },
//     { title: "Accounts", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
//     { title: "Authentication", icon: <FaLock />, hasSubOptions: true },
//   ];

//   const employeeOptions = [
//     { title: "New Employee", icon: <FaBuilding /> },
//     { title: "View Employees", icon: <FaUsers /> },
//     { title: "Compensation", icon: <FaBuilding /> },
//     { title: "Employee Import", icon: <FaBuilding /> },
//     // { title: "Leave Requests", icon: <FaClipboardList /> },
//     // { title: "Attendance", icon: <FaCalendarCheck /> },
//     { title: "Department", icon: <FaBuilding /> },

//     { title: "Onboarding", icon: <FaBuilding /> },
//   ];

//   const projectOptions = [
//     { title: "Dashboard", icon: <FaTachometerAlt /> },
//     { title: "Inbox", icon: <FaFileAlt /> },
//     { title: "Chat", icon: <FaUser /> },
//     { title: "Project", icon: <FaTasks />, hasSubOptions: true },
//     { title: "Clients", icon: <FaUserFriends /> },
//     { title: "Teams", icon: <FaUsers /> },
//     { title: "Tickets", icon: <FaClipboardList /> },
//   ];

//   const projectDropdownOptions = [
//     { title: "Add Project", icon: <GoProjectSymlink /> },
//     { title: "Project List", icon: <GoProjectRoadmap /> },
//     { title: "Project Grid", icon: <GrProjects /> },
//     { title: "Project Detail", icon: <TbListDetails /> },
//   ];

//   const reportOptions = [
//     { title: "Report Invoice", icon: <FaFileAlt /> },
//     { title: "Report Expenses", icon: <FaFileAlt /> },
//   ];

//   const accountOptions = [
//     { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
//     { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
//     { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
//   ];
//   const payrollOptions = [
//     { title: "DashBoard", icon: <TbMoneybag /> },
//     { title: "Run payroll", icon: <GiPayMoney /> },
//     { title: "Payroll Summary", icon: <MdOutlinePayment /> },
//     { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
//     // { title: "Advances/loans", icon: <LiaMoneyCheckAltSolid /> },
//     { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
//     { title: "Settlements", icon: <FaMoneyBillTransfer /> },
//     { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
//     // { title: "Direct deposits", icon: <PiHandDepositFill /> },
//     // { title: "YTD import", icon: <FaMoneyBillTrendUp /> },
//     // { title: "Gratuity Calculator", icon: <TbMoneybag /> },
//     // { title: "Estimated tax sheet", icon: <BsFileEarmarkSpreadsheet /> },
//   ];

//   const authOptions = [
//     { title: "Login", link: "/login", icon: <FaBuilding /> },
//     { title: "Register", link: "/register", icon: <FaBuilding /> },
//     {
//       title: "Forgot Password",
//       link: "/forget-password",
//       icon: <FaBuilding />,
//     },
//     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
//   ];

//   const handleOptionClick = (option) => {
//     switch (option.title) {
//       case "HR Management":
//         setShowHrManagementOptions(!showHrManagementOptions);
//         break;
//       case "Employee":
//         setShowEmployeeOptions(!showEmployeeOptions);
//         break;
//       case "Project":
//         setShowProjectOptions(!showProjectOptions);
//         break;
//       case "Reports":
//         setShowReportOptions(!showReportOptions);
//         break;
//       case "PayRoll":
//         setShowPayrollOptions(!showPayrollOptions);
//         break;
//       case "Accounts":
//         setShowAccountOptions(!showAccountOptions);
//         break;
//       case "Authentication":
//         setShowAuthOptions(!showAuthOptions);
//         break;
//       default:
//         setActiveTab(option.title);
//         // setShowEmployeeOptions(false);
//         // setShowProjectOptions(false);
//         // setShowReportOptions(false);
//         // setShowAccountOptions(false);
//         // setShowPayrollOptions(false);
//         // setShowAuthOptions(false);
//         break;
//     }
//   };
//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const handleOptionClickNavigate = (authOption) => {
//     navigate(authOption.link);
//   };

//   return (
//     <div className="relative h-auto bg-[#0098f1]  bg-opacity-10">
//       <NavBar />
//       <div
//         className={`fixed top-0 h-screen pb-10 bg-[#0098f1] text-white overflow-x-hidden scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent ${
//           isSidebarCollapsed ? "w-16" : "w-[240px]"
//         } transition-all duration-300 ease-in-out`}
//       >
//         <div className="flex justify-between items-center pt-10  pb-5 pl-5">
//           <IoMdMenu
//             className="text-white h-[30px] absolute  top-4 cursor-pointer"
//             onClick={toggleSidebar}
//           />
//         </div>
//         <div>
//           {!isSidebarCollapsed && (
//             <div className="flex items-center relative top-0 pb-4 px-2">
//               <img
//                 src={profile}
//                 className="rounded-full w-[50px] h-[50px]"
//                 alt="Profile"
//               />
//               <p className="text-[16px] pl-2">Welcome User</p>
//             </div>
//           )}
//         </div>

//         {!isSidebarCollapsed && (
//           <div className="text-[16px] text-white flex justify-around pr-5 pb-3 items-center">
//             <span
//               className={`cursor-pointer ${
//                 selectedHeader === "Hr"
//                   ? "underline decoration-2 underline-offset-8"
//                   : ""
//               }`}
//               onClick={() => handleHeaderClick("Hr")}
//             >
//               Hr
//             </span>
//             <span
//               className={`cursor-pointer ${
//                 selectedHeader === "Project"
//                   ? "underline decoration-3  underline-offset-8"
//                   : ""
//               }`}
//               onClick={() => handleHeaderClick("Project")}
//             >
//               Projects
//             </span>
//           </div>
//         )}
//         {selectedHeader === "Hr" && (
//           <div className="pr-2">
//             <ul className="pt-3 pr-1">
//               {options.map((option) => (
//                 <React.Fragment key={option.title}>
//                   <li
//                     className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${
//                       activeTab === option.title
//                         ? "bg-white rounded-r-full text-[#ef5f2b]"
//                         : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
//                     }`}
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     <div className="flex items-center">
//                       {option.icon}
//                       <span
//                         className={`pl-2 ${
//                           isSidebarCollapsed ? "hidden" : "inline"
//                         }`}
//                       >
//                         {option.title}
//                       </span>
//                     </div>
//                     {!isSidebarCollapsed && option.hasSubOptions && (
//                       <span className="pr-5">
//                         {option.title === "Employee" && showEmployeeOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "HR Management" &&
//                           showHrManagementOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "Projects" &&
//                           showProjectOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "Reports" && showReportOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "PayRoll" && showPayrollOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "Accounts" &&
//                           showAccountOptions ? (
//                           <FaChevronUp />
//                         ) : option.title === "Authentication" &&
//                           showAuthOptions ? (
//                           <FaChevronUp />
//                         ) : (
//                           <FaChevronDown />
//                         )}
//                       </span>
//                     )}
//                   </li>
//                   {/*  */}
//                   {/* {!isSidebarCollapsed &&
//                     option.title === "Employee" &&
//                     showEmployeeOptions && (
//                       <ul className="">
//                         {employeeOptions.map((subOption) => (
//                           <li
//                             key={subOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-5 py-2 cursor-pointer  mb-1 ${
//                               activeTab === subOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() => setActiveTab(subOption.title)}
//                           >
//                             {subOption.icon}
//                             <span className="pl-2">{subOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )} */}
//                   {!isSidebarCollapsed &&
//                     option.title === "HR Management" &&
//                     showHrManagementOptions && (
//                       <ul className="">
//                         <li
//                           className={`flex justify-between text-[16px] bg-opacity-50  pl-8 py-3 mb-1 cursor-pointer   ${
//                             activeTab === showHrManagementOptions.title
//                               ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                               : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                           }`}
//                           onClick={() =>
//                             handleOptionClick({ title: "Employee" })
//                           }
//                         >
//                           <div className="flex items-center ">
//                             <span className="text-[20px]">
//                               <FaUserFriends />
//                             </span>
//                             {!isSidebarCollapsed && (
//                               <span className="pl-2">Employee</span>
//                             )}
//                           </div>
//                           {showEmployeeOptions && !isSidebarCollapsed ? (
//                             <span className="pr-5">
//                               <FaChevronUp />
//                             </span>
//                           ) : (
//                             <span className=" pr-5">
//                               <FaChevronDown />
//                             </span>
//                           )}
//                         </li>
//                         {!isSidebarCollapsed && showEmployeeOptions && (
//                           <ul className="">
//                             {employeeOptions.map((employeeOption) => (
//                               <li
//                                 key={employeeOption.title}
//                                 className={`text-[16px] pl-12 py-3 mb-1 cursor-pointer   ${
//                                   activeTab === employeeOption.title
//                                     ? "bg-white bg-opacity-30 rounded-r-full text-[#ef5f2b]"
//                                     : "hover:bg-white hover:bg-opacity-30 hover:text-[#ef5f2b] hover:rounded-r-full"
//                                 }`}
//                                 onClick={() => {
//                                   handleOptionClick(employeeOption);
//                                   setActiveTab(employeeOption.title);
//                                 }}
//                               >
//                                 <div className="flex items-center">
//                                   <span className="text-[20px]">
//                                     {employeeOption.icon}
//                                   </span>
//                                   {!isSidebarCollapsed && (
//                                     <span className="pl-5">
//                                       {employeeOption.title}
//                                     </span>
//                                   )}
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </ul>
//                     )}
//                   {/*  */}
//                   {!isSidebarCollapsed &&
//                     option.title === "PayRoll" &&
//                     showPayrollOptions && (
//                       <ul className="">
//                         {payrollOptions.map((subOption) => (
//                           <li
//                             key={subOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${
//                               activeTab === subOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() => setActiveTab(subOption.title)}
//                           >
//                             {subOption.icon}
//                             <span className="pl-2">{subOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   {!isSidebarCollapsed &&
//                     option.title === "Reports" &&
//                     showReportOptions && (
//                       <ul className="">
//                         {reportOptions.map((subOption) => (
//                           <li
//                             key={subOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${
//                               activeTab === subOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() => setActiveTab(subOption.title)}
//                           >
//                             {subOption.icon}
//                             <span className="pl-2">{subOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}

//                   {/*  */}
//                   {!isSidebarCollapsed &&
//                     option.title === "Accounts" &&
//                     showAccountOptions && (
//                       <ul className="">
//                         {accountOptions.map((subOption) => (
//                           <li
//                             key={subOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${
//                               activeTab === subOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() => setActiveTab(subOption.title)}
//                           >
//                             {subOption.icon}
//                             <span className="pl-2">{subOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   {!isSidebarCollapsed &&
//                     option.title === "Authentication" &&
//                     showAuthOptions && (
//                       <ul className="">
//                         {authOptions.map((authOption) => (
//                           <li
//                             key={authOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${
//                               activeTab === authOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() =>
//                               handleOptionClickNavigate(authOption)
//                             }
//                           >
//                             {authOption.icon}
//                             <span className="pl-2">{authOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>
//         )}

//         {selectedHeader === "Project" && (
//           <div className="pr-2">
//             <ul className="pt-3 pr-1">
//               {projectOptions.map((option) => (
//                 <React.Fragment key={option.title}>
//                   <li
//                     className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${
//                       activeTab === option.title
//                         ? "bg-white rounded-r-full text-[#ef5f2b]"
//                         : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
//                     }`}
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     <div className="flex items-center">
//                       {option.icon}
//                       <span
//                         className={`pl-2 ${
//                           isSidebarCollapsed ? "hidden" : "inline"
//                         }`}
//                       >
//                         {option.title}
//                       </span>
//                     </div>
//                     {!isSidebarCollapsed && option.hasSubOptions && (
//                       <span className="pr-5">
//                         {option.title === "Project" && showProjectOptions ? (
//                           <FaChevronUp />
//                         ) : (
//                           <FaChevronDown />
//                         )}
//                       </span>
//                     )}
//                   </li>
//                   {!isSidebarCollapsed &&
//                     option.title === "Project" &&
//                     showProjectOptions && (
//                       <ul className="">
//                         {projectDropdownOptions.map((subOption) => (
//                           <li
//                             key={subOption.title}
//                             className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${
//                               activeTab === subOption.title
//                                 ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
//                                 : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
//                             }`}
//                             onClick={() => setActiveTab(subOption.title)}
//                           >
//                             {subOption.icon}
//                             <span className="pl-2">{subOption.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div
//         className={`flex-1 ml-4 transition-all ${
//           isSidebarCollapsed ? "ml-[100px]" : "ml-[240px]"
//         }`}
//       >
//         {activeTab === "Hr Dashboard" && <HrDashboard />}
//         {activeTab === "Holiday" && <HolidayTab />}
//         {activeTab === "Events" && <Events />}
//         {activeTab === "Activities" && <Activities />}
//         {activeTab === "HR Social" && <HrSocial />}
//         {activeTab === "View Employees" && <ViewEmployees />}
//         {/* {activeTab === "Leave Requests" && <LeaveRequest />} */}
//         {/* {activeTab === "Attendance" && <Attendance />} */}
//         {activeTab === "Department" && <DepartmentList />}
//         {activeTab === "Report Invoice" && <ReportInvoice />}
//         {activeTab === "Report Expenses" && <ReportExpenses />}
//         {activeTab === "Account Payment" && <AccountPayments />}
//         {activeTab === "Account Expenses" && <AccountExpenses />}
//         {activeTab === "Account Invoice" && <AccountInvoice />}
//         {activeTab === "Dashboard" && <Dashboard />}
//         {activeTab === "Inbox" && <Inbox />}
//         {activeTab === "Chat" && <Chat />}
//         {activeTab === "Add Project" && <AddProject />}
//         {activeTab === "Project List" && <ProjectList />}
//         {activeTab === "Project Grid" && <ProjectGrid />}
//         {activeTab === "Project Detail" && <ProjectDetails />}
//         {activeTab === "Clients" && <UserList />}
//         {activeTab === "Teams" && <Teams />}
//         {activeTab === "Tickets" && <Tickets />}
//       </div>
//     </div>
//   );
// };

// export default SideBar;

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
import PaySlips from "./hr/payroll/paySlips/PaySlips";
import RunPayroll from './hr/payroll/runPayRoll/RunPayroll'
import PayrollSummary from "./hr/payroll/payrollSummary/PayrollSummary";
const SideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Hr Dashboard");
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
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
          <>
          <ForHrSidebar isSidebarCollapsed={isSidebarCollapsed} activeTab={activeTab} setActiveTab={setActiveTab}/> 
          </>
        )}

        {selectedHeader === "Project" && (
          <>
          <ForProjectSidebar isSidebarCollapsed={isSidebarCollapsed} activeTab={activeTab} setActiveTab={setActiveTab}/>
          </>
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
        {activeTab === "Payslips" && <PaySlips />}
        {activeTab === "Run payroll" && <RunPayroll />}
        {activeTab === "Payroll Summary" && <PayrollSummary />}
      </div>
    </div>
  );
};

export default SideBar;
