import React from "react";

const SalesIncome = () => {
  return (
    <div className="bg-blue-500   h-[400px]  w-auto rounded-lg shadow-lg justify-center items-center flex flex-col">
      <h2 className="text-xl font-bold pl-8 text-white justify-center items-center">
        Sales Income
      </h2>
      <p className="text-xl text-white px-10 items-center justify-center">
        Overall 7,000
      </p>
      <div className="mt-4">
        <div className="flex items-end px-10 space-x-5">
          <div className="bg-white h-24 w-4 mx-2 rounded-t-lg"></div>
          <div className="bg-white h-32 w-4 mx-4 rounded-t-lg"></div>
          <div className="bg-white h-40 w-4 mx-4 rounded-t-lg"></div>
          <div className="bg-white h-48 w-4 mx-2 rounded-t-lg"></div>
          <div className="bg-white h-56 w-4 mx-2 rounded-t-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SalesIncome;
