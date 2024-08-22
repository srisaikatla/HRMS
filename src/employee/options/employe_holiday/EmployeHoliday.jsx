/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { API_BASE_URL } from '../../../Config/api';




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
    <>
      <div className="ml-2 mt-0 h-screen">
        <div className="p-4">
          <div className="ml-3 mb-4 flex flex-col md:flex-row justify-between">
            <div>
              <span className="flex">Employee</span>
              <span className="text-[16px] font-medium">
                Dashboard / Holidays
              </span>
            </div>
          </div>
          <div id="table" className="overflow-x-auto">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <table className="min-w-full">
                <thead className="bg-[#E65F2B]">
                  <tr>
                    <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                      Sl.No
                    </th>
                    <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                      Day
                    </th>
                    <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                      Date
                    </th>
                    <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">
                      Holiday Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {holidays.map((holiday, index) => (
                    <tr key={holiday.holidayName}>
                      <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{index + 1}</td>
                      <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.day}</td>
                      <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.date}</td>
                      <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.holidayName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeHoliday;


