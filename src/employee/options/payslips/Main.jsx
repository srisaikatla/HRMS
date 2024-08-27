import React, { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { IoPrint } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CSVLink } from "react-csv";
import Payslip from "./Payslip"; // Ensure Payslip component is imported

function Main() {
  const sections = [{ name: "Payslips", id: "payslip" }]; // Only necessary section

  const [currentSection, setCurrentSection] = useState(0);
  const [earningsData, setEarningsData] = useState([]);
  const [deductionsData, setDeductionsData] = useState([]);

  useEffect(() => {
    const sectionElement = document.getElementById(sections[currentSection].id);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentSection, sections]);

  useEffect(() => {
    const earningsDataString = localStorage.getItem("earningsData");
    if (earningsDataString) {
      setEarningsData(JSON.parse(earningsDataString));
    }
  }, []);

  useEffect(() => {
    const deductionsDataString = localStorage.getItem("deductionsData");
    if (deductionsDataString) {
      setDeductionsData(JSON.parse(deductionsDataString));
    }
  }, []);

  const handlePDFDownload = () => {
    const input = document.getElementById(sections[currentSection].id);
    if (!input) {
      console.error("Element not found.");
      return;
    }

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210;
        const pageHeight = 295;
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

        pdf.save(`${sections[currentSection].name}.pdf`);
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
      });
  };

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
    <div id="main" className="text-[24px] font-semibold px-4 w-auto h-auto">
      <div id="submain1" className="flex flex-row justify-between items-center">
        <div>
          <span className="flex">Employee</span>
          <span className="text-[16px] font-medium">Dashboard / payslips</span>
        </div>
        <div className="w-[300px] h-[55px] flex rounded-lg bg-[#ef5f2b]">
          {[
            {
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
              onClick: handlePDFDownload,
            },
            {
              icon: <IoPrint className="text-white w-7 h-7" />,
            },
          ].map((button, index) => (
            <div
              key={index}
              className={`w-[100px] h-[55px] flex justify-center items-center bg-[#ef5f2b] ${
                index !== 2 ? "border-r-2" : ""
              } ${
                index === 0 ? "rounded-l-lg" : index === 2 ? "rounded-r-lg" : ""
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

      <div>{currentSection === 0 && <Payslip />}</div>
    </div>
  );
}

export default Main;
