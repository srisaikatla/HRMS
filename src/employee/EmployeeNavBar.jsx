/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import { ImProfile } from "react-icons/im";
import { FaEnvelope, FaBars, FaSignOutAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../State/Auth/Action";
import { useNavigate } from "react-router-dom";

function EmployeeNavBar({ onIconClick, options }) {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [tooltip, setTooltip] = useState("");
  const jwt = localStorage.getItem("employeeJwt")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const flattenedOptions = useMemo(() => {
    return options.flatMap((option) => {
      if (option.subOptions) {
        return [
          option,
          ...option.subOptions.map((subOption) => ({
            ...subOption,
            isSubOption: true,
            parentTitle: option.title,
          })),
        ];
      }
      return option;
    });
  }, [options]);

  const handleMouseEnter = (iconName, tooltipText) => {
    setHoveredIcon(iconName);
    setTooltip(tooltipText);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
    setTooltip("");
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#ef5f2b" : "#ef5f2b",
    fontSize: "1.5rem",
    position: "relative",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = flattenedOptions.filter(
        (option) =>
          option.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [searchQuery, flattenedOptions]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    onIconClick(suggestion.title);
    setSearchQuery("");
    setFilteredOptions([]);
  };
  const handleLogout = () => {
    dispatch(logout(jwt));
    localStorage.removeItem("employeeJwt");
    localStorage.removeItem("employee")
    navigate("/option");
  };

  return (
    <>
      <div
        id="main"
        className="w-full flex justify-between items-center relative pb-2 top-0"
      >
        <div
          id="topbar"
          className="flex flex-grow w-full justify-center items-center mt-2 mx-2"
        >
          <div className="h-[42px] bg-[#ef5f2b] ml-10 md:ml-60   w-[180px] sm:w-[250px] lg:w-[428px]  rounded-lg flex justify-center items-center relative">
            <input
              className="pl-2 px-4 text-sm placeholder:text-white outline-none placeholder:text-center w-full rounded-xl text-white border-none bg-[#ef5f2b]"
              type="search"
              placeholder="Search Anything here...."
              value={searchQuery}
              onChange={handleSearchChange}
            />

            {filteredOptions.length > 0 && (
              <div className="absolute top-[42px] overflow-y-scroll h-32 left-0 bg-white w-full shadow-lg rounded-lg z-10">
                {filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`py-2 px-4 hover:bg-gray-200 cursor-pointer text-[#e65f2b] ${option.isSubOption ? "" : "" // Indent subOptions
                      }`}
                    onClick={() => handleSuggestionClick(option)}
                  >
                    {option.isSubOption ? option.name : option.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start md:hidden z-50 mr-2">
          <FaBars
            className="text-[#e65f2b] text-3xl hover:cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div
              id="icons"
              className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
            >
              <div
                onClick={() => {
                  onIconClick("Profile");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out pb-1 px-2"
              >
                <ImProfile
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                />
                <p className="pl-2 text-[#e65f2b]">Profile</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Holidays");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
              >
                <FaCalendarAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                />
                <p className="pl-2 text-[#e65f2b]">Holidays</p>
              </div>

              <div
                onClick={() => {
                  onIconClick("Chats");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                />
                <p className="pl-2 text-[#e65f2b]">Messages</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Inbox");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaEnvelope
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                />
                <p className="pl-2 text-[#e65f2b]">Mails</p>
              </div>
              <div
                onClick={() => {
                  onIconClick("Apply Leave");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaCalendarCheck
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                />
                <p className="pl-2 text-[#e65f2b]">Apply Leave</p>
              </div>

              <div
                onClick={() => {
                  handleLogout();
                  setDropdownOpen(false);
                }}
                className="py-1 border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out px-2"
              >
                <FaSignOutAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}

                />
                <p className="pl-2 text-[#e65f2b]">Logout</p>
              </div>
            </div>
          )}
        </div>

        <div
          id="icons"
          className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-5 mr-10"
        >
          <div className="relative">
            <ImProfile
              className="hover:cursor-pointer"
              style={iconStyle("profile")}
              onMouseEnter={() => handleMouseEnter("profile", "Profile")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Profile")}
            />
            {hoveredIcon === "profile" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
          <div className="relative">
            <FaCalendarAlt
              className="hover:cursor-pointer"
              style={iconStyle("calendar")}
              onMouseEnter={() => handleMouseEnter("calendar", "Holidays")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Holidays")}
            />
            {hoveredIcon === "calendar" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
          <div className="relative">
            <TiMessages
              className="hover:cursor-pointer"
              style={iconStyle("messages")}
              onMouseEnter={() => handleMouseEnter("messages", "Chats")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Chats")}
            />
            {hoveredIcon === "messages" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
          <div className="relative">
            <FaEnvelope
              className="hover:cursor-pointer"
              style={iconStyle("mail")}
              onMouseEnter={() => handleMouseEnter("mail", "Inbox")}
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Inbox")}
            />
            {hoveredIcon === "mail" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
          <div className="relative">
            <FaCalendarCheck
              className="hover:cursor-pointer"
              style={iconStyle("apply-leave")}
              onMouseEnter={() =>
                handleMouseEnter("apply-leave", "Apply Leave")
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => onIconClick("Apply Leave")}
            />
            {hoveredIcon === "apply-leave" && (
              <div className="absolute text-nowrap bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
          <div className="relative">
            <FaSignOutAlt
              className="hover:cursor-pointer"
              style={iconStyle("logout")}
              onMouseEnter={() => handleMouseEnter("logout", "Logout")}
              onMouseLeave={handleMouseLeave}
              onClick={handleLogout}
            />
            {hoveredIcon === "logout" && (
              <div className="absolute bottom-[-2.0rem] left-1/2 transform -translate-x-1/2 bg-[#e65f2b] text-white text-xs p-1 rounded">
                {tooltip}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeNavBar;
