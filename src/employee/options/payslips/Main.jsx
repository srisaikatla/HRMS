import React, { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { IoPrint } from "react-icons/io5";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CSVLink } from "react-csv";
import Payslip from "./Payslip"; // Ensure Payslip component is imported
import SalaryStructure from "./SalaryStructure";
import Declaration from "./Declaration";
import BankAccount from "./BankAccount";
import { FaBars, FaTimes } from "react-icons/fa";

function Main() {
  const sections = [
    { name: "Payslips", id: "payslip" }, // Updated ID for Payslip
    { name: "Salary Structure", id: "salary-structure" },
    { name: "Declaration", id: "declaration" },
    { name: "Bank Account", id: "bank-account" },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [earningsData, setEarningsData] = useState([]);
  const [deductionsData, setDeductionsData] = useState([]);

  useEffect(() => {
    const sectionId = sections[currentSection].id;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
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

  const handleNextSection = (index) => {
    setCurrentSection(
      index === "next"
        ? (prev) => (prev === sections.length - 1 ? 0 : prev + 1)
        : index
    );
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePDFDownload = () => {
    const sectionId = sections[currentSection].id; // Get the current section's ID
    const input = document.getElementById(sectionId);
    if (!input) {
      console.error(`Element with id '${sectionId}' not found.`);
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

      <nav className="py-4 pt-10 ">
        <button className="text-black text-2xl sm:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="mb-56" /> : <FaBars />}
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex sm:flex-row flex-col justify-around items-center flex sm:space-y-0 sm:space-x-4`}
        >
          {sections.map((section, index) => (
            <li key={index} className="mt-2 sm:mt-0 ">
              <button
                className={`text-lg hover:text-[#ef5f2b] transition duration-300 ${
                  currentSection === index
                    ? "text-[#ef5f2b] underline underline-offset-4"
                    : ""
                } px-2 py-1 sm:px-4 sm:py-2 rounded`}
                onClick={() => handleNextSection(index)}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {currentSection === 0 && <Payslip />}
        {currentSection === 1 && <SalaryStructure />}
        {currentSection === 2 && <Declaration />}
        {currentSection === 3 && <BankAccount />}
      </div>
    </div>
  );
}

export default Main;
