import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const initialEducationData = [{
    id: 1,
    degree: "B.Tech",
    institution: "AITAM",
    university: "JNTUK",
    startYear: "02-03-2019",
    endYear: "04-08-2023"
}];

const Education = ({ handleOpenModal, handleCloseModal, isModalOpen }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [degree, setDegree] = useState('');
    const [institution, setInstitution] = useState('');
    const [university, setUniversity] = useState('');
    const [educationData, setEducationData] = useState(initialEducationData);

    const handleSave = () => {
        const newId = educationData.length ? Math.max(...educationData.map(item => item.id)) + 1 : 1;
        const newEducation = {
            id: newId,
            degree,
            institution,
            university,
            startYear: startDate ? format(startDate, 'dd-MM-yyyy') : '',
            endYear: endDate ? format(endDate, 'dd-MM-yyyy') : ''
        };
        setEducationData([...educationData, newEducation]);
        resetForm();
        handleCloseModal();
    };

    const resetForm = () => {
        setDegree('');
        setInstitution('');
        setUniversity('');
        setStartDate(null);
        setEndDate(null);
    };

    return (
        <div className='bg-white ml-10 mr-10 p-5 h-[500px] flex flex-col'>
            <div className="flex justify-between items-center py-4">
                <h1 className="text-xl text-[#E65F2B]">EDUCATION INFO</h1>
                <FiEdit className="text-xl text-[#E65F2B]" aria-label="Edit" />
            </div>
            <hr className="border-t-2 border-[#E65F2B] mb-4" />
            <div className="flex-grow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#E65F2B]">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Degree</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Year</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Year</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-auto flex justify-start">
                <button
                    className="flex items-center text-xl bg-[#E65F2B] text-white h-[50px] w-[120px] justify-center rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                    onClick={handleOpenModal}
                >
                    <FaPlusCircle className="text-3xl mr-2" aria-hidden="true" />
                    Add
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg relative ">
                        <h2 className="text-xl font-semibold mb-4 text-[#E65F2B]">Add Education Info</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <select
                                    id="degreeType"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
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
                                        value={institution}
                                        onChange={(e) => setInstitution(e.target.value)}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="universityName" className="block text-gray-700">University</label>
                                    <input
                                        type="text"
                                        id="universityName"
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-gray-700">End Date</label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat="dd-MM-yyyy"
                                        className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center gap-4">
                                <button
                                    onClick={handleSave}
                                    className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-transparent border border-orange-500 h-[40px] w-[120px] rounded-lg hover:bg-[#E65F2B] focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
