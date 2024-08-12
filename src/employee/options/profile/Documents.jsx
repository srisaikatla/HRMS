import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";

const initialDocumentsData = [{
    id: 1,
    idType: "Aadhar",
    idNumber: "1234-5678-9101",
    isVerified: true,
    isSubmitted: false,
    fileName: "aadhar_card.pdf" // Example file name
}];

const Documents = ({ handleOpenDocumentsModal, handleCloseDocumentsModal, isDocumentsModalOpen }) => {
    const [idType, setIdType] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [documentsData, setDocumentsData] = useState(initialDocumentsData);

    const handleDocumentSave = () => {
        const newId = documentsData.length ? Math.max(...documentsData.map(item => item.id)) + 1 : 1;
        const newDocument = {
            id: newId,
            idType,
            idNumber,
            isVerified,
            isSubmitted,
            fileName
        };
        setDocumentsData(prevData => [...prevData, newDocument]);
        resetForm();
        handleCloseDocumentsModal();
    };

    const resetForm = () => {
        setIdType('');
        setIdNumber('');
        setIsVerified(false);
        setIsSubmitted(false);
        setFile(null);
        setFileName('');
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFileName(uploadedFile.name);
        }
    };

    return (
        <div className='bg-white ml-10 mr-10 p-5 h-[500px] flex flex-col'>
            <div className="flex justify-between items-center py-4">
                <h1 className="text-xl text-[#E65F2B]">ID PROOFS</h1>
                <FiEdit className="text-xl text-[#E65F2B]" aria-label="Edit" />
            </div>
            <hr className="border-t-2 border-[#E65F2B] mb-4" />
            <div className="flex-grow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Type</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Number</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verified</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Name</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {documentsData.map(item => (
                            <tr key={item.id}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.idType}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.idNumber}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.isVerified ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.isSubmitted ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.fileName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-auto flex justify-start">
                <button
                    className="flex items-center text-xl bg-[#E65F2B] text-white h-[50px] w-[120px] justify-center rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                    onClick={handleOpenDocumentsModal}
                >
                    <FaPlusCircle className="text-3xl mr-2" aria-hidden="true" />
                    Add
                </button>
            </div>

            {isDocumentsModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg w-[90%] md:w-[50%] relative ">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseDocumentsModal}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-[#E65F2B]">Add Document</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <select
                                    id="idType"
                                    value={idType}
                                    onChange={(e) => setIdType(e.target.value)}
                                    className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none text-[#E65F2B]"
                                    aria-label="ID Type"
                                >
                                    <option value="">Select ID Type</option>
                                    <option value="passport">Passport</option>
                                    <option value="driver_license">Driver License</option>
                                    <option value="id_card">Aadhar Card</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="idNumber" className="block text-gray-700">ID Number</label>
                                <input
                                    type="text"
                                    id="idNumber"
                                    value={idNumber}
                                    onChange={(e) => setIdNumber(e.target.value)}
                                    className="w-full border-b border-[#E65F2B] bg-transparent rounded-none p-2 focus:border-[#E65F2B] outline-none"
                                    placeholder="Enter ID Number"
                                    aria-label="ID Number"
                                />
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={isVerified}
                                        onChange={() => setIsVerified(!isVerified)}
                                        className="w-[30px] h-[30px] mr-2 accent-[#E65F2B]"
                                        aria-label="Verified"
                                    />
                                    <label className="text-lg text-[#E65F2B]">Photo Id</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={isSubmitted}
                                        onChange={() => setIsSubmitted(!isSubmitted)}
                                        className="w-[30px] h-[30px] mr-2 accent-[#E65F2B]"
                                        aria-label="Submitted"
                                    />
                                    <label className="text-lg text-[#E65F2B]">Date of Birth</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="border border-[#E65F2B] h-[60px] w-full text-white cursor-pointer file:bg-[#E65F2B] file:h-[60px] file:w-[150px] file:text-white file:border-[#E65F2B]"
                                    aria-label="Upload File"
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleDocumentSave}
                                    className="bg-[#E65F2B] text-white px-4 py-2 rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                                    aria-label="Save Document"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCloseDocumentsModal}
                                    className="bg-transparent border border-[#E65F2B] text-[#E65F2B] px-4 py-2 rounded-lg ml-2 hover:bg-[#E65F2B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
                                    aria-label="Cancel"
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

export default Documents;
