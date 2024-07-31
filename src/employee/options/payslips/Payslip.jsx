import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { IoPrint } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CSVLink } from "react-csv";
import logo from "../../../employeeAssets/spydlogo.png";
import profile from "../../../employeeAssets/profile/man.png";

// Data for Earnings and Deductions
const earningsData = [
  { sno: 1, earnings: "Basic Salary", total: "₹ 15000" },
  { sno: 2, earnings: "House Rent Allowance (H.R.A)", total: "₹ 5000" },
  { sno: 3, earnings: "Bonus", total: "₹ 1500" },
  { sno: 4, earnings: "Conveyance", total: "₹ 800" },
  { sno: 5, earnings: "Other Allowance", total: "₹ 800" },
];

const deductionsData = [
  { sno: 1, deductions: "Tax Deducted at Source (TDS)", total: "₹ 1500" },
  { sno: 2, deductions: "ESIC", total: "₹ 50" },
  { sno: 3, deductions: "Provident Fund", total: "₹ 150" },
  { sno: 4, deductions: "C/Bank Loan", total: "₹ 80" },
  { sno: 5, deductions: "Other Deductions", total: "₹ 80" },
];

// Data for Profile and Payslip details
const profileData = {
  name: "Raghavendra Kommula",
  position: "Software Developer",
  employeeId: "SDT-26",
};

const payslipDetails = {
  number: "#8390",
  month: "August 2024",
};

// Utility function to sum up the total amount
const calculateTotal = (data, key) => {
  return data.reduce((sum, item) => {
    const amount = parseFloat(item[key].replace(/[₹,]/g, ""));
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0);
};

const Table = ({ headers, data }) => (
  <table className="min-w-full bg-white">
    <thead className="bg-[#ef5f2b] text-white text-[18px]">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="py-2 px-4 text-left">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="text-[16px] font-normal  border-none">
      {data.map((item, index) => (
        <tr key={index}>
          {Object.values(item).map((value, i) => (
            <td key={i} className="py-2 px-4">
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

function Payslip() {
  // Extract month and year from payslipDetails
  const [payslipMonth, payslipYear] = payslipDetails.month.split(" ");

  // Calculate totals
  const totalEarnings = calculateTotal(earningsData, "total");
  const totalDeductions = calculateTotal(deductionsData, "total");
  const netEarnings = totalEarnings - totalDeductions;

  // PDF download handler function
  const handlePDFDownload = () => {
    const input = document.getElementById("submain2");
    if (!input) {
      console.error("Element with id 'submain2' not found.");
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          pdf.addPage();
          pdf.addImage(
            imgData,
            "PNG",
            0,
            heightLeft - imgHeight,
            imgWidth,
            imgHeight
          );
          heightLeft -= pageHeight;
        }

        pdf.save(`payslip_${payslipDetails.number}.pdf`);
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  };

  // Convert data to CSV format
  const convertToCSV = (headers, data) => {
    const headerRow = headers.join(",");
    const bodyRows = data.map((row) =>
      Object.values(row)
        .map((value) => `"${value}"`)
        .join(",")
    );
    return [headerRow, ...bodyRows].join("\n");
  };

  const earningsCSV = convertToCSV(["S.No", "Earnings", "Total"], earningsData);
  const deductionsCSV = convertToCSV(
    ["S.No", "Deductions", "Total"],
    deductionsData
  );

  const csvData = [
    { title: "Earnings", data: earningsCSV },
    { title: "Deductions", data: deductionsCSV },
  ];

  return (
    <>
      <div id="main" className="text-[24px] font-semibold px-4 w-auto h-auto">
        <div
          id="submain1"
          className="flex flex-row justify-between items-center"
        >
          <div>
            <span className="flex">Employee</span>
            <span className="text-[16px] font-medium">
              Dashboard / payslips
            </span>
          </div>
          <div className="w-[300px] h-[55px] flex rounded-lg bg-[#ef5f2b]">
            {[
              {
                icon: <BsFiletypeCsv className="text-white w-7 h-7" />,
                key: "csv",
                component: (
                  <CSVLink
                    data={csvData.map((csv) => ({
                      data: csv.data,
                      filename: `payslip_${csv.title}.csv`,
                    }))}
                    className="w-[100px] h-[55px] flex justify-center items-center bg-[#ef5f2b] rounded-l-lg"
                    target="_blank"
                  >
                    <BsFiletypeCsv className="text-white w-7 h-7" />
                  </CSVLink>
                ),
              },
              {
                icon: <FaRegFilePdf className="text-white w-7 h-7" />,
                key: "pdf",
                onClick: handlePDFDownload,
              },
              {
                icon: <IoPrint className="text-white w-7 h-7" />,
                key: "print",
              },
            ].map((button) => (
              <div
                key={button.key}
                className={`w-[100px] h-[55px] flex justify-center items-center bg-[#ef5f2b] ${
                  button.key !== "print" ? "border-r-2" : ""
                } ${
                  button.key === "csv"
                    ? "rounded-l-lg"
                    : button.key === "print"
                    ? "rounded-r-lg"
                    : ""
                }`}
              >
                {button.component ? (
                  button.component
                ) : (
                  <button onClick={button.onClick}>{button.icon}</button>
                )}
              </div>
            ))}
          </div>
        </div>
        <div id="submain2" className="submain2 bg-white pb-6 m-2 py-2 px-4">
          <h1 className="text-lg text-center">
            PAYSLIP FOR THE MONTH OF {payslipMonth.toUpperCase()} {payslipYear}
          </h1>
          <div className="flex flex-row justify-between pt-20">
            <div id="company" className="flex w-[300px] flex-row items-start">
              <img src={logo} className="w-20 h-20" alt="Company Logo" />
              <div className="ml-2 leading-normal flex flex-col ">
                <span className="font-medium text-[15px]">
                  SPY D TECHNOLOGY PVT LTD
                </span>
                <span className="font-normal text-[14px]">
                  Meera Complex, Plot No 852, 2nd Floor, Madhapur, 100 Feet
                  Road, Hyderabad, Telangana - 500081
                </span>
              </div>
            </div>
            <div className="w-[200px] h-[55px] text-right">
              <span className="text-[16px] block">
                PAYSLIP {payslipDetails.number}
              </span>
              <span className="text-[16px] block">
                Salary Month, {payslipDetails.month}
              </span>
            </div>
          </div>
          <div
            id="profile"
            className="flex w-[300px] flex-row items-start pt-10"
          >
            <img src={profile} className="w-16 h-16" alt="Profile" />
            <div className=" ml-6 flex flex-col leading-normal ">
              <span className="font-medium text-[15px]">
                {profileData.name}
              </span>
              <span className="font-normal text-[14px]">
                {profileData.position}
              </span>
              <span className="font-normal text-[14px]">
                Employee ID: {profileData.employeeId}
              </span>
            </div>
          </div>
          {/* Earnings Table */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Earnings Details</h2>
            <Table
              headers={["S.No", "Earnings", "Total"]}
              data={earningsData}
            />
          </div>
          {/* Deductions Table */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Deductions Details</h2>
            <Table
              headers={["S.No", "Deductions", "Total"]}
              data={deductionsData}
            />
          </div>
          {/* Net Earnings */}
          <div className="mt-10 flex justify-between font-semibold text-lg">
            <span>Gross Earnings:</span>
            <span>{`₹ ${totalEarnings.toFixed(2)}`}</span>
          </div>
          <div className="mt-2 flex justify-between font-semibold text-lg">
            <span>Total Deductions:</span>
            <span>{`₹ ${totalDeductions.toFixed(2)}`}</span>
          </div>
          <div className="mt-2 flex justify-between font-semibold text-lg">
            <span>Net Earnings:</span>
            <span>{`₹ ${netEarnings.toFixed(2)}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payslip;
