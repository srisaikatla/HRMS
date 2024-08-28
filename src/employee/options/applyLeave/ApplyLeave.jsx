/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { differenceInDays, parseISO } from "date-fns";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";
import { useSelector } from "react-redux";

const initialLeaves = [
  // Initial leaves data
];

const initialLeaveCount = {
  annualLeave: 10,
  medicalLeave: 5,
  otherLeave: 3,
  remainingLeave: 8,
};

function ApplyLeave() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [leaveCount, setLeaveCount] = useState(initialLeaveCount);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [newLeave, setNewLeave] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    selectHalf: "",
    noOfDays: "",
    reason: "",
    status: "Pending",
    employeeId: "",
  });

  const [editLeaveId, setEditLeaveId] = useState(null);
  const [deleteLeaveId, setDeleteLeaveId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if (newLeave.startDate && newLeave.endDate) {
      const fromDate = parseISO(newLeave.startDate);
      const toDate = parseISO(newLeave.endDate);
      const numOfDays = differenceInDays(toDate, fromDate) + 1; // +1 to include the end date
      setNewLeave((prevLeave) => ({
        ...prevLeave,
        noOfDays: `${numOfDays} Days`,
      }));
    }
  }, [newLeave.startDate, newLeave.endDate]);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditLeaveId(null);
    setNewLeave({
      leaveType: "",
      startDate: "",
      endDate: "",
      selectHalf: "",
      noOfDays: "",
      reason: "",
      status: "Pending",
      employeeId: ""
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

  const updateLeaveCount = (leaveType, operation) => {
    setLeaveCount((prevCount) => {
      const updatedCount = { ...prevCount };

      if (operation === "add") {
        if (leaveType === "Earned Leave") updatedCount.annualLeave -= 1;
        else if (leaveType === "Sick Leave") updatedCount.medicalLeave -= 1;
        else if (leaveType === "Casual Leave") updatedCount.otherLeave -= 1;
      } else if (operation === "edit") {
        // Implement logic to handle edit if needed
      } else if (operation === "delete") {
        if (leaveType === "Earned Leave") updatedCount.annualLeave += 1;
        else if (leaveType === "Sick Leave") updatedCount.medicalLeave += 1;
        else if (leaveType === "Casual Leave") updatedCount.otherLeave += 1;
      }

      return updatedCount;
    });
  };

  const handleAddLeave = async () => {
    const fromDate = parseISO(newLeave.startDate);
    const toDate = parseISO(newLeave.endDate);
    const numOfDays = differenceInDays(toDate, fromDate) + 1;
    const employeeId = auth.employee.employeeId
    console.log(employeeId)

    const updatedLeave = {
      ...newLeave,
      noOfDays: `${numOfDays} Days`,
      selectHalf: newLeave.selectHalf,
      employeeId: employeeId,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/leave/create`, updatedLeave);
      const createdLeave = response.data;

      if (editLeaveId) {
        setLeaves((prevLeaves) =>
          prevLeaves.map((leave) =>
            leave.id === editLeaveId ? createdLeave : leave
          )
        );
        updateLeaveCount(newLeave.leaveType, "edit");
      } else {
        setLeaves((prevLeaves) => [...prevLeaves, createdLeave]);
        updateLeaveCount(newLeave.leaveType, "add");
      }

      closeModal();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Error creating leave:", error);
      // Handle error (e.g., show error message to the user)
    }
  };



  const settingStatus = (status) => {
    const statusClasses = {
      Approved: "text-green-500",
      Rejected: "text-red-500",
      Pending: "text-yellow-500",
    };
    return <span className={statusClasses[status] || ""}>{status}</span>;
  };

  const openEditModal = (leaveId) => {
    const leaveToEdit = leaves.find((leave) => leave.id === leaveId);
    setEditLeaveId(leaveId);
    setNewLeave({
      leaveType: leaveToEdit.leaveType,
      startdate: leaveToEdit.startdate,
      enddate: leaveToEdit.endDate,
      selecthalf: leaveToEdit.selectHalf,
      noOfDays: leaveToEdit.noOfDays,
      reason: leaveToEdit.reason,
      status: leaveToEdit.status,
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (leaveId) => {
    setDeleteLeaveId(leaveId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteLeave = () => {
    const leaveToDelete = leaves.find((leave) => leave.id === deleteLeaveId);
    setLeaves(leaves.filter((leave) => leave.id !== deleteLeaveId));
    updateLeaveCount(leaveToDelete.leaveType, "delete");
    setShowDeleteSuccessMessage(true);
    setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
    closeDeleteModal();
  };

  return (
    <div className="max-w-full mx-auto overflow-hidden p-4">
      <h2 className="text-xl font-bold">Employee</h2>
      <h3 className="text-lg font-semibold mb-2">Dashboard/Leaves</h3>

      {/* Apply Leave Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiPlusCircle className="mr-2" />
          Apply Leave
        </button>
      </div>

      <div className="flex flex-wrap justify-around text-white gap-4 pt-10">
        {/* Leave counts */}
        {["Earned Leave", "Sick Leave", "Casual Leave"].map((type, i) => (
          <div
            key={i}
            className={`py-6 text-lg px-4 rounded-lg lg:w-[300px] w-full font-semibold min-h-[200px] flex pl-4 flex-col ${
              type === "Earned Leave"
                ? "bg-[#FA1A8E]"
                : type === "Sick Leave"
                ? "bg-[#04B440]"
                : "bg-[#FF4040]"
            }`}
          >
            <div className="text-start text-[18px] lg:text-[25px] font-bold">
              {type}
            </div>
            <ul className="text-[15px] list-none text-white mt-4">
              <li className="flex justify-between items-center">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span className="font-medium">Credited Leaves:</span>
                </span>
                <span className="ml-4">{leaveCount.annualLeave}</span>
              </li>

              <li className="flex justify-between items-center mt-2">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>Total Leaves:</span>
                </span>
                <span className="ml-4">{leaveCount.medicalLeave}</span>
              </li>

              <li className="flex justify-between items-center mt-2">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>Other Leaves:</span>
                </span>
                <span className="ml-4">{leaveCount.otherLeave}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">My Leaves</h3>

        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Leave Type</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">No.of Days</th>
                <th className="p-2">Half-Day</th>
                <th className="p-2">Reason</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, index) => (
                <tr key={index}>
                  <td className="border p-2">{leave.leaveType}</td>
                  <td className="border p-2">{leave.startDate}</td>
                  <td className="border p-2">{leave.endDate}</td>
                  <td className="border p-2">{leave.noOfDays}</td>
                  <td className="border p-2">{leave.selectHalf}</td>
                  <td className="border p-2">{leave.reason}</td>
                  <td className="border p-2">{settingStatus(leave.status)}</td>
                  <td className="border p-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(leave.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(leave.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Leave Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              {editLeaveId ? "Edit Leave" : "Add New Leave"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Leave Type</label>
                <select
                  name="leaveType"
                  value={newLeave.leaveType}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                >
                  <option value="">Select Leave Type</option>
                  <option value="Earned Leave">Earned Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={newLeave.startDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={newLeave.endDate}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Select Half</label>
                <select
                  name="selectHalf"
                  value={newLeave.selectHalf}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                >
                  <option value="">Select Half</option>
                  <option value="First Half">First Half</option>
                  <option value="Second Half">Second Half</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Reason</label>
                <textarea
                  name="reason"
                  value={newLeave.reason}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLeave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                {editLeaveId ? "Update" : "Apply"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Delete Leave</h2>
            <p>Are you sure you want to delete this leave?</p>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeDeleteModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLeave}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success message */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
          {editLeaveId ? "Leave updated successfully!" : "Leave added successfully!"}
        </div>
      )}

      {/* Delete Success message */}
      {showDeleteSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded">
          Leave deleted successfully!
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;
