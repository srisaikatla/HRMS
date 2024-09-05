/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { differenceInDays, parseISO } from "date-fns";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const initialLeaves = [
  {
    id: 1,
    leaveType: "Earned Leave",
    startdate: "2024-07-10",
    enddate: "2024-07-15",
    selecthalf: "Full Day",
    reason: "Vacation",
    status: "Pending",
  },
  {
    id: 2,
    leaveType: "Sick Leave",
    startdate: "2024-07-20",
    enddate: "2024-07-22",
    selecthalf: "Full Day",
    reason: "Flu",
    status: "Approved",
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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [editEventId, setEditEventId] = useState(null); // Track if editing an event

  const [newLeave, setNewLeave] = useState({
    leaveType: "",
    startdate: "",
    enddate: "",
    selecthalf: "",
    reason: "",
    status: "Pending",
  });

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
    setNewLeave({
      leaveType: "",
      startdate: "",
      enddate: "",
      selecthalf: "",
      reason: "",
      status: "Pending",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLeave((prevLeave) => ({
      ...prevLeave,
      [name]: value,
    }));
  };

  const updateLeaveCount = (leaveType) => {
    setLeaveCount((prevCount) => {
      const updatedCount = { ...prevCount };

      if (leaveType === "Earned Leave") updatedCount.annualLeave -= 1;
      else if (leaveType === "Sick Leave") updatedCount.medicalLeave -= 1;
      else if (leaveType === "Casual Leave") updatedCount.otherLeave -= 1;

      return updatedCount;
    });
  };

  const handleAddLeave = () => {
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
    updateLeaveCount(newLeave.leaveType);

    // Close the modal and reset form
    closeModal();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const settingStatus = (status) => {
    const statusClasses = {
      Approved: "bg-[#04B440] p-2 rounded-lg text-white",
      Rejected: "bg-red-500 p-2 rounded-lg text-whte",
      Pending: "bg-yellow-500 px-[15px] p-2 rounded-lg text-white",
    };
    return <span className={statusClasses[status] || ""}>{status}</span>;
  };

  return (
    <div className="mt-4 p-4  min-h-screen">
      <div className=" flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Apply Leave
          </span>
        </div>
      </div>
      <div className="flex justify-end mr-4 mt-4">
        <div className="">
          <button
            className="bg-[#2A546D] text-white flex items-center rounded-lg p-3 px-5 lg:text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlusCircle className="text-white text-base  lg:text-lg mr-2" />
            <span className=" text-xs sm:text-sm md:text-base lg:text-lg">
              Apply Leave
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-around text-white gap-4 pt-4">
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
            <div className="text-start lg:text-lg  font-bold">{type}</div>
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
        <h3 className="text-lg text-[#2a546d]  font-semibold mb-2">
          My Leaves
        </h3>

        <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead>
              <tr className="bg-[#2a546d] text-white">
                <th className="p-3 border border-r-white border-[#2a546d] ">
                  Leave Type
                </th>
                <th className="p-3 border-r border-white">Start Date</th>
                <th className="p-3 border-r border-white">End Date</th>
                <th className="p-3 border-r border-white">Full / Half-Day</th>
                <th className="p-3 border-r border-white">Reason</th>
                <th className="p-3  border  border-[#2a546d]">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="text-center text-[#2A546D] border  border-[#2a546d]"
                >
                  <td className="p-3 border-r border-[#2a546d]">
                    {leave.leaveType}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {leave.startdate}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {leave.enddate}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {leave.selecthalf}
                  </td>
                  <td className="p-3 border-r border-[#2a546d]">
                    {leave.reason}
                  </td>
                  <td className="p-3  ">
                    <button className="">{settingStatus(leave.status)}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showSuccessMessage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
              <h2 className="text-xl mb-4">
                <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              </h2>
              <p>
                {editEventId
                  ? "Event updated successfully!"
                  : "Leave added successfully!"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Adding Leave */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white text-[#2a546d] h-80 overflow-y-scroll p-8 scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Apply for Leave</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Leave Type</label>
                <select
                  name="leaveType"
                  value={newLeave.leaveType}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="" disabled hidden>
                    Select Leave Type
                  </option>
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
                <label className="block mb-2 font-semibold">Half Day</label>
                <select
                  name="selecthalf"
                  value={newLeave.selecthalf}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="" disabled hidden>
                    Select Half Day
                  </option>
                  <option value="First Half">First Half</option>
                  <option value="Second Half">Second Half</option>
                  <option value="Full Day">Full Day</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Reason</label>
                <textarea
                  name="reason"
                  value={newLeave.reason}
                  onChange={handleInputChange}
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
            </form>

            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="mr-2 h-[40px] w-[120px] bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLeave}
                className="h-[40px] w-[120px] bg-[#2A546D] text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyLeave;
