import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { differenceInDays, parseISO } from "date-fns";

const initialLeaves = [
  {
    id: 1,
    LeaveType: "Earned Leave",
    startdate: "2024-07-10",
    enddate: "2024-07-15",
    selecthalf: "AM",
    reason: "Vacation",
    Status: "Pending",
  },
  {
    id: 2,
    LeaveType: "Sick Leave",
    startdate: "2024-07-20",
    enddate: "2024-07-22",
    selecthalf: "PM",
    reason: "Flu",
    Status: "Approved",
  },
  {
    id: 3,
    LeaveType: "Casual Leave",
    startdate: "2024-08-01",
    enddate: "2024-08-02",
    selecthalf: "AM",
    reason: "Personal work",
    Status: "Rejected",
  },
];

const initialLeaveCount = {
  annualLeave: 10,
  medicalLeave: 5,
  otherLeave: 3,
  remainingLeave: 8,
};

function ApplyLeave() {
  const [Leaves, setLeaves] = useState(initialLeaves);
  const [LeaveCount, setLeaveCount] = useState(initialLeaveCount);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [status, setStatus] = useState("");
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
          LeaveType: newLeave.leaveType,
          startdate: newLeave.startdate,
          enddate: newLeave.enddate,
          selecthalf: newLeave.selecthalf,
          reason: newLeave.reason,
          Status: newLeave.status,
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
    const leaveToDelete = Leaves.find((leave) => leave.id === deleteLeaveId);
    setLeaves(Leaves.filter((leave) => leave.id !== deleteLeaveId));
    updateLeaveCount(leaveToDelete.LeaveType, "delete");
    setShowDeleteSuccessMessage(true);
    setTimeout(() => setShowDeleteSuccessMessage(false), 3000);
    closeDeleteModal();
  };

  return (
    <div className="max-w-full mx-auto overflow-hidden p-4">
      <h2 className="text-xl font-bold">Employee</h2>
      <h3 className="text-lg font-semibold mb-2">Dashboard/Leaves</h3>

      <div className="flex   flex-wrap justify-around   text-white gap-4 pt-10">
        {["Earned Leave", "Sick Leave", "Casual Leave"].map((type, i) => (
          <div
            key={i}
            className={`py-6 text-lg  px-4 rounded-lg lg:w-[300px] w-full font-semibold min-h-[200px] flex pl-4 flex-col ${
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
                  <span className="font-medium">Earned Leave:</span>
                </span>
                <span className="ml-4">{LeaveCount.annualLeave}</span>
              </li>

              <li className="flex justify-between items-center mt-2">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>Total Leaves:</span>
                </span>
                <span className="ml-4">{LeaveCount.medicalLeave}</span>
              </li>

              <li className="flex justify-between items-center mt-2">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>Remaining Leave:</span>
                </span>
                <span className="ml-4">{LeaveCount.remainingLeave}</span>
              </li>
              <li className="flex justify-between items-center text-white w-full mt-2">
                <span className="inline-flex items-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span className="text-white">Remaining Leaves:</span>
                </span>
                <span className="ml-4 text-white">
                  {LeaveCount.remainingLeave}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="relative mt-10">
        <div className="mb-4 flex justify-between items-center">
          <h3 className="lg:text-xl  text-sm  text-nowrap  mr-4 font-bold">
            My Leaves
          </h3>
          <button
            className="flex items-center px-4 py-2  bg-[#E65F2B] text-white text-sm rounded "
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlusCircle className="mr-2" /> Apply New Leave
          </button>
        </div>

        <div className="overflow-x-auto w-full scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 ">
          <table className="w-full min-w-[1024px] text-left  z--30 border-collapse bg-white">
            <thead className="bg-[#E65F2B] text-lg text-white sticky top-0 z-[0]">
              <tr>
                <th className="py-4 px-12 text-center border-r border-white text-nowrap border-opacity-60">
                  Leave Type
                </th>
                <th className="py-4 px-12 text-center border-r border-white text-nowrap border-opacity-60">
                  Start Date
                </th>
                <th className="py-4 px-12 text-center border-r border-white text-nowrap border-opacity-60">
                  End Date
                </th>
                <th className="py-4 px-12 text-center border-r border-white text-nowrap border-opacity-60">
                  Select Half
                </th>
                <th className="py-4 px-12 text-center border-r border-white text-nowrap border-opacity-60">
                  Reason
                </th>
                <th className="py-4 px-12 text-center border-r border-white  text-nowrap border-opacity-60">
                  Status
                </th>
                <th className="py-4 px-14 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Leaves.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {leave.LeaveType}
                  </td>
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {leave.startdate}
                  </td>
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {leave.enddate}
                  </td>
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {leave.selecthalf}
                  </td>
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {leave.reason}
                  </td>
                  <td className="px-4 py-3 border text-[#E65F2B]">
                    {settingStatus(leave.Status)}
                  </td>
                  <td className="px-4 py-3 border">
                    <button
                      className="text-blue-500 hover:text-blue-600"
                      onClick={() => openEditModal(leave.id)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 ml-2"
                      onClick={() => openDeleteModal(leave.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow">
          Leave successfully {editLeaveId ? "updated" : "applied"}!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded shadow">
          Leave successfully deleted!
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[280px] p-4 my-10 h-96 overflow-y-scroll rounded-lg md:w-1/3">
            <h2 className="text-xl font-bold mb-4 text-[#E65F2B]">
              {editLeaveId ? "Edit Leave" : "Add Leave"}
            </h2>
            <div className="mb-4">
              <label className="block  text-[#E65F2B]">Leave Type</label>
              <select
                name="leaveType"
                value={newLeave.leaveType}
                onChange={handleInputChange}
                className="border-spacing-1 border-2 border-[#E65F2B] rounded px-2 py-1 w-full text-[#E65F2B]"
              >
                <option value="">Select Leave Type</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#E65F2B]">Start Date</label>
              <input
                type="date"
                name="startdate"
                value={newLeave.startdate}
                onChange={handleInputChange}
                className="border-2 border-[#E65F2B] rounded px-2 py-1 w-full text-[#E65F2B]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#E65F2B]">End Date</label>
              <input
                type="date"
                name="enddate"
                value={newLeave.enddate}
                onChange={handleInputChange}
                className="border-2 border-[#E65F2B] rounded px-2 py-1 w-full text-[#E65F2B]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#E65F2B]">Half Day</label>
              <select
                name="selecthalf"
                value={newLeave.selecthalf}
                onChange={handleInputChange}
                className="border-2 border-[#E65F2B]  text-[#E65F2B] rounded px-2 py-1 w-full"
              >
                <option value="">Select Half Day</option>
                <option value="firsthalf">First Half</option>
                <option value="secondhalf">Second Half</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[#E65F2B]">Reason</label>
              <textarea
                name="reason"
                value={newLeave.reason}
                onChange={handleInputChange}
                className="border-2 border-[#E65F2B] rounded px-2 py-1 w-full"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#E65F2B]">Status</label>
              <select
                name="status"
                value={newLeave.status}
                onChange={handleInputChange}
                className="border-2 border-[#E65F2B] rounded px-2 py-1 w-full text-[#E65F2B]"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="text-end">
              <button
                onClick={handleAddLeave}
                className="bg-[#E65F2B] text-white px-4 py-2 rounded"
              >
                {editLeaveId ? "Update Leave" : "Add Leave"}
              </button>
              <button
                onClick={closeModal}
                className=" text-[#E65F2B]  border-[#E65F2B] border-2 px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Leave Modal */}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-lg p-6 md:w-[400px] w-[200px] ml-10">
            <h2 className="text-xl font-bold mb-4">Delete Leave</h2>
            <p className="mb-4">Are you sure you want to delete this leave?</p>
            <div className="flex justify-end">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLeave}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;
