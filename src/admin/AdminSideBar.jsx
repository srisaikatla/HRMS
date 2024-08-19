import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../adminAssets/profile/boy.png";
import AdminNavBar from "./AdminNavBar";
import { IoInformationCircle, IoSettings } from "react-icons/io5";
import { MdManageAccounts, MdOutlinePayment } from "react-icons/md";
import { FaUser, FaInbox, FaTasks } from "react-icons/fa";
import { RiMoneyRupeeCircleFill, RiBankFill } from "react-icons/ri";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import CompanySettingsNavigation from "./options/company_settings/CompanySettingsNavigation";
import CompanyInformation from "./options/company_info/CompanyInformation";
import User from "./options/users/User";
import Roles from "./options/roles/Roles";
import AccountDetails from "./options/accountdetailes/AccountDetails";

const AdminSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
  };

  const handleMouseOver = (event, title) => {
    if (isSidebarCollapsed) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        show: true,
        title,
        position: { x: rect.right + 10, y: rect.top },
      });
    }
  };

  const handleMouseOut = () => {
    setTooltip({ show: false, title: "", position: { x: 0, y: 0 } });
  };

  const options = [
    { title: "Company Information", icon: <IoInformationCircle /> },
    { title: "Account Details", icon: <MdManageAccounts /> },
    { title: "Company Settings", icon: <IoSettings /> },
    { title: "Roles", icon: <FaUser /> },
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
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  return (
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <AdminNavBar onIconClick={handleIconClick} options={options} />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #E65F2B, #FFC252)",
        }}
        className={`flex flex-col h-screen fixed mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 h-screen fixed top-0 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
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
                className={`flex flex-col transition-all my-1 duration-500 cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#e65f2b] rounded-r-3xl"
                    : "hover:bg-white hover:text-[#e65f2b] rounded-r-3xl"
                }`}
                onClick={() => handleOptionClick(option)}
                onMouseOver={(event) => handleMouseOver(event, option.title)}
                onMouseOut={handleMouseOut}
              >
                <div className="p-3 pl-4 text-[16px] flex items-center">
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
                  <ul className="text-[#e65f2b] pr-2 rounded-br-3xl bg-transparent transition-all duration-1000">
                    {option.subOptions.map((subOption, subIndex) => (
                      <li
                        key={subIndex}
                        className={`p-3 text-nowrap pl-14 flex items-center cursor-pointer ${
                          activeTab === subOption.name
                            ? "bg-[#e65f2b] bg-opacity-20 rounded-lg"
                            : ""
                        }`}
                        onClick={(event) =>
                          handleSubOptionClick(event, subOption)
                        }
                      >
                        {subOption.icon}
                        <span className="ml-3">{subOption.name}</span>
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
          {activeTab === "Company Settings" && <CompanySettingsNavigation />}
          {activeTab === "Company Information" && <CompanyInformation />}
          {activeTab === "User" && <User />}
          {activeTab === "Roles" && <Roles />}
          {activeTab === "Account Details" && <AccountDetails />}
        </div>
      </div>

      {tooltip.show && (
        <div
          className="absolute bg-white text-[#e65f2b] p-2 rounded-md shadow-lg z-50"
          style={{
            top: `${tooltip.position.y}px`,
            left: `${tooltip.position.x}px`,
          }}
        >
          {tooltip.title}
        </div>
      )}
    </div>
  );
};

export default AdminSideBar;
