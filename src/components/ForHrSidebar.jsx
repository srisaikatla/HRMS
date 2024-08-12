/* eslint-disable react/prop-types */
// 

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaLock,
  FaChevronDown,
  FaChevronUp,
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
import { logout } from "../State/Auth/Action";
import { useDispatch } from "react-redux";



const ForHrSidebar = ({ isSidebarCollapsed, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showPayrollOptions, setShowPayrollOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showHrManagementOptions, setShowHrManagementOptions] = useState(false);
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
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
    // { title: "New Employee", icon: <FaBuilding /> },
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Compensation", icon: <FaBuilding /> },
    { title: "Employee Import", icon: <FaBuilding /> },
    { title: "IT Declarations", icon: <FaBuilding /> },
    { title: "Leaves", icon: <FaBuilding /> },
    // { title: "Attendance", icon: <FaCalendarCheck /> },
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
    { title: "Logout", link: "/login", icon: <FaBuilding /> },
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
        break;
    }
  };

  const handleLogout = () => {
    dispatch(logout(jwt));
    localStorage.removeItem("jwt");
    navigate("/option");
  };

  const handleOptionClickNavigate = (authOption) => {
    navigate(authOption.link);
  };

  return (
    <div className="pr-2">
      <ul className="pt-3 pr-1">
        {options.map((option) => (
          <React.Fragment key={option.title}>
            <li
              className={`flex justify-between text-[16px] pl-5 py-3  mb-1 items-center cursor-pointer ${activeTab === option.title
                ? "bg-white rounded-r-full text-[#ef5f2b]"
                : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
                }`}
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-center">
                {option.icon}
                <span
                  className={`pl-2 ${isSidebarCollapsed ? "hidden" : "inline"
                    }`}
                >
                  {option.title}
                </span>
              </div>
              {!isSidebarCollapsed && option.hasSubOptions && (
                <span className="pr-5">
                  {option.title === "Employee" && showEmployeeOptions ? (
                    <FaChevronUp />
                  ) : option.title === "HR Management" &&
                    showHrManagementOptions ? (
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
                    className={`flex justify-between text-[16px] bg-opacity-50  pl-8 py-3 mb-1 cursor-pointer   ${activeTab === showHrManagementOptions.title
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
                          className={`text-[16px] pl-12 py-3 mb-1 cursor-pointer   ${activeTab === employeeOption.title
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
            {/*  */}
            {!isSidebarCollapsed &&
              option.title === "PayRoll" &&
              showPayrollOptions && (
                <ul className="">
                  {payrollOptions.map((subOption) => (
                    <li
                      key={subOption.title}
                      className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${activeTab === subOption.title
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
              option.title === "Reports" &&
              showReportOptions && (
                <ul className="">
                  {reportOptions.map((subOption) => (
                    <li
                      key={subOption.title}
                      className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${activeTab === subOption.title
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
                      className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${activeTab === subOption.title
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
                      className={`flex justify-start items-center text-[16px] pl-8 py-2 cursor-pointer  mb-1 ${activeTab === authOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                      onClick={() =>
                        authOption.title === "Logout"
                          ? handleLogout()
                          : handleOptionClickNavigate(authOption)
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
  );
};

export default ForHrSidebar;
