/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaFileExport } from "react-icons/fa";
import axios from 'axios';
import { API_BASE_URL } from "../../../../Config/api";
import * as XLSX from 'xlsx';

function Attendance() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [attendanceData, setAttendanceData] = useState([]);
  const jwt = localStorage.getItem("hrJwt");
  const [searchYear, setSearchYear] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDay, setSearchDay] = useState("");

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/attendance`, {
          headers: {
            "Authorization": `Bearer ${jwt}`,
          }
        });
        setAttendanceData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };
    fetchAttendanceData();
  }, [jwt]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = attendanceData.filter((entry) => {
    const entryDate = new Date(entry.punchIn);
    const matchesYear = searchYear ? entryDate.getFullYear() === parseInt(searchYear) : true;
    const matchesMonth = searchMonth ? entryDate.getMonth() + 1 === parseInt(searchMonth) : true;
    const matchesDay = searchDay ? entryDate.getDate() === parseInt(searchDay) : true;
    const matchesEmployee = entry.employeeName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEmployeeId = entry.employeeId.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesYear && matchesMonth && matchesDay && matchesEmployee && matchesEmployeeId;
  });

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData.map(entry => ({
      "Employee Name": entry.employeeName,
      "Employee ID": entry.employeeId,
      "PunchIn": new Date(entry.punchIn).toLocaleString(),
      "PunchOut": new Date(entry.punchOut).toLocaleString(),
      "Production Time": `${entry.productionHours} hours, ${entry.productionMinutes} mins, ${entry.productionSeconds} secs`,
      "Break Time": `${entry.breakHours} hours, ${entry.breakMinutes} mins, ${entry.breakSeconds} secs`,
      "Working Time": `${entry.workingHours} hours, ${entry.workingMinutes} mins, ${entry.workingSeconds} secs`,
      "Overtime": `${entry.overtime} hours`
    })), { header: ["Employee Name", "Employee ID", "PunchIn", "PunchOut", "Production Time", "Break Time", "Working Time", "Overtime"] });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Attendance Data");

    XLSX.writeFile(wb, "AttendanceData.xlsx");
  };

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
            placeholder="Search by employee name..."
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>

        {/* Year Filter */}
        <div className="relative mt-4 sm:mt-0">
          <select
            onChange={(e) => setSearchYear(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Year</option>
            {Array.from(new Set(attendanceData.map(entry => new Date(entry.punchIn).getFullYear()))).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Month Filter */}
        <div className="relative mt-4 sm:mt-0">
          <select
            onChange={(e) => setSearchMonth(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
              <option key={month} value={month}>
                {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
        </div>

        {/* Day Filter */}
        <div className="relative mt-4 sm:mt-0">
          <select
            onChange={(e) => setSearchDay(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        {/* Filter Selection */}
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
        <div className="relative mt-4 sm:mt-0">
          <button
            onClick={exportToExcel}
            className="flex items-center p-2 border border-gray-300 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaFileExport className="mr-2" />
            Export to Excel
          </button>
        </div>
      </div>

      <div
        id="table"
        className="overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1]"
      >
        <table className="min-w-full bg-white text-nowrap">
          <thead className="bg-[#0098F1]">
            <tr>
              {/* Table Headers */}
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center sticky left-0 z-20 w-[170px] h-[50px]">
                Employee Name
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Employee ID
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
                Working time
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
              filteredData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{entry.employeeName}</td>
                  <td className="px-4 py-2 border">{entry.employeeId}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
