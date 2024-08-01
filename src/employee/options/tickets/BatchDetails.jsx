import React, { useEffect, useState } from "react";

const BatchDetails = ({ batch, onBack, batches }) => {
  const [selectedBatchId, setSelectedBatchId] = useState(batch.id);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Set the initial selected batch id
    setSelectedBatchId(batch.id);
  }, [batch.id]);

  // Handle dropdown change
  const handleBatchChange = (event) => {
    const batchId = Number(event.target.value);
    const newBatch = batches.find((b) => b.id === batchId);
    if (newBatch) {
      setSelectedBatchId(newBatch.id);
      // You might want to update the `batch` state here if needed
    }
  };

  // Find the currently selected batch
  const currentBatch = batches.find((b) => b.id === selectedBatchId) || batch;

  // Handle adding a new employee
  const handleAddEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: `Employee ${employees.length + 1}`,
      title: "New Title",
      workLocation: "New Location",
      status: "Active",
      batch: currentBatch.name,
    };

    setEmployees([...employees, newEmployee]);

    // Optionally update the batch data in the parent component if needed
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between border-b py-3 border-gray-400">
        <h1 className="text-2xl font-bold">{currentBatch.name} Batch</h1>
        <button onClick={onBack} className=" bg-gray-300 px-4 py-1 rounded">
          Back
        </button>
      </div>
      <div className="my-5 text-center">
        <p className="text-gray-400 ">
          Pay Days <span className="text-gray-900">Actual Days</span>
        </p>
        <p className="text-gray-400">
          Include Weekly Offs <span className="text-gray-900">Yes</span>
        </p>
        <p className="text-gray-400">
          Include Holidays <span className="text-gray-900">Yes</span>
        </p>
      </div>
      <div className="flex items-center justify-between border-b py-3 border-gray-400 my-3">
        <h1 className="font-bold text-xl">Employees</h1>
        <select
          value={selectedBatchId}
          onChange={handleBatchChange}
          className=" outline-none px-2 border"
        >
          {/* <option value="">Select Batch</option> */}
          {batches.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-end my-5">
        <button
          className=" px-2 py-1 rounded-lg bg-[#E65F2B] text-white"
          onClick={handleAddEmployee}
        >
          Add Employees
        </button>
      </div>

      <div className="mt-5">
        <table className="min-w-full">
          <thead className="bg-[#E65F2B] text-white">
            <tr>
              <th className="py-2 px-4 border-b border-r border-white">
                EMPLOYEE NAME
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                TITLE
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                WORK LOCATION
              </th>
              <th className="py-2 px-4 border-b border-r border-white">
                EMP STATUS
              </th>
              <th className="py-2 px-4 border-b">BATCH</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className=" cursor-pointer">
                <td className="py-2 text-center border-r border-white">
                  {employee.name}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.title}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.workLocation}
                </td>
                <td className="py-2 text-center border-r border-white">
                  {employee.status}
                </td>
                <td className="py-2 text-center">{employee.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="my-3 text-[#E65F2B] font-bold">
        Total Records : {employees.length}
      </p>
    </div>
  );
};

export default BatchDetails;
