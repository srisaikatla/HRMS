import React, { useEffect, useState } from "react";
const ExpensesList = [
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/hr/accounts/Frame_masterCard.png",
    status: "Approved",
    amount: "$205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/hr/accounts/Frame_Paypal.png",
    status: "Pending",
    amount: "$205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/hr/accounts/Frame_Paypal.png",
    status: "Approved",
    amount: "$4,205",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/hr/accounts/Frame_Visa.png",
    status: "Pending",
    amount: "$800",
  },
  {
    item: "Items",
    orderBy: "Ava Alexander",
    from: "Flipkart India",
    date: "07,Mar,2021",
    paidBy: "src/assets/hr/accounts/Frame_Paypal.png",
    status: "Approved",
    amount: "$355",
  },
];
const AccountExpenses = () => {
  const [ExpensesData, setExpenseData] = useState([]);
  useEffect(() => {
    setExpenseData(ExpensesList);
  }, []);
  return (
    <div className=" mt-4 min-h-screen p-4 ">
      <h1 className="text-[#0098F1] lg:text-lg text-sm font-bold ">
        <span>Accounts / Expenses</span>
      </h1>
      <div className=" overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-4">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098f1]  text-white ">
            <tr>
              <th className="py-3 px-4">Items</th>
              <th className="py-3 px-4">Order By</th>
              <th className="py-3 px-4">From</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Paid By</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpensesData.map((data) => (
              <tr key={data.id} className="font-normal text-center">
                <td className="py-2 px-4">{data.item}</td>
                <td className="py-2 px-4">{data.orderBy}</td>
                <td className="py-2 px-4">{data.from}</td>
                <td className="py-2 px-4">{data.date}</td>
                <td className="py-2 px-4 text-center">
                  <img src={data.paidBy} alt="" />
                </td>
                <td className="py-2 px-4 text-center">
                  <p
                    type="button"
                    className={`${
                      data.status === "Approved"
                        ? "bg-[#2A8F4C]"
                        : "bg-[#F78822]"
                    } w-auto py-1 rounded-lg text-white text-center`}
                  >
                    {data.status}
                  </p>
                </td>
                <td className="py-2 px-4">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;
