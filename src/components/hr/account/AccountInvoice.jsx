import React from "react";
import { useEffect, useState } from "react";

const InvoiceList = [
  {
    Invoice_Number: "#LA-0389",
    Client: "Lucid Pvt.",
    Date: "27 July, 2021",
    Type: "src/assets/hr/accounts/Frame_Visa.png",
    Status: "Approved",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0312",
    Client: "AUR Tech LLC.",
    Date: "13 July, 2021",
    Type: "src/assets/hr/accounts/Frame_masterCard.png",
    Status: "Pending",
    Amount: "$205",
  },
  {
    Invoice_Number: "#LA-0222",
    Client: "Core Infoweb Pvt.",
    Date: "12 July, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$4,205",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/accounts/Frame_masterCard.png",
    Status: "Pending",
    Amount: "$800",
  },
  {
    Invoice_Number: "#LA-0220",
    Client: "BT Technology",
    Date: "25 Jun, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$335",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$355",
  },
  {
    Invoice_Number: "#LA-0218",
    Client: "vPro Infoweb LLC.",
    Date: "07 Mar, 2021",
    Type: "src/assets/hr/accounts/Frame_Paypal.png",
    Status: "Approved",
    Amount: "$335",
  },
];

const AccountInvoice = () => {
  const [InvoiceData, setInvoiceData] = useState([]);
  useEffect(() => {
    setInvoiceData(InvoiceList);
  }, []);
  return (
    <div className="md:ml-5 mr-2 pt-2">
      <h1 className="text-[#E65F2B] text-xl font-bold mb-4">
        <span>Accounts/Invoice</span>
      </h1>
      <div className="mt-10 w-full overflow-x-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-[#0098F1] ">
        <table className="text-left min-w-full text-nowrap">
          <thead className="bg-[#0098F1] text-white">
            <tr>
              <th className="py-2 px-7">Invoice_Number</th>
              <th className="py-2 px-7">Client </th>
              <th className="py-2 px-7">Date</th>
              <th className="py-2 px-7">Type</th>
              <th className="py-2 px-7">Status</th>
              <th className="py-2 px-7">Amount</th>
            </tr>
          </thead>
          <tbody>
            {InvoiceData.map((data) => (
              <tr key={data.id} className="font-normal">
                <td className=" py-2 px-7">{data.Invoice_Number}</td>
                <td className="py-2 px-7">{data.Client}</td>
                <td className="py-2 px-7">{data.Date}</td>
                <td className="py-2 px-7">
                  <img src={data.Type} alt="image" />
                </td>
                <td className="py-2 px-7">
                  <p
                    type="button"
                    className={`${
                      data.Status === "Approved"
                        ? "bg-[#2A8F4C]"
                        : "bg-[#F78822]"
                    } w-40 py-1 rounded-lg text-white text-center`}
                  >
                    {data.Status}
                  </p>
                </td>
                <td className="py-2 px-7">{data.Amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountInvoice;
