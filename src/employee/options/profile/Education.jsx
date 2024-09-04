import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import axios from "axios";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { API_BASE_URL } from "../../../Config/api";

const Education = () => {
  const [formState, setFormState] = useState({
    startDate: null,
    endDate: null,
    degree: "",
    institution: "",
    university: "",
  });
  const [educationData, setEducationData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // const auth = useSelector((state) => state.auth)
  // const employeeId = auth.employee.employeeId;

  const jwtToken = localStorage.getItem("employeeJwt");


  useEffect(() => {
    fetchEducationData();
  }, []);

  const fetchEducationData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/education/fetchEducation`, {
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        },
      });
      setEducationData([response.data]); // Assuming API returns a single education object
    } catch (error) {
      console.error("Error fetching education data", error);
    }
  };

  // Handle saving data
  const handleSave = async () => {
    const { degree, institution, university, startDate, endDate } = formState;
    const formattedStartDate = startDate ? format(startDate, "dd-MM-yyyy") : "";
    const formattedEndDate = endDate ? format(endDate, "dd-MM-yyyy") : "";

    const educationDTO = {
      degree: degree,
      institution: institution,
      university: university,
      startYear: formattedStartDate,
      endYear: formattedEndDate,
    };

    try {
      if (editingId) {
        await axios.post(`${API_BASE_URL}/education/saveOrUpdate`, educationDTO, {
          headers: {
            "Authorization": `Bearer ${jwtToken}`
          },
        });
        setSuccessMessage("Education Updated Successfully");
        setEditingId(null);
        setIsEditModalOpen(false);
        fetchEducationData()
      } else {
        await axios.post(`${API_BASE_URL}/education/saveOrUpdate`, educationDTO, {
          headers: {
            "Authorization": `Bearer ${jwtToken}`
          },
        });
        setSuccessMessage("Education Added Successfully");
        setIsAddModalOpen(false);
      }
      fetchEducationData(); // Refresh data after save
    } catch (error) {
      console.error("Error saving education data", error);
    }

    resetForm();
    setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 seconds
  };

  // Handle editing data
  const handleEdit = (id) => {
    const itemToEdit = educationData.find((item) => item.id === id);
    if (itemToEdit) {
      setFormState({
        degree: itemToEdit.degree,
        institution: itemToEdit.institution,
        university: itemToEdit.university,
        startDate: itemToEdit.startYear
          ? parse(itemToEdit.startYear, "dd-MM-yyyy", new Date())
          : null,
        endDate: itemToEdit.endYear
          ? parse(itemToEdit.endYear, "dd-MM-yyyy", new Date())
          : null,
      });
      setEditingId(id);
      setIsEditModalOpen(true);
    }
  };

  // Handle deleting data
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/education/delete`, {
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        },
      });
      setSuccessMessage("Education Deleted Successfully");
      fetchEducationData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting education data", error);
    }
    setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 seconds
  };



  // Reset form state
  const resetForm = () => {
    setFormState({
      startDate: null,
      endDate: null,
      degree: "",
      institution: "",
      university: "",
    });
  };

  // Close Add Modal
  const closeAddModal = () => {
    resetForm();
    setIsAddModalOpen(false);
  };

  // Close Edit Modal
  const closeEditModal = () => {
    resetForm();
    setEditingId(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="bg-white h-[500px] flex flex-col">
      <div className="flex justify-between items-center py-2">
        <h1 className="text-sm lg:text-lg text-[#2A546D]">EDUCATION INFO</h1>
        <button
          className="flex items-center text-lg bg-[#2A546D] text-white px-3 py-2 justify-center rounded-lg hover:bg-[#2A546D] focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
          onClick={() => setIsAddModalOpen(true)}
        >
          <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
          <span className="hidden text-lg sm:inline">Add</span>
        </button>
      </div>
      <hr className="border-t-2 border-[#2A546D] mb-4" />
      <div className="overflow-x-auto w-full lg:w-3/4 mx-auto"> {/* Adjust width here */}
        <table className="min-w-full border border-[#2A546D]">
          <thead>
            <tr className="bg-[#2A546D] text-white">
              <th className="p-3 border border-[#2A546D]">Degree</th>
              <th className="p-3 border border-[#2A546D]">Institution</th>
              <th className="p-3 border border-[#2A546D]">University</th>
              <th className="p-3 border border-[#2A546D]">Start Year</th>
              <th className="p-3 border border-[#2A546D]">End Year</th>
              <th className="p-3 border border-[#2A546D]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((education, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border border-[#2A546D]">{education.degree}</td>
                <td className="p-3 border border-[#2A546D]">
                  {education.institution}
                </td>
                <td className="p-3 border border-[#2A546D]">{education.university}</td>
                <td className="p-3 border border-[#2A546D]">
                  {education.startYear}
                </td>
                <td className="p-3 border border-[#2A546D]">
                  {education.endYear}
                </td>
                <td className="p-3 border border-[#2A546D]">
                  <button
                    onClick={() => handleEdit(education.id)}
                    className="text-blue-600 mr-4"
                  >
                    <FiEdit className="inline text-xl" aria-label="Edit" />
                  </button>
                  <button
                    onClick={() => handleDelete(education.id)}
                    className=" text-red-600"
                  >
                    <MdDelete className="inline text-xl" aria-label="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-[#2A546D]">
              Add Education Info
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <select
                  id="degreeType"
                  value={formState.degree}
                  onChange={(e) =>
                    setFormState({ ...formState, degree: e.target.value })
                  }
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                >
                  <option value="" disabled hidden>
                    Select Degree
                  </option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BA">BA</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="M.Com">M.Com</option>
                  <option value="MA">MA</option>
                  <option value="M.Sc">M.Sc</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={formState.institution}
                  onChange={(e) =>
                    setFormState({ ...formState, institution: e.target.value })
                  }
                  placeholder="Institution Name"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={formState.university}
                  onChange={(e) =>
                    setFormState({ ...formState, university: e.target.value })
                  }
                  placeholder="University Name"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <input
                  type="date"
                  value={formState.startYear}
                  onChange={(e) =>
                    setFormState({ ...formState, startDate: e.target.value })
                  }
                  placeholder="Start Year"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <input
                  type="date"
                  value={formState.endYear}
                  onChange={(e) =>
                    setFormState({ ...formState, endDate: e.target.value })
                  }
                  placeholder="End Year"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeAddModal}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#2A546D] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg relative">
            <h2 className="text-2xl font-semibold mb-4 text-[#2A546D]">
              Edit Education Info
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <select
                  id="degreeType"
                  value={formState.degree}
                  onChange={(e) =>
                    setFormState({ ...formState, degree: e.target.value })
                  }
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                >
                  <option value="" disabled hidden>
                    Select Degree
                  </option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BA">BA</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="M.Com">M.Com</option>
                  <option value="MA">MA</option>
                  <option value="M.Sc">M.Sc</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={formState.institution}
                  onChange={(e) =>
                    setFormState({ ...formState, institution: e.target.value })
                  }
                  placeholder="Institution Name"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={formState.university}
                  onChange={(e) =>
                    setFormState({ ...formState, university: e.target.value })
                  }
                  placeholder="University Name"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <DatePicker
                  selected={formState.startDate}
                  onChange={(date) =>
                    setFormState({ ...formState, startDate: date })
                  }
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Start Year"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
              <div>
                <DatePicker
                  selected={formState.endDate}
                  onChange={(date) =>
                    setFormState({ ...formState, endDate: date })
                  }
                  dateFormat="dd-MM-yyyy"
                  placeholderText="End Year"
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeEditModal}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#2A546D] text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="flex items-center bg-green-100 text-green-700 px-4 py-3 mt-2 rounded-md">
          <IoMdCheckmarkCircleOutline className="mr-2 text-lg" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Education;
