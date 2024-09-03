/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
import { FiPlusCircle, FiEdit, FiTrash2, FiUpload } from "react-icons/fi";
import { LuImport } from "react-icons/lu";
import { API_BASE_URL } from "../../../../Config/api";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImCross } from "react-icons/im";
function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    employeeId: "",
    joinDate: "",
    panNumber: "",
    aadharCardNumber: "",
    dob: "",
    personalEmail: "",
    designation: "",
    bloodGroup: "",
  });
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const jwt = localStorage.getItem("hrJwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
      return;
    }
    fetchEmployees();
  }, [jwt]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/employee/getAllEmployee`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setErrorMessage("Error fetching employees");
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generatePassword = (length = 12) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  const handleAddEmployee = async () => {
    try {
      const password = generatePassword();
      const response = await axios.post(`${API_BASE_URL}/employee/register`, {
        ...newEmployee,
        password,
      });
      setEmployees((prev) => [...prev, response.data]);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
      fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
      setErrorMessage("Error adding employee");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleEditEmployee = (employee) => {
    setNewEmployee({
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      role: employee.role,
      employeeId: employee.employeeId,
      joinDate: employee.joinDate,
      aadharCardNumber: employee.aadharCardNumber,
      panNumber: employee.panNumber,
      dob: employee.dob,
      personalEmail: employee.personalEmail,
      designation: employee.designation,
      bloodGroup: employee.bloodGroup,
    });
    setEditEmployeeId(employee.employeeId);
    setShowModal(true);
  };

  const handleUpdateEmployee = async () => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/employee/update/${editEmployeeId}`,
        newEmployee
      );
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employeeId === editEmployeeId ? response.data : emp
        )
      );
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
      closeModal();
    } catch (error) {
      console.error("Error updating employee:", error);
      setErrorMessage("Error updating employee");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleDeleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`${API_BASE_URL}/employee/delete/${employeeId}`);
      setEmployees((prev) =>
        prev.filter((employee) => employee.employeeId !== employeeId)
      );
      setShowDeleteSuccessMessage(true);
      setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error deleting employee:", error);
      setErrorMessage("Error deleting employee");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setNewEmployee({
      firstName: "",
      lastName: "",
      personalEmail: "",
      email: "",
      phoneNumber: "",
      role: "",
      employeeId: "",
      joinDate: "",
      panNumber: "",
      bloodGroup: "",
      aadharCardNumber: "",
      designation: "",
      dob: "",
    });
    setEditEmployeeId(null);
  };

  const handleCheckboxChange = (id) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = !headerChecked;
    setHeaderChecked(newCheckedState);

    const newIsChecked = {};
    employees.forEach((employee) => {
      newIsChecked[employee.id] = newCheckedState;
    });
    setIsChecked(newIsChecked);
  };

  const excelDateToJSDate = (serial) => {
    const excelEpoch = new Date(Date.UTC(1900, 0, 0)); // Excel epoch date
    const jsDate = new Date(excelEpoch.getTime() + (serial - 1) * 86400 * 1000); // Convert days to ms
    // Handle special case where Excel considers 1900 a leap year
    if (serial < 60) {
      jsDate.setDate(jsDate.getDate() - 1); // Adjust for leap year bug
    }
    return jsDate.toISOString().split("T")[0]; // Return date in YYYY-MM-DD format
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const arrayBuffer = event.target.result;
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        const existingEmployeeIds = new Set(
          employees.map((emp) => emp.employeeId)
        );
        const newEmployees = [];

        // Format the data as needed and generate passwords
        const formattedData = data.map((item) => {
          const password = generatePassword();
          return {
            employee: {
              firstName: item["First Name"],
              lastName: item["Last Name"],
              email: item["Official Email ID"],
              phoneNumber: item["Contact No"],
              role: item["Role"],
              employeeId: item["Emp ID"],
              joinDate: excelDateToJSDate(item["DOJ"]),
              aadharCardNumber: item["Aadhar Card Number"],
              personalEmail: item["Personal Email ID"],
              bloodGroup: item["Blood Group"],
              dob: excelDateToJSDate(item["DOB"]),
              panNumber: item["PAN Number"],
              designation: item["Designation"],
            },
            password: password, // Include the generated password
          };
        });

        const employeesToAdd = formattedData.filter(
          (employee) => !existingEmployeeIds.has(employee.employeeId)
        );

        if (employeesToAdd.length === 0) {
          setErrorMessage("No new employees to add");
          setTimeout(() => setErrorMessage(""), 3000);
          return;
        }

        // Post data to backend
        await Promise.all(
          formattedData.map(async ({ employee, password }) => {
            try {
              const response = await axios.post(
                `${API_BASE_URL}/employee/register`,
                {
                  ...employee,
                  password, // Send password along with employee data
                }
              );
              console.log("Response for employee:", response.data);
              newEmployees.push(response.data);
            } catch (error) {
              console.error(
                "Error posting employee data:",
                error.response ? error.response.data : error.message
              );
              throw error; // Ensure error handling is applied in case of failure
            }
          })
        );

        // Update local state after successful upload
        // setEmployees((prev) => [...prev, ...formattedData.map(({ employee }) => employee)]);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        fetchEmployees();
      } catch (error) {
        console.error("Error processing file:", error);
        setErrorMessage("Error processing file");
        setTimeout(() => setErrorMessage(""), 3000);
      } finally {
        setIsPopupOpen(false); // Close the popup after processing
      }
    };

    reader.readAsArrayBuffer(file); // Use readAsArrayBuffer for binary files
  };
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "employees.xlsx");
  };

  return (
    <>
      <div id="main" className=" p-4 min-h-screen  mt-4 ">
        <div className=" mb-4">
          <p className="text-[#0098f1] text-sm lg:text-lg font-bold mb-4">
            Hr Management / Employee / All Employees
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-end mb-4 space-y-2 lg:space-y-0 lg:space-x-2">
          <div
            id="addemployee"
            className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end text-center items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
              onClick={() => setShowModal(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />
              Add Employee
            </button>
          </div>
          <div
            id="importexcel"
            className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
              onClick={() => setIsPopupOpen(true)}
            >
              <LuImport className="text-2xl font-bold mr-2 bg-[#0098f1]" />
              Import Employee
            </button>
          </div>
          <div
            id="downloadData"
            className="w-full lg:w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-full lg:w-[186px] h-[48px] text-white"
              onClick={handleDownload}
            >
              <FiUpload className="text-2xl font-bold mr-2 bg-[#0098f1]" />
              Download Data
            </button>
          </div>
        </div>

        <div
          id="table"
          className="  overflow-x-scroll overflow-y-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 mx-4"
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
              <thead className="bg-[#0098f1] text-white ">
                <tr>
                  <th className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={headerChecked ? checkbox : uncheckbox}
                      alt="Header Checkbox"
                      onClick={handleHeaderCheckboxChange}
                      className="bg-transparent"
                    />
                  </th>
                  <th className="border p-2">SL.NO</th>
                  <th className="border p-2">Profile</th>
                  <th className="border p-2"> ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">DOJ</th>
                  <th className="border p-2">Contact No</th>
                  <th className="border p-2">Blood Group</th>
                  <th className="border p-2">Personal Email ID</th>
                  <th className="border p-2">Official Mail ID </th>
                  <th className="border p-2">DOB</th>
                  <th className="border p-2">Designation</th>
                  <th className="border p-2">Role</th>
                  <th className="border p-2">PAN Number</th>
                  <th className="border p-2">Aadhar Card Number</th>
                  <th
                    className="border 
                  p-2"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.employeeId}>
                    <td className="py-2 px-4 border text-center bg-transparent">
                      <img
                        src={
                          isChecked[employee.employeeId] ? checkbox : uncheckbox
                        }
                        alt="Checkbox"
                        onClick={() =>
                          handleCheckboxChange(employee.employeeId)
                        }
                        className="bg-transparent"
                      />
                    </td>
                    <td className="border p-2">{index + 1}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <img
                        src={employee.profileImage}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="border p-2">{employee.employeeId}</td>
                    <td className="border p-2">
                      {employee.firstName} {employee.lastName}
                    </td>
                    <td className="border p-2">{employee.joinDate}</td>
                    <td className="border p-2">{employee.phoneNumber}</td>
                    <td className="border p-2">{employee.bloodGroup}</td>
                    <td className="border p-2">{employee.personalEmail}</td>
                    <td className="border p-2">{employee.email}</td>
                    <td className="border p-2">{employee.dob}</td>
                    <td className="border p-2">{employee.designation}</td>
                    <td className="border p-2">{employee.role}</td>
                    <td className="border p-2">{employee.panNumber}</td>
                    <td className="border p-2">{employee.aadharCardNumber}</td>
                    <td className="border p-2 py-6 flex">
                      <FiEdit
                        className="text-blue-600 cursor-pointer mr-2"
                        onClick={() => handleEditEmployee(employee)}
                      />
                      <FiTrash2
                        className="text-red-600 cursor-pointer"
                        onClick={() =>
                          handleDeleteEmployee(employee.employeeId)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* Add/Edit Employee Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 h-[400px] overflow-y-scroll rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {editEmployeeId ? "Edit Employee" : "Add Employee"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={newEmployee.employeeId}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={newEmployee.firstName}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={newEmployee.lastName}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Joining Date</label>
                <input
                  type="date"
                  name="joinDate"
                  value={newEmployee.joinDate}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={newEmployee.bloodGroup}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Personal Email</label>
                <input
                  type="email"
                  name="personalEmail"
                  value={newEmployee.personalEmail}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Official Email</label>
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newEmployee.phoneNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={newEmployee.dob}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={newEmployee.designation}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">PAN Number</label>
                <input
                  type="text"
                  name="panNumber"
                  value={newEmployee.panNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Aadhar Card Number
                </label>
                <input
                  type="text"
                  name="aadharCardNumber"
                  value={newEmployee.aadharCardNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={
                    editEmployeeId ? handleUpdateEmployee : handleAddEmployee
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {editEmployeeId ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Import Employees Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Import Employees</h2>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="mb-4"
            />
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Success Messages */}
      {/* {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Employee added/updated successfully!
        </div>
      )} */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#0098f1] p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            Employee added/updated successfully!
          </div>
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-600 p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            Employee Removed successfully!
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-red-600 p-8 rounded-lg text-center text-white">
            <h2 className="text-xl mb-4">
              <ImCross className="inline-block text-6xl" />
            </h2>
            {errorMessage}
          </div>
        </div>
        // <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
        //   {errorMessage}
        // </div>
      )}
    </>
  );
}

export default AllEmployees;
