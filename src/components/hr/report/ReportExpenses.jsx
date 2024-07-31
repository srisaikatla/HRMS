import React from "react";

const userdata = [
  {
    id: 1,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721283778/d77e94a231a68a50285d0ebb0bf3d918_ritkfo.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 3,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721283710/baae287e4e41b584026b74d6ebc35f8c_wpdylq.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 5,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721283710/baae287e4e41b584026b74d6ebc35f8c_wpdylq.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    id: 6,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721282826/77b37218de7ac1a5b5a53934a1513757_kyouct.png",
    Status: "Pending",
    Amount: "$205",
  },
  {
    id: 7,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721282826/77b37218de7ac1a5b5a53934a1513757_kyouct.png",
    Status: "Pending",
    Amount: "$205",
  },
  {
    id: 8,
    Items: "Items",
    OrderBy: "Ava Alexander",
    From: "Flipkart India",
    Date: "16,mar,2002",
    PaidBy:
      "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721282826/77b37218de7ac1a5b5a53934a1513757_kyouct.png",
    Status: "Approved",
    Amount: "$205",
  },
];

const ReportExpenses = () => {
  const getButtonStyle = (status) => {
    if (status === "Approved") {
      return "bg-[#2A8F4C] text-white"; // Background color for Approved status
    } else if (status === "Pending") {
      return "bg-[#F78822] text-white"; // Background color for Pending status
    } else {
      return "bg-gray-300"; // Default background color if status is neither Approved nor Pending
    }
  };

  return (
    <div className=" flex flex-col h-screen ml-2 ">
      <h1 className="text-[#e65f2b] font-bold text-xl mb-2 ">
        Report/ Expenses
      </h1>

      <div className="overflow-x-auto ">
        <table className="min-w-full">
          <thead className="bg-[#0098F14D] text-white">
            <tr className="text-left">
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Items
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Order By
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                From
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Date
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Paid By
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Status
              </th>
              <th className="py-4 px-10 border-b bg-[#0098f1] bg-opacity-30 text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user) => (
              <tr key={user.id} className="text-black">
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {user.Items}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {user.OrderBy}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {user.From}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {user.Date}
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  <img
                    src={user.PaidBy}
                    alt={`Paid By: ${user.OrderBy}`}
                    style={{ height: "50px", width: "85px" }}
                  />
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  <button
                    className={`h-10 w-32 ${getButtonStyle(
                      user.Status
                    )} rounded-lg text-center`}
                  >
                    {user.Status}
                  </button>
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  {user.Amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportExpenses;
