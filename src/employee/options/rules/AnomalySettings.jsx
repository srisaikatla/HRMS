import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const AnomalySettings = () => {
  const [totalDuration, setTotalDuration] = useState(false);
  const [noOfBreaks, setNoOfBreaks] = useState(false);
  const [clockOut, setClockOut] = useState(false);
  const [overTime, setOverTime] = useState(false);
  const [isSelfieOn, setIsSelfieOn] = useState(false);
  const [isCompOn, setIsCompOn] = useState(false);
  const [penaltyRulesOn, setPenaltyRulesOn] = useState(false);
  return (
    <div>
      <h1 className="pl-8 bg-[#0098F1] py-2 text-white">Anomaly Settings</h1>

      <div className="pl-8 py-2 my-2 leading-7">
        <h1 className="text-[#E65F2B]">In Time</h1>
        <p className="font-semibold">In Time Grace Period</p>
        <p className="text-gray-600">00:15</p>
      </div>

      <hr className="bg-[#E65F2B] h-[2px]" />

      <div className="pl-8 py-2 my-2 leading-7">
        <h1 className="text-[#E65F2B]">Out Time</h1>
        <p className="font-semibold">Out Time Grace Period</p>
        <p className="text-gray-600">00:15</p>
      </div>

      <hr className="bg-[#E65F2B] h-[2px]" />

      <div className="pl-8 py-2 my-2 leading-7">
        <h1 className="text-[#E65F2B]">Working Duration</h1>
        <p className="font-semibold">Full Day</p>
        <p className="text-gray-600">08:00</p>
      </div>

      <hr className="bg-[#E65F2B] h-[2px]" />

      <div className="pl-8 py-2 my-2 leading-7">
        <p className="font-semibold">Half Day</p>
        <p className="text-gray-600">04:00</p>
      </div>

      <div className="pl-8 leading-10">
        <div className="flex gap-2 items-center">
          <button
            className="border-2 w-7 h-7 border-[#E65F2B] rounded-md"
            onClick={() => setTotalDuration(!totalDuration)}
          >
            {totalDuration ? (
              <MdOutlineDone className="bg-[#E65F2B] text-2xl text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#E65F2B] font-semibold">Maximum Total Duration</p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="border-2 w-7 h-7 border-[#E65F2B] rounded-md"
            onClick={() => setNoOfBreaks(!noOfBreaks)}
          >
            {noOfBreaks ? (
              <MdOutlineDone className="bg-[#E65F2B] text-2xl text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#E65F2B] font-semibold">Maximum No.Of Breaks</p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="border-2 w-7 h-7 border-[#E65F2B] rounded-md"
            onClick={() => setClockOut(!clockOut)}
          >
            {clockOut ? (
              <MdOutlineDone className="bg-[#E65F2B] text-2xl text-white" />
            ) : (
              ""
            )}
          </button>
          <p className="text-[#E65F2B] font-semibold">Auto Clock - Out</p>
        </div>
      </div>

      <div className="pl-8 my-5 leading-10">
        <div className="flex justify-between">
          <h1 className="text-[#0098F1]">Enable OverTime</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                overTime ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setOverTime(!overTime)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  overTime ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{overTime ? "Off" : "On"}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h1 className="text-[#0098F1]">Enable Attendance With Selfie</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isSelfieOn ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setIsSelfieOn(!isSelfieOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isSelfieOn ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{isSelfieOn ? "Off" : "On"}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h1 className="text-[#0098F1]">Enable Comp Off</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                isCompOn ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setIsCompOn(!isCompOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  isCompOn ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{isCompOn ? "Off" : "On"}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <h1 className="text-[#0098F1] ">Enable Penalty Rules</h1>
          <div className="mr-10">
            <div
              className={`  h-6 w-24 rounded-full cursor-pointer p-1 flex items-center ${
                penaltyRulesOn ? "bg-red-500" : "bg-blue-500"
              } `}
              onClick={() => setPenaltyRulesOn(!penaltyRulesOn)}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white duration-300 ${
                  penaltyRulesOn ? "translate-x-16" : "translate-x-0"
                }`}
              ></div>
              <p className="ml-4 text-white">{penaltyRulesOn ? "Off" : "On"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 shadow-lg bg-white p-5 ">
        <h1 className="text-[#E65F2B]">In Time</h1>
        <div className="flex gap-3 my-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="late">Late Comming Allowed</label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="p_interval">Penalty Interval</label>
            <input
              type="text"
              id="p_interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="interval">Penalty</label>
            <input
              type="text"
              id="interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>Leave Deduction</p>
            <div className="bg-[#E65F2B] w-96 p-1 rounded-md">
              <button type="button" className="bg-white rounded-xl p-1">
                <span className="bg-[#0098F1] p-[2px] px-1 rounded-full">
                  1
                </span>
                <span className="text-[#0098F1] ml-3">Pay Of Loss</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 shadow-lg bg-white p-5 ">
        <h1 className="text-[#E65F2B]">Out Time</h1>
        <div className="flex gap-3 my-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="late">Early Leave Allowed</label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="p_interval">Penalty Interval</label>
            <input
              type="text"
              id="p_interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="interval">Penalty</label>
            <input
              type="text"
              id="interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>Leave Deduction</p>
            <div className="bg-[#E65F2B] w-96 p-1 rounded-md">
              <button type="button" className="bg-white rounded-xl p-1">
                <span className="bg-[#0098F1] p-[2px] px-1 rounded-full">
                  1
                </span>
                <span className="text-[#0098F1] ml-3">Pay Of Loss</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 shadow-lg bg-white p-5 ">
        <h1 className="text-[#E65F2B]">Work Duration</h1>
        <div className="flex gap-3 my-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="late">Shortfall In WD Allowed</label>
            <input
              type="text"
              id="late"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="p_interval">Penalty Interval</label>
            <input
              type="text"
              id="p_interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="interval">Penalty</label>
            <input
              type="text"
              id="interval"
              className="outline-none border border-[#E65F2B] h-10 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>Leave Deduction</p>
            <div className="bg-[#E65F2B] w-96 p-1 rounded-md flex flex-wrap gap-4">
              <button type="button" className="bg-white rounded-xl p-1">
                <span className="bg-[#0098F1] p-[2px] px-1 rounded-full">
                  1
                </span>
                <span className="text-[#0098F1] ml-3">Pay Of Loss</span>
              </button>
              <button type="button" className="bg-white rounded-xl p-1">
                <span className="bg-[#0098F1] p-[2px] px-1 rounded-full">
                  1
                </span>
                <span className="text-[#0098F1] ml-3">Pay Of Loss</span>
              </button>
              <button type="button" className="bg-white rounded-xl p-1">
                <span className="bg-[#0098F1] p-[2px] px-1 rounded-full">
                  1
                </span>
                <span className="text-[#0098F1] ml-3">Pay Of Loss</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnomalySettings;
