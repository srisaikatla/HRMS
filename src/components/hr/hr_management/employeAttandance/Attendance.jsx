
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { FaSearch, FaFilter } from "react-icons/fa";
import axios from 'axios'
import { API_BASE_URL } from "../../../../Config/api";



function Attendance() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [attendanceData, setAttendanceData] = useState([])
  const jwt = localStorage.getItem("hrJwt")
  const [searchDate, setSearchDate] = useState(new Date());

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/attendance`, {
          headers: {
            "Authorization": `Bearer ${jwt}`,
          }
        });
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };
    fetchAttendanceData();
  }, [jwt]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter data based on search query and filter
  const filteredData = attendanceData.filter((entry) => {
    const entryDate = new Date(entry.punchIn).toLocaleDateString();
    return entryDate === searchDate.toLocaleDateString() && (
      entry.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <div id="main" className="min-h-screen p-4 mt-4">
      <div className="">
        <p className="text-[#E65F2B] lg:text-lg text-sm font-bold mb-4">
          Hr Management / Employee / Attendance
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mb-4 space-x-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="relative mt-4 sm:mt-0">
          <div className="flex items-center">
            <FaFilter className="text-blue-500 h-6 w-6" />
            <select
              onChange={handleFilterChange}
              className="ml-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Weekend">Weekend</option>
              <option value="Holiday">Holiday</option>
              <option value="Timeoff">Timeoff</option>
              <option value="Overtime">Overtime</option>
              <option value="Lop">Lop (Missing)</option>
              <option value="Late">Late Count</option>
              <option value="Early">Early Count</option>
            </select>
          </div>
        </div>
      </div>
      <div
        id="table"
        className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]"
      >
        <table className="min-w-full bg-white text-nowrap">
          <thead className="bg-[#0098F1]">
            <tr>

              <th className="py-2 bg-[#0098F1] px-4 border-b text-center sticky left-0 z-20 w-[170px] h-[50px]">
                Employee Name
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Employee ID
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Attended

              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Employee Name
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                PunchIn
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                PunchOut
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Production Time
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Break time
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                working time
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Overtime
              </th>
            </tr>
          </thead>
          <tbody>

            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No attendance records found.
                </td>
              </tr>
            ) : (
              filteredData.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{entry.employeeId}</td>
                    <td className="px-4 py-2 border">{entry.employeeName}</td>
                    <td className="px-4 py-2 border">{new Date(entry.punchIn).toLocaleString()}</td>
                    <td className="px-4 py-2 border">{new Date(entry.punchOut).toLocaleString()}</td>
                    <td className="px-4 py-2 border">
                      {entry.productionHours} hours, {entry.productionMinutes} mins, {entry.productionSeconds} secs
                    </td>
                    <td className="px-4 py-2 border">
                      {entry.breakHours} hours, {entry.breakMinutes} mins, {entry.breakSeconds} secs
                    </td>
                    <td className="px-4 py-2 border">
                      {entry.workingHours} hours, {entry.workingMinutes} mins, {entry.workingSeconds} secs
                    </td>
                    <td className="px-4 py-2 border">{entry.overtime} hours</td>
                  </tr>
                );
              })
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
