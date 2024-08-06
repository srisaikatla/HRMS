import React from "react";
import { RiFileList2Line } from "react-icons/ri";

const Declaration = () => {
  return (
    <div id="declaration" className="ml-9 mr-3 w-auto">
      <h3 className="mt-6 font-bold text-lg mb-8">
        SUMMARY OF YOUR TAX DECLARATION/PROOF SUBMISSION FOR FY{" "}
        <span className="text-[#E65F2B] underline">2024-2025</span>
      </h3>
      <div className="text-white ">
        <div className="text-white bg-[#E65F2B] w-[210px] p-4 text-[17px] font-semibold rounded-r-md mb-8">
          Tax Scheme Selector
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2 border border-[#E65F2B] p-6 flex flex-col justify-center items-center">
            <RiFileList2Line className="text-[80px] p-4 -mt-24 rounded-full bg-[#E65F2B] text-white" />
            <div className="text-[#E65F2B] text-lg mb-6">Old Tax Scheme</div>
            <button className="text-white bg-[#E65F2B] w-[200px] text-[21px] font-semibold py-1 rounded-md mb-10">
              Select
            </button>
            <table className="w-full border border-[#E65F2B]">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="text-white bg-[#E65F2B] text-wrap text-[18px] font-normal text-start p-2 border border-[#E65F2B]"
                  >
                    Tax Slabs: All Figures In &#8377;/Annum Individuals Below
                    The Age Of 60 Years
                  </th>
                </tr>
              </thead>
              <tbody className="px-6">
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    Up To 2,50,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">Nil</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    2,50,001 - 5,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">5%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    5,00,001 - 10,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">20%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    10,00,001 And Above
                  </td>
                  <td className="p-2 border border-[#E65F2B]">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 border border-[#E65F2B] p-6 flex flex-col justify-center items-center">
            <RiFileList2Line className="text-[80px] p-4 rounded-full bg-[#E65F2B] text-white" />
            <div className="text-[#E65F2B] text-lg mb-6">New Tax Scheme</div>
            <button className="text-white bg-[#E65F2B] w-[200px] text-[21px] font-semibold py-1 rounded-md mb-10">
              Select
            </button>
            <table className="w-full border border-[#E65F2B]">
              <thead>
                <tr>
                  <th
                    colSpan="2"
                    className="text-white bg-[#E65F2B] text-wrap text-[18px] font-normal text-start p-2 border border-[#E65F2B]"
                  >
                    Tax Slabs: All Figures In &#8377;/Annum Individuals Below
                    The Age Of 60 Years
                  </th>
                </tr>
              </thead>
              <tbody className="px-6">
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    Up To 3,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">Nil</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    3,00,001 - 7,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">5%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    7,00,001 - 10,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">10%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    10,00,001 - 12,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">15%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    12,00,001 - 15,00,000
                  </td>
                  <td className="p-2 border border-[#E65F2B]">20%</td>
                </tr>
                <tr className="text-black font-semibold text-[18px] border border-[#E65F2B]">
                  <td className="p-2 border border-[#E65F2B]">
                    15,00,001 And Above
                  </td>
                  <td className="p-2 border border-[#E65F2B]">30%</td>
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
