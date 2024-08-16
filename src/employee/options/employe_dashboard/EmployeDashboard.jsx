/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import profile from "../../../assets/hr/profile/man.png";
import importantprofilepic from "../../../assets/hr/employee/profile/profile.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
function EmployeDashboard() {
  const data = [
    { day: 'Mon', hours: 200 },
    { day: 'Tue', hours: 150 },
    { day: 'Wed', hours: 250 },
    { day: 'Thu', hours: 220 },
    { day: 'Fri', hours: 270 },
    { day: 'Sat', hours: 80 },
    { day: 'Sun', hours: 50 },
  ];
  const projects = [
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    {
      deadline: '22 aug 2024',
      title: 'HRMS',
      description: 'Need to add the design and development and testing updates of the project',
      totalTasks: 20,
      profilePics: [importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic, importantprofilepic], // Replace with actual images
    },
    // Add more projects here
  ];
  const containerRef = useRef(null);
  const auth = useSelector((state) => state.auth)

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -600, behavior: 'smooth' }); // Increased scroll amount
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 600, behavior: 'smooth' }); // Increased scroll amount
    }
  };

  return (
    <div>

      <div >
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Welcome Container */}
          <div className='flex mt-[20px]'>
            <div className="relative w-[455px] h-[250px]  rounded-lg mb-5 mt-[18px] ml-[8px] mr-4 shadow-lg "
              style={{
                background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
              }}>
              <div className="absolute inset-0 flex flex-col pl-[40px] items-center justify-center">
                <h1 className="text-white pl-6 font-bold text-[23px]">Welcome Back</h1>
                <h1 className="text-white mt-2 font-bold text-[20px]">{auth.employee.firstName + " " + auth.employee.lastName}</h1>
                <p className="text-white mt-2 text-[20px]">You have 4 meetings today</p>
                <button className="bg-white text-[#E65F2B] h-[45px] w-[150px] mt-8 rounded-lg transition duration-300">
                  View Profile
                </button>
              </div>
              <div style={{
                clipPath: 'polygon(0 0, 63% 0, 21% 100%, 0% 100%)',
                backgroundColor: '#FFD3C2',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40%',
                height: '100%',
                display: 'flex',
                paddingLeft: '10px',
                paddingBottom: '100px',
                alignItems: 'center',
              }}>
                <img src={profile} className="rounded-full h-[66px] w-[66px]" alt="Profile" />
              </div>
            </div>
            {/* Attendance & Leaves + Important Container */}
            <div className="flex mt-5">
              {/* Attendance & Leaves Container */}
              <div className="bg-white w-[450px] h-[300px] mb-5">
                <h1 className="text-[#E65F2B] text-[25px] font-bold text-center mt-0">Attendance & Leaves</h1>
                <div className="flex justify-around w-full mt-5">
                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap font-normal text-[16px] pr-2 pl-1">Leaves Taken</span>
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap font-normal text-[16px] pr-2 pl-1">Leaves Taken</span>
                    </h2>
                  </div>

                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap font-normal text-[16px] pr-2 pl-1">Leaves Taken</span>
                    </h2>
                  </div>
                </div>
                <div className="flex justify-around w-full mt-5">
                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap font-normal text-[16px] pr-2 pl-1">Leaves Taken</span>
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap font-normal text-[16px] pr-2 pl-1">Leaves Taken</span>
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-[#E65F2B] to-[#FF9900] rounded-lg   w-[130px] h-[80px] text-center">
                    <h2 className="text-white text-[21px] font-semibold">
                      <span className="block">5.5</span>
                      <span className="text-nowrap pr-2 text-[16px]  text-[16px] font-normal pl-1">Leaves Taken</span>
                    </h2>
                  </div>
                </div>
                <p className="text-[#E65F2B] text-[20px] font-semibold flex items-center mt-4 px-4">
                  Apply Leave
                  <GoArrowUpRight className="text-[#E65F2B] ml-2 text-[20px]" />
                </p>
              </div>


              {/* Important Container */}
              <div className="bg-white shadow-lg w-[350px] h-[300px] ml-[20px] p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-[30px] font-semibold text-[#E65F2B]">Important</h2>
                  <a href="#" className="text-[20px] font-semibold text-[#E65F2B]">View More →</a>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <span className="text-[#E65F2B] font-semibold text-[20px] border-b-2 border-[#E65F2B] pb-1">
                      Notification
                    </span>
                  </div>
                  <span className="flex items-center text-secondary text-[20px] dark:text-secondary-foreground">
                    <FaCalendarAlt className="mr-2" /> Schedules
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center mb-3">
                    <img src={importantprofilepic} alt="User Avatar" className="rounded-full" />
                    <div className="ml-3">
                      <p className="font-medium">Your Leave Request Has Been</p>
                      <span className="text-muted-foreground dark:text-muted">10:30 21 Aug 2024</span>
                    </div>
                  </div>
                  <span className="block border-b-2 border-orange-200 mb-3"></span>
                  {/* Repeat other notifications here */}
                  <div className="flex items-center mb-3">
                    <img src={importantprofilepic} alt="User Avatar" className="rounded-full" />
                    <div className="ml-3">
                      <p className="font-medium">Your Leave Request Has Been</p>
                      <span className="text-muted-foreground dark:text-muted">10:30 21 Aug 2024</span>
                    </div>
                  </div>
                  <span className="block border-b-2 border-orange-200 mb-3"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Container */}
          <div className='flex'>
            <div className="bg-white h-[400px] w-[400px]  mb-[20px]   flex flex-col p-4   ml-[8px]">
              <h1 className="text-[#E65F2B] text-[25px] font-bold text-center mb-4">Statistics</h1>

              <div className="flex mt-[10px] mb-4">
                <div className="bg-white shadow-xl w-[180px] text-center h-[100px] pt-[15px] mr-4" style={{
                  background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
                  borderRadius: '12px' // Adjust this value as needed
                }}>
                  <span className="text-white font-semibold text-[20px]">Remaining</span><br />
                  <span className="text-white  font-semibold text-[16px]">2 : 36 Min</span>
                </div>
                <div className="bg-white shadow-xl w-[180px] text-center h-[100px] pt-[15px]" style={{
                  background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
                  borderRadius: '12px' // Adjust this value as needed
                }}>
                  <span className="text-white font-semibold text-[20px]">OverTime</span><br />
                  <span className="text-white font-semibold text-[16px]">0 Hrs 36 Min</span>
                </div>
              </div>
              <div className="bg-white shadow-xl w-[180px]  ml-[90px] mt-[30px] h-[100px] pt-[15px]" style={{
                background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
                borderRadius: '12px' // Adjust this value as needed
              }}>
                <span className="text-white font-semibold pl-[50px] text-[20px]">Break</span><br />
                <span className="text-white font-semibold  pl-[30px] text-[16px]">1 Hrs 36 Min</span>
              </div>
              <p className="text-[#E65F2B] text-[20px] font-semibold flex items-center mt-4">
                View attendance
                <GoArrowUpRight className="text-[#E65F2B] ml-2 text-[20px]" />
              </p>
            </div>

            {/* Working Hours Container */}
            <div className="bg-white shadow-xl w-[460px] h-[400px] pb-[16px] ml-[16px]">
              <div className="flex flex-col h-full">
                {/* Chart Header */}
                <div className="flex justify-between items-center mb-4 px-4">
                  <span className="text-[#E65F2B] text-[23px] font-bold">Weekly Working Hours</span>
                  {/* <span className="text-[#E65F2B] text-[23px] font-semibold">Total: 40 Hrs</span> */}
                  <select className='h-[40px] w-[120px] bg-[#E65F2B] outline-none text-white pl-2 rounded-lg mt-4'>
                    <option>This Week</option>
                  </select>
                </div>
                {/* Chart Container */}
                <div className="flex flex-grow px-4">
                  {/* Y-Axis (Hours) */}
                  <div className="flex flex-col justify-between pr-4 border-r border-gray-300">
                    {[0, 5, 10, 15, 20, 25, 30, 35,].map(hour => (
                      <div className="text-gray-600 text-xs" key={hour}>
                        {hour}
                      </div>
                    ))}
                  </div>
                  {/* X-Axis (Days of the Week) */}
                  <div className="flex flex-grow ">
                    {/* Bars Container */}
                    <div className="flex flex-grow pb-[20px] justify-between">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => {
                        const heights = ['60%', '40%', '80%', '50%', '70%']; // Example heights
                        return (
                          <div className="flex-1 mx-1" key={day}>
                            <div className="relative bg-gray-200 w-[20px] ml-[30px] rounded-lg overflow-hidden h-[300px]">
                              <div
                                className="absolute bottom-0 left-0 w-full bg-[#E65F2B] rounded-t-lg"
                                style={{ height: heights[index] }} // Dynamic height
                              />
                            </div>
                            <div className="text-center  text-xs text-gray-600 mt-1">{day}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>



          {/* Upcoming Holidays Container */}
          <div className="bg-white rounded-[15px]  shadow-lg w-[455px] h-[120px] mt-[5px] ml-[8px]">
            <div className="flex items-center justify-between w-full h-full px-4"
              style={{
                background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
                borderRadius: '12px' // Adjust this value as needed
              }}>
              <h1 className="text-white text-[20px] font-semibold">Upcoming Holidays</h1>
              <button className="bg-white text-[#E65F2B] h-[40px] w-[120px] rounded-[5px]">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* {projects} */}
      <div className='bg-white shadow-lg   h-[460px] mt-[18px]'>
        <div className="flex justify-start p-3">
          <h1 className="text-[#E65F2B] mt-[20px] font-semibold text-nowrap text-[20px]">On Going Projects</h1>
          <div className="flex items-end text-end space-x-2 mb-8 w-[80px] ml-[1000px]">
            <FaCircleChevronLeft
              onClick={handleScrollLeft}
              className="text-[#E65F2B] cursor-pointer text-2xl" // Adjust size here
            />
            <FaCircleChevronRight
              onClick={handleScrollRight}
              className="text-[#E65F2B] cursor-pointer text-2xl" // Adjust size here
            />
          </div>
        </div>


        <div className="flex  w-[1170px] ml-5 scroll-smooth mb-12   overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4" ref={containerRef}>
          <div className="flex space-x-4 min-w-max">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg w-[350px] min-h-[150px]">
                <div className="bg-[#F20B0B] w-[210px] h-[40px] rounded-br-lg">
                  <h1 className="text-white p-2">Deadline: {project.deadline}</h1>
                </div>
                <h1 className="text-[#E65F2B] font-semibold p-2 pl-2 text-[20px]">{project.title}</h1>
                <p className="text-[#E65F2B] text-[19px] pl-3 pb-[20px]">
                  {project.description}
                </p>
                <div className="flex pb-[20px]">
                  <button className="bg-[#E65F2B] bg-opacity-25 ml-[10px] rounded-lg text-[#E65F2B] h-[43px] w-[150px]">
                    {project.totalTasks} total tasks
                  </button>
                  <button className="bg-[#E65F2B] bg-opacity-25 ml-[10px] rounded-lg text-[#E65F2B] h-[43px] w-[150px]">
                    {project.completedTasks} completed tasks
                  </button>
                </div>
                <div className="flex items-center">
                  <p className="text-[#E65F2B] pl-3">Project Leader:</p>
                  <div className="flex pl-[20px] -space-x-4">
                    {project.profilePics.map((pic, picIndex) => (
                      <img key={picIndex} className="w-10 h-10 rounded-full border-2 border-white" src={pic} alt={`Profile ${picIndex + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-white rounded-[15px]  shadow-lg w-[455px] h-[200px]  ml-[8px]">
          <div className="items-center justify-between  w-[700px] h-full px-4"
            style={{
              background: 'radial-gradient(circle, #E65F2B 0%, #FF9900 100%)',
              borderRadius: '12px', // Adjust this value as needed
            }}>
            <div className='flex py-4'>
              <img src={importantprofilepic} />
              <h1 className="text-white text-[20px]  pl-4 font-semibold">VishnuVardhan</h1>
            </div>

            <p className='text-white font-semibold text-[20px]'>Employee of the month</p>
            <p className='text-white font-normal text-[18px]'>We are really proud of the difference you have made which gives everybody <br />the reason to applaud & appreciate</p>
          </div>

        </div>
      </div>

    </div>
  );
}
export default EmployeDashboard;