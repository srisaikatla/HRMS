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
        className="flex flex-row items-center pt-2 mx-2 gap-x-10 justify-end"
      >
        <div className="w-[428px] h-[48px] bg-[#0098f1] rounded-xl flex justify-center items-center">
          <input
            className="pl-20 placeholder:text-white outline-none placeholder:text-start w-[428px] rounded-xl text-white h-[48px] border-none bg-[#0098f1]"
            type="search"
            placeholder="Search Anything here...."
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

export default NavBar;
