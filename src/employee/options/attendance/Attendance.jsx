/* eslint-disable no-unused-vars */



import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import { FaClock } from "react-icons/fa";

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
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year
  const [searchDate, setSearchDate] = useState(new Date());

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

    attendanceData.forEach(({ production, breakDuration }) => {
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


  useEffect(() => {
    const storedAttendanceData = localStorage.getItem('attendanceData');
    if (storedAttendanceData) {
      const data = JSON.parse(storedAttendanceData);
      // Convert date strings back to Date objects
      const updatedData = data.map(entry => ({
        ...entry,
        punchIn: new Date(entry.punchIn),
        punchOut: entry.punchOut ? new Date(entry.punchOut) : null,
      }));
      setAttendanceData(updatedData);
    }

    const storedStatistics = localStorage.getItem('statistics');
    if (storedStatistics) {
      const stats = JSON.parse(storedStatistics);
      setTotalBreakTime(stats.breakTime || { hours: 0, minutes: 0, seconds: 0 });
      setLastElapsedTime(stats.lastElapsedTime || { hours: 0, minutes: 0, seconds: 0 });
    }
  }, []);





  const handlePunchButtonClick = () => {
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

      const newEntry = {
        punchIn: punchInTime,
        punchOut: newPunchOutTime,
        production,
        breakDuration,
        overtime: production.hours > officeHours ? production.hours - officeHours : 0,
      };

      const updatedAttendanceData = [...attendanceData, newEntry];
      setAttendanceData(updatedAttendanceData);
      localStorage.setItem('attendanceData', JSON.stringify(updatedAttendanceData));

      const stats = calculateStatistics();
      localStorage.setItem('statistics', JSON.stringify(stats));

      setLastElapsedTime(elapsedTime);
      setPunchInTime(null);
      setPunchOutTime(null);
      setBreakStartTime(null);
      setBreakEndTime(null);
    } else {
      handlePunchIn(); // Call handlePunchIn to set punch in time
    }
    setIsPunchedIn(!isPunchedIn);
  };


  const handlePunchIn = () => {
    const now = new Date();
    if (breakStartTime && !breakEndTime) {
      // Set breakEndTime when punching in again
      setBreakEndTime(now);
    }
    setPunchInTime(now);
  };




  // const handlePunchOut = () => {
  //   const now = new Date();
  //   if (punchInTime && (now - punchInTime) < (officeHours * 3600000)) {
  //     // If punch-out is before office hours, set breakStartTime
  //     setBreakStartTime(now);
  //   }
  //   setBreakEndTime(null); // Reset break end time
  // };
  // const handlePunchIn = () => {
  //   const now = new Date();
  //   if (breakStartTime && !breakEndTime) {
  //     // Set breakEndTime when punching in again
  //     setBreakEndTime(now);
  //   }
  //   setPunchInTime(now);
  // };







  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDateChange = (date) => {
    setSearchDate(date);
    // Filter attendance data based on selected date
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };



  const filteredAttendanceData = attendanceData.filter(entry => {
    const entryDate = new Date(entry.punchIn);
    return (
      entryDate.getFullYear() === selectedYear &&
      entryDate.getMonth() + 1 === selectedMonth &&
      (
        entry.punchIn.toLocaleDateString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.punchIn.toLocaleTimeString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.punchOut.toLocaleTimeString().toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${entry.production.hours} hrs ${entry.production.minutes} mins ${entry.production.seconds} secs`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${entry.breakDuration.hours} hrs ${entry.breakDuration.minutes} mins ${entry.breakDuration.seconds} secs`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${entry.overtime} hrs`.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  const statistics = calculateStatistics();
  const totalHours = attendanceData.reduce((sum, { production }) => sum + production.hours, 0);
  const totalPercentage = (totalHours / (officeHours * 20)) * 100;
  const circumference = Math.PI * 54;
  const strokeDashoffset = circumference - (totalPercentage / 100) * circumference;

  return (
    <div className="p-6 min-h-screen bg-opacity-10">
      <h1 className="text-2xl font-bold mb-4">Employee</h1>
      <h1 className="text-xl  mb-4">Dashboard / Attendance</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Timesheet</h2>
          {/* <div className="bg-[#0098F1] text-white p-4 rounded-lg mb-4">
            <h3 className="text-[20px] font-semibold">Punch In at</h3>
            <p className="text-xl">{currentDateTime}</p>
          </div> */}
          <div className="bg-[#0098F1] text-white p-4 rounded-lg mb-4">
            <h3 className="text-[20px] font-semibold">Punch In at</h3>
            <p className="text-[20px] font-normal">{currentDateTime}</p>

          </div>

          <div className="relative flex items-center justify-center mb-4">
            <svg className="w-24 h-24" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={54}
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r={54}
                stroke={isPunchedIn ? "#34D399" : "#F59E0B"}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                fill="none"
                strokeLinecap="round"
              />

              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-lg font-semibold text-gray-800"
              >
                {elapsedTime.hours} : {elapsedTime.minutes} : {elapsedTime.seconds}
                {/* Keep the date and time display if needed */}
                <p className="text-xl">{currentDateTime}</p>
              </text>

            </svg>
          </div>
          <button
            onClick={handlePunchButtonClick}
            className="bg-[#0098F1] text-[20px] text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition"
          >
            {isPunchedIn ? "Punch Out" : "Punch In"}
          </button>

          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span className="border border-[#E65F2B] text-[#E65F2B] p-2 rounded-lg">
              Break {statistics.breakTime.hours} hrs {statistics.breakTime.minutes} mins {statistics.breakTime.seconds} secs
            </span>
            <span className="border border-[#E65F2B] text-[#E65F2B] p-2 rounded-lg">
              Overtime {statistics.overtime} Hrs
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-6">Statistics</h2>
          {[
            { label: "Today", percentage: (totalHours / officeHours) * 100, color: "bg-blue-500", value: `${totalHours}/${officeHours}hrs` },
            { label: "This week", percentage: (totalHours / (officeHours * 5)) * 100, color: "bg-green-500", value: `${totalHours}/${officeHours * 5}hrs` },
            { label: "This month", percentage: (totalHours / (officeHours * 20)) * 100, color: "bg-purple-500", value: `${totalHours}/${officeHours * 20}hrs` },
            { label: "Remaining", percentage: ((officeHours * 20 - totalHours) / (officeHours * 20)) * 100, color: "bg-yellow-500", value: `${officeHours * 20 - totalHours}/${officeHours * 20}hrs` },
            { label: "Overtime", percentage: (statistics.overtime / (officeHours * 20)) * 100, color: "bg-red-500", value: `${statistics.overtime}hrs` },
          ].map((stat, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2 text-sm font-semibold text-gray-700">
                <span className="text-[15px] font-bold">{stat.label}</span>
                <span>{stat.value}</span>
              </div>
              <div className="relative h-3 bg-gray-200 rounded-full shadow-inner">
                <div
                  className={`${stat.color} h-3 rounded-full shadow`}
                  style={{ width: `${stat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 h-[450px] overflow-y-auto scrollbar-hidden">
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>
          <div className="relative">
            <div className="absolute left-5 top-1 h-full border-l-2 border-gray-300"></div>
            {attendanceData.map((activity, index) => (
              <div className="flex items-start mb-8 ml-8" key={index}>
                <div className={`w-3 h-3 bg-blue-500 rounded-full z-10 mt-1.5 pl-3 -ml-4`}></div>
                <div className="ml-6">
                  <p className="text-sm text-gray-600">{activity.punchIn.toLocaleString()}</p>
                  <p className="font-semibold flex text-[17px] items-center">
                    <FaClock className="mr-2 text-blue-500 text-[15px]" />
                    Punch In
                  </p>
                  {activity.punchOut && (
                    <>
                      <p className="text-sm text-gray-600">{activity.punchOut.toLocaleString()}</p>
                      <p className="font-semibold flex text-[17px] items-center">
                        <FaClock className="mr-2 text-red-500 text-[15px]" />
                        Punch Out
                      </p>
                    </>
                  )}
                  <p className="text-sm text-gray-700">
                    {activity.production.hours} hrs {activity.production.minutes} mins {activity.production.seconds} secs
                  </p>
                  <p className="text-sm text-gray-700">
                    Break: {activity.breakDuration.hours} hrs {activity.breakDuration.minutes} mins {activity.breakDuration.seconds} secs
                  </p>
                  <p className="text-sm text-gray-700">Overtime: {activity.overtime} hrs</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="flex items-center gap-4 mb-6">
        <DatePicker
          selected={searchDate}
          onChange={handleDateChange}
          className="p-2 border border-gray-300 w-[150px] h-[50px] rounded-xl bg-[#FFFFFF] text-[#E65F2B] text-[20px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          dateFormat="yyyy-MM-dd"
        />
        <select
          className="p-2 border border-gray-300 rounded-xl w-[150px] h-[50px] bg-white text-[#E65F2B] text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ].map((month, index) => (
            <option key={index + 1} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded-xl w-[150px] h-[50px] bg-[#FFFFFF] text-[#E65F2B] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-white rounded-lg bg-[#E65F2B] text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <table className="min-w-full bg-white  rounded-lg shadow-lg border border-orange-900">
        <thead className="bg-[#E65F2B]  text-white text-[20px]">
          <tr>
            {[
              "No",
              "Punch In Date",
              "Punch In Time",
              "Punch Out Time",
              "Production Time",
              "Break Time",
              "Overtime",
            ].map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left text-white font-semibold border border-orange-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredAttendanceData.map((entry, index) => {
            const { punchIn, punchOut, production, breakDuration, overtime } = entry;

            return (
              <tr key={index} className="border-t border-orange-500">
                <td className="py-2 px-4 text-orange-600 text-[14px] border border-orange-500">{index + 1}</td>
                <td className="py-2 px-4 text-orange-600 text-[14px] border border-orange-500">{punchIn.toLocaleDateString()}</td>
                <td className="py-2 px-4 text-orange-600 text-[14px] border border-orange-500">{punchIn.toLocaleTimeString()}</td>
                <td className="py-2 px-4 text-orange-600 text-[14px] border border-orange-500">{punchOut ? punchOut.toLocaleTimeString() : 'N/A'}</td>
                <td className="py-2 px-4 text-orange-600 text-[14px] border border-orange-500">
                  {production.hours} hrs {production.minutes} mins {production.seconds} secs
                </td>
                <td className="py-2 px-4 text-orange-600 border text-[14px] border-orange-500">
                  {breakDuration.hours} hrs {breakDuration.minutes} mins {breakDuration.seconds} secs
                </td>
                <td className="py-2 px-4 text-orange-600 border text-[14px] border-orange-500">{overtime} hrs</td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
