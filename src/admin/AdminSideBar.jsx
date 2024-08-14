import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../adminAssets/profile/boy.png";
import AdminNavBar from "./AdminNavBar";
import AdminNavigation from "./options/accountDetails/AccountNavigation";
import CompanySettingsNavigation from "./options/companySettings/CompanySettingsNavigation";

import { FaTasks, FaUser, FaInbox } from "react-icons/fa";

import { RiMoneyRupeeCircleFill } from "react-icons/ri";

import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";

const AdminSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const options = [
    { title: "Company Information", icon: <IoInformationCircle /> },
    { title: "Account Details", icon: <MdManageAccounts /> },
    { title: "Company Settings", icon: <IoSettings /> },
    { title: "Roles", icon: <FaPeopleGroup /> },
    { title: "User", icon: <FaUser /> },
    {
      title: "Payroll",
      icon: <MdOutlinePayment />,
      subOptions: [
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Salary Structure", icon: <FaTasks /> },
        { name: "Declaration", icon: <BsFileEarmarkSpreadsheet /> },
        { name: "Bank Account", icon: <RiBankFill /> },
      ],
    },
    { title: "Support", icon: <FaInbox /> },
  ];

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      setOpenDropdown(openDropdown === option.title ? "" : option.title);
    } else {
      setActiveTab(option.title);
      setOpenDropdown("");
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation();
    setActiveTab(subOption.name);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <AdminNavBar />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #E65F2B, #FFC252)",
        }}
        className={`flex flex-col h-screen fixed mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 h-screen fixed z-10 top-0 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-4 text-white">
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
                <p className="text-[16px] pl-2">Welcome Admin</p>
              </div>
            )}
          </div>
          <div className="flex bg-transparent flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex   flex-col transition-all my-1 duration-500 cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#e65f2b] rounded-r-3xl"
                    : "hover:bg-white hover:text-[#e65f2b] rounded-r-3xl"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="p-3   pl-4 text-[16px] flex items-center">
                  {option.icon}
                  {!isSidebarCollapsed && (
                    <span className="ml-3">{option.title}</span>
                  )}
                  {!isSidebarCollapsed && option.subOptions && (
                    <span className="ml-auto">
                      {openDropdown === option.title ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {option.subOptions && openDropdown === option.title && (
                  <ul
                    // style={{
                    //   backgroundImage:
                    //     "linear-gradient(to bottom, #f18b3c, #Fab14b)",
                    //   backgroundColor: "transparent",
                    //   border: "none",
                    //   boxShadow: "none",
                    // }}
                    className="text-[#e65f2b] pr-2  rounded-br-3xl bg-transparent  transition-all duration-1000"
                  >
                    {option.subOptions.map((subOption, subIndex) => (
                      <li
                        key={subIndex}
                        className={`p-3  text-nowrap pl-4 flex items-center my-1 cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-[#e65f2b] bg-opacity-60 text-white rounded-r-full"
                            : "hover:bg-[#e65f2b]  hover:bg-opacity-60 hover:rounded-r-full hover:text-white"
                        }`}
                        onClick={(event) =>
                          handleSubOptionClick(event, subOption)
                        }
                      >
                        {subOption.icon}
                        {!isSidebarCollapsed && (
                          <span className="ml-3">{subOption.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
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
          {activeTab === "Account Details" && <AdminNavigation />}
          {activeTab === "Company Settings" && <CompanySettingsNavigation />}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
