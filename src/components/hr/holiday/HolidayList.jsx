  /* eslint-disable no-unused-vars */
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
  import { API_BASE_URL } from "../../../Config/api";
  import { IoMdCheckmarkCircleOutline } from "react-icons/io";

  function HolidayList() {
    const [holidays, setHolidays] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newHoliday, setNewHoliday] = useState({
      day: "",
      date: "",
      holidayName: "",
    });
    const [editHolidayId, setEditHolidayId] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
      useState(false);
    const jwt = localStorage.getItem("hrJwt");

    useEffect(() => {
      fetchHolidays();
    }, []);

    const fetchHolidays = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/holidays`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setHolidays(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setErrorMessage("Error fetching employees");
        setLoading(false);
      }
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setEditHolidayId(null);
      setNewHoliday({
        day: "",
        date: "",
        holidayName: "",
      });
    };
    const openDeleteModal = (holidayId) => {
      setDeleteEventId(holidayId);
      setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
      setDeleteEventId(null);
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewHoliday((prevHoliday) => ({
        ...prevHoliday,
        [name]: value,
      }));
    };

    const handleAddHoliday = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/holidays`, {
          ...newHoliday,
        });
        setHolidays((prev) => [...prev, response.data]);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        closeModal();
        fetchHolidays();
      } catch (error) {
        console.error("Error adding Holiday:", error);
        setErrorMessage("Error adding Holiday");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    };

    const handleEditHoliday = (holiday) => {
      setNewHoliday({
        day: holiday.day,
        date: holiday.date,
        holidayName: holiday.holidayName,
      });
      setEditHolidayId(holiday.holidayName);
      setIsModalOpen(true);
    };

    const handleUpdateHoliday = async () => {
      try {
        const response = await axios.put(
          `${API_BASE_URL}/holidays/${editHolidayId}`,
          newHoliday
        );
        setHolidays((prev) =>
          prev.map((emp) =>
            emp.holidayName === editHolidayId ? response.data : emp
          )
        );
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        closeModal();
      } catch (error) {
        console.error("Error updating holiday:", error);
        setErrorMessage("Error updating holiday");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    };

    const handleDeleteHoliday = async (holidayId) => {
      try {
        await axios.delete(`${API_BASE_URL}/holidays/delete/${holidayId}`);
        setHolidays((prev) =>
          prev.filter((holiday) => holiday.holidayName !== holidayId)
        );
    
        setShowDeleteSuccessMessage(true);
    
        setTimeout(() => {
          setShowDeleteSuccessMessage(false);
        }, 3000);
        fetchHolidays();
      } catch (error) {
        console.error("Error deleting holiday:", error);
      }
    };
    

    return (
      <>
        <div className="p-4 mt-4 min-h-screen">
          <h2 className="text-[#0098f1] lg:text-lg text-sm  font-bold ">
            Hr / Holidays List
          </h2>

          <div className="flex mt-2 justify-end">
            <div
              id="addholiday"
              className=" flex justify-center  items-center py-3  p-4 mt-2 rounded-lg bg-[#0098f1]"
            >
              <button
                type="button"
                className="flex items-center text-sm lg:text-lg  px-2  text-white"
                onClick={() => setIsModalOpen(true)}
              >
                <FiPlusCircle className="text-xl mr-2 font-bold " /> Add Holiday
              </button>
            </div>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className=" mt-2 overflow-x-scroll  scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-4 ">
              <table className="min-w-full w-screen  overflow-x-scroll   text-nowrap">
                <thead className="bg-[#0098f1] text-white">
                  <tr>
                    <th className="py-4 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-nowrap">
                      Sl.No
                    </th>
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
                  {holidays.map((holiday, index) => (
                    <tr key={holiday.holidayName}>
                      <td className="py-3 px-4 border-b text-center truncate">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 border-b text-center truncate">
                        {holiday.day}
                      </td>
                      <td className="py-3 px-4 border-b text-center truncate">
                        {holiday.date}
                      </td>
                      <td className="py-3 px-4 border-b text-center truncate">
                        {holiday.holidayName}
                      </td>
                      <td className="py-3 flex justify-center items-center px-4 text-center  border-b  truncate">
                        <FiEdit
                          className="text-blue-500 cursor-pointer mr-2"
                          onClick={() => handleEditHoliday(holiday)}
                        />
                        <FiTrash2
                          className="text-red-500 cursor-pointer "
                          onClick={() => handleDeleteHoliday(holiday.holidayName)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white lg:w-full w-64 rounded-lg p-6 max-w-lg">
              <h2 className="text-2xl mb-4 text-[#0098F1]">
                {editHolidayId ? "Edit Holiday" : "Add Holiday"}
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Day</label>
                  <input
                    type="text"
                    name="day"
                    value={newHoliday.day}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newHoliday.date}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="holidayName"
                    value={newHoliday.holidayName}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={
                      editHolidayId ? handleUpdateHoliday : handleAddHoliday
                    }
                    className="bg-blue-500 text-white px-4 py-3 rounded"
                  >
                    {editHolidayId ? "Update" : "Add"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="ml-2 bg-gray-500 text-white px-4 py-3 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
            {errorMessage}
          </div>
        )}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-10 w-[400px] flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-4 text-[#0098F1]">
                Delete Holiday
              </h2>
              <p className="text-[#0098F1]">Are you sure you want to delete?</p>
              <div className="mt-4 flex gap-5">
                <button
                  className="bg-[#0098F1] text-white px-10 py-2 rounded"
                  onClick={handleDeleteHoliday}
                >
                  Delete
                </button>
                <button
                  className="bg-white border border-[#0098F1] font-semibold text-[#0098F1] px-10 py-2 rounded mr-2"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccessMessage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
              <h2 className="text-xl mb-4">
                <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              </h2>
              <p>
                {editHolidayId
                  ? "Event updated successfully!"
                  : "Event added successfully!"}
              </p>
            </div>
          </div>
        )}

        {showDeleteSuccessMessage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-red-500 p-8 rounded-lg text-center text-white">
              <h2 className="text-xl mb-4">
                <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              </h2>
              <p>Event deleted successfully!</p>
            </div>
          </div>
        )}
      </>
    );
  }

  export default HolidayList;
