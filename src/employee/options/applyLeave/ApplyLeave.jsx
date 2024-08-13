// import React, { useState, useEffect } from "react";
// import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
// import { format, differenceInDays, parseISO } from "date-fns";

// const initialLeaves = [
//   {
//     id: 1,
//     LeaveType: "Casual Leave",
//     from: "08 Mar 2024",
//     to: "09 Mar 2024",
//     "No.of Days": "2 Days",
//     Reason: "Personal",
//     Status: "Approved",
//     ApprovedBy: "HR",
//   },
//   // Add more leaves here
// ];

// const LeavesCount = [
//   { annualLeave: 12, medicalLeave: 3, otherLeave: 4, remainingLeave: 5 },
// ];

// function ApplyLeave() {
//   const [Leaves, setLeaves] = useState(initialLeaves);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [newLeave, setNewLeave] = useState({
//     date: "",
//     leaveType: "",
//     from: "",
//     to: "",
//     noOfDays: "",
//     Remaining: "",
//     reason: "",
//     status: "",
//     ApprovedBy: "",
//   });
//   const [editLeaveId, setEditLeaveId] = useState(null);
//   const [openLeave, setOpenLeave] = useState(false);
//   const [deleteLeaveId, setDeleteLeaveId] = useState(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
//     useState(false);

//   useEffect(() => {
//     if (newLeave.from && newLeave.to) {
//       const fromDate = parseISO(newLeave.from);
//       const toDate = parseISO(newLeave.to);
//       const numOfDays = differenceInDays(toDate, fromDate) + 1; // +1 to include the end date
//       setNewLeave((prevLeave) => ({
//         ...prevLeave,
//         noOfDays: `${numOfDays} Days`,
//       }));
//     }
//   }, [newLeave.from, newLeave.to]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditLeaveId(null);
//     setNewLeave({
//       date: "",
//       leaveType: "",
//       from: "",
//       to: "",
//       noOfDays: "",
//       reason: "",
//       status: "",
//       ApprovedBy: "",
//     });
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setDeleteLeaveId(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLeave((prevLeave) => ({
//       ...prevLeave,
//       [name]: value,
//     }));
//   };
//   const settingStatus = (e) => {
//     switch (e) {
//       case "Approved":
//         return (
//           <button className="bg-green-600 text-white font-normal py-1 px-4 rounded-xl">
//             Approved
//           </button>
//         );
//       case "Pending":
//         return (
//           <button className="bg-orange-400 text-white font-normal py-1 px-4 rounded-xl">
//             Pending
//           </button>
//         );
//       case "Rejected":
//         return (
//           <button className="bg-red-600 text-white font-normal py-1 px-4 rounded-xl">
//             Rejected
//           </button>
//         );
//       default:
//         break;
//     }
//   };

//   const handleAddLeave = () => {
//     if (editLeaveId !== null) {
//       const updatedLeaves = Leaves.map((leave) => {
//         if (leave.id === editLeaveId) {
//           return {
//             ...leave,
//             LeaveType: newLeave.leaveType,
//             from: format(new Date(newLeave.from), "dd MMM yyyy"), // Convert to 'yyyy-MM-dd' for saving
//             to: format(new Date(newLeave.to), "dd MMM yyyy"), // Convert to 'yyyy-MM-dd' for saving
//             "No.of Days": newLeave.noOfDays,
//             Reason: newLeave.reason,
//             Status: newLeave.status,
//             ApprovedBy: newLeave.ApprovedBy,
//           };
//         }
//         return leave;
//       });
//       setLeaves(updatedLeaves);
//       setShowSuccessMessage(true);
//     } else {
//       const newLeaveObject = {
//         id:
//           Leaves.length > 0
//             ? Math.max(...Leaves.map((leave) => leave.id)) + 1
//             : 1,
//         LeaveType: newLeave.leaveType,
//         from: format(new Date(newLeave.from), "dd MMM yyyy"), // Convert to 'yyyy-MM-dd' for saving
//         to: format(new Date(newLeave.to), "dd MMM yyyy"), // Convert to 'yyyy-MM-dd' for saving
//         "No.of Days": newLeave.noOfDays,
//         Reason: newLeave.reason,
//         Status: newLeave.status,
//         ApprovedBy: newLeave.ApprovedBy,
//       };
//       setLeaves([...Leaves, newLeaveObject]);
//       setShowSuccessMessage(true);
//     }

//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);

//     closeModal();
//   };

//   const openEditModal = (leaveId) => {
//     const leaveToEdit = Leaves.find((leave) => leave.id === leaveId);
//     setEditLeaveId(leaveId);
//     setNewLeave({
//       leaveType: leaveToEdit.LeaveType,
//       from: format(new Date(leaveToEdit.from), "dd MMM yyyy"),
//       to: format(new Date(leaveToEdit.to), "dd MMM yyyy"),
//       noOfDays: leaveToEdit["No.of Days"],
//       reason: leaveToEdit.Reason,
//       status: leaveToEdit.Status,
//       ApprovedBy: leaveToEdit["ApprovedBy"],
//     });
//     setIsModalOpen(true);
//   };

//   const openDeleteModal = (leaveId) => {
//     setDeleteLeaveId(leaveId);
//     setIsDeleteModalOpen(true);
//   };

//   const handleDeleteLeave = () => {
//     const updatedLeaves = Leaves.filter((leave) => leave.id !== deleteLeaveId);
//     setLeaves(updatedLeaves);
//     setShowDeleteSuccessMessage(true);

//     setTimeout(() => {
//       setShowDeleteSuccessMessage(false);
//     }, 3000);

//     closeDeleteModal();
//   };

//   return (
//     <div className="max-w-full mx-auto  overflow-hidden">
//       <div className="">
//         <div className="p-4">
//           <h2 className="text-xl font-bold ">Employee</h2>
//           <h3 className="text-lg font-semibold mb-2">Dashboard/Leaves</h3>
//           {LeavesCount.map((count, index) => (
//             <div
//               className="w-full flex justify-around items-center pt-10 gap-4 text-white"
//               key={index}
//             >
//               <div className="bg-[#FA1A8E] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col ">
//                 <div>Annual Leave</div>
//                 <div>{count.annualLeave}</div>
//               </div>
//               <div className="bg-[#04B440] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col ">
//                 <div>Medical Leave</div>
//                 <span>{count.medicalLeave}</span>
//               </div>
//               <div className="bg-[#FF4040] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col ">
//                 <div>Other Leave</div>
//                 <span>{count.otherLeave}</span>
//               </div>
//               <div className="bg-[#15B9FF]  text-lg w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col ">
//                 <div>Remaining Leave</div>
//                 <span>{count.remainingLeave}</span>
//               </div>
//             </div>
//           ))}
//           <div className="flex justify-end my-4">
//             <button
//               type="button"
//               className="flex justify-center text-lg font-semibold items-center w-[186px] h-[48px] text-white bg-[#E65F2B] rounded-md"
//               onClick={() => {
//                 setIsModalOpen(true);
//                 setOpenLeave(true);
//               }}
//             >
//               <FiPlusCircle className="text-2xl mr-2 bg-[#E65F2B] text-white" />{" "}
//               Add Leave
//             </button>
//           </div>
//           <div id="table" className="overflow-x-scroll">
//             <table className="min-w-full w-screen overflow-x-scroll text-nowrap ">
//               <thead className="bg-[#E65F2B] text-lg text-white  sticky top-0 z-10">
//                 <tr>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     Leave Type
//                   </th>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     From
//                   </th>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     To
//                   </th>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     No. of Days
//                   </th>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     Approved By
//                   </th>
//                   <th className="py-4 px-20 text-center border-r border-white border-opacity-60">
//                     Reason
//                   </th>
//                   <th className="py-4 px-12 text-center border-r border-white border-opacity-60">
//                     Status
//                   </th>
//                   <th className="py-4 px-14 text-center">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Leaves.map((leave) => (
//                   <tr
//                     key={leave.id}
//                     className="bg-[#E65F2B] bg-opacity-20 text-lg font-normal"
//                   >
//                     <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave.LeaveType}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave.from}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave.to}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave["No.of Days"]}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave["ApprovedBy"]}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {leave.Reason}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
//                       {settingStatus(leave.Status)}
//                     </td>
//                     <td className="py-2 px-4 border-b bg-transparent text-center border-[#E65F2B]">
//                       <div className="flex justify-center items-center space-x-2">
//                         <button
//                           className="text-blue-500 flex py-3 items-center"
//                           onClick={() => openEditModal(leave.id)}
//                         >
//                           <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
//                         </button>
//                         <button
//                           className="flex items-center justify-center"
//                           onClick={() => openDeleteModal(leave.id)}
//                         >
//                           <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
//           <div className="bg-white rounded-lg p-6 px-10 w-[700px]">
//             <h2 className="text-2xl mb-4 text-[#E65F2B]">
//               {editLeaveId ? "Edit Leave" : "Add Leave"}
//             </h2>
//             <div className="grid grid-cols- space-y-4">
//               <div className="relative text-[#E65F2B]">
//                 <input
//                   type="text"
//                   name="leaveType"
//                   placeholder="Leave Type"
//                   value={newLeave.leaveType}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
//                 />
//                 {editLeaveId && (
//                   <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />
//                 )}
//               </div>
//               <div className="grid grid-cols-2 gap-2 text-[#E65F2B] text-opacity-85">
//                 <input
//                   type="date"
//                   name="from"
//                   value={newLeave.from}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2"
//                 />
//                 <input
//                   type="date"
//                   name="to"
//                   value={newLeave.to}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B]  rounded-md focus:outline-none p-2"
//                 />
//               </div>
//               {/* <div>
//                 <input
//                 type="text"
//                 name="noOfDays"
//                 value={newLeave.noOfDays}
//                 placeholder='No. of Days'
//                 readOnly
//                 className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] text-[#E65F2B] rounded-md focus:outline-none p-2"
//                 />
//             </div> */}
//               <div className="text-[#E65F2B]">
//                 {openLeave && (
//                   <div>
//                     <input
//                       type="text"
//                       name="Remaining"
//                       placeholder="Remaining Leaves"
//                       value={newLeave.remainingLeave}
//                       onChange={handleInputChange}
//                       className="block w-full border border-[#E65F2B] placeholder-[#E65F2B]  rounded-md focus:outline-none p-2 placeholder-opacity-60"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="relative text-[#E65F2B]">
//                 <input
//                   type="text"
//                   name="ApprovedBy"
//                   placeholder="ApprovedBy"
//                   value={newLeave.ApprovedBy}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
//                 />
//                 {editLeaveId && (
//                   <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />
//                 )}
//               </div>
//               <div className="relative text-[#E65F2B]">
//                 <textarea
//                   name="reason"
//                   value={newLeave.reason}
//                   placeholder="Reason"
//                   rows={4}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] focus:outline-none rounded-md p-2 placeholder-opacity-60"
//                 />
//                 {editLeaveId && (
//                   <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />
//                 )}
//               </div>
//               <div>
//                 <select
//                   name="status"
//                   value={newLeave.status}
//                   onChange={handleInputChange}
//                   className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] text-[#E65F2B] rounded-md focus:outline-none p-2"
//                 >
//                   <option value="" disabled>
//                     Select Status
//                   </option>
//                   <option value="Pending">Pending</option>
//                   <option value="Approved">Approved</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//                 {/* {editLeaveId && <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />} */}
//               </div>
//               <div className="flex justify-center space-x-4">
//                 <button
//                   type="button"
//                   onClick={handleAddLeave}
//                   className="py-2 px-9 border border-[#E65F2B] bg-[#E65F2B] text-white rounded-md focus:outline-none"
//                 >
//                   {editLeaveId ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="py-2 px-6 bg-white border border-[#E65F2B] text-[#E65F2B] rounded-md"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
//           <div className="bg-white rounded-lg p-6 w-[400px]">
//             <h2 className="text-xl mb-4">
//               Are you sure you want to delete this leave?
//             </h2>
//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 onClick={handleDeleteLeave}
//                 className="py-2 px-5 bg-[#E65F2B] text-white rounded-md"
//               >
//                 Delete
//               </button>
//               <button
//                 type="button"
//                 onClick={closeDeleteModal}
//                 className="py-2 px-4 bg-[white] border-[#E65F2B] border text-[#E65F2B] rounded-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="fixed top-4 left-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg text-lg font-normal">
//           Leave {editLeaveId ? "updated" : "added"} successfully!
//         </div>
//       )}

//       {showDeleteSuccessMessage && (
//         <div className="fixed top-4 left-1/2 bg-red-500 text-white p-4 rounded-md shadow-lg text-lg font-normal">
//           Leave deleted successfully!
//         </div>
//       )}
//     </div>
//   );
// }

// export default ApplyLeave;

import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { format, differenceInDays, parseISO } from "date-fns";

const initialLeaves = [
  {
    id: 1,
    LeaveType: "Casual Leave",
    startdate: "2024-03-08",
    enddate: "2024-03-09",
    selecthalf: 'firsthalf',
    reason: 'fever',
    Status: "Approved",
  },
  // Add more leaves here
];

const LeavesCount = [
  { annualLeave: 12, medicalLeave: 3, otherLeave: 4, remainingLeave: 5 },
];

function ApplyLeave() {
  const [Leaves, setLeaves] = useState(initialLeaves);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [newLeave, setNewLeave] = useState({
    leaveType: '',
    startdate: '',
    enddate: '',
    selecthalf: '',
    reason: '',
    status: 'Pending', // Default status to 'Pending'
  });
  
  const [editLeaveId, setEditLeaveId] = useState(null);
  const [deleteLeaveId, setDeleteLeaveId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  useEffect(() => {
    if (newLeave.startdate && newLeave.enddate) {
      const fromDate = parseISO(newLeave.startdate);
      const toDate = parseISO(newLeave.enddate);
      const numOfDays = differenceInDays(toDate, fromDate) + 1; // +1 to include the end date
      setNewLeave((prevLeave) => ({
        ...prevLeave,
        noOfDays: `${numOfDays} Days`,
      }));
    }
  }, [newLeave.startdate, newLeave.enddate]);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditLeaveId(null);
    setNewLeave({
      leaveType: '',
      startdate: '',
      enddate: '',
      selecthalf: '',
      reason: '',
      status: 'Pending',
    });
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteLeaveId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeave((prevLeave) => ({
      ...prevLeave,
      [name]: value,
    }));
  }; 

  const handleAddLeave = () => {
    if (editLeaveId) {
      // Update existing leave
      setLeaves((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave.id === editLeaveId ? { ...leave, ...newLeave } : leave
        )
      );
    } else {
      // Add new leave
      setLeaves((prevLeaves) => [
        ...prevLeaves,
        { id: Date.now(), ...newLeave },
      ]);
    }
  
    // Close the modal and reset form
    setIsModalOpen(false);
    setNewLeave({
      leaveType: '',
      startdate: '',
      enddate: '',
      selecthalf: '',
      reason: '',
      status: 'Pending',
    });
    setEditLeaveId(null);
  };

  const settingStatus = (status) => {
    switch (status) {
      case "Approved":
        return <span className="text-green-500">{status}</span>;
      case "Rejected":
        return <span className="text-red-500">{status}</span>;
      case "Pending":
        return <span className="text-yellow-500">{status}</span>;
      default:
        return <span>{status}</span>;
    }
  };

  const openEditModal = (leaveId) => {
    const leaveToEdit = Leaves.find((leave) => leave.id === leaveId);
    setEditLeaveId(leaveId);
    setNewLeave({
      leaveType: leaveToEdit.LeaveType,
      startdate: leaveToEdit.startdate,
      enddate: leaveToEdit.enddate,
      selecthalf: leaveToEdit.selecthalf,
      reason: leaveToEdit.reason,
      status: leaveToEdit.Status,
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (leaveId) => {
    setDeleteLeaveId(leaveId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteLeave = () => {
    const updatedLeaves = Leaves.filter((leave) => leave.id !== deleteLeaveId);
    setLeaves(updatedLeaves);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);

    closeDeleteModal();
  };

  return ( 
    
    <div className="max-w-full mx-auto overflow-hidden">  
    <div className="p-4">
          <h2 className="text-xl font-bold ">Employee</h2>
          <h3 className="text-lg font-semibold mb-2">Dashboard/Leaves</h3>
          {LeavesCount.map((count, index) => (
            <div
              className="w-full flex justify-around items-center pt-10 gap-4 text-white"
              key={index}
            >
              <div className="bg-[#FA1A8E] py-6 text-lg rounded-lg w-[420px] font-semibold min-h-[200px] flex pl-4 flex-col">
  <div className="text-start text-[25px] font-bold"> Earned Leave</div> 
  <ul className="text-[15px] list-none">
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Credited Leaves: <span className="ml-[100px]">10</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Total Leaves: <span className="ml-[123px]">20</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Applied Leaves: <span className="ml-[110px]">5</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Penalty Deduction: <span className="ml-[87px]">2</span>
    </li>
  </ul>
</div>

              <div className="bg-[#04B440] py-6 text-lg w-[420px] rounded-lg font-semibold min-h-[200px] flex pl-4 flex-col ">
                <div className="text-start text-[25px] font-bold">Sick Leave</div>
                {/* <span>{count.medicalLeave}</span> */}
                <ul className="text-[15px] list-none">
    <li className="flex items-center">
      <span className="inline-block w-2 h-2  bg-white rounded-full mr-2"></span>
      Credited Leaves: <span className="ml-[100px]">10</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Total Leaves: <span className="ml-[123px]">20</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Applied Leaves: <span className="ml-[110px]">5</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Penalty Deduction: <span className="ml-[87px]">2</span>
    </li>
  </ul>
              </div>
              <div className="bg-[#FF4040] py-6 text-lg w-[420px] rounded-lg font-semibold min-h-[200px] flex pl-4 flex-col ">
                <div className="text-start text-[25px] font-bold">Casuel Leave</div>
                {/* <span>{count.otherLeave}</span> */}
                <ul className="text-[15px] list-none">
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Credited Leaves: <span className="ml-[100px]">10</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Total Leaves: <span className="ml-[123px]">20</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Applied Leaves: <span className="ml-[110px]">5</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Penalty Deduction: <span className="ml-[87px]">2</span>
    </li>
  </ul>
              </div>
              <div className="bg-[#15B9FF]  py-6 text-lg w-[420px]  rounded-lg font-semibold min-h-[200px] flex pl-4 flex-col ">
                <div className="text-start text-[25px] font-bold">Earned Leave</div>
                {/* <span>{count.remainingLeave}</span> */}
                <ul className="text-[15px] list-none">
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Credited Leaves: <span className="ml-[60px]">10</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Total Leaves: <span className="ml-[123px]">20</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Applied Leaves: <span className="ml-[110px]">5</span>
    </li>
    <li className="flex items-center">
      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
      Penalty Deduction: <span className="ml-[87px]">2</span>
    </li>
  </ul>
              </div>
            </div>
          ))}
        
         
        </div>
      <div className="flex justify-end my-4">
        <button
          type="button"
          className="flex justify-center text-lg font-semibold items-center w-[186px] h-[48px] text-white bg-[#E65F2B] rounded-md"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <FiPlusCircle className="text-2xl mr-2 bg-[#E65F2B] text-white" />{" "}
          Add Leave
        </button>
      </div>

      <div id="table" className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4">
        <table className="min-w-full w-screen text-nowrap">
          <thead className="bg-[#E65F2B] text-lg text-white sticky top-0 z-10">
            <tr>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Leave Type</th>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Start Date</th>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">End Date</th>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Select Half</th>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Reason</th>
              <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Status</th>
              <th className="py-4 px-14 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Leaves.map((leave) => (
              <tr key={leave.id} className="bg-[#E65F2B] bg-opacity-20 text-lg font-normal">
                <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.LeaveType}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.startdate}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.enddate}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.selecthalf}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.reason}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{settingStatus(leave.Status)}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B]">
                  <div className="flex justify-center items-center space-x-2">
                    <button className="text-blue-500 flex py-3 items-center" onClick={() => openEditModal(leave.id)}>
                      <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                    </button>
                    <button className="flex items-center justify-center" onClick={() => openDeleteModal(leave.id)}>
                      <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="bg-white rounded-lg p-6 px-10 w-[700px]">
            <h2 className="text-xl font-semibold mb-4">{editLeaveId ? "Edit Leave" : "Add New Leave"}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="leaveType" className="block mb-2">
                  Leave Type
                </label>
                <select
                  id="leaveType"
                  name="leaveType"
                  value={newLeave.leaveType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Select leave type</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Annual Leave">Annual Leave</option>
                  <option value="Maternity Leave">Maternity Leave</option>
                  <option value="Other Leave">Other Leave</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="startdate" className="block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startdate"
                    name="startdate"
                    value={newLeave.startdate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="enddate" className="block mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="enddate"
                    name="enddate"
                    value={newLeave.enddate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="selecthalf" className="block mb-2">
                  Select Half
                </label>
                <select
                  id="selecthalf"
                  name="selecthalf"
                  value={newLeave.selecthalf}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Select half</option>
                  <option value="First Half">First Half</option>
                  <option value="Second Half">Second Half</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="reason" className="block mb-2">
                  Reason
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={newLeave.reason}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddLeave}
                  className="bg-[#E65F2B] text-white py-2 px-4 rounded-lg"
                >
                  {editLeaveId ? "Update Leave" : "Add Leave"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="bg-white rounded-lg p-6 px-10 w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Delete Leave</h2>
            <p>Are you sure you want to delete this leave?</p>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteLeave}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg">
          Leave added/updated successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg">
          Leave deleted successfully!
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;
