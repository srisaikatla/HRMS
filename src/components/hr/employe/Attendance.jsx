import React from "react";
import { FiCheckCircle } from "react-icons/fi"; // Importing FiCheckCircle for the tick icon

const sampleData = [
  {
    id: 1,
    name: "John Doe",
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
    id: 2,
    name: "Jane Smith",
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
];

function Attendance() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "#0098f1";
      case "absent":
        return "#F20B0B";
      case "weekend":
        return "#F78822";
      case "holiday":
        return "#F53077";
      default:
        return "#FFFFFF"; // Default color if status not defined
    }
  };

  const getStatusIcon = (status) => {
    if (status === "present") {
      return <FiCheckCircle className="text-white" />;
    }
    return null;
  };

  return (
    <>
      <div
        id="main"
        className="h-screen w-screen p-4 mt-24"
        // className="h-screen w-screen bg-[#0098f1] bg-opacity-10 p-4 mt-24"
      >
        <div className="ml-5">
          <p className="text-[#e65f2b] font-semibold">Employees/Attendance</p>
        </div>

        <div className="flex flex-row justify-end mb-4">
          <div
            id="addemployee"
            className="w-[500px] flex flex-row h-[50px] rounded-lg justify-between items-center p-2"
          >
            <div id="1" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#2A8F4C]"></div>
              <div>Present</div>
            </div>
            <div id="2" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#F20B0B]"></div>
              <div>Absent</div>
            </div>
            <div id="3" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#F78822]"></div>
              <div>Weekends</div>
            </div>
            <div id="4" className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#F53077]"></div>
              <div>Holidays</div>
            </div>
          </div>
        </div>

        <div id="table" className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center sticky left-0 z-20 w-[170px] h-[50px]">
                  Employee
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="py-2 px-4 border border-b border-r border-l bg-[#0098f1] bg-opacity-30 text-center w-[63px] h-[50px] border-white"
                    style={{ zIndex: 10 }} // Ensure table headers have higher z-index
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleData.map((employee) => (
                <tr
                  key={employee.id}
                  className="bg-[#0098f1] bg-opacity-30 border-b border border-white  border-r border-l"
                >
                  <td className="py-2 px-4 border-b text-center text-nowrap sticky left-0 z-20  w-[170px] h-[50px]">
                    {employee.name}
                  </td>
                  {days.map((day) => {
                    const dayAttendance = employee.attendance.find(
                      (item) => item.day === day
                    );
                    return (
                      <td
                        key={day}
                        className="py-2 px-4 text-center w-[63px] border-b border border-white  border-r border-l h-[50px]"
                        style={{
                          backgroundColor: dayAttendance
                            ? getStatusColor(dayAttendance.status)
                            : "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {dayAttendance && getStatusIcon(dayAttendance.status)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Attendance;
