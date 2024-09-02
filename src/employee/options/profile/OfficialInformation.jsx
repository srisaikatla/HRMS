/* eslint-disable react/prop-types */
import { useState, useCallback } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux';

// Modal Component
const Modal = ({ isVisible, onClose, onSave, officialInfo, handleChange }) => {
    if (!isVisible) return null;

    const { dateOfJoining, designation, department, reportingTo } = officialInfo;

    // Determine visibility of fields based on values
    const isDepartmentVisible = designation !== '';
    const isReportingToVisible = department !== '';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 w-full">
                <h2 className="text-lg font-bold text-[#2A546D] mb-4">Edit Official Information</h2>
                <form>
                    <div className="mb-4">
                        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
                            <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#2A546D] mb-2">
                                Date of Joining
                            </label>
                            <input
                                id="dateOfJoining"
                                type="date"
                                value={dateOfJoining}
                                onChange={handleChange}
                                className="block w-full border border-[#2A546D] rounded-lg h-10 text-lg px-3 sm:h-9 sm:text-base sm:px-2"
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="designation" className="block text-lg font-medium text-[#2A546D] mb-2">
                            Designation
                        </label>
                        <input
                            id="designation"
                            type="text"
                            value={designation}
                            onChange={handleChange}
                            onBlur={() => {
                                if (designation) {
                                    document.getElementById('department').focus();
                                }
                            }}
                            className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                        />
                    </div>
                    {isDepartmentVisible && (
                        <div className="mb-4">
                            <label htmlFor="department" className="block text-lg font-medium text-[#2A546D] mb-2">
                                Department
                            </label>
                            <select
                                id="department"
                                value={department}
                                onChange={handleChange}
                                className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                            >
                                <option value="">Select Department</option>
                                <option value="IT">IT</option>
                                <option value="Non-IT">Non-IT</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Sales">Sales</option>
                                <option value="R&D">R&D</option>
                                <option value="Operations">Operations</option>
                                <option value="Legal">Legal</option>
                                <option value="Administration">Administration</option>
                                <option value="Customer Support">Customer Support</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    )}
                    {isDepartmentVisible && isReportingToVisible && (
                        <div className="mb-4">
                            <label htmlFor="reportingTo" className="block text-lg font-medium text-[#2A546D] mb-2">
                                Reporting To
                            </label>
                            <input
                                id="reportingTo"
                                type="text"
                                value={reportingTo}
                                onChange={handleChange}
                                className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                            />
                        </div>
                    )}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onSave}
                            className="bg-[#2A546D] text-white px-4 py-2 rounded-lg mr-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const OfficialInformation = () => {
    const auth = useSelector((state) => state.auth)
    // State for official information
    const [officialInfo, setOfficialInfo] = useState({
        dateOfJoining: auth.employee.joinDate,
        designation: auth.employee.designation,
        department: '',
        reportingTo: ''
    });

    // State for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler for input changes
    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setOfficialInfo(prev => ({ ...prev, [id]: value }));
    }, []);

    // Handler for opening the modal
    const openModal = () => setIsModalOpen(true);

    // Handler for closing the modal
    const closeModal = () => setIsModalOpen(false);

    // Handler for saving changes
    const saveChanges = () => {
        closeModal();
        // Add any additional save logic here if needed
    };

    return (
        <div className="bg-white p-6 ml-0 mr-0 md:ml-10 md:mr-10">
            <div className="flex justify-between items-center py-2 m-2">
                <h1 className="text-lg text-[#2A546D]">OFFICIAL INFO</h1>
                <FiEdit
                    className="text-xl text-[#2A546D] cursor-pointer"
                    onClick={openModal}
                />
            </div>
            <hr className="border-t-2 border-[#2A546D] mb-4" />

            <div className="flex flex-col items-center space-y-4">
                <div className="w-full lg:w-1/2">
                    <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Date of Joining
                    </label>
                    <input
                        id="dateOfJoining"
                        type="date"
                        value={officialInfo.dateOfJoining}
                        onChange={handleChange}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <label htmlFor="designation" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Designation
                    </label>
                    <input
                        id="designation"
                        type="text"
                        value={officialInfo.designation}
                        onChange={handleChange}
                        onBlur={() => {
                            if (officialInfo.designation) {
                                document.getElementById('department').focus();
                            }
                        }}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>
                {officialInfo.designation && (
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="department" className="block text-lg font-medium text-[#2A546D] mb-2">
                            Department
                        </label>
                        <select
                            id="department"
                            value={officialInfo.department}
                            onChange={handleChange}
                            className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                        >
                            <option value="">Select Department</option>
                            <option value="IT">IT</option>
                            <option value="Non-IT">Non-IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="R&D">R&D</option>
                            <option value="Operations">Operations</option>
                            <option value="Legal">Legal</option>
                            <option value="Administration">Administration</option>
                            <option value="Customer Support">Customer Support</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                )}
                {officialInfo.designation && officialInfo.department && (
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="reportingTo" className="block text-lg font-medium text-[#2A546D] mb-2">
                            Reporting To
                        </label>
                        <input
                            id="reportingTo"
                            type="text"
                            value={officialInfo.reportingTo}
                            onChange={handleChange}
                            className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                        />
                    </div>
                )}
            </div>

            {/* Modal for editing official information */}
            <Modal
                isVisible={isModalOpen}
                onClose={closeModal}
                onSave={saveChanges}
                officialInfo={officialInfo}
                handleChange={handleChange}
            />
        </div>
    );
};

export default OfficialInformation;
