import React, { useState } from "react";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";

const initialHolidays = [
  {
    id: 1,
    day: "Thursday",
    date: "25 Apr 2024",
    name: "Maharshi Parasuram Jayanti",
  },
  // Add more holidays here
];

function HolidayList() {
  const [holidays, setHolidays] = useState(initialHolidays);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    day: "",
    date: "",
    name: "",
  });
  const [editHolidayId, setEditHolidayId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditHolidayId(null);
    setNewHoliday({
      day: "",
      date: "",
      name: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prevHoliday) => ({
      ...prevHoliday,
      [name]: value,
    }));
  };

  const handleAddHoliday = () => {
    if (editHolidayId !== null) {
      const updatedHolidays = holidays.map((holiday) => {
        if (holiday.id === editHolidayId) {
          return {
            ...holiday,
            day: newHoliday.day,
            date: newHoliday.date,
            name: newHoliday.name,
          };
        }
        return holiday;
      });
      setHolidays(updatedHolidays);
      setShowSuccessMessage(true);
    } else {
      const newHolidayObject = {
        id:
          holidays.length > 0
            ? Math.max(...holidays.map((holiday) => holiday.id)) + 1
            : 1,
        day: newHoliday.day,
        date: newHoliday.date,
        name: newHoliday.name,
      };
      setHolidays([...holidays, newHolidayObject]);
      setShowSuccessMessage(true);
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (holidayId) => {
    const holidayToEdit = holidays.find((holiday) => holiday.id === holidayId);
    setEditHolidayId(holidayId);
    setNewHoliday({
      day: holidayToEdit.day,
      date: holidayToEdit.date,
      name: holidayToEdit.name,
    });
    setIsModalOpen(true);
  };

  const handleDeleteHoliday = (holidayId) => {
    const updatedHolidays = holidays.filter(
      (holiday) => holiday.id !== holidayId
    );
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#E65F2B]">Hr/Holidays List</h2>

        <div className="flex justify-end mb-4">
          <div
            id="addholiday"
            className="inline-block h-[48px] rounded-lg bg-[#0098f1]"
          >
            <button
              type="button"
              className="flex items-center w-[186px] h-[48px] px-2 text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2" /> Add Holiday
            </button>
          </div>
        </div>

        <table className="min-w-full border-collapse">
          <thead className="bg-[#0098f1] text-white">
            <tr>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-nowrap">
                Day
              </th>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-nowrap">
                Date
              </th>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-nowrap">
                Holiday Name
              </th>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday) => (
              <tr key={holiday.id}>
                <td className="py-2 px-4 border-b text-center truncate">
                  {holiday.day}
                </td>
                <td className="py-2 px-4 border-b text-center truncate">
                  {holiday.date}
                </td>
                <td className="py-2 px-4 border-b text-center truncate">
                  {holiday.name}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="text-blue-500 flex items-center"
                      onClick={() => openEditModal(holiday.id)}
                    >
                      <FiEdit className="text-white bg-[#2A8F4C] rounded-md w-7 h-7 p-1" />
                    </button>
                    <button
                      className="text-red-500 flex items-center"
                      onClick={() => handleDeleteHoliday(holiday.id)}
                    >
                      <FiTrash2 className="text-white bg-[#FF3636] w-7 h-7 rounded-md p-1" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl mb-4">
              {editHolidayId ? "Edit Holiday" : "Add Holiday"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Day</label>
                <input
                  type="text"
                  name="day"
                  value={newHoliday.day}
                  onChange={handleInputChange}
                  className="border border-blue-300 focus:outline-none p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newHoliday.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Holiday Name</label>
                <input
                  type="text"
                  name="name"
                  value={newHoliday.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white  px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddHoliday}
              >
                {editHolidayId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded">
          Holiday {editHolidayId ? "updated" : "added"} successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-red-500 text-white p-4 rounded">
          Holiday deleted successfully!
        </div>
      )}
    </>
  );
}

export default HolidayList;
