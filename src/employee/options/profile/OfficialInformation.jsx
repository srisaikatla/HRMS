import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

// Modal Component
const Modal = ({ isVisible, onClose, onSave, officialInfo, handleChange }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-lg font-bold text-[#E65F2B] mb-4">Edit Official Information</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#E65F2B] mb-2">
                            Date of Joining
                        </label>
                        <input
                            id="dateOfJoining"
                            type="date"
                            value={officialInfo.dateOfJoining}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="designation" className="block text-lg font-medium text-[#E65F2B] mb-2">
                            Designation
                        </label>
                        <input
                            id="designation"
                            type="text"
                            value={officialInfo.designation}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="department" className="block text-lg font-medium text-[#E65F2B] mb-2">
                            Department
                        </label>
                        <input
                            id="department"
                            type="text"
                            value={officialInfo.department}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reportingTo" className="block text-lg font-medium text-[#E65F2B] mb-2">
                            Reporting To
                        </label>
                        <input
                            id="reportingTo"
                            type="text"
                            value={officialInfo.reportingTo}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onSave}
                            className="bg-[#E65F2B] text-white px-4 py-2 rounded-lg mr-2"
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
    // State for official information
    const [officialInfo, setOfficialInfo] = useState({
        dateOfJoining: '',
        designation: '',
        department: '',
        reportingTo: ''
    });

    // State for modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler for input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setOfficialInfo(prev => ({ ...prev, [id]: value }));
    };

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
        <div className="bg-white ml-10 mr-10 p-6">
            <div className="flex justify-between items-center py-2 m-2">
                <h1 className="text-lg text-[#E65F2B]">OFFICIAL INFO</h1>
                <FiEdit
                    className="text-xl text-[#E65F2B] cursor-pointer"
                    onClick={openModal}
                />
            </div>
            <hr className="border-t-2 border-[#E65F2B] mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="m-2">
                    <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#E65F2B] mb-3">
                        Date of Joining
                    </label>
                    <input
                        id="dateOfJoining"
                        type="date"
                        value={officialInfo.dateOfJoining}
                        readOnly
                        className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                    />
                </div>
                <div className="m-2">
                    <label htmlFor="designation" className="block text-lg font-medium text-[#E65F2B] mb-3">
                        Designation
                    </label>
                    <input
                        id="designation"
                        type="text"
                        value={officialInfo.designation}
                        readOnly
                        className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                    />
                </div>
                <div className="m-2">
                    <label htmlFor="department" className="block text-lg font-medium text-[#E65F2B] mb-3">
                        Department
                    </label>
                    <input
                        id="department"
                        type="text"
                        value={officialInfo.department}
                        readOnly
                        className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                    />
                </div>
                <div className="m-2">
                    <label htmlFor="reportingTo" className="block text-lg font-medium text-[#E65F2B] mb-3">
                        Reporting To
                    </label>
                    <input
                        id="reportingTo"
                        type="text"
                        value={officialInfo.reportingTo}
                        readOnly
                        className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                    />
                </div>
            </div>

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
