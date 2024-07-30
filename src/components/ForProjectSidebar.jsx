

import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaUser,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaClipboardList,
  FaBuilding,
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { useSelector } from "react-redux";
// import HRDashboard from "../hr_dashboard/HRDashboard";

const ForProjectSidebar = ({setActiveTab}) =>{
  // const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  // const [showAccountOptions, setShowAccountOptions] = useState(false);
  // const [showReportOptions, setShowReportOptions] = useState(false);
  // const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const jwt = localStorage.getItem("token1");
  const auth = useSelector((state) => state.auth.user?.email);
  const user = localStorage.setItem("user", auth);

  const options = [
    {
      title: "Dashboard",
      component: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    { title: "Inbox", component: "Inbox", icon: <FaCalendarAlt /> },
    { title: "Chat", component: "Chat", icon: <FaCalendarCheck /> },
    { title: "Projects", component: "", icon: <FaTasks /> },
    { title: "Clients", component: "", icon: <MdOutlineSocialDistance /> },
    { title: "Teams", component: "Teams", icon: <FaUserFriends /> },
    { title: "Tickets", component: "Tickets", icon: <FaUserFriends /> },
    // { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
    // { title: "Report", component: "", icon: <FaFileAlt /> },
    // { title: "User", component: "", icon: <FaUser /> },
    // { title: "Authentication", component: "", icon: <FaLock /> },
  ];

  // const employeeOptions = [
  //   { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
  //   {
  //     title: "Leave Requests",
  //     component: "LeaveRequest",
  //     icon: <FaClipboardList />,
  //   },
  //   {
  //     title: "Attendance",
  //     component: "Attendance",
  //     icon: <FaCalendarCheck />,
  //   },
  //   { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
  // ];

  // const accountOptions = [
  //   {
  //     title: "Payment",
  //     component: "PaymentsTab",
  //     icon: <FaCalendarCheck />,
  //   },
  //   { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
  //   { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
  // ];

  const projectOptions = [
    {
      title: "Add Project",
      component: "Add Project",
      icon: <FaBuilding />,
    },
    {
      title: "Project List",
      component: "Project List",
      icon: <FaBuilding />,
    },
    {
      title: "Project Grid",
      component: "Project Grid",
      icon: <FaBuilding />,
    },
    {
      title: "Project Detail",
      component: "Project Detail",
      icon: <FaBuilding />,
    },
  ];

  // const authOptions = [
  //   { title: "Login", link: "/login", icon: <FaBuilding /> },
  //   { title: "Register", link: "/register", icon: <FaBuilding /> },
  //   {
  //     title: "Forget Password",
  //     link: "/forget-password",
  //     icon: <FaBuilding />,
  //   },
  //   { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  // ];
  

  const handleOptionClick = (option) => {
    if (option.title === "Project") {
      setShowProjectOptions(!showProjectOptions);
    
    } else {
        console.log("Active tab ckicked", option.component);
      setActiveTab(option.component);
      setShowProjectOptions(false);
     
    }
  };
  // const handleOptionClick = (option) => {
  //   if (option.title === "Project") {
  //     setShowEmployeeOptions(!showEmployeeOptions);
  //   } else if (option.title === "Account") {
  //     setShowAccountOptions(!showAccountOptions);
  //   } else if (option.title === "Report") {
  //     setShowReportOptions(!showReportOptions);
  //   } else if (option.title === "Authentication") {
  //     setShowAuthOptions(!showAuthOptions);
  //   } else {
  //       console.log("Active tab ckicked", option.component);
  //     setActiveTab(option.component);
  //     setShowEmployeeOptions(false);
  //     setShowAccountOptions(false);
  //     setShowReportOptions(false);
  //     setShowAuthOptions(false);
  //   }
  // };

  const handleProjectOptionClick = (option) => {
    setActiveTab(option.component);
  };
  // const handleReportOptionClick = (option) => {
  //   setActiveTab(option.component);
  // };

  // const handleAccountOptionClick = (option) => {
  //   setActiveTab(option.component);
  // };
  // const handleAuthOptionClick = (option) => {
  //   setActiveTab(option.component);
  // };

  // const handleHeaderClick = (header) => {
  //   setSelectedHeader(header);
  // };

  return (
    <>

            <div className="flex flex-col pr-3 text-white">
                <>
                  {options.map((option, index) => (
                    <div key={index}>
                      <div
                        className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        <div className="p-3 pl-4 text-xl flex items-center">
                          {option.icon}
                          <span className="ml-3">{option.title}</span>
                        </div>
                        {option.title === "Project" && (
                          <div className="ml-auto pr-4">
                            {showProjectOptions ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                        )}
                        {/* {option.title === "Account" && (
                          <div className="ml-auto pr-4">
                            {showAccountOptions ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                        )}
                        {option.title === "Report" && (
                          <div className="ml-auto pr-4">
                            {showReportOptions ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                        )}
                        {option.title === "Authentication" && (
                          <div className="ml-auto pr-4">
                            {showAuthOptions ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                        )} */}
                      </div>
                      {option.title === "Project" && showProjectOptions && (
                        <div className="transition-all duration-500 ml-8 ">
                          {projectOptions.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                              onClick={() => handleProjectOptionClick(item)}
                            >
                              <div className="p-3 pl-4 text-xl flex items-center">
                                {item.icon}
                                <span className="ml-3">{item.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* {option.title === "Account" && showAccountOptions && (
                        <div className="transition-all duration-500 ml-8 ">
                          {accountOptions.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                              onClick={() => handleAccountOptionClick(item)}
                            >
                              <div className="p-3 pl-4 text-xl flex items-center">
                                {item.icon}
                                <span className="ml-3">{item.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {option.title === "Report" && showReportOptions && (
                        <div className="transition-all duration-500 ml-8 ">
                          {reportOptions.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                              onClick={() => handleReportOptionClick(item)}
                            >
                              <div className="p-3 pl-4 text-xl flex items-center">
                                {item.icon}
                                <span className="ml-3">{item.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {option.title === "Authentication" && showAuthOptions && (
                        <div className="transition-all duration-500 ml-8 ">
                          {authOptions.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.link}
                              className="flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[260px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer"
                            >
                              <div className="p-3 pl-4 text-xl flex items-center">
                                {item.icon}
                                <span className="ml-3">{item.title}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      )} */}
                    </div>
                  ))}
                </>
            </div>
    </>
  );
}

export default ForProjectSidebar;