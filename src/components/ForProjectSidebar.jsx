import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaUserFriends,
  FaFileAlt,
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaClipboardList,

} from "react-icons/fa";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";

const ForProjectSidebar = ({ isSidebarCollapsed, activeTab, setActiveTab }) => {
  const [showProjectOptions, setShowProjectOptions] = useState(false);

  const projectOptions = [
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", icon: <FaFileAlt /> },
    { title: "Chat", icon: <FaUser /> },
    { title: "Project", icon: <FaTasks />, hasSubOptions: true },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", icon: <GoProjectSymlink /> },
    { title: "Project List", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", icon: <GrProjects /> },
    { title: "Project Detail", icon: <TbListDetails /> },
  ];

  const handleOptionClick = (option) => {
    switch (option.title) {
      case "Project":
        setShowProjectOptions(!showProjectOptions);
        break;
      default:
        setActiveTab(option.title);
        break;
    }
  };
  return (
    <div className="pr-2">
      <ul className="pt-3 pr-1">
        {projectOptions.map((option) => (
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
                  {option.title === "Project" && showProjectOptions ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              )}
            </li>
            {!isSidebarCollapsed &&
              option.title === "Project" &&
              showProjectOptions && (
                <ul className="">
                  {projectDropdownOptions.map((subOption) => (
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
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ForProjectSidebar;
