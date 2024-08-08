/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import axios from 'axios';
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api"

const Attendance = () => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [breakEndTime, setBreakEndTime] = useState(null);
  const [totalBreakTime, setTotalBreakTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [lastElapsedTime, setLastElapsedTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [elapsedTime, setElapsedTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [attendanceData, setAttendanceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const auth = useSelector((state) => state.auth);
  const [searchDate, setSearchDate] = useState(new Date());
  const [employeeId, setEmployeeId] = useState(auth.employee.employeeId); // New state for employee ID
  const [employeeName, setEmployeeName] = useState(auth.employee.firstName.toUpperCase() + " " + auth.employee.lastName.toUpperCase());
  const jwt = localStorage.getItem("jwt");
  const officeHours = 9;

  const calculateHours = (inTime, outTime) => {
    const inDate = new Date(inTime);
    const outDate = new Date(outTime);
    const diffMs = outDate - inDate;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    return { hours: diffHrs, minutes: diffMins, seconds: diffSecs };
  };

  const calculateBreakTime = (breakStart, breakEnd) => {
    const totalBreakMs = new Date(breakEnd) - new Date(breakStart);
    const breakHrs = Math.floor(totalBreakMs / 3600000);
    const breakMins = Math.floor((totalBreakMs % 3600000) / 60000);
    const breakSecs = Math.floor((totalBreakMs % 60000) / 1000);

    return { hours: breakHrs, minutes: breakMins, seconds: breakSecs };
  };

  const updateBreakTime = (newBreakTime) => {
    setTotalBreakTime(prevBreakTime => {
      const updatedBreakTime = {
        hours: prevBreakTime.hours + newBreakTime.hours,
        minutes: prevBreakTime.minutes + newBreakTime.minutes,
        seconds: prevBreakTime.seconds + newBreakTime.seconds,
      };

      // Normalize break time
      if (updatedBreakTime.seconds >= 60) {
        updatedBreakTime.minutes += Math.floor(updatedBreakTime.seconds / 60);
        updatedBreakTime.seconds %= 60;
      }

      if (updatedBreakTime.minutes >= 60) {
        updatedBreakTime.hours += Math.floor(updatedBreakTime.minutes / 60);
        updatedBreakTime.minutes %= 60;
      }

      return updatedBreakTime;
    });
  };

  const calculateStatistics = () => {
    let totalHours = 0;
    let breakTime = { hours: 0, minutes: 0, seconds: 0 };
    let overtime = 0;

    attendanceData.forEach(({ production = { hours: 0, minutes: 0, seconds: 0 }, breakDuration = { hours: 0, minutes: 0, seconds: 0 } }) => {
      totalHours += production.hours;

      breakTime.hours += breakDuration.hours;
      breakTime.minutes += breakDuration.minutes;
      breakTime.seconds += breakDuration.seconds;

      if (production.hours > officeHours) {
        overtime += production.hours - officeHours;
      }
    });

    if (breakTime.seconds >= 60) {
      breakTime.minutes += Math.floor(breakTime.seconds / 60);
      breakTime.seconds %= 60;
    }

    if (breakTime.minutes >= 60) {
      breakTime.hours += Math.floor(breakTime.minutes / 60);
      breakTime.minutes %= 60;
    }

    return { totalHours, breakTime, overtime };
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    setCurrentDateTime(now.toLocaleString("en-US", options));
  };

  useEffect(() => {
    getCurrentDateTime();
    const interval = setInterval(getCurrentDateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (isPunchedIn && punchInTime) {
      const startTime = lastElapsedTime.hours * 3600 * 1000 + lastElapsedTime.minutes * 60 * 1000 + lastElapsedTime.seconds * 1000;
      const punchInDate = new Date(punchInTime);

      timer = setInterval(() => {
        const now = new Date();
        const diffMs = now - punchInDate + startTime - (totalBreakTime.hours * 3600 * 1000 + totalBreakTime.minutes * 60 * 1000 + totalBreakTime.seconds * 1000);
        const hours = Math.floor(diffMs / 3600000);
        const minutes = Math.floor((diffMs % 3600000) / 60000);
        const seconds = Math.floor((diffMs % 60000) / 1000);
        setElapsedTime({ hours, minutes, seconds });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPunchedIn, punchInTime, lastElapsedTime, totalBreakTime]);

  const handlePunchButtonClick = async () => {
    if (isPunchedIn) {
      const newPunchOutTime = new Date();
      const production = calculateHours(punchInTime, newPunchOutTime);

      let breakDuration = { hours: 0, minutes: 0, seconds: 0 };

      if (breakStartTime) {
        if (breakEndTime) {
          breakDuration = calculateBreakTime(breakStartTime, breakEndTime);
        } else {
          breakDuration = calculateBreakTime(breakStartTime, newPunchOutTime);
        }
        updateBreakTime(breakDuration);
      }

      const overtime = production.hours > officeHours ? production.hours - officeHours : 0;

      const newEntry = {
        employeeId,
        employeeName,
        punchIn: punchInTime,
        punchOut: newPunchOutTime,
        production,
        breakDuration,
        productionHours: production.hours,
        productionMinutes: production.minutes,
        productionSeconds: production.seconds,
        breakHours: breakDuration.hours,
        breakMinutes: breakDuration.minutes,
        breakSeconds: breakDuration.seconds,
        overtime,
      };

      const updatedAttendanceData = [...attendanceData, newEntry];
      setAttendanceData(updatedAttendanceData);

      // Save data to backend
      try {
        await axios.post(`${API_BASE_URL}/api/attendance`, newEntry, {
          headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json",
          }
        });
      } catch (error) {
        console.error('Error saving data to backend:', error);
      }

      setIsPunchedIn(false);
      setPunchInTime(null);
      setPunchOutTime(null);
      setBreakStartTime(null);
      setBreakEndTime(null);
      setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
      setLastElapsedTime({ hours: 0, minutes: 0, seconds: 0 });

    } else {
      setPunchInTime(new Date());
      setIsPunchedIn(true);
      setTotalBreakTime({ hours: 0, minutes: 0, seconds: 0 });
      setBreakStartTime(null);
      setBreakEndTime(null);
    }
  };

  const handleBreakButtonClick = () => {
    if (isPunchedIn) {
      if (breakStartTime) {
        setBreakEndTime(new Date())
      } else {
        setBreakStartTime(new Date());
      }
    }
  };

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
  }, []);

  const filteredData = attendanceData.filter((entry) => {
    const entryDate = new Date(entry.punchIn).toLocaleDateString();
    return entryDate === searchDate.toLocaleDateString() && (
      entry.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const statistics = calculateStatistics();
  const { totalHours, breakTime, overtime } = calculateStatistics();

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Attendance</h1>
      <div className="flex space-x-4">
        {/* TimeSheet Container */}

        <div className="bg-white w-[500px] shadow-md rounded-lg p-6 mb-6 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">TimeSheet</h1>

          <div className="bg-[#0098F1] text-white p-4 rounded-lg mb-4">
            <h3 className="text-[20px] font-semibold">Punch In at</h3>
            <p className="text-[20px] font-normal">{currentDateTime}</p>
          </div>

          <div className="relative w-[200px] h-[200px] ml-[60px]">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 120 60">
              <defs>
                <clipPath id="half-circle">
                  <rect x="0" y="0" width="200" height="80" />
                </clipPath>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke={isPunchedIn ? "green" : "#FF6F00"} // Orange color by default, green when punched in
                strokeWidth="10"
                fill="none"
                clipPath="url(#half-circle)"
              />
            </svg>
            {/* <p className="absolute top-1/2 left-1/2  mt-[20px] ml-4 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-xl">
        {formattedTime}
      </p> */}
            <p className=" font-semibold text-[15px] mt-[110px] ml-[60px] text-[#E65F2B]"> {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className={`text-lg font-semibold ${isPunchedIn ? 'text-blue-600' : 'text-red-600'}`}>
              {/* {isPunchedIn ? "Punched In" : "Punched Out"} */}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handlePunchButtonClick}
              className={`px-4 py-2 rounded-lg w-full text-[20px] text-white ${isPunchedIn ? 'bg-[#0098F1]' : 'bg-[#0098F1]'}`}
            >
              {isPunchedIn ? "Punch Out" : "Punch In"}
            </button>
            {isPunchedIn && (
              <button
                onClick={handleBreakButtonClick}
                className={`px-4 py-2 rounded-lg w-full text-[20px] text-white ${breakStartTime ? 'bg-[#0098F1] hover:bg-[#0098F1]' : 'bg-[#0098F1] hover:bg-[#0098F1]'}`}
              >
                {breakStartTime ? "End Break" : "Start Break"}
              </button>
            )}
          </div>
        </div>



        {/* Employee Info Container */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[500px] mb-6 space-y-4">
          <h2 className="  text-gray-800 mb-4">Employee Info</h2>
          <div className="space-y-2">
            <label className="block text-gray-600  font-semibold text-[15px]">
              Employee ID:
              <input
                type="text"
                placeholder="Employe ID"
                value={employeeId}
                className="mt-1 p-2 bg-[#E65F2B] outline-none text-[10px] placeholder:text-white text-white rounded-lg w-full"
              />
            </label>
            <label className="block text-gray-600 font-semibold   text-[15px]">
              Employee Name:
              <input
                type="text"
                placeholder="Employe Name"
                value={employeeName}
                className="mt-1 p-2 bg-[#E65F2B] outline-none text-[10px] placeholder:text-white text-white rounded-lg w-full"
              />
            </label>
          </div>

          <h2 className="text-[20px] font-bold   mt-6 mb-4  text-[#E65F2B]">Time Info</h2>
          <p className=" font-semibold text-[15px] text-[#E65F2B] ">Punch In Time: {punchInTime ? punchInTime.toLocaleString() : "N/A"}</p>
          <p className=" font-semibold text-[15px] text-[#E65F2B]">Punch Out Time: {punchOutTime ? punchOutTime.toLocaleString() : "N/A"}</p>
          <p className=" font-semibold text-[15px] text-[#E65F2B]">Elapsed Time: {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}</p>
          <p className=" font-semibold text-[15px] text-[#E65F2B]">Break Time: {`${totalBreakTime.hours}h ${totalBreakTime.minutes}m ${totalBreakTime.seconds}s`}</p>
        </div>
      </div>



      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-gray-800 mb-4">Attendance Log</h2>
        <div className="flex flex-col space-y-4 mb-6">
        </div>
        <label className="flex-1">
          {/* <span className="block text-gray-600 mb-1">Search by Employee Name:</span> */}
          {/* <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="p-2 border border-gray-200 mt-[10px] outline-none text-[#FFFFFF] font-normal text-[15px] bg-[#E65F2B]  placeholder:text-[#FFFFFF] rounded-lg w-full"
            /> */}
        </label>

        <div className="overflow-x-auto scrollbar-thin text-nowrap  scrollbar-track-white scrollbar-thumb-[#E65F2B]">
          <table className="min-w-full divide-y divide-red-200">
            <thead className="bg-[#E65F2B] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Employee ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Employee Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Punch In</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Punch Out</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Production Hours</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Break Duration</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#E65F2B]">Overtime</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 whitespace-nowrap  font-medium  border border-[#E65F2B]">{employeeId}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px]  font-semibold text-[#E65F2B] border border-[#E65F2B]">{employeeName}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px]  font-semibold text-[#E65F2B] border border-[#E65F2B]">{entry.punchIn.toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px] font-semibold  text-[#E65F2B] border border-[#E65F2B]">{entry.punchOut ? entry.punchOut.toLocaleString() : "N/A"}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px] font-semibold  text-[#E65F2B] border border-[#E65F2B]">{entry.productionHours}h {entry.productionMinutes}m {entry.productionSeconds}s</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px] font-semibold  text-[#E65F2B] border border-[#E65F2B]">{entry.breakHours}h {entry.breakMinutes}m {entry.breakSeconds}s</td>
                  <td className="px-4 py-2 whitespace-nowrap text-[16px]  font-semibold text-[#E65F2B] border border-[#E65F2B]">{entry.overtime ? `${entry.overtime}h` : "0h"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );


};

export default Attendance;


