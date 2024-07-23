/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
const ExpensesList = [
  {
    "item": "Items",
    "orderBy": "Ava Alexander",
    "from": "Flipkart India",
    "date": "07,Mar,2021",
    "paidBy": "/images/Frame_masterCard.png",
    "status": "Approved",
    "amount": "$205"
  },
  {
    "item": "Items",
    "orderBy": "Ava Alexander",
    "from": "Flipkart India",
    "date": "07,Mar,2021",
    "paidBy": "/images/Frame_Paypal.png",
    "status": "Pending",
    "amount": "$205"
  },
  {
    "item": "Items",
    "orderBy": "Ava Alexander",
    "from": "Flipkart India",
    "date": "07,Mar,2021",
    "paidBy": "/images/Frame_Paypal.png",
    "status": "Approved",
    "amount": "$4,205"
  },
  {
    "item": "Items",
    "orderBy": "Ava Alexander",
    "from": "Flipkart India",
    "date": "07,Mar,2021",
    "paidBy": "/images/Frame_Visa.png",
    "status": "Pending",
    "amount": "$800"
  },
  {
    "item": "Items",
    "orderBy": "Ava Alexander",
    "from": "Flipkart India",
    "date": "07,Mar,2021",
    "paidBy": "/images/Frame_Paypal.png",
    "status": "Approved",
    "amount": "$355"
  }

]
const AccountExpenses = () => {
  const [ExpensesData, setExpenseData] = useState([]);
  useEffect(() => {
    setExpenseData(ExpensesList);
  }, []);
  return (
    <div className=" pl-8 mt-24">
      <h1 className="text-[#E65F2B] text-[20px]">
        <span>Accounts</span> / <span>Expenses</span>
      </h1>
      <div className="mt-14">
        <table className="w-full">
          <thead>
            <tr className="bg-[#8fcff5] text-left ">
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Items</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Order By</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">From</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Date</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Paid By</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Status</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpensesData.map((data) => (
              <tr key={data.id} className="font-semibold">
                <td className="py-2 px-4 border-b bg-transparent text-center">{data.item}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{data.orderBy}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{data.from}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{data.date}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  <img src={data.paidBy} alt="image" />
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">
                  <p
                    type="button"
                    className={`${data.status === "Approved"
                      ? "bg-[#2A8F4C]"
                      : "bg-[#F78822]"
                      } w-40 py-1 rounded-lg text-white text-center`}
                  >
                    {data.status}
                  </p>
                </td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;
