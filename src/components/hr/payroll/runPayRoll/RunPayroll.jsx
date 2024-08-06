import React, { useState } from "react";

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
  },
};

const RunPayroll = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [payPeriod, setPayPeriod] = useState("");
  const [payrollDetails, setPayrollDetails] = useState(null);

  const handleBatchChange = (e) => {
    const batch = e.target.value;
    setSelectedBatch(batch);
    const period = batches[batch]?.period || "";
    setPayPeriod(period);

    if (batch) {
      setPayrollDetails(batches[batch]?.details || null);
    } else {
      setPayrollDetails(null);
    }
  };

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
          <div className="flex justify-between">
            <h1 className="text-lg font-bold mb-2">Payroll Information</h1>
            <h1 className="text-lg font-bold mb-2">Process Flow</h1>
            <button>Resume Payroll</button>
          </div>

          <div className="w-[40%] leading-7">
            <p className="flex justify-between">
              <strong>Payroll Type:</strong> <span>{payrollDetails.type}</span>
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
            <p className="flex justify-between">
              <strong>Payroll Started On:</strong>
              <span>{payrollDetails.startedOn}</span>
            </p>
            <p className="flex justify-between">
              <strong>Payroll Started By:</strong>
              <span>{payrollDetails.startedBy}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RunPayroll;
