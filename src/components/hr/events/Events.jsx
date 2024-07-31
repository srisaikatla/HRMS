import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const initialEvents = [
  { id: 1, day: "Thursday", date: "25 Apr 2024", name: "New Event" },
  // Add more Events
];

const Events = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const [Events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    day: "",
    date: "",
    name: "",
  });
  const [editEventId, setEditEventId] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);

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
    const currentDay = currentDate.getDate();
    const currentDayOfWeek = days[currentDate.getDay()]; // Get current day of the week

    return `${months[currentMonth]} ${currentDay}, ${currentDayOfWeek}`;
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

    // Render empty cells for days before the start of the current month
    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Render actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayTextColor = getDayTextColor(i);
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear();
      const dayClasses = `day text-center text-xl ${dayTextColor} ${
        isToday ? "bg-[#FDE68A] rounded-full" : ""
      }`;

      daysArray.push(
        <div key={i} className={dayClasses} style={{ margin: "4px" }}>
          <span className="font-roboto font-medium">{i}</span>
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

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEventId(null);
    setNewEvent({
      day: "",
      date: "",
      name: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleAddEvent = () => {
    if (editEventId !== null) {
      const updatedEvents = Events.map((Event) => {
        if (Event.id === editEventId) {
          return {
            ...Event,
            day: newEvent.day,
            date: newEvent.date,
            name: newEvent.name,
          };
        }
        return holiday;
      });
      setEvents(updatedEvents);
      setShowSuccessMessage(true);
    } else {
      const newEventObject = {
        id:
          Events.length > 0
            ? Math.max(...Events.map((Event) => Event.id)) + 1
            : 1,
        day: newEvent.day,
        date: newEvent.date,
        name: newEvent.name,
      };
      setEvents([...Events, newEventObject]);
      setShowSuccessMessage(true);
    }

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    closeModal();
  };

  const openEditModal = (EventId) => {
    const EventToEdit = Events.find((Event) => Event.id === EventId);
    setEditEventId(EventId);
    setNewEvent({
      day: EventToEdit.day,
      date: EventToEdit.date,
      name: EventToEdit.name,
    });
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (EventId) => {
    const updatedEvent = Events.filter((Event) => Event.id !== EventId);
    setEvents(updatedEvent);
    setShowDeleteSuccessMessage(true);

    setTimeout(() => {
      setShowDeleteSuccessMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className=" h-screen mr-2">
        <div className="ml-5">
          <p className="text-[#e65f2b] font-bold text-xl">Hr/Events</p>
        </div>
        <div className="flex justify-end mb-4 mr-2">
          <button
            className="bg-[#0098F1] text-white flex items-center rounded-lg px-6 py-3"
            onClick={() => setIsModalOpen(true)}
          >
            <FaPlusCircle className="text-white text-2xl mr-2" />
            <span className="text-white font-medium text-lg">
              Add new Events
            </span>
          </button>
        </div>

        <div className="flex md:flex-row flex-col gap-48 mr-10">
          <div className="w-full bg-white rounded-lg p-4 ">
            <div className="w-[150%] mx-auto rounded-lg overflow-hidden p-4 border">
              <div className="flex justify-between items-center mb-5">
                <h2 className="font-medium text-xl text-[#E65F2B] mb-10">
                  {getCurrentDateString()}
                </h2>
                <div className="mt-10">
                  <button
                    className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent mr-3"
                    onClick={goToPreviousMonth}
                    style={{
                      width: "28px",
                      height: "28px",
                      padding: "4px",
                      borderWidth: "2px",
                    }}
                  >
                    <GoChevronLeft style={{ fontSize: "15px" }} />
                  </button>
                  <button
                    className="text-[#E65F2B] hover:text-gray-800 focus:outline-none rounded-full border border-[#E65F2B] bg-transparent"
                    onClick={goToNextMonth}
                    style={{
                      width: "28px",
                      height: "28px",
                      padding: "4px",
                      borderWidth: "2px",
                    }}
                  >
                    <GoChevronRight style={{ fontSize: "15px" }} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm text-black font-roboto font-[600]"
                  >
                    {day}
                  </div>
                ))}
                {renderDays()}
              </div>
            </div>
          </div>

          <div className=" w-full bg-[#0098F1] rounded-lg p-4 ml-10 ">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full overflow-hidden flex items-center justify-center">
                <img
                  className="rounded-full h-24 w-24 object-cover"
                  src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                  alt="User"
                />
              </div>
              <h1 className="text-white text-2xl  mb-1 text-center mt-1">
                Mounika
              </h1>

              <div className="flex flex-row space-x-4 text-white">
                <div className="font-roboto text-center pl-3 pr-3">
                  <p className="font-medium">17</p>
                  <p>Completed</p>
                </div>
                <div className="font-roboto text-center pl-3 pr-3">
                  <h1 className="font-medium">34</h1>
                  <h1>To Do</h1>
                </div>
                <div className="font-roboto text-center pl-3 pr-3">
                  <h1 className="font-medium">78</h1>
                  <h1>All Tasks</h1>
                </div>
              </div>

              <hr
                className="w-full border-white my-4"
                style={{ opacity: "0.5" }}
              />

              <div className="grid grid-cols-2 gap-2 mb-2">
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Marketing
                </h1>
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Design Task
                </h1>
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Development
                </h1>
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Finance
                </h1>
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Meeting
                </h1>
                <h1 className="bg-transparent border border-white text-white rounded-lg px-4 py-2 text-sm m-1 text-center">
                  Conference
                </h1>
              </div>
            </div>

            <hr
              className="w-full border-white my-1"
              style={{ opacity: "0.5" }}
            />
            <div className="font-roboto text-xl">
              <h1 className="text-white">Team</h1>
              <div className="flex items-center ml-4">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                    alt={`Image ${index + 1}`}
                    className={`w-8 h-8 rounded-full -ml-3 z-${5 - index}`}
                    style={{ zIndex: 5 - index }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <table className="min-w-full mt-2 ml-2 ">
          <thead style={{ background: "rgba(0, 152, 241, 0.1)" }} className="">
            <tr>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Day
              </th>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Date
              </th>
              <th className="py-4   border-b bg-[#0098f1] bg-opacity-30 text-center">
                Event Name
              </th>
              <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Events.map((Event) => (
              <tr key={Event.id}>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {Event.day}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {Event.date}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center ">
                  {Event.name}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-blue-500 flex py-3 items-center"
                      onClick={() => openEditModal(Event.id)}
                    >
                      <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                    </button>
                    <button
                      className="flex  items-center justify-center"
                      onClick={() => handleDeleteEvent(Event.id)}
                    >
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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-2xl mb-4">
              {editEventId ? "Edit Holiday" : "Add Holiday"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Day</label>
                <input
                  type="text"
                  name="day"
                  value={newEvent.day}
                  onChange={handleInputChange}
                  className="border border-blue-300 focus:outline-none p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="border p-2 w-full border-blue-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
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
                onClick={handleAddEvent}
              >
                {editEventId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 rounded">
          Event {editEventId ? "updated" : "added"} successfully!
        </div>
      )}

      {showDeleteSuccessMessage && (
        <div className="fixed bottom-0 right-0 bg-red-500 text-white p-4 rounded">
          Event deleted successfully!
        </div>
      )}
    </>
  );
};

export default Events;
