import React, { useState } from "react";
import PayrollSummary from "../payrollSummary/PayrollSummary";

const batches = {
  "Full Time Batch": {
    period: "01 Jul, 2024 to 31 Jul, 2024",
    details: {
      type: "Monthly",
      employeesInBatch: 5,
      processedEmployees: 3,
      remainingEmployees: 2,
      totalDays: 31,
      startedOn: "Jul 24, 2024 at 5:50 PM",
      startedBy: "Sathish Chiluveru",
    },
    employees: [
      {
        id: "STD-060",
        name: "Captain",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-080",
        name: "Peter",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-010",
        name: "Marvel",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-020",
        name: "Tokyo",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-160",
        name: "Denver",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-180",
        name: "Mosco",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
    ],
  },
  "Part Time Batch": {
    period: "01 Aug, 2024 to 31 Aug, 2024",
    details: {
      type: "Weekly",
      employeesInBatch: 8,
      processedEmployees: 5,
      remainingEmployees: 3,
      totalDays: 31,
      startedOn: "Aug 1, 2024 at 9:00 AM",
      startedBy: "Shyam Chiluveru",
    },
    employees: [
      {
        id: "PT-010",
        name: "Alice",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "PT-020",
        name: "Bob",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },{
        id: "STD-160",
        name: "Denver",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-180",
        name: "Mosco",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-010",
        name: "Marvel",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-020",
        name: "Tokyo",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
    ],
  },
  "Intern Batch": {
    period: "01 Sep, 2024 to 30 Sep, 2024",
    details: {
      type: "Monthly",
      employeesInBatch: 3,
      processedEmployees: 1,
      remainingEmployees: 2,
      totalDays: 30,
      startedOn: "Sep 1, 2024 at 10:00 AM",
      startedBy: "Mounika ch",
    },
    employees: [
      {
        id: "STD-010",
        name: "Marvel",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "INT-001",
        name: "John",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-020",
        name: "Tokyo",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "INT-002",
        name: "Jane",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
      {
        id: "STD-180",
        name: "Mosco",
        gross: 45000,
        actualGross: 64000,
        basic: 32000,
        allowances: 32450,
        deductions: 2500,
        lossOfPay: 0.0,
        incomeTax: 3144,
        surcharge: 0.0,
        cess: 125,
        netAmount: 69259,
      },
    ],
  },
};

const steps = [
  {
    number: 1,
    title: "Compensation",
    description: "Review employees' compensation information",
  },
  {
    number: 2,
    title: "Time & Attendance",
    description: "Review employees' attendance, missing days and overtime",
  },
  {
    number: 3,
    title: "IT Declarations",
    description: "Review employees' IT Declarations information",
  },
  {
    number: 4,
    title: "Review",
    description: "Review employees' information",
  },
];

const RunPayroll = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [payPeriod, setPayPeriod] = useState("");
  const [payrollDetails, setPayrollDetails] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    const period = batches[batch]?.period || "";
    setPayPeriod(period);

    if (batch) {
      setPayrollDetails(batches[batch]?.details || null);
      setEmployees(batches[batch]?.employees || []);
    } else {
      setPayrollDetails(null);
      setEmployees([]);
    }
  };

  const handleResumePayroll = () => {
    setShowSummary(true);
  };

  if (showSummary) {
    return (
      <PayrollSummary
        payPeriod={payPeriod}
        payrollType={payrollDetails?.type}
        batchName={selectedBatch}
        totalEmployees={payrollDetails.employeesInBatch}
        employees={employees}
      />
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Payroll - Batch & Period</h1>
      <div className="text-center">
        <div className="mb-4">
          <label
            htmlFor="batch-select"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Select Batch
          </label>
          <select
            id="batch-select"
            className="w-80 ml-3 border outline-none p-1 rounded-md"
            value={selectedBatch}
            onChange={handleBatchChange}
          >
            <option value="">Select Batch</option>
            {Object.keys(batches).map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 ml-2">
          <label
            htmlFor="pay-period"
            className="text-gray-700 text-sm font-bold mb-2"
          >
            Pay Period
          </label>
          <select
            id="pay-period"
            className="w-80 ml-3 border rounded-md p-1"
            value={payPeriod}
            onChange={(e) => setPayPeriod(e.target.value)}
            disabled
          >
            {payPeriod && <option value={payPeriod}>{payPeriod}</option>}
          </select>
        </div>
      </div>

      {payrollDetails && (
        <div className="mt-4 p-4 rounded-md">
          <div className="flex justify-between  border-b pb-2 border-px border-gray-600">
            <h1 className="text-lg font-bold mb-2">Payroll Information</h1>
            <h1 className="text-lg font-bold mb-2 ml-24">Process Flow</h1>
            <button
              className="border bg-gray-700 text-white px-5 py-1 rounded-lg "
              onClick={handleResumePayroll}
            >
              Resume Payroll
            </button>
          </div>

          <div className="flex justify-between">
            <div className=" leading-7 my-5 w-[50%]">
              <p className="flex justify-between ">
                <strong>Payroll Type:</strong>{" "}
                <span>{payrollDetails.type}</span>
              </p>
              <p className="flex justify-between">
                <strong>Employees in Batch:</strong>
                <span>{payrollDetails.employeesInBatch}</span>
              </p>
              <p className="flex justify-between">
                <strong>Processed Employees:</strong>
                <span>{payrollDetails.processedEmployees}</span>
              </p>
              <p className="flex justify-between">
                <strong>Remaining Employees:</strong>
                <span>{payrollDetails.remainingEmployees}</span>
              </p>
              <p className="flex justify-between">
                <strong>Total Days:</strong>
                <span>{payrollDetails.totalDays}</span>
              </p>
              <p className="flex justify-between gap-24">
                <strong>Payroll Started On:</strong>
                <span>{payrollDetails.startedOn}</span>
              </p>
              <p className="flex justify-between">
                <strong>Payroll Started By:</strong>
                <span>{payrollDetails.startedBy}</span>
              </p>
            </div>
            <div className="flex flex-col items-start my-5 space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center space-x-4">
                  <div className="">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#0098F1] text-[#0098F1]">
                      {step.number}
                    </div>
                    {/* <div className="h-5 w-1 bg-gray-800"></div> */}
                  </div>
                  <div className="border border-r-4 p-2 bg-white shadow-md rounded-lg border-r-[#0098F1] w-[420px]">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RunPayroll;
