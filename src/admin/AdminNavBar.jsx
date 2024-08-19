import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  FaFolder,
  FaCalendarDay,
  FaEnvelope,
  FaBell,
  FaFilter,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
function AdminNavBar({ onIconClick, options }) {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const flattenedOptions = options.flatMap((option) => {
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
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
            }}
            className="h-[42px] ml-10 w-[200px] sm:w-[300px] md:w-[428px] rounded-lg flex justify-center items-center relative"
          >
            <input
              style={{
                backgroundImage: "linear-gradient(to right, #E65F2B, #FFC252)",
              }}
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
              <div className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out pb-1 px-2">
                <FaFolder
                  className="hover:cursor-pointer"
                  style={iconStyle("folder")}
                  onMouseEnter={() => handleMouseEnter("folder")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Company Information")}
                />
                <p className="pl-2 text-[#e65f2b]">Files</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 pt-1 px-2">
                <FaCalendarDay
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                  onMouseEnter={() => handleMouseEnter("calendar")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Account Details")}
                />
                <p className="pl-2 text-[#e65f2b]">Calendar</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2">
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                  onMouseEnter={() => handleMouseEnter("message")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Company Settings")}
                />
                <p className="pl-2 text-[#e65f2b]">Messages</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2">
                <FaEnvelope
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                  onMouseEnter={() => handleMouseEnter("mail")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Roles")}
                />
                <p className="pl-2 text-[#e65f2b]">Mails</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out py-1 px-2">
                <FaBell
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                  onMouseEnter={() => handleMouseEnter("bell")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("User")}
                />
                <p className="pl-2 text-[#e65f2b]">Notification</p>
              </div>
              <div className="py-1 border-b hover:bg-gray-200 flex border-[#e65f2b] transition-all duration-1000 ease-in-out px-2">
                <FaFilter
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}
                  onMouseEnter={() => handleMouseEnter("filter")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Company Information")}
                />
                <p className="pl-2 text-[#e65f2b]">Filter</p>
              </div>
            </div>
          )}
        </div>
        <div
          id="icons"
          className="hidden md:flex justify-around items-center w-auto space-x-4 md:space-x-5 mr-4"
        >
          <FaFolder
            className="hover:cursor-pointer"
            style={iconStyle("folder")}
            onMouseEnter={() => handleMouseEnter("folder")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Company Information")}
          />
          <FaCalendarDay
            className="hover:cursor-pointer"
            style={iconStyle("calendar")}
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Account Details")}
          />
          <TiMessages
            className="hover:cursor-pointer"
            style={iconStyle("message")}
            onMouseEnter={() => handleMouseEnter("message")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Company Settings")}
          />
          <FaEnvelope
            className="hover:cursor-pointer"
            style={iconStyle("mail")}
            onMouseEnter={() => handleMouseEnter("mail")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Roles")}
          />
          <FaBell
            className="hover:cursor-pointer"
            style={iconStyle("bell")}
            onMouseEnter={() => handleMouseEnter("bell")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("User")}
          />
          <FaFilter
            className="hover:cursor-pointer"
            style={iconStyle("filter")}
            onMouseEnter={() => handleMouseEnter("filter")}
            onMouseLeave={handleMouseLeave}
            onClick={() => onIconClick("Company Information")}
          />
        </div>
      </div>
    </>
  );
}

export default AdminNavBar;
