import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Select from 'react-select';

// Dummy data
const userdata = [
  { id: 1, employerName: "seoling duja", payperiod: "01 Jan, 2024 to 31 Jan, 2024" },
  { id: 2, employerName: "Lena Smith", payperiod: "01 Feb, 2024 to 29 Feb, 2024" },
  { id: 3, employerName: "John Doe", payperiod: "01 Mar, 2024 to 31 Mar, 2024" },
  { id: 4, employerName: "Emily Johnson", payperiod: "01 Apr, 2024 to 30 Apr, 2024" },
  { id: 5, employerName: "Michael Brown", payperiod: "01 May, 2024 to 31 May, 2024" },
  { id: 6, employerName: "Sarah Davis", payperiod: "01 Jun, 2024 to 30 Jun, 2024" },
  { id: 7, employerName: "David Wilson", payperiod: "01 Jul, 2024 to 31 Jul, 2024" },
  { id: 8, employerName: "Olivia Martinez", payperiod: "01 Aug, 2024 to 31 Aug, 2024" },
  { id: 9, employerName: "James Taylor", payperiod: "01 Sep, 2024 to 30 Sep, 2024" },
  { id: 10, employerName: "Sophia Anderson", payperiod: "01 Oct, 2024 to 31 Oct, 2024" }
];

const initialData = [
  {
    employeeName: "John Doe",
    runDate: "2023-07-01",
    status: "Completed",
    payPeriod: "June 2023",
    gross: 5000,
    incomeTax: 500,
    surge: 50,
    cess: 20,
    netAmount: 4430,
  },
  {
    employeeName: "Jane Smith",
    runDate: "2023-07-01",
    status: "Pending",
    payPeriod: "June 2023",
    gross: 5500,
    incomeTax: 550,
    surge: 55,
    cess: 22,
    netAmount: 4873,
  },
  // More data objects can be added here
];

function Settlement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [selectedPayPeriod, setSelectedPayPeriod] = useState(null);
  const [payPeriods, setPayPeriods] = useState([]);
  const [tableData, setTableData] = useState(initialData);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleEmployerChange = (selectedOption) => {
    setSelectedEmployer(selectedOption);

    const relatedPayPeriods = userdata
      .filter(user => user.employerName === selectedOption?.value)
      .map(user => ({ value: user.payperiod, label: user.payperiod }));
    setPayPeriods(relatedPayPeriods);
    setSelectedPayPeriod(null);
  };

  const handlePayPeriodChange = (selectedOption) => {
    setSelectedPayPeriod(selectedOption);
  };

  const handleStart = () => {
    if (selectedEmployer && selectedPayPeriod) {
      // Create a new entry for the selected data
      const newEntry = {
        employeeName: selectedEmployer.value,
        runDate: new Date().toISOString().split('T')[0], // Current date as runDate
        status: "Pending",
        payPeriod: selectedPayPeriod.value,
        gross: 0, // Default values
        incomeTax: 0,
        surge: 0,
        cess: 0,
        netAmount: 0,
      };

      // Add the new entry to the table data
      setTableData([...tableData, newEntry]);
    }
    handleCloseModal();
  };

  return (
    <div className="main pt-2 h-screen">
      <div id="submain1" className="flex mx-4 flex-row justify-between items-center">
        <div>
        
          <span className="text-[#E65F2B] text-xl font-bold mb-4">
            PayRoll / Settlements
          </span>
        </div>
        <div className="w-auto h-[55px] px-4 flex rounded-lg bg-[#0098f1]">
          <button className="flex px-4 justify-center items-center" onClick={handleOpenModal}>
            <FaPlusCircle className="text-white text-3xl mr-2" />
            <span className="text-white bg-[#0098f1] font-medium text-lg">
              Add Settlement
            </span>
          </button>
        </div>
      </div>
      <div id="table" className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-600 pt-10 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap m-5">
          <thead>
            <tr>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Employee Name</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Run Date</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Status</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Pay Period</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Gross</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Income Tax</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Surge</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Cess</th>
              <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">Net Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="text-[#0098f1] border-b border-[#0098f1]">
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.employeeName}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.runDate}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.status}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.payPeriod}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.gross}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.incomeTax}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.surge}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.cess}</td>
                <td className="px-4 py-2 text-center border-r border-[#0098f1]">{item.netAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[60vw]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl text-[#0098f1]">Settlement</h2>
              <button
                className="font-bold cursor-pointer text-3xl"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center w-full max-w-md space-x-4 mb-4">
                <label htmlFor="employer" className="block text-xl font-medium text-[#0098f1] whitespace-nowrap">
                  Employer Name
                </label>
                <Select
                  id="employer"
                  className="react-select-container flex-grow"
                  classNamePrefix="react-select"
                  options={userdata.map(user => ({ value: user.employerName, label: user.employerName }))}
                  value={selectedEmployer}
                  onChange={handleEmployerChange}
                  placeholder="Select an employer"
                  isClearable
                />
              </div>

              {selectedEmployer && (
                <div className="flex items-center w-full max-w-md space-x-4 mb-4">
                  <label htmlFor="payperiod" className="block text-xl font-medium text-[#0098f1] whitespace-nowrap">
                    Pay Period
                  </label>
                  <Select
                    id="payperiod"
                    className="react-select-container flex-grow"
                    classNamePrefix="react-select"
                    options={payPeriods}
                    value={selectedPayPeriod}
                    onChange={handlePayPeriodChange}
                    placeholder="Select a pay period"
                    isClearable
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-transparent border border-blue-500 text-blue-500 h-[40px] w-[120px] rounded-lg"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#0098f1] text-white h-[40px] w-[120px] rounded-lg"
                onClick={handleStart}
                disabled={!selectedEmployer || !selectedPayPeriod}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settlement;
