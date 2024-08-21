import React from "react";

function OtherServices() {
  return (
    <>
      <div id="main" className=" flex justify-center items-center">
        <div
          id="submain"
          className="rounded-3xl bg-[#e65f2b] w-[600px] h-[300px]"
        >
          <p className="text-center text-white pt-6">HRMS Services</p>

          <div className="text-lg pt-6">
            <div className="justify-around items-center flex">
              <span className="w-auto text-white font-medium">
                On Boarding Service
              </span>
              <button className="bg-white rounded-lg p-4 text-[#049204]">
                Request Service1
              </button>
            </div>
            <div className="justify-around mt-2 items-center flex">
              <span className="w-auto px-5 text-white font-medium">
                {" "}
                PayRoll Service
              </span>
              <button className="bg-white  rounded-lg  p-4 text-[#049204]">
                Request Service2
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherServices;
