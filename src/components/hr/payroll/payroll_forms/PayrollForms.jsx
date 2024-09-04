import React, { useState } from "react";
import Select from "react-select";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
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
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData(tableData[index]);
  };

  const handleSaveEdit = () => {
    const updatedTableData = [...tableData];
    updatedTableData[editIndex] = editData;
    setTableData(updatedTableData);
    setEditIndex(null);
    setEditData({});
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleDeleteClick = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  return (
    <>
      <div className="main p-4 mt-4 min-h-screen">
        <div
          id="submain1"
          className="flex  flex-row justify-between items-center"
        >
          <div>
            <span className="text-[#0098f1] lg:text-lg text-sm font-bold mb-4">
              Payroll / Payroll Forms
            </span>
          </div>
        </div>

        <div className="pt-10 mx-3">
          <span className="pl-10 text-lg font-semibold">Forms</span>
          <hr className="bg-[#0098f1] h-[2px] border-none my-3" />

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
                  className="bg-[#0098f1] text-white px-4 py-2 rounded"
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
              <hr className="bg-[#0098f1] w-auto mx-3 h-[2px] border-none my-3 " />
            </div>

            <div
              id="table"
              className="overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-4"
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
                        <FaEdit
                          className="inline-block text-blue-500 mr-2 cursor-pointer"
                          onClick={() => handleEditClick(index)}
                        />
                        <FaTrash
                          className="inline-block text-red-600 cursor-pointer"
                          onClick={() => handleDeleteClick(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {editIndex !== null && (
              <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white text-[#0098f1]  h-80 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] overflow-y-scroll p-6 rounded-md shadow-lg">
                  <h3 className="text-lg text-[#0098f1] font-semibold mb-4">
                    Edit Form
                  </h3>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Form Type</label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-300 focus:outline-[#0098f1]  p-2 rounded"
                      value={editData.formtype}
                      onChange={(e) =>
                        setEditData({ ...editData, formtype: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">
                      Financial Year
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-300 focus:outline-[#0098f1] p-2 rounded"
                      value={editData.financialYear}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          financialYear: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">
                      Created For
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-gray-300 focus:outline-[#0098f1]  p-2 rounded"
                      value={editData.createdFor}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          createdFor: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => setEditIndex(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-[#0098f1] text-white px-4 py-2 rounded"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {showSuccessMessage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#0098f1] p-8 rounded-lg text-center text-white">
              <h2 className="text-xl mb-4">
                <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              </h2>
              <span>Settlement Added Successfully!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PayrollForms;
