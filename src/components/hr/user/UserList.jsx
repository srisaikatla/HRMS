// // import React from 'react'

// // const UserList = () => {
// //   return (
// //     <div>UserList</div>
// //   )
// // }

// // export default UserList

// import React from 'react';
// import { FaPlusCircle } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FiEdit } from "react-icons/fi";

// const userdata = [
//     {
//         id: 1,
//         name: 'Marshall Nichols',
//         email: 'marshall@gmail.com',
//         status: 'Super Admin',
//         createdDate: '24 Jun, 2015',
//         role: 'CEO and Founder'
//     },
//     {
//         id: 2,
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         status: 'User',
//         createdDate: '10 Aug, 2020',
//         role: 'Developer'
//     },
//     {
//         id: 3,
//         name: 'Jane Smith',
//         email: 'jane.smith@example.com',
//         status: 'Admin',
//         createdDate: '15 Feb, 2018',
//         role: 'Project Manager'
//     },
//     {
//         id: 4,
//         name: 'Emily Brown',
//         email: 'emily.brown@gmail.com',
//         status: 'User',
//         createdDate: '05 May, 2019',
//         role: 'Designer'
//     },
//     {
//         id: 5,
//         name: 'Michael Johnson',
//         email: 'michael.johnson@example.com',
//         status: 'Super Admin',
//         createdDate: '30 Nov, 2017',
//         role: 'CTO'
//     },
//     {
//         id: 6,
//         name: 'Alex Wilson',
//         email: 'alex.wilson@example.com',
//         status: 'User',
//         createdDate: '18 Apr, 2021',
//         role: 'Software Engineer'
//     },
//     {
//         id: 7,
//         name: 'Sophia Lee',
//         email: 'sophia.lee@gmail.com',
//         status: 'Admin',
//         createdDate: '12 Jul, 2016',
//         role: 'Product Owner'
//     },
//     {
//         id: 8,
//         name: 'David Miller',
//         email: 'david.miller@example.com',
//         status: 'User',
//         createdDate: '22 Sep, 2022',
//         role: 'QA Engineer'
//     },
//     {
//         id: 9,
//         name: 'Olivia Clark',
//         email: 'olivia.clark@example.com',
//         status: 'User',
//         createdDate: '08 Dec, 2023',
//         role: 'Frontend Developer'
//     },
//     {
//         id: 10,
//         name: 'William Taylor',
//         email: 'william.taylor@example.com',
//         status: 'Admin',
//         createdDate: '03 Mar, 2014',
//         role: 'Backend Developer'
//     }
// ];

// const UserList = () => {
//     return (
//         <div className=" p-5 flex flex-col mt-24">
//             <h1 className="text-lg text-orange-500 font-medium font-roboto mb-4">
//                 Users List
//             </h1>

//             <div className="flex justify-end mb-4">
//                 <button className="bg-[#0098F1] text-white flex items-center rounded-lg px-6 py-3">
//                     <FaPlusCircle className="text-white text-1xl mr-2" />
//                     <span className="text-white font-medium text-lg mr-2">Add New User</span>
//                 </button>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="min-w-full">
//                     <thead className="bg-[#0098F14D] text-white">
//                         <tr className="text-left">
//                             <th className="text-lg py-2 px-4 "></th>
//                             <th className="text-lg text-black py-4 px-4">Name</th>
//                             <th className="text-lg text-black py-2 px-4">E-mail Id</th>
//                             <th className="text-lg text-black py-2 px-4">Status</th>
//                             <th className="text-lg text-black py-2 px-4">Created Date</th>
//                             <th className="text-lg text-black py-2 px-4">Role</th>
//                             <th className="text-lg text-black py-2 px-4">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userdata.map(user => (
//                             <ListItem key={user.id} user={user} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     );
// }

// const ListItem = ({ user }) => {
//     return (
//         <tr className="text-black">
//             <td className="py-2 px-4">
//                 <img
//                     src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721210639/455d89235a0ce444dea77c01cb59978c_kle7gg.png"
//                     alt="User Avatar"
//                     style={{
//                         width: '5vw', // Relative width based on viewport width
//                         height: '5vw', // Relative height based on viewport width
//                         maxWidth: '50px', // Maximum width of 50 pixels
//                         maxHeight: '50px', // Maximum height of 50 pixels
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                     }}
//                 />
//             </td>
//             <td className="py-2 px-4 text-sm">{user.name}</td>
//             <td className="py-2 px-4 text-sm">{user.email}</td>
//             <td className="py-2 px-4 text-sm">{user.status}</td>
//             <td className="py-2 px-4 text-sm">{user.createdDate}</td>
//             <td className="py-2 px-2 text-sm">
//                 <div style={{ backgroundColor: '#0098F1', padding: '5px', borderRadius: '5px' }}>{user.role}</div>
//             </td>
//             <td className="py-2 px-4">
//                 <div className="flex items-center space-x-4">
//                     <button className="bg-[#2A8F4C] text-white px-2 py-2 rounded-lg">
//                         <FiEdit className="text-xl" />
//                     </button>
//                     <button className="bg-[#FF3636] text-white px-2 py-2 rounded-lg">
//                         <RiDeleteBin6Line className="text-xl" />
//                     </button>
//                 </div>
//             </td>
//         </tr>
//     );
// }

// export default UserList;
// import React from 'react'

// const UserList = () => {
//   return (
//     <div>UserList</div>
//   )
// }

// export default UserList

import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const userdata = [
    {
        id: 1,
        name: 'Marshall Nichols',
        email: 'marshall@gmail.com',
        status: 'Super Admin',
        createdDate: '24 Jun, 2015',
        role: 'CEO and Founder'
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'User',
        createdDate: '10 Aug, 2020',
        role: 'Developer'
    },
    {
        id: 3,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        status: 'Admin',
        createdDate: '15 Feb, 2018',
        role: 'Project Manager'
    },
    {
        id: 4,
        name: 'Emily Brown',
        email: 'emily.brown@gmail.com',
        status: 'User',
        createdDate: '05 May, 2019',
        role: 'Designer'
    },
    {
        id: 5,
        name: 'Michael Johnson',
        email: 'michael.johnson@example.com',
        status: 'Super Admin',
        createdDate: '30 Nov, 2017',
        role: 'CTO'
    },
    {
        id: 6,
        name: 'Alex Wilson',
        email: 'alex.wilson@example.com',
        status: 'User',
        createdDate: '18 Apr, 2021',
        role: 'Software Engineer'
    },
    {
        id: 7,
        name: 'Sophia Lee',
        email: 'sophia.lee@gmail.com',
        status: 'Admin',
        createdDate: '12 Jul, 2016',
        role: 'Product Owner'
    },
    {
        id: 8,
        name: 'David Miller',
        email: 'david.miller@example.com',
        status: 'User',
        createdDate: '22 Sep, 2022',
        role: 'QA Engineer'
    },
    {
        id: 9,
        name: 'Olivia Clark',
        email: 'olivia.clark@example.com',
        status: 'User',
        createdDate: '08 Dec, 2023',
        role: 'Frontend Developer'
    },
    {
        id: 10,
        name: 'William Taylor',
        email: 'william.taylor@example.com',
        status: 'Admin',
        createdDate: '03 Mar, 2014',
        role: 'Backend Developer'
    }
];

const UserList = () => {
    return (
        <div className=" p-5 flex flex-col mt-24">
            <h1 className="text-lg text-orange-500 font-medium font-roboto mb-4">
                Users List
            </h1>

            <div className="flex justify-end mb-4">
                <button className="bg-[#0098F1] text-white flex items-center rounded-lg px-6 py-3">
                    <FaPlusCircle className="text-white text-1xl mr-2" />
                    <span className="text-white font-medium text-lg mr-2">Add New User</span>
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-[#0098F14D] text-white">
                        <tr className="text-left">
                            <th className="text-lg py-2 px-4 "></th>
                            <th className="text-lg text-black py-4 px-4">Name</th>
                            <th className="text-lg text-black py-2 px-4">E-mail Id</th>
                            <th className="text-lg text-black py-2 px-4">Status</th>
                            <th className="text-lg text-black py-2 px-4">Created Date</th>
                            <th className="text-lg text-black py-2 px-4">Role</th>
                            <th className="text-lg text-black py-2 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map(user => (
                            <ListItem key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

const ListItem = ({ user }) => {
    return (
        <tr className="text-black">
            <td className="py-2 px-4">
                <img
                    src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721210639/455d89235a0ce444dea77c01cb59978c_kle7gg.png"
                    alt="User Avatar"
                    style={{
                        width: '5vw', // Relative width based on viewport width
                        height: '5vw', // Relative height based on viewport width
                        maxWidth: '50px', // Maximum width of 50 pixels
                        maxHeight: '50px', // Maximum height of 50 pixels
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            </td>
            <td className="py-2 px-4 text-sm">{user.name}</td>
            <td className="py-2 px-4 text-sm">{user.email}</td>
            <td className="py-2 px-4 text-sm">{user.status}</td>
            <td className="py-2 px-4 text-sm">{user.createdDate}</td>
            <td className="py-2 px-2 text-sm">
                <div style={{ backgroundColor: '#0098F1', padding: '5px', borderRadius: '5px' }}>{user.role}</div>
            </td>
            <td className="py-2 px-4">
                <div className="flex items-center space-x-4">
                    <button className="bg-[#2A8F4C] text-white px-2 py-2 rounded-lg">
                        <FiEdit className="text-xl" />
                    </button>
                    <button className="bg-[#FF3636] text-white px-2 py-2 rounded-lg">
                        <RiDeleteBin6Line className="text-xl" />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default UserList;
