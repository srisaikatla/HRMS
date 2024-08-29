import React, { useRef, useState } from "react";
import profile from "../../../assets/hr/profile/man.png";
import importantprofilepic from "../../../assets/hr/employee/profile/profile.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddLeavePage from "../../../components/hr/employeeForm/AddLeavePage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
function EmployeDashboard() {
  const data = [
    { day: "Mon", hours: 200 },
    { day: "Tue", hours: 150 },
    { day: "Wed", hours: 250 },
    { day: "Thu", hours: 220 },
    { day: "Fri", hours: 270 },
    { day: "Sat", hours: 80 },
    { day: "Sun", hours: 50 },
  ];
  const projects = [
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ], // Replace with actual images
    },
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ], // Replace with actual images
    },
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ], // Replace with actual images
    },
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ],
    },
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ],
    },
    {
      deadline: "22 aug 2024",
      title: "HRMS",
      description:
        "Need to add the design and development and testing updates of the project",
      totalTasks: 20,
      profilePics: [
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
        importantprofilepic,
      ],
    },
    // Add more projects here
  ];
  const containerRef = useRef(null);
  const auth = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("notification");
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -600, behavior: "smooth" }); // Increased scroll
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 600, behavior: "smooth" }); // Increased scroll
    }
  };
  const content = (
    <div className="mt-4">
      {Array(4)
        .fill()
        .map((_, index) => (
          <div key={index} className="flex items-center mb-3">
            <img
              src={importantprofilepic} // Replace with your image source
              alt="User Avatar"
              className="rounded-full h-[40px] w-[40px]"
            />
            <div className="ml-3">
              <p className="font-medium">Your Leave Request Has Been</p>
              <span className="text-muted-foreground dark:text-muted text-[12px]">
                10:30 21 Aug 2024
              </span>
            </div>
          </div>
        ))}
      <span className="block border-b-2 border-[#000000] mb-3"></span>
    </div>
  );

  return (
    <div className="p-4 bg-[#2A546D] bg-opacity-5">
      <div className=" lg:grid-cols-3 grid  gap-4">
        <div className="flex flex-col items-center bg-gradient-to-r from-[#2A546D] to-[#2A546D]  h-[300px] justify-center p-6 md:p-8 lg:p-10  rounded-lg shadow-lg text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <img
              src={importantprofilepic}
              className="rounded-full h-[66px] w-[66px] md:h-[80px] md:w-[80px] shadow-md"
              alt="Profile"
            />
          </div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            Welcome Back, Mounika
          </h1>
          <p className="text-white mt-2 text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4">
            You have 4 meetings today
          </p>
          <button className="bg-white text-[#2A546D] h-[60px] sm:h-[65px] md:h-[70px] w-[100px] sm:w-[120px] md:w-[130px] mt-4 sm:mt-6 md:mt-8 rounded-lg transition duration-300 hover:bg-orange-300 flex items-center justify-center text-sm sm:text-base md:text-lg shadow-md">
            View Profile
          </button>
        </div>

        <div className="bg-white w-full  h-auto rounded-lg p-4 md:p-6 shadow-md">
          <h1 className="text-[#000000] text-[16px] md:text-[18px] font-bold text-center">
            Attendance & Leaves
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#1B888F] text-[16px] md:text-[18px] font-semibold">
                <span className="block">5.5</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Leaves Taken
                </span>
              </h2>
            </div>
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#FF0099] text-[16px] md:text-[18px] font-semibold">
                <span className="block">12</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Remaining
                </span>
              </h2>
            </div>
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#2A8F4C] text-[16px] md:text-[18px] font-semibold">
                <span className="block">5.5</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Leaves Taken
                </span>
              </h2>
            </div>
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#9747FF] text-[16px] md:text-[18px] font-semibold">
                <span className="block">5.5</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Leaves Taken
                </span>
              </h2>
            </div>
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#0098F1] text-[16px] md:text-[18px] font-semibold">
                <span className="block">12</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Remaining
                </span>
              </h2>
            </div>
            <div className=" rounded-lg h-[70px] md:h-[80px] text-center flex items-center justify-center p-2">
              <h2 className="text-[#F20B0B] text-[16px] md:text-[18px] font-semibold">
                <span className="block">5.5</span>
                <span className="text-nowrap font-normal text-[12px] md:text-[14px]">
                  Leaves Taken
                </span>
              </h2>
            </div>
          </div>
          <Link to="/add-leavePage">
            <p className="text-[#2A546D] text-[16px] md:text-[18px] font-semibold flex items-center mt-4 justify-center">
              Apply Leave
              <GoArrowUpRight className="text-[#2A546D] ml-2 text-[16px]" />
            </p>
          </Link>
        </div>

        <div className="bg-white w-full overflow-y-auto h-[310px] scrollbar-custom text-[#2A546D] rounded-lg p-4 md:p-6 shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-[24px] font-semibold text-[#000000]">
              Important
            </h2>
            <a
              href="#"
              className="text-[14px] md:text-[16px] font-semibold text-[#000000]"
            >
              View More →
            </a>
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <span
                onClick={() => setActiveTab("notification")}
                className={`cursor-pointer text-[#000000] font-semibold text-[14px] md:text-[16px] border-b-2 pb-1 ${
                  activeTab === "notification"
                    ? "border-[#000000]"
                    : "border-transparent"
                }`}
              >
                Notification
              </span>
            </div>
            <span
              onClick={() => setActiveTab("schedules")}
              className={`cursor-pointer flex items-center text-secondary text-[14px] md:text-[16px] ${
                activeTab === "schedules"
                  ? "border-b-2 border-[#000000]"
                  : "border-transparent"
              }`}
            >
              <FaCalendarAlt className="mr-2" /> Schedules
            </span>
          </div>

          {/* Content based on the active tab */}
          <div>
            {activeTab === "notification" && content}
            {activeTab === "schedules" && content}
          </div>
        </div>
      </div>

      <div className="grid justify-between  space-x-3  md:grid-cols-2 grid-cols-1 mt-5 space-y-5 lg:space-y-0">
        <div className="bg-white w-full   h-[420px]  rounded-lg  shadow-md flex flex-col">
          <h1 className="text-[#000000] pt-5 text-[16px] font-bold text-center mb-4">
            Statistics
          </h1>
          <div className="flex justify-center  mb-4">
            <div
              className="bg-white shadow-xl w-[140px] md:w-[180px] text-center h-[80px] md:h-[100px] pt-[10px] md:pt-[15px] mr-2 md:mr-4"
              style={{
                // background: "radial-gradient(circle, #2A546D 0%, #FF9900 100%)",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
                Remaining
              </span>
              <br />
              <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
                2 : 36 Min
              </span>
            </div>
            <div
              className="bg-white shadow-xl w-[140px] md:w-[180px] text-center h-[80px] md:h-[100px] pt-[10px] md:pt-[15px]"
              style={{
                // background: "radial-gradient(circle, #2A546D 0%, #FF9900 100%)",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
                OverTime
              </span>
              <br />
              <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
                0 Hrs 36 Min
              </span>
            </div>
          </div>
          <div
            className="bg-white shadow-xl w-[140px] md:w-[180px] ml-auto mr-auto mt-[20px] md:mt-[30px] h-[80px] md:h-[100px] pt-[10px] md:pt-[15px]"
            style={{
              // background: "radial-gradient(circle, #2A546D 0%, #FF9900 100%)",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
              Break
            </span>
            <br />
            <span className="text-gray-950 font-semibold text-[14px] md:text-[16px]">
              0 Hrs 30 Min
            </span>
          </div>
        </div>

        <div className="bg-white  shadow-xl w-full h-[420px]   rounded-lg">
          <div className="flex flex-col  h-full">
            <div className="flex justify-between items-center mb-4 px-2 md:px-4">
              <span className="text-[#2A546D] pt-5  text-[14px] md:text-[18px] lg:text-[23px] font-bold">
                Weekly Working Hours
              </span>
              <select className="h-[30px] sm:block  mt-10   bg-gradient-to-r from-[#2A546D] to-[#2A546D] outline-none text-white pl-2 rounded-lg  md:mt-4">
                <option>This Week</option>
              </select>
            </div>
            <div className="flex flex-grow px-2 md:px-4">
              <div className="flex flex-col justify-between pr-2 md:pr-4 border-r border-gray-300">
                {[0, 5, 10, 15, 20, 25, 30, 35].map((hour) => (
                  <div
                    className="text-gray-600 text-[8px] md:text-[10px] lg:text-xs"
                    key={hour}
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="flex flex-grow">
                <div className="flex flex-grow pb-[10px] md:pb-[20px] justify-between">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => {
                    const heights = ["30%", "40%", "80%", "50%", "70%"]; // Example heights
                    return (
                      <div className="flex-1 mx-0.5 md:mx-1" key={day}>
                        <div className="relative bg-gray-200 w-[10px] md:w-[15px] lg:w-[20px] rounded-lg overflow-hidden h-[150px] md:h-[250px] lg:h-[300px] ml-[10px] md:ml-[20px] lg:ml-[30px]">
                          <div
                            className="absolute bottom-0 left-0 w-full bg-[#2A546D] rounded-t-lg"
                            style={{ height: heights[index] }} // Dynamic height
                          />
                        </div>
                        <div className="text-center text-[8px] md:text-[10px] lg:text-xs text-gray-600 mt-1">
                          {day}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[620px] w-auto h-auto mt-5  rounded-lg ">
        <div
          className=" grid grid-cols-1  md:grid-cols-2  items-center bg-[#2A546D] justify-between  h-full lg:px-4 py-10  rounded-lg"
          style={{
            borderRadius: "12px", // Adjust this value as needed
          }}
        >
          <h1 className="text-white   text-lg md:text-[23px]  font-semibold text-center md:text-left mb-3 md:mb-0">
            Upcoming Holidays
          </h1>
          <div className="text-center">
            <Link to="">
              <button className="bg-white text-[#2A546D] w-auto  px-10 py-2   rounded-[5px] mt-3 md:mt-0">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* On Going Projects */}
      <div className="bg-white shadow-lg h-auto mt-[18px] lg:h-[460px]">
        <div className="flex  flex-row justify-between p-3">
          <h1 className="text-[#2A546D] mt-[20px]  font-semibold text-wrap text-[18px] lg:text-[20px]">
            On Going Projects
          </h1>
          <div className="flex items-center  space-x-2 mt-2 ">
            <FaCircleChevronLeft
              onClick={handleScrollLeft}
              className="text-[#2A546D] cursor-pointer text-xl lg:text-2xl"
            />
            <FaCircleChevronRight
              onClick={handleScrollRight}
              className="text-[#2A546D] cursor-pointer text-xl lg:text-2xl"
            />
          </div>
        </div>

        <div
          className="flex overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] py-4 mx-4 space-x-4"
          ref={containerRef}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg w-[250px] py-4 sm:w-[300px] lg:w-[350px] min-h-[190px] flex-shrink-0"
            >
              <div className="bg-[#2A546D] w-full h-[40px] rounded-br-lg">
                <h1 className="text-white p-2">Deadline: {project.deadline}</h1>
              </div>
              <h1 className="text-[#2A546D] font-semibold p-2 text-[14px] sm:text-[16px]">
                {project.title}
              </h1>
              <p className="text-[#2A546D] text-[14px] sm:text-[16px] pl-3 pb-[20px]">
                {project.description}
              </p>
              <div className="flex pb-[20px] flex-wrap gap-2">
                <button className="bg-[#2A546D] bg-opacity-25 ml-[10px] rounded-lg text-[#2A546D] h-[43px] w-[140px] sm:w-[150px]">
                  {project.totalTasks} total tasks
                </button>
                <button className="bg-[#2A546D] bg-opacity-25 ml-[10px] rounded-lg text-[#2A546D] h-[43px] w-[140px] sm:w-[150px]">
                  {project.completedTasks} completed tasks
                </button>
              </div>
              <div className="flex items-center">
                <p className="text-[#2A546D] pl-3">Project Leader:</p>
                <div className="flex pl-[10px] sm:pl-[20px] -space-x-4">
                  {project.profilePics.map((pic, picIndex) => (
                    <img
                      key={picIndex}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                      src={pic}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[#2A546D] pl-3">Mambers:</p>
                <div className="flex pl-[10px] sm:pl-[20px] -space-x-4">
                  {project.profilePics.map((pic, picIndex) => (
                    <img
                      key={picIndex}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                      src={pic}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Container */}

      <div className="rounded-lg shadow-lg w-auto mt-10 h-auto mx-auto lg:mx-0 px-4 lg:px-0">
        <div
          className="flex flex-col  bg-[#2A546D] items-start p-4 md:p-6"
          style={{
            // background: "radial-gradient(circle, #2A546D 0%, #FF9900 100%)",
            borderRadius: "12px",
          }}
        >
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={importantprofilepic}
              alt="Profile"
            />
            <h1 className="text-white text-lg md:text-xl pl-4 font-semibold">
              priya
            </h1>
          </div>
          <p className="text-white font-semibold text-lg md:text-xl mb-2">
            Employee of the Month
          </p>
          <p className="text-white font-normal text-sm md:text-base">
            We are really proud of the difference you have made which gives
            everybody the reason to applaud & appreciate.
          </p>
        </div>
      </div>
    </div>
  );
}
export default EmployeDashboard;
