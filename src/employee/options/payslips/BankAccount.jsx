import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

const BankAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "John Doe",
    bankName: "Sample Bank",
    accountNumber: "1234567890",
    branchName: "Main Branch",
    city: "Sample City",
    ifscCode: "SBIN0001234",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save logic goes here
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset logic goes here if needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div id="bank-account" className="ml-9 mr-3 w-auto bg-white p-3 rounded-lg">
      <div className="flex justify-between items-center px-6 border-b border-[#E65F2B]">
        <h3 className="mt-6 font-semibold text-[24px] mb-8 text-[#E65F2B]">
          Salary Account Details
        </h3>
        <div className="flex justify-between mb-4">
          <button onClick={handleEditClick}>
            <BiEditAlt className="text-[25px] text-[#E65F2B]" />
          </button>
        </div>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold text-[20px] mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolderName"
              value={bankDetails.accountHolderName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
          <div>
            <label className="block font-semibold text-[20px] mb-1">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={bankDetails.bankName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
          <div>
            <label className="block font-semibold text-[20px] mb-1">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
          <div>
            <label className="block font-semibold text-[20px] mb-1">
              Branch Name
            </label>
            <input
              type="text"
              name="branchName"
              value={bankDetails.branchName}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
          <div>
            <label className="block font-semibold text-[20px] mb-1">City</label>
            <input
              type="text"
              name="city"
              value={bankDetails.city}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
          <div>
            <label className="block font-semibold text-[20px] mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              name="ifscCode"
              value={bankDetails.ifscCode}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border border-[#E65F2B] border-opacity-30 rounded-md text-lg font-normal"
            />
          </div>
        </div>
        {isEditing && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleSaveClick}
              className="text-white bg-[#E65F2B] border border-[#E65F2B] w-[100px] text-[18px] font-semibold py-1 rounded-md"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="text-[#E65F2B] border border-[#E65F2B] bg-white w-[100px] text-[18px] font-semibold py-1 rounded-md"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankAccount;
