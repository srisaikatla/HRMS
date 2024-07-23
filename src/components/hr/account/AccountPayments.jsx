/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const initialData = [
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "/images/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Nexa Wordpress",
    date: "25,Jun,2021",
    type: "/images/Frame_masterCard.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Lucid HR Management",
    date: "12,Jul,2021",
    type: "/images/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "13,Jul,2021",
    type: "/images/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "/images/Frame_Visa.png",
    c: "$4,205",
  },
];

const AccountPayments = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {

    setPaymentData(initialData);
  }, []);

  return (
    <div className=" mt-24 pl-8">
      <h1 className="text-[#E65F2B] text-[20px]">
        <span>Accounts</span> / <span>Payments</span>
      </h1>
      <div className="mt-14">
        <table className="w-full">
          <thead>
            <tr className="bg-[#8fcff5] text-left">
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">ID</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Client Name</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Project Name</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Date</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Type</th>
              <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item) => (
              <tr key={item.id} className="font-semibold">
                <td className="py-2 px-4 border-b bg-transparent text-center">{item.id}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{item.clientName}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{item.projectName}</td>
                <td className="py-2 px-4 border-b bg-transparent text-center">{item.date}</td>

                <td>
                  <img src={item.type} alt="Payment Type" />
                </td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPayments;
