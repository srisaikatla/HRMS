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
//           {/* <div className="flex justify-between items-center p-4">
//             <IoMdMenu
//               className="text-white h-[30px] cursor-pointer"
//               onClick={toggleSidebar}
//             />
//             {!isSidebarCollapsed && (
//               <div className="flex items-center ml-3 px-2">
//                 <img
//                   src={profile}
//                   className=" w-[50px] h-[50px]"
//                   alt="Profile"
//                 />
//                 <p className="text-[14px] text-white pl-2">Welcome! User</p>
//               </div>
//             )}
//           </div> */}
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
//         <div className="text-2xl  font-bold">
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
//     </div>
//   );
// };

// export default EmployeeSideBar;
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import Attendance from "./options/attendance/Attendance";
import Events from "../components/hr/events/Events";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Payslip from "./options/payslips/Payslip"
// import Payslips from "./options/payslips/Payslip";
// import AllEmployees from "./options/allEmployees/AllEmployees";
// import Events from "./options/events/Events";
// import ApplyLeave from "./options/applyLeave/ApplyLeave";
// import Payslips from "./options/payslips/Payslip";
// import AllEmployees from "./options/allEmployees/AllEmployees";
// import Events from "./options/events/Events";
// import Attendance from "./options/attendance/Attendance";

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
import AllEmployees from "../employee/options/allEmployees/AllEmployees"
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const options = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        // { name: "Run payroll", icon: <GiPayMoney /> },
        // { name: "Payroll Summary", icon: <MdOutlinePayment /> },
        // { name: "Payroll settings", icon: <MdAdminPanelSettings /> },
        // { name: "Advances/loans", icon: <LiaMoneyCheckAltSolid /> },
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Salary Structure", icon: <FaMoneyBillTransfer /> },
        { name: "Declaration", icon: <BsFileEarmarkSpreadsheet /> },
        { name: "Bank Account", icon: <PiHandDepositFill /> },
        // { name: "Settlements", icon: <FaMoneyBillTransfer /> },
        // { name: "Payroll Forms", icon: <GiTakeMyMoney /> },
        // { name: "Direct deposits", icon: <PiHandDepositFill /> },
        // { name: "YTD import", icon: <FaMoneyBillTrendUp /> },
        // { name: "Gratuity Calculator", icon: <TbMoneybag /> },
        // { name: "Estimated tax sheet", icon: <BsFileEarmarkSpreadsheet /> },
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

  const renderContent = () => {
    switch (activeTab) {
      case "payslips":
        return <Payslips />;
        break;
      case "All Employees"  :
        return <AllEmployees />;
        break;
      case "Events"  :
        return <Events />;
        break;
      case "Apply Leave"  :
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
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <EmployeeNavBar />
      <div
        className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 h-screen fixed z-10 top-0 overflow-y-auto bg-[#e65f2b] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-3 text-white">
          <div className="flex justify-between items-center pt-10 pb-5 pl-5">
            <IoMdMenu
              className="text-white h-[30px] absolute top-4 cursor-pointer"
              onClick={toggleSidebar}
            />
            {!isSidebarCollapsed && (
              <div className="flex items-center relative top-0 pb-4 pl-2 ">
                <img
                  src={profile} 
                  className="rounded-full w-[50px] h-[50px]"
                  alt="Profile"
                />
                <p className="text-[16px] text-white pl-2">Welcome! User</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 hover:bg-white hover:text-[#e65f2b] rounded-r-3xl cursor-pointer ${
                  activeTab === option.title ||
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
                    className={`bg-[#e65f2b] text-white transition-all duration-300`}
                  >
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-3 text-nowrap pl-4 flex items-center my-1 cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-white bg-opacity-60 text-[#e65f2b] rounded-r-3xl"
                            : "hover:bg-white hover:bg-opacity-60 hover:rounded-r-3xl hover:text-[#e65f2b]"
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
        className={`flex-1 p-4 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
        }`}
      >
        <div className="">
          {activeTab === "All Employees" && <AllEmployees />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Apply Leave" && <ApplyLeave />}

          {/* payroll */}
          {activeTab === "Payslips" && <Payslip />}
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
