import React, { useState } from 'react';
import { MdOutlineDoneOutline } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

import SideBar from '../../Sidebar';

const AddLeavePage = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const leaveData = { fromDate, toDate, category, message };
        localStorage.setItem('leaveData', JSON.stringify(leaveData));
        setShowModal(true);
        setFromDate('');
        setToDate('');
        setCategory('');
        setMessage('');
        setTimeout(()=>{
            setShowModal(false);
        },1500)
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>
        <SideBar />
        <div className="max-w-full max-h-screen  px-14 py-8 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-10 mt-4 text-orange-400">Add Leave</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <select
                        id="leave-category"
                        name="leave-category"
                        className="w-full border-cyan-300 px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value='' disabled selected>Select category</option>
                        <option value="vacation">Vacation</option>
                        <option value="sick">Sick Leave</option>
                        <option value="personal">Personal Leave</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="mb-6 flex gap-8">
                    <input
                        type="date"
                        className="w-full px-3 border-cyan-300 py-2 border rounded-lg focus:outline-none focus:border-cyan-500"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        required
                    />
                    <input
                        type="date"
                        className="w-full px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-10">
                <label className="text-md font-medium text-gray-700">Description</label>
                    <textarea
                        className="w-full mt-6 px-3 py-2 border-cyan-300 border rounded-md focus:outline-none focus:border-cyan-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white  px-9 text-md py-1 text-medium rounded-md focus:outline-none"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="bg-white text-blue-500 border border-blue-400 px-7 text-sm font-medium rounded-md focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                    <div className="bg-[#2a97db] z-50 p-8 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="text-center mt-4 flex flex-col justify-center items-center gap-3">
                        <BsCheck2Circle  className='text-white text-[40px]'/>
                            <span className='text-white'>
                                Leave Added Successfully
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default AddLeavePage;
