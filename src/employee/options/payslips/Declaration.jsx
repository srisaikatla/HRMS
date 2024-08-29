import React from "react";
import { RiFileList2Line } from "react-icons/ri";

const Declaration = () => {
  return (
    <div id="declaration" className="ml-9 mr-3 w-auto">
      <h3 className="mt-6 font-bold text-lg mb-8">
        SUMMARY OF YOUR TAX DECLARATION/PROOF SUBMISSION FOR FY{" "}
        <span className="text-[#2A546D] underline">2024-2025</span>
      </h3>
      <div className="text-white">
        <div className="text-white bg-[#2A546D] w-[210px] p-4 text-[17px] font-semibold rounded-r-md mb-8">
          Tax Scheme Selector
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Old Tax Scheme */}
          <div className="flex-1 border border-[#2A546D] p-6 flex flex-col  items-center">
          <RiFileList2Line className="text-[80px] p-4 rounded-full bg-[#2A546D] text-white" />
            <div className="text-[#2A546D] text-lg mb-6">Old Tax Scheme</div>
            <button className="text-white bg-[#2A546D] w-[200px] text-[21px] font-semibold py-1 rounded-md mb-10">
              Select
            </button>
            <table className="w-full border border-[#2A546D]">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="text-white bg-[#2A546D] text-wrap text-[18px] font-normal text-start p-2 border border-[#2A546D]"
                  >
                    Tax Slabs: All Figures In &#8377;/Annum Individuals Below
                    The Age Of 60 Years
                  </th>
                </tr>
              </thead>
              <tbody className="px-6">
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">Up To 2,50,000</td>
                  <td className="p-2 border border-[#2A546D]">Nil</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">2,50,001 - 5,00,000</td>
                  <td className="p-2 border border-[#2A546D]">5%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">5,00,001 - 10,00,000</td>
                  <td className="p-2 border border-[#2A546D]">20%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">10,00,001 And Above</td>
                  <td className="p-2 border border-[#2A546D]">30%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* New Tax Scheme */}
          <div className="flex-1 border border-[#2A546D] p-6 flex flex-col justify-center items-center">
            <RiFileList2Line className="text-[80px] p-4 rounded-full bg-[#2A546D] text-white" />
            <div className="text-[#2A546D] text-lg mb-6">New Tax Scheme</div>
            <button className="text-white bg-[#2A546D] w-[200px] text-[21px] font-semibold py-1 rounded-md mb-10">
              Select
            </button>
            <table className="w-full border border-[#2A546D]">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="text-white bg-[#2A546D] text-wrap text-[18px] font-normal text-start p-2 border border-[#2A546D]"
                  >
                    Tax Slabs: All Figures In &#8377;/Annum Individuals Below
                    The Age Of 60 Years
                  </th>
                </tr>
              </thead>
              <tbody className="px-6">
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">Up To 3,00,000</td>
                  <td className="p-2 border border-[#2A546D]">Nil</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">3,00,001 - 7,00,000</td>
                  <td className="p-2 border border-[#2A546D]">5%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">7,00,001 - 10,00,000</td>
                  <td className="p-2 border border-[#2A546D]">10%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">10,00,001 - 12,00,000</td>
                  <td className="p-2 border border-[#2A546D]">15%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">12,00,001 - 15,00,000</td>
                  <td className="p-2 border border-[#2A546D]">20%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#2A546D]">
                  <td className="p-2 border border-[#2A546D]">15,00,001 And Above</td>
                  <td className="p-2 border border-[#2A546D]">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
