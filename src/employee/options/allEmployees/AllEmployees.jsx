/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const EmployeeCard = ({ teamname, name, position, img, employeeId }) => (
  <div className="bg-white text-center p-5 rounded-2xl shadow-md flex flex-col items-center relative">
    <div className="absolute top-2 left-2 bg-[#e9aa8d] text-white text-xs font-bold px-2 py-1 rounded">
      Id: {employeeId}
    </div>
    <h1 className="text-[#0098F1] font-bold text-lg mb-2 mt-5">{teamname}</h1>
    <img
      src={img}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#E65F2B] shadow-md mx-auto"
      alt=""
    />
    <div className="mt-2">
      <h1 className="text-lg text-[#E65F2B]">{name}</h1>
      <h1 className="text-lg text-[#E65F2B]">{position}</h1>
    </div>
  </div>
);

const AllEmployees = () => {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employee/getAllEmployee`);
      setEmployees(response.data);
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setErrorMessage("Error fetching employees");
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const lowerCaseSearchId = searchId.toLowerCase();
    const lowerCaseSearchName = searchName.toLowerCase();

    if (!lowerCaseSearchId && !lowerCaseSearchName) {
      setFilteredData(employees);
    } else {
      const filtered = employees.filter((employee) => {
        const idMatch = lowerCaseSearchId
          ? employee.employeeId.toString().includes(lowerCaseSearchId)
          : true;
        const nameMatch = lowerCaseSearchName
          ? employee.name.toLowerCase().includes(lowerCaseSearchName)
          : true;
        return idMatch && nameMatch;
      });

      setFilteredData(filtered);
    }
  };

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setFilteredData(employees);
    }
  };

  return (
    <div id="main" className="p-4 h-[200vh]">
      <div className="ml-3 mb-4 flex flex-col md:flex-row justify-between">
        <div>
          <span className="flex">Employee</span>
          <span className="text-[16px] font-medium">
            Dashboard / Employee
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="search"
            placeholder="Employee ID"
            value={searchId}
            onChange={(e) => handleInputChange(e, setSearchId)}
            className="bg-transparent border border-[#E65F2B] p-2 rounded text-lg font-semibold placeholder-[#E65F2B] h-[45px] w-full"
          />
          <input
            type="search"
            placeholder="Employee Name"
            value={searchName}
            onChange={(e) => handleInputChange(e, setSearchName)}
            className="bg-transparent border border-[#E65F2B] p-2 rounded text-lg font-semibold placeholder-[#E65F2B] h-[45px] w-full"
          />
        </div>
        <button
          type="button"
          className="bg-[#E65F2B] text-white h-[45px] w-[150px] px-4 rounded-lg text-lg font-semibold shadow hover:bg-[#e46342] flex items-center justify-center"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((employee) => (

            <EmployeeCard
              key={employee.employeeId}
              teamname={employee.designation}
              name={employee.firstName + " " + employee.lastName}
              position={employee.role}
              img={employee.img}
              employeeId={employee.employeeId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEmployees;
