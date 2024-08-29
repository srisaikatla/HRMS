import React, { useState, useEffect } from "react";

import logo from "../../../employeeAssets/spydlogo.png";
import numberToWords from "number-to-words";

function Payslip() {
  const [payslipMonth, setPayslipMonth] = useState("August");
  const [payslipYear, setPayslipYear] = useState("2024");
  const [showForm, setShowForm] = useState(true);

  const years = ["2024"];
  const months = [
    // "January",
    // "February",
    // "March",
    // "April",
    // "May",
    "June",
    "July",
    "August",
    "September",
    // "October",
    // "November",
    // "December",
  ];

  const employeeDetails = {
    name: "RAGHAVENDRA KOMMULA",
    employeeNumber: "SDT0026",
    dateJoined: "17-OCT-2023",
    department: "Operations-Human Resources",
    subDepartment: "N/A",
    designation: "HR-EXECUTIVE",
    paymentMode: "Bank Transfer",
    bank: "HDFC bank Limited",
    bankIFSC: "HDFC0001234",
    bankAccount: "7788789898998",
    PAN: "WEIRIR0982F",
    UAN: "101788999922",
    pfNumber: "N/A",
  };

  const salaryDetails = {
    actualPayableDays: 31.0,
    totalWorkingDays: 31.0,
    lossOfPayDays: 0.0,
    daysPayable: 31.0,
  };

  const earnings = [
    { label: "Basic", amount: 13500.0 },
    { label: "Conveyance Allowance", amount: 1600.0 },
    { label: "HRA", amount: 6923.0 },
    { label: "Medical Allowance", amount: 1250.0 },
    { label: "Special Allowance", amount: 4073.0 },
  ];

  const contributions = [{ label: "PF Employee", amount: 1600.0 }];

  const deductions = [{ label: "Professional Tax", amount: 200.0 }];

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const totalEarnings = calculateTotal(earnings);
  const totalContributions = calculateTotal(contributions);
  const totalDeductions = calculateTotal(deductions);
  const netSalary = totalEarnings - totalContributions - totalDeductions;

  const handleDownload = () => {
    setShowForm(false);
  };

  return (
    <>
      <div id="main" className="text-[24px] font-semibold w-auto h-auto">
        {showForm ? (
          <div id="submain1">
            <form>
              <div
                id="select"
                className="flex flex-col gap-x-5 m-2 justify-center items-center pt-10 bg-white"
              >
                <div className="flex justify-center items-center gap-x-5">
                  <div className="h-60">
                    <label className="inline-block text-[16px] text-[#2A546D] font-medium mb-2">
                      YEAR
                    </label>
                    <select
                      className="px-20 text-[#2A546D] text-lg py-4 ml-2 bg-transparent border-2 border-[#2A546D] outline-none"
                      onChange={(e) => setPayslipYear(e.target.value)}
                    >
                      {years.map((year) => (
                        <option
                          key={year}
                          className="hover:bg-[#2A546D] text-[14px]"
                          value={year}
                        >
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="h-60">
                    <label className="inline-block text-[#2A546D] text-[16px] font-medium mb-2">
                      MONTH
                    </label>
                    <select
                      className="px-20 text-lg py-4 text-[#2A546D] ml-2 bg-transparent border-2 border-[#2A546D] outline-none"
                      onChange={(e) => setPayslipMonth(e.target.value)}
                    >
                      {months.map((month) => (
                        <option
                          key={month}
                          className="hover:bg-[#2A546D] text-[14px]"
                          value={month}
                        >
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-10 text-lg absolute">
                  <button
                    type="button"
                    className="px-10 py-4 bg-[#2A546D] text-white font-medium rounded"
                    onClick={handleDownload}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div id="payslip" className="submain2 bg-white  m-2 py-8 px-12">
            <h1 className="text-3xl text-gray-500 text-start">
              <span className="text-black">PAYSLIP</span>{" "}
              {payslipMonth.toUpperCase()} {payslipYear}
            </h1>
            <div className="flex flex-row justify-between pt-8">
              <div id="company" className="flex w-[300px] flex-row items-start">
                <div className="leading-normal flex flex-col ">
                  <span className="font-medium pb-4 text-[18px]">
                    SPY D TECHNOLOGY PVT LTD
                  </span>
                  <span className="uppercase text-[14px]">
                    Meera Complex, Plot No 852, 2nd Floor, Madhapur, 100 Feet
                    Road, Hyderabad, Telangana - 500081
                  </span>
                </div>
              </div>
              <div className="w-auto relative bg-green-400 bottom-20 h-auto text-right">
                <img src={logo} className="w-[200px] h-[200px]" alt="" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                {employeeDetails.name}
              </h2>
              <hr className="border-black border-2"></hr>
              <div className="main1 flex justify-between items-center py-2">
                <div className="m-4 w-[150px] text-sm">
                  <span className="block text-gray-500">Employee Number</span>
                  <span className="block text-[16px]">
                    {employeeDetails.employeeNumber}
                  </span>
                </div>
                <div className="m-4 w-[150px] text-sm">
                  <span className="block text-gray-500">Date Joined</span>
                  <span className="block text-[16px]">
                    {employeeDetails.dateJoined}
                  </span>
                </div>
                <div className="m-4 text-sm w-[150px]">
                  <span className="block text-gray-500">Department</span>
                  <span className="block text-[16px] text-wrap">
                    {employeeDetails.department}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">Sub Department</span>
                  <span className="block text-[16px]">
                    {employeeDetails.subDepartment}
                  </span>
                </div>
              </div>

              <hr className="bg-black border-2"></hr>
              <div className="main2 flex justify-between items-center">
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">Designation</span>
                  <span className="block text-[16px]">
                    {employeeDetails.designation}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">Payment Mode</span>
                  <span className="block text-[16px]">
                    {employeeDetails.paymentMode}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">Bank</span>
                  <span className="block text-[16px] text-wrap">
                    {employeeDetails.bank}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">IFSC Code</span>
                  <span className="block text-[16px]">
                    {employeeDetails.bankIFSC}
                  </span>
                </div>
              </div>

              <hr className="border-black border-2"></hr>
              <div className="main2 flex justify-between items-center">
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">Bank Account</span>
                  <span className="block text-[16px]">
                    {employeeDetails.bankAccount}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">PAN</span>
                  <span className="block text-[16px]">
                    {employeeDetails.PAN}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">UAN</span>
                  <span className="block text-[16px] text-wrap">
                    {employeeDetails.UAN}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">PF Number</span>
                  <span className="block text-[16px]">
                    {employeeDetails.pfNumber}
                  </span>
                </div>
              </div>
              <hr className="border-black border-2"></hr>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-3">SALARY DETAILS</h2>
              <hr className="border-black border-2"></hr>

              <div className="main2 flex justify-between items-center">
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">
                    ACTUAL PAYABLE DAYS
                  </span>
                  <span className="block text-[16px]">
                    {salaryDetails.actualPayableDays}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">
                    TOTAL WORKING DAYS
                  </span>
                  <span className="block text-[16px]">
                    {salaryDetails.totalWorkingDays}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">LOSS OF PAY DAYS</span>
                  <span className="block text-[16px] text-wrap">
                    {salaryDetails.lossOfPayDays}
                  </span>
                </div>
                <div className="w-[150px] m-4 text-sm">
                  <span className="block text-gray-500">DAYS PAYABLE</span>
                  <span className="block text-[16px]">
                    {salaryDetails.daysPayable}
                  </span>
                </div>
              </div>
              <hr className="bg-black border-2"></hr>
            </div>

            <div id="main" className="w-auto h-auto grid-cols-2 grid mt-2 pb-2">
              <div id="earnings" className="h-auto border-r-4 border-gray-200">
                <span className="text-xl">EARNINGS</span>
                <div id="submain" className="text-gray-700">
                  {earnings.map((earning, index) => (
                    <div
                      key={index}
                      className="text-[16px] justify-between flex items-center pr-4"
                    >
                      <span>{earning.label}</span>
                      <span>{earning.amount.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="text-xl text-black justify-between flex items-center pt-2 pr-4">
                    <span>Total Earnings(A)</span>
                    <span>{totalEarnings.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div id="contributions" className="pl-1 h-auto">
                <span className="text-xl">CONTRIBUTIONS</span>
                <div id="submain" className="text-gray-700">
                  {contributions.map((contribution, index) => (
                    <div
                      key={index}
                      className="text-[16px] justify-between flex items-center pr-4"
                    >
                      <span>{contribution.label}</span>
                      <span>{contribution.amount.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="text-xl text-black justify-between flex items-center pr-4">
                    <span>Total Contributions(B)</span>
                    <span>{totalContributions.toFixed(2)}</span>
                  </div>

                  <div className="text-xl text-black pt-4 justify-between flex items-center pr-4">
                    <span>TAXES AND DEDUCTIONS</span>
                  </div>
                  {deductions.map((deduction, index) => (
                    <div
                      key={index}
                      className="text-[16px] justify-between flex items-center pr-4"
                    >
                      <span>{deduction.label}</span>
                      <span>{deduction.amount.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="text-xl text-black justify-between flex items-center pt-2 pr-4">
                    <span>Total Deductions(C)</span>
                    <span>{totalDeductions.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-black border-2"></hr>

            <div className="text-[16px] pt-4 justify-between items-center flex">
              <span>Net Salary Payable (A-B-C)</span>
              <span className="font-bold text-xl">{netSalary.toFixed(2)}</span>
            </div>
            <div className="text-[16px] justify-between items-center flex text-black pt-2">
              <span>Net Salary in words</span>
              <span className="font-bold text-xl capitalize">
                {numberToWords.toWords(netSalary)}
              </span>
            </div>

            <div className="text-[16px] text-black pt-4">
              <span className="font-bold">**NOTE :</span>
              <span className="italic pl-1">
                All Amounts displayed in this payslip are in
              </span>
              <span className="font-bold italic pl-1">INR</span>
            </div>

            <div className="text-[14px] text-black pt-10">
              <span className="font-sm">
                *This is computer generated statement, does not require any
                signature
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Payslip;
