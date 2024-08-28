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
    <div className="flex flex-col h-screen p-4 mt-4">
      <h1 className="text-[#E65F2B] lg:text-lg text-sm font-bold mb-4  ">
        Report / Expenses
      </h1>

      <div className="mt-5 overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-2">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098F1] text-white">
            <tr className="text-left">
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Items
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Order By
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                From
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Date
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Paid By
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Status
              </th>
              <th className="py-3 px-4 border-b bg-[#0098f1] bg-opacity-30 text-center text-sm lg:text-lg">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user) => (
              <tr key={user.id} className="text-black">
                <td className="py-2 px-2 border-b bg-transparent text-center text-sm lg:text-[16px]">
                  {user.Items}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center text-sm lg:text-[16px]">
                  {user.OrderBy}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center text-sm lg:text-[16px]">
                  {user.From}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center text-sm lg:text-[16px]">
                  {user.Date}
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center">
                  <img
                    src={user.PaidBy}
                    alt={`Paid By: ${user.OrderBy}`}
                    className="h-10 w-16 md:h-12 md:w-20" // Adjusted image size for responsiveness
                  />
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center">
                  <button
                    className={`h-6 w-24 md:h-8 md:w-32 ${getButtonStyle(
                      user.Status
                    )} rounded-lg text-center text-sm lg:text-[16px]`}
                  >
                    {user.Status}
                  </button>
                </td>
                <td className="py-2 px-2 border-b bg-transparent text-center text-sm lg:text-[16px]">
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
