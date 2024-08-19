import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import profile from "../employeeAssets/profile/boy.png";
import EmployeeNavBar from "./EmployeeNavBar";
import Main from "./options/payslips/Main";
import AllEmployees from "./options/allEmployees/AllEmployees";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import Payslip from "./options/payslips/Payslip";
import EmployeHoliday from "./options/employe_holiday/EmployeHoliday";
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
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { PiHandDepositFill } from "react-icons/pi";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import SalaryStructure from "./options/payslips/SalaryStructure";
import Declaration from "./options/payslips/Declaration";
import BankAccount from "./options/payslips/BankAccount";
import Chat from "./options/chat/Chat";
import Rules from "./options/rules/Rules";
import ProjectList from "./options/projectList/ProjectList";
import Profile from "./options/profile/Profile";
import Tickets from "./options/tickets/Tickets";
import { useDispatch, useSelector } from "react-redux";
import { employee, getEmployee, logout } from "../State/Auth/Action";
import EmployeDashboard from "./options/employe_dashboard/EmployeDashboard";
import { useNavigate } from "react-router-dom";

const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState("Employees Dashboard");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [tooltip, setTooltip] = useState({
    show: false,
    title: "",
    position: { x: 0, y: 0 },
  });

  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const options = [
    { title: "Employees Dashboard", icon: <FaUsers /> },
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        { name: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
        { name: "Salary Structure", icon: <FaMoneyBillTransfer /> },
        { name: "Declaration", icon: <BsFileEarmarkSpreadsheet /> },
        { name: "Bank Account", icon: <PiHandDepositFill /> },
      ],
      showAlways: true, // This is a custom flag to indicate that the icon should always be shown
    },
    { title: "Profile", icon: <FaUser /> },
    { title: "Apply Leave", icon: <FaSignOutAlt /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Inbox", icon: <FaInbox /> },
    { title: "Chats", icon: <FaComments /> },
    { title: "Attendance", icon: <FaClipboardList /> },
    { title: "Rules", icon: <FaGavel /> },
    { title: "Tickets", icon: <FaTicketAlt /> },
    { title: "Logout", icon: <FaSignOutAlt /> },
  ];

  useEffect(() => {
    if (jwt) {
      dispatch(getEmployee(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  useEffect(() => {
    // Automatically collapse sidebar on small screens
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleOptionClick = (option) => {
    if (option.subOptions) {
      setOpenDropdown(openDropdown === option.title ? "" : option.title);
    } else {
      setActiveTab(option.title);
      setOpenDropdown("");
      if (option.title === "Logout") {
        handleLogout();
      }
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation();
    setActiveTab(subOption.name);
  };

  const toggleSidebar = () => {
    // Disable sidebar toggle on small screens
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/");
  };

  const handleIconClick = (iconTitle) => {
    setActiveTab(iconTitle);
  };

  return (
    <div className="relative bg-[#e65f2b] bg-opacity-10">
      <EmployeeNavBar onIconClick={handleIconClick} options={options} />
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
                <p className="text-[16px] text-white pl-2">
                  Welcome{" "}
                  {auth.employee
                    ? auth.employee.firstName.toUpperCase() +
                      " " +
                      auth.employee.lastName.toUpperCase()
                    : "user"}
                </p>
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

                  {option.subOptions && !isSidebarCollapsed && (
                    <span className="ml-auto">
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

          {activeTab === "Payslips" && <Payslip />}
          {activeTab === "Salary Structure" && <SalaryStructure />}

          {activeTab === "Declaration" && <Declaration />}
          {activeTab === "Bank Account" && <BankAccount />}
          {activeTab === "Chats" && <Chat />}
          {activeTab === "Projects" && <ProjectList />}
          {activeTab === "Rules" && <Rules />}

          {activeTab === "Activities" && <EmployeeActivities />}
          {activeTab === "Profile" && <Profile />}
          {activeTab === "Holidays" && <EmployeHoliday />}
          {activeTab === "Inbox" && <EmployeInbox />}
          {activeTab === "Tickets" && <Tickets />}
          {activeTab === "Employees Dashboard" && <EmployeDashboard />}
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

export default EmployeeSideBar;
