// import React from "react";
// import { FaPlusCircle } from "react-icons/fa";

// const data = [
//   {
//     formtype: "Form A",
//     financialYear: "2023-2024",
//     createdBy: "John Doe",
//     createdOn: "2023-07-01",
//     action: "action",
//   },
//   {
//     formtype: "Form B",
//     financialYear: "2023-2024",
//     createdBy: "Jane Smith",
//     createdOn: "2023-07-01",
//     action: "action",
//   },
//   // Add more data objects as needed
// ];

// function PayrollForms() {
//   return (
//     <>
//       <div className="main pt-2 ">
//         <div
//           id="submain1"
//           className="flex mx-4 flex-row justify-between items-center"
//         >
//           <div>
//             {/* <span className="flex text-lg font-bold">Hr</span> */}
//             <span className="text-[#E65F2B] text-xl font-bold mb-4">
//               Payroll /Payroll Forms
//             </span>
//           </div>
//         </div>

//         <div className="pt-10 mx-3">
//           <span className="pl-10 text-lg">Forms</span>
//           <hr className="bg-[#0098f1] h-[2px] border-none my-3" />

//           <div className="flex justify-center items-center h-60">
//             <label className="block text-lg font-medium mb-2">Tax Form:</label>
//             <select className="px-20 py-4 ml-2 bg-transparent border-2 border-[#0098f1] outline-none">
//               <option className="hover:bg-[#0098f1] bg-white" value=""></option>
//               <option className="hover:bg-[#0098f1]" value="Form 16">
//                 Form 16
//               </option>
//               <option className="hover:bg-[#0098f1]" value="Form 16A">
//                 Form 16A
//               </option>
//               <option className="hover:bg-[#0098f1]" value="Form 10E">
//                 Form 10E
//               </option>
//               <option className="hover:bg-[#0098f1]" value="Form 12B">
//                 Form 12B
//               </option>
//               <option className="hover:bg-[#0098f1]" value="Form 26AS">
//                 Form 26AS
//               </option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//         </div>

//         <div
//           id="table"
//           className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-600 pt-10 mx-4"
//         >
//           <span className="pl-10 text-lg">Downloads</span>
//           <hr className="bg-[#0098f1] w-screen h-[2px] border-none my-3 mb-6" />
//           <table className="min-w-full w-screen overflow-x-scroll text-nowrap ">
//             <thead>
//               <tr>
//                 <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
//                   Form Type
//                 </th>
//                 <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
//                   Financial Year
//                 </th>
//                 <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
//                   Created By
//                 </th>
//                 <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
//                   Created On
//                 </th>
//                 <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr
//                   key={index}
//                   className=" text-[#0098f1] border-b border-[#0098f1]"
//                 >
//                   <td className="px-4 py-2 text-center border-r border-[#0098f1]">
//                     {item.formtype}
//                   </td>
//                   <td className="px-4 py-2 text-center border-r border-[#0098f1]">
//                     {item.financialYear}
//                   </td>
//                   <td className="px-4 py-2 text-center border-r border-[#0098f1]">
//                     {item.createdBy}
//                   </td>
//                   <td className="px-4 py-2 text-center border-r border-[#0098f1]">
//                     {item.createdOn}
//                   </td>
//                   <td className="px-4 py-2 text-center border-r border-[#0098f1]">
//                     {item.action}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PayrollForms;
import React, { useState } from "react";
import Select from "react-select";
import { FaEdit, FaTrash } from "react-icons/fa";

const employees = [
  { value: "Employee 1", label: "Employee 1" },
  { value: "Employee 2", label: "Employee 2" },
  { value: "Employee 3", label: "Employee 3" },
];

const adminName = "Admin Name"; // Replace this with the actual admin name

function PayrollForms() {
  const [selectedForm, setSelectedForm] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
    setSelectedEmployees([]); // Reset employee selection on form change
  };

  const handleEmployeeSelection = (selectedOptions) => {
    setSelectedEmployees(selectedOptions || []);
  };

  const handleGenerate = () => {
    const newTableData = selectedEmployees.map((employee) => ({
      formtype: selectedForm,
      financialYear: "2023-2024", // You can update this value based on your logic
      createdBy: adminName,
      createdFor: employee.label,
      createdOn: new Date().toISOString().split("T")[0], // Current date
    }));

    setTableData([...tableData, ...newTableData]);
    setShowTable(true);
  };

  const handleCancel = () => {
    setSelectedForm("");
    setSelectedEmployees([]);
    setShowTable(false);
  };

  const selectAllOption = { label: "Select All", value: "*" };

  const isSelectAllSelected = () =>
    selectedEmployees.length === employees.length;

  const handleSelectChange = (selected) => {
    if (selected.some(({ value }) => value === selectAllOption.value)) {
      if (isSelectAllSelected()) {
        setSelectedEmployees([]);
      } else {
        setSelectedEmployees(employees);
      }
    } else {
      setSelectedEmployees(selected);
    }
  };

  return (
    <>
      <div className="main pt-2 h-auto pb-4">
        <div
          id="submain1"
          className="flex mx-4 flex-row justify-between items-center"
        >
          <div>
            <span className="text-[#E65F2B] text-xl font-bold mb-4">
              Payroll / Payroll Forms
            </span>
          </div>
        </div>

        <div className="pt-10 mx-3">
          <span className="pl-10 text-lg">Forms</span>
          <hr className="bg-[#0098f1] h-[2px] border-none my-3" />

          {/* <div className="flex justify-center items-center h-auto pt-10">
            <label className="block text-lg font-medium mb-2">Tax Form:</label>
            <select
              className="lg:px-20 py-4 ml-2 bg-transparent border-2 border-[#0098f1] outline-none"
              value={selectedForm}
              onChange={handleFormChange}
            >
              <option value="">Select a form</option>
              <option value="Form 16">Form 16</option>
              <option value="Form 16A">Form 16A</option>
              <option value="Form 10E">Form 10E</option>
              <option value="Form 12B">Form 12B</option>
              <option value="Form 26AS">Form 26AS</option>
            </select>
          </div> */}
          <div className="flex text-sm lg:text-lg flex-col lg:flex-row justify-center items-center h-auto pt-10">
            <label className="block text-lg font-medium mb-2 lg:mb-0 lg:mr-4">
              Tax Form:
            </label>
            <select
              className="w-auto  lg:w-auto lg:px-20 py-4 bg-transparent border-2 border-[#0098f1] outline-none"
              value={selectedForm}
              onChange={handleFormChange}
            >
              <option value="">Select a form</option>
              <option value="Form 16">Form 16</option>
              <option value="Form 16A">Form 16A</option>
              <option value="Form 10E">Form 10E</option>
              <option value="Form 12B">Form 12B</option>
              <option value="Form 26AS">Form 26AS</option>
            </select>
          </div>

          {selectedForm && (
            <div className="flex flex-col items-center ">
              <label className="block text-lg font-medium mb-2">
                Select Employees:
              </label>
              <div className="w-full max-w-md">
                <Select
                  options={[selectAllOption, ...employees]}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  value={selectedEmployees}
                  onChange={handleSelectChange}
                  placeholder="Select employees..."
                />
              </div>
              <div className="flex mt-4 space-x-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {showTable && (
          <>
            <div className="pt-4">
              <span className="pl-10  text-lg  ">Downloads</span>
              <hr className="bg-[#0098f1] w-auto mx-3 h-[2px] border-none my-3 " />
            </div>

            <div
              id="table"
              className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-blue-600 pt-4 mx-4"
            >
              <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
                <thead>
                  <tr>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Form Type
                    </th>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Financial Year
                    </th>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Created By
                    </th>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Created For
                    </th>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Created On
                    </th>
                    <th className="px-4 bg-[#0098f1] border-r border-white text-white py-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className="text-[#0098f1] border-b border-[#0098f1]"
                    >
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        {item.formtype}
                      </td>
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        {item.financialYear}
                      </td>
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        {item.createdBy}
                      </td>
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        {item.createdFor}
                      </td>
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        {item.createdOn}
                      </td>
                      <td className="px-4 py-2 text-center border-r border-[#0098f1]">
                        <FaEdit className="inline-block mr-2 cursor-pointer" />
                        <FaTrash className="inline-block cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PayrollForms;
