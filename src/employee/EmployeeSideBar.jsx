/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import profile from "../employeeAssets/profile/boy.png";

// import EmployeeNavBar from "./EmployeeNavBar";
// import Payslips from "./options/payslips/Payslip";
// import AllEmployees from "./options/allEmployees/AllEmployees";
// import Events from "./options/events/Events";

// import {
//   FaUsers,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaMoneyCheckAlt,
//   FaUser,
//   FaSignOutAlt,
//   FaProjectDiagram,
//   FaInbox,
//   FaComments,
//   FaClipboardList,
//   FaGavel,
//   FaTicketAlt,
// } from "react-icons/fa";
// import { SiHdfcbank } from "react-icons/si";
// import Holiday from "./options/holiday/Holiday";

// const EmployeeSideBar = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const options = [
//     { title: "All Employees", icon: <FaUsers /> },
//     { title: "Holidays", icon: <FaCalendarAlt /> },
//     { title: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     { title: "Payslips", icon: <FaMoneyCheckAlt /> },
//     { title: "Profile", icon: <FaUser /> },
//     { title: "Bank Account Details", icon: <SiHdfcbank /> },
//     { title: "Apply Leave", icon: <FaSignOutAlt /> },
//     { title: "Projects", icon: <FaProjectDiagram /> },
//     { title: "Inbox", icon: <FaInbox /> },
//     { title: "Chats", icon: <FaComments /> },
//     { title: "Attendance", icon: <FaClipboardList /> },
//     { title: "Rules", icon: <FaGavel /> },
//     { title: "Tickets", icon: <FaTicketAlt /> },
//   ];

//   const handleOptionClick = (option) => {
//     setActiveTab(option.title);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <div className="relative  bg-[#e65f2b] bg-opacity-10 ">
//       <EmployeeNavBar />
//       <div
//         className={`flex ${
//           isSidebarCollapsed ? "w-16" : "w-[240px]"
//         } pb-10 h-screen fixed z-10 top-0 overflow-y-auto bg-[#e65f2b] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
//       >
//         <div className="flex flex-col pr-3 text-white">
//         
//           <div className="flex justify-between items-center pt-10  pb-5 pl-5">
//             <IoMdMenu
//               className="text-white h-[30px] absolute  top-4 cursor-pointer"
//               onClick={toggleSidebar}
//             />
//           </div>
//           <div>
//             {!isSidebarCollapsed && (
//               <div className="flex items-center relative top-0 pb-4 px-2">
//                 <img
//                   src={profile}
//                   className="rounded-full w-[50px] h-[50px]"
//                   alt="Profile"
//                 />
//                 <p className="text-[16px] pl-2">Welcome User</p>
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col">
//             {options.map((option, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer
//                    ${

//                   activeTab === option.title ? "bg-white text-[#ef5f2b]" : ""
//                 }`}

//                 onClick={() => handleOptionClick(option)}
//               >
//                 <div className="p-3 pl-4 text-[16px] flex items-center">
//                   {option.icon}
//                   {!isSidebarCollapsed && (
//                     <span className="ml-3">{option.title}</span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//           <div className="text-2xl  font-bold">
//           {activeTab === "Payslips" ? (
//             <Payslips />
//           ) : (
//            ""
//           )}
//         </div>
//       </div>
//       <div
//         className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <div className="text-2xl  font-bold">
//           {activeTab === "All Employees" ? (
//             <AllEmployees />
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div
//         className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <div className="text-2xl  font-bold">
//           {activeTab === "Holidays" ? (
//             <Holiday />
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div
//         className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <div className="text-2xl  font-bold">
//           {activeTab === "Events" ? (
//             <Events />
//           ) : (

//             ""
//           )}
//         </div>
//       </div>
//       <div
//         className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <div className="text-2xl  font-bold">
//           {activeTab === "All Employees" ? <AllEmployees /> : ""}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeSideBar;







// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";
// // import profile from "../../../assets/hr/profile/man.png";
// import profile from "../assets/hr/profile/man.png";
// import EmployeeNavBar from "./EmployeeNavBar";
// import AttendancePage from "../components/hr/attendence/Attendencepage";
// import {
//   FaUsers,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaMoneyCheckAlt,
//   FaUser,
//   FaSignOutAlt,
//   FaProjectDiagram,
//   FaInbox,
//   FaComments,
//   FaClipboardList,
//   FaGavel,
//   FaTicketAlt,
// } from "react-icons/fa";
// import { SiHdfcbank } from "react-icons/si";

// const EmployeeSideBar = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);

//   const options = [
//     { title: "All Employees", icon: <FaUsers /> },
//     { title: "Holidays", icon: <FaCalendarAlt /> },
//     { title: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     {
//       title: "Payroll",
//       icon: <FaMoneyCheckAlt />,
//       subOptions: [
//         "Run payroll",
//         "Payroll Summary",
//         "Payroll settings",
//         "Advances/loans",
//         "payslips",
//         "settlements",
//         "PayrollForms",
//         "Direct deposits",
//         "YTD important",
//         "Gratuity Calculator",
//         "Estimated tax sheet",
//       ],
//     },
//     { title: "Profile", icon: <FaUser /> },
//     { title: "Bank Account Details", icon: <SiHdfcbank /> },
//     { title: "Apply Leave", icon: <FaSignOutAlt /> },
//     { title: "Projects", icon: <FaProjectDiagram /> },
//     { title: "Inbox", icon: <FaInbox /> },
//     { title: "Chats", icon: <FaComments /> },
//     { title: "Attendance", icon: <FaClipboardList /> },
//     { title: "Rules", icon: <FaGavel /> },
//     { title: "Tickets", icon: <FaTicketAlt /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Payroll") {
//       setIsPayrollDropdownOpen(!isPayrollDropdownOpen);
//     } else {
//       setActiveTab(option.title);
//     }
//   };

//   const handleSubOptionClick = (subOption) => {
//     setActiveTab(subOption);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Attendance":
//         return <AttendancePage />;
//       // Add cases for other tabs here
//       default:
//         return (
//           <div className="text-2xl pt-20 font-bold">
//             Selected Option: {activeTab || "None"}
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex mt-5">
//       <div
//         className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${
//           isSidebarCollapsed ? "w-16" : "w-[240px]"
//         } overflow-y-hidden`}
//       >
//         <div className="flex flex-col text-white overflow-y-scroll hide-scrollbar">
//           <div className="flex justify-between items-center p-4">
//             <IoMdMenu
//               className="text-white h-[30px] cursor-pointer"
//               onClick={toggleSidebar}
//             />
//             {!isSidebarCollapsed && (
//               <div className="flex items-center ml-3 px-2">
//                 <img
//                   src={profile}
//                   className="rounded-full w-[50px] h-[50px]"
//                   alt="Profile"
//                 />
//                 <p className="text-[14px] text-white pl-2">Welcome! User</p>
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col">
//             {options.map((option, index) => (
//               <div key={index}>
//                 <div
//                   className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                     activeTab === option.title ? "bg-white text-[#e65f2b]" : ""
//                   }`}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   <div className="p-3 pl-4 text-[16px] flex items-center">
//                     {option.icon}
//                     {!isSidebarCollapsed && (
//                       <>
//                         <span className="ml-3">{option.title}</span>
//                         {option.title === "Payroll" && (
//                           <FaChevronDown
//                             className={`ml-20 transform transition-transform ${
//                               isPayrollDropdownOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         )}
//                       </>
//                     )}
//                   </div>
//                 </div>
//                 {option.subOptions && isPayrollDropdownOpen && (
//                   <div className="ml-8 mt-1">
//                     {option.subOptions.map((subOption, subIndex) => (
//                       <div
//                         key={subIndex}
//                         className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                           activeTab === subOption
//                             ? "bg-white text-[#e65f2b]"
//                             : ""
//                         }`}
//                         onClick={() => handleSubOptionClick(subOption)}
//                       >
//                         <div className="p-3 text-[14px]">{subOption}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex-1 p-4 transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <EmployeeNavBar />
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default EmployeeSideBar;


import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import Attendance from "./options/attendance/Attendance";
import Events from "./options/events/Events";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Payslip from "./options/payslips/Payslip"
import EmployeHoliday from "./options/employe_holiday/EmployeHoliday"

import {
  FaUsers,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaMoneyCheckAlt,
  FaUser,
  FaSignOutAlt,
  FaProjectDiagram,
  FaInbox,
  FaComments,
  FaClipboardList,
  FaGavel,
  FaTicketAlt,
} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SiHdfcbank } from "react-icons/si";
import EmployeeActivities from "./options/employeActivites/EmployeeActivities"
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiHandDepositFill } from "react-icons/pi";
import AllEmployees from "../employee/options/allEmployees/AllEmployees"
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { getEmployee } from "../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth);

  const options = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        { name: "Payslips", icon: <FaLongArrowAltRight /> },
        { name: "Salary Structure", icon: <FaLongArrowAltRight /> },
        { name: "Declaration", icon: <FaLongArrowAltRight /> },
        { name: "Bank Account", icon: <FaLongArrowAltRight /> },
      ],
    },
    { title: "Profile", icon: <FaUser /> },
    { title: "Bank Account Details", icon: <SiHdfcbank /> },
    { title: "Apply Leave", icon: <FaSignOutAlt /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Inbox", icon: <FaInbox /> },
    { title: "Chats", icon: <FaComments /> },
    { title: "Attendance", icon: <FaClipboardList /> },
    { title: "Rules", icon: <FaGavel /> },
    { title: "Tickets", icon: <FaTicketAlt /> },
  ];

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      setOpenDropdown(openDropdown === option.title ? "" : option.title);
    } else {
      setActiveTab(option.title);
      setOpenDropdown(""); // Close other dropdowns
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation(); // Prevent event propagation to avoid closing dropdown
    setActiveTab(subOption.name);
    // The dropdown remains open
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getEmployee(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  const renderContent = () => {
    switch (activeTab) {
      case "payslips":
        return <Payslips />;
        break;
      case "All Employees":
        return <AllEmployees />;
        break;
      case "Events":
        return <Events />;
        break;
      case "Apply Leave":
        return <ApplyLeave />;
        break;
      default:
        return (
          <div className="text-2xl pt-20 font-bold">
            Selected Option: {activeTab || "None"}
          </div>
        );
    }
  };

  return (
    <div className="relative h-auto bg-[#e65f2b] bg-opacity-10">
      <EmployeeNavBar />
      <div
        className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${isSidebarCollapsed ? "w-16" : "w-[240px]"
          } pb-10 h-screen fixed z-10 top-0 overflow-y-auto bg-[#e65f2b] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-3 text-white">
          <div className="flex justify-between items-center pt-10 pb-5 pl-5">
            <IoMdMenu
              className="text-white h-[30px] absolute top-4 cursor-pointer"
              onClick={toggleSidebar}
            />
            {!isSidebarCollapsed && (
              <div className="flex items-center relative top-0 pb-4 px-2 ">
                <img
                  src={profile}
                  className="rounded-full w-[50px] h-[50px]"
                  alt="Profile"
                />
                <p className="text-[16px] text-white pl-2">Welcome {auth.employee ? auth.employee.firstName.toUpperCase() : "user"}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 hover:bg-white  hover:text-[#e65f2b] rounded-r-3xl cursor-pointer ${activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                  ? "bg-white text-[#e65f2b]"
                  : ""
                  }`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="p-3 pl-4 text-[16px] flex items-center">
                  {option.icon}
                  {!isSidebarCollapsed && (
                    <span className="ml-3">{option.title}</span>
                  )}
                  {option.subOptions && (
                    <span className="ml-16  ">
                      {openDropdown === option.title ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {option.subOptions && openDropdown === option.title && (
                  <div
                    className={`bg-white text-[#e65f2b] transition-all duration-300`}
                  >
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-3 text-nowrap pl-8 flex items-center my-1 cursor-pointer rounded-br-3xl ${activeTab === subOption.name
                          ? "bg-[#e65f2b]  text-white rounded-r-3xl "
                          : "hover:bg-[#e65f2b] hover:bg-opacity-60 hover:rounded-r-3xl   hover:text-white"
                          }`}
                        onClick={(event) =>
                          handleSubOptionClick(event, subOption)
                        }
                      >
                        {subOption.icon}
                        {!isSidebarCollapsed && (
                          <span className="ml-3">{subOption.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`flex-1 p-4 transition-all duration-300 ${isSidebarCollapsed ? "ml-16" : "ml-[240px]"
          }`}
      >
        <div className="">
          {activeTab === "All Employees" && <AllEmployees />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Apply Leave" && <ApplyLeave />}

          {/* payroll */}
          {activeTab === "Payslips" && <Payslip />}
          {activeTab === "Salary Structure" && <SalaryStructure />}
          {activeTab === "Declaration" && <Declaration />}
          {activeTab === "Bank Account" && <BankAccount />}
          {activeTab === "Chats" && <Chat />}
          {activeTab === "Projects" && <ProjectList />}
          {activeTab === "Rules" && <Rules />}
          {activeTab === "Bank Account Details" && <BankAccountDetails />}
          {activeTab === "Activities" && <EmployeeActivities />}
          {activeTab === "Profile" && <Profile />}
          {activeTab === "Holidays" && <EmployeHoliday />}
          {/* {activeTab === "Settlements" && <Settlements />} */}
          {/* {activeTab === "Payroll Forms" && <PayrollForms />} */}
          {/* {activeTab === "Direct deposits" && <DirectDeposits />} */}
          {/* {activeTab === "YTD import" && <YTD />} */}
          {/*  */}
          {/* Add additional conditional rendering for other active tabs if needed */}
          {activeTab === "Attendance" && <Attendance />}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideBar;