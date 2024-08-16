// import React, { useState } from "react";
// import { BsCheck2Circle } from "react-icons/bs";
// function Types() {
//   const [employeeTypes, setEmployeeTypes] = useState([
//     { type: "Full Time", status: "Active" },
//     { type: "Consultant", status: "Active" },
//     { type: "Part Time", status: "Active" },
//     { type: "Contract", status: "Inactive" },
//     { type: "Probation", status: "Active" },
//   ]);

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newEmployeeType, setNewEmployeeType] = useState("");

//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [employeeToToggleStatus, setEmployeeToToggleStatus] = useState(null);

//   const [showEditModal, setShowEditModal] = useState(false);
//   const [employeeToEdit, setEmployeeToEdit] = useState(null);
//   const [editedEmployeeType, setEditedEmployeeType] = useState("");

//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const showTemporarySuccessMessage = (message) => {
//     setSuccessMessage(message);
//     setShowSuccessMessage(true);
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 5000);
//   };

//   const handleAddEmployeeType = () => {
//     if (newEmployeeType) {
//       setEmployeeTypes((prev) => [
//         ...prev,
//         { type: newEmployeeType, status: "Active" },
//       ]);
//       setNewEmployeeType("");
//       setShowAddModal(false);
//       showTemporarySuccessMessage("Employee type added successfully!");
//     }
//   };

//   const toggleEmployeeStatus = (index) => {
//     setEmployeeToToggleStatus(index);
//     setShowConfirmModal(true);
//   };

//   const confirmToggleEmployeeStatus = () => {
//     setEmployeeTypes((prev) =>
//       prev.map((employee, index) =>
//         index === employeeToToggleStatus
//           ? {
//               ...employee,
//               status: employee.status === "Active" ? "Inactive" : "Active",
//             }
//           : employee
//       )
//     );
//     setShowConfirmModal(false);
//     const newStatus =
//       employeeTypes[employeeToToggleStatus].status === "Active"
//         ? "Inactive"
//         : "Active";
//     showTemporarySuccessMessage(
//       `Employee type status changed to ${newStatus}!`
//     );
//   };

//   const handleEditEmployeeType = (index) => {
//     setEmployeeToEdit(index);
//     setEditedEmployeeType(employeeTypes[index].type);
//     setShowEditModal(true);
//   };

//   const confirmEditEmployeeType = () => {
//     setEmployeeTypes((prev) =>
//       prev.map((employee, index) =>
//         index === employeeToEdit
//           ? { ...employee, type: editedEmployeeType }
//           : employee
//       )
//     );
//     setShowEditModal(false);
//     showTemporarySuccessMessage("Employee type updated successfully!");
//   };

//   return (
//     <div className="ml-20  p-4">
//       {showSuccessMessage && (
//         <div className="absolute inset-0 bg-gray-600 bg-opacity-50 w-auto h-full flex justify-center items-center ">
//           <div className="text-white bg-gradient-to-b from-[#E65F2B] to-[#FFC252]  w-[320px] h-[240px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg  flex flex-col justify-center items-center relative">
//             <BsCheck2Circle className="text-6xl text-white  mb-4" />
//             {successMessage}
//           </div>
//         </div>
//       )}

//       <button
//         className="mb-4 px-4 py-2 text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] rounded flex items-center"
//         onClick={() => setShowAddModal(true)}
//       >
//         <span className="mr-2">Add New</span>
//         <span className="text-xl">+</span>
//       </button>

//       {showAddModal && (
//         <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white w-auto flex-col p-4 rounded shadow-lg">
//             <div className="w-[400px] h-[200px]">
//               <h2 className="text-xl mb-2">Add Employee Type</h2>
//               <div className="pt-10">
//                 <label className="">Employee Type*</label>
//                 <input
//                   required
//                   type="text"
//                   value={newEmployeeType}
//                   onChange={(e) => setNewEmployeeType(e.target.value)}
//                   placeholder="Employee Type"
//                   className="border rounded-lg  border-[#e65f2b] outline-[#e65f2b]  mx-10 p-2 w-60 mb-4"
//                 />
//               </div>
//             </div>
//             <div className="justify-end gap-x-5 flex items-center">
//               <button
//                 className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
//                 onClick={() => setShowAddModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
//                 onClick={handleAddEmployeeType}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showConfirmModal && (
//         <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-4 rounded shadow-lg">
//             <div className="w-[600px] h-[200px]">
//               <h2 className="text-xl mb-2"> Department</h2>
//               <h2 className="text-lg pb-10 mb-2 text-wrap">
//                 Are you sure you want to change the status of{" "}
//                 {employeeTypes[employeeToToggleStatus]?.type} to{" "}
//                 {employeeTypes[employeeToToggleStatus]?.status === "Active"
//                   ? "Inactive"
//                   : "Active"}
//                 ?
//               </h2>
//             </div>

//             <div className="justify-end gap-x-5 flex items-center">
//               <button
//                 className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
//                 onClick={confirmToggleEmployeeStatus}
//               >
//                 Yes
//               </button>
//               <button
//                 className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
//                 onClick={() => setShowConfirmModal(false)}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showEditModal && (
//         <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white w-auto flex-col p-4 rounded shadow-lg">
//             <div className="w-[400px] h-[200px]">
//               <h2 className="text-xl mb-2">Edit Employee Type</h2>
//               <div className="pt-10">
//                 <label className="">Employee Type*</label>

//                 <input
//                   required
//                   type="text"
//                   value={editedEmployeeType}
//                   onChange={(e) => setEditedEmployeeType(e.target.value)}
//                   placeholder="Employee Type"
//                   className="border rounded-lg  border-[#e65f2b] outline-[#e65f2b]  mx-10 p-2 w-60 mb-4"
//                 />
//               </div>
//             </div>
//             <div className="justify-end gap-x-5 flex items-center">
//               <button
//                 className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
//                 onClick={() => setShowEditModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
//                 onClick={confirmEditEmployeeType}
//               >
//                 update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <div>
//         <table className="min-w-full text-[#e65f2b]">
//           <thead>
//             <tr className=" text-center">
//               <th className="py-2 px-4 ">Employee Type</th>
//               <th className="py-2 px-4 ">Status</th>
//               <th className="py-2 px-4 ">Action</th>
//             </tr>
//           </thead>
//           <tbody className="text-center">
//             {employeeTypes.map((employee, index) => (
//               <tr key={index} className="">
//                 <td
//                   className="py-2 px-4  cursor-pointer "
//                   onClick={() => handleEditEmployeeType(index)}
//                 >
//                   {employee.type}
//                 </td>
//                 <td className="py-2 px-4 ">{employee.status}</td>
//                 <td className="py-2 px-4 ">
//                   <button
//                     className="text-red-500"
//                     onClick={() => toggleEmployeeStatus(index)}
//                   >
//                     {employee.status === "Active"
//                       ? "Make Inactive"
//                       : "Make Active"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Types;
import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

function Types() {
  const [employeeTypes, setEmployeeTypes] = useState([
    { type: "Full Time", status: "Active" },
    { type: "Consultant", status: "Active" },
    { type: "Part Time", status: "Active" },
    { type: "Contract", status: "Inactive" },
    { type: "Probation", status: "Active" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployeeType, setNewEmployeeType] = useState("");

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [employeeToToggleStatus, setEmployeeToToggleStatus] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [editedEmployeeType, setEditedEmployeeType] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const adminName = "Mounika Ch"; // You can replace this with dynamic admin name from context or props

  const showTemporarySuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const logActivity = (action, details) => {
    const timestamp = new Date().toLocaleString();
    const activity = {
      admin: adminName,
      action,
      details,
      timestamp,
    };

    const storedActivities =
      JSON.parse(localStorage.getItem("activities")) || [];
    storedActivities.push(activity);
    localStorage.setItem("activities", JSON.stringify(storedActivities));
  };

  const handleAddEmployeeType = () => {
    if (newEmployeeType) {
      setEmployeeTypes((prev) => [
        ...prev,
        { type: newEmployeeType, status: "Active" },
      ]);
      logActivity("Added Employee Type", `Added ${newEmployeeType}`);
      setNewEmployeeType("");
      setShowAddModal(false);
      showTemporarySuccessMessage("Employee type added successfully!");
    }
  };

  const toggleEmployeeStatus = (index) => {
    setEmployeeToToggleStatus(index);
    setShowConfirmModal(true);
  };

  const confirmToggleEmployeeStatus = () => {
    const newStatus =
      employeeTypes[employeeToToggleStatus].status === "Active"
        ? "Inactive"
        : "Active";

    setEmployeeTypes((prev) =>
      prev.map((employee, index) =>
        index === employeeToToggleStatus
          ? { ...employee, status: newStatus }
          : employee
      )
    );
    setShowConfirmModal(false);
    logActivity(
      "Toggled Employee Status",
      `Changed ${employeeTypes[employeeToToggleStatus].type} status to ${newStatus}`
    );
    showTemporarySuccessMessage(
      `Employee type status changed to ${newStatus}!`
    );
  };

  const handleEditEmployeeType = (index) => {
    setEmployeeToEdit(index);
    setEditedEmployeeType(employeeTypes[index].type);
    setShowEditModal(true);
  };

  const confirmEditEmployeeType = () => {
    const previousType = employeeTypes[employeeToEdit].type;

    setEmployeeTypes((prev) =>
      prev.map((employee, index) =>
        index === employeeToEdit
          ? { ...employee, type: editedEmployeeType }
          : employee
      )
    );
    setShowEditModal(false);
    logActivity(
      "Edited Employee Type",
      `Changed ${previousType} to ${editedEmployeeType}`
    );
    showTemporarySuccessMessage("Employee type updated successfully!");
  };

  return (
    <div className="ml-20  p-4">
      {showSuccessMessage && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 w-auto h-full flex justify-center items-center ">
          <div className="text-white bg-gradient-to-b from-[#E65F2B] to-[#FFC252]  w-[320px] h-[240px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg  flex flex-col justify-center items-center relative">
            <BsCheck2Circle className="text-6xl text-white  mb-4" />
            {successMessage}
          </div>
        </div>
      )}

      <button
        className="mb-4 float-end  px-4 py-2 text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] rounded flex items-center"
        onClick={() => setShowAddModal(true)}
      >
        <span className="text-2xl">+</span>
        <span className="mr-2">Add New</span>
      </button>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-auto flex-col p-4 rounded shadow-lg">
            <div className="w-[400px] h-[200px]">
              <h2 className="text-xl mb-2">Add Employee Type</h2>
              <div className="pt-10">
                <label className="">Employee Type*</label>
                <input
                  required
                  type="text"
                  value={newEmployeeType}
                  onChange={(e) => setNewEmployeeType(e.target.value)}
                  placeholder="Employee Type"
                  className="border rounded-lg  border-[#e65f2b] outline-[#e65f2b]  mx-10 p-2 w-60 mb-4"
                />
              </div>
            </div>
            <div className="justify-end gap-x-5 flex items-center">
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
                onClick={handleAddEmployeeType}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Toggle Modal */}
      {showConfirmModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="w-[600px] h-[200px]">
              <h2 className="text-xl mb-2"> Department</h2>
              <h2 className="text-lg pb-10 mb-2 text-wrap">
                Are you sure you want to change the status of{" "}
                {employeeTypes[employeeToToggleStatus]?.type} to{" "}
                {employeeTypes[employeeToToggleStatus]?.status === "Active"
                  ? "Inactive"
                  : "Active"}
                ?
              </h2>
            </div>

            <div className="justify-end gap-x-5 flex items-center">
              <button
                className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
                onClick={confirmToggleEmployeeStatus}
              >
                Yes
              </button>
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
                onClick={() => setShowConfirmModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed text-[#e65f2b] inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-auto flex-col p-4 rounded shadow-lg">
            <div className="w-[400px] h-[200px]">
              <h2 className="text-xl mb-2">Edit Employee Type</h2>
              <div className="pt-10">
                <label className="">Employee Type*</label>

                <input
                  required
                  type="text"
                  value={editedEmployeeType}
                  onChange={(e) => setEditedEmployeeType(e.target.value)}
                  placeholder="Employee Type"
                  className="border rounded-lg  border-[#e65f2b] outline-[#e65f2b]  mx-10 p-2 w-60 mb-4"
                />
              </div>
            </div>
            <div className="justify-end gap-x-5 flex items-center">
              <button
                className="border-[1px] border-[#e65f2b] text-[#e65f2b] px-4 py-2 rounded ml-2"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded"
                onClick={confirmEditEmployeeType}
              >
                update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Employee Types Table */}
      <div>
        <table className="min-w-full text-[#e65f2b]">
          <thead>
            <tr className=" text-center">
              <th className="py-2 px-4 ">Employee Type</th>
              <th className="py-2 px-4 ">Status</th>
              <th className="py-2 px-4 ">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {employeeTypes.map((employee, index) => (
              <tr key={index} className="">
                <td
                  className="py-2 px-4  cursor-pointer "
                  onClick={() => handleEditEmployeeType(index)}
                >
                  {employee.type}
                </td>
                <td className="py-2 px-4 ">{employee.status}</td>
                <td className="py-2 px-4 ">
                  <button
                    className="text-red-500"
                    onClick={() => toggleEmployeeStatus(index)}
                  >
                    {employee.status === "Active"
                      ? "Make Inactive"
                      : "Make Active"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Types;
