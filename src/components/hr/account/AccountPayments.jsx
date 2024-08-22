import React, { useEffect, useState } from "react";

const initialData = [
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "src/assets/hr/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Nexa Wordpress",
    date: "25,Jun,2021",
    type: "src/assets/hr/accounts/Frame_masterCard.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Lucid HR Management",
    date: "12,Jul,2021",
    type: "src/assets/hr/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "13,Jul,2021",
    type: "src/assets/hr/accounts/Frame_Paypal.png",
    amount: "$4,205",
  },
  {
    id: "LA 021B",
    clientName: "Lucid",
    projectName: "Alpino-Bootstrap 4",
    date: "07,Mar,2021",
    type: "src/assets/hr/accounts/Frame_Visa.png",
    amount: "$4,205",
  },
];

const AccountPayments = () => {
  return (
    <div className="ml-2 pt-2 mr-2">
      <h1 className="text-[#E65F2B] text-xl font-bold mb-4">
        <span>Accounts/Payments</span>
      </h1>
      <div className="overflow-x-scroll">
        <table className=" text-left min-w-full w-screen overflow-x-scroll text-nowrap border-collapse">
          <thead className="bg-[#0098F1] text-white">
            <tr>
              <th className="py-2 px-10">ID</th>
              <th className="py-2 px-10">Client Name</th>
              <th className="py-2 px-10">Project Name</th>
              <th className="py-2 px-10">Date</th>
              <th className="py-2 px-10">Type</th>
              <th className="py-2 px-10">Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((data) => (
              <tr key={data.id} className="font-normal">
                <td className="py-2 px-10">{data.id}</td>
                <td className="py-2 px-10">{data.clientName}</td>
                <td className="py-2 px-10">{data.projectName}</td>
                <td className="py-2 px-10">{data.date}</td>
                <td className="py-2 px-10">
                  <img src={data.type} alt="image" />
                </td>
                <td className="py-2 px-10">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPayments;
