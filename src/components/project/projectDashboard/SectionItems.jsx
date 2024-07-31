import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { MdCall, MdMessage, MdNotifications } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";
import { IoIosWatch } from "react-icons/io";

const itemsData = [
  { icon: <AiOutlineInbox />, label: "Inbox", color: "bg-green-600" },
  { icon: <BsEye />, label: "Profile Visits", color: "bg-red-400" },
  { icon: <FaBookmark />, label: "Book Mark", color: "bg-red-600" },
  { icon: <MdCall />, label: "Call", color: "bg-blue-400" },
  { icon: <MdMessage />, label: "Message", color: "bg-purple-500" },
  { icon: <MdNotifications />, label: "Notifications", color: "bg-orange-500" },
  { icon: <RiProjectorFill />, label: "New Projects", color: "bg-orange-600" },
  { icon: <IoIosWatch />, label: "Watch", color: "bg-red-500" },
];

const SectionItems = () => {
  return (
    <div className="flex ml-10 flex-col justify-start items-start ">
      <div className="bg-white p-4 h-[460px]  rounded shadow-lg w-[510px] max-w-md">
        {itemsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b-[1px] border-[#0098F1] py-2"
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl text-blue-500">{item.icon}</div>
              <span className="text-lg text-gray-700">{item.label}</span>
            </div>
            <span
              className={`px-4 py-1 rounded-[5px] w-[60px] text-white ${item.color}`}
            >
              654
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionItems;
