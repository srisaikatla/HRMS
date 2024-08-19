import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

// Initial education data
const initialEducationData = [{
    id: 1,
    degree: "B.Tech",
    institution: "AITAM",
    university: "JNTUK",
    startYear: "02-03-2019",
    endYear: "04-08-2023"
}];

const Education = () => {
    const [formState, setFormState] = useState({
        startDate: null,
        endDate: null,
        degree: '',
        institution: '',
        university: ''
    });
    const [educationData, setEducationData] = useState(initialEducationData);
    const [editingId, setEditingId] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Handle saving data
    const handleSave = () => {
        const { degree, institution, university, startDate, endDate } = formState;
        const formattedStartDate = startDate ? format(startDate, 'dd-MM-yyyy') : '';
        const formattedEndDate = endDate ? format(endDate, 'dd-MM-yyyy') : '';

        if (editingId) {
            setEducationData(educationData.map(item =>
                item.id === editingId
                    ? { ...item, degree, institution, university, startYear: formattedStartDate, endYear: formattedEndDate }
                    : item
            ));
            setSuccessMessage('Education Updated Successfully');
            setEditingId(null);
            setIsEditModalOpen(false);
        } else {
            const newId = educationData.length ? Math.max(...educationData.map(item => item.id)) + 1 : 1;
            const newEducation = {
                id: newId,
                degree,
                institution,
                university,
                startYear: formattedStartDate,
                endYear: formattedEndDate
            };
            setEducationData([...educationData, newEducation]);
            setSuccessMessage(' Education Added Successfully');
            setIsAddModalOpen(false);
        }
        resetForm();
        setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
    };

    // Handle editing data
    const handleEdit = (id) => {
        const itemToEdit = educationData.find(item => item.id === id);
        if (itemToEdit) {
            setFormState({
                degree: itemToEdit.degree,
                institution: itemToEdit.institution,
                university: itemToEdit.university,
                startDate: itemToEdit.startYear ? parse(itemToEdit.startYear, 'dd-MM-yyyy', new Date()) : null,
                endDate: itemToEdit.endYear ? parse(itemToEdit.endYear, 'dd-MM-yyyy', new Date()) : null
            });
            setEditingId(id);
            setIsEditModalOpen(true);
        }
    };

    // Handle deleting data
    const handleDelete = (id) => {
        setEducationData(educationData.filter(item => item.id !== id));
        setSuccessMessage('Education Deleted Successfully');
        setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
    };

    // Reset form state
    const resetForm = () => {
        setFormState({
            startDate: null,
            endDate: null,
            degree: '',
            institution: '',
            university: ''
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
        <div className='bg-white p-6 ml-10 mr-10 h-[500px] flex flex-col'>
            <div className="flex justify-between items-center py-2">
                <h1 className="text-xl text-[#E65F2B]">EDUCATION INFO</h1>
                <button
                    className="flex items-center text-2xl bg-[#E65F2B] text-white h-[50px] w-[120px] justify-center rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    <FaPlusCircle className="text-3xl mr-2" aria-hidden="true" />
                    Add
                </button>
            </div>
            <hr className="border-t-2 border-[#E65F2B] mb-4" />
            <div className="flex-grow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#E65F2B]">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Degree</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Institution</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">University</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Start Year</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">End Year</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {educationData.map(item => (
                            <tr key={item.id}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.degree}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.institution}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.university}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.startYear}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.endYear}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="text-red-500 hover:text-blue-700 mr-4"
                                    >
                                        <FiEdit className="inline text-xl" aria-label="Edit" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:text-red-700"
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
                        <h2 className="text-2xl font-semibold mb-4 text-[#E65F2B]">Add Education Info</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <select
                                    id="degreeType"
                                    value={formState.degree}
                                    onChange={(e) => setFormState({ ...formState, degree: e.target.value })}
                                    className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                >
                                    <option value="">Select Degree</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="B.Com">B.Com</option>
                                    <option value="MCA">MCA</option>
                                    <option value="M.Sc">M.Sc</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MA">MA</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="institutionName" className="block text-gray-700">Institution</label>
                                    <input
                                        type="text"
                                        id="institutionName"
                                        value={formState.institution}
                                        onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="universityName" className="block text-gray-700">University</label>
                                    <input
                                        type="text"
                                        id="universityName"
                                        value={formState.university}
                                        onChange={(e) => setFormState({ ...formState, university: e.target.value })}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                                    <DatePicker
                                        selected={formState.startDate}
                                        onChange={(date) => setFormState({ ...formState, startDate: date })}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-gray-700">End Date</label>
                                    <DatePicker
                                        selected={formState.endDate}
                                        onChange={(date) => setFormState({ ...formState, endDate: date })}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleSave}
                                    className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={closeAddModal}
                                    className="ml-4 bg-gray-200 text-gray-800 h-[40px] w-[120px] rounded-lg hover:bg-gray-300 focus:outline-none"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg relative">
                        <h2 className="text-2xl font-semibold mb-4 text-[#E65F2B]">Edit Education Info</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <select
                                    id="degreeType"
                                    value={formState.degree}
                                    onChange={(e) => setFormState({ ...formState, degree: e.target.value })}
                                    className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                >
                                    <option value="">Select Degree</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="B.Com">B.Com</option>
                                    <option value="MCA">MCA</option>
                                    <option value="M.Sc">M.Sc</option>
                                    <option value="MBA">MBA</option>
                                    <option value="MA">MA</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="institutionName" className="block text-gray-700">Institution</label>
                                    <input
                                        type="text"
                                        id="institutionName"
                                        value={formState.institution}
                                        onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="universityName" className="block text-gray-700">University</label>
                                    <input
                                        type="text"
                                        id="universityName"
                                        value={formState.university}
                                        onChange={(e) => setFormState({ ...formState, university: e.target.value })}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                                    <DatePicker
                                        selected={formState.startDate}
                                        onChange={(date) => setFormState({ ...formState, startDate: date })}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-gray-700">End Date</label>
                                    <DatePicker
                                        selected={formState.endDate}
                                        onChange={(date) => setFormState({ ...formState, endDate: date })}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleSave}
                                    className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={closeEditModal}
                                    className="ml-4 bg-gray-200 text-gray-800 h-[40px] w-[120px] rounded-lg hover:bg-gray-300 focus:outline-none"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {successMessage && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-[#E65F2B] p-8 rounded-lg text-center text-white">
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

export default Education;
