/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { differenceInDays, parseISO } from "date-fns";

const initialLeaves = [
  {
    id: 1,
    leaveType: "Earned Leave",
    startdate: "2024-07-10",
    enddate: "2024-07-15",
    selecthalf: "AM",
    reason: "Vacation",
    status: "Pending",
  },
  {
    id: 2,
    leaveType: "Sick Leave",
    startdate: "2024-07-20",
    enddate: "2024-07-22",
    selecthalf: "PM",
    reason: "Flu",
    status: "Approved",
  },
  {
    id: 3,
    leaveType: "Casual Leave",
    startdate: "2024-08-01",
    enddate: "2024-08-02",
    selecthalf: "AM",
    reason: "Personal work",
    status: "Rejected",
  },
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
    startdate: "",
    enddate: "",
    selecthalf: "",
    reason: "",
    status: "Pending",
  });

  const [editLeaveId, setEditLeaveId] = useState(null);
  const [deleteLeaveId, setDeleteLeaveId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);

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
      leaveType: "",
      startdate: "",
      enddate: "",
      selecthalf: "",
      reason: "",
      status: "Pending",
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

  const handleAddLeave = () => {
    if (editLeaveId) {
      // Update existing leave
      setLeaves((prevLeaves) =>
        prevLeaves.map((leave) =>
          leave.id === editLeaveId ? { ...leave, ...newLeave } : leave
        )
      );
      // Update leave count for edit operation
      updateLeaveCount(newLeave.leaveType, "edit");
    } else {
      // Add new leave
      setLeaves((prevLeaves) => [
        ...prevLeaves,
        {
          id: Date.now(),
          leaveType: newLeave.leaveType,
          startdate: newLeave.startdate,
          enddate: newLeave.enddate,
          selecthalf: newLeave.selecthalf,
          reason: newLeave.reason,
          status: newLeave.status,
        },
      ]);
      // Update leave count for add operation
      updateLeaveCount(newLeave.leaveType, "add");
    }

    // Close the modal and reset form
    closeModal();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
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
      enddate: leaveToEdit.enddate,
      selecthalf: leaveToEdit.selecthalf,
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

      <div className="flex flex-wrap justify-around text-white gap-4 pt-10">
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

        <div className="   overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead>
              <tr className="bg-[#2A546D] text-white">
                <th className="p-2">Leave Type</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Half-Day</th>
                <th className="p-2">Reason</th>
                <th className="p-2">Status</th>
                {/* <th className="p-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="text-center text-[#2A546D] border-[1px] border-[#2A546D] border-opacity-25"
                >
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {leave.leaveType}
                  </td>
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {leave.startdate}
                  </td>
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {leave.enddate}
                  </td>
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {leave.selecthalf}
                  </td>
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {leave.reason}
                  </td>
                  <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25">
                    {settingStatus(leave.status)}
                  </td>
                  {/* <td className="p-2 border-[1px] border-[#2A546D] border-opacity-25 flex justify-center space-x-2">
        <button
          className="text-blue-500"
          onClick={() => openEditModal(leave.id)}
        >
          <FiEdit />
        </button>
        <button
          className="text-red-500"
          onClick={() => openDeleteModal(leave.id)}
        >
          <FiTrash2 />
        </button>
      </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Success Message for Add/Edit */}
        {showSuccessMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            Leave has been successfully {editLeaveId ? "updated" : "added"}!
          </div>
        )}

        {/* Success Message for Delete */}
        {showDeleteSuccessMessage && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            Leave has been successfully deleted!
          </div>
        )}
      </div>

      {/* Modal for Adding/Editing Leave */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">
              {editLeaveId ? "Edit Leave" : "Apply for Leave"}
            </h3>
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Leave Type</label>
                <select
                  name="leaveType"
                  value={newLeave.leaveType}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="">Select Leave Type</option>
                  <option value="Earned Leave">Earned Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Start Date</label>
                <input
                  type="date"
                  name="startdate"
                  value={newLeave.startdate}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">End Date</label>
                <input
                  type="date"
                  name="enddate"
                  value={newLeave.enddate}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Half-Day</label>
                <select
                  name="selecthalf"
                  value={newLeave.selecthalf}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="">Select Half-Day</option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Reason</label>
                <textarea
                  name="reason"
                  value={newLeave.reason}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddLeave}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {editLeaveId ? "Update Leave" : "Apply Leave"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Deleting Leave */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Delete Leave</h3>
            <p>Are you sure you want to delete this leave?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteLeave}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;
