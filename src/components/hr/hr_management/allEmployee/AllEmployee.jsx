/* eslint-disable no-unused-vars */
/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import uncheckbox from "../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../assets/hr/employee/checkbox/checkbox.png";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { API_BASE_URL } from "../../../Config/api";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    employeeId: "",
    joinDate: "",
  });
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/employee/getAllEmployee`);
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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
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
    });
    setEditEmployeeId(employee.employeeId);
    setShowModal(true);
  };


  const handleUpdateEmployee = async () => {
    try {
      const response = await axios.put(`${API_BASE_URL}/employee/update/${editEmployeeId}`, newEmployee);
      setEmployees((prev) =>
        prev.map((emp) => (emp.employeeId === editEmployeeId ? response.data : emp))
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
      await axios.delete(`{API_BASE_URL}/employee/delete/${employeeId}`);
      setEmployees((prev) => prev.filter((employee) => employee.employeeId !== employeeId));
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
      email: "",
      phoneNumber: "",
      role: "",
      employeeId: "",
      joinDate: "",
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

  return (
    <>
      <div id="main" className="mr-4 ">
        <div className="ml-5 mb-4">
          <p className="text-[#0098F1] font-bold text-xl">
            Employees/All Employees
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <div
            id="addemployee"
            className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[186px] h-[48px] text-white"
              onClick={() => setShowModal(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />{" "}
              Add Employee
            </button>
          </div>
        </div>

        <div id="table" className=" overflow-x-scroll">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
              <thead className="bg-[#0098f1] ">
                <tr>
                  <th className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={headerChecked ? checkbox : uncheckbox}
                      alt="Header Checkbox"
                      onClick={handleHeaderCheckboxChange}
                      className="bg-transparent"
                    />
                  </th>
                  <th className="py-4 px-8 border-b bg-transparent"></th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email-id</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Employee ID</th>
                  <th className="border p-2">Joining Date</th>
                  <th className="border p-2">Role</th>
                  <th className="border p-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="py-2 px-4 border-b text-center bg-transparent">
                      <img
                        src={isChecked[employee.id] ? checkbox : uncheckbox}
                        alt="Checkbox"
                        onClick={() => handleCheckboxChange(employee.id)}
                      />
                    </td>
                    <td className="py-2 px-4 border-b bg-transparent text-center">
                      <img
                        // src={Girl}
                        alt="DP"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="border p-2">{`${employee.firstName} ${employee.lastName}`}</td>
                    <td className="border p-2">{employee.email}</td>
                    <td className="border p-2">{employee.phoneNumber}</td>
                    <td className="border p-2">{employee.employeeId}</td>
                    <td className="border p-2">{employee.joinDate}</td>
                    <td className="border p-2">{employee.role}</td>
                    <td className="border p-2 flex justify-around">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => {
                          setEditEmployeeId(employee.employeeId);
                          setNewEmployee(employee);
                          setShowModal(true);
                        }}
                      >
                        <FiEdit />
                      </button>
                      <button
                        className="text-blue-500 hover:text-red-700"
                        onClick={() => handleDeleteEmployee(employee.employeeId)}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[600px] shadow-lg">
            <h2 className="text-2xl mb-4">
              {editEmployeeId !== null ? "Edit Employee" : "Add New Employee"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={newEmployee.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={newEmployee.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={newEmployee.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Role</label>
                <input
                  type="text"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={newEmployee.employeeId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Joining Date</label>
                <input
                  type="date"
                  name="joinDate"
                  value={newEmployee.joinDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="bg-gray-300 px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={editEmployeeId !== null ? handleUpdateEmployee : handleAddEmployee}
              >
                {editEmployeeId !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-2 bg-green-500 text-white rounded">
          Employee added successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-2 bg-red-500 text-white rounded">
          Employee deleted successfully!
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-2 bg-red-500 text-white rounded">
          {errorMessage}
        </div>
      )}

    </>
  );
}

export default AllEmployees;





*/


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
// import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
// import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
// import { API_BASE_URL } from "../../../../Config/api";
// // import { API_BASE_URL } from "../../../Config/api";

import React, { useState, useEffect } from "react";
import axios from "axios";
import uncheckbox from "../../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../../assets/hr/employee/checkbox/checkbox.png";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import defaultProfileImg from "../../../../assets/hr/profile/man.png"; // Ensure to add a default profile image in your assets

function AllEmployee() {
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
    ID: "",
    Name: "",
    DOJ: "",
    ContactNo: "",
    BloodGroup: "",
    PersonalMailID: "",
    OfficialMailID: "",
    DOB: "",
    Designation: "",
    Role: "",
    PANNumber: "",
    AadharCardNumber: "",
    ProfilePhoto: "https://cdn-icons-png.flaticon.com/128/432/432693.png",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenAddEmployeeModal = () => {
    setIsAddEmployeeModalOpen(true);
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8085/employee/getAllEmployee"
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

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8085/employee/register",
        newEmployee
      );
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

  const handleSaveEdit = (id) => {
    const updatedUserData = userData.map((user) =>
      user.id === id ? editingUserData : user
    );
    setUserData(updatedUserData);
    setEditingUserId(null);
  };

  const handleUpdateEmployee = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8085/employee/update/${editEmployeeId}`,
        newEmployee
      );
      setEmployees((prev) =>
        prev.map((emp) => (emp.ID === editEmployeeId ? response.data : emp))
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
      await axios.delete(`http://localhost:8085/employee/delete/${employeeId}`);
      setEmployees((prev) =>
        prev.filter((employee) => employee.ID !== employeeId)
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
      ID: "",
      Name: "",
      DOJ: "",
      ContactNo: "",
      BloodGroup: "",
      PersonalMailID: "",
      OfficialMailID: "",
      DOB: "",
      Designation: "",
      Role: "",
      PANNumber: "",
      AadharCardNumber: "",
      ProfilePhoto: "https://via.placeholder.com/50", // Reset to default
    });
    setIsAddEmployeeModalOpen(false);
  };

  return (
    <div className=" flex flex-col p-5">
      <div className="mb-4">
        <h1 className="text-[#0098F1] text-xl p-5">
          HR Management / All Employees
        </h1>
      </div>

      <div className="flex justify-end gap-x-5 items-center mb-10 ">
        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center h-auto w-auto p-4 bg-white text-[#0098F1] rounded-lg"
        >
          <div style={{ transform: "rotate(270deg)" }} className="mr-3">
            <LuImport size={20} />
          </div>
          <span className="text-xl">Import Employee</span>
        </button>
        <button
          onClick={handleOpenAddEmployeeModal}
          className="flex items-center px-6 justify-center h-auto w-auto p-4 bg-white text-[#0098F1] rounded-lg"
        >
          <FiPlusCircle className="text-2xl font-bold mr-2 text-[#0098f1]" />
          <span className="text-xl">Add Employee</span>
        </button>
      </div>

      <div
        id="table"
        className="mt-5 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-10 mx-4"
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead className="bg-[#0098f1] ">
              <tr className="bg-[#0098F1] text-white">
                <th className="py-2 px-4 border-b bg-transparent">
                  <img
                    src={headerChecked ? checkbox : uncheckbox}
                    alt="Header Checkbox"
                    onClick={handleHeaderCheckboxChange}
                    className="bg-transparent"
                  />
                </th>
                <th className="p-3 text-center py-4 px-6 border-b bg-transparent"></th>
                <th className="p-3 px-6  text-center border ">ID</th>
                <th className="p-3 px-6 text-center border ">Name</th>
                <th className="p-3 px-6 text-center border ">DOJ</th>
                <th className="p-3 px-6 text-center border ">Contact No</th>
                <th className="p-3 px-6 text-center border ">Blood Group</th>
                <th className="p-3 px-6 text-center border ">
                  Personal Mail ID
                </th>
                <th className="p-3 px-6 text-center border ">
                  Official Mail ID
                </th>
                <th className="p-3 px-6 text-center border ">DOB</th>
                <th className="p-3 px-6 text-center border ">Designation</th>
                <th className="p-3 px-6 text-center border ">Role</th>
                <th className="p-3 px-6 text-center border ">PAN Number</th>
                <th className="p-3 px-6 text-center border ">
                  Aadhar Card Number
                </th>
                <th className="p-3 px-6 text-center border ">Profile</th>
                <th className="p-3 px-6 text-center border ">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.ID} className="bg-[#0098F1] text-white">
                  <td className="py-2 px-4 border-b text-center bg-transparent">
                    <img
                      src={isChecked[employee.ID] ? checkbox : uncheckbox}
                      alt="Checkbox"
                      onClick={() => handleCheckboxChange(employee.ID)}
                    />
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={defaultProfileImg}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.ID}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.Name}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.DOJ}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.ContactNo}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.BloodGroup}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.PersonalMailID}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.OfficialMailID}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.DOB}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.Designation}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.Role}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.PANNumber}
                  </td>
                  <td className="border p-3 px-6  text-center">
                    {employee.AadharCardNumber}
                  </td>
                  <td className="border p-3 px-6  text-center flex justify-around">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditEmployee(employee)}
                    >
                      Save
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteEmployee(employee.ID)}
                    >
                      Cancel
                    </button>
                  </>
                  ) : (
                  <>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-[#E65F2B] mr-2"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600"
                    >
                      <FiTrash size={20} />
                    </button>
                  </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

      {
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-[60vw]">
          <h2 className="text-2xl text-center text-[#0098F1] font-bold mb-4">
            Import Employees
          </h2>

          <div className="flex flex-col items-center mt-10 mb-5">
            <div>
              <input
                type="text"
                name="ID"
                value={newEmployee.ID}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="Name"
                value={newEmployee.Name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">DOJ</label>
              <input
                type="date"
                name="DOJ"
                value={newEmployee.DOJ}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Contact No</label>
              <input
                type="text"
                name="ContactNo"
                value={newEmployee.ContactNo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Blood Group</label>
              <input
                type="text"
                name="BloodGroup"
                value={newEmployee.BloodGroup}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Personal Mail ID</label>
              <input
                type="email"
                name="PersonalMailID"
                value={newEmployee.PersonalMailID}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Official Mail ID</label>
              <input
                type="email"
                name="OfficialMailID"
                value={newEmployee.OfficialMailID}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">DOB</label>
              <input
                type="date"
                name="DOB"
                value={newEmployee.DOB}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Designation</label>
              <input
                type="text"
                name="Designation"
                value={newEmployee.Designation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Role</label>
              <input
                type="text"
                name="Role"
                value={newEmployee.Role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">PAN Number</label>
              <input
                type="text"
                name="PANNumber"
                value={newEmployee.PANNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Aadhar Card Number</label>
              <input
                type="text"
                name="AadharCardNumber"
                value={newEmployee.AadharCardNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={
                editEmployeeId !== null
                  ? handleUpdateEmployee
                  : handleAddEmployee
              }
            >
              {editEmployeeId !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    )
  }
    </div >
  );
};

export default AllEmployees;
