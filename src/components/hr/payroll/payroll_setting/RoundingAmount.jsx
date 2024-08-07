import React, { useState } from "react";
import { RiChat3Line } from "react-icons/ri";

const RoundingAmount = () => {
  const [selectedOption, setSelectedOption] = useState("no-round");

  return (
    <div className="my-10 ">
      <div className="flex justify-center gap-x-2">
        <h2 className="text-lg font-bold text-[#0098f1]">
          Rounding Amount Type
        </h2>
        <div className="mt-1">
          <label className="block text-[#0098f1] font-semibold">
            <input
              type="radio"
              name="rounding"
              value="no-round"
              checked={selectedOption === "no-round"}
              onChange={() => setSelectedOption("no-round")}
              className="mr-2"
            />
            No Round
          </label>
          <label className="block text-[#0098f1] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="actual-round"
              checked={selectedOption === "actual-round"}
              onChange={() => setSelectedOption("actual-round")}
              className="mr-2"
            />
            Actual Round
          </label>
          <label className="block text-[#0098f1] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="round-up"
              checked={selectedOption === "round-up"}
              onChange={() => setSelectedOption("round-up")}
              className="mr-2"
            />
            Round Up
          </label>
          <label className="block text-[#0098f1] mt-2 font-semibold">
            <input
              type="radio"
              name="rounding"
              value="round-down"
              checked={selectedOption === "round-down"}
              onChange={() => setSelectedOption("round-down")}
              className="mr-2"
            />
            Round Down
          </label>
        </div>
      </div>
      <button className="mt-[120px] flex items-center text-[#0098f1] ml-16">
        <RiChat3Line className="text-3xl " />
        <h1 className="font-semibold">Activity</h1>
      </button>
    </div>
  );
};

export default RoundingAmount;
