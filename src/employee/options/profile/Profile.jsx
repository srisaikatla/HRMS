import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdCancelPresentation } from "react-icons/md";
import Education from "./Education";
import Documents from "./Documents";
import UpdatePassword from "./UpdatePassword"; // Import the new component
import OfficialInformation from "./OfficialInformation";
import { FaUser, FaBriefcase, FaFile, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("personal");

  // State for modal visibility
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  // State for form values
  const [personalInfo, setPersonalInfo] = useState({
    employeeId: auth.employee?.employeeId,
    firstName: auth.employee?.firstName,
    lastName: auth.employee?.lastName,
    bloodGroup: auth.employee?.bloodGroup,
    dob: auth.employee?.dob,
    officialEmail: auth.employee?.email,
  });

  const [contactInfo, setContactInfo] = useState({
    personalEmail: auth.employee?.personalEmail,
    phoneNumber: auth.employee?.phoneNumber,
    alternatePhone: auth.employee?.alternatePhoneNumber,
  });

  const handleOpenContactModal = () => setIsContactModalOpen(true);
  const handleCloseContactModal = () => setIsContactModalOpen(false);

  const handleOpenDocumentsModal = () => setIsDocumentsModalOpen(true);
  const handleCloseDocumentsModal = () => setIsDocumentsModalOpen(false);

  // Handler for form value changes
  const handleChangePersonalInfo = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleChangeContactInfo = (e) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveContactInfo = () => {
    handleCloseContactModal();
  };

  const navHeight = "60px";

  return (
    <div className="min-h-screen p-4 mt-4">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Profile
          </span>
        </div>
      </div>

      <nav
        className="bg-[#2A546D] mx-0 md:mx-10 flex m-5"
        style={{ height: navHeight }}
      >
        {/* Desktop View */}
        <div className="hidden lg:flex flex-grow">
          {["personal", "documents", "password"].map((tab) => (
            <div
              key={tab}
              className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-lg ${
                activeTab === tab ? "bg-white text-black" : "text-white"
              }`}
              style={{ height: navHeight }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "personal" && "Personal Information"}
              {/* {tab === "official" && "Official Information"} */}
              {tab === "documents" && "Documents"}
              {tab === "password" && "Update Password"}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden flex-grow ">
          {[
            { tab: "personal", icon: <FaUser /> },
            // { tab: "official", icon: <FaBriefcase /> },
            { tab: "documents", icon: <FaFile /> },
            { tab: "password", icon: <FaLock /> },
          ].map(({ tab, icon }) => (
            <div
              key={tab}
              className={`flex-grow flex items-center justify-center cursor-pointer transition-colors duration-300 text-2xl ${
                activeTab === tab ? "bg-white text-black" : "text-white"
              }`}
              style={{ height: navHeight }}
              onClick={() => setActiveTab(tab)}
            >
              {icon}
            </div>
          ))}
        </div>
      </nav>

      {activeTab === "personal" && (
        <div className="bg-white p-6 md:mx-10">
          <div className="flex justify-between items-center py-2 m-2">
            <h1 className="text-lg font-semibold text-[#2A546D]">
              PERSONAL INFO
            </h1>
          </div>

          <hr className="border-t-2 border-[#2A546D] mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="m-2">
              <label
                htmlFor="firstName"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                Employee ID
              </label>
              <input
                id="employeeId"
                type="text"
                readOnly
                value={personalInfo.employeeId}
                onChange={handleChangePersonalInfo}
                className="mt-1 block w-full border focus:outline-none border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="firstName"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                readOnly
                value={personalInfo.firstName}
                onChange={handleChangePersonalInfo}
                className="mt-1 block focus:outline-none  w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="lastName"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                readOnly
                value={personalInfo.lastName}
                onChange={handleChangePersonalInfo}
                className="mt-1 block focus:outline-none  w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="bloodGroup"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                Blood Group
              </label>
              <input
                id="bloodGroup"
                type="text"
                readOnly
                value={personalInfo.bloodGroup}
                onChange={handleChangePersonalInfo}
                className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="dob"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                readOnly
                value={personalInfo.dob}
                onChange={handleChangePersonalInfo}
                className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
            <div className="m-2">
              <label
                htmlFor="officialEmail"
                className="block text-lg font-medium text-[#2A546D] mb-3"
              >
                Official Email ID
              </label>
              <input
                id="officialEmail"
                type="email"
                readOnly
                value={personalInfo.officialEmail}
                onChange={handleChangeContactInfo}
                className="mt-1 focus:outline-none  block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
              />
            </div>
          </div>

          <div className="bg-white mt-3">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-lg text-[#2A546D]">CONTACT INFO</h1>
              <FiEdit
                className="text-xl text-[#2A546D]"
                onClick={handleOpenContactModal}
              />
            </div>

            <hr className="border-t-2 border-[#2A546D] mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="m-2">
                <label
                  htmlFor="personalEmail"
                  className="block text-lg font-medium text-[#2A546D] mb-3"
                >
                  Personal Email ID
                </label>
                <input
                  id="personalEmail"
                  type="email"
                  value={contactInfo.personalEmail}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full focus:outline-[#2a546d]  border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                />
              </div>
              <div className="m-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium focus:outline-[#2a546d] text-[#2A546D] mb-3"
                >
                  Personal Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={contactInfo.phoneNumber}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full border focus:outline-[#2a546d]  border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                />
              </div>
              <div className="m-2">
                <label
                  htmlFor="alternatePhone"
                  className="block text-lg font-medium text-[#2A546D] mb-3"
                >
                  Alternate Phone Number
                </label>
                <input
                  id="alternatePhone"
                  type="tel"
                  value={contactInfo.alternatePhone}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full border focus:outline-[#2a546d]  border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-white mt-3">
            <Education
              degree="B.Tech"
              institution="AITAM"
              university="JNTUK"
              startYear="02-03-2019"
              endYear="04-08-2023"
            />
          </div>
        </div>
      )}
      {/* {activeTab === "official" && <OfficialInformation />} */}

      {activeTab === "documents" && (
        <Documents
          handleOpenDocumentsModal={handleOpenDocumentsModal}
          handleCloseDocumentsModal={handleCloseDocumentsModal}
          isDocumentsModalOpen={isDocumentsModalOpen}
        />
      )}
      {activeTab === "password" && <UpdatePassword />}

      {/* Contact Info Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 text-[#2A546D] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-3 py-4  rounded-lg shadow-lg w-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Edit Contact Info</h2>
              <MdCancelPresentation
                className="text-lg cursor-pointer"
                onClick={handleCloseContactModal}
              />
            </div>
            <hr className="border-t-2 border-[#2A546D] my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="m-2">
                <label
                  htmlFor="personalEmail"
                  className="block text-lg font-medium text-[#2A546D] mb-3"
                >
                  Personal Email ID
                </label>
                <input
                  id="personalEmail"
                  type="email"
                  value={contactInfo.personalEmail}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
                />
              </div>
              <div className="m-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium text-[#2A546D] mb-3"
                >
                  Personal Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={contactInfo.phoneNumber}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
                />
              </div>
              <div className="m-2">
                <label
                  htmlFor="alternatePhone"
                  className="block text-lg font-medium text-[#2A546D] mb-3"
                >
                  Alternate Phone Number
                </label>
                <input
                  id="alternatePhone"
                  type="tel"
                  value={contactInfo.alternatePhone}
                  onChange={handleChangeContactInfo}
                  className="mt-1 block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSaveContactInfo}
                className="bg-[#2A546D] text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
