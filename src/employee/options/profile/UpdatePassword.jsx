/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../../../Config/api';
const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [formError, setFormError] = useState('');
    const jwt = localStorage.getItem("employeeJwt")
    const auth = useSelector((state) => state.auth)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('New passwords do not match');
            return;
        }

        try {
            // Replace with your API endpoint
            const email = auth.employee.email  // You should get the user's email dynamically
            const response = await axios.put(`${API_BASE_URL}/employee/password/${email}`, {
                currentPassword,
                newPassword,
                confirmPassword,
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
                },
            },);
            if (response.data === "password updated successfully") {
                setPopupMessage('Password updated successfully!');
                setShowPopup(true); // Show the popup

                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');

                // Hide popup after 2 seconds
                setTimeout(() => {
                    setShowPopup(false);
                }, 2000);
            } else {
                setMessage(response.data);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage('Error updating password: ' + JSON.stringify(error.response.data));
            } else {
                setMessage('Error updating password: ' + error.message);
            }
        }
    };

    return (
        <div className="bg-white ml-10 mr-10 mt-5 p-4">
            <h1 className="text-lg text-[#2A546D]">UPDATE PASSWORD</h1>

            <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex justify-center">
                    <div className="w-200">
                        <label htmlFor="currentPassword" className="block text-lg font-medium text-[#2A546D] mb-3">
                            Current Password
                        </label>
                        <input
                            id="currentPassword"
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                            className="block w-[400px] border border-[#2A546D] rounded-lg h-[40px] text-lg"
                        />
                        <p className="text-red-500 mt-1 text-sm">Required*</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="w-200">
                        <label htmlFor="newPassword" className="block text-lg font-medium text-[#2A546D] mb-3">
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="block w-[400px] border border-[#2A546D] rounded-lg h-[40px] text-lg"
                        />
                        <p className="text-red-500 mt-1 text-sm">Required*</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="w-200">
                        <label htmlFor="confirmNewPassword" className="block text-lg font-medium text-[#2A546D] mb-3">
                            Confirm New Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="block w-[400px] border border-[#2A546D] rounded-lg h-[40px] text-lg"
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
                        disabled={!(currentPassword && newPassword && confirmPassword)}
                        className={`px-4 py-2 ${currentPassword && newPassword && confirmPassword ? 'bg-[#2A546D]' : 'bg-gray-400'} text-white rounded-lg`}
                    >
                        Update Password
                    </button>
                </div>
            </form>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#2A546D] p-8 rounded-lg text-center text-white">
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