// import React from "react";
// import { FiCheckCircle } from "react-icons/fi"; // Importing FiCheckCircle for the tick icon

// const sampleData = [
//   {
//     id: 1,
//     name: "John Doe",
//     attendance: [
//       { day: 1, status: "present" },
//       { day: 2, status: "present" },
//       { day: 3, status: "present" },
//       { day: 4, status: "present" },
//       { day: 5, status: "present" },
//       { day: 6, status: "weekend" },
//       { day: 7, status: "weekend" },
//       { day: 8, status: "present" },
//       { day: 9, status: "present" },
//       { day: 10, status: "holiday" },
//       { day: 11, status: "absent" },
//       { day: 12, status: "present" },
//       { day: 13, status: "weekend" },
//       { day: 14, status: "weekend" },
//       { day: 15, status: "holiday" },
//       { day: 16, status: "present" },
//       { day: 17, status: "absent" },
//       { day: 18, status: "present" },
//       { day: 19, status: "present" },
//       { day: 20, status: "weekend" },
//       { day: 21, status: "weekend" },
//       { day: 22, status: "absent" },
//       { day: 23, status: "present" },
//       { day: 24, status: "present" },
//       { day: 25, status: "present" },
//       { day: 26, status: "present" },
//       { day: 27, status: "weekend" },
//       { day: 28, status: "weekend" },
//       { day: 29, status: "present" },
//       { day: 30, status: "holiday" },
//       { day: 31, status: "present" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     attendance: [
//       { day: 1, status: "absent" },
//       { day: 2, status: "absent" },
//       { day: 3, status: "present" },
//       { day: 4, status: "present" },
//       { day: 5, status: "present" },
//       { day: 6, status: "weekend" },
//       { day: 7, status: "weekend" },
//       { day: 8, status: "present" },
//       { day: 9, status: "present" },
//       { day: 10, status: "present" },
//       { day: 11, status: "present" },
//       { day: 12, status: "present" },
//       { day: 13, status: "weekend" },
//       { day: 14, status: "weekend" },
//       { day: 15, status: "holiday" },
//       { day: 16, status: "present" },
//       { day: 17, status: "absent" },
//       { day: 18, status: "present" },
//       { day: 19, status: "present" },
//       { day: 20, status: "weekend" },
//       { day: 21, status: "weekend" },
//       { day: 22, status: "absent" },
//       { day: 23, status: "present" },
//       { day: 24, status: "present" },
//       { day: 25, status: "present" },
//       { day: 26, status: "present" },
//       { day: 27, status: "weekend" },
//       { day: 28, status: "weekend" },
//       { day: 29, status: "present" },
//       { day: 30, status: "holiday" },
//       { day: 31, status: "present" },
//     ],
//   },
// ];

// function Attendance() {
//   const days = Array.from({ length: 31 }, (_, i) => i + 1);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "present":
//         return "#0098f1";
//       case "absent":
//         return "#F20B0B";
//       case "weekend":
//         return "#F78822";
//       case "holiday":
//         return "#F53077";
//       default:
//         return "#FFFFFF"; // Default color if status not defined
//     }
//   };

//   const getStatusIcon = (status) => {
//     if (status === "present") {
//       return <FiCheckCircle className="text-white" />;
//     }
//     return null;
//   };

//   return (
//     <>
//       <div
//         id="main"
//         className="h-screen  p-4"
//         // className="h-screen w-screen bg-[#0098f1] bg-opacity-10 p-4 mt-24"
//       >
//         <div className="ml-5">
//           <p className="text-[#e65f2b] font-bold text-xl">
//             Employees/Attendance
//           </p>
//         </div>

//         <div className="flex flex-row justify-end mb-4">
//           <div
//             id="addemployee"
//             className="w-[500px] flex flex-row h-[50px] rounded-lg justify-between items-center p-2"
//           >
//             <div id="1" className="flex items-center space-x-2">
//               <div className="w-[30px] h-[30px] bg-[#2A8F4C]"></div>
//               <div>Present</div>
//             </div>
//             <div id="2" className="flex items-center space-x-2">
//               <div className="w-[30px] h-[30px] bg-[#F20B0B]"></div>
//               <div>Absent</div>
//             </div>
//             <div id="3" className="flex items-center space-x-2">
//               <div className="w-[30px] h-[30px] bg-[#F78822]"></div>
//               <div>Weekends</div>
//             </div>
//             <div id="4" className="flex items-center space-x-2">
//               <div className="w-[30px] h-[30px] bg-[#F53077]"></div>
//               <div>Holidays</div>
//             </div>
//           </div>
//         </div>

//         <div id="table" className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b bg-[#0098f1] text-center sticky left-0 z-20 w-[170px] h-[50px]">
//                   Employee
//                 </th>
//                 {days.map((day) => (
//                   <th
//                     key={day}
//                     className="py-2 px-4 border border-b border-r border-l bg-[#0098f1]  text-center w-[63px] h-[50px] border-white"
//                     style={{ zIndex: 10 }} // Ensure table headers have higher z-index
//                   >
//                     {day}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {sampleData.map((employee) => (
//                 <tr
//                   key={employee.id}
//                   className="bg-[#0098f1] border-b border border-white  border-r border-l"
//                 >
//                   <td className="py-2 px-4 bg-[#0098f1] border-b text-center text-nowrap sticky left-0 z-20  w-[170px] h-[50px]">
//                     {employee.name}
//                   </td>
//                   {days.map((day) => {
//                     const dayAttendance = employee.attendance.find(
//                       (item) => item.day === day
//                     );
//                     return (
//                       <td
//                         key={day}
//                         className="py-2 px-4 text-center w-[63px] border-b border border-white  border-r border-l h-[50px]"
//                         style={{
//                           backgroundColor: dayAttendance
//                             ? getStatusColor(dayAttendance.status)
//                             : "rgba(255, 255, 255, 0.8)",
//                         }}
//                       >
//                         {dayAttendance && getStatusIcon(dayAttendance.status)}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Attendance;

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
    <div id="main" className="h-screen p-4">
      <div className="ml-5">
        <p className="text-[#0098F1] font-bold text-xl">Employees/Attendance</p>
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
              <th className="py-2 px-4 border-b text-center sticky left-0 z-20 w-[170px] h-[50px]">
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
                  <td className="py-2 px-4 border-b text-center sticky left-0 z-20 w-[170px] h-[50px]">
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
