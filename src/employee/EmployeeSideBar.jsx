import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import Main from "./options/payslips/Main";
import AllEmployees from "./options/allEmployees/AllEmployees";
// import Events from "./options/events/Events";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Settlements from "./options/payslips/Settlements";
import PayrollForms from "./options/payslips/PayrollForms";
import DirectDeposits from "./options/payslips/DirectDeposits";
import YTD from "./options/payslips/YTDimport";
// import Attendance from "./options/attendance/Attendance";
// import Attendance from "./options/attendance/Attendance";
import Events from "../components/hr/events/Events";
// import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Payslip from "./options/payslips/Payslip";

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
import { GiPayMoney } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
// import { PiHandDepositFill } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiHandDepositFill } from "react-icons/pi";
// import AllEmployees from "../employee/options/allEmployees/AllEmployees";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import SalaryStructure from "./options/payslips/SalaryStructure"
import Declaration from "./options/payslips/Declaration"
import BankAccount from "./options/payslips/BankAccount"
import Chat from "./options/chat/Chat";
import Rules from "./options/rules/Rules"
import ProjectList from "./options/projectList/ProjectList";
import Profile from "./options/profile/Profile";
import BankAccountDetails from "./options/bankAccountDetails/BankAccountDetails";
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
        return <Payslip />;
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
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#e65f2b]   rounded-r-3xl"
                    : " hover:bg-white hover:text-[#e65f2b] rounded-r-3xl"
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
                    className={`bg-[#e65f2b]  text-white transition-all duration-300`}
                  >
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-3 text-nowrap pl-4 flex items-center my-1 cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-white bg-opacity-60 text-[#e65f2b] rounded-r-full"
                            : "hover:bg-white hover:bg-opacity-60 hover:rounded-r-full hover:text-[#e65f2b]"
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
        className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
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
          {activeTab === "Inbox" && <EmployeInbox />}
          {/* {activeTab === "Settlements" && <Settlements />} */}
          {/* {activeTab === "Payroll Forms" && <PayrollForms />} */}
          {/* {activeTab === "Direct deposits" && <DirectDeposits />} */}
          {/* {activeTab === "YTD import" && <YTD />} */}
          {/*  */}
          {/* Add additional conditional rendering for other active tabs if needed */}
          {/* {activeTab === "Attendance" && <Attendance />} */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideBar;
