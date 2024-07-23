import React, { useState } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import uncheckbox from "../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../assets/hr/employee/checkbox/checkbox.png";

const sampleData = [
  {
    id: 1,
    dp: "https://via.placeholder.com/40",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
  },
  {
    id: 2,
    dp: "https://via.placeholder.com/40",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
  },
  // Add more sample data as needed
];

function AllEmployees() {
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);

  const handleCheckboxChange = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !headerChecked;
    setHeaderChecked(newCheckedState);

    const newIsChecked = {};
    sampleData.forEach((employee) => {
      newIsChecked[employee.id] = newCheckedState;
    });
    setIsChecked(newIsChecked);
  };

  return (
    <>
      <div id="main" className=" mt-24">
        <div className="ml-5 mb-4">
          <p className="text-[#e65f2b] font-semibold">
            Employees/All Employees
          </p>
        </div>

        <div className="flex justify-end mb-4 ">
          <div
            id="addemployee"
            className="w-auto inline-block  h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[186px] h-[48px] text-white"
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" /> Add Employee
            </button>
          </div>
        </div>
        <div id="table" className="w-full">
          <table className="min-w-full overflow-x-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-transparent text-center">
                  <img
                    src={headerChecked ? checkbox : uncheckbox}
                    alt="Header Checkbox"
                    onClick={handleHeaderCheckboxChange}
                    className="bg-transparent"
                  />
                </th>
                <th className="py-4 px-8 border-b bg-transparent"></th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Name
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Email-id
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Phone
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Employee ID
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Joining Date
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Role
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((employee) => (
                <tr key={employee.id} className="">
                  <td className="py-2 px-4 border-b text-center bg-transparent">
                    <img
                      src={isChecked[employee.id] ? checkbox : uncheckbox}
                      alt="Checkbox"
                      onClick={() => handleCheckboxChange(employee.id)}
                    />
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={employee.dp}
                      alt="DP"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.name}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.email}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.phone}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.employeeId}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.joiningDate}
                  </td>
                  <td className="py-2 px-4  bg-transparent border-b text-center">
                    {employee.role}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center flex justify-center space-x-2">
                    <button className="text-blue-500 flex py-3 items-center">
                      <FiEdit className="mr-1" />
                    </button>
                    <button className="text-red-500 flex py-3 items-center">
                      <FiTrash2 className="mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllEmployees;
