import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const initialEvents = [
  { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
  // Add more Events if needed
];

const ReactCalendar = ({ onEventClick }) => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDay = new Date(currentYear, currentMonth, 1).getDay();

  const getCurrentDateString = () => {
    return `${months[currentMonth]} ${currentYear}`;
  };

  const getDayTextColor = (day) => {
    if (day === 1 || day === 15 || day === 28) {
      return "text-[#E65F2B]";
    } else if (day === 5 || day === 20) {
      return "text-[#E65F2B]";
    } else {
      return "text-[#0098F1]";
    }
  };

  const renderDays = () => {
    let daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty text-lg font-semibold"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayTextColor = getDayTextColor(i);
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      const dayClasses = `day text-center text-lg font-semibold m-5 ${dayTextColor} ${
        isToday ? "bg-[#FDE68A] rounded-full" : ""
      }`;

      daysArray.push(
        <div key={i} className={dayClasses} onClick={() => onEventClick(i)}>
          <span className=" text-lg font-semibold">{i}</span>
        </div>
      );
    }

    return daysArray;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar-container bg-[#E65F2B] ">
      <div className="max-w-full mx-auto bg-white rounded-lg overflow-hidden p-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-[#E65F2B] mb-5">
            {getCurrentDateString()}
          </h2>
          <div className="mb-5">
            <button
              className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent p-2"
              onClick={goToPreviousMonth}
            >
              <GoChevronLeft />
            </button>
            <button
              className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent p-2 ml-2"
              onClick={goToNextMonth}
            >
              <GoChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div
              key={day}
              className="text-centertext-lg font-semibold text-black font-roboto "
            >
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    day: "",
    date: "",
    name: "",
  });
  const [editEventId, setEditEventId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleDeleteEvent = () => {
    const updatedHolidays = holidays.filter(holiday => holiday.id !== deleteHolidayId);
    setHolidays(updatedHolidays);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  const handleAddEvent = () => {
    const dateObj = new Date(newEvent.date);
    const dayName = dateObj.toLocaleString("default", { weekday: "long" });
  
    if (editEventId !== null) {
      const updatedEvents = events.map((event) => {
        if (event.id === editEventId) {
          return {
            ...event,
            day: dayName,
            date: newEvent.date,
            name: newEvent.name,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
      setShowSuccessMessage(true);
    } else {
      const newEventObject = {
        id:
          events.length > 0
            ? Math.max(...events.map((event) => event.id)) + 1
            : 1,
        day: dayName,
        date: newEvent.date,
        name: newEvent.name,
      };
      setEvents([...events, newEventObject]);
      setShowSuccessMessage(true);
    }
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  
    closeModal();
  };
  

  const openEditModal = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditEventId(eventId);
    setNewEvent({
      day: eventToEdit.day,
      date: eventToEdit.date,
      name: eventToEdit.name,
    });
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteEventId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setNewEvent({
      day: "",
      date: "",
      name: "",
    });
  };

    const openDeleteModal = (holidayId) => {
    setDeleteEventId(holidayId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteHoliday = () => {
    const updatedEvents = events.filter((event) => event.id !== deleteEventId);
    setEvents(updatedEvents);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);

    closeDeleteModal();
  };

  const handleEventClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const dateString = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    const dayName = selectedDate.toLocaleString("default", { weekday: "long" });
  
    setSelectedDate(day);
    setNewEvent((prev) => ({
      ...prev,
      date: dateString,
      day: dayName,
    }));
    setIsModalOpen(true);
  };
  

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Employee</h2>
      <h3 className="text-lg font-semibold">Dashboard/Holidays</h3>

      <div className="flex justify-end mb-4">
        <button
          className="bg-[#E65F2B] text-white flex items-center rounded-lg px-6 py-3"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlusCircle className="text-white text-1xl mr-2" />
          <span className="text-white bg-[#E65F2B] font-medium text-lg">
            Add New Event
          </span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-8/12 bg-white rounded-lg p-4 mr-4 text-lg font-semibold">
          <ReactCalendar onEventClick={handleEventClick} className="text-lg font-semibold"/>
        </div>

        <div className="w-full md:w-4/12 bg-[#E65F2B] rounded-lg p-4 relative">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full overflow-hidden w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
              <img
                className="rounded-full h-24 w-24 object-cover"
                src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                alt="User"
              />
            </div>
            <h1 className="text-white text-2xl font-medium mb-1 text-center">
              Mounika
            </h1>

            <div className="flex flex-row space-x-4 text-white">
              <div className="font-roboto text-center text-xl">
                <h1 className="font-medium">17</h1>
                <h1>Completed</h1>
              </div>
              <div className="font-roboto text-center text-xl">
                <h1 className="font-medium">17</h1>
                <h1>To Do</h1>
              </div>
              <div className="font-roboto text-center text-xl">
                <h1 className="font-medium">17</h1>
                <h1>All Tasks</h1>
              </div>
            </div>

            <hr
              className="w-full border-white my-4"
              style={{ opacity: "0.5" }}
            />

            <div className="grid grid-cols-2 gap-2 mt-2">
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Marketing
              </button>
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Design Task
              </button>
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Development
              </button>
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Finance
              </button>
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Meeting
              </button>
              <button className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-lg mb-2">
                Conference
              </button>
            </div>
          </div>

          <hr className="w-full border-white my-4" style={{ opacity: "0.5" }} />
          <div className="font-roboto text-lg mt-4">
            <h1 className="text-white">Team</h1>
            <div className="flex items-center ml-4">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                  alt={`Image ${index + 1}`}
                  className={`w-10 h-10 rounded-full -ml-3 mt-4 z-${5 - index}`}
                  style={{ zIndex: 5 - index }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 mx-auto bg-white rounded-lg p-4 mt-4">
        <h1 className="text-lg font-semibold mb-4 text-[#E65F2B]">Events List</h1>
        <table className="w-full bg-white rounded-lg ">
          <thead className="bg-[#E65F2B]">
            <tr>
              <th className="p-2 text-lg font-semibold">Day</th>
              <th className="p-2 text-lg font-semibold" >Date</th>
              <th className="p-2 text-lg font-semibold">Event</th>
              <th className="p-2 text-lg font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {events.map((event) => (
              <tr key={event.id} className="bg-[#E65F2B] bg-opacity-20">
                <td className="py-2 px-4 border-b text-lg font-semibold bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {event.day}
                </td>
                <td className="py-2 px-4 border-b text-lg font-semibold bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {event.date}
                </td>
                <td className="py-2 px-4 border-b text-lg font-semibold bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">
                  {event.name}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center border-r-0 border-[#E65F2B] border-opacity-80">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="text-blue-500 flex py-3 items-center text-lg font-semibold"
                      onClick={() => openEditModal(event.id)}
                    >
                      <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                    </button>
                    <button
                      className="flex items-center justify-center"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <FiTrash2 className="mr-1 text-lg font-semibold bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" 
                      onClick={() => openDeleteModal(event.id)}/>
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
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">
              {editEventId ? 'Edit Holiday' : 'Add Holiday'}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2 text-lg font-semibold">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-lg font-semibold border-[#E65F2B] border-opacity-40 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-semibold">Holiday Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full text-lg font-semibold border-[#E65F2B] border-opacity-40 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-white text-lg font-semibold border border-[#E65F2B]  text-[#E65F2B] px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#E65F2B] text-white px-4 py-2 rounded text-lg font-semibold"
                onClick={handleAddEvent}
              >
                {editEventId ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
            <h2 className=" mb-4 text-[#E65F2B] text-lg font-semibold">Delete Holiday</h2>
            <p className='text-[#E65F2B] text-lg font-semibold'>Are you sure you want to delete?</p>
            <div className="mt-4 flex gap-5">
              <button
                className="bg-[#E65F2B] text-white px-10 py-2 rounded text-lg font-semibold"
                onClick={handleDeleteHoliday}
              >
                Delete
              </button>
              <button
                className="bg-white border text-lg font-semibold border-[#E65F2B] s text-[#E65F2B] px-10 py-2 rounded mr-2"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed top-4 text-lg font-semibold left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
          Holiday {editEventId ? 'updated' : 'added'} successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed top-4 left-1/2 text-lg font-semibold transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
          Holiday deleted successfully!
        </div>
      )}
    </div>
  );
};

export default Events;
