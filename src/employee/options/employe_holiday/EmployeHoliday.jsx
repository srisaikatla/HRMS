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
        <div
          id="table"
          className="  overflow-x-scroll scrollbar-thin h-screen   overflow-y-auto   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 "
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="min-w-full overflow-x-scroll text-nowrap ">
              <thead className="bg-[#2A546D] text-white">
                <tr>
                  <th className="py-3 px-4 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                    Sl.No
                  </th>
                  <th className="py-3 px-4 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                    Day
                  </th>
                  <th className="py-3 px-4 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                    Date
                  </th>
                  <th className="py-3 px-4 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                    Holiday Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr key={holiday.holidayName}>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-l border-[#2A546D] border-opacity-80 text-lg ">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#2A546D] border-opacity-80 text-lg ">
                      {holiday.day}
                    </td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#2A546D] border-opacity-80 text-lg ">
                      {holiday.date}
                    </td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#2A546D] border-opacity-80 text-lg">
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
