import React, { useState } from "react";
import {
  FaFolder,
  FaEnvelope,
  FaCommentDots,
  FaBell,
  FaFilter,
  FaCalendarDay,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

function NavBar({ onSearchChange }) {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? "#FF6A00" : "#0098F1",
    fontSize: "1.5rem",
  });

  return (
    <div id="main" className="bg-white p-2 ">
      <div
        id="topbar"
        className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-x-10"
      >
        <div className="w-full md:w-auto  ml-[400px]  rounded-xl flex justify-center items-center px-2 py-1 md:py-2">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearchChange(e)}
            className="search-input w-full md:w-[620px] h-[50px] rounded-lg border border-[#0098f1]"
          />
        </div>
        <div
          id="icons"
          className="flex justify-around items-center w-full md:w-auto space-x-4 md:space-x-6"
        >
          <FaFolder
            style={iconStyle("folder")}
            onMouseEnter={() => handleMouseEnter("folder")}
            onMouseLeave={handleMouseLeave}
          />
          <FaCalendarDay
            style={iconStyle("calendar")}
            onMouseEnter={() => handleMouseEnter("calendar")}
            onMouseLeave={handleMouseLeave}
          />
          <TiMessages
            style={iconStyle("message")}
            onMouseEnter={() => handleMouseEnter("message")}
            onMouseLeave={handleMouseLeave}
          />
          <FaEnvelope
            style={iconStyle("mail")}
            onMouseEnter={() => handleMouseEnter("mail")}
            onMouseLeave={handleMouseLeave}
          />
          <FaBell
            style={iconStyle("bell")}
            onMouseEnter={() => handleMouseEnter("bell")}
            onMouseLeave={handleMouseLeave}
          />
          <FaFilter
            style={iconStyle("filter")}
            onMouseEnter={() => handleMouseEnter("filter")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;