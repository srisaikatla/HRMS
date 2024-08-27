import React from "react";

import Activity from "./Activity";
import EmployeeSummary from "./EmployeeSummary";

const PayrollSummary = ({
  payPeriod,
  payrollType,
  batchName,
  totalEmployees,
  employees,
}) => {
  return (
    <div className="p-4">
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 border-b pb-2 border-gray-700">
          <h1 className="text-[#E65F2B] md:text-xl font-bold mb-4">
            Pay Period: <span className="text-[#0098F1]">{payPeriod}</span>
          </h1>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-5">
            <button className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold">
              Void Payroll
            </button>
            <button className="border bg-gray-700 text-white px-5 py-1 rounded-lg font-semibold">
              Submit for Process
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 ">
          <div className=" rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black className='text-[#0098F1]'">
              Payroll Summary
            </h2>
            <p>
              <strong className="text-[#0098F1]">Payroll Type: </strong>
              {payrollType}
            </p>
            <p>
              <strong className="text-[#0098F1]">Batch: </strong>
              {batchName}
            </p>
            <p>
              <strong className="text-[#0098F1]">Employee Count: </strong>{" "}
              {totalEmployees}
            </p>
            <p>
              <strong className="text-[#0098F1]">Gross: </strong> ₹64,900.00
            </p>
            <p>
              <strong className="text-[#0098F1]">Net Amount: </strong>{" "}
              ₹59,629.78
            </p>
            <p>
              <strong className="text-[#0098F1]">Loss Of Pay: </strong> ₹0.00
            </p>
          </div>
          <div className=" rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black">TDS Summary</h2>
            <p>
              <strong className="text-[#0098F1]">Income Tax: </strong> ₹3,144.44
            </p>
            <p>
              <strong className="text-[#0098F1]">Surcharge: </strong> ₹0.00
            </p>
            <p>
              <strong className="text-[#0098F1]">CESS: </strong> ₹125.78
            </p>
            <p>
              <strong className="text-[#0098F1]">Total TDS: </strong> ₹3,270.22
            </p>
            <p>
              <strong className="text-[#0098F1]">Total TDS Rounded: </strong>{" "}
              ₹3,271.00
            </p>
            <p>
              <strong className="text-[#0098F1]">Employees (count): </strong>
              {totalEmployees}
            </p>
          </div>
          <div className="rounded-md leading-7">
            <h2 className="text-lg font-bold mb-2 text-black">PF Summary</h2>
            <p>
              <strong className="text-[#0098F1]">
                Employee Contribution:{" "}
              </strong>{" "}
              ₹1,800.00
            </p>
            <p>
              <strong className="text-[#0098F1]">
                Employer Contribution:{" "}
              </strong>{" "}
              ₹1,500.00
            </p>
            <p>
              <strong className="text-[#0098F1]">Total PF: </strong> ₹3,300.00
            </p>
            <p>
              <strong className="text-[#0098F1]">PF Rounded: </strong> ₹3,300.00
            </p>
            <p>
              <strong className="text-[#0098F1]">Employees (count): </strong>
              {totalEmployees}
            </p>
          </div>
        </div>
      </div>

      <EmployeeSummary employees={employees} />

      <Activity />
    </div>
  );
};

export default PayrollSummary;
