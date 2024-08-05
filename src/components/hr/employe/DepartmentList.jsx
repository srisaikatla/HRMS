// import React, { useState } from "react";
// import { FiPlusCircle } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import accept from "../../../assets/hr/employee/leaves/accept.png";
// import reject from "../../../assets/hr/employee/leaves/reject.png";
// import Delete from "../../../assets/hr/employee/leaves/delete.png";
// const sampleData = [
//   {
//     id: 1,
//     dp: "https://via.placeholder.com/40",
//     name: "John Doe",
//     email: "john@example.com",
//     phone: "123-456-7890",
//     employeeId: "EMP001",
//     joiningDate: "2023-01-01",
//     role: "Developer",
//     leaveType: "Sick Leave",
//     date: "2023-05-15",
//     reason: "Fever",
//     department: "Engineering",
//     departmentHead: "Jack Johnson",
//     totalEmployees: 10,
//   },
//   {
//     id: 2,
//     dp: "https://via.placeholder.com/40",
//     name: "Jane Smith",
//     email: "jane@example.com",
//     phone: "098-765-4321",
//     employeeId: "EMP002",
//     joiningDate: "2023-02-01",
//     role: "Designer",
//     leaveType: "Casual Leave",
//     date: "2023-07-20",
//     reason: "Travel",
//     department: "Design",
//     departmentHead: "Emma Watson",
//     totalEmployees: 8,
//   },
// ];

// function DepartmentList() {
//   return (
//     <>
//       <div id="main" className="h-screen w-auto bg-transparentp-4 mr-2 ml-2">
//         <div className="ml-5">
//           <p className="text-[#e65f2b] font-bold text-xl">
//             Employees/DepartmentList
//           </p>
//         </div>

//         <div className="flex justify-end mb-4">
//           <div
//             id="addemployee"
//             className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
//           >
//             <button
//               type="button"
//               className="flex justify-center items-center w-[228px] h-[48px] text-white"
//             >
//               <MdDelete className="text-2xl font-bold mr-2" /> Add New
//               Department
//             </button>
//           </div>
//         </div>
//         <div id="table" className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead>
//               <tr>
//                 {/* <th className="py-4 px-16 border-b bg-transparent"></th> */}

//                 <th className="py-4 px-16 border-b bg-[#0098f1]  text-center">
//                   Department Name
//                 </th>
//                 <th className="py-4 px-16 border-b bg-[#0098f1]  text-center">
//                   Department Head
//                 </th>
//                 <th className="py-4 px-16 border-b bg-[#0098f1]  text-center">
//                   Total Employees
//                 </th>

//                 <th className="py-4 px-16 border-b bg-[#0098f1]  text-center">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sampleData.map((employee) => (
//                 <tr key={employee.id} className="">
//                   {/* <td className="py-2 px-4 border-b bg-transparent text-center">
//                     <img
//                       src={employee.dp}
//                       alt="DP"
//                       className="w-10 h-10 rounded-full"
//                     />
//                   </td> */}

//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.department}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.departmentHead}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.totalEmployees}
//                   </td>

//                   <td className="py-2 px-4 border-b pt-6 bg-transparent text-center flex items-center justify-center space-x-2">
//                     <button className="flex items-center">
//                       <img
//                         src={accept}
//                         alt="Accept"
//                         className="w-6 h-6 mr-1 "
//                       />
//                     </button>
//                     <button className="flex items-center">
//                       <img
//                         src={Delete}
//                         alt="Reject"
//                         className="w-6 h-6 mr-1 bg-[#FF3636]"
//                       />
//                     </button>
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

// export default DepartmentList;
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const initialData = [
  {
    id: 1,
    dp: "https://via.placeholder.com/40",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
    leaveType: "Sick Leave",
    date: "2023-05-15",
    reason: "Fever",
    department: "Engineering",
    departmentHead: "Jack Johnson",
    totalEmployees: 10,
  },
  {
    id: 2,
    dp: "https://via.placeholder.com/40",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
    leaveType: "Casual Leave",
    date: "2023-07-20",
    reason: "Travel",
    department: "Design",
    departmentHead: "Emma Watson",
    totalEmployees: 8,
  },
];

function DepartmentList() {
  const [showModal, setShowModal] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [departments, setDepartments] = useState(initialData);
  const [editId, setEditId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  const [errors, setErrors] = useState({});

  const handleAddDepartment = () => {
    setEditId(null); // Clear edit ID when adding a new department
    setDepartmentName("");
    setDepartmentHead("");
    setTotalEmployees("");
    setErrors({});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDepartmentName("");
    setDepartmentHead("");
    setTotalEmployees("");
    setErrors({});
  };

  const handleSaveDepartment = () => {
    const newErrors = {};


    if (!departmentName) newErrors.departmentName = "Department Name is required.";
    if (!departmentHead) newErrors.departmentHead = "Department Head is required.";
    if (!totalEmployees) newErrors.totalEmployees = "Total Employees is required.";


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editId !== null) {
      // Edit existing department

      setDepartments(departments.map(department =>
        department.id === editId
          ? {
              ...department,
              department: departmentName,
              departmentHead: departmentHead,
              totalEmployees: parseInt(totalEmployees, 10) || 0,
            }
          : department
      ));
    } else {
      // Add new department
      const newId = departments.length > 0 ? departments[departments.length - 1].id + 1 : 1;


      const newDepartment = {
        id: newId,
        dp: "https://via.placeholder.com/40",
        department: departmentName,
        departmentHead: departmentHead,
        totalEmployees: parseInt(totalEmployees, 10) || 0,
      };

      setDepartments([...departments, newDepartment]);
    }

    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
    handleCloseModal();
  };

  const handleEdit = (id) => {

    const departmentToEdit = departments.find(department => department.id === id);

    if (departmentToEdit) {
      setEditId(id);
      setDepartmentName(departmentToEdit.department);
      setDepartmentHead(departmentToEdit.departmentHead);
      setTotalEmployees(departmentToEdit.totalEmployees);
      setErrors({});
      setShowModal(true);
    }
  };

  const handleDelete = (id) => {

    setDepartments(departments.filter(department => department.id !== id));

    setShowDeleteSuccessMessage(true);
    setTimeout(() => setShowDeleteSuccessMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div id="main" className="h-screen p-4 bg-sky-100">
      <div className="ml-3 mb-4">
        <p className="text-[#E65F2B] font-semibold text-2xl">
          Employees/Department List
        </p>
      </div>

      <div className="flex justify-end mb-6 h-[50px] rounded-lg">
        <button
          type="button"
          className="flex items-center bg-[#0098f1] text-white px-4 py-2 rounded-lg shadow hover:bg-[#007acc]"
          onClick={handleAddDepartment}
        >
          <FaPlusCircle className="text-2xl mr-2" /> Add New Department
        </button>
      </div>

      <div id="table" className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-md">
          <thead className="sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b bg-[#0098f1] text-white text-left">
                Department Name
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] text-white text-left">
                Department Head
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] text-white text-center">
                Total Employees
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] text-white text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td className="py-2 px-4 border-b text-left">
                  {department.department}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  {department.departmentHead}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {department.totalEmployees}
                </td>
                <td className="py-2 px-4 border-b text-center flex justify-center">
                  <button
                    className="bg-[#2A8F4C] text-white px-3 py-1 rounded-lg mr-2 hover:bg-[#1d7b40]"
                    onClick={() => handleEdit(department.id)}
                  >
                    <FiEdit className="text-xl" />
                  </button>
                  <button
                    className="bg-[#FF3636] text-white px-3 py-1 rounded-lg hover:bg-[#d32f2f]"
                    onClick={() => handleDelete(department.id)}
                  >
                    <RiDeleteBin6Line className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-roboto mb-4 text-[#E65F2B]">
              {editId ? "Edit Department" : "Add Department"}
            </h2>
            <div className="mb-4">

              <label className="block mb-2 text-sm font-roboto flex justify-between" htmlFor="departmentName">

                Department Name
                {editId && <CiEdit className="text-[red] text-xl" />}
              </label>
              <input
                type="text"
                id="departmentName"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
              {errors.departmentName && (
                <p className="text-red-500 text-sm">{errors.departmentName}</p>
              )}
            </div>
            <div className="mb-4">

              <label className="block mb-2 text-sm font-roboto flex justify-between" htmlFor="departmentHead">

                Department Head
                {editId && <CiEdit className="text-[red] text-xl" />}
              </label>
              <input
                type="text"
                id="departmentHead"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={departmentHead}
                onChange={(e) => setDepartmentHead(e.target.value)}
              />
              {errors.departmentHead && (
                <p className="text-red-500 text-sm">{errors.departmentHead}</p>
              )}
            </div>
            <div className="mb-4">

              <label className="block mb-2 text-sm font-roboto flex justify-between" htmlFor="totalEmployees">

                Total Employees
                {editId && <CiEdit className="text-[red] text-xl" />}
              </label>
              <input
                type="number"
                id="totalEmployees"
                className="w-full p-2 border-[1.5px] border-[#0098f1] rounded-lg"
                value={totalEmployees}
                onChange={(e) => setTotalEmployees(e.target.value)}
              />
              {errors.totalEmployees && (
                <p className="text-red-500 text-sm">{errors.totalEmployees}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#0098f1] text-white h-[40px] w-[100px] rounded hover:bg-[#007acc] m-4"
                onClick={handleSaveDepartment}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white h-[40px] w-[100px] rounded mr-2 hover:bg-gray-600 m-4"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>

            <p>{editId ? "Department Updated Successfully" : "Department Added Successfully"}</p>

          </div>
        </div>
      )}

      {/* Delete Success Message */}
      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-500 p-8 rounded-lg text-center text-white">
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            <p>Department Deleted Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentList;
