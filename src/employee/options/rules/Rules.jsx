import React from "react";
import ShiftTimings from "./ShiftTimings";
import AnomalySettings from "./AnomalySettings";

const Rules = () => {
  return (
      <div
        className="px-4"
      >
        <h1 className="font-bold text-xl">Employee</h1>
        <p className="font-semibold my-1">
          <span>Dashboard</span> / <span>Rule list</span>
        </p>

        <div className="bg-[#0098F1] w-60 my-5 p-4 rounded-lg text-white">
          <p>General Shift</p>
          <p>Effective Date: 21 Jun, 2024.</p>
        </div>

        <div className=" shadow-md bg-white pb-5 mb-5">
          <div className="pl-8 pt-2 pb-6">
            <h1 className="text-[#E65F2B] font-semibold underline underline-offset-2">
              Overview
            </h1>
            <div className="my-2">
              <h1 className="text-[#E65F2B] font-semibold">Rule Name</h1>
              <p>General Shift</p>
            </div>
            <div>
              <h1 className="text-[#E65F2B] font-semibold">Description</h1>
              <p>
                This is a default description for the Attendence. You can
                customise this.
              </p>
            </div>
          </div>
          <ShiftTimings />
          <AnomalySettings />
        </div>
      </div>
  );
};

export default Rules;
