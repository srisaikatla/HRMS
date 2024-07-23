/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
const InvoiceList = [
    {
        "Invoice_Number":"#LA-0389",
        "Client":"Lucid Pvt.",
        "Date":"27 July, 2021",
        "Type":"public/images/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail 1visa.png",
        "Status":"Approved",
        "Amount":"$205"
    },
    {
        "Invoice_Number":"#LA-0312",
        "Client":"AUR Tech LLC.",
        "Date":"13 July, 2021",
        "Type":"public/images/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail 1visa.png",
        "Status":"Pending",
        "Amount":"$205"
    },
    {
        "Invoice_Number":"#LA-0222",
        "Client":"Core Infoweb Pvt.",
        "Date":"12 July, 2021",
        "Type":"public/images/Frame_1171275914-preview (1).png",
        "Status":"Approved",
        "Amount":"$4,205"
    },
    {
        "Invoice_Number":"#LA-0220",
        "Client":"BT Technology",
        "Date":"25 Jun, 2021",
        "Type":"public/images/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment-thumbnail 1.png",
        "Status":"Pending",
        "Amount":"$800"
    },
    {
        "Invoice_Number":"#LA-0220",
        "Client":"BT Technology",
        "Date":"25 Jun, 2021",
        "Type":"public/images/Frame_1171275914-preview (1).png",
        "Status":"Approved",
        "Amount":"$335"
    },
    {
        "Invoice_Number":"#LA-0218",
        "Client":"vPro Infoweb LLC.",
        "Date":"07 Mar, 2021",
        "Type":"public/images/Frame_1171275914-preview (1).png",
        "Status":"Approved",
        "Amount":"$355"
    },
    {
        "Invoice_Number":"#LA-0218",
        "Client":"vPro Infoweb LLC.",
        "Date":"07 Mar, 2021",
        "Type":"public/images/Frame_1171275914-preview (1).png",
        "Status":"Approved",
        "Amount":"$335"
    }
    
]

const AccountInvoice = () => {
    const [InvoiceData, setInvoiceData] = useState([]);
  useEffect(() => {
    setInvoiceData(InvoiceList);
  }, []); 
  return (
    <div className='w-full  mt-24 pl-8'>
        <h2 className='text-[#E65F2B] text-[20px] pt-4'>Accounts/Invoice</h2>
            <table className='min-w-full md:table border-collapse'>
                <thead style={{backgroundColor:'rgba(0, 152, 241, 0.3)'}}>
                    <tr className="text-left">
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Invoice Number</th>
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Client</th>
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Date</th>
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Type</th>
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Status</th>
                        <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">Amount</th>
                    </tr>
                </thead>
                <tbody>
                {InvoiceData.map((item, index) => (
                    <tr key={index} className="text-left font-medium text-[15px]">
                        <td className="py-2 px-4 border-b bg-transparent text-center">{item.Invoice_Number}</td>
                        <td className="py-2 px-4 border-b bg-transparent text-center">{item.Client}</td>
                        <td className="py-2 px-4 border-b bg-transparent text-center">{item.Date}</td>
                        <td className="py-2 px-4 border-b bg-transparent text-center">
                            <img src={item.Type} alt="Type" />
                        </td>
                        <td className="py-2 px-4 border-b bg-transparent text-center">
                            {item.Status === "Approved" ? (
                                <button className="text-white py-1 w-28 rounded-xl" style={{ backgroundColor: 'rgba(42, 143, 76, 1)' }}>Approved</button>
                            ) : (
                                <button className="text-white py-1 w-28 rounded-xl" style={{ backgroundColor: 'rgba(247, 136, 34, 1)' }}>Pending</button>
                            )}
                        </td>
                        <td className="py-2 px-4 border-b bg-transparent text-center" >{item.Amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  );
};

export default AccountInvoice;
