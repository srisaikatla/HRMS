import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [formError, setFormError] = useState('');

    const handleChangeCurrentPassword = (e) => setCurrentPassword(e.target.value);
    const handleChangeNewPassword = (e) => setNewPassword(e.target.value);
    const handleChangeConfirmNewPassword = (e) => setConfirmNewPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (currentPassword && newPassword && confirmNewPassword) {
            if (newPassword === confirmNewPassword) {
                // Add logic to update the password here (e.g., API call)
                setPopupMessage('Password updated successfully!');
                setShowPopup(true); // Show the popup

                // Hide popup after 2 seconds
                setTimeout(() => {
                    setShowPopup(false);
                }, 2000);
            } else {
                setPopupMessage('Passwords do not match.');
                setShowPopup(true); // Show the popup

                // Hide popup after 2 seconds
                setTimeout(() => {
                    setShowPopup(false);
                }, 2000);
            }
        } else {
            setFormError('All fields are required.');
        }
    };

    return (
        <div className="bg-white ml-10 mr-10 mt-5 p-4">
            <h1 className="text-lg text-[#E65F2B]">UPDATE PASSWORD</h1>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex justify-center">
                    <div className="w-200">
                        <label htmlFor="currentPassword" className="block text-lg font-medium text-[#E65F2B] mb-3">
                            Current Password
                        </label>
                        <input
                            id="currentPassword"
                            type="password"
                            value={currentPassword}
                            onChange={handleChangeCurrentPassword}
                            required
                            className="block w-[400px] border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                        <p className="text-red-500 mt-1 text-sm">Required*</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="w-200">
                        <label htmlFor="newPassword" className="block text-lg font-medium text-[#E65F2B] mb-3">
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={handleChangeNewPassword}
                            required
                            className="block w-[400px] border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                        <p className="text-red-500 mt-1 text-sm">Required*</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="w-200">
                        <label htmlFor="confirmNewPassword" className="block text-lg font-medium text-[#E65F2B] mb-3">
                            Confirm New Password
                        </label>
                        <input
                            id="confirmNewPassword"
                            type="password"
                            value={confirmNewPassword}
                            onChange={handleChangeConfirmNewPassword}
                            required
                            className="block w-[400px] border border-[#E65F2B] rounded-lg h-[40px] text-lg"
                        />
                        <p className="text-red-500 mt-1 text-sm">Required*</p>
                    </div>
                </div>

                {formError && (
                    <p className="text-red-500 text-center mt-4">{formError}</p>
                )}

                <div className="mt-4 text-center">
                    <button
                        type="submit"
                        disabled={!(currentPassword && newPassword && confirmNewPassword)}
                        className={`px-4 py-2 ${currentPassword && newPassword && confirmNewPassword ? 'bg-[#E65F2B]' : 'bg-gray-400'} text-white rounded-lg`}
                    >
                        Update Password
                    </button>
                </div>
            </form>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#E65F2B] p-8 rounded-lg text-center text-white">
                        <h2 className="text-3xl mb-2">
                            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
                        </h2>
                        <h2 className="text-lg font-semibold text-white">
                            {popupMessage.includes('successfully') ? 'Success!' : 'Error!'}
                        </h2>
                        <p className="mt-2 text-white">{popupMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdatePassword;

