// import React, { useState } from 'react';
// import { LuImport } from 'react-icons/lu';
// import { GrSort } from 'react-icons/gr';
// import * as XLSX from 'xlsx';
// import { FaDownload } from 'react-icons/fa'; 
// import { saveAs } from 'file-saver';

// const defaultUserData = [
//   {
//     id: 1,
//     fileName: "user1_data.txt",
//     imported: "Name",
//     skipped: "Phone Number",
//     total: "Address",
//     importedBy: "System A",
//     importedOn: "2024-08-01"
//   },
//   {
//     id: 2,
//     fileName: "user2_data.txt",
//     imported: "Email",
//     skipped: "Date of Birth",
//     total: "Gender",
//     importedBy: "System B",
//     importedOn: "2024-08-02"
//   },
//   {
//     id: 3,
//     fileName: "user3_data.txt",
//     imported: "Phone Number",
//     skipped: "Address",
//     total: "Name",
//     importedBy: "System C",
//     importedOn: "2024-08-03"
//   },
//   {
//     id: 4,
//     fileName: "user4_data.txt",
//     imported: "Address",
//     skipped: "Name",
//     total: "Email",
//     importedBy: "System D",
//     importedOn: "2024-08-04"
//   },
//   {
//     id: 5,
//     fileName: "user5_data.txt",
//     imported: "Date of Birth",
//     skipped: "Gender",
//     total: "Phone Number",
//     importedBy: "System E",
//     importedOn: "2024-08-05"
//   }
// ];

// const EmployeImport = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userData, setUserData] = useState(defaultUserData);
//   const [tempFileData, setTempFileData] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const getNextId = () => {
//     const maxId = userData.reduce((max, user) => (user.id > max ? user.id : max), 0);
//     return maxId + 1;
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const ab = e.target.result;
//         const wb = XLSX.read(ab, { type: 'array' });
//         const ws = wb.Sheets[wb.SheetNames[0]];
//         const data = XLSX.utils.sheet_to_json(ws);

//         const nextId = getNextId();

//         const processedData = data.map((row, index) => ({
//           id: nextId + index,
//           fileName: row.fileName || `File ${nextId + index}`,
//           imported: row.imported || 'N/A',
//           skipped: row.skipped || 'N/A',
//           total: row.total || 'N/A',
//           importedBy: row.importedBy || 'N/A',
//           importedOn: row.importedOn || new Date().toISOString().split('T')[0]
//         }));

//         setUserData([...userData, ...processedData]);
//         setIsModalOpen(false);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const handleSave = () => {
//     if (tempFileData) {
//       setUserData([...userData, tempFileData]);
//       setTempFileData(null);
//       setIsModalOpen(false);
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredUserData = userData.filter(user =>
//     user.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.imported.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.skipped.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.total.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.importedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.importedOn.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDownload = (user) => {
//     // Convert JSON data to worksheet
//     const ws = XLSX.utils.json_to_sheet([user]);

//     // Create a new workbook and append the worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'UserData');

//     // Write workbook to binary string
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//     // Create a blob and trigger download
//     const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(blob, `${user.fileName.replace('.txt', '')}.xlsx`); // Adjust file name as needed
//   };

//   const handleOverallDownload = () => {
//     // Convert all user data to worksheet
//     const ws = XLSX.utils.json_to_sheet(userData);

//     // Create a new workbook and append the worksheet
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'UserData');

//     // Write workbook to binary string
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//     // Create a blob and trigger download
//     const blob = new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//     saveAs(blob, 'all_user_data.xlsx'); // Filename for the overall download
//   };

//   return (
//     <div className="bg-sky-100 flex flex-col p-5">
//       <div className="mb-4">
//         <h1 className="text-[#0098F1] font-bold text-xl">
//         HR Management/Employees/Employee Import
//         </h1>
//       </div>

//       <div className="flex justify-center items-center mb-6">
//         <button
//           onClick={handleOpenModal}
//           className="flex items-center justify-center h-[80px] w-[350px] bg-white text-[#0098F1] rounded-lg"
//         >
//           <div style={{ transform: 'rotate(270deg)' }} className="mr-3">
//             <LuImport size={34} />
//           </div>
//           <span className="text-2xl">Import Employee</span>
//         </button>
//       </div>

//       <div className="flex justify-end mb-6">
//         <div className="flex">
//           <input
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
//           />
//           <button
//             className="px-4 py-2 border border-gray-300 border-l-0 bg-[#0098F1] text-white rounded-r-md"
//           >
//             Go
//           </button>
//           <button
//             onClick={handleOverallDownload}
//             className="px-4 py-2 border border-gray-300 border-l-0 bg-[#0098F1] text-white rounded-r-md flex items-center justify-center"
//           >
//             <GrSort className="mr-2" />
//             Download All
//           </button>
//         </div>
//       </div>

//       {/* Data Table */}
//       <div className="w-full px-4 flex-grow mt-5 overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
//           <thead>
//             <tr className="bg-[#0098F1] text-white">
//               <th className="border border-gray-300 p-3 text-center">File Name</th>
//               <th className="border border-gray-300 p-3 text-center">Imported</th>
//               <th className="border border-gray-300 p-3 text-center">Skipped</th>
//               <th className="border border-gray-300 p-3 text-center">Total</th>
//               <th className="border border-gray-300 p-3 text-center">Imported By</th>
//               <th className="border border-gray-300 p-3 text-center">Imported On</th>
//               <th className="border border-gray-300 p-3 text-center">Action</th> {/* New column */}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUserData.map((user) => (
//               <tr key={user.id}>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500 break-words">{user.fileName}</td>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500">{user.imported}</td>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500">{user.skipped}</td>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500">{user.total}</td>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500">{user.importedBy}</td>
//                 <td className="border border-gray-300 p-3 text-center text-blue-500">{user.importedOn}</td>
//                 <td className="border border-gray-300 p-3 text-center">
//                   <button onClick={() => handleDownload(user)} className="text-blue-500">
//                     <FaDownload size={20} />
//                   </button>
//                 </td> {/* New action column */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Inline Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-[60vw]">
//             <button
//               onClick={handleOverallDownload}
//               className="bg-[#0098F1] text-white h-[40px] w-[150px] rounded-lg mb-4"
//             >
//               Download All
//             </button>
//             <h2 className="text-2xl text-[#0098F1] font-bold mb-4">Import Employees</h2>

//             <div className="flex flex-col items-center mt-10 mb-5">
//               <div>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   className="border border-[#0098F1]  md:w-[500px] text-white cursor-pointer file:bg-[#0098F1] file:h-[50px] file:w-[200px] file:text-white file:border-[#0098F1] mb-3"
//                   aria-label="Upload File"
//                 />
//                 <p>Accepted file formats are csv, xls, and xlsx.</p>
//               </div>
//             </div>

//             <div className="flex justify-center mt-10">
//               <button
//                 onClick={handleSave}
//                 className="bg-[#0098F1] text-white h-[40px] w-[150px] rounded-lg mr-3"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-transparent text-blue-500 border border-blue-500 h-[40px] w-[150px] rounded-lg"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeImport;


import React, { useState } from "react";
import { LuImport } from "react-icons/lu";
import { GrSort } from "react-icons/gr";
import { FiEdit, FiTrash } from "react-icons/fi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const defaultUserData = [
  {
    id: 1,
    Name: "John Doe",
    DOJ: "2023-01-15",
    ContactNo: "1234567890",
    BloodGroup: "O+",
    PersonalMailID: "john.doe@example.com",
    OfficialMailID: "john.doe@company.com",
    DOB: "1990-05-20",
    Designation: "Software Engineer",
    Role: "Developer",
    PANNumber: "ABCDE1234F",
    AadharCardNumber: "1234 5678 9012",
  },
  {
    id: 2,
    Name: "Jane Smith",
    DOJ: "2022-11-20",
    ContactNo: "0987654321",
    BloodGroup: "A+",
    PersonalMailID: "jane.smith@example.com",
    OfficialMailID: "jane.smith@company.com",
    DOB: "1988-03-15",
    Designation: "Project Manager",
    Role: "Manager",
    PANNumber: "XYZAB9876P",
    AadharCardNumber: "5678 1234 8901",
  },
  {
    id: 3,
    Name: "Alice Johnson",
    DOJ: "2021-07-10",
    ContactNo: "1122334455",
    BloodGroup: "B+",
    PersonalMailID: "alice.johnson@example.com",
    OfficialMailID: "alice.johnson@company.com",
    DOB: "1992-09-25",
    Designation: "UI/UX Designer",
    Role: "Designer",
    PANNumber: "LMNOP1234Q",
    AadharCardNumber: "2345 6789 0123",
  },
  // Add more data as needed
];

const OnBoarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(defaultUserData);
  const [tempFileData, setTempFileData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserData, setEditingUserData] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const ab = e.target.result;
        const wb = XLSX.read(ab, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(ws);

        // Filter out duplicate entries based on the ID field
        const newData = data.filter(
          (row) => !userData.some((existingUser) => existingUser.id === row.id)
        );

        // Update user data state with the new data
        setUserData([...userData, ...newData]);
        setIsModalOpen(false);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSave = () => {
    if (tempFileData) {
      const newData = tempFileData.filter(
        (row) => !userData.some((existingUser) => existingUser.id === row.id)
      );
      setUserData([...userData, ...newData]);
      setTempFileData(null);
      setIsModalOpen(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (id) => {
    const userToEdit = userData.find((user) => user.id === id);
    if (userToEdit) {
      setEditingUserId(id);
      setEditingUserData({ ...userToEdit }); // Create a copy of the user's data
    }
  };

  const handleSaveEdit = (id) => {
    const updatedUserData = userData.map((user) =>
      user.id === id ? editingUserData : user
    );
    setUserData(updatedUserData);
    setEditingUserId(null);
  };

  const handleDelete = (id) => {
    const updatedUserData = userData.filter((user) => user.id !== id);
    setUserData(updatedUserData);
  };

  const filteredUserData = userData.filter(
    (user) =>
      user.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.DOJ.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.ContactNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.BloodGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.PersonalMailID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.OfficialMailID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.DOB.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.Designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.Role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.PANNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.AadharCardNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUserData);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "UserData");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const blob = new Blob([wbout], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "user_data.xlsx");
  };

  return (
    <div className="bg-sky-100 flex flex-col p-5">
      <div className="mb-4">
        <h1 className="text-[#E65F2B] text-xl font-bold mb-4">
          HR Management / Employee Import
        </h1>
      </div>

      <div className="flex justify-center items-center mb-6">
        <button
          onClick={handleOpenModal}
          className="flex items-center justify-center h-[80px] w-[350px] bg-white text-[#0098F1] rounded-lg"
        >
          <div style={{ transform: "rotate(270deg)" }} className="mr-3">
            <LuImport size={34} />
          </div>
          <span className="text-2xl">Import Employee</span>
        </button>
      </div>

      <div className="flex justify-end mb-6">
        <div className="flex">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
          />
          <button className="px-4 py-2 border border-gray-300 border-l-0 bg-[#0098F1] text-white rounded-r-md">
            Go
          </button>
          <button
            onClick={handleDownload}
            className="px-4 py-2 border border-gray-300 border-l-0 bg-[#0098F1] text-white rounded-r-md flex items-center justify-center"
          >
            <GrSort className="mr-2" />
            Download
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-5 overflow-x-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098f1] pt-10 mx-4">
        <table className="min-w-full w-screen overflow-x-scroll text-nowrap">
          <thead>
            <tr className="bg-[#0098F1] text-white">
              <th className="border border-gray-300 p-3 text-center">ID</th>
              <th className="border border-gray-300 p-3 text-center">Name</th>
              <th className="border border-gray-300 p-3 text-center">DOJ</th>
              <th className="border border-gray-300 p-3 text-center">
                Contact No.
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Blood Group
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Personal Mail ID
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Official Mail ID
              </th>
              <th className="border border-gray-300 p-3 text-center">DOB</th>
              <th className="border border-gray-300 p-3 text-center">
                Designation
              </th>
              <th className="border border-gray-300 p-3 text-center">Role</th>
              <th className="border border-gray-300 p-3 text-center">
                PAN Number
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Aadhar Card Number
              </th>
              <th className="border border-gray-300 p-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUserData.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-3 text-center">
                  {user.id}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.Name}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          Name: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.Name
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="date"
                      value={editingUserData.DOJ}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          DOJ: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.DOJ
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.ContactNo}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          ContactNo: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.ContactNo
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.BloodGroup}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          BloodGroup: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.BloodGroup
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="email"
                      value={editingUserData.PersonalMailID}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          PersonalMailID: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.PersonalMailID
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="email"
                      value={editingUserData.OfficialMailID}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          OfficialMailID: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.OfficialMailID
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="date"
                      value={editingUserData.DOB}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          DOB: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.DOB
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.Designation}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          Designation: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.Designation
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.Role}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          Role: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.Role
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.PANNumber}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          PANNumber: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.PANNumber
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={editingUserData.AadharCardNumber}
                      onChange={(e) =>
                        setEditingUserData({
                          ...editingUserData,
                          AadharCardNumber: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2"
                    />
                  ) : (
                    user.AadharCardNumber
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {editingUserId === user.id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(user.id)}
                        className="text-[#E65F2B] mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingUserId(null)}
                        className="text-red-600"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="text-[#E65F2B] mr-2"
                      >
                        <FiEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600"
                      >
                        <FiTrash size={20} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* File Input Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[60vw]">
            <h2 className="text-2xl text-center text-[#0098F1] font-bold mb-4">
              Import Employees
            </h2>

            <div className="flex flex-col items-center mt-10 mb-5">
              <div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border border-[#0098F1] md:w-[500px] text-white cursor-pointer file:bg-[#0098F1] file:h-[50px] file:w-[200px] file:text-white file:border-[#0098F1] mb-3"
                  aria-label="Upload File"
                />
                <p>Accepted file formats are csv, xls, and xlsx.</p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={handleSave}
                className="bg-[#0098F1] text-white h-[40px] w-[150px] rounded-lg mr-3"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-transparent text-blue-500 border border-blue-500 h-[40px] w-[150px] rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnBoarding;
