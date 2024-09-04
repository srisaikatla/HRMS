import React from 'react';

// Sample data
const Tabledata = [
    {
        id: 1,
        "S.no": 1,
        "Employee Name": "John Doe",
        "Employee ID": "235434",
        "Employee E-mail": "johndoe@example.com",
        "Action": "Pending"
    },
    {
        id: 2,
        "S.no": 2,
        "Employee Name": "Jane Smith",
        "Employee ID": "235435",
        "Employee E-mail": "janesmith@example.com",
        "Action": "Approved"
    },
    {
        id: 3,
        "S.no": 3,
        "Employee Name": "Alice Johnson",
        "Employee ID": "235436",
        "Employee E-mail": "alicejohnson@example.com",
        "Action": "Pending"
    },
    {
        id: 4,
        "S.no": 4,
        "Employee Name": "Bob Brown",
        "Employee ID": "235437",
        "Employee E-mail": "bobbrown@example.com",
        "Action": "Approved"
    },
    {
        id: 5,
        "S.no": 5,
        "Employee Name": "Charlie Davis",
        "Employee ID": "235438",
        "Employee E-mail": "charliedavis@example.com",
        "Action": "Pending"
    }
];

const EmployeePasswordReq = () => {
    const handleApproveClick = (id) => {
        // Implement your approve logic here
        console.log(`Approve clicked for employee ID ${id}`);
    };

    const getButtonStyles = (action) => {
        switch (action) {
            case 'Pending':
                return 'bg-[#F78822] hover:bg-yellow-600 text-white';
            case 'Approved':
                return 'bg-[#12883A] hover:bg-green-600 text-white';
            default:
                return 'bg-gray-300 text-gray-700';
        }
    };

    return (
        <div className="p-6 bg-sky-100 min-h-screen">
            <h1 className="text-lg font-bold mb-10 text-[#0098F1]">
                Hr Management &gt; Password Employee
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#0098F126] border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-[#0098F1] text-white">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium">S.no</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium">Employee Name</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium">Employee ID</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium">Employee E-mail</th>
                            <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tabledata.map((row) => (
                            <tr key={row.id}>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">{row["S.no"]}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">{row["Employee Name"]}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">{row["Employee ID"]}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">{row["Employee E-mail"]}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleApproveClick(row["Employee ID"])}
                                            className={`h-[30px] w-[100px] rounded ${getButtonStyles(row["Action"])}`}
                                        >
                                            {row["Action"]}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeePasswordReq;
