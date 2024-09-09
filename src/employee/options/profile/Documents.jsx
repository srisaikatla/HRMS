/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import axios from 'axios'
import { API_BASE_URL } from "../../../Config/api";
import { useSelector } from "react-redux";


const MAX_FILE_SIZE_MB = 10; // Max file size in megabytes


const Documents = ({
  handleOpenDocumentsModal,
  handleCloseDocumentsModal,
  isDocumentsModalOpen,
}) => {
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [verified, setVerified] = useState("false");
  const [submitted, setSubmitted] = useState("false");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [documentsData, setDocumentsData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const jwtToken = localStorage.getItem('employeeJwt')
  const auth = useSelector((state) => state.auth);
  const employeeId = auth.employee.employeeId
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Function to fetch documents from the backend
  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/aadhar/get/${employeeId}`, {
        headers: {
          "Authorization": `Bearer ${jwtToken}`
        },
      });
      setDocumentsData(response.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleDocumentSave = async () => {
    if (!idType || !idNumber || !employeeId) {
      alert("Please fill in all required fields.");
      return;
    }

    // Check file size before uploading
    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File size exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
      return;
    }

    const formData = new FormData();
    formData.append("idType", idType);
    formData.append("idNumber", idNumber);
    formData.append("verified", verified);
    formData.append("submitted", submitted);
    formData.append("employeeId", employeeId);
    if (file) {
      formData.append("file", file);
    }

    try {
      if (editMode) {
        // Update existing document
        await axios.put(`${API_BASE_URL}/aadhar/update`, formData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setDocumentsData((prevData) =>
          prevData.map((item) =>
            item.id === editingId
              ? { ...item, idType, idNumber, verified, submitted, file }
              : item
          )
        );
        setSuccessMessage("Document updated successfully!");
      } else {
        // Add new document
        const response = await axios.post(`${API_BASE_URL}/aadhar/save`, formData, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setDocumentsData((prevData) => [...prevData, response.data]);
        setSuccessMessage("Document added successfully!");
      }
      resetForm();
      handleCloseDocumentsModal();
    } catch (error) {
      console.error("Error adding/updating document:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }

    setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
  };

  const handleEdit = (id) => {
    const documentToEdit = documentsData.find((item) => item.id === id);
    if (documentToEdit) {
      setIdType(documentToEdit.idType);
      setIdNumber(documentToEdit.idNumber);
      setVerified(documentToEdit.Verified);
      setSubmitted(documentToEdit.Submitted);
      setFileName(documentToEdit.fileName);
      setEditingId(id);
      setEditMode(true);
      handleOpenDocumentsModal();
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/aadhar/${id}`);
      setDocumentsData(documentsData.filter((item) => item.id !== id));
      setSuccessMessage("Document deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const resetForm = () => {
    setIdType("");
    setIdNumber("");
    setVerified(false);
    setSubmitted(false);
    setFile(null);
    setFileName("");
    setEditMode(false);
    setEditingId(null);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name); // Update fileName state with the selected file name
    }
  };

  return (
    <div className="bg-white h-[500px] flex flex-col p-2">
      <div className="flex justify-between items-center py-2">
        <h1 className="text-xl text-[#2A546D]">ID PROOFS</h1>
        <button
          className="flex items-center text-lg bg-[#2A546D] text-white px-4 py-2 justify-center rounded-lg hover:bg-[#2A546D] focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
          onClick={() => {
            resetForm(); // Ensure form is reset when adding new document
            handleOpenDocumentsModal();
          }}
        >
          <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
          Add
        </button>
      </div>
      <hr className="border-t-2 border-[#2A546D] mb-4" />
      <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2a546d] pt-4 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
          <thead className="bg-[#2A546D]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                ID Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                ID Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Verified
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Submitted
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                File Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {documentsData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.idType}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.idNumber}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.verified ? "Yes" : "No"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.submitted ? "Yes" : "No"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.fileName}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-600 mr-4"
                    aria-label="Edit"
                  >
                    <FiEdit className="inline text-xl" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600"
                    aria-label="Delete"
                  >
                    <MdDelete className="inline text-xl" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDocumentsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-[90%] md:w-[50%] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseDocumentsModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#2A546D]">
              {editMode ? "Edit Document" : "Add Document"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <select
                  id="idType"
                  value={idType}
                  onChange={(e) => setIdType(e.target.value)}
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none text-[#2A546D]"
                  aria-label="ID Type"
                >
                  <option value="">Select ID Type</option>
                  <option value="passport">Passport</option>
                  <option value="pan_card">PAN Card</option>
                  <option value="driver_license">Driver License</option>
                  <option value="aadhar_card">Aadhar Card</option>
                </select>
              </div>
              <div>
                <label htmlFor="idNumber" className="block text-gray-700">
                  ID Number
                </label>
                <input
                  type="text"
                  id="idNumber"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className="w-full border-b border-[#2A546D] bg-transparent rounded-none p-2 focus:border-[#2A546D] outline-none"
                  placeholder="Enter ID Number"
                  aria-label="ID Number"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={verified}
                    onChange={() => setVerified(!verified)}
                    className="w-[30px] h-[30px] mr-2 accent-[#2A546D]"
                    aria-label="Verified"
                  />
                  <label className="text-lg text-[#2A546D]">Photo Id</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={submitted}
                    onChange={() => setSubmitted(!submitted)}
                    className="w-[30px] h-[30px] mr-2 accent-[#2A546D]"
                    aria-label="Submitted"
                  />
                </div>
                <label className="text-lg text-[#2A546D]">Date of Birth</label>
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block text-[#2A546D]">
                  Upload File
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="border border-[#2A546D] h-[60px] w-full text-white cursor-pointer file:bg-[#2A546D] file:h-[60px] file:w-[150px] file:text-white file:border-[#2A546D]"
                  aria-label="Upload File"
                />
                {/* Display the selected file name */}
                {fileName && (
                  <p className="mt-2 text-gray-600">
                    Selected File: {fileName}
                  </p>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleDocumentSave}
                  className="bg-[#2A546D] text-white h-[40px] w-[120px] rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
                  aria-label="Save Document"
                >
                  {editMode ? "Update Document" : "Save Document"}
                </button>
                <button
                  onClick={handleCloseDocumentsModal}
                  className="bg-transparent border border-[#2A546D] text-[#2A546D] h-[40px] w-[120px] rounded-lg ml-2 hover:bg-[#2A546D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
                  aria-label="Cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
            <h2 className="text-3xl mb-4">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
            </h2>
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
