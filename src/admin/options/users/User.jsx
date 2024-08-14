

// import React, { useState } from 'react';
// import { FiPlusCircle } from "react-icons/fi";
// import { FaPen } from 'react-icons/fa';
// function AdminUser() {
//     const [activeSection, setActiveSection] = useState('users'); // Default to 'users'
//     const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//     const [invites, setInvites] = useState([]); // State to store invites data
//     const [formData, setFormData] = useState({
//         employee: '',
//         email: '',
//         role: ''
//     });
//     const [statusFilter, setStatusFilter] = useState('all'); // State to filter users by status
//     const [editingRole, setEditingRole] = useState(null);
//     const [newRole, setNewRole] = useState('');
//     const handleSectionChange = (section) => {
//         setActiveSection(section);
//     };

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };
//     const handleEditClick = (user) => {
//         setEditingRole(user);
//         setNewRole(user.role);
//     };

//     const handleRoleChange = (e) => {
//         setNewRole(e.target.value);
//     };

//     // const saveRoleChange = () => {
//     //     // Update user role in the users list
//     //     setUsers(prevUsers =>
//     //         prevUsers.map(user =>
//     //             user === editingRole ? { ...user, role: newRole } : user
//     //         )
//     //     );
//     //     setEditingRole(null);
//     // };
//       const saveRoleChange = () => {
//     // Update user role in the users list
//     setUsers(prevUsers =>
//         prevUsers.map(user =>
//             user.email === editingRole.email ? { ...user, role: newRole } : user
//         )
//     );
//     setEditingRole(null);
// };
//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [id]: value
//         }));
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         setInvites(prevInvites => [
//             ...prevInvites,
//             { 
//                 email: formData.email, 
//                 role: formData.role, 
//                 employee: formData.employee,
//                 sentBy: 'Admin', // Example data
//                 sentOn: new Date().toLocaleDateString(),
//                 status: 'Pending',
//                 action: 'Send Invite'
//             }
//         ]);
//         setFormData({
//             employee: '',
//             email: '',
//             role: ''
//         });
//         toggleModal(); // Close the modal after submission
//     };

//     const users = [
//         { name: 'Alice', email: 'alice@example.com', role: 'Developer', joined: '2023-01-15', employee: 'E123', status: 'Active' },
//         { name: 'Bob', email: 'bob@example.com', role: 'Designer', joined: '2022-11-23', employee: 'E456', status: 'Inactive' },
//         { name: 'Charlie', email: 'charlie@example.com', role: 'Project Manager', joined: '2023-03-10', employee: 'E789', status: 'Active' },
//         { name: 'David', email: 'david@example.com', role: 'QA Engineer', joined: '2023-02-25', employee: 'E012', status: 'Active' },
//         { name: 'Eva', email: 'eva@example.com', role: 'Business Analyst', joined: '2022-09-30', employee: 'E345', status: 'Inactive' },
//     ];

//     const filteredUsers = statusFilter === 'all' 
//         ? users 
//         : users.filter(user => user.status === statusFilter);

//     return (
//         <div className="p-10">
//             <div className='flex mb-5 text-[25px]'>
//                 <h1 
//                     className={`font-bold mr-[40px] cursor-pointer px-4 py-2 rounded ${activeSection === 'users' ? 'bg-[#E65F2B] text-white' : 'text-[#E65F2B]'}`} 
//                     onClick={() => handleSectionChange('users')}
//                 >
//                     Users
//                 </h1>
//                 <h1 
//                     className={`font-bold cursor-pointer px-4 py-2 rounded ${activeSection === 'invites' ? 'bg-[#E65F2B] text-white' : 'text-[#E65F2B]'}`} 
//                     onClick={() => handleSectionChange('invites')}
//                 >
//                     Invites
//                 </h1>
//             </div>

//             {/* Conditionally render the Users table */}
//             {activeSection === 'users' && (
//                 <div id="table-users" className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4">
//                     <div className="flex mb-4">
//                         <select 
//                             value={statusFilter}
//                             onChange={(e) => setStatusFilter(e.target.value)}
//                             className="border-[#FF9900] text-[#FF9900] border-2 rounded-md p-2"
//                         >
//                             <option value="all">All Status</option>
//                             <option value="Active">Active</option>
//                             <option value="Inactive">Inactive</option>
//                         </select>
//                     </div>
//                     <table className="min-w-full w-screen text-nowrap">
//                 <thead className="bg-[#E65F2B] text-lg text-white sticky top-0 z-10">
//                     <tr>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">UserName</th>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Email Address</th>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">User Type (Role)</th>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">User Since</th>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Employee</th>
//                         <th className="py-4 px-14 text-center">Login</th>
//                         <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.name}</td>
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.email}</td>
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">
//                                 {user.role}
//                                 <button onClick={() => handleEditClick(user)} className="ml-2 text-[#E65F2B]">
//                                     <FaPen />
//                                 </button>
//                             </td>
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.joined}</td>
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.employee}</td>
//                             <td className="py-4 px-14 text-center text-[#E65F2B]">N/A</td> {/* Dummy data */}
//                             <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table> 
//             // Role Editing Popup Modal
// {editingRole && (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Role for {editingRole.name}</h2>
//             <label className="block mb-2">
//                 <span className="text-gray-700">New Role</span>
//                 <select 
//                     value={newRole}
//                     onChange={handleRoleChange}
//                     className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                 >
//                     <option value="Developer">Developer</option>
//                     <option value="Designer">Designer</option>
//                     <option value="Manager">Manager</option>
//                     <option value="QA Engineer">QA Engineer</option>
//                     <option value="System Administrator">System Administrator</option>
//                 </select>
//             </label>
//             <div className="flex justify-end mt-4">
//                 <button onClick={saveRoleChange} className="bg-[#E65F2B] text-white px-4 py-2 rounded-md mr-2">Save</button>
//                 <button onClick={() => setEditingRole(null)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
//             </div>
//         </div>
//     </div>
// )}
//                 </div>
//             )}

//             {/* Conditionally render the Invites table and Add Invite button */}
//             {activeSection === 'invites' && (
//                 <div className="pt-10">
//                     <div className="flex justify-end my-4">
//                         <button
//                             type="button"
//                             className="flex bg-gradient-to-r from-[#E65F2B] to-[#FF9900] justify-center text-lg font-semibold items-center w-[186px] h-[48px] text-white rounded-md"
//                             onClick={toggleModal}
//                         >
//                             <FiPlusCircle className="text-2xl mr-2" /> 
//                             Add invite
//                         </button>
//                     </div>
//                     <div id="table-invites" className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 mx-4">
//                         <table className="min-w-full w-screen text-nowrap">
//                             <thead className="bg-[#E65F2B] text-lg text-white sticky top-0 z-10">
//                                 <tr>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Email Address</th>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Role</th>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Invite Type (Role)</th>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Sent by</th>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Sent On</th>
//                                     <th className="py-4 px-14 text-center">Status</th>
//                                     <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {invites.map((invite, index) => (
//                                     <tr key={index}>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.email}</td>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.role}</td>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.role}</td>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.sentBy}</td>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.sentOn}</td>
//                                         <td className="py-4 px-14 text-center text-[#E65F2B]">{invite.status}</td>
//                                         <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.action}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             )}

//             {/* Modal */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="bg-white  p-6 rounded-lg w-1/3">
//                         <h2 className="text-lg font-semibold mb-4">Add Invite</h2>
//                         {/* Modal content */}
//                         <form onSubmit={handleFormSubmit}>
//                             <div className="mb-4  space-y-4">
//                                 <div className="flex items-center mb-4">
//                                     <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="employee">Select Employee:</label>
//                                     <input 
//                                         id="employee"
//                                         type="text"
//                                         value={formData.employee}
//                                         onChange={handleInputChange}
//                                         className="border-[#FF9900] focus:border-[#FF9900] border-2 rounded-md p-2 w-3/4"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="flex items-center mb-4">
//                                     <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="email">Select Email ID:</label>
//                                     <input 
//                                         id="email"
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="border-[#FF9900] border-2 rounded-md p-2 w-3/4"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="flex items-center mb-4">
//                                     <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="role">Select Role:</label>
//                                     <select
//                                         id="role"
//                                         value={formData.role}
//                                         onChange={handleInputChange}
//                                         className="border-[#FF9900] text-[#FF9900] border-2 rounded-md p-2 w-3/4"
//                                         required
//                                     >
//                                         <option value="">-- Select Role --</option>
//                                         <option value="developer">Developer</option>
//                                         <option value="designer">Designer</option>
//                                         <option value="project-manager">Project Manager</option>
//                                         <option value="qa-engineer">QA Engineer</option>
//                                         <option value="system-admin">System Administrator</option>
//                                         <option value="devops-engineer">DevOps Engineer</option>
//                                         <option value="business-analyst">Business Analyst</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="flex justify-end">
//                                 <button 
//                                     type="submit"
//                                     className="ml-2 bg-[#FF9900] mr-4 text-white px-4 py-2 h-[45px] w-[120px] rounded-md"
//                                 >
//                                     Send Invite
//                                 </button>
//                                 <button 
//                                     type="button"
//                                     className="bg-[#E65F2B] text-white px-4 py-2 h-[45px] rounded-md"
//                                     onClick={toggleModal}
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AdminUser;

import React, { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { FaPen } from 'react-icons/fa';

function User() {
    const [activeSection, setActiveSection] = useState('users'); // Default to 'users'
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [invites, setInvites] = useState([]); // State to store invites data
    const [formData, setFormData] = useState({
        employee: '',
        email: '',
        role: ''
    });
    const [statusFilter, setStatusFilter] = useState('all'); // State to filter users by status
    const [editingRole, setEditingRole] = useState(null);
    const [newRole, setNewRole] = useState('');
    const [users, setUsers] = useState([
        { name: 'Ratnapriya', email: 'alice@example.com', role: 'Developer', joined: '2023-01-15', employee: 'E123', status: 'Active' },
        { name: 'Ashwini', email: 'bob@example.com', role: 'Designer', joined: '2022-11-23', employee: 'E456', status: 'Inactive' },
        { name: 'Raghavendra', email: 'charlie@example.com', role: 'Project Manager', joined: '2023-03-10', employee: 'E789', status: 'Active' },
        { name: 'Premchand', email: 'david@example.com', role: 'QA Engineer', joined: '2023-02-25', employee: 'E012', status: 'Active' },
        { name: 'NikilRaj', email: 'eva@example.com', role: 'Business Analyst', joined: '2022-09-30', employee: 'E345', status: 'Inactive' },
    ]);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleEditClick = (user) => {
        setEditingRole(user);
        setNewRole(user.role);
    };

    const handleRoleChange = (e) => {
        setNewRole(e.target.value);
    };

    const saveRoleChange = () => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.email === editingRole.email ? { ...user, role: newRole } : user
            )
        );
        setEditingRole(null);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setInvites(prevInvites => [
            ...prevInvites,
            { 
                email: formData.email, 
                role: formData.role, 
                employee: formData.employee,
                sentBy: 'Admin', // Example data
                sentOn: new Date().toLocaleDateString(),
                status: 'Pending',
                action: 'Send Invite'
            }
        ]);
        setFormData({
            employee: '',
            email: '',
            role: ''
        });
        toggleModal(); // Close the modal after submission
    };

    const filteredUsers = statusFilter === 'all' 
        ? users 
        : users.filter(user => user.status === statusFilter);

    return (
        <div className="p-10">
            <div className='flex mb-5 text-lg'>
                <h1 
                    className={`font-bold mr-[40px] cursor-pointer px-4  py-2 rounded ${activeSection === 'users' ? 'bg-[#E65F2B]  text-white text-lg ' : 'text-[#E65F2B]'}`} 
                    onClick={() => handleSectionChange('users')}
                >
                    Users
                </h1>
                <h1 
                    className={`font-bold cursor-pointer px-4 py-2 rounded ${activeSection === 'invites' ? 'bg-[#E65F2B] text-white text-lg ' : 'text-[#E65F2B]'}`} 
                    onClick={() => handleSectionChange('invites')}
                >
                    Invites
                </h1>
            </div>

            {/* Conditionally render the Users table */}
            {activeSection === 'users' && (
                <div id="table-users" className="overflow-x-scroll text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600 pt-10 mx-4">
                    {/* <div className="flex mb-4">
                        <select 
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] rounded-md p-2"
                        >
                            <option value="all">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div> */}
                    <div className="flex mb-4">
    <select 
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0  rounded-md p-2"
    >
        <option value="all">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
    </select>
</div>

                    <table className="min-w-full w-screen text-nowrap">
                        <thead className="bg-[#E65F2B] text-lg text-white sticky top-0 z-10">
                            <tr>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">UserName</th>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Email Address</th>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">User Type (Role)</th>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">User Since</th>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Employee</th>
                                <th className="py-4 px-14 text-center">Login</th>
                                <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.name}</td>
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.email}</td>
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">
                                        {user.role}
                                        <button onClick={() => handleEditClick(user)} className="ml-2 text-[#E65F2B]">
                                            <FaPen />
                                        </button>
                                    </td>
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.joined}</td>
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.employee}</td>
                                    <td className="py-4 px-14 text-center text-[#E65F2B]">N/A</td> {/* Dummy data */}
                                    <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{user.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 

                    {/* Role Editing Popup Modal */}
                    {editingRole && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white w-[450px] h-[300px] p-6 rounded-lg shadow-lg">
                                <h2 className="text-[20px] mt-[40px]  text-[#E65F2B] font-semibold mb-4">Edit Role for {editingRole.name}</h2>
                                <label className="block mb-2">
                                    <span className="text-[#E65F2B] text-bold">New Role</span>
                                    <select 
                                        value={newRole}
                                        onChange={handleRoleChange}
                                        className="form-select mt-1  text-[#E65F2B] block w-full border-[#E65F2B]  border-2  h-[50px] rounded-md shadow-sm"
                                    >
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Manager">Manager</option>
                                        <option value="QA Engineer">QA Engineer</option>
                                        <option value="System Administrator">System Administrator</option>
                                    </select>
                                </label>
                                <div className="flex justify-end mt-4">
                                    <button onClick={saveRoleChange} className="bg-[#E65F2B] text-white px-4 py-2 rounded-md mr-2">Save</button>
                                    <button onClick={() => setEditingRole(null)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Conditionally render the Invites table and Add Invite button */}
            {activeSection === 'invites' && (
                <div className="pt-10">
                    {/* <div className="flex justify-end my-4">
                        <button
                            className="text-white bg-[#E65F2B] hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                            onClick={toggleModal}
                        >
                            <FiPlusCircle className="mr-2" /> Add New Invite
                        </button>
                    </div> */}
                    

                    <div className="flex justify-end my-4">
                     <button
                            type="button"
                            className="flex bg-gradient-to-r from-[#E65F2B] to-[#FF9900] justify-center text-lg font-semibold items-center w-[186px] h-[48px] text-white rounded-md"
                            onClick={toggleModal}
                        >
                            <FiPlusCircle className="text-2xl mr-2" /> 
                            Add invite
                        </button>
                    </div>
                    <div className="overflow-x-auto text-lg scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-600">
                        <table className="min-w-full w-full text-nowrap">
                            <thead className="bg-[#E65F2B] text-lg text-white">
                                <tr>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Employee</th>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Email Address</th>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Role</th>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Sent by</th>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Sent On</th>
                                    <th className="py-4 px-12 text-center border-r border-white border-opacity-60">Status</th>
                                    <th className="py-4 px-12 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invites.map((invite, index) => (
                                    <tr key={index}>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.employee}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.email}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.role}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.sentBy}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.sentOn}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B] border-r border-gray-300">{invite.status}</td>
                                        <td className="py-4 px-12 text-center text-[#E65F2B]">Send Invite</td> {/* Dummy data */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Add New Invite Modal */}
            {/* {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-xl font-semibold mb-4">Add New Invite</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="employee" className="block text-gray-700">Employee Name</label>
                                <input
                                    id="employee"
                                    type="text"
                                    value={formData.employee}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-700">Role</label>
                                <select
                                    id="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    required
                                >
                                    <option value="">Select Role</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="QA Engineer">QA Engineer</option>
                                    <option value="System Administrator">System Administrator</option>
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-[#E65F2B] text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Add Invite
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}


            {/* Modal */}
                        {isModalOpen && (
                <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white  p-6 rounded-lg w-1/3">
                        <h2 className="text-lg font-semibold mb-4">Add Invite</h2>
                        {/* Modal content */}
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4  space-y-4">
                                <div className="flex items-center mb-4">
                                    <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="employee">Select Employee:</label>
                                    <input 
                                        id="employee"
                                        type="text"
                                        value={formData.employee}
                                        onChange={handleInputChange}
                                        className="border-[#FF9900] focus:border-[#FF9900] border-2 rounded-md p-2 w-3/4"
                                        required
                                    />
                                </div>

                                <div className="flex items-center mb-4">
                                    <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="email">Select Email ID:</label>
                                    <input 
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="border-[#FF9900] border-2 rounded-md p-2 w-3/4"
                                        required
                                    />
                                </div>

                                <div className="flex items-center mb-4">
                                    <label className="block text-sm font-medium mr-4 w-1/4" htmlFor="role">Select Role:</label>
                                    <select
                                        id="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="border-[#FF9900] text-[#FF9900] border-2 rounded-md p-2 w-3/4"
                                        required
                                    >
                                        <option value="">-- Select Role --</option>
                                        <option value="developer">Developer</option>
                                        <option value="designer">Designer</option>
                                        <option value="project-manager">Project Manager</option>
                                        <option value="qa-engineer">QA Engineer</option>
                                        <option value="system-admin">System Administrator</option>
                                        <option value="devops-engineer">DevOps Engineer</option>
                                        <option value="business-analyst">Business Analyst</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button 
                                    type="submit"
                                    className="ml-2 bg-[#FF9900] mr-4 text-white px-4 py-2 h-[45px] w-[120px] rounded-md"
                                >
                                    Send Invite
                                </button>
                                <button 
                                    type="button"
                                    className="bg-[#E65F2B] text-white px-4 py-2 h-[45px] rounded-md"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default User;
