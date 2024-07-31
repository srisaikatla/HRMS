import React, { useState } from "react";

const ShiftTimings = () => {
  const [isSwitchAutoDeductionOn, setIsSwitchAutoDeductionOn] = useState(false);
  const [isSwitchTrackingOn, setIsSwitchTrackingOn] = useState(false);

  return (
    <div className="">
      <h1 className="pl-8 bg-[#0098F1] py-2 text-white">Shift Timings</h1>

      <div className="pl-8 py-2 my-2">
        <h1 className="text-[#E65F2B]">In Time</h1>
        <p>9:00 AM</p>
      </div>

      <hr className="bg-[#E65F2B] h-[2px]" />

      <div className="pl-8 py-2 my-2">
        <h1 className="text-[#E65F2B]">Out Time</h1>
        <p>9:00 AM</p>
      </div>

      <hr className="bg-[#E65F2B] h-[2px]" />

      <div className="pl-8 py-2 mt-2 mb-4">
        <div className="flex justify-between">
          <h1 className="text-[#E65F2B]">Enable Auto Deduction</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSwitchAutoDeductionOn ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setIsSwitchAutoDeductionOn(!isSwitchAutoDeductionOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                    isSwitchAutoDeductionOn ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{isSwitchAutoDeductionOn ? "Off" : "On"}</p>
            </div>
          </div>
        </div>

        <p className="text-[#E65F2B] my-2">Auto Deduction Date 31</p>

        <div className="flex justify-between">
          <h1 className="text-[#E65F2B]">Enable Anomaly Tracking</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSwitchTrackingOn ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setIsSwitchTrackingOn(!isSwitchTrackingOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                    isSwitchTrackingOn ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{isSwitchTrackingOn ? "Off" : "On"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftTimings;
