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
    <div className="p-4 mt-4 h-screen ">
      <h1 className="text-[#E65F2B] lg:text-lg text-sm font-bold ">
        <span>Accounts / Payments</span>
      </h1>
      <div className=" overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#0098f1] pt-6 mx-4">
        <table className="min-w-full  w-screen overflow-x-scroll text-nowrap">
          <thead className="bg-[#0098F1] text-white">
            <tr className="text-center">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Client Name</th>
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((data) => (
              <tr key={data.id} className="font-normal text-center">
                <td className="py-2 px-4">{data.id}</td>
                <td className="py-2 px-4">{data.clientName}</td>
                <td className="py-2 px-4">{data.projectName}</td>
                <td className="py-2 px-4">{data.date}</td>
                <td className="py-2 px-4 text-center">
                  <img src={data.type} alt="image" />
                </td>
                <td className="py-2 text-center px-4">{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPayments;
