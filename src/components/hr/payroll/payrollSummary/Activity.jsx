import React from "react";
import { IoIosChatbubbles } from "react-icons/io";

const Messages = [
  {
    name: "Sathish Chiluveru",
    description: "Payroll Refreshed for all employees.",
    date: "Jul24,2024 at 06:00 PM",
  },
  {
    name: "Mounika Ch",
    description: "Payroll Started Full Time Batch.",
    date: "Jul24,2024 at 06:50 PM",
  },
];

const Activity = () => {
  return (
    <div className="my-5">
      <h1 className="flex items-center gap-[2px] font-bold border-b pb-2 border-gray-400">
        <IoIosChatbubbles className="text-green-600 text-xl" />
        Activity
      </h1>
      <div>
        {Messages.map((message, index) => {
          const nameParts = message.name.split(" ");
          const firstNameLetter = nameParts[0][0];
          const lastNameLetter = nameParts[nameParts.length - 1][0];
          return (
            <div key={index} className="my-2 flex gap-x-3 items-center">
              <h1 className="bg-[#0098F1] text-white h-10 w-10 flex justify-center items-center rounded-full text-xl ">
                {firstNameLetter}
                {lastNameLetter}
              </h1>
              <div className="text-xs ">
                <h1 className="font-bold">{message.name}</h1>
                <p>{message.description}</p>
                <p>{message.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
