/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api";

const Attendance = () => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [currentBreakTime, setCurrentBreakTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [breakEndTime, setBreakEndTime] = useState(null);
  const [totalBreakTime, setTotalBreakTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [lastElapsedTime, setLastElapsedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [elapsedTime, setElapsedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [attendanceData, setAttendanceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const auth = useSelector((state) => state.auth);
  const [searchDate, setSearchDate] = useState(new Date());
  const [employeeId, setEmployeeId] = useState(auth.employee.employeeId); // New state for employee ID
  const [employeeName, setEmployeeName] = useState(
    auth.employee.firstName.toUpperCase() +
      " " +
      auth.employee.lastName.toUpperCase()
  );
  const jwt = localStorage.getItem("jwt");
  const officeHours = 9;

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/attendance`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };
    fetchAttendanceData();
  }, [jwt]);

  const filteredData1 = attendanceData.filter(
    (entry) => entry.employeeId === employeeId
  );
  // Filtered data for search query
  const filteredData = filteredData1.filter((entry) => {
    const entryDate = new Date(entry.punchIn).toLocaleDateString();
    return (
      entryDate === searchDate.toLocaleDateString() &&
      (entry.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.employeeName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const calculateHours = (inTime, outTime) => {
    const inDate = new Date(inTime);
    const outDate = new Date(outTime);
    const diffMs = outDate - inDate;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);

    return { hours: diffHrs, minutes: diffMins, seconds: diffSecs };
  };

  const accumulateTime = (prevTime, newTime) => {
    let totalSeconds =
      prevTime.hours * 3600 +
      prevTime.minutes * 60 +
      prevTime.seconds +
      (newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds);

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  const calculateBreakTime = (startTime, endTime) => {
    const diffMs = endTime - startTime;
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);

    return { hours, minutes, seconds };
  };

  const updateBreakTime = (newBreakTime) => {
    const updatedBreakTime = accumulateTime(totalBreakTime, newBreakTime);
    setTotalBreakTime(updatedBreakTime);
    localStorage.setItem("totalBreakTime", JSON.stringify(updatedBreakTime));
  };

  const calculateWorkingHours = (productionTime, breakTime) => {
    const productionInSeconds =
      productionTime.hours * 3600 +
      productionTime.minutes * 60 +
      productionTime.seconds;
    const breakInSeconds =
      breakTime.hours * 3600 + breakTime.minutes * 60 + breakTime.seconds;
    const workingSeconds = Math.max(0, productionInSeconds - breakInSeconds); // Prevent negative working time

    const workingHours = Math.floor(workingSeconds / 3600);
    const workingMinutes = Math.floor((workingSeconds % 3600) / 60);
    const workingSecondsLeft = workingSeconds % 60;

    return {
      hours: workingHours,
      minutes: workingMinutes,
      seconds: workingSecondsLeft,
    };
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
    const storedPunchInTime = localStorage.getItem("punchInTime");
    const storedElapsedTime = localStorage.getItem("elapsedTime");
    const storedBreakTime = localStorage.getItem("totalBreakTime");
    const storedIsPunchedIn = localStorage.getItem("isPunchedIn");
    const storedLastElapsedTime = localStorage.getItem("lastElapsedTime");
    const storedIsOnBreak = localStorage.getItem("isOnBreak");
    const storedBreakStartTime = localStorage.getItem("breakStartTime");

    if (storedPunchInTime) {
      setPunchInTime(new Date(storedPunchInTime));
      setIsPunchedIn(storedIsPunchedIn === "true");
      setElapsedTime(
        JSON.parse(storedElapsedTime) || { hours: 0, minutes: 0, seconds: 0 }
      );
      setTotalBreakTime(
        JSON.parse(storedBreakTime) || { hours: 0, minutes: 0, seconds: 0 }
      );
      setLastElapsedTime(
        JSON.parse(storedLastElapsedTime) || {
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      );
      setIsOnBreak(storedIsOnBreak === "true");
      if (storedBreakStartTime) {
        setBreakStartTime(new Date(storedBreakStartTime));
      }
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isPunchedIn && punchInTime) {
      const startTime =
        lastElapsedTime.hours * 3600 * 1000 +
        lastElapsedTime.minutes * 60 * 1000 +
        lastElapsedTime.seconds * 1000;
      const punchInDate = new Date(punchInTime);

      timer = setInterval(() => {
        const now = new Date();
        const diffMs =
          now -
          punchInDate +
          startTime -
          (totalBreakTime.hours * 3600 * 1000 +
            totalBreakTime.minutes * 60 * 1000 +
            totalBreakTime.seconds * 1000);
        const hours = Math.floor(diffMs / 3600000);
        const minutes = Math.floor((diffMs % 3600000) / 60000);
        const seconds = Math.floor((diffMs % 60000) / 1000);
        setElapsedTime({ hours, minutes, seconds });
        // Save to localStorage every second to persist data
        localStorage.setItem(
          "elapsedTime",
          JSON.stringify({ hours, minutes, seconds })
        );
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPunchedIn, punchInTime, lastElapsedTime, totalBreakTime]);

  useEffect(() => {
    let breakTimer;
    if (isOnBreak && breakStartTime) {
      breakTimer = setInterval(() => {
        const now = new Date();
        const breakDuration = calculateBreakTime(breakStartTime, now);
        setCurrentBreakTime(breakDuration);
      }, 1000);
    } else {
      clearInterval(breakTimer);
      setCurrentBreakTime({ hours: 0, minutes: 0, seconds: 0 });
    }

    return () => clearInterval(breakTimer);
  }, [isOnBreak, breakStartTime]);

  useEffect(() => {
    const checkPunchOutTime = () => {
      const now = new Date();
      const logoutLimit = new Date();
      logoutLimit.setHours(18, 30, 0, 0); // Set time to 6:30 PM

      if (isPunchedIn && now > logoutLimit) {
        handlePunchButtonClick(); // Call the punch-out function
      }
    };

    const interval = setInterval(checkPunchOutTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isPunchedIn]);

  const toIST = (date) => {
    const options = { timeZone: "Asia/Kolkata", hour12: false };
    const istDate = new Date(date.toLocaleString("en-US", options));
    return new Date(istDate.getTime() - istDate.getTimezoneOffset() * 60000); // Remove milliseconds
  };

  // Convert the punch-in and punch-out times to IST and remove milliseconds
  const formatDateForBackend = (date) => {
    return date ? toIST(date).toISOString().split(".")[0] : null;
  };

  const isPastPunchInTime = () => {
    const now = new Date();
    const punchInLimit = new Date();
    punchInLimit.setHours(9, 30, 0, 0);
    return now > punchInLimit;
  };

  const handlePunchButtonClick = async () => {
    const today = new Date().toLocaleDateString();
    if (isPastPunchInTime() && !isPunchedIn) {
      setMessage("You need to login before 9:30 AM");
      return;
    }
    setMessage("");
    if (isPunchedIn) {
      const newPunchOutTime = new Date();
      const production = calculateHours(punchInTime, newPunchOutTime);

      let breakDuration = { hours: 0, minutes: 0, seconds: 0 };

      if (isOnBreak && breakStartTime) {
        const now = new Date();
        breakDuration = calculateBreakTime(breakStartTime, now);
        updateBreakTime(breakDuration);
      }

      const totalBreakDuration = { ...totalBreakTime };

      const overtime =
        production.hours > officeHours ? production.hours - officeHours : 0;
      const workingHours = calculateWorkingHours(
        production,
        totalBreakDuration
      );

      const newEntry = {
        employeeId,
        employeeName,
        punchIn: formatDateForBackend(punchInTime),
        punchOut: formatDateForBackend(newPunchOutTime),
        production,
        breakDuration,
        productionHours: production.hours,
        productionMinutes: production.minutes,
        productionSeconds: production.seconds,
        breakHours: totalBreakDuration.hours,
        breakMinutes: totalBreakDuration.minutes,
        breakSeconds: totalBreakDuration.seconds,
        overtime,
      };

      // Update attendanceData state properly
      const updatedAttendanceData = [...attendanceData, newEntry];
      setAttendanceData(updatedAttendanceData);

      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/attendance`,
          newEntry,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Error saving attendance:", error);
      }

      // Reset state and clear localStorage after punch-out
      setPunchOutTime(newPunchOutTime);
      setIsPunchedIn(false);
      setPunchInTime(null);
      setLastElapsedTime(elapsedTime);
      setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
      setTotalBreakTime({ hours: 0, minutes: 0, seconds: 0 });

      localStorage.removeItem("punchInTime");
      localStorage.removeItem("elapsedTime");
      localStorage.removeItem("totalBreakTime");
      localStorage.removeItem("isPunchedIn");
      localStorage.removeItem("lastElapsedTime");
      localStorage.removeItem("isOnBreak");
      localStorage.removeItem("breakStartTime");
    } else {
      //Check if already punched out today
      const hasPunchedOutToday = attendanceData.some((entry) => {
        const entryDate = new Date(entry.punchOut).toLocaleDateString();
        return entry.employeeId === employeeId && entryDate === today;
      });

      if (hasPunchedOutToday) {
        alert("You have already punched out today. You cannot punch in again.");
        return;
      }
      const newPunchInTime = new Date();
      setPunchInTime(newPunchInTime);
      setIsPunchedIn(true);
      setLastElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
      setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
      localStorage.setItem("punchInTime", newPunchInTime);
      localStorage.setItem("isPunchedIn", "true");
      localStorage.setItem(
        "lastElapsedTime",
        JSON.stringify({ hours: 0, minutes: 0, seconds: 0 })
      );
    }
  };

  const handleBreakButtonClick = () => {
    if (isOnBreak) {
      const now = new Date();
      const newBreakTime = calculateBreakTime(breakStartTime, now);
      updateBreakTime(newBreakTime);
      setBreakEndTime(now);
      setIsOnBreak(false);
      localStorage.removeItem("breakStartTime");
      localStorage.setItem("isOnBreak", "false");
    } else {
      const now = new Date();
      setBreakStartTime(now);
      setIsOnBreak(true);
      localStorage.setItem("breakStartTime", now);
      localStorage.setItem("isOnBreak", "true");
    }
  };

  return (
    <div className="min-h-screen mt-4 p-4 ">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Attendance</h1> */}
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Attendance
          </span>
        </div>
      </div>
      <div className="flex text-[#2A546D] justify-end items-center space-x-4 mb-4">
        <p className="text-lg font-semibold">Employee ID: {employeeId}</p>
        <p className="text-lg font-semibold">Employee Name: {employeeName}</p>
      </div>
      <div className="gap-4   grid-cols-2 grid">
        {/* TimeSheet Container */}

        <div className="bg-white w-auto shadow-md rounded-lg p-4 justify-center items-center  mb-6 flex flex-col space-y-4">
          <h1 className="text-xl font-bold text-[#2A546D]">TimeSheet</h1>

          <div className="bg-[#2A546D] text-white p-4 rounded-lg mb-4">
            <h3 className="text-[20px] font-semibold">Punch In at</h3>
            <p className="text-[20px] font-normal">{currentDateTime}</p>
          </div>

          <div className="relative   w-[200px] h-[200px]] ">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 120 60"
            >
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
            <p className=" font-semibold text-[15px] mt-[110px] ml-[60px] text-[#2A546D]">
              {" "}
              {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p
              className={`text-lg font-semibold ${
                isPunchedIn ? "text-blue-600" : "text-red-600"
              }`}
            >
              {/* {isPunchedIn ? "Punched In" : "Punched Out"} */}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handlePunchButtonClick}
              // disabled={isPastPunchInTime() && !isPunchedIn}
              className={`px-4 py-2 rounded-lg w-full text-[20px] text-white ${
                isPunchedIn ? "bg-[#2A546D]" : "bg-[#2A546D]"
              }`}
            >
              {isPunchedIn ? "Punch Out" : "Punch In"}
            </button>
            {isPunchedIn && (
              <button
                onClick={handleBreakButtonClick}
                className={`px-4 py-2 rounded-lg w-full text-[20px] text-white ${
                  isOnBreak
                    ? "bg-[#2A546D] hover:bg-[#2A546D]"
                    : "bg-[#2A546D] hover:bg-[#2A546D]"
                }`}
              >
                {isOnBreak ? "End Break" : "Start Break"}
              </button>
            )}
          </div>
        </div>

        {/* Employee Info Container */}
        <div className="bg-white shadow-md rounded-lg p-4 w-auto mb-6 space-y-4">
          <h2 className="text-[20px] font-bold   mb-4  text-[#2A546D]">
            Time Info
          </h2>
          <p className=" font-semibold text-[15px] text-[#2A546D] ">
            Punch In Time: {punchInTime ? punchInTime.toLocaleString() : "N/A"}
          </p>
          <p className=" font-semibold text-[15px] text-[#2A546D]">
            Punch Out Time:{" "}
            {punchOutTime ? punchOutTime.toLocaleString() : "N/A"}
          </p>
          <p className=" font-semibold text-[15px] text-[#2A546D]">
            Elapsed Time:{" "}
            {`${elapsedTime.hours}h ${elapsedTime.minutes}m ${elapsedTime.seconds}s`}
          </p>
          <p className=" font-semibold text-[15px] text-[#2A546D]">
            {" "}
            Break Time:{" "}
            {`${currentBreakTime.hours}h ${currentBreakTime.minutes}m ${currentBreakTime.seconds}s`}
          </p>
          <p className=" font-semibold text-[15px] text-[#2A546D]">
            {" "}
            Total Break Time:{" "}
            {`${totalBreakTime.hours}h ${totalBreakTime.minutes}m ${totalBreakTime.seconds}s`}
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-[#2A546D] text-lg mb-4">Attendance Log</h2>
        <div className="flex flex-col space-y-4 mb-6"></div>

        <div className="overflow-x-auto scrollbar-thin text-nowrap  scrollbar-track-white scrollbar-thumb-[#2A546D]">
          <table className="min-w-full divide-y divide-red-200">
            <thead className="bg-[#2A546D] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Employee ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Employee Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Punch In
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Punch Out
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Production Hours
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Break Duration
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Working Hours
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border border-[#2A546D]">
                  Overtime
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-[#2A546D] py-4">
                    No attendance records found.
                  </td>
                </tr>
              ) : (
                filteredData.map((entry, index) => {
                  const workingTime = calculateWorkingHours(
                    {
                      hours: entry.productionHours,
                      minutes: entry.productionMinutes,
                      seconds: entry.productionSeconds,
                    },
                    {
                      hours: entry.breakHours,
                      minutes: entry.breakMinutes,
                      seconds: entry.breakSeconds,
                    }
                  );

                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 border">{entry.employeeId}</td>
                      <td className="px-4 py-2 border">{entry.employeeName}</td>
                      <td className="px-4 py-2 border">
                        {new Date(entry.punchIn).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border">
                        {new Date(entry.punchOut).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border">
                        {entry.productionHours} hours, {entry.productionMinutes}{" "}
                        mins, {entry.productionSeconds} secs
                      </td>
                      <td className="px-4 py-2 border">
                        {entry.breakHours} hours, {entry.breakMinutes} mins,{" "}
                        {entry.breakSeconds} secs
                      </td>
                      <td className="px-4 py-2 border">
                        {workingTime.hours} hours, {workingTime.minutes} mins,{" "}
                        {workingTime.seconds} secs
                      </td>
                      <td className="px-4 py-2 border">
                        {entry.overtime} hours
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Attendance;
