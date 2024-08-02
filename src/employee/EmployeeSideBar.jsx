import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import Payslips from "./options/payslips/Payslip";
import AllEmployees from "./options/allEmployees/AllEmployees";
import Events from "./options/events/Events";

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
import { GiPayMoney, GiChart } from "react-icons/gi";
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
        { name: "Run payroll", icon: <GiPayMoney /> },
        { name: "Payroll Summary", icon: <MdOutlinePayment /> },
        { name: "Payroll settings", icon: <MdAdminPanelSettings /> },
        { name: "Advances/loans", icon: <LiaMoneyCheckAltSolid /> },
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Settlements", icon: <FaMoneyBillTransfer /> },
        { name: "Payroll Forms", icon: <GiTakeMyMoney /> },
        { name: "Direct deposits", icon: <PiHandDepositFill /> },
        { name: "YTD important", icon: <FaMoneyBillTrendUp /> },
        { name: "Gratuity Calculator", icon: <TbMoneybag /> },
        { name: "Estimated tax sheet", icon: <BsFileEarmarkSpreadsheet /> },
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

  return (
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <EmployeeNavBar />
      <div
        className={`flex ${
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
        className={`flex-1 py-4 overflow-y-auto transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
        }`}
      >
        <div className="text-2xl font-bold">
          {activeTab === "Payslips" && <Payslips />}
          {activeTab === "All Employees" && <AllEmployees />}
          {/* Add additional conditional rendering for other active tabs if needed */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideBar;
