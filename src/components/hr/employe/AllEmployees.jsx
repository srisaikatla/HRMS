// export default AllEmployees;
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import uncheckbox from "../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../assets/hr/employee/checkbox/checkbox.png";
// import Girl from "../../../assets/hr/profile/man.jpg"

const initialEmployeeData = [
  {
    id: 1,
    // dp: Girl,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
  },
  {
    id: 2,
    // dp: Girl,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
  },
  // Add more sample data as needed
];

function AllEmployees() {
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role: "",
    employeeId: "",
    joiningDate: "",
    // dp: Girl, // Default placeholder image
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  useEffect(() => {
    const storedEmployeeData = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployeeData) {
      setEmployees(storedEmployeeData);
    } else {
      setEmployees(initialEmployeeData);
    }
  }, []);

  const saveEmployeeDataToLocalStorage = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEmployeeId(null);
    setNewEmployee({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      role: "",
      employeeId: "",
      joiningDate: "",
      // dp: Girl,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddEmployee = () => {
    if (editEmployeeId !== null) {
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === editEmployeeId) {
          return {
            ...employee,
            name: newEmployee.firstname + " " + newEmployee.lastname,
            email: newEmployee.email,
            phone: newEmployee.phone,
            role: newEmployee.role,
            employeeId: newEmployee.employeeId,
            joiningDate: newEmployee.joiningDate,
            dp: newEmployee.dp,
          };
        }
        return employee;
      });
      setEmployees(updatedEmployees);
      saveEmployeeDataToLocalStorage(updatedEmployees);
      setShowSuccessMessage(true);
    } else {
      const newEmployeeObject = {
        id:
          employees.length > 0
            ? Math.max(...employees.map((employee) => employee.id)) + 1
            : 1,
        name: newEmployee.firstname + " " + newEmployee.lastname,
        email: newEmployee.email,
        phone: newEmployee.phone,
        role: newEmployee.role,
        employeeId: newEmployee.employeeId,
        joiningDate: newEmployee.joiningDate,
        dp: newEmployee.dp,
      };
      setEmployees([...employees, newEmployeeObject]);
      saveEmployeeDataToLocalStorage([...employees, newEmployeeObject]);
      setShowSuccessMessage(true);
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (employeeId) => {
    const employeeToEdit = employees.find(
      (employee) => employee.id === employeeId
    );
    setEditEmployeeId(employeeId);
    const nameParts = employeeToEdit.name.split(" ");
    setNewEmployee({
      firstname: nameParts[0],
      lastname: nameParts[1] ? nameParts[1] : "",
      email: employeeToEdit.email,
      phone: employeeToEdit.phone,
      role: employeeToEdit.role,
      employeeId: employeeToEdit.employeeId,
      joiningDate: employeeToEdit.joiningDate,
      dp: employeeToEdit.dp,
    });
    setIsModalOpen(true);
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
    saveEmployeeDataToLocalStorage(updatedEmployees);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
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
      <div id="main" className="">
        <div className="ml-5 mb-4">
          <p className="text-[#e65f2b] font-bold text-xl">
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
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />{" "}
              Add Employee
            </button>
          </div>
        </div>
        <div id="table" className="w-auto">
          <table className="min-w-full overflow-x-scroll text-nowrap ">
            <thead>
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
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Name
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Email-id
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Phone
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Employee ID
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Joining Date
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Role
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
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
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.name}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.email}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.phone}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.employeeId}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.joiningDate}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {employee.role}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    <div className="flex justify-center space-x-2">
                      <FiEdit
                        className="text-[#e65f2b] cursor-pointer"
                        onClick={() => openEditModal(employee.id)}
                      />
                      <FiTrash2
                        className="text-[#e65f2b] cursor-pointer"
                        onClick={() => handleDeleteEmployee(employee.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-2xl mb-4">
              {editEmployeeId ? "Edit Employee" : "Add Employee"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={newEmployee.firstname}
                  onChange={handleInputChange}
                  className="border border-blue-300 focus:outline-none p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={newEmployee.lastname}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newEmployee.phone}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Role</label>
                <input
                  type="text"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={newEmployee.employeeId}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={newEmployee.joiningDate}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddEmployee}
              >
                {editEmployeeId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded">
          Employee {editEmployeeId ? "updated" : "added"} successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-red-500 text-white p-4 rounded">
          Employee deleted successfully!
        </div>
      )}
    </>
  );
}

export default AllEmployees;
