import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { LuCheckSquare } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const ManageAddons = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-[820px] mt-[30px] shadow-xl px-5 py-6 pl-[30px] rounded-lg mx-auto bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Project & Time Sheet Management
            </div>
            <button
              onClick={openModal}
              className="flex justify-center items-center text-[18px] text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] px-5 rounded-md py-2 gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Track Employee Working Hours For Each Day.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Company Timesheets And Timesheet Approvals.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Missing Timesheets And Month Wisr Time Report Of Each Employee.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[820px] mt-[30px] shadow-xl px-5 py-6 pl-[30px] mx-auto rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Time Clock Web & Mobile App
            </div>
            <button
              onClick={openModal}
              className="flex justify-center items-center text-[18px] text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] px-5 rounded-md py-2 gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Track Employee Clock In And Clock Out Timings For Each Day.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Manual Timeclock And Correction Requests.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Day Wise Missing Timeclock Report For Each Employee.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Timeclock Approvals Based On Orgchart.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[820px] mt-[30px] shadow-xl px-5 py-6 pl-[30px] mx-auto rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Leave Management
            </div>
            <button
              onClick={openModal}
              className="flex justify-center items-center text-[18px] text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  px-5 rounded-md py-2 gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Add And Track Employee Leave Requests.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Manual Leave Request Approvals Based On Orgchart.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Configure Leave Policy For The Employees.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Month Wise Leave Reports And Employee Leave Balance Tracking.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[820px] mt-[30px] shadow-xl px-5 py-6 pl-[30px] mx-auto rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Expense Management
            </div>
            <button
              onClick={openModal}
              className="flex justify-center items-center text-[18px] text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] px-5 rounded-md py-2 gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">Track And Manage Employee Expenses.</div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Set Expense Policy For The Employees.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Expense Approvals And Schedule Payments Through Payroll Or
                Manually.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[820px] mt-[30px] shadow-xl px-5 py-6 pl-[30px] mx-auto rounded-lg bg-white">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-[#E65F2B]">
              Consultant Management
            </div>
            <button
              onClick={openModal}
              className="flex justify-center items-center text-[18px] text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252] px-5 rounded-md py-2 gap-2"
            >
              <FiPlusCircle className="text-xl" />
              Add
            </button>
          </div>
          <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Consultant Can Be An Individual Or Company.
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <LuCheckSquare className="text-[#E65F2B] text-lg" />
              <div className="text-md">
                Automate Calculation Of TDS And GST Based On The Given
                Percentage.
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalStatus && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-lg font-normal">
          <div className="flex flex-col w-[1000px] h-auto bg-white p-4 rounded-md">
            <button
              className="justify-end flex mr-2 text-[28px] text-[#E65F2B]"
              onClick={closeModal}
            >
              <RxCross2 />
            </button>
            <div className="w-full">
              <div className="w-1/2 flex flex-col p-3 bg-white mt-[50px]">
                <div className="w-full shadow-2xl mb-4 p-3">
                  <h3 className="text-2xl text-[#E65F2B] font-semibold mb-4">
                    Addons
                  </h3>
                  <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
                    <div className="flex justify-start gap-4 items-center">
                      <LuCheckSquare className="text-[#E65F2B] text-md" />
                      <div className="text-[16px] text-[#E65F2B]">
                        Project & Time Sheet Management ? (&#8377;5/emp/mo)
                      </div>
                    </div>
                    <div className="flex justify-start gap-4 items-center">
                      <LuCheckSquare className="text-[#E65F2B] text-md" />
                      <div className="text-[16px] text-[#E65F2B]">
                        Time clock web & Mobile App ? (&#8377;5/emp/mo)
                      </div>
                    </div>
                    <div className="flex justify-start gap-4 items-center">
                      <LuCheckSquare className="text-[#E65F2B] text-md" />
                      <div className="text-[16px] text-[#E65F2B]">
                        Leave payment ? (&#8377;5/emp/mo)
                      </div>
                    </div>
                    <div className="flex justify-start gap-4 items-center">
                      <LuCheckSquare className="text-[#E65F2B] text-md" />
                      <div className="text-[16px] text-[#E65F2B]">
                        Consultant Management ? (&#8377;5/emp/mo)
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <h3>Total Employees</h3>
                    <div>10</div>
                  </div>
                  <div className="flex justify-between items-center mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <h3>Subscription Type</h3>
                    <div className="mt-2 flex justify-center items-center gap-x-2">
                    <button className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white text-[15px] px-4 rounded-md'>Monthly</button>
              <button className='border border-t-[#E65F2B] border-b-[#FFC252] border-x-[#E65F2B] text-[#E65F2B] text-[15px] px-5 rounded-md'>Yearly</button>
               </div>
                  </div>
                  <div className="flex justify-between mx-4 pb-4 text-[#E65F2B]">
                    <h3>Total Addons (&#8377;15.00/emp/mo)</h3>
                    <div>10 x &#8377;15.00</div>
                  </div>
                </div>
                <div className="w-full">
                <h3 className="text-2xl text-[#E65F2B] font-semibold mb-4">
                    Next Bill
                  </h3>
                  <div className="flex flex-col gap-3 mt-[20px] mb-[30px] ml-[20px]">
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Next Bill Date
                    </div>
                    <div>10</div>
                    </div>
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Subscription Type
                    </div>
                    <div>10</div>
                    </div>
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Total Employees
                    </div>
                    <div>10</div>
                    </div>
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Total Base Price(10 x &#8377;15.00/mo)
                    </div>
                    <div>10</div>
                    </div>
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Base Price(&#8377;15.00/emp/mo)
                    </div>
                    <div>0 x &#8377;15.00</div>
                    </div>
                    <div className="flex justify-between mx-4 border-b pb-4 border-[#E65F2B] text-[#E65F2B]">
                    <div>
                      Total Addons(&#8377;0.00/emp/mo)
                    </div>
                    <div>0 x &#8377;0.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAddons;
