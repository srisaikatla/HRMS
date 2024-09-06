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
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const [searchYear, setSearchYear] = useState(currentYear);
  const [searchMonth, setSearchMonth] = useState(currentMonth);
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

  const formatTime = (totalHours, totalMinutes, totalSeconds) => {
    const hours = totalHours % 60;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return `${hours} hours, ${minutes} mins, ${seconds} secs`;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const normalizeString = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
  };

  const filteredData = attendanceData.filter((entry) => {
    const entryDate = new Date(entry.punchIn);
    const matchesYear = searchYear ? entryDate.getFullYear() === parseInt(searchYear) : true;
    const matchesMonth = searchMonth ? entryDate.getMonth() + 1 === parseInt(searchMonth) : true;
    const matchesDay = searchDay ? entryDate.getDate() === parseInt(searchDay) : true;
    // Normalize the search query and data entries
    const normalizedSearchQuery = normalizeString(searchQuery);
    const normalizedEmployeeName = normalizeString(entry.employeeName);
    const normalizedEmployeeId = normalizeString(entry.employeeId);

    const matchesEmployee = normalizedEmployeeName.includes(normalizedSearchQuery) ||
      normalizedEmployeeId.includes(normalizedSearchQuery);

    return matchesYear && matchesMonth && matchesDay && matchesEmployee;
  }).sort((a, b) => new Date(b.punchIn) - new Date(a.punchIn));

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
        <p className="text-[#0098F1] lg:text-lg text-sm font-bold mb-4">
          Hr Management / Employee / Attendance
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mb-4 space-x-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search by employee name..."
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>

        {/* Year Filter */}
        <div className="relative mt-4 sm:mt-0">
          <select
            onChange={(e) => setSearchYear(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
            value={searchYear}
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
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
            value={searchMonth}
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
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
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
            className="flex items-center p-2 border border-gray-300 rounded-lg bg-[#0098F1] text-white hover:bg-[#0098F1] focus:outline-none focus:ring-2 focus:ring-[#0098F1]"
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
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center sticky left-0 z-10 text-white font-bold">
                Employee Name
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Employee ID
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Punch In
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Punch Out
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Production Time
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Break Time
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Working Time
              </th>
              <th className="py-2 bg-[#0098F1] px-4 border-b text-center text-white font-bold">
                Overtime
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((entry, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F5F5]"
                    } hover:bg-gray-200`}
                >
                  <td className="px-4 py-2 border-b text-center sticky left-0 z-10 bg-inherit">
                    {entry.employeeName}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {entry.employeeId}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {new Date(entry.punchIn).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {new Date(entry.punchOut).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {formatTime(entry.productionHours, entry.productionMinutes, entry.productionSeconds)}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {formatTime(entry.breakHours, entry.breakMinutes, entry.breakSeconds)}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {formatTime(entry.workingHours, entry.workingMinutes, entry.workingSeconds)}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {entry.overtime} hours
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="px-4 py-2 border-b text-center"
                  colSpan="8"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
