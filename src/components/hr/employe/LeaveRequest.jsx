// import React, { useState } from "react";
// import { FiPlusCircle } from "react-icons/fi";
// import accept from "../../../assets/hr/employee/leaves/accept.png";
// import reject from "../../../assets/hr/employee/leaves/reject.png";

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
//   },
//   // Add more sample data as needed
// ];

// function LeaveRequest() {
//   return (
//     <>
//       <div id="main" className="h-screen w-full bg-transparent p-4 mt-24">
//         <div className="ml-5 ">
//           <p className="text-[#e65f2b] font-semibold">
//             Employees/Leave Requests
//           </p>
//         </div>

//         <div className="flex justify-end mb-4 ">
//           <div
//             id="addemployee"
//             className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
//           >
//             <button
//               type="button"
//               className="flex justify-center items-center w-[186px] h-[48px] text-white"
//             >
//               <FiPlusCircle className="text-2xl font-bold mr-2" /> Add Leave
//             </button>
//           </div>
//         </div>
//         <div id="table" className="overflow-x-auto">
//           <table className="">
//             <thead>
//               <tr>
//                 <th className="py-4 px-12 border-b bg-transparent"></th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Name
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Employee ID
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Leave Type
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Date
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Reason
//                 </th>
//                 <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sampleData.map((employee) => (
//                 <tr key={employee.id} className="">
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     <img
//                       src={employee.dp}
//                       alt="DP"
//                       className="w-10 h-10 rounded-full"
//                     />
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.name}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.employeeId}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.leaveType}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.date}
//                   </td>
//                   <td className="py-2 px-4 border-b bg-transparent text-center">
//                     {employee.reason}
//                   </td>
//                   <td className="py-2 px-4 border-b pt-7 bg-transparent text-center flex items-center justify-center space-x-2">
//                     <button className="flex items-center">
//                       <img src={accept} alt="Accept" className="w-6 h-6 mr-1" />
//                     </button>
//                     <button className="flex items-center">
//                       <img src={reject} alt="Reject" className="w-6 h-6 mr-1" />
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

// export default LeaveRequest;


import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
// import SideBar from "../../Sidebar";
import profilepic from "../../../assets/hr/employee/profile/profile.jpg";

function LeaveRequest() {
  const [leaves, setLeaves] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false); // State for success popup
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [message, setMessage] = useState(""); // State for input message
  const [selectedLeaveId, setSelectedLeaveId] = useState(null); // State for selected leave ID
  const rowsPerPage = 7;

  // Fetch data from local storage on component mount
  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(storedLeaves);
  }, []);

  // Function to handle leave added from AddLeaveForm
  const handleLeaveAdded = (newLeave) => {
    const updatedLeaves = [...leaves, newLeave];
    setLeaves(updatedLeaves);
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
  };

  // Function to handle accept action
  const handleAccept = (leaveId) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === leaveId ? { ...leave, status: "Approved" } : leave
    );
    setLeaves(updatedLeaves);
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
  };

  // Function to handle reject action
  const handleReject = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setShowPopup(true);
  };

  // Function to handle message submission
  const handleMessageSubmit = () => {
    if (selectedLeaveId !== null) {
      const updatedLeaves = leaves.map((leave) =>
        leave.id === selectedLeaveId
          ? { ...leave, status: "Rejected", message: message }
          : leave
      );
      setLeaves(updatedLeaves);
      localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
      setShowPopup(false);
      setMessage("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  // Calculate the current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = leaves.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total number of pages
  const totalPages = Math.ceil(leaves.length / rowsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Sample data for employee details
  const employeeDetails = {
    1: { name: "Ratnapriya", gender: "female" },
    2: { name: "Raghavendra", gender: "male" },
    3: { name: "Ashwini", gender: "female" },
    4: { name: "Ganesh Nitta", gender: "male" },
    5: { name: "Anjani", gender: "male" },
    6: { name: "Pavan", gender: "male" },
    7: { name: "Mani Priya", gender: "female" },
    8: { name: "Eswar Kumar Reddy", gender: "male" },
    9: { name: "Tarun", gender: "male" },
    10: { name: "Gouthami", gender: "female" },
  };

  // Function to get icon based on gender
  const getIcon = (gender) =>
    gender === "female" ? (
      <img src={profilepic} alt="Profile" className="text-pink-500 text-2xl" />
    ) : (
      <img src={profilepic} alt="Profile" className="text-blue-500 text-2xl" />
    );

  return (
    <>
      {/* <SideBar /> */}
      <div id="main" className="h-screen mt-24">
        {/* Header */}
        <div className="">
          <p className="text-[#e65f2b] font-semibold">
            Employees/Leave Requests
          </p>
        </div>

        {/* Add Leave Button */}
        <div className="flex justify-end mb-4">
          <Link
            to="/addleaveform"
            className="w-auto inline-block p-4 mr-20 bg-[#0098f1] h-[48px] rounded-lg justify-end items-center flex justify-center text-white"
          >
            <FiPlusCircle className="text-2xl font-bold mr-2" /> Add Leave
          </Link>
        </div>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            Successfully rejected!
          </div>
        )}

        {/* Table */}
        <div id="table" className="overflow-x-auto">
          <table className="text-nowrap">
            <thead>
              <tr>
                <th className="py-4 px-12 border-b bg-transparent"></th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Name
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Leave Type
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Start Date
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  End Date
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Description
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Status
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Message
                </th>
                <th className="py-4 px-12 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((leave, index) => (
                <tr key={leave.id}>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {getIcon(employeeDetails[index + 1]?.gender)}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {employeeDetails[index + 1]?.name}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {leave.leaveType}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {leave.startDate}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {leave.endDate}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {leave.description}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <span
                      className={`py-1 px-3 rounded-full ${
                        leave.status === "Approved"
                          ? "bg-green-400"
                          : leave.status === "Rejected"
                          ? "bg-red-400"
                          : "bg-yellow-400"
                      } text-white`}
                    >
                      {leave.status || "Pending"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {leave.message || "-"}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center flex items-center justify-center space-x-2">
                    <button
                      className="flex items-center"
                      onClick={() => handleAccept(leave.id)}
                    >
                      <FiCheckCircle className="text-green-500 text-2xl" />
                    </button>
                    <button
                      className="flex items-center"
                      onClick={() => handleReject(leave.id)}
                    >
                      <FiXCircle className="text-red-500 text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4 items-end ">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 mx-1 rounded-full bg-[#E65F2B] h-[40px] w-[48px] text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            <FaLessThan className="text-sm" />
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 mx-1 rounded-full bg-[#E65F2B] h-[40px] w-[48px] text-white ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
          >
            <FaGreaterThan className="text-sm" />
          </button>
        </div>
        {/* Popup Form */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
            <div className="bg-red-500 p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-white font-bold mb-4">
                Enter Rejection Message
              </h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:border-white focus:outline-none"
                rows="4"
                placeholder="Enter rejection message..."
              />

              <div className="flex justify-end">
                <button
                  onClick={handleMessageSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="border border-white text-white px-4 py-2 rounded-lg bg-transparent"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LeaveRequest;
