import React from "react";
import { HiRefresh } from "react-icons/hi";
import { PiArrowLineDownBold } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";

const EmployeeSummary = ({employees}) => {
  return (
    <div className="my-8 ">
      <h1 className="text-xl font-bold">Employee Summary</h1>
      <div className="flex flex-col">
        <div className="my-2 flex space-x-5">
          <button className="flex gap-1 items-center py-1 px-4 rounded-lg bg-yellow-500 text-white">
            <HiRefresh />
            Refresh/Undo
          </button>
          <button className="flex gap-1 items-center py-1 px-4 rounded-lg bg-gray-800 text-white">
            <PiArrowLineDownBold />
            Cash requirements
          </button>
          <button className="flex gap-1 items-center py-1 px-4 rounded-lg bg-gray-800 text-white">
            <PiArrowLineDownBold />
            Payroll Detailed Report
          </button>
          <button className="flex gap-1 items-center py-1 px-4 rounded-lg bg-gray-800 text-white">
            Import Allowances/Deductions
            <RiArrowDownSLine />
          </button>
        </div>
        <div className="flex mr-5 gap-2 pr-2 border self-end bg-gray-300 rounded-md">
          <input
            type="search"
            className="outline-none pl-3 p-1 text-sm"
            placeholder="Search..."
          />
          <button>Go</button>
        </div>
      </div>

      <div className="my-2 overflow-x-auto">
        <table className=" min-w-[1000px]  ">
          <thead className="bg-[#0098F1]">
            <tr className="text-sm text-white">
              <th className="py-1 px-4 border-r border-white whitespace-nowrap">
                EMPLOYEE NAME
              </th>
              <th className="py-1 px-4 border-r border-white">EMPLOYEE</th>
              <th className="py-1 px-4 border-r border-white">GROSS(₹)</th>
              <th className="py-1 px-4 border-r border-white whitespace-nowrap">
                ACTUAL GROSS(₹)
              </th>
              <th className="py-1 px-4 border-r border-white">BASIC(₹)</th>
              <th className="py-1 px-4 border-r border-white">ALLOWANCES(₹)</th>
              <th className="py-1 px-4 border-r border-white">DEDUCTIONS(₹)</th>
              <th className="py-1 px-4 border-r border-white whitespace-nowrap">
                LOSS OF PAY(₹)
              </th>
              <th className="py-1 px-4 border-r border-white whitespace-nowrap">
                INCOME TAX(₹)
              </th>
              <th className="py-1 px-4 border-r border-white">SURCHARGE(₹)</th>
              <th className="py-1 px-4 border-r border-white">CESS(₹)</th>
              <th className="py-1 px-4 whitespace-nowrap">NET AMOUNT(₹)</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-center">
                <td className="py-2 px-4 border-r border-white">
                  {employee.name}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.id}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.gross}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.actualGross}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.basic}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.allowances}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.deductions}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.lossOfPay}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.incomeTax}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.surcharge}
                </td>
                <td className="py-2 px-4 border-r border-white">
                  {employee.cess}
                </td>
                <td className="py-2 px-4">{employee.netAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-semibold text-sm">
        Total Records :
        <span className="text-[#0098F1]"> {employees.length}</span>
      </p>
    </div>
  );
};

export default EmployeeSummary;
