// import React, { useState } from "react";
// import { BiEditAlt } from "react-icons/bi";

// const BankAccount = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [bankDetails, setBankDetails] = useState({
//     accountHolderName: "John Doe",
//     bankName: "Sample Bank",
//     accountNumber: "1234567890",
//     branchName: "Main Branch",
//     city: "Sample City",
//     ifscCode: "SBIN0001234",
//   });

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//     // Save logic goes here
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     // Reset logic goes here if needed
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBankDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   return (
//     <div id="bank-account" className="ml-9 mr-3 w-auto bg-white p-3 rounded-lg">
//       <div className="flex justify-between items-center px-6 border-b border-[#E65F2B]">
//         <h3 className="mt-6 font-semibold text-[24px] mb-8 text-[#E65F2B]">
//           Salary Account Details
//         </h3>
//         <div className="flex justify-between mb-4">
//           <button onClick={handleEditClick}>
//             <BiEditAlt className="text-[25px] text-[#E65F2B]" />
//           </button>
//         </div>
//       </div>
//       <div className="w-full p-6">
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">
//               Account Holder Name
//             </label>
//             <input
//               type="text"
//               name="accountHolderName"
//               value={bankDetails.accountHolderName}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">
//               Bank Name
//             </label>
//             <input
//               type="text"
//               name="bankName"
//               value={bankDetails.bankName}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">
//               Account Number
//             </label>
//             <input
//               type="text"
//               name="accountNumber"
//               value={bankDetails.accountNumber}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">
//               Branch Name
//             </label>
//             <input
//               type="text"
//               name="branchName"
//               value={bankDetails.branchName}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">City</label>
//             <input
//               type="text"
//               name="city"
//               value={bankDetails.city}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-[20px] mb-1">
//               IFSC Code
//             </label>
//             <input
//               type="text"
//               name="ifscCode"
//               value={bankDetails.ifscCode}
//               onChange={handleChange}
//               disabled={!isEditing}
//               className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
//             />
//           </div>
//         </div>
//         {isEditing && (
//           <div className="flex justify-center gap-4 mt-4">
//             <button
//               onClick={handleSaveClick}
//               className="text-white bg-[#E65F2B] border border-[#E65F2B] w-[100px] text-[18px] font-semibold py-1 rounded-md"
//             >
//               Save
//             </button>
//             <button
//               onClick={handleCancelClick}
//               className="text-[#E65F2B] border border-[#E65F2B] bg-white w-[100px] text-[18px] font-semibold py-1 rounded-md"
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BankAccount;
import React, { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

const BankAccount = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "Current Bank Name",
    accountNumber: "Current Account Number",
    branchName: "Current Branch Name",
    city: "Current City",
    ifscCode: "Current IFSC Code",
  });

  const bankNameRef = useRef(null);
  const accountNumberRef = useRef(null);
  const branchNameRef = useRef(null);
  const cityRef = useRef(null);
  const ifscCodeRef = useRef(null);

  const handleEditClick = (ref) => {
    if (showEdit) {
      ref.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowEdit(false);
    alert("Data Saved Successfully");
  };

  const handleCancel = () => {
    setShowEdit(false);
    setFormData({
      bankName: "Current Bank Name",
      accountNumber: "Current Account Number",
      branchName: "Current Branch Name",
      city: "Current City",
      ifscCode: "Current IFSC Code",
    });
  };

  return (
    <div className="md:px-4 py-2 min-h-screen">
      <h1 className="font-bold text-xl text-[#2A546D]">Employee</h1>
      <p className="font-semibold my-1 text-[#2A546D]">
        <span>Dashboard</span> / <span>Bank account details</span>
      </p>

      <div className="bg-white my-5">
        <div className="p-2 md:p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-[#2A546D] font-semibold text-sm md:text-xl">
              SALARY ACCOUNT DETAILS
            </h1>
            <button className="md:text-2xl" onClick={() => setShowEdit(!showEdit)}>
              {!showEdit && <FiEdit className=" md:mr-5 text-[#2A546D]" />}
            </button>
          </div>
          <div className="md:pl-2 my-4">
            <div className="flex flex-col gap-y-1 md:flex-row md:gap-6 my-3">
              <p className="text-[#2A546D]">Account Holder's Name : </p>
              <strong className="text-[#2A546D]">K. Navaneetha</strong>
            </div>

            <form onSubmit={handleSave}>
              <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-4 md:mr-5">
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Bank Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(bankNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="bankName"
                    onChange={handleInputChange}
                    value={formData.bankName}
                    disabled={!showEdit}
                    ref={bankNameRef}
                    className="border border-[#2A546D] outline-none p-1 md:p-2 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Account Number</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(accountNumberRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="accountNumber"
                    onChange={handleInputChange}
                    value={formData.accountNumber}
                    disabled={!showEdit}
                    ref={accountNumberRef}
                    className="border border-[#2A546D] outline-none p-1 md:p-2 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">Branch Name</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(branchNameRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="branchName"
                    onChange={handleInputChange}
                    value={formData.branchName}
                    disabled={!showEdit}
                    ref={branchNameRef}
                    className="border border-[#2A546D] outline-none p-1 md:p-2 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">City</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(cityRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="city"
                    onChange={handleInputChange}
                    value={formData.city}
                    ref={cityRef}
                    disabled={!showEdit}
                    className="border border-[#2A546D] outline-none p-1 md:p-2 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <div className="flex justify-between">
                    <label className="text-[#2A546D]">IFSC Code</label>
                    <button
                      type="button"
                      onClick={() => handleEditClick(ifscCodeRef)}
                    >
                      {showEdit && (
                        <FiEdit className="md:text-lg  text-[#2A546D]" />
                      )}
                    </button>
                  </div>
                  <input
                    type="text"
                    name="ifscCode"
                    onChange={handleInputChange}
                    value={formData.ifscCode}
                    ref={ifscCodeRef}
                    disabled={!showEdit}
                    className="border border-[#2A546D] outline-none p-1 md:p-2 px-3 text-sm md:text-md rounded-md"
                  />
                </div>
              </div>
              {showEdit && (
                <div className=" mt-8 flex gap-5 justify-center">
                  <button
                    type="submit"
                    className="bg-[#2A546D] w-20 h-8 md:w-32 rounded-lg text-white font-semibold"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-white border w-20 h-8 md:w-32 border-[#2A546D] rounded-lg text-[#2A546D] font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
