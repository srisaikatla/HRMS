// import React from 'react';

// const holidays = [
//   { day: "Thursday", date: "25 Apr 2024", name: "Maharshi Parasuram Jayanti" },
  
//   // Add more holidays here
// ];

// function HolidayList() {
//   return (
//     <div className="   pl-8" >
//     <div className="p-4 " >
//       <h2 className="text-xl font-bold text-[#E65F2B]  mb-4">Holidays List</h2>
//       <table className="min-w-full ">
//         <thead className="" style={{background:" rgba(0, 152, 241, 0.1)"}}>
//           <tr >
//             <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Day</th>
//             <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Date</th>
//             <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Holiday Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {holidays.map((holiday, index) => (
//             <tr key={index} className=" " >
//               <td className="py-2 px-4 border-b bg-transparent text-center">{holiday.day}</td>
//               <td className="py-2 px-4 border-b bg-transparent text-center">{holiday.date}</td>
//               <td className="py-2 px-4 border-b bg-transparent text-center">{holiday.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }

// export default HolidayList;


import React, { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { MdEditSquare } from "react-icons/md";

const initialHolidays = [
  { id: 1, day: "Thursday", date: "25 Apr 2024", name: "Maharshi Parasuram Jayanti" },
  // Add more holidays here
];

function HolidayList() {
  const [holidays, setHolidays] = useState(initialHolidays);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    day: '',
    date: '',
    name: ''
  });
  const [editHolidayId, setEditHolidayId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditHolidayId(null);
    setNewHoliday({
      day: '',
      date: '',
      name: ''
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday(prevHoliday => ({
      ...prevHoliday,
      [name]: value
    }));
  }

  const handleAddHoliday = () => {
    if (editHolidayId !== null) {
      const updatedHolidays = holidays.map(holiday => {
        if (holiday.id === editHolidayId) {
          return {
            ...holiday,
            day: newHoliday.day,
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
        day: newHoliday.day,
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
  }

  const openEditModal = (holidayId) => {
    const holidayToEdit = holidays.find(holiday => holiday.id === holidayId);
    setEditHolidayId(holidayId);
    setNewHoliday({
      day: holidayToEdit.day,
      date: holidayToEdit.date,
      name: holidayToEdit.name
    });
    setIsModalOpen(true);
  }

  const handleDeleteHoliday = (holidayId) => {
    const updatedHolidays = holidays.filter(holiday => holiday.id !== holidayId);
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  }

  return (
    <>
      <div className=" ">
        <div className="p-4">
          <h2 className="text-xl font-bold text-[#E65F2B] ">Holidays List</h2>

          <div className="flex justify-end mb-4">
            <div
              id="addholiday"
              className="w-auto inline-block h-[48px] rounded-lg justify-end items-center bg-[#0098f1]"
            >
              <button
                type="button"
                className="flex justify-center items-center w-[186px] h-[48px] text-white"
                onClick={() => setIsModalOpen(true)}
              >
                <FiPlusCircle className="text-2xl font-bold mr-2 bg-[#0098f1]" /> Add Holiday
              </button>
            </div>
          </div>

          <table className="min-w-full">
            <thead className='bg-[#0098f1]'>
              <tr>
                <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Day</th>
                <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Date</th>
                <th className="py-4   border-b bg-[#0098f1] bg-opacity-30 text-center">Holiday Name</th>
                <th className="py-4 px-32 border-b bg-[#0098f1] bg-opacity-30 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday) => ( 
                <tr key={holiday.id}>
                  <td className="py-2 px-4 border-b bg-transparent text-center">{holiday.day}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">{holiday.date}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center ">{holiday.name}</td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="text-blue-500 flex py-3 items-center" onClick={() => openEditModal(holiday.id)}>
                        <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                      </button>
                      <button className=" flex  items-center justify-center" onClick={() => handleDeleteHoliday(holiday.id)}>
                        <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md " />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-2xl mb-4">
              {editHolidayId ? 'Edit Holiday' : 'Add Holiday'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
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
              <div>
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
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddHoliday}
              >
                {editHolidayId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded">
          Holiday {editHolidayId ? 'updated' : 'added'} successfully!
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
