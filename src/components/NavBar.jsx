import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaFolder,
  FaCalendarDay,
  FaEnvelope,
  FaBell,
  FaFilter,
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { TiMessages } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../State/Auth/Action";
function NavBar({ onIconClick, options, projectOptions }) {
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = React.useState("");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  // Flatten options including projectOptions
  // const flattenedOptions = [...options, ...projectOptions].flatMap((option) => {
  //   if (option.subOptions) {
  //     return [
  //       option,
  //       ...option.subOptions.map((subOption) => ({
  //         ...subOption,
  //         isSubOption: true, // Flag to identify if it's a subOption
  //         parentTitle: option.title, // Store parent title to use if needed
  //       })),
  //     ];
  //   }

  //   return option;
  // });
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(jwt));
    localStorage.removeItem("jwt");
    navigate("/");
  };
  const flattenedOptions = useMemo(() => {
    return [...options, ...projectOptions].flatMap((option) => {
      if (option.subOptions) {
        return [
          option,
          ...option.subOptions.map((subOption) => ({
            ...subOption,
            isSubOption: true, // Flag to identify if it's a subOption
            parentTitle: option.title, // Store parent title to use if needed
          })),
        ];
      }
      return option;
    });
  }, [options, projectOptions]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter options based on search query
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const filtered = flattenedOptions.filter(
        (option) =>
          option.title?.toLowerCase().includes(query) ||
          option.name?.toLowerCase().includes(query) ||
          (option.isSubOption &&
            option.parentTitle?.toLowerCase().includes(query))
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [searchQuery, flattenedOptions]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    onIconClick(suggestion.title);
    setSearchQuery("");
    setFilteredOptions([]);
  };

  // Style for hovered icon
  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#0098f1" : "#0098f1",
    fontSize: "1.5rem",
  });

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle mouse enter and leave for icons
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
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
          <div className="h-[42px] bg-[#0098f1] ml-10 w-[200px] sm:w-[300px] md:w-[428px] rounded-lg flex justify-center items-center relative">
            <input
              className="pl-2 px-4 bg-[#0098f1] text-sm placeholder:text-white outline-none placeholder:text-center w-full rounded-xl text-white border-none"
              type="search"
              placeholder="Search Anything here...."
              value={searchQuery}
              onChange={handleSearchChange}
            />

            {filteredOptions.length > 0 && (
              <div className="absolute top-[42px] overflow-y-scroll h-32 left-0 bg-white w-full shadow-lg z-10">
                {filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`py-2 px-4 hover:bg-gray-200 cursor-pointer text-[#0098f1] ${
                      option.isSubOption ? "" : ""
                    }`}
                    onClick={() => handleSuggestionClick(option)}
                  >
                    {option.isSubOption ? option.title : option.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start md:hidden z-50 mr-2">
          <FaBars
            className="text-[#0098f1] text-3xl hover:cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div
              id="icons"
              className="absolute right-2 mt-14 py-2 w-auto flex flex-col space-y-0 transition-all duration-1000 ease-in-out bg-white shadow-lg rounded-lg"
            >
              <div
                onClick={() => onIconClick("Events")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out pb-1 px-2"
              >
                <FaCalendarCheck
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                  onMouseEnter={() => handleMouseEnter("folder")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Events</p>
              </div>

              <div
                onClick={() => onIconClick("Chat")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                  onMouseEnter={() => handleMouseEnter("message")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Messages</p>
              </div>
              <div
                onClick={() => onIconClick("Inbox")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaEnvelope
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                  onMouseEnter={() => handleMouseEnter("mail")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Mails</p>
              </div>
              <div
                onClick={() => onIconClick("Holiday")}
                className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
              >
                <FaCalendarAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                  onMouseEnter={() => handleMouseEnter("calendar")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Holidays</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2">
                <FaTasks
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                  onMouseEnter={() => handleMouseEnter("bell")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Activities")}
                />
                <p className="pl-2 text-[#0098f1]">Activities</p>
              </div>
              <div
                // onClick={() => onIconClick("Logout")}
                onClick={handleLogout}
                className="py-1 border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out px-2"
              >
                <IoMdLogOut
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}
                  onMouseEnter={() => handleMouseEnter("filter")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#0098f1]">Logout</p>
              </div>
            </div>
          )}
        </div>

        <div
          id="icons"
          className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-5 mr-4"
        >
          <FaCalendarCheck
            className="hover:cursor-pointer"
            style={iconStyle("folder")}
            onMouseEnter={() => handleMouseEnter("folder")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Events")}
          />

          <TiMessages
            className="hover:cursor-pointer"
            style={iconStyle("message")}
            onMouseEnter={() => handleMouseEnter("message")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Chat")}
          />
          <FaEnvelope
            className="hover:cursor-pointer"
            style={iconStyle("mail")}
            onMouseEnter={() => handleMouseEnter("mail")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Inbox")}
          />
          <FaCalendarAlt
            className="hover:cursor-pointer"
            style={iconStyle("calendar")}
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Holiday")}
          />
          <FaTasks
            className="hover:cursor-pointer"
            style={iconStyle("bell")}
            onMouseEnter={() => handleMouseEnter("bell")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Activities")}
          />
          <IoMdLogOut
            className="hover:cursor-pointer"
            style={iconStyle("filter")}
            onMouseEnter={() => handleMouseEnter("filter")}
            onMouseLeave={handleMouseLeave}
            // onClick={() => onIconClick("Logout")}
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
