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
    <div className=" ml-2 mr-2 pt-2 ">
      <h1 className="text-[#e65f2b] font-bold text-xl  mb-2">
        <span>Accounts/Expenses</span>
      </h1>
      <div className="">
        <table className="w-full text-left">
          <thead className="bg-[#0098f1]  text-white ">
            <tr>
              <th className="py-2 px-7">Items</th>
              <th className="py-2 px-7">Order By</th>
              <th className="py-2 px-7">From</th>
              <th className="py-2 px-7">Date</th>
              <th className="py-2 px-7">Paid By</th>
              <th className="py-2 px-7">Status</th>
              <th className="py-2 px-7">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ExpensesData.map((data) => (
              <tr key={data.id} className="font-normal">
                <td className="py-2 px-7">{data.item}</td>
                <td className="py-2 px-7">{data.orderBy}</td>
                <td className="py-2 px-7">{data.from}</td>
                <td className="py-2 px-7">{data.date}</td>
                <td className="py-2 px-7">
                  <img src={data.paidBy} alt="image" />
                </td>
                <td className="py-2 px-7">
                  <p
                    type="button"
                    className={`${
                      data.status === "Approved"
                        ? "bg-[#2A8F4C]"
                        : "bg-[#F78822]"
                    } w-40 py-1 rounded-lg text-white text-center`}
                  >
                    {data.status}
                  </p>
                </td>
                <td className="py-2 px-7">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountExpenses;
