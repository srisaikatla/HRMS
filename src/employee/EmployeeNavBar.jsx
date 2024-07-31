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

function EmployeeNavBar() {
  const [hoveredIcon, setHoveredIcon] = useState("");

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

  return (
    <>
      <div id="main" className="  pb-2  top-0  right-0">
        <div
          id="topbar"
          className="flex flex-row items-center pt-2 mx-2 gap-x-10 justify-end"
        >
          <div className="w-[428px] h-[48px] bg-[#ef5f2b] rounded-xl flex justify-center items-center">
            <input
              className="pl-20 placeholder:text-white outline-none placeholder:text-start w-[428px] rounded-xl text-white h-[48px] border-none bg-[#ef5f2b]"
              type="search"
              placeholder="Search Anything here...."
            />
          </div>
          <div
            id="icons"
            className="w-[300px] h-[48px] text-white rounded-xl flex justify-around items-center"
          >
            <FaFolder
              className="hover:cursor-pointer"
              style={iconStyle("folder")}
              onMouseEnter={() => handleMouseEnter("folder")}
              onMouseLeave={handleMouseLeave}
            />
            <FaCalendarDay
              className="hover:cursor-pointer"
              style={iconStyle("calendar")}
              onMouseEnter={() => handleMouseEnter("calendar")}
              onMouseLeave={handleMouseLeave}
            />
            <TiMessages
              className="hover:cursor-pointer"
              style={iconStyle("message")}
              onMouseEnter={() => handleMouseEnter("message")}
              onMouseLeave={handleMouseLeave}
            />
            <FaEnvelope
              className="hover:cursor-pointer"
              style={iconStyle("mail")}
              onMouseEnter={() => handleMouseEnter("mail")}
              onMouseLeave={handleMouseLeave}
            />
            <FaBell
              className="hover:cursor-pointer"
              style={iconStyle("bell")}
              onMouseEnter={() => handleMouseEnter("bell")}
              onMouseLeave={handleMouseLeave}
            />
            <FaFilter
              className="hover:cursor-pointer"
              style={iconStyle("filter")}
              onMouseEnter={() => handleMouseEnter("filter")}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeNavBar;
