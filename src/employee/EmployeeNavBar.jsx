// import React from "react";
import React, { useState, useEffect, useMemo } from "react";
import { ImProfile } from "react-icons/im";
import {
  FaFolder,
  FaCalendarDay,
  FaEnvelope,
  FaBell,
  FaFilter,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";

function EmployeeNavBar({ onIconClick, options }) {
  const [hoveredIcon, setHoveredIcon] = React.useState("");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  // const flattenedOptions = options.flatMap((option) => {
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
  const flattenedOptions = useMemo(() => {
    return options.flatMap((option) => {
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
  }, [options]);
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#ef5f2b" : "#ef5f2b",
    fontSize: "1.5rem",
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
          <div className="h-[42px] bg-[#ef5f2b] ml-10 w-[200px] sm:w-[300px] md:w-[428px] rounded-lg flex justify-center items-center relative">
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
                    className={`py-2 px-4 hover:bg-gray-200 cursor-pointer text-[#e65f2b] ${
                      option.isSubOption ? "" : "" // Indent subOptions
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
                // onClick={() => onIconClick("Company Information")}
                onClick={() => {
                  onIconClick("Profile");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out pb-1 px-2"
              >
                <ImProfile
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                  onMouseEnter={() => handleMouseEnter("folder")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Profile</p>
              </div>
              <div
                // onClick={() => onIconClick("Account Details")}
                onClick={() => {
                  onIconClick("Holidays");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 pt-1 px-2"
              >
                <FaCalendarAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                  onMouseEnter={() => handleMouseEnter("calendar")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Holidays</p>
              </div>

              <div
                // onClick={() => onIconClick("Chats")}
                onClick={() => {
                  onIconClick("Chats");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                  onMouseEnter={() => handleMouseEnter("message")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Messages</p>
              </div>
              <div
                // onClick={() => onIconClick("Roles")}
                onClick={() => {
                  onIconClick("Inbox");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaEnvelope
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                  onMouseEnter={() => handleMouseEnter("mail")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Mails</p>
              </div>
              <div
                // onClick={() => onIconClick("User")}
                onClick={() => {
                  onIconClick("Apply Leave");
                  setDropdownOpen(false);
                }}
                className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2"
              >
                <FaCalendarCheck
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                  onMouseEnter={() => handleMouseEnter("bell")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Apply Leave</p>
              </div>

              <div
                // onClick={() => onIconClick("Company Information")}
                onClick={() => {
                  onIconClick("Logout");
                  setDropdownOpen(false);
                }}
                className="py-1 border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out px-2"
              >
                <FaSignOutAlt
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}
                  onMouseEnter={() => handleMouseEnter("filter")}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="pl-2 text-[#e65f2b]">Logout</p>
              </div>
            </div>
          )}
        </div>

        <div
          id="icons"
          className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-5 mr-4"
        >
          <ImProfile
            className="hover:cursor-pointer"
            style={iconStyle("folder")}
            onMouseEnter={() => handleMouseEnter("folder")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Profile")}
          />
          <FaCalendarAlt
            className="hover:cursor-pointer"
            style={iconStyle("calendar")}
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Holidays")}
          />

          <TiMessages
            className="hover:cursor-pointer"
            style={iconStyle("message")}
            onMouseEnter={() => handleMouseEnter("message")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Chats")}
          />
          <FaEnvelope
            className="hover:cursor-pointer"
            style={iconStyle("mail")}
            onMouseEnter={() => handleMouseEnter("mail")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Inbox")}
          />
          <FaCalendarCheck
            className="hover:cursor-pointer"
            style={iconStyle("bell")}
            onMouseEnter={() => handleMouseEnter("bell")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Apply Leave")}
          />
          <FaSignOutAlt
            className="hover:cursor-pointer"
            style={iconStyle("filter")}
            onMouseEnter={() => handleMouseEnter("filter")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Logout")}
          />
        </div>
      </div>
    </>
  );
}

export default EmployeeNavBar;
