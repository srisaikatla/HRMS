// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import {
//   FaFolder,
//   FaEnvelope,
//   FaBell,
//   FaFilter,
//   FaCalendarDay,
// } from "react-icons/fa";
// import { TiMessages } from "react-icons/ti";

// function NavBar({ onSearchChange }) {
//   const [hoveredIcon, setHoveredIcon] = useState("");

//   const handleMouseEnter = (iconName) => {
//     setHoveredIcon(iconName);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIcon("");
//   };

//   const iconStyle = (iconName) => ({
//     color: hoveredIcon === iconName ? "#FF6A00" : "#0098F1",
//     fontSize: "1.5rem",
//   });

//   return (
//     <div id="main" className=" p-2  ">
//       <div
//         id="topbar"
//         className="flex flex-row items-center  pt-2 mx-2 gap-x-10 justify-center"
//       >
//         <div className="w-auto ml-[210px] h-[48px] bg-[#0098f1] rounded-xl flex justify-center items-center">
//           <input
//             className="pl-20 placeholder:text-white outline-none placeholder:text-start w-[428px] rounded-xl text-white h-[48px] border-none bg-[#0098f1]"
//             type="search"
//             placeholder="Search Anything here...."
//           />
//         </div>
//         <div
//           id="icons"
//           className="flex justify-around items-center w-full md:w-auto space-x-4 md:space-x-6"
//         >
//           <FaFolder
//             style={iconStyle("folder")}
//             onMouseEnter={() => handleMouseEnter("folder")}
//             onMouseLeave={handleMouseLeave}
//           />
//           <FaCalendarDay
//             style={iconStyle("calendar")}
//             onMouseEnter={() => handleMouseEnter("calendar")}
//             onMouseLeave={handleMouseLeave}
//           />
//           <TiMessages
//             style={iconStyle("message")}
//             onMouseEnter={() => handleMouseEnter("message")}
//             onMouseLeave={handleMouseLeave}
//           />
//           <FaEnvelope
//             style={iconStyle("mail")}
//             onMouseEnter={() => handleMouseEnter("mail")}
//             onMouseLeave={handleMouseLeave}
//           />
//           <FaBell
//             style={iconStyle("bell")}
//             onMouseEnter={() => handleMouseEnter("bell")}
//             onMouseLeave={handleMouseLeave}
//           />
//           <FaFilter
//             style={iconStyle("filter")}
//             onMouseEnter={() => handleMouseEnter("filter")}
//             onMouseLeave={handleMouseLeave}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
import React from "react";
import {
  FaFolder,
  FaCalendarDay,
  FaEnvelope,
  FaBell,
  FaFilter,
  FaBars,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

function NavBar({ onIconClick }) {
  const [hoveredIcon, setHoveredIcon] = React.useState("");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#0098f1" : "#0098f1",
    fontSize: "1.5rem",
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
          <div className="h-[42px] ml-10 w-[200px] bg-[#0098f1] sm:w-[300px] md:w-[428px] rounded-lg flex justify-center items-center">
            <input
              className="pl-2 bg-[#0098f1] text-sm placeholder:text-white outline-none placeholder:text-center w-full rounded-xl text-white border-none "
              type="search"
              placeholder="Search Anything here...."
            />
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
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out pb-1 px-2">
                <FaFolder
                  className="hover:cursor-pointer "
                  style={iconStyle("folder")}
                  onMouseEnter={() => handleMouseEnter("folder")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Company Information")}
                />
                <p className="pl-2 text-[#0098f1]">Files</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 pt-1 px-2">
                <FaCalendarDay
                  className="hover:cursor-pointer"
                  style={iconStyle("calendar")}
                  onMouseEnter={() => handleMouseEnter("calendar")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Events")}
                />
                <p className="pl-2 text-[#0098f1]">Calendar</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2">
                <TiMessages
                  className="hover:cursor-pointer"
                  style={iconStyle("message")}
                  onMouseEnter={() => handleMouseEnter("message")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Chat")}
                />
                <p className="pl-2 text-[#0098f1]">Messages</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2">
                <FaEnvelope
                  className="hover:cursor-pointer"
                  style={iconStyle("mail")}
                  onMouseEnter={() => handleMouseEnter("mail")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Inbox")}
                />
                <p className="pl-2 text-[#0098f1]">Mails</p>
              </div>
              <div className="border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out py-1 px-2">
                <FaBell
                  className="hover:cursor-pointer"
                  style={iconStyle("bell")}
                  onMouseEnter={() => handleMouseEnter("bell")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("User")}
                />
                <p className="pl-2 text-[#0098f1]">Notification</p>
              </div>
              <div className="py-1 border-b hover:bg-gray-200 flex border-[#0098f1] transition-all duration-1000 ease-in-out px-2">
                <FaFilter
                  className="hover:cursor-pointer"
                  style={iconStyle("filter")}
                  onMouseEnter={() => handleMouseEnter("filter")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onIconClick("Company Information")}
                />
                <p className="pl-2 text-[#0098f1]">Filter</p>
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

export default NavBar;
