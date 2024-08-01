import React, { useState, useEffect } from 'react';
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import { format, differenceInDays, parseISO } from 'date-fns';

const initialLeaves = [
    { id: 1, LeaveType: "Casual Leave", from: '08 Mar 2024', to: "09 Mar 2024", 'No.of Days': '2 Days', Reason: "Personal", Status: 'Approved', 'ApprovedBy': "HR" },
    // Add more leaves here
];

const LeavesCount = [
    { annualLeave: 12, medicalLeave: 3, otherLeave: 4, remainingLeave: 5 },
]

function ApplyLeave() {
    const [Leaves, setLeaves] = useState(initialLeaves);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newLeave, setNewLeave] = useState({
        date: '',
        leaveType: '',
        from: '',
        to: '',
        noOfDays: '',
        Remaining: '',
        reason: '',
        status: '',
        ApprovedBy: '',
    });
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [openLeave, setOpenLeave] = useState(false);
    const [deleteLeaveId, setDeleteLeaveId] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

    useEffect(() => {
        if (newLeave.from && newLeave.to) {
            const fromDate = parseISO(newLeave.from);
            const toDate = parseISO(newLeave.to);
            const numOfDays = differenceInDays(toDate, fromDate) + 1; // +1 to include the end date
            setNewLeave(prevLeave => ({
                ...prevLeave,
                noOfDays: `${numOfDays} Days`
            }));
        }
    }, [newLeave.from, newLeave.to]);

    const closeModal = () => {
        setIsModalOpen(false);
        setEditLeaveId(null);
        setNewLeave({
            date: '',
            leaveType: '',
            from: '',
            to: '',
            noOfDays: '',
            reason: '',
            status: '',
            ApprovedBy: ''
        });
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteLeaveId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLeave(prevLeave => ({
            ...prevLeave,
            [name]: value
        }));
    };
    const settingStatus = (e) => {
        switch (e) {
            case 'Approved':
                return <button className='bg-green-600 text-white font-normal py-1 px-4 rounded-xl'>Approved</button>
            case 'Pending':
                return <button className='bg-orange-400 text-white font-normal py-1 px-4 rounded-xl'>Pending</button>
            case 'Rejected':
                return <button className='bg-red-600 text-white font-normal py-1 px-4 rounded-xl'>Rejected</button>
            default:
                break;
        }
    }

    const handleAddLeave = () => {
        if (editLeaveId !== null) {
            const updatedLeaves = Leaves.map(leave => {
                if (leave.id === editLeaveId) {
                    return {
                        ...leave,
                        LeaveType: newLeave.leaveType,
                        from: format(new Date(newLeave.from), 'dd MMM yyyy'), // Convert to 'yyyy-MM-dd' for saving
                        to: format(new Date(newLeave.to), 'dd MMM yyyy'), // Convert to 'yyyy-MM-dd' for saving
                        'No.of Days': newLeave.noOfDays,
                        Reason: newLeave.reason,
                        Status: newLeave.status,
                        ApprovedBy: newLeave.ApprovedBy
                    };
                }
                return leave;
            });
            setLeaves(updatedLeaves);
            setShowSuccessMessage(true);
        } else {
            const newLeaveObject = {
                id: Leaves.length > 0 ? Math.max(...Leaves.map(leave => leave.id)) + 1 : 1,
                LeaveType: newLeave.leaveType,
                from: format(new Date(newLeave.from), 'dd MMM yyyy'), // Convert to 'yyyy-MM-dd' for saving
                to: format(new Date(newLeave.to), 'dd MMM yyyy'), // Convert to 'yyyy-MM-dd' for saving
                'No.of Days': newLeave.noOfDays,
                Reason: newLeave.reason,
                Status: newLeave.status,
                ApprovedBy: newLeave.ApprovedBy
            };
            setLeaves([...Leaves, newLeaveObject]);
            setShowSuccessMessage(true);
        }

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);

        closeModal();
    };

    const openEditModal = (leaveId) => {
        const leaveToEdit = Leaves.find(leave => leave.id === leaveId);
        setEditLeaveId(leaveId);
        setNewLeave({
            leaveType: leaveToEdit.LeaveType,
            from: format(new Date(leaveToEdit.from), 'dd MMM yyyy'),
            to: format(new Date(leaveToEdit.to), 'dd MMM yyyy'),
            noOfDays: leaveToEdit['No.of Days'],
            reason: leaveToEdit.Reason,
            status: leaveToEdit.Status,
            ApprovedBy: leaveToEdit['ApprovedBy']
        });
        setIsModalOpen(true);
    };

    const openDeleteModal = (leaveId) => {
        setDeleteLeaveId(leaveId);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteLeave = () => {
        const updatedLeaves = Leaves.filter(leave => leave.id !== deleteLeaveId);
        setLeaves(updatedLeaves);
        setShowDeleteSuccessMessage(true);

        setTimeout(() => {
            setShowDeleteSuccessMessage(false);
        }, 3000);

        closeDeleteModal();
    };

    return (
        <div className='max-w-full mx-auto py-2 overflow-hidden'>
            <div className="">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Employee</h2>
                    <h3 className="text-lg font-semibold">Dashboard/Leaves</h3>
                    {
                        LeavesCount.map((count, index) => (
                            <div className='w-full flex justify-center items-center gap-4 text-white' key={index}>
                                <div className='bg-[#FA1A8E] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col '>
                                    <div>
                                        Annual Leave
                                    </div>
                                    <div>{count.annualLeave}</div>
                                </div>
                                <div className='bg-[#04B440] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col '>
                                    <div>
                                        Medical Leave
                                    </div>
                                    <span>{count.medicalLeave}</span>
                                </div>
                                <div className='bg-[#FF4040] text-lg  w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col '>
                                    <div>
                                        Other Leave
                                    </div>
                                    <span>{count.otherLeave}</span>
                                </div>
                                <div className='bg-[#15B9FF]  text-lg w-[200px] font-semibold h-[130px] flex justify-center items-center flex-col '>
                                    <div>
                                        Remaining Leave
                                    </div>
                                    <span>{count.remainingLeave}</span>
                                </div>
                            </div>

                        ))
                    }
                    <div className="flex justify-end mb-4">
                        <button
                            type="button"
                            className="flex justify-center text-lg font-semibold items-center w-[186px] h-[48px] text-white bg-[#E65F2B] rounded-md"
                            onClick={() => { setIsModalOpen(true); setOpenLeave(true); }}
                        >
                            <FiPlusCircle className="text-2xl mr-2 bg-[#E65F2B] text-white" /> Add Leave
                        </button>
                    </div>
                    <div id="table" className="overflow-x-auto x-">
    <table className="min-w-full rounded-lg shadow-md">
        <thead className="bg-[#E65F2B] text-lg font-semibold sticky top-0 z-10">
            <tr>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Leave Type</th>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">From</th>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">To</th>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">No. of Days</th>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Approved By</th>
                <th className="py-4 px-20 text-center border-r border-white border-opacity-60">Reason</th>
                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Status</th>
                <th className="py-4 px-14 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {Leaves.map((leave) => (
                <tr key={leave.id} className="bg-[#E65F2B] bg-opacity-20 text-lg font-normal">
                    <td className="py-2 px-2 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.LeaveType}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.from}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.to}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave['No.of Days']}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave['ApprovedBy']}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{leave.Reason}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-r border-[#E65F2B] border-opacity-80">{settingStatus(leave.Status)}</td>
                    <td className="py-2 px-4 border-b bg-transparent text-center border-[#E65F2B]">
                        <div className="flex justify-center items-center space-x-2">
                            <button className="text-blue-500 flex py-3 items-center" onClick={() => openEditModal(leave.id)}>
                                <FiEdit className="mr-1 bg-[#2A8F4C] text-white rounded-md size-6 p-1" />
                            </button>
                            <button className="flex items-center justify-center" onClick={() => openDeleteModal(leave.id)}>
                                <FiTrash2 className="mr-1 bg-[#FF3636] text-white flex items-center size-6 p-1 rounded-md" />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
                    <div className="bg-white rounded-lg p-6 px-10 w-[700px]">
                        <h2 className="text-2xl mb-4 text-[#E65F2B]">
                            {editLeaveId ? 'Edit Leave' : 'Add Leave'}
                        </h2>
                        <div className="grid grid-cols- space-y-4">
                            <div className='relative text-[#E65F2B]'>
                                <input
                                    type="text"
                                    name="leaveType"
                                    placeholder='Leave Type'
                                    value={newLeave.leaveType}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                                />
                                {editLeaveId && <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />}
                            </div>
                            <div className='grid grid-cols-2 gap-2 text-[#E65F2B] text-opacity-85'>
                                <input
                                    type="date"
                                    name="from"
                                    value={newLeave.from}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2"
                                />
                                <input
                                    type="date"
                                    name="to"
                                    value={newLeave.to}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B]  rounded-md focus:outline-none p-2"
                                />
                            </div>
                            {/* <div>
                <input
                type="text"
                name="noOfDays"
                value={newLeave.noOfDays}
                placeholder='No. of Days'
                readOnly
                className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] text-[#E65F2B] rounded-md focus:outline-none p-2"
                />
            </div> */}
                            <div className='text-[#E65F2B]'>
                                {openLeave && <div>
                                    <input
                                        type="text"
                                        name="Remaining"
                                        placeholder='Remaining Leaves'
                                        value={newLeave.remainingLeave}
                                        onChange={handleInputChange}
                                        className="block w-full border border-[#E65F2B] placeholder-[#E65F2B]  rounded-md focus:outline-none p-2 placeholder-opacity-60"
                                    />
                                </div>}
                            </div>
                            <div className='relative text-[#E65F2B]'>
                                <input
                                    type="text"
                                    name="ApprovedBy"
                                    placeholder='ApprovedBy'
                                    value={newLeave.ApprovedBy}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] rounded-md focus:outline-none p-2 placeholder-opacity-60"
                                />
                                {editLeaveId && <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />}
                            </div>
                            <div className='relative text-[#E65F2B]'>
                                <textarea
                                    name="reason"
                                    value={newLeave.reason}
                                    placeholder='Reason'
                                    rows={4}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] focus:outline-none rounded-md p-2 placeholder-opacity-60"
                                />
                                {editLeaveId && <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />}
                            </div>
                            <div>
                                <select
                                    name="status"
                                    value={newLeave.status}
                                    onChange={handleInputChange}
                                    className="block w-full border border-[#E65F2B] placeholder-[#E65F2B] text-[#E65F2B] rounded-md focus:outline-none p-2"
                                >
                                    <option value="" disabled>Select Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                {/* {editLeaveId && <FiEdit className="absolute right-2 top-3 text-[#E65F2B] cursor-pointer" />} */}
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button
                                    type="button"
                                    onClick={handleAddLeave}
                                    className="py-2 px-9 border border-[#E65F2B] bg-[#E65F2B] text-white rounded-md focus:outline-none"
                                >
                                    {editLeaveId ? 'Update' : 'Add'}
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="py-2 px-6 bg-white border border-[#E65F2B] text-[#E65F2B] rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
                    <div className="bg-white rounded-lg p-6 w-[400px]">
                        <h2 className="text-xl mb-4">Are you sure you want to delete this leave?</h2>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={handleDeleteLeave}
                                className="py-2 px-5 bg-[#E65F2B] text-white rounded-md"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                onClick={closeDeleteModal}
                                className="py-2 px-4 bg-[white] border-[#E65F2B] border text-[#E65F2B] rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessMessage && (
                <div className="fixed top-4 left-1/2 bg-green-500 text-white p-4 rounded-md shadow-lg text-lg font-normal">
                    Leave {editLeaveId ? 'updated' : 'added'} successfully!
                </div>
            )}

            {showDeleteSuccessMessage && (
                <div className="fixed top-4 left-1/2 bg-red-500 text-white p-4 rounded-md shadow-lg text-lg font-normal">
                    Leave deleted successfully!
                </div>
            )}
        </div>
    );
}

export default ApplyLeave;
