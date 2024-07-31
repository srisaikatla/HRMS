import React, { useState } from 'react';
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";

const initialHolidays = [
  { id: 1, day: "Thursday", date: "2024-04-25", name: "Maharshi Parasuram Jayanti" },
  // Add more holidays here
];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Holiday() {
  const [holidays, setHolidays] = useState(initialHolidays);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    date: '',
    name: ''
  });
  const [editHolidayId, setEditHolidayId] = useState(null);
  const [deleteHolidayId, setDeleteHolidayId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditHolidayId(null);
    setNewHoliday({
      date: '',
      name: ''
    });
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteHolidayId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday(prevHoliday => ({
      ...prevHoliday,
      [name]: value
    }));
  };

  const getDayFromDate = (date) => {
    const dateObj = new Date(date);
    return daysOfWeek[dateObj.getDay()];
  };

  const handleAddHoliday = () => {
    if (editHolidayId !== null) {
      const updatedHolidays = holidays.map(holiday => {
        if (holiday.id === editHolidayId) {
          return {
            ...holiday,
            day: getDayFromDate(newHoliday.date),
            date: newHoliday.date,
            name: newHoliday.name
          };
        }
        return holiday;
      });
      setHolidays(updatedHolidays);
      setShowSuccessMessage(true);
    } else {
      const newHolidayObject = {
        id: holidays.length > 0 ? Math.max(...holidays.map(holiday => holiday.id)) + 1 : 1,
        day: getDayFromDate(newHoliday.date),
        date: newHoliday.date,
        name: newHoliday.name
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
    const holidayToEdit = holidays.find(holiday => holiday.id === holidayId);
    setEditHolidayId(holidayId);
    setNewHoliday({
      date: holidayToEdit.date,
      name: holidayToEdit.name
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (holidayId) => {
    setDeleteHolidayId(holidayId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteHoliday = () => {
    const updatedHolidays = holidays.filter(holiday => holiday.id !== deleteHolidayId);
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);

    closeDeleteModal();
  };

  return (
    <>
      <div className="ml-2 mt-0 h-screen">
        <div className="p-4">
        <div>
            <span className="flex">Employee</span>
            <span className="text-[16px] font-medium">
            Dashboard / Holidays
            </span>
          </div>
         
          <div className="flex justify-end mb-4">
            <div
              id="addholiday"
              className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
            >
              <button
                type="button"
                className="flex justify-center items-center text-lg font-semibold w-[186px] h-[48px] text-white bg-[#E65F2B] rounded-md"
                onClick={() => setIsModalOpen(true)}
              >
                <FiPlusCircle className="mr-2 bg-[#E65F2B] text-white text-lg font-semibold" /> Add Holiday
              </button>
            </div>
          </div>
          <div id="table" className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#E65F2B]">
              <tr>
                <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">No</th>
                <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">Holiday Name</th>
                <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">Date</th>
                <th className="py-4 px-20 text-center border-r border-white border-opacity-60 text-lg font-semibold">Day</th>
                <th className="py-4 px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday, index) => (
                <tr key={holiday.id} className="bg-[#E65F2B] bg-opacity-20">
                  <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{index + 1}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.name}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.date}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80 text-lg font-semibold">{holiday.day}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center border-[#E65F2B]">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="text-blue-500 flex py-3 items-center" onClick={() => openEditModal(holiday.id)}>
                        <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                      </button>
                      <button className="flex items-center justify-center" onClick={() => openDeleteModal(holiday.id)}>
                        <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className=" mb-4 text-[#E65F2B] text-lg font-semibold">
              {editHolidayId ? 'Edit Holiday' : 'Add Holiday'}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 text-lg font-semibold">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newHoliday.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#E65F2B] border-opacity-40 focus:outline-none text-lg font-semibold"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-semibold">Holiday Name</label>
                <input
                  type="text"
                  name="name"
                  value={newHoliday.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-[#E65F2B] border-opacity-40 focus:outline-none text-lg font-semibold"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end text-lg font-semibold">
              <button
                className="bg-white border border-[#E65F2B]  text-[#E65F2B] px-4 py-2 rounded mr-2 text-lg font-semibold"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#E65F2B] text-white px-4 py-2 rounded text-lg font-semibold"
                onClick={handleAddHoliday}
              >
                {editHolidayId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold  mb-4 text-[#E65F2B]">Delete Holiday</h2>
            <p className='text-[#E65F2B] text-lg font-semibold'>Are you sure you want to delete?</p>
            <div className="mt-4 flex gap-5">
              <button
                className="bg-[#E65F2B] text-white px-10 py-2 rounded text-lg font-semibold"
                onClick={handleDeleteHoliday}
              >
                Delete
              </button>
              <button
                className="bg-white border border-[#E65F2B]  text-[#E65F2B] px-10 py-2 rounded mr-2 text-lg font-semibold"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="text-lg font-semibold fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
          Holiday {editHolidayId ? 'updated' : 'added'} successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className=" text-lg font-semibold fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
          Holiday deleted successfully!
        </div>
      )}
    </>
  );
}

export default Holiday;


