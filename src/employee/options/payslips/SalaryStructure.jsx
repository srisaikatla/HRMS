import React from "react";

const salaryData = [
  { component: "Basic Salary", monthly: "₹ 15,000", yearly: "₹ 1,80,000" },
  {
    component: "House Rent Allowance (H.R.A)",
    monthly: "₹ 5,000",
    yearly: "₹ 60,000",
  },
  { component: "Bonus", monthly: "₹ 1,500", yearly: "₹ 18,000" },
  { component: "Conveyance", monthly: "₹ 800", yearly: "₹ 9,600" },
  { component: "Other Allowance", monthly: "₹ 800", yearly: "₹ 9,600" },
];

function SalaryStructure() {
  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Payroll / SalaryStructure
          </span>
        </div>
      </div>
      <div id="salary-structure" className="bg-white  mt-4 p-2">
        <div className="text-lg text-[#2A546D] pt-4 flex justify-between items-center">
          <p>Current Salary</p>
          <p>Effective Date: June 21, 2024</p>
        </div>
        <div className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2A546D] pt-10 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead className="bg-[#2A546D] text-white">
              <tr>
                <th className="px-4 bg-[#2A546D] border-r border-white text-white py-2">
                  Components
                </th>
                <th className="px-4 bg-[#2A546D] border-r border-white text-white py-2">
                  Monthly
                </th>
                <th className="px-4 bg-[#2A546D] border-r border-white text-white py-2">
                  Yearly
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-[#2A546D] bg-opacity-10">
              {salaryData.map((item, index) => (
                <tr key={index} className="text-[#2A546D]  border-white">
                  <td className="px-4 py-2 text-center border-r  border-white  ">
                    {item.component}
                  </td>
                  <td className="px-4 py-2 text-center border-r  border-white ">
                    {item.monthly}
                  </td>
                  <td className="px-4 py-2 text-center border-r  border-white  ">
                    {item.yearly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm py-10 pl-5">
          * The effective date is the effective date of the most recent change
          in the CTC/Gross or the structure breakup.
        </p>
      </div>
    </div>
  );
}

export default SalaryStructure;
