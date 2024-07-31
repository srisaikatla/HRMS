// // import React, { useState } from "react";
// // import { FiPlusCircle } from "react-icons/fi";
// // import accept from "../../../assets/hr/employee/leaves/accept.png";
// // import reject from "../../../assets/hr/employee/leaves/reject.png";

// // const sampleData = [
// //   {
// //     id: 1,
// //     dp: "https://via.placeholder.com/40",
// //     name: "John Doe",
// //     email: "john@example.com",
// //     phone: "123-456-7890",
// //     employeeId: "EMP001",
// //     joiningDate: "2023-01-01",
// //     role: "Developer",
// //     leaveType: "Sick Leave",
// //     date: "2023-05-15",
// //     reason: "Fever",
// //   },
// //   {
// //     id: 2,
// //     dp: "https://via.placeholder.com/40",
// //     name: "Jane Smith",
// //     email: "jane@example.com",
// //     phone: "098-765-4321",
// //     employeeId: "EMP002",
// //     joiningDate: "2023-02-01",
// //     role: "Designer",
// //     leaveType: "Casual Leave",
// //     date: "2023-07-20",
// //     reason: "Travel",
// //   },
// //   // Add more sample data as needed
// // ];

// // function LeaveRequest() {
// //   return (
// //     <>s
// //       <div id="main" className="h-screen w-full bg-transparent p-4 mt-24">
// //         <div className="ml-5 ">
// //           <p className="text-[#e65f2b] font-semibold">
// //             Employees/Leave Requests
// //           </p>
// //         </div>

// //         <div className="flex justify-end mb-4 ">
// //           <div
// //             id="addemployee"
// //             className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
// //           >
// //             <button
// //               type="button"
// //               className="flex justify-center items-center w-[186px] h-[48px] text-white"
// //             >
// //               <FiPlusCircle className="text-2xl font-bold mr-2" /> Add Leave
// //             </button>
// //           </div>
// //         </div>
// //         <div id="table" className="overflow-x-auto">
// //           <table className="">
// //             <thead>
// //               <tr>
// //                 <th className="py-4 px-12 border-b bg-transparent"></th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Name
// //                 </th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Employee ID
// //                 </th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Leave Type
// //                 </th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Date
// //                 </th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Reason
// //                 </th>
// //                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
// //                   Action
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {sampleData.map((employee) => (
// //                 <tr key={employee.id} className="">
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     <img
// //                       src={employee.dp}
// //                       alt="DP"
// //                       className="w-10 h-10 rounded-full"
// //                     />
// //                   </td>
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     {employee.name}
// //                   </td>
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     {employee.employeeId}
// //                   </td>
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     {employee.leaveType}
// //                   </td>
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     {employee.date}
// //                   </td>
// //                   <td className="py-2 px-4 border-b bg-transparent text-center">
// //                     {employee.reason}
// //                   </td>
// //                   <td className="py-2 px-4 border-b pt-7 bg-transparent text-center flex items-center justify-center space-x-2">
// //                     <button className="flex items-center">
// //                       <img src={accept} alt="Accept" className="w-6 h-6 mr-1" />
// //                     </button>
// //                     <button className="flex items-center">
// //                       <img src={reject} alt="Reject" className="w-6 h-6 mr-1" />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default LeaveRequest;

// import React, { useState, useEffect } from "react";
// import { FiPlusCircle, FiCheckCircle, FiXCircle } from "react-icons/fi";
// import { FaLessThan, FaGreaterThan } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import SideBar from "../../Sidebar";
// import profilepic from "../../../assets/hr/employee/profile/profile.jpg";

// function LeaveRequest() {
//   const [leaves, setLeaves] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false); // State for success popup
//   const [showPopup, setShowPopup] = useState(false); // State for popup visibility
//   const [message, setMessage] = useState(""); // State for input message
//   const [selectedLeaveId, setSelectedLeaveId] = useState(null); // State for selected leave ID
//   const rowsPerPage = 7;

//   // Fetch data from local storage on component mount
//   useEffect(() => {
//     const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
//     setLeaves(storedLeaves);
//   }, []);

//   // Function to handle leave added from AddLeaveForm
//   const handleLeaveAdded = (newLeave) => {
//     const updatedLeaves = [...leaves, newLeave];
//     setLeaves(updatedLeaves);
//     localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
//   };

//   // Function to handle accept action
//   const handleAccept = (leaveId) => {
//     const updatedLeaves = leaves.map((leave) =>
//       leave.id === leaveId ? { ...leave, status: "Approved" } : leave
//     );
//     setLeaves(updatedLeaves);
//     localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
//   };

//   // Function to handle reject action
//   const handleReject = (leaveId) => {
//     setSelectedLeaveId(leaveId);
//     setShowPopup(true);
//   };

//   // Function to handle message submission
//   const handleMessageSubmit = () => {
//     if (selectedLeaveId !== null) {
//       const updatedLeaves = leaves.map((leave) =>
//         leave.id === selectedLeaveId
//           ? { ...leave, status: "Rejected", message: message }
//           : leave
//       );
//       setLeaves(updatedLeaves);
//       localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
//       setShowPopup(false);
//       setMessage("");
//       setShowSuccess(true);
//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 5000);
//     }
//   };

//   // Calculate the current rows to display
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = leaves.slice(indexOfFirstRow, indexOfLastRow);

//   // Calculate total number of pages
//   const totalPages = Math.ceil(leaves.length / rowsPerPage);

//   // Function to handle page change
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   // Sample data for employee details
//   const employeeDetails = {
//     1: { name: "Ratnapriya", gender: "female" },
//     2: { name: "Raghavendra", gender: "male" },
//     3: { name: "Ashwini", gender: "female" },
//     4: { name: "Ganesh Nitta", gender: "male" },
//     5: { name: "Anjani", gender: "male" },
//     6: { name: "Pavan", gender: "male" },
//     7: { name: "Mani Priya", gender: "female" },
//     8: { name: "Eswar Kumar Reddy", gender: "male" },
//     9: { name: "Tarun", gender: "male" },
//     10: { name: "Gouthami", gender: "female" },
//   };

//   // Function to get icon based on gender
//   const getIcon = (gender) =>
//     gender === "female" ? (
//       <img src={profilepic} alt="Profile" className="text-pink-500 text-2xl" />
//     ) : (
//       <img src={profilepic} alt="Profile" className="text-blue-500 text-2xl" />
//     );

//   return (
//     <>
//       {/* <SideBar /> */}
//       <div id="main" className="h-screen mt-24">
//         {/* Header */}
//         <div className="">
//           <p className="text-[#e65f2b] font-semibold">
//             Employees/Leave Requests
//           </p>
//         </div>

//         {/* Add Leave Button */}
//         <div className="flex justify-end mb-4">
//           <Link
//             to="/addleaveform"
//             className="w-auto inline-block p-4 mr-20 bg-[#0098f1] h-[48px] rounded-lg justify-end items-center flex justify-center text-white"
//           >
//             <FiPlusCircle className="text-2xl font-bold mr-2" /> Add Leave
//           </Link>
//         </div>

//         {/* Success Popup */}
//         {showSuccess && (
//           <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
//             Successfully rejected!
//           </div>
//         )}

//         {/* Table */}
//         <div id="table" className="overflow-x-auto">
//           <table className="text-nowrap">
//             <thead>
//               <tr>
//                 <th className="py-4 px-12 border-b bg-transparent"></th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Name
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Leave Type
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Start Date
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   End Date
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Description
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Status
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Message
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1]  text-center">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((leave, index) => (
//                 <tr key={leave.id}>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {getIcon(employeeDetails[index + 1]?.gender)}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employeeDetails[index + 1]?.name}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {leave.leaveType}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {leave.startDate}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {leave.endDate}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {leave.description}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     <span
//                       className={`py-1 px-3 rounded-full ${
//                         leave.status === "Approved"
//                           ? "bg-green-400"
//                           : leave.status === "Rejected"
//                           ? "bg-red-400"
//                           : "bg-yellow-400"
//                       } text-white`}
//                     >
//                       {leave.status || "Pending"}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {leave.message || "-"}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center flex items-center justify-center space-x-2">
//                     <button
//                       className="flex items-center"
//                       onClick={() => handleAccept(leave.id)}
//                     >
//                       <FiCheckCircle className="text-green-500 text-2xl" />
//                     </button>
//                     <button
//                       className="flex items-center"
//                       onClick={() => handleReject(leave.id)}
//                     >
//                       <FiXCircle className="text-red-500 text-2xl" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="flex justify-end mt-4 items-end ">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             className={`px-4 py-2 mx-1 rounded-full bg-[#E65F2B] h-[40px] w-[48px] text-white ${
//               currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={currentPage === 1}
//           >
//             <FaLessThan className="text-sm" />
//           </button>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             className={`px-4 py-2 mx-1 rounded-full bg-[#E65F2B] h-[40px] w-[48px] text-white ${
//               currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={currentPage === totalPages}
//           >
//             <FaGreaterThan className="text-sm" />
//           </button>
//         </div>
//         {/* Popup Form */}
//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
//             <div className="bg-red-500 p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-white font-bold mb-4">
//                 Enter Rejection Message
//               </h2>
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:border-white focus:outline-none"
//                 rows="4"
//                 placeholder="Enter rejection message..."
//               />

//               <div className="flex justify-end">
//                 <button
//                   onClick={handleMessageSubmit}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="border border-white text-white px-4 py-2 rounded-lg bg-transparent"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default LeaveRequest;
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import accept from "../../../assets/hr/employee/leaves/accept.png";
import reject from "../../../assets/hr/employee/leaves/reject.png";
import uncheckbox from "../../../assets/hr/employee/checkbox/uncheck.png";
import checkbox from "../../../assets/hr/employee/checkbox/checkbox.png";
import image1 from "../../../assets/hr/profile/man.png";

const initialLeaveData = [
  {
    id: 1,
    dp: image1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    employeeId: "EMP001",
    joiningDate: "2023-01-01",
    role: "Developer",
    leaveType: "Sick Leave",
    fromDate: "2023-05-15",
    toDate: "2023-05-17",
    reason: "Fever",
  },
  {
    id: 2,
    dp: image1,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    employeeId: "EMP002",
    joiningDate: "2023-02-01",
    role: "Designer",
    leaveType: "Casual Leave",
    fromDate: "2023-07-20",
    toDate: "2023-07-25",
    reason: "Travel",
  },
  // Add more sample data as needed
];

function LeaveRequest() {
  const [isChecked, setIsChecked] = useState({});
  const [headerChecked, setHeaderChecked] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLeave, setNewLeave] = useState({
    name: "",
    employeeId: "",
    fromDate: "",
    toDate: "",
    category: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [editLeaveId, setEditLeaveId] = useState(null);

  useEffect(() => {
    const storedLeaveData = JSON.parse(localStorage.getItem("leaves"));
    if (storedLeaveData) {
      setLeaves(storedLeaveData);
    } else {
      setLeaves(initialLeaveData);
    }
  }, []);

  const saveLeaveDataToLocalStorage = (data) => {
    localStorage.setItem("leaves", JSON.stringify(data));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditLeaveId(null);
    setNewLeave({
      name: "",
      employeeId: "",
      fromDate: "",
      toDate: "",
      category: "",
      message: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLeave({
      ...newLeave,
      [name]: value,
    });
  };

  const handleAddLeave = () => {
    if (editLeaveId !== null) {
      const updatedLeaves = leaves.map((leave) => {
        if (leave.id === editLeaveId) {
          return {
            ...leave,
            name: newLeave.name,
            employeeId: newLeave.employeeId,
            leaveType: newLeave.category,
            fromDate: newLeave.fromDate,
            toDate: newLeave.toDate,
            reason: newLeave.message,
          };
        }
        return leave;
      });
      setLeaves(updatedLeaves);
      saveLeaveDataToLocalStorage(updatedLeaves);
      setShowSuccessMessage(true);
    } else {
      const newLeaveObject = {
        id:
          leaves.length > 0
            ? Math.max(...leaves.map((leave) => leave.id)) + 1
            : 1,
        dp: image1, // Default placeholder image
        name: newLeave.name,
        employeeId: newLeave.employeeId,
        leaveType: newLeave.category,
        fromDate: newLeave.fromDate,
        toDate: newLeave.toDate,
        reason: newLeave.message,
      };
      setLeaves([...leaves, newLeaveObject]);
      saveLeaveDataToLocalStorage([...leaves, newLeaveObject]);
      setShowSuccessMessage(true);
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (leaveId) => {
    const leaveToEdit = leaves.find((leave) => leave.id === leaveId);
    setEditLeaveId(leaveId);
    setNewLeave({
      name: leaveToEdit.name,
      employeeId: leaveToEdit.employeeId,
      fromDate: leaveToEdit.fromDate,
      toDate: leaveToEdit.toDate,
      category: leaveToEdit.leaveType,
      message: leaveToEdit.reason,
    });
    setIsModalOpen(true);
  };

  const handleDeleteLeave = (leaveId) => {
    const updatedLeaves = leaves.filter((leave) => leave.id !== leaveId);
    setLeaves(updatedLeaves);
    saveLeaveDataToLocalStorage(updatedLeaves);
    setShowDeleteSuccessMessage(true);

    // Reset header checkbox state if all leaves are unchecked
    if (Object.keys(isChecked).length === 1) {
      setHeaderChecked(false);
    }

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
    leaves.forEach((leave) => {
      newIsChecked[leave.id] = newCheckedState;
    });
    setIsChecked(newIsChecked);
  };

  return (
    <>
      <div id="main" className="mr-2">
        <div className="ml-5 mb-4">
          <p className="text-[#e65f2b] font-bold text-xl">
            Employees/Leave Requests
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <div
            id="addleave"
            className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[186px] h-[48px] text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" />{" "}
              Add Leave
            </button>
          </div>
        </div>
        <div id="table" className="overflow-x-scroll">
          <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-transparent text-center">
                  <img
                    src={headerChecked ? checkbox : uncheckbox}
                    alt="Header Checkbox"
                    onClick={handleHeaderCheckboxChange}
                    className="bg-transparent cursor-pointer"
                  />
                </th>
                <th className="py-4 px-8 border-b bg-transparent"></th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Name
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Employee ID
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Leave Type
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Date
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Reason
                </th>
                <th className="py-4 px-8 border-b bg-[#0098f1]  text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr key={leave.id}>
                  <td className="py-2 px-4 border-b text-center bg-transparent">
                    <img
                      src={isChecked[leave.id] ? checkbox : uncheckbox}
                      alt="Checkbox"
                      onClick={() => handleCheckboxChange(leave.id)}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <img
                      src={leave.dp}
                      alt="DP"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.name}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.employeeId}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.leaveType}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.fromDate} - {leave.toDate}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center">
                    {leave.reason}
                  </td>
                  <td className="py-2 px-4 bg-transparent border-b text-center flex items-center justify-center space-x-2">
                    <button
                      className="flex items-center"
                      onClick={() => openEditModal(leave.id)}
                    >
                      <FiEdit className="text-xl text-blue-500 mr-1" />
                    </button>
                    <button
                      className="flex items-center"
                      onClick={() => handleDeleteLeave(leave.id)}
                    >
                      <FiTrash2 className="text-red-500 text-xl mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div
              className="bg-white p-8 rounded-lg shadow-lg z-50 h-auto w-2/3"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">
                {editLeaveId !== null ? "Edit Leave" : "Add Leave"}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddLeave();
                }}
              >
                <div className="space-y-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="employeeId"
                    placeholder="Employee ID"
                    className="w-full px-3 py-2 pb-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.employeeId}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <select
                    id="leave-category"
                    name="category"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Vacation">Vacation</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Personal Leave">Personal Leave</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="mb-4 flex flex-row gap-3">
                  <input
                    type="date"
                    name="fromDate"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.fromDate}
                    onChange={handleInputChange}
                    required
                  />

                  <input
                    type="date"
                    name="toDate"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.toDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                    value={newLeave.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showSuccessMessage && (
          <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2">
            <BsCheck2Circle className="inline mr-2" />
            {editLeaveId !== null
              ? "Leave Edited Successfully"
              : "Leave Added Successfully"}
          </div>
        )}
        {showDeleteSuccessMessage && (
          <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white text-center py-2">
            Leave Deleted Successfully
          </div>
        )}
      </div>
    </>
  );
}

export default LeaveRequest;
