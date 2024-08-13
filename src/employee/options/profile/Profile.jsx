import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdCancelPresentation } from 'react-icons/md';
import Education from './Education';
import Documents from './Documents';
import UpdatePassword from './UpdatePassword'; // Import the new component

const Profile = () => {
    // State for active tab
    const [activeTab, setActiveTab] = useState('personal');

    // State for modal visibility
    const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isAddressesModalOpen, setIsAddressesModalOpen] = useState(false);
    const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

    // State for form values
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const [contactInfo, setContactInfo] = useState({
        officialEmail: '',
        personalEmail: '',
        phoneNumber: '',
        alternatePhone: '',
    });

    const [addressInfo, setAddressInfo] = useState({
        currentAddress: '',
        permanentAddress: '',
        houseType: '',
        currentResidenceSince: '',
        currentResidence: '',
    });

    // Handlers for opening and closing modals
    const handleOpenPersonalModal = () => setIsPersonalModalOpen(true);
    const handleClosePersonalModal = () => setIsPersonalModalOpen(false);

    const handleOpenContactModal = () => setIsContactModalOpen(true);
    const handleCloseContactModal = () => setIsContactModalOpen(false);

    const handleOpenAddressesModal = () => setIsAddressesModalOpen(true);
    const handleCloseAddressesModal = () => setIsAddressesModalOpen(false);

    const handleOpenDocumentsModal = () => setIsDocumentsModalOpen(true);
    const handleCloseDocumentsModal = () => setIsDocumentsModalOpen(false);

    const handleOpenEducationModal = () => setIsEducationModalOpen(true);
    const handleCloseEducationModal = () => setIsEducationModalOpen(false);

    // Handler for form value changes
    const handleChangePersonalInfo = (e) => {
        const { id, value } = e.target;
        setPersonalInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleChangeContactInfo = (e) => {
        const { id, value } = e.target;
        setContactInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleChangeAddressInfo = (e) => {
        const { id, value } = e.target;
        setAddressInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleSavePersonalInfo = () => {
        handleClosePersonalModal();
    };

    const handleSaveContactInfo = () => {
        handleCloseContactModal();
    };

    const handleSaveAddressInfo = () => {
        handleCloseAddressesModal();
    };

    const navHeight = '60px';

    return (
        <div className="min-h-screen pb-10">
            <div className="ml-3 mb-4 flex flex-col md:flex-row justify-between">
                <div className="mt-3">
                    <h1 className="font-semibold text-lg">Employee</h1>
                    <h1 className="text-sm mt-2">Dashboard / Employee</h1>
                </div>
            </div>

            <nav className="bg-[#E65F2B] mr-10 ml-10 flex m-5" style={{ height: navHeight }}>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${activeTab === 'personal' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal Information
                </div>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${activeTab === 'education' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </div>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${activeTab === 'documents' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('documents')}
                >
                    Documents
                </div>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${activeTab === 'password' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('password')}
                >
                    Update Password
                </div>
            </nav>

            {activeTab === 'personal' && (
                <div className="bg-white ml-10 mr-10 p-6">
                    <div className="flex justify-between items-center py-2 m-2">
                        <h1 className="text-lg text-[#E65F2B]">PERSONAL INFO</h1>
                        <FiEdit className="text-xl text-[#E65F2B]" onClick={handleOpenPersonalModal} />
                    </div>

                    <hr className="border-t-2 border-[#E65F2B] mb-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="m-2">
                            <label htmlFor="firstName" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={personalInfo.firstName}
                                onChange={handleChangePersonalInfo}
                                className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="lastName" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={personalInfo.lastName}
                                onChange={handleChangePersonalInfo}
                                className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="email" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={personalInfo.email}
                                onChange={handleChangePersonalInfo}
                                className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                            />
                        </div>
                        <div className="m-2">
                            <label htmlFor="phone" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                value={personalInfo.phone}
                                onChange={handleChangePersonalInfo}
                                className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                            />
                        </div>
                    </div>

                    <div className="bg-white mt-3">
                        <div className="flex justify-between items-center py-4">
                            <h1 className="text-lg text-[#E65F2B]">CONTACT INFO</h1>
                            <FiEdit className="text-xl text-[#E65F2B]" onClick={handleOpenContactModal} />
                        </div>

                        <hr className="border-t-2 border-[#E65F2B] mb-4" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="m-2">
                                <label htmlFor="officialEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Official Email
                                </label>
                                <input
                                    id="officialEmail"
                                    type="email"
                                    value={contactInfo.officialEmail}
                                    onChange={handleChangeContactInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="personalEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Personal Email
                                </label>
                                <input
                                    id="personalEmail"
                                    type="email"
                                    value={contactInfo.personalEmail}
                                    onChange={handleChangeContactInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="phoneNumber" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Phone Number
                                </label>
                                <input
                                    id="phoneNumber"
                                    type="tel"
                                    value={contactInfo.phoneNumber}
                                    onChange={handleChangeContactInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="alternatePhone" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Alternate Phone
                                </label>
                                <input
                                    id="alternatePhone"
                                    type="tel"
                                    value={contactInfo.alternatePhone}
                                    onChange={handleChangeContactInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white mt-3">
                        <div className="flex justify-between items-center py-4">
                            <h1 className="text-lg text-[#E65F2B]">ADDRESS</h1>
                            <FiEdit className="text-xl text-[#E65F2B]" onClick={handleOpenAddressesModal} />
                        </div>

                        <hr className="border-t-2 border-[#E65F2B] mb-4" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="m-2">
                                <label htmlFor="currentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Current Address
                                </label>
                                <input
                                    id="currentAddress"
                                    type="text"
                                    value={addressInfo.currentAddress}
                                    onChange={handleChangeAddressInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="permanentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Permanent Address
                                </label>
                                <input
                                    id="permanentAddress"
                                    type="text"
                                    value={addressInfo.permanentAddress}
                                    onChange={handleChangeAddressInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="houseType" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    House Type
                                </label>
                                <input
                                    id="houseType"
                                    type="text"
                                    value={addressInfo.houseType}
                                    onChange={handleChangeAddressInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="currentResidenceSince" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Current Residence Since
                                </label>
                                <input
                                    id="currentResidenceSince"
                                    type="text"
                                    value={addressInfo.currentResidenceSince}
                                    onChange={handleChangeAddressInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                            <div className="m-2">
                                <label htmlFor="currentResidence" className="block text-lg font-medium text-[#E65F2B] mb-3">
                                    Current Residence
                                </label>
                                <input
                                    id="currentResidence"
                                    type="text"
                                    value={addressInfo.currentResidence}
                                    onChange={handleChangeAddressInfo}
                                    className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'education' && <Education />}

           {activeTab === 'documents' && (
                <Documents
                    handleOpenDocumentsModal={handleOpenDocumentsModal}
                    handleCloseDocumentsModal={handleCloseDocumentsModal}
                    isDocumentsModalOpen={isDocumentsModalOpen}
                />
            )}

            {activeTab === 'password' && <UpdatePassword />}

           
            {isPersonalModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                    <h2 className="text-xl  text-orange-500 mb-4">Edit Personal Information</h2>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="firstName" className="mb-2 font-medium text-orange-500">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={personalInfo.firstName}
                            onChange={handleChangePersonalInfo}
                            className="border border-orange-500 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="lastName" className="mb-2 font-medium text-orange-500">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            value={personalInfo.lastName}
                            onChange={handleChangePersonalInfo}
                            className="border border-orange-500 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-2 font-medium text-orange-500">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={personalInfo.email}
                            onChange={handleChangePersonalInfo}
                            className="border border-orange-500 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="phone" className="mb-2 font-medium text-orange-500">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            value={personalInfo.phone}
                            onChange={handleChangePersonalInfo}
                            className="border border-orange-500 rounded-lg p-2"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleSavePersonalInfo}
                            className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleClosePersonalModal}
                            className="bg-gray-300 text-blackh-[40px] w-[120px] rounded-lg ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            
            )}

            {/* Modal for Contact Information */}
            {isContactModalOpen && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-lg w-full max-w-md">
                   <h2 className="text-xl mb-4 text-orange-500">Edit Contact Information</h2>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="officialEmail" className="mb-2 font-medium text-orange-500">Official Email</label>
                       <input
                           id="officialEmail"
                           type="email"
                           value={contactInfo.officialEmail}
                           onChange={handleChangeContactInfo}
                           className="border border-orange-500 rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="personalEmail" className="mb-2 font-medium text-orange-500">Personal Email</label>
                       <input
                           id="personalEmail"
                           type="email"
                           value={contactInfo.personalEmail}
                           onChange={handleChangeContactInfo}
                           className="border border-orange-500 rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="phoneNumber" className="mb-2 font-medium text-orange-500">Phone Number</label>
                       <input
                           id="phoneNumber"
                           type="tel"
                           value={contactInfo.phoneNumber}
                           onChange={handleChangeContactInfo}
                           className="border border-orange-500 rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="alternatePhone" className="mb-2 font-medium text-orange-500">Alternate Phone</label>
                       <input
                           id="alternatePhone"
                           type="tel"
                           value={contactInfo.alternatePhone}
                           onChange={handleChangeContactInfo}
                           className="border border-orange-500 rounded-lg p-2"
                       />
                   </div>
                   <div className="flex justify-end">
                       <button
                           onClick={handleSaveContactInfo}
                           className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg"
                       >
                           Save
                       </button>
                       <button
                           onClick={handleCloseContactModal}
                           className="bg-gray-300 text-black h-[40px] w-[120px] rounded-lg ml-2"
                       >
                           Cancel
                       </button>
                   </div>
               </div>
           </div>
           
            )}

            {/* Modal for Addresses */}
            {isAddressesModalOpen && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-lg w-full max-w-md">
                   <h2 className="text-xl mb-4 text-[#E65F2B]">Edit Address Information</h2>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="currentAddress" className="mb-2 font-medium text-[#E65F2B]">Current Address</label>
                       <input
                           id="currentAddress"
                           type="text"
                           value={addressInfo.currentAddress}
                           onChange={handleChangeAddressInfo}
                           className="border border-[#E65F2B] rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="permanentAddress" className="mb-2 font-medium text-[#E65F2B]">Permanent Address</label>
                       <input
                           id="permanentAddress"
                           type="text"
                           value={addressInfo.permanentAddress}
                           onChange={handleChangeAddressInfo}
                           className="border border-[#E65F2B] rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="houseType" className="mb-2 font-medium text-[#E65F2B]">House Type</label>
                       <input
                           id="houseType"
                           type="text"
                           value={addressInfo.houseType}
                           onChange={handleChangeAddressInfo}
                           className="border border-[#E65F2B] rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="currentResidenceSince" className="mb-2 font-medium text-[#E65F2B]">Current Residence Since</label>
                       <input
                           id="currentResidenceSince"
                           type="text"
                           value={addressInfo.currentResidenceSince}
                           onChange={handleChangeAddressInfo}
                           className="border border-[#E65F2B] rounded-lg p-2"
                       />
                   </div>
                   <div className="flex flex-col mb-4">
                       <label htmlFor="currentResidence" className="mb-2 font-medium text-[#E65F2B]">Current Residence</label>
                       <input
                           id="currentResidence"
                           type="text"
                           value={addressInfo.currentResidence}
                           onChange={handleChangeAddressInfo}
                           className="border border-[#E65F2B] rounded-lg p-2"
                       />
                   </div>
                   <div className="flex justify-end">
                       <button
                           onClick={handleSaveAddressInfo}
                           className="bg-[#E65F2B] text-white h-[40px] w-[120px] rounded-lg"
                       >
                           Save
                       </button>
                       <button
                           onClick={handleCloseAddressesModal}
                           className="bg-gray-300 text-black h-[40px] w-[120px] rounded-lg ml-2"
                       >
                           Cancel
                       </button>
                   </div>
               </div>
           </div>
            )}

            {/* Modal for Documents (from Documents component) */}
           

            {/* Modal for Education */}
            {isEducationModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-xl mb-4">Edit Education</h2>
                        {/* Content of Education modal */}
                        <Education />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCloseEducationModal}
                                className="bg-gray-300 text-black h-[40px] w-[120px] rounded-lg ml-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Update Password */}
           
        </div>
    );
};

export default Profile;
