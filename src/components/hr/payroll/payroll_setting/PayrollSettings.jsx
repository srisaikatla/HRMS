import React, { useState } from "react";
import PayrollBatches from "./PayrollBatches";
import Allowances from "./Allowances";
import Deduction from "./Deduction";
import PayPeriod from "./PayPeriod";
import TdsConfig from "./TdsConfig";
import PaySlipSetting from "./PaySlipSetting";
import RoundingAmount from "./RoundingAmount";
import BatchDetails from "./BatchDetails";

const PayrollSettings = () => {
  const [openTab, setOpenTab] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [batches, setBatches] = useState([]); // state to store the list of batches
  const [inBatchDetails, setInBatchDetails] = useState(false); // state to track if in BatchDetails view

  const activeClasses =
    "underline underline-offset-8 decoration-2 text-[#E65F2B]";
  const inactiveClasses = "";

  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
    setInBatchDetails(true); // Set inBatchDetails to true when a batch is clicked
  };

  const handleBatchesUpdate = (newBatches) => {
    setBatches(newBatches); // update batches state when new batches are added
  };

  const handleTabClick = (tab) => {
    setOpenTab(tab);
    if (tab !== 1) {
      setSelectedBatch(null);
      setInBatchDetails(false); // Ensure we are not in BatchDetails view
    }
  };

  const handleBack = () =>{
    setSelectedBatch(null)
    setInBatchDetails(false); // Ensure we are back to the PayrollBatches view
  }

  return (
    <div className="px-4 py-2">
      <h1 className="font-bold text-xl">Employee</h1>
      <p className="font-semibold my-1">
        <span>Dashboard</span> / <span>tickets</span>
      </p>

      <div className="px-2 my-5">
        <ul className="flex gap-x-14">
          <li
            onClick={() => handleTabClick(1)}
            className={openTab === 1 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={` font-semibold ${
                openTab === 1 ? activeClasses : inactiveClasses
              }`}
            >
              Payroll Batches
            </a>
          </li>
          <li
            onClick={() => handleTabClick(2)}
            className={openTab === 2 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 2 ? activeClasses : inactiveClasses
              }`}
            >
              Allowances
            </a>
          </li>
          <li
            onClick={() => handleTabClick(3)}
            className={openTab === 3 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 3 ? activeClasses : inactiveClasses
              }`}
            >
              Deduction
            </a>
          </li>
          <li
            onClick={() => handleTabClick(4)}
            className={openTab === 4 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 4 ? activeClasses : inactiveClasses
              }`}
            >
              Pay Period
            </a>
          </li>
          <li
            onClick={() => handleTabClick(5)}
            className={openTab === 5 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 5 ? activeClasses : inactiveClasses
              }`}
            >
              TDS Config
            </a>
          </li>
          <li
            onClick={() => handleTabClick(6)}
            className={openTab === 6 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 6 ? activeClasses : inactiveClasses
              }`}
            >
              Payslip Setting
            </a>
          </li>
          <li
            onClick={() => handleTabClick(7)}
            className={openTab === 7 ? "-mb-px mr-1" : "mr-1"}
          >
            <a
              href="#"
              className={`font-semibold ${
                openTab === 7 ? activeClasses : inactiveClasses
              }`}
            >
              Rounding amount
            </a>
          </li>
        </ul>
        <div className="w-full">
          {!selectedBatch && (
            <>
              {openTab === 1 && (
                <PayrollBatches
                  onBatchClick={handleBatchClick}
                  onBatchesUpdate={handleBatchesUpdate}
                />
              )}
              {openTab === 2 && <Allowances />}
              {openTab === 3 && <Deduction />}
              {openTab === 4 && <PayPeriod />}
              {openTab === 5 && <TdsConfig />}
              {openTab === 6 && <PaySlipSetting />}
              {openTab === 7 && <RoundingAmount />}
            </>
          )}
          {selectedBatch && inBatchDetails && openTab === 1 && (
            <BatchDetails
              batch={selectedBatch}
              batches={batches}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PayrollSettings;
