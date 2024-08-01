import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';
const initialUserdata = [
  {
    "id": 1,
    "teamname": "Sales Team",
    "name": "Susie Wills",
    "position": "Team Lead",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1001,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 2,
    "teamname": "Marketing Team",
    "name": "John Smith",
    "position": "Marketing Manager",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1002,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 3,
    "teamname": "Development Team",
    "name": "Emily Johnson",
    "position": "Senior Developer",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1003,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 4,
    "teamname": "HR Team",
    "name": "Michael Brown",
    "position": "HR Specialist",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1004,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 5,
    "teamname": "Finance Team",
    "name": "Sophia Davis",
    "position": "Finance Analyst",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1005,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 6,
    "teamname": "Sales Team",
    "name": "Tom Wilson",
    "position": "Sales Representative",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1006,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 7,
    "teamname": "Marketing Team",
    "name": "Olivia Martinez",
    "position": "Content Creator",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1007,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 8,
    "teamname": "Development Team",
    "name": "David Lee",
    "position": "UX Designer",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1008,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 9,
    "teamname": "HR Team",
    "name": "Emma Taylor",
    "position": "Recruiter",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1009,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 10,
    "teamname": "Finance Team",
    "name": "Lucas Anderson",
    "position": "Accountant",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1010,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 11,
    "teamname": "Sales Team",
    "name": "Isabella Walker",
    "position": "Sales Associate",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1011,
    //////////////////////employeeid: uuidv4()
  },
  {
    "id": 12,
    "teamname": "Marketing Team",
    "name": "Aiden Young",
    "position": "SEO Specialist",
    "img": "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
    "employeeId": 1012,
    //////////////////////employeeid: uuidv4()
  }
];
const EmployeeCard = ({ teamname, name, position, img, employeeId, onEdit, onDelete }) => (
  <div className="bg-white text-center p-5 rounded-2xl shadow-md flex flex-col items-center relative">
    <div className="absolute top-2 left-2 bg-[#FCEFE9] text-white text-xs font-bold px-2 py-1 rounded">
      Id: {employeeId}
    </div>
    <div className="absolute top-2 right-2 flex space-x-2">
      <MdEdit
        className="text-[#E65F2B] text-2xl cursor-pointer"
        onClick={() => onEdit(employeeId)}
      />
      <TiDelete
        className="text-[#E65F2B] text-2xl cursor-pointer"
        onClick={() => onDelete(employeeId)}
      />
    </div>
    <h1 className="text-[#0098F1] font-bold text-lg mb-2 mt-5">{teamname}</h1>
    <img
      src={img}
      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#E65F2B] shadow-md mx-auto"
      alt="Employee avatar"
    />
    <div className="mt-2">
      <h1 className="text-lg text-[#E65F2B]">{name}</h1>
      <h1 className="text-lg text-[#E65F2B]">{position}</h1>
    </div>
  </div>
);

const AllEmployees = () => {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredData, setFilteredData] = useState(initialUserdata);
  const [employees, setEmployees] = useState(initialUserdata);
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    teamname: "",
    name: "",
    position: "",
    img: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleSearch = () => {
    const lowerCaseSearchId = searchId.toLowerCase();
    const lowerCaseSearchName = searchName.toLowerCase();

    if (!lowerCaseSearchId && !lowerCaseSearchName) {
      setFilteredData(employees);
    } else {
      const filtered = employees.filter((employee) => {
        const idMatch = lowerCaseSearchId
          ? employee.employeeId.toString().includes(lowerCaseSearchId)
          : true;
        const nameMatch = lowerCaseSearchName
          ? employee.name.toLowerCase().includes(lowerCaseSearchName)
          : true;
        return idMatch && nameMatch;
      });

      setFilteredData(filtered);
    }
  };

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setFilteredData(employees);
    }
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEmployee((prev) => ({
          ...prev,
          img: reader.result
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openAddModal = () => {
    setShowModal(true);
    setEditMode(false);
    setNewEmployee({
      teamname: "",
      name: "",
      position: "",
      img: ""
    });
    setImagePreview("");
  };

  const openEditModal = (employeeId) => {
    const employeeToEdit = employees.find((employee) => employee.employeeId === employeeId);
    setNewEmployee(employeeToEdit);
    setEditMode(true);
    setEditEmployeeId(employeeId);
    setImagePreview(employeeToEdit.img);
    setShowModal(true);
  };

  const openDeleteModal = (employeeId) => {
    setShowDeleteModal(true);
    setDeleteEmployeeId(employeeId);
  };

  const handleSaveEmployee = () => {
    if (editMode) {
      const updatedEmployees = employees.map((employee) =>
        employee.employeeId === editEmployeeId ? { ...employee, ...newEmployee } : employee
      );
      setEmployees(updatedEmployees);
      setFilteredData(updatedEmployees);
    } else {
      const newEmployeeId = employees.length > 0 ? employees[employees.length - 1].employeeId + 1 : 1;
      const newEmployeeWithId = { ...newEmployee, employeeId: newEmployeeId };
      const updatedEmployees = [...employees, newEmployeeWithId];
      setEmployees(updatedEmployees);
      setFilteredData(updatedEmployees);
    }

    setShowModal(false);
  };

  const handleDeleteEmployee = () => {
    const updatedEmployees = employees.filter((employee) => employee.employeeId !== deleteEmployeeId);
    setEmployees(updatedEmployees);
    setFilteredData(updatedEmployees);
    setShowDeleteModal(false);
  };



  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setEditEmployeeId(null);
    setNewEmployee({
      teamname: "",
      name: "",
      position: "",
      img: ""
    });
    setImagePreview("");
  };

  return (

    <div id="main" className={`p-4  h-[200vh]  ${showModal || showDeleteModal ? "blurred" : ""}`}>
      <div className="ml-3 mb-4 flex flex-col md:flex-row justify-between">

        <div>
            <span className="flex">Employee</span>
            <span className="text-[16px] font-medium">
            Dashboard / Employee
            </span>
          </div>

        <div className="mt-8">
          <button
            type="button"
            className="flex items-center bg-[#E65F2B] text-white h-[60px] w-full md:w-[230px] rounded-lg shadow hover:bg-[#f5d0c7] justify-center text-xl"
            onClick={openAddModal}
          >
            <FaPlusCircle className="text-white text-xl" />

            <span className="ml-2">Add Employee</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 ">
          <input
            type="search"
            placeholder="Employee ID"
            value={searchId}
            onChange={(e) => handleInputChange(e, setSearchId)}
            className="bg-transparent border border-[#E65F2B] p-2 rounded text-lg font-semibold placeholder-[#E65F2B] h-[45px] w-full"
          />
          <input
            type="search"
            placeholder="Employee Name"
            value={searchName}
            onChange={(e) => handleInputChange(e, setSearchName)}
            className="bg-transparent border border-[#E65F2B] p-2 rounded text-lg font-semibold placeholder-[#E65F2B] h-[45px] w-full"
          />
        </div>
        <button
          type="button"
          className="bg-[#E65F2B] text-white h-[45px] w-[150px] px-4 rounded-lg text-lg font-semibold shadow hover:bg-[#e46342] flex items-center justify-center"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {filteredData.map(employee => (
          <EmployeeCard
            key={employee.employeeId}
            teamname={employee.teamname}
            name={employee.name}
            position={employee.position}
            img={employee.img}
            employeeId={employee.employeeId}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
          />
        ))}
      </div>

      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
            <h2 className="text-2xl font-bold mb-4 text-[#E65F2B]">{editMode ? "Edit Employee" : "Add New Employee"}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 flex justify-between">Team Name
                  {editMode && <CiEdit className="text-[#E65F2B] text-xl" />}
                </label>
                <input
                  type="text"
                  name="teamname"
                  value={newEmployee.teamname}
                  onChange={handleModalInputChange}
                  className="bg-transparent border border-[#E65F2B] p-2 rounded w-full font-semibold text-lg"
                  required
                />
              </div>
              <div className="mb-4">

                <label className="block text-gray-700 flex justify-between font-semibold text-lg">Name
                  {editMode && <CiEdit className="text-[#E65F2B] text-lg font-semibold" />}
                </label>
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleModalInputChange}
                  className="bg-transparent border border-[#E65F2B] p-2 rounded w-full font-semibold text-lg"
                  required
                />
              </div>
              <div className="mb-4">

                <label className="block text-gray-700 flex justify-between font-semibold text-lg">Position
                  {editMode && <CiEdit className="text-[#E65F2B]  font-semibold text-lg" />}
                </label>
                <input
                  type="text"
                  name="position"
                  value={newEmployee.position}
                  onChange={handleModalInputChange}
                  className="bg-transparent border border-[#E65F2B] p-2 rounded w-full font-semibold text-lg"
                  required
                />
              </div>
              <div className="mb-4">

                <label className="block text-gray-700 flex justify-between font-semibold text-lg">Image
                  {editMode && <CiEdit className="text-[#E65F2B] text-lg font-semibold" />}
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-[#E65F2B] rounded mt-2 text-white file:bg-orange-500 file:border-[#E65F2B] file:text-white file:rounded-lg font-semibold text-lg"

                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-2 w-24 h-24 object-cover rounded-full border-4 border-[#E65F2B] mx-auto"
                  />
                )}
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-[#E65F2B] text-white font-semibold text-lg  h-[40px] w-[120px] rounded mr-2"
                  onClick={handleSaveEmployee}
                >
                  {editMode ? "Update" : "Add"}
                </button>
                <button
                  className="bg-transparent font-semibold text-lg border border-[#E65F2B] text-[#E65F2B] h-[40px] w-[120px] rounded "
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-[250px] flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl text-[#E65F2B] font-medium mb-4">Delete Employee</h2>
            <p className="mb-4 text-[#E65F2B] text-lg font-semibold">Are you sure want to delete?</p>
            <div className="flex justify-center space-x-2 mt-5">

              <button
                className="bg-[#E65F2B] text-lg font-semibold text-white  h-[30px] w-[100px] rounded"
                onClick={handleDeleteEmployee}
              >
                Delete
              </button>
              <button
                className="bg-transparent text-lg font-semibold border border-[#E65F2B] text-[#E65F2B] h-[30px] w-[100px] rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default AllEmployees;
