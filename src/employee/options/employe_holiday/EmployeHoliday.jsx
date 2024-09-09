/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

function EmployeHoliday() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/holidays`);
      setHolidays(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setErrorMessage("Error fetching employees");
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mt-4  min-h-screen">
      <div className="">
        <div className="  flex flex-col md:flex-row justify-between">
          <div>
            <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
              Employee / Holidays
            </span>
          </div>
        </div>
        {/* <div className="   overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap"> */}
        <div
          id="table"
          className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4"
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
              <thead className="">
                <tr className="bg-[#2a546d] text-white">
                  <th className="p-3 border border-r-white border-[#2a546d]">
                    Sl.No
                  </th>
                  <th className="p-3 border-r border-white">Day</th>
                  <th className="p-3 border-r border-white">Date</th>
                  <th className="p-3  border  border-[#2a546d]">
                    Holiday Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr
                    key={holiday.holidayName}
                    className="text-center text-[#2A546D] border  border-[#2a546d]"
                  >
                    <td className="p-3 border-r border-[#2a546d]">
                      {index + 1}
                    </td>
                    <td className="p-3 border-r border-[#2a546d] ">
                      {holiday.day}
                    </td>
                    <td className="p-3 border-r border-[#2a546d] ">
                      {holiday.date}
                    </td>
                    <td className="p-3 border-r border-[#2a546d]">
                      {holiday.holidayName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeHoliday;
