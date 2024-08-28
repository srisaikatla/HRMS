import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

// Sample data
const sampleData = [
  {
    id: "SDT 60",
    name: "Ashwini",
    attendance: [
      { day: 1, status: "present" },
      { day: 2, status: "present" },
      { day: 3, status: "present" },
      { day: 4, status: "present" },
      { day: 5, status: "present" },
      { day: 6, status: "weekend" },
      { day: 7, status: "weekend" },
      { day: 8, status: "present" },
      { day: 9, status: "present" },
      { day: 10, status: "holiday" },
      { day: 11, status: "absent" },
      { day: 12, status: "present" },
      { day: 13, status: "weekend" },
      { day: 14, status: "weekend" },
      { day: 15, status: "holiday" },
      { day: 16, status: "present" },
      { day: 17, status: "absent" },
      { day: 18, status: "present" },
      { day: 19, status: "present" },
      { day: 20, status: "weekend" },
      { day: 21, status: "weekend" },
      { day: 22, status: "absent" },
      { day: 23, status: "present" },
      { day: 24, status: "present" },
      { day: 25, status: "present" },
      { day: 26, status: "present" },
      { day: 27, status: "weekend" },
      { day: 28, status: "weekend" },
      { day: 29, status: "present" },
      { day: 30, status: "holiday" },
      { day: 31, status: "present" },
    ],
  },
  {
    id: "SDT 61",
    name: "Ratnapriya",
    attendance: [
      { day: 1, status: "absent" },
      { day: 2, status: "absent" },
      { day: 3, status: "present" },
      { day: 4, status: "present" },
      { day: 5, status: "present" },
      { day: 6, status: "weekend" },
      { day: 7, status: "weekend" },
      { day: 8, status: "present" },
      { day: 9, status: "present" },
      { day: 10, status: "present" },
      { day: 11, status: "present" },
      { day: 12, status: "present" },
      { day: 13, status: "weekend" },
      { day: 14, status: "weekend" },
      { day: 15, status: "holiday" },
      { day: 16, status: "present" },
      { day: 17, status: "absent" },
      { day: 18, status: "present" },
      { day: 19, status: "present" },
      { day: 20, status: "weekend" },
      { day: 21, status: "weekend" },
      { day: 22, status: "absent" },
      { day: 23, status: "present" },
      { day: 24, status: "present" },
      { day: 25, status: "present" },
      { day: 26, status: "present" },
      { day: 27, status: "weekend" },
      { day: 28, status: "weekend" },
      { day: 29, status: "present" },
      { day: 30, status: "holiday" },
      { day: 31, status: "present" },
    ],
  },
  {
    id: "SDT 62",
    name: "Raghavendra",
    attendance: [
      { day: 1, status: "absent" },
      { day: 2, status: "absent" },
      { day: 3, status: "present" },
      { day: 4, status: "present" },
      { day: 5, status: "present" },
      { day: 6, status: "weekend" },
      { day: 7, status: "weekend" },
      { day: 8, status: "present" },
      { day: 9, status: "present" },
      { day: 10, status: "present" },
      { day: 11, status: "present" },
      { day: 12, status: "present" },
      { day: 13, status: "weekend" },
      { day: 14, status: "weekend" },
      { day: 15, status: "holiday" },
      { day: 16, status: "present" },
      { day: 17, status: "present" },
      { day: 18, status: "present" },
      { day: 19, status: "present" },
      { day: 20, status: "weekend" },
      { day: 21, status: "weekend" },
      { day: 22, status: "present" },
      { day: 23, status: "present" },
      { day: 24, status: "present" },
      { day: 25, status: "present" },
      { day: 26, status: "present" },
      { day: 27, status: "weekend" },
      { day: 28, status: "weekend" },
      { day: 29, status: "present" },
      { day: 30, status: "holiday" },
      { day: 31, status: "present" },
    ],
  },
  {
    id: "SDT 63",
    name: "Premchand",
    attendance: [
      { day: 1, status: "absent" },
      { day: 2, status: "absent" },
      { day: 3, status: "present" },
      { day: 4, status: "absent" },
      { day: 5, status: "absent" },
      { day: 6, status: "present" },
      { day: 7, status: "weekend" },
      { day: 8, status: "present" },
      { day: 9, status: "present" },
      { day: 10, status: "present" },
      { day: 11, status: "present" },
      { day: 12, status: "absent" },
      { day: 13, status: "absent" },
      { day: 14, status: "weekend" },
      { day: 15, status: "absent" },
      { day: 16, status: "present" },
      { day: 17, status: "present" },
      { day: 18, status: "present" },
      { day: 19, status: "present" },
      { day: 20, status: "weekend" },
      { day: 21, status: "weekend" },
      { day: 22, status: "present" },
      { day: 23, status: "present" },
      { day: 24, status: "present" },
      { day: 25, status: "present" },
      { day: 26, status: "present" },
      { day: 27, status: "weekend" },
      { day: 28, status: "weekend" },
      { day: 29, status: "present" },
      { day: 30, status: "holiday" },
      { day: 31, status: "present" },
    ],
  },
];

// Function to calculate totals
const calculateTotals = (attendance) => {
  const totals = {
    present: 0,
    absent: 0,
    weekend: 0,
    holiday: 0,
    timeoff: 0,
    overtime: 0,
    lop: 0,
    late: 0,
    early: 0,
  };
  attendance.forEach((item) => {
    if (totals.hasOwnProperty(item.status)) {
      totals[item.status]++;
    }
  });
  // Dummy data for additional columns
  totals.timeoff = Math.floor(Math.random() * 10);
  totals.overtime = Math.floor(Math.random() * 10);
  totals.lop = Math.floor(Math.random() * 10);
  totals.late = Math.floor(Math.random() * 10);
  totals.early = Math.floor(Math.random() * 10);
  totals.source = "Manual"; // Just an example source

  return totals;
};

function Attendance() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter data based on search query and filter
  const filteredData = sampleData.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      employee.attendance.some((day) => day.status === filter.toLowerCase());
    return matchesSearch && matchesFilter;
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
        <table className="min-w-full bg-white text-white  text-nowrap">
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
                Weekly Halves
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Holidays
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Timeoff
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Overtime
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Lop (Missing)
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Late Count
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Early Count
              </th>
              <th className="py-2 px-4 border-b text-center w-[100px] h-[50px]">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee) => {
              const totals = calculateTotals(employee.attendance);
              return (
                <tr
                  key={employee.id}
                  className="border-b border text-[#0098F1] border-white border-r border-l"
                >
                  <td className="py-2 bg-[#0098F1] text-white px-4 border-b text-center sticky left-0 z-20 w-[170px] h-[50px]">
                    {employee.name}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {employee.id}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.present}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.weekend}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.holiday}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.timeoff}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.overtime}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.lop}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.late}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.early}
                  </td>
                  <td className="py-2 px-4 text-center border-b">
                    {totals.source}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
