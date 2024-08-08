import React from 'react'

const PayrollSummary = ({payPeriod, payrollType, batchName, totalEmployees}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 border-b pb-2 border-gray-700">
        <h1 className="text-xl font-bold">Pay Period: {payPeriod}</h1>
        <div className="flex items-center gap-x-5">
          <button className="border border-gray-700 text-gray-700 bg-white px-5 py-1 rounded-lg font-semibold">Void Payroll</button>
          <button className="border bg-gray-700 text-white px-5 py-1 rounded-lg font-semibold">Submit for Process</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className=" rounded-md">
          <h2 className="text-lg font-bold mb-2 text-[#0098F1]">Payroll Summary</h2>
          <p><strong>Payroll Type: </strong>{payrollType}</p>
          <p><strong>Batch: </strong>{batchName}</p>
          <p><strong>Employee Count: </strong> {totalEmployees}</p>
          <p><strong>Gross: </strong> ₹64,900.00</p>
          <p><strong>Net Amount: </strong> ₹59,629.78</p>
          <p><strong>Loss Of Pay: </strong> ₹0.00</p>
        </div>
        <div className=" rounded-md">
          <h2 className="text-lg font-bold mb-2 text-[#0098F1]">TDS Summary</h2>
          <p><strong>Income Tax: </strong> ₹3,144.44</p>
          <p><strong>Surcharge: </strong> ₹0.00</p>
          <p><strong>CESS: </strong> ₹125.78</p>
          <p><strong>Total TDS: </strong> ₹3,270.22</p>
          <p><strong>Total TDS Rounded: </strong> ₹3,271.00</p>
          <p><strong>Employees (count): </strong>{totalEmployees}</p>
        </div>
        <div className="rounded-md">
          <h2 className="text-lg font-bold mb-2 text-[#0098F1]">PF Summary</h2>
          <p><strong>Employee Contribution: </strong> ₹1,800.00</p>
          <p><strong>Employer Contribution: </strong> ₹1,500.00</p>
          <p><strong>Total PF: </strong> ₹3,300.00</p>
          <p><strong>PF Rounded: </strong> ₹3,300.00</p>
          <p><strong>Employees (count): </strong>{totalEmployees}</p>
        </div>
      </div>
    </div>
  )
}

export default PayrollSummary