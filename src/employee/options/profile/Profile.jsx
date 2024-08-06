import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdCancelPresentation } from 'react-icons/md';
import Education from './Education';
import Documents from './Documents';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isAddressesModalOpen, setIsAddressesModalOpen] = useState(false);
    const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

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

    const navHeight = '80px';

    return (
        <div className=" min-h-screen pb-10">
            <div className="ml-3 mb-4 flex flex-col md:flex-row justify-between">
                <div className="mt-3">
                    <h1 className="font-semibold text-xl">Employee</h1>
                    <h1 className="text-lg mt-2">Dashboard / Employee</h1>
                </div>
            </div>

            <nav className="bg-[#E65F2B] flex m-10" style={{ height: navHeight }}>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-xl ${activeTab === 'personal' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal Information
                </div>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-xl ${activeTab === 'education' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </div>
                <div
                    className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-xl ${activeTab === 'documents' ? 'bg-white text-black' : 'text-white'}`}
                    style={{ height: navHeight }}
                    onClick={() => setActiveTab('documents')}
                >
                    Documents
                </div>
            </nav>

            {
  activeTab === 'personal' && (
    <>
      <div className="bg-white ml-10 mr-10 p-5">
        <div className="flex justify-between items-center py-4 m-2">
          <h1 className="text-xl text-[#E65F2B]">PERSONAL INFO</h1>
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
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="lastName" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="email" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px] text-xl"
            />
          </div>
          <div className="m-2">
            <label htmlFor="phone" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white mr-10 ml-10 mt-3 p-5">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl text-[#E65F2B]">CONTACT INFO</h1>
          <FiEdit className="text-xl text-[#E65F2B]" onClick={handleOpenContactModal} />
        </div>

        <hr className="border-t-2 border-[#E65F2B] mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="m-2">
            <label htmlFor="officialEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Official Email ID
            </label>
            <input
              id="officialEmail"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="personalEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Personal Email ID
            </label>
            <input
              id="personalEmail"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="emailOfficial" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Official Email ID
            </label>
            <input
              id="emailOfficial"
              type="email"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px] text-xl"
            />
          </div>
          <div className="m-2">
            <label htmlFor="personal" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Personal Email ID
            </label>
            <input
              id="personal"
              type="tel"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white mr-10 ml-10 mt-3 p-5">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl text-[#E65F2B]">ADDRESSES</h1>
          <FiEdit className="text-xl text-[#E65F2B]" onClick={handleOpenAddressesModal} />
        </div>

        <hr className="border-t-2 border-[#E65F2B]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="m-2">
            <label htmlFor="currentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Current Address
            </label>
            <input
              id="currentAddress"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="permanentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Permanent Address
            </label>
            <input
              id="permanentAddress"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="houseType" className="block text-lg font-medium text-[#E65F2B] mb-3">
              House Type
            </label>
            <input
              id="houseType"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="currentResidenceSince" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Staying at Current Residence Since
            </label>
            <input
              id="currentResidenceSince"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
          <div className="m-2">
            <label htmlFor="currentResidence" className="block text-lg font-medium text-[#E65F2B] mb-3">
              Current Residence Address
            </label>
            <input
              id="currentResidence"
              type="text"
              className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}


            {activeTab === 'education' && (
                <Education
                    handleOpenModal={handleOpenEducationModal}
                    handleCloseModal={handleCloseEducationModal}
                    isModalOpen={isEducationModalOpen}
                />
            )}

            {activeTab === 'documents' && (
                <Documents
                    handleOpenDocumentsModal={handleOpenDocumentsModal}
                    handleCloseDocumentsModal={handleCloseDocumentsModal}
                    isDocumentsModalOpen={isDocumentsModalOpen}
                />
            )}

            {/* Modals */}
            {isPersonalModalOpen && (
               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-8 rounded-lg shadow-lg relative w-[50vw]">
                   <button onClick={handleClosePersonalModal} className="absolute top-2 right-2 text-xl">
                   <MdCancelPresentation className="text-[#E65F2B] text-xl" />
                   </button>
                   <h1 className="text-xl text-[#E65F2B] mb-4">Edit Personal Information</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="relative m-2">
                           <label htmlFor="editFirstName" className="block text-lg font-medium text-[#E65F2B] mb-3">First Name</label>
                           <input id="editFirstName" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                           <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                       </div>
                       <div className="relative m-2">
                           <label htmlFor="editLastName" className="block text-lg font-medium text-[#E65F2B] mb-3">Last Name</label>
                           <input id="editLastName" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                           <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                       </div>
                       <div className="relative m-2">
                           <label htmlFor="editEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">Email</label>
                           <input id="editEmail" type="email" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px] text-xl" />
                           <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                       </div>
                       <div className="relative m-2">
                           <label htmlFor="editPhone" className="block text-lg font-medium text-[#E65F2B] mb-3">Phone Number</label>
                           <input id="editPhone" type="tel" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                           <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                       </div>
                   </div>
               </div>
           </div>
            )}

            {isContactModalOpen && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                 <div className="bg-white p-8 rounded-lg shadow-lg relative w-[50vw]">
                     <button onClick={handleCloseContactModal} className="absolute top-2 right-2 text-xl">
                     <MdCancelPresentation  className="text-[#E65F2B] text-xl" />
                     </button>
                     <h1 className="text-xl text-[#E65F2B] mb-4">Edit Contact Information</h1>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="relative m-2">
                             <label htmlFor="editOfficialEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">Official Email ID</label>
                             <input id="editOfficialEmail" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                             <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                         </div>
                         <div className="relative m-2">
                             <label htmlFor="editPersonalEmail" className="block text-lg font-medium text-[#E65F2B] mb-3">Personal Email ID</label>
                             <input id="editPersonalEmail" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                             <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                         </div>
                         <div className="relative m-2">
                             <label htmlFor="editEmailOfficial" className="block text-lg font-medium text-[#E65F2B] mb-3">Official Email ID</label>
                             <input id="editEmailOfficial" type="email" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px] text-xl" />
                             <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                         </div>
                         <div className="relative m-2">
                             <label htmlFor="editPersonal" className="block text-lg font-medium text-[#E65F2B] mb-3">Personal Email ID</label>
                             <input id="editPersonal" type="tel" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                             <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                         </div>
                     </div>
                 </div>
             </div>
            )}

            {isAddressesModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative w-[60vw]">
                      <button onClick={handleCloseAddressesModal} className="absolute top-2 right-2 text-xl">
                      <MdCancelPresentation  className="text-[#E65F2B] text-xl" />
                      </button>
                      <h1 className="text-xl text-[#E65F2B] mb-4">Edit Addresses</h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative m-2">
                              <label htmlFor="editCurrentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">Current Address</label>
                              <input id="editCurrentAddress" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                              <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                          </div>
                          <div className="relative m-2">
                              <label htmlFor="editPermanentAddress" className="block text-lg font-medium text-[#E65F2B] mb-3">Permanent Address</label>
                              <input id="editPermanentAddress" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                              <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                          </div>
                          <div className="relative m-2">
                              <label htmlFor="editHouseType" className="block text-lg font-medium text-[#E65F2B] mb-3">House Type</label>
                              <input id="editHouseType" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                              <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                          </div>
                          <div className="relative m-2">
                              <label htmlFor="editCurrentResidenceSince" className="block text-lg font-medium text-[#E65F2B] mb-3">Staying at Current Residence Since</label>
                              <input id="editCurrentResidenceSince" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                              <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                          </div>
                          <div className="relative m-2">
                              <label htmlFor="editCurrentResidence" className="block text-lg font-medium text-[#E65F2B] mb-3">Living in Current City Since</label>
                              <input id="editCurrentResidence" type="text" className="mt-1 block w-full border border-[#E65F2B] rounded-lg h-[60px]" />
                              <FiEdit className="absolute top-2 right-2 text-xl text-[#E65F2B]" />
                          </div>
                      </div>
                  </div>
              </div>
            )}

          
        </div>
    );
};

export default Profile;
