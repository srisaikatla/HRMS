// // /* eslint-disable no-unused-vars */
// // // // import React, { useState } from "react";
// // // // import {
// // // //   FaTachometerAlt,
// // // //   FaCalendarAlt,
// // // //   FaCalendarCheck,
// // // //   FaTasks,
// // // //   FaUserFriends,
// // // //   FaMoneyCheckAlt,
// // // //   FaFileAlt,
// // // //   FaUser,
// // // //   FaLock,
// // // //   FaChevronDown,
// // // //   FaChevronUp,
// // // //   FaUsers,
// // // //   FaClipboardList,
// // // //   FaBuilding,
// // // // } from "react-icons/fa";
// // // // import { MdOutlineSocialDistance } from "react-icons/md";
// // // // import profile from "../../assets/employee/profile/profile.jpg";
// // // // import AllEmployeesTab from "./employeetab/AllEmployees";
// // // // import LeaveRequest from "./employeetab/LeaveRequest";
// // // // import Attendance from "./employeetab/Attendance";
// // // // import DepartmentList from "./employeetab/DepartmentList";
// // // // import NavBar from "./employeetab/EmployeeNavBar"
// // // // import AccountExpenses from "../account/AccountExpenses";
// // // // import AccountPayments from "../account/AccountPayments";
// // // // // import AccountInvoice from "../Account/AccountInvoice";
// // // // import HolidayList from "../holiday/HolidayList"
// // // // function SideBar() {
// // // //   const [activeTab, setActiveTab] = useState("");
// // // //   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
// // // //   const [showAccountOptions, setShowAccountOptions] = useState(false);
// // // //   const [selectedHeader, setSelectedHeader] = useState("");

// // // //   const options = [
// // // //     { title: "HR Dashboard", component: "", icon: <FaTachometerAlt /> },
// // // //     { title: "Holidays", component: "HolidayList", icon: <FaCalendarAlt /> },
// // // //     { title: "Events", component: "", icon: <FaCalendarCheck /> },
// // // //     { title: "Activities", component: "", icon: <FaTasks /> },
// // // //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// // // //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// // // //     { title: "Account", component: "", icon: <FaUserFriends /> },
// // // //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// // // //     { title: "Report", component: "", icon: <FaFileAlt /> },
// // // //     { title: "User", component: "", icon: <FaUser /> },
// // // //     { title: "Authentication", component: "", icon: <FaLock /> },
// // // //   ];

// // // //   const employeeOptions = [
// // // //     { title: "All Employees", component: "AllEmployeesTab", icon: <FaUsers /> },
// // // //     { title: "Leave Requests", component: "LeaveRequest", icon: <FaClipboardList /> },
// // // //     { title: "Attendance", component: "Attendance", icon: <FaCalendarCheck /> },
// // // //     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
// // // //   ];
// // // //   const accountOptions = [
// // // //     { title: "Payments", component: "PaymentsTab", icon: <FaUsers /> },
// // // //     { title: "Expenses", component: "ExpensesTab", icon: <FaClipboardList /> },
// // // //     // { title: "Invoice", component: "InvoiceTab", icon: <FaCalendarCheck /> },
// // // //     // { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
// // // //   ];

// // // //   const handleOptionClick = (option) => {
// // // //     if (option.title === "Employee") {
// // // //       setShowEmployeeOptions(!showEmployeeOptions);
// // // //     } else if (option.title === "Account") {
// // // //       setShowAccountOptions(!showAccountOptions);
// // // //     } else {
// // // //       setActiveTab(option.component);
// // // //       setShowEmployeeOptions(false);
// // // //       setShowAccountOptions(false);
// // // //     }
// // // //   };

// // // //   const handleEmployeeOptionClick = (option) => {
// // // //     setActiveTab(option.component);
// // // //     setShowEmployeeOptions(false);
// // // //   };

// // // //   const handleAccountOptionClick = (option) => {
// // // //     setActiveTab(option.component);
// // // //     setShowAccountOptions(false);
// // // //   };

// // // //   const handleHeaderClick = (header) => {
// // // //     setSelectedHeader(header);
// // // //   };

// // // //   return (
// // // //     <div className="relative">
// // // //       <NavBar />
// // // //       <div className="absolute top-0">
// // // //         <div className="flex h-auto pb-10">
// // // //           <div className="bg-[#0098f1] w-[240px] pt-10 pb-10 h-auto rounded-br-[48px]">
// // // //             <div className="px-2 flex pb-5">
// // // //               <img src={profile} className="rounded-full w-[70px] h-[70px]" alt="Profile" />
// // // //               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
// // // //             </div>
// // // //             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
// // // //               <span
// // // //                 className={`cursor-pointer ${
// // // //                   selectedHeader === "Hr" ? "underline decoration-2 underline-offset-8" : ""
// // // //                 }`}
// // // //                 onClick={() => handleHeaderClick("Hr")}
// // // //               >
// // // //                 Hr
// // // //               </span>
// // // //               <span
// // // //                 className={`cursor-pointer ${
// // // //                   selectedHeader === "Projects" ? "underline decoration-2 underline-offset-8" : ""
// // // //                 }`}
// // // //                 onClick={() => handleHeaderClick("Projects")}
// // // //               >
// // // //                 Projects
// // // //               </span>
// // // //             </div>

// // // //             <div className="flex flex-col pr-3 text-white">
// // // //               {options.map((option, index) => (
// // // //                 <div key={index}>
// // // //                   <div
// // // //                     className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // // //                     onClick={() => handleOptionClick(option)}
// // // //                   >
// // // //                     <div className="p-3 pl-4 text-xl flex items-center">
// // // //                       {option.icon}
// // // //                       <span className="ml-3">{option.title}</span>
// // // //                     </div>
// // // //                     {option.title === "Employee" && (
// // // //                       <div className="ml-auto pr-4">
// // // //                         {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
// // // //                       </div>
// // // //                     )}
// // // //                     {option.title === "Account" && (
// // // //                       <div className="ml-auto pr-4">
// // // //                         {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                   {option.title === "Employee" && showEmployeeOptions && (
// // // //                     <div className="transition-all duration-500 ml-8">
// // // //                       {employeeOptions.map((item, idx) => (
// // // //                         <div
// // // //                           key={idx}
// // // //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // // //                           onClick={() => handleEmployeeOptionClick(item)}
// // // //                         >
// // // //                           <div className="p-3 pl-4 text-xl flex items-center">
// // // //                             {item.icon}
// // // //                             <span className="ml-3">{item.title}</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   )}
// // // //                   {option.title === "Account" && showAccountOptions && (
// // // //                     <div className="transition-all duration-500 ml-8">
// // // //                       {accountOptions.map((item, idx) => (
// // // //                         <div
// // // //                           key={idx}
// // // //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // // //                           onClick={() => handleAccountOptionClick(item)}
// // // //                         >
// // // //                           <div className="p-3 pl-4 text-xl flex items-center">
// // // //                             {item.icon}
// // // //                             <span className="ml-3">{item.title}</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //           <div className="flex-1">
// // // //             {activeTab === "AllEmployeesTab" && <AllEmployeesTab />}
// // // //             {activeTab === "LeaveRequest" && <LeaveRequest />}
// // // //             {activeTab === "Attendance" && <Attendance />}
// // // //             {activeTab === "HolidayList" && <HolidayList />}
// // //             // {activeTab === "DepartmentList" && <DepartmentList />}
// // //             // {activeTab === "PaymentsTab" && <AccountExpenses />}
// // //             // {activeTab === "ExpensesTab" && <AccountPayments />}
// // // //             {/* {activeTab === "InvoiceTab" && <AccountInvoice />} */}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default SideBar;











// // // import React, { useState } from "react";
// // // import {
// // //   FaTachometerAlt,
// // //   FaCalendarAlt,
// // //   FaCalendarCheck,
// // //   FaTasks,
// // //   FaUserFriends,
// // //   FaMoneyCheckAlt,
// // //   FaFileAlt,
// // //   FaUser,
// // //   FaLock,
// // //   FaChevronDown,
// // //   FaChevronUp,
// // //   FaUsers,
// // //   FaClipboardList,
// // //   FaBuilding,
// // // } from "react-icons/fa";
// // // import { MdOutlineSocialDistance } from "react-icons/md";
// // // import profile from "../../assets/employee/profile/profile.jpg";
// // // // import EmployeeTab from "./Employeetab/EmployeeTab";
// // // import HolidayList from "../holiday/HolidayList"
// // // import AllEmployees from "./employeetab/AllEmployees";
// // // import LeaveRequest from "./employeetab/LeaveRequest";
// // // import Attendance from "./employeetab/Attendance";
// // // import DepartmentList from "./employeetab/DepartmentList";
// // // import AccountPayments from "../account/AccountPayments";
// // // import NavBar from "./employeetab/EmployeeNavBar";
// // // import  AccountExpenses  from "../account/AccountExpenses";
// // // import AccountInvoice from "../account/AccountInvoice";
// // // import ReportInvoice from "../Report/ReportInvoice";
// // // import ReportExpenses from "../Report/ReportExpenses";
// // // import Login from "../login/Login"
// // // // import AccountInvoice from "../account/AccountInvoice";

// // // function SideBar() {
// // //   const [activeTab, setActiveTab] = useState("");
// // //   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
// // //   const [showAccountOptions, setShowAccountOptions] = useState(false);
// // //   const [showReportOptions, setShowReportOptions] = useState(false);
// // //   const [showAuthOptions, setShowAuthOptions] = useState(false);
// // //   const [selectedHeader, setSelectedHeader] = useState("");

// // //   const options = [
// // //     {
// // //       title: "HR Dashboard",
// // //       component: "",
// // //       icon: <FaTachometerAlt />,
// // //     },
// // //     { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
// // //     { title: "Events", component: "", icon: <FaCalendarCheck /> },
// // //     { title: "Activities", component: "", icon: <FaTasks /> },
// // //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// // //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// // //     { title: "Account", component: "", icon: <FaUserFriends /> },
// // //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// // //     { title: "Report", component: "", icon: <FaFileAlt /> },
// // //     { title: "User", component: "", icon: <FaUser /> },
// // //     { title: "Authentication", component: "", icon: <FaLock /> },
// // //   ];

// // //   const employeeOptions = [
// // //     { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
// // //     {
// // //       title: "Leave Requests",
// // //       component: "LeaveRequest",
// // //       icon: <FaClipboardList />,
// // //     },
// // //     {
// // //       title: "Attendance",
// // //       component: "Attendance",
// // //       icon: <FaCalendarCheck />,
// // //     },
// // //     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
// // //   ];

// // //   const accountOptions = [
// // //     {
// // //       title: "Payment",
// // //       component: "PaymentsTab",
// // //       icon: <FaCalendarCheck />,
// // //     },
// // //     { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
// // //     { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
// // //   ];
// // //   const reportOptions = [
// // //     { title: "Expenses Report", component: "ReportExpenses", icon: <FaBuilding /> },
// // //     { title: "Invoice Report", component: "ReportInvoice", icon: <FaBuilding /> },
// // //   ];
// // //   const AuthOptions = [
// // //     { title: "Login", component: "LoginTab", icon: <FaBuilding /> },
// // //     { title: "Register", component: "RegisterTab", icon: <FaBuilding /> },
// // //     { title: "Forget Password", component: "ForgetTab", icon: <FaBuilding /> },
// // //     { title: "Page 404 ", component: "NotFoundTab", icon: <FaBuilding /> },
// // //   ];

// // //   const handleOptionClick = (option) => {
// // //     if (option.title === "Employee") {
// // //       setShowEmployeeOptions(!showEmployeeOptions);
// // //     }
// // //     else if(option.title === "Account"){
// // //       setShowAccountOptions(!showAccountOptions);
// // //     }
// // //     else if(option.title === "Report"){
// // //       setShowReportOptions(!showReportOptions);
// // //     }
// // //     else if(option.title === "Authentication"){
// // //       setShowAuthOptions(!showAuthOptions);
// // //     }
// // //      else {
// // //       setActiveTab(option.component);
// // //       setShowEmployeeOptions(false);
// // //       setShowAccountOptions(false);
// // //       setShowReportOptions(false);
// // //       setShowAuthOptions(false);
// // //     }
// // //   };

// // //   const handleEmployeeOptionClick = (option) => {
// // //     setActiveTab(option.component);
// // //   };
// // //   const handleReportOptionClick = (option) => {
// // //     setActiveTab(option.component);
// // //   };

// // //   const handleAccountOptionClick = (option) => {
// // //     setActiveTab(option.component);
// // //   };
// // //   const handleAuthOptionClick = (option) => {
// // //     setActiveTab(option.component);
// // //   };

// // //   const handleHeaderClick = (header) => {
// // //     setSelectedHeader(header);
// // //   };

// // //   return (
// // //     <>


// // //     <div className="relative">
// // //       <NavBar />
// // //     </div>
// // //     <div className="absolute top-0">

// // //     <div className="flex h-auto pb-10 ">
// // //       <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
// // //         <div className="px-2 flex pb-5">
// // //           <img src={profile} className="rounded-full w-[70px] h-[70px]" />
// // //           <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
// // //         </div>
// // //         <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
// // //           <span
// // //             className={`cursor-pointer  ${
// // //               selectedHeader === "Hr"
// // //                 ? "underline decoration-2 underline-offset-8 "
// // //                 : ""
// // //             }`}
// // //             onClick={() => handleHeaderClick("Hr")}
// // //           >
// // //             Hr
// // //           </span>
// // //           <span
// // //             className={`cursor-pointer  ${
// // //               selectedHeader === "Projects"
// // //                 ? "underline decoration-2 underline-offset-8 "
// // //                 : ""
// // //             }`}
// // //             onClick={() => handleHeaderClick("Projects")}
// // //           >
// // //             Projects
// // //           </span>
// // //         </div>

// // //         <div className="flex flex-col pr-3 text-white">
// // //           {options.map((option, index) => (
// // //             <div key={index}>
// // //               <div
// // //                 className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // //                 onClick={() => handleOptionClick(option)}
// // //               >
// // //                 <div className="p-3 pl-4 text-xl flex items-center">
// // //                   {option.icon}
// // //                   <span className="ml-3">{option.title}</span>
// // //                 </div>
// // //                 {option.title === "Employee" && (
// // //                   <div className="ml-auto pr-4">
// // //                     {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
// // //                   </div>
// // //                 )}
// // //                 {option.title === "Account" && (
// // //                   <div className="ml-auto pr-4">
// // //                     {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
// // //                   </div>
// // //                 )}
// // //                 {option.title === "Report" && (
// // //                   <div className="ml-auto pr-4">
// // //                     {showReportOptions ? <FaChevronUp /> : <FaChevronDown />}
// // //                   </div>
// // //                 )}
// // //                 {option.title === "Authentication" && (
// // //                   <div className="ml-auto pr-4">
// // //                     {showAuthOptions ? <FaChevronUp /> : <FaChevronDown />}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //               {option.title === "Employee" && showEmployeeOptions && (
// // //                 <div className="transition-all duration-500 ml-8 ">
// // //                   {employeeOptions.map((item, idx) => (
// // //                     <div
// // //                       key={idx}
// // //                       className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // //                       onClick={() => handleEmployeeOptionClick(item)}
// // //                     >
// // //                       <div className="p-3 pl-4 text-xl flex items-center">
// // //                         {item.icon}
// // //                         <span className="ml-3">{item.title}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //               {option.title === "Account" && showAccountOptions && (
// // //                 <div className="transition-all duration-500 ml-8 ">
// // //                   {accountOptions.map((item, idx) => (
// // //                     <div
// // //                       key={idx}
// // //                       className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // //                       onClick={() => handleAccountOptionClick(item)}
// // //                     >
// // //                       <div className="p-3 pl-4 text-xl flex items-center">
// // //                         {item.icon}
// // //                         <span className="ml-3">{item.title}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //               {option.title === "Report" && showReportOptions && (
// // //                 <div className="transition-all duration-500 ml-8 ">
// // //                   {reportOptions.map((item, idx) => (
// // //                     <div
// // //                       key={idx}
// // //                       className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // //                       onClick={() => handleReportOptionClick(item)}
// // //                     >
// // //                       <div className="p-3 pl-4 text-xl flex items-center">
// // //                         {item.icon}
// // //                         <span className="ml-3">{item.title}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //               {option.title === "Authentication" && showAuthOptions && (
// // //                 <div className="transition-all duration-500 ml-8 ">
// // //                   {AuthOptions.map((item, idx) => (
// // //                     <div
// // //                       key={idx}
// // //                       className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// // //                       onClick={() => handleReportOptionClick(item)}
// // //                     >
// // //                       <div className="p-3 pl-4 text-xl flex items-center">
// // //                         {item.icon}
// // //                         <span className="ml-3">{item.title}</span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <div className="flex-1">
// // //             {activeTab === "AllEmployeesTab" && <AllEmployeesTab />}
// // //             {activeTab === "LeaveRequest" && <LeaveRequest />}
// // //             {activeTab === "Attendance" && <Attendance />}
// // //             {activeTab === "HolidayList" && <HolidayList />}
// // // {activeTab === "DepartmentList" && <DepartmentList />}
// // // {activeTab === "PaymentsTab" && <AccountExpenses />}
// // // {activeTab === "ExpensesTab" && <AccountPayments />}
// // //             {/* {activeTab === "InvoiceTab" && <AccountInvoice />} */}
// // //           </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className="flex-1">
// // //         {/* {activeTab === "EmployeeTab" && <EmployeeTab />} */}
// // //         {activeTab === "AllEmployees" && <AllEmployees />}
// // //         {activeTab === "LeaveRequest" && <LeaveRequest />}
// // //         {activeTab === "Attendance" && <Attendance />}
// // //         {activeTab === "DepartmentList" && <DepartmentList />}
// // //         {activeTab === "HolidayTab" && <HolidayList />}
// // //         {/* {activeTab === "DepartmentList" && <DepartmentList />} */}
// // //             {activeTab === "PaymentsTab" && < AccountPayments />}
// // //             {activeTab === "ExpensesTab" && <AccountExpenses />}
// // //             {activeTab === "InvoiceTab" && <AccountInvoice />}
// // //             {activeTab === "ReportInvoice" && <ReportInvoice />}
// // //             {activeTab === "ReportExpenses" && <ReportExpenses />}

// // //       </div>
// // //     </div>
// // //     </div>
// // //     </>
// // //   );
// // // }

// // // export defaultSideBar;



// // import React, { useState } from "react";
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
// // import { MdOutlineSocialDistance } from "react-icons/md";
// // import profile from "../../assets/employee/profile/profile.jpg";
// // import HolidayList from "../holiday/HolidayList";
// // import AllEmployees from "./employeetab/AllEmployees";
// // import LeaveRequestsTab from "./employeetab/LeaveRequest";
// // import Attendance from "./employeetab/Attendance";
// // import DepartmentList from "./employeetab/DepartmentList";
// // import AccountPayments from "../account/AccountPayments";
// // import NavBar from "./employeetab/EmployeeNavBar";
// // import AccountExpenses from "../account/AccountExpenses";
// // import AccountInvoice from "../account/AccountInvoice";
// // import ReportInvoice from "../Report/ReportInvoice";
// // import ReportExpenses from "../Report/ReportExpenses";
// // import HRDashboard from "../HR Dashboard/HRDashboard";

// // function SideBar() {
// //   const [activeTab, setActiveTab] = useState("");
// //   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
// //   const [showAccountOptions, setShowAccountOptions] = useState(false);
// //   const [showReportOptions, setShowReportOptions] = useState(false);
// //   const [showAuthOptions, setShowAuthOptions] = useState(false);
// //   const [selectedHeader, setSelectedHeader] = useState("");
 

// //   const HRoptions = [
// //     {
// //       title: "HR Dashboard",
// //       component: "HRDashboard",
// //       icon: <FaTachometerAlt />,
// //     },
// //     { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
// //     { title: "Events", component: "", icon: <FaCalendarCheck /> },
// //     { title: "Activities", component: "", icon: <FaTasks /> },
// //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// //     { title: "Account", component: "", icon: <FaUserFriends /> },
// //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// //     { title: "Report", component: "", icon: <FaFileAlt /> },
// //     { title: "User", component: "", icon: <FaUser /> },
// //     { title: "Authentication", component: "", icon: <FaLock /> },
// //   ];

// //   const ProjectOPtion= [
// //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// //     { title: "Account", component: "", icon: <FaUserFriends /> },
// //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// //   ]

// //   const employeeOptions = [
// //     { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
// //     {
// //       title: "Leave Requests",
// //       component: "LeaveRequestsTab",
// //       icon: <FaClipboardList />,
// //     },
// //     {
// //       title: "Attendance",
// //       component: "Attendance",
// //       icon: <FaCalendarCheck />,
// //     },
// //     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
// //   ];

// //   const accountOptions = [
// //     {
// //       title: "Payment",
// //       component: "PaymentsTab",
// //       icon: <FaCalendarCheck />,
// //     },
// //     { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
// //     { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
// //   ];

// //   const reportOptions = [
// //     {
// //       title: "Expenses Report",
// //       component: "ReportExpenses",
// //       icon: <FaBuilding />,
// //     },
// //     { title: "Invoice Report", component: "ReportInvoice", icon: <FaBuilding /> },
// //   ];

// //   const authOptions = [
// //     { title: "Login", link: "/login", icon: <FaBuilding /> },
// //     { title: "Register", link: "/register", icon: <FaBuilding /> },
// //     { title: "Forget Password", link: "/forget-password", icon: <FaBuilding /> },
// //     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
// //   ];
 
// //   const handleOptionClick = (option) => {
// //     if (option.title === "Employee") {
// //       setShowEmployeeOptions(!showEmployeeOptions);
// //     } else if (option.title === "Account") {
// //       setShowAccountOptions(!showAccountOptions);
// //     } else if (option.title === "Report") {
// //       setShowReportOptions(!showReportOptions);
// //     } else if (option.title === "Authentication") {
// //       setShowAuthOptions(!showAuthOptions);
// //     } else {
// //       setActiveTab(option.component);
// //       setShowEmployeeOptions(false);
// //       setShowAccountOptions(false);
// //       setShowReportOptions(false);
// //       setShowAuthOptions(false);
// //     }
// //   };

// //   const handleEmployeeOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };
// //   const handleReportOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleAccountOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };
// //   const handleAuthOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleHeaderClick = (header) => {
// //     setSelectedHeader(header);
// //     if (header === "Projects") {
// //       setShowProjectOptions(true); // Set showProjectOptions to true when Projects header is clicked
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="relative">
// //         <NavBar />
// //       </div>
// //       <div className="absolute top-0">
// //         <div className="flex h-auto pb-10">
// //           <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
// //             <div className="px-2 flex pb-5">
// //               <img src={profile} className="rounded-full w-[70px] h-[70px]" />
// //               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
// //             </div>
// //             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
// //               <span
// //                 className={`cursor-pointer  ${
// //                   selectedHeader === "Hr"
// //                     ? "underline decoration-2 underline-offset-8 "
// //                     : ""
// //                 }`}
// //                 onClick={() => handleHeaderClick("Hr")}
// //               >
// //                 Hr
// //               </span>
// //               <span
// //                 className={`cursor-pointer  ${
// //                   selectedHeader === "Projects"
// //                     ? "underline decoration-2 underline-offset-8 "
// //                     : ""
// //                 }`}
// //                 onClick={() => handleHeaderClick("Projects")}
// //               >
// //                 Projects
// //               </span>
// //             </div>

// //             <div className="flex flex-col pr-3 text-white">
// //               {HRoptions.map((option, index) => (
// //                 <div key={index}>
// //                   <div
// //                     className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                     onClick={() => handleOptionClick(option)}
// //                   >
// //                     <div className="p-3 pl-4 text-xl flex items-center">
// //                       {option.icon}
// //                       <span className="ml-3">{option.title}</span>
// //                     </div>
// //                     {option.title === "Employee" && (
// //                       <div className="ml-auto pr-4">
// //                         {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Account" && (
// //                       <div className="ml-auto pr-4">
// //                         {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Report" && (
// //                       <div className="ml-auto pr-4">
// //                         {showReportOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Authentication" && (
// //                       <div className="ml-auto pr-4">
// //                         {showAuthOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                   </div>
// //                   {option.title === "Employee" && showEmployeeOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {employeeOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleEmployeeOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Account" && showAccountOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {accountOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleAccountOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Report" && showReportOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {reportOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleReportOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Authentication" && showAuthOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {authOptions.map((item, idx) => (
// //                         <a
// //                           key={idx}
// //                           href={item.link}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </a>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //             <div>
// //               {
// //                 ProjectOPtion.map((option,index) => (
// //                   <div key={index}>
// //                   <div
// //                     className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                     onClick={() => handleOptionClick(option)}
// //                   >
// //                     <div className="p-3 pl-4 text-xl flex items-center">
// //                       {option.icon}
// //                       <span className="ml-3">{option.title}</span>
// //                     </div>
// //                     </div></div>
// //                 ))
// //               }
// //             </div>
// //           </div>
// //           <div className="flex-1">
// //             {activeTab === "AllEmployees" && <AllEmployees />}
// //             {activeTab === "HRDashboard" && <HRDashboard />}
// //             {activeTab === "LeaveRequestsTab" && <LeaveRequestsTab />}
// //             {activeTab === "Attendance" && <Attendance />}
// //             {activeTab === "DepartmentList" && <DepartmentList />}
// //             {activeTab === "HolidayTab" && <HolidayList />}
// //             {activeTab === "PaymentsTab" && <AccountPayments />}
// //             {activeTab === "ExpensesTab" && <AccountExpenses />}
// //             {activeTab === "InvoiceTab" && <AccountInvoice />}
// //             {activeTab === "ReportInvoice" && <ReportInvoice />}
// //             {activeTab === "ReportExpenses" && <ReportExpenses />}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default SideBar;
// // import React, { useState } from "react";
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
// // import { MdOutlineSocialDistance } from "react-icons/md";
// // import profile from "../../assets/employee/profile/profile.jpg";
// // import HolidayList from "../holiday/HolidayList";
// // import AllEmployees from "./employeetab/AllEmployees";
// // import LeaveRequest from "./employeetab/LeaveRequest";
// // import Attendance from "./employeetab/Attendance";
// // import DepartmentList from "./employeetab/DepartmentList";
// // import AccountPayments from "../account/AccountPayments";
// // import NavBar from "./employeetab/NavBar";
// // import AccountExpenses from "../account/AccountExpenses";
// // import AccountInvoice from "../account/AccountInvoice";
// // import ReportInvoice from "../report/ReportInvoice";
// // import ReportExpenses from "../report/ReportExpenses";
// // import HRDashboard from "../hr_dashboard/HRDashboard";
// // // import ProjectsTab from "../projects/ProjectsTab"; // Import your ProjectsTab component

// // function SideBar() {
// //   const [activeTab, setActiveTab] = useState("");
// //   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
// //   const [showAccountOptions, setShowAccountOptions] = useState(false);
// //   const [showReportOptions, setShowReportOptions] = useState(false);
// //   const [showAuthOptions, setShowAuthOptions] = useState(false);
// //   const [showProjectOptions, setShowProjectOptions] = useState(false); // State for Project Options
// //   const [selectedHeader, setSelectedHeader] = useState("");

// //   const HRoptions = [
// //     {
// //       title: "HR Dashboard",
// //       component: "HRDashboard",
// //       icon: <FaTachometerAlt />,
// //     },
// //     { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
// //     { title: "Events", component: "", icon: <FaCalendarCheck /> },
// //     { title: "Activities", component: "", icon: <FaTasks /> },
// //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// //     { title: "Account", component: "", icon: <FaUserFriends /> },
// //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// //     { title: "Report", component: "", icon: <FaFileAlt /> },
// //     { title: "User", component: "", icon: <FaUser /> },
// //     { title: "Authentication", component: "", icon: <FaLock /> },
// //   ];

// //   const ProjectOptions = [
// //     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
// //     { title: "Employee", component: "", icon: <FaUserFriends /> },
// //     { title: "Account", component: "", icon: <FaUserFriends /> },
// //     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
// //   ];

// //   const employeeOptions = [
// //     { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
// //     {
// //       title: "Leave Requests",
// //       component: "LeaveRequest",
// //       icon: <FaClipboardList />,
// //     },
// //     {
// //       title: "Attendance",
// //       component: "Attendance",
// //       icon: <FaCalendarCheck />,
// //     },
// //     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
// //   ];

// //   const accountOptions = [
// //     {
// //       title: "Payment",
// //       component: "PaymentsTab",
// //       icon: <FaCalendarCheck />,
// //     },
// //     { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
// //     { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
// //   ];

// //   const reportOptions = [
// //     {
// //       title: "Expenses Report",
// //       component: "ReportExpenses",
// //       icon: <FaBuilding />,
// //     },
// //     { title: "Invoice Report", component: "ReportInvoice", icon: <FaBuilding /> },
// //   ];

// //   const authOptions = [
// //     { title: "Login", link: "/login", icon: <FaBuilding /> },
// //     { title: "Register", link: "/register", icon: <FaBuilding /> },
// //     { title: "Forget Password", link: "/forget-password", icon: <FaBuilding /> },
// //     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
// //   ];

// //   const handleOptionClick = (option) => {
// //     switch (option.title) {
// //       case "Employee":
// //         setShowEmployeeOptions(!showEmployeeOptions);
// //         break;
// //       case "Account":
// //         setShowAccountOptions(!showAccountOptions);
// //         break;
// //       case "Report":
// //         setShowReportOptions(!showReportOptions);
// //         break;
// //       case "Authentication":
// //         setShowAuthOptions(!showAuthOptions);
// //         break;
// //       case "Projects":
// //         setShowProjectOptions(!showProjectOptions); // Toggle showProjectOptions
// //         break;
// //       default:
// //         setActiveTab(option.component);
// //         setShowEmployeeOptions(false);
// //         setShowAccountOptions(false);
// //         setShowReportOptions(false);
// //         setShowAuthOptions(false);
// //         setShowProjectOptions(false); // Ensure showProjectOptions is reset
// //         break;
// //     }
// //   };

// //   const handleEmployeeOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleReportOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleAccountOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleAuthOptionClick = (option) => {
// //     setActiveTab(option.component);
// //   };

// //   const handleHeaderClick = (header) => {
// //     setSelectedHeader(header);
// //     if (header === "Projects") {
// //       setShowProjectOptions(true); // Set showProjectOptions to true when Projects header is clicked
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="relative">
// //         <NavBar />
// //       </div>
// //       <div className="absolute top-0">
// //         <div className="flex h-auto pb-10">
// //           <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
// //             <div className="px-2 flex pb-5">
// //               <img src={profile} className="rounded-full w-[70px] h-[70px]" alt="profile" />
// //               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
// //             </div>
// //             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
// //               <span
// //                 className={`cursor-pointer  ${
// //                   selectedHeader === "Hr"
// //                     ? "underline decoration-2 underline-offset-8 "
// //                     : ""
// //                 }`}
// //                 onClick={() => handleHeaderClick("Hr")}
// //               >
// //                 Hr
// //               </span>
// //               <span
// //                 className={`cursor-pointer  ${
// //                   selectedHeader === "Projects"
// //                     ? "underline decoration-2 underline-offset-8 "
// //                     : ""
// //                 }`}
// //                 onClick={() => handleHeaderClick("Projects")}
// //               >
// //                 Projects
// //               </span>
// //             </div>

// //             <div className="flex flex-col pr-3 text-white">
// //               {HRoptions.map((option, index) => (
// //                 <div key={index}>
// //                   <div
// //                     className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                     onClick={() => handleOptionClick(option)}
// //                   >
// //                     <div className="p-3 pl-4 text-xl flex items-center">
// //                       {option.icon}
// //                       <span className="ml-3">{option.title}</span>
// //                     </div>
// //                     {option.title === "Employee" && (
// //                       <div className="ml-auto pr-4">
// //                         {showEmployeeOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Account" && (
// //                       <div className="ml-auto pr-4">
// //                         {showAccountOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Report" && (
// //                       <div className="ml-auto pr-4">
// //                         {showReportOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Authentication" && (
// //                       <div className="ml-auto pr-4">
// //                         {showAuthOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                     {option.title === "Projects" && (
// //                       <div className="ml-auto pr-4">
// //                         {showProjectOptions ? <FaChevronUp /> : <FaChevronDown />}
// //                       </div>
// //                     )}
// //                   </div>
// //                   {option.title === "Employee" && showEmployeeOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {employeeOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleEmployeeOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Account" && showAccountOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {accountOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleAccountOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Report" && showReportOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {reportOptions.map((item, idx) => (
// //                         <div
// //                           key={idx}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                           onClick={() => handleReportOptionClick(item)}
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                   {option.title === "Authentication" && showAuthOptions && (
// //                     <div className="transition-all duration-500 ml-8 ">
// //                       {authOptions.map((item, idx) => (
// //                         <a
// //                           key={idx}
// //                           href={item.link}
// //                           className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                         >
// //                           <div className="p-3 pl-4 text-xl flex items-center">
// //                             {item.icon}
// //                             <span className="ml-3">{item.title}</span>
// //                           </div>
// //                         </a>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //               {selectedHeader === "Projects" && (
// //                 <div className="transition-all duration-500 ml-8 ">
// //                   {ProjectOptions.map((item, idx) => (
// //                     <div
// //                       key={idx}
// //                       className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
// //                       onClick={() => handleOptionClick(item)}
// //                     >
// //                       <div className="p-3 pl-4 text-xl flex items-center">
// //                         {item.icon}
// //                         <span className="ml-3">{item.title}</span>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //           <div className="flex-1">
// //             {activeTab === "AllEmployees" && <AllEmployees />}
// //             {activeTab === "HRDashboard" && <HRDashboard />}
// //             {activeTab === "LeaveRequest" && <LeaveRequest />}
// //             {activeTab === "Attendance" && <Attendance />}
// //             {activeTab === "DepartmentList" && <DepartmentList />}
// //             {activeTab === "HolidayTab" && <HolidayList />}
// //             {activeTab === "PaymentsTab" && <AccountPayments />}
// //             {activeTab === "ExpensesTab" && <AccountExpenses />}
// //             {activeTab === "InvoiceTab" && <AccountInvoice />}
// //             {activeTab === "ReportInvoice" && <ReportInvoice />}
// //             {activeTab === "ReportExpenses" && <ReportExpenses />}
// //             {/* {activeTab === "Projects" && <ProjectsTab />} Render ProjectsTab when activeTab is "Projects" */}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default SideBar;
// import React, { useState } from "react";
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
// import { MdOutlineSocialDistance } from "react-icons/md";
// import profile from "../../assets/employee/profile/profile.jpg";
// import HolidayList from "../holiday/HolidayList";
// import AllEmployees from "./employeetab/AllEmployees";
// import LeaveRequestsTab from "./employeetab/LeaveRequest";
// import Attendance from "./employeetab/Attendance";
// import DepartmentList from "./employeetab/DepartmentList";
// import AccountPayments from "../account/AccountPayments";
// import NavBar from "./employeetab/NavBar";
// import AccountExpenses from "../account/AccountExpenses";
// import AccountInvoice from "../account/AccountInvoice";
// import ReportInvoice from "../Report/ReportInvoice";
// import ReportExpenses from "../Report/ReportExpenses";
// import { useSelector } from "react-redux";

// function SideBar() {
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [showAccountOptions, setShowAccountOptions] = useState(false);
//   const [showReportOptions, setShowReportOptions] = useState(false);
//   const [showAuthOptions, setShowAuthOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("");

//   const options = [
//     {
//       title: "HR Dashboard",
//       component: "",
//       icon: <FaTachometerAlt />,
//     },
//     { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
//     { title: "Events", component: "", icon: <FaCalendarCheck /> },
//     { title: "Activities", component: "", icon: <FaTasks /> },
//     { title: "HR Social", component: "", icon: <MdOutlineSocialDistance /> },
//     { title: "Employee", component: "", icon: <FaUserFriends /> },
//     { title: "Account", component: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", component: "", icon: <FaFileAlt /> },
//     { title: "User", component: "", icon: <FaUser /> },
//     { title: "Authentication", component: "", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
//     {
//       title: "Leave Requests",
//       component: "LeaveRequestsTab",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Attendance",
//       component: "Attendance",
//       icon: <FaCalendarCheck />,
//     },
//     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
//   ];

//   const accountOptions = [
//     {
//       title: "Payment",
//       component: "PaymentsTab",
//       icon: <FaCalendarCheck />,
//     },
//     { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
//     { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
//   ];

//   const reportOptions = [
//     {
//       title: "Expenses Report",
//       component: "ReportExpenses",
//       icon: <FaBuilding />,
//     },
//     {
//       title: "Invoice Report",
//       component: "ReportInvoice",
//       icon: <FaBuilding />,
//     },
//   ];

//   const authOptions = [
//     { title: "Login", link: "/login", icon: <FaBuilding /> },
//     { title: "Register", link: "/register", icon: <FaBuilding /> },
//     {
//       title: "Forget Password",
//       link: "/forget-password",
//       icon: <FaBuilding />,
//     },
//     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else if (option.title === "Account") {
//       setShowAccountOptions(!showAccountOptions);
//     } else if (option.title === "Report") {
//       setShowReportOptions(!showReportOptions);
//     } else if (option.title === "Authentication") {
//       setShowAuthOptions(!showAuthOptions);
//     } else {
//       setActiveTab(option.component);
//       setShowEmployeeOptions(false);
//       setShowAccountOptions(false);
//       setShowReportOptions(false);
//       setShowAuthOptions(false);
//     }
//   };

//   const handleEmployeeOptionClick = (option) => {
//     setActiveTab(option.component);
//   };
//   const handleReportOptionClick = (option) => {
//     setActiveTab(option.component);
//   };

//   const handleAccountOptionClick = (option) => {
//     setActiveTab(option.component);
//   };
//   const handleAuthOptionClick = (option) => {
//     setActiveTab(option.component);
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };

//   return (
//     <>
//       <div className="relative">
//         <NavBar />
//       </div>
//       <div className="absolute top-0">
//         <div className="flex h-auto pb-10">
//           <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
//             <div className="px-2 flex pb-5">
//               <img src={profile} className="rounded-full w-[70px] h-[70px]" />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome {auth}</p>
//             </div>
//             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Hr"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Projects"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Projects")}
//               >
//                 Projects
//               </span>
//             </div>

//             <div className="flex flex-col pr-3 text-white">
//               {selectedHeader === "Hr" ? (
//                 <>
//                   {options.map((option, index) => (
//                     <div key={index}>
//                       <div
//                         className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                         onClick={() => handleOptionClick(option)}
//                       >
//                         <div className="p-3 pl-4 text-xl flex items-center">
//                           {option.icon}
//                           <span className="ml-3">{option.title}</span>
//                         </div>
//                         {option.title === "Employee" && (
//                           <div className="ml-auto pr-4">
//                             {showEmployeeOptions ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </div>
//                         )}
//                         {option.title === "Account" && (
//                           <div className="ml-auto pr-4">
//                             {showAccountOptions ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </div>
//                         )}
//                         {option.title === "Report" && (
//                           <div className="ml-auto pr-4">
//                             {showReportOptions ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </div>
//                         )}
//                         {option.title === "Authentication" && (
//                           <div className="ml-auto pr-4">
//                             {showAuthOptions ? (
//                               <FaChevronUp />
//                             ) : (
//                               <FaChevronDown />
//                             )}
//                           </div>
//                         )}
//                       </div>
//                       {option.title === "Employee" && showEmployeeOptions && (
//                         <div className="transition-all duration-500 ml-8 ">
//                           {employeeOptions.map((item, idx) => (
//                             <div
//                               key={idx}
//                               className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                               onClick={() => handleEmployeeOptionClick(item)}
//                             >
//                               <div className="p-3 pl-4 text-xl flex items-center">
//                                 {item.icon}
//                                 <span className="ml-3">{item.title}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {option.title === "Account" && showAccountOptions && (
//                         <div className="transition-all duration-500 ml-8 ">
//                           {accountOptions.map((item, idx) => (
//                             <div
//                               key={idx}
//                               className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                               onClick={() => handleAccountOptionClick(item)}
//                             >
//                               <div className="p-3 pl-4 text-xl flex items-center">
//                                 {item.icon}
//                                 <span className="ml-3">{item.title}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {option.title === "Report" && showReportOptions && (
//                         <div className="transition-all duration-500 ml-8 ">
//                           {reportOptions.map((item, idx) => (
//                             <div
//                               key={idx}
//                               className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                               onClick={() => handleReportOptionClick(item)}
//                             >
//                               <div className="p-3 pl-4 text-xl flex items-center">
//                                 {item.icon}
//                                 <span className="ml-3">{item.title}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {option.title === "Authentication" && showAuthOptions && (
//                         <div className="transition-all duration-500 ml-8 ">
//                           {authOptions.map((item, idx) => (
//                             <a
//                               key={idx}
//                               href={item.link}
//                               className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
//                             >
//                               <div className="p-3 pl-4 text-xl flex items-center">
//                                 {item.icon}
//                                 <span className="ml-3">{item.title}</span>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </>
//               ) : (
//                 <>
//                   <div>Project</div>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="flex-1">
//             {activeTab === "AllEmployees" && <AllEmployees />}
//             {activeTab === "LeaveRequestsTab" && <LeaveRequestsTab />}
//             {activeTab === "Attendance" && <Attendance />}
//             {activeTab === "DepartmentList" && <DepartmentList />}
//             {activeTab === "HolidayTab" && <HolidayList />}
//             {activeTab === "PaymentsTab" && <AccountPayments />}
//             {activeTab === "ExpensesTab" && <AccountExpenses />}
//             {activeTab === "InvoiceTab" && <AccountInvoice />}
//             {activeTab === "ReportInvoice" && <ReportInvoice />}
//             {activeTab === "ReportExpenses" && <ReportExpenses />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBar;




import React, { useState } from "react";
// import profile from "../../../../assets/hr/employee/profile/profile.jpg";
import profile from "../assets/hr/employee/profile/profile.jpg";
import HolidayList from "../components/hr/holiday/HolidayList";
import AllEmployees from "../components/hr/employe/AllEmployees";
import LeaveRequest from "../components/hr/employe/LeaveRequest";
import Attendance from "../components/hr/employe/Attendance";
import DepartmentList from "../components/hr/employe/DepartmentList";
import AccountPayments from "../components/hr/account/AccountPayments";
import NavBar from "../components/NavBar";
import AccountExpenses from "../components/hr/account/AccountExpenses";
import AccountInvoice from "../components/hr/account/AccountInvoice";
import ReportInvoice from "../components/hr/report/ReportInvoice";
import ReportExpenses from "../components/hr/report/ReportExpenses";
import { useSelector } from "react-redux";
import ForHrSidebar from "./ForHrSidebar";
import ForProjectSidebar from "./ForProjectSidebar";
import HRDashboard from "../components/hr/hr_dashboard/HRDashboard";
import Activities from "../components/hr/activities/Activities";
import Events from "../components/hr/events/Events"
import HrSocial from "../components/hr/hr_social/HrSocial"
import UserList from "../components/hr/user/UserList"
import Dashboard from "../components/project/projectDashboard/Dashboard"
import AddProject from "./project/projecttab/AddProject";
import ProjectGrid from "./project/projecttab/ProjectGrid";
import Tickets from "./project/tickets/Tickets";
import Teams from "./project/teams/Teams";
import Chat from "./project/chat/Chat";
import ProjectList from "./project/projecttab/ProjectList";
const SideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const jwt = localStorage.getItem("token1");
  const auth = useSelector((state) => state.auth.user?.email);
  const user = localStorage.setItem("user", auth);

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  return (
    <>
      <div className="relative">
        <NavBar />
      </div>
      <div className="absolute top-0">
        <div className="flex h-auto pb-10">
          <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
            <div className="px-2 flex pb-5">
              <img src={profile} className="rounded-full w-[70px] h-[70px]" />
              <p className="text-[16px] pt-5 text-white pl-2">Welcome {auth}</p>
            </div>
            <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
              <span
                className={`cursor-pointer  ${
                  selectedHeader === "Hr"
                    ? "underline decoration-2 underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleHeaderClick("Hr")}
              >
                Hr
              </span>
              <span
                className={`cursor-pointer  ${
                  selectedHeader === "Projects"
                    ? "underline decoration-2 underline-offset-8 "
                    : ""
                }`}
                onClick={() => handleHeaderClick("Projects")}
              >
                Projects
              </span>
            </div>

            {selectedHeader === "Hr" ? (
              <>
                <ForHrSidebar setActiveTab={setActiveTab} />
              </>
            ) : (
              <>
                <ForProjectSidebar setActiveTab={setActiveTab} />
              </>
            )}
          </div>
          <div className="flex-1">
            {activeTab === "AllEmployees" && <AllEmployees />}
            {activeTab === "LeaveRequest" && <LeaveRequest />}
            {activeTab === "Attendance" && <Attendance />}
            {activeTab === "DepartmentList" && <DepartmentList />}
            {activeTab === "HolidayTab" && <HolidayList />}
            {activeTab === "PaymentsTab" && <AccountPayments />}
            {activeTab === "ExpensesTab" && <AccountExpenses />}
            {activeTab === "InvoiceTab" && <AccountInvoice />}
            {activeTab === "ReportInvoice" && <ReportInvoice />}
            {activeTab === "ReportExpenses" && <ReportExpenses />}
            {activeTab === "HRDashboard" && <HRDashboard />}
            {activeTab === "Activities" && <Activities />}
            {activeTab === "Events" && <Events />}
            {activeTab === "HrSocial" && <HrSocial />}
            {activeTab === "UserList" && <UserList />}
            {activeTab === "Dashboard" && <Dashboard />}
            {activeTab === "AddProject" && <AddProject />}
            {activeTab === "ProjectGrid" && <ProjectGrid />}
            {activeTab === "Tickets" && <Tickets />}
            {activeTab === "Teams" && <Teams />}
            {activeTab === "Chat" && <Chat />}
            {activeTab === "ProjectList" && <ProjectList />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
