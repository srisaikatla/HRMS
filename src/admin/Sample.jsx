import React, { useState } from "react";
import { IoInformationCircle, IoSettings } from "react-icons/io5";
import { MdManageAccounts, MdOutlinePayment } from "react-icons/md";
import { FaUser, FaInbox } from "react-icons/fa";
import { RiMoneyRupeeCircleFill, RiBankFill } from "react-icons/ri";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import AdminNavBar from "./AdminNavBar";

// Placeholder components for each tab
const CompanyInformation = () => <div>Company Information Content</div>;
const AccountDetails = () => <div>Account Details Content</div>;
const CompanySettings = () => <div>Company Settings Content</div>;
const Roles = () => <div>Roles Content</div>;
const User = () => <div>User Content</div>;
const Payslips = () => <div>Payslips Content</div>;
const SalaryStructure = () => <div>Salary Structure Content</div>;
const Declaration = () => <div>Declaration Content</div>;
const BankAccount = () => <div>Bank Account Content</div>;
const Support = () => <div>Support Content</div>;

const AdminSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const options = [
    {
      title: "Company Information",
      icon: <IoInformationCircle size={20} />,
      subOptions: [
        { name: "Account Details", icon: <MdManageAccounts size={20} /> },
        { name: "Company Settings", icon: <IoSettings size={20} /> },
      ],
    },
    { title: "Roles", icon: <FaUser size={20} /> },
    { title: "User", icon: <FaUser size={20} /> },
    {
      title: "Payslips",
      icon: <MdOutlinePayment size={20} />,
      subOptions: [
        {
          name: "Salary Structure",
          icon: <RiMoneyRupeeCircleFill size={20} />,
        },
        { name: "Declaration", icon: <BsFileEarmarkSpreadsheet size={20} /> },
        { name: "Bank Account", icon: <RiBankFill size={20} /> },
      ],
    },
    { title: "Support", icon: <FaInbox size={20} /> },
  ];

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      setOpenDropdown(openDropdown === option.title ? null : option.title);
    } else {
      setActiveTab(option.title);
    }
  };

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Company Information":
        return <CompanyInformation />;
      case "Account Details":
        return <AccountDetails />;
      case "Company Settings":
        return <CompanySettings />;
      case "Roles":
        return <Roles />;
      case "User":
        return <User />;
      case "Payslips":
        return <Payslips />;
      case "Salary Structure":
        return <SalaryStructure />;
      case "Declaration":
        return <Declaration />;
      case "Bank Account":
        return <BankAccount />;
      case "Support":
        return <Support />;
      default:
        return <CompanyInformation />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <AdminNavBar onIconClick={handleIconClick} />
      <div className="flex">
        {/* Sidebar content */}
        <div
          className={`${
            isSidebarCollapsed ? "w-20" : "w-60"
          } bg-gray-800 h-screen text-white`}
        >
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div key={index}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="p-4 flex items-center hover:bg-gray-700"
                >
                  {option.icon}
                  {!isSidebarCollapsed && (
                    <span className="ml-4">{option.title}</span>
                  )}
                </button>
                {option.subOptions &&
                  openDropdown === option.title &&
                  option.subOptions.map((subOption, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => setActiveTab(subOption.name)}
                      className="p-4 pl-12 flex items-center hover:bg-gray-700"
                    >
                      {subOption.icon}
                      {!isSidebarCollapsed && (
                        <span className="ml-4">{subOption.name}</span>
                      )}
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Main content */}
        <div className="flex-grow">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AdminSideBar;
