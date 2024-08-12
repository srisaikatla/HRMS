import React, { useState, useEffect } from "react";
import CausalLeaveNavigation from "./causalLeave/CausalLeaveNavigation";
import SickLeaveNavigation from "./sickLeave/SickLeaveNavigation";
import EarnedLeaveNavigation from "./earnedLeave/EarnedLeaveNavigation";

const Leaves = () => {
  const [activeCard, setActiveCard] = useState("card1"); // Default to casual leave
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const causalLeaveEmployees =
      JSON.parse(localStorage.getItem("causalLeaveEmployees")) || [];
    const earnedLeaveEmployees =
      JSON.parse(localStorage.getItem("earnedLeaveEmployees")) || [];
    const sickLeaveEmployees =
      JSON.parse(localStorage.getItem("sickLeaveEmployees")) || [];

    setEmployees([
      ...causalLeaveEmployees,
      ...earnedLeaveEmployees,
      ...sickLeaveEmployees,
    ]);
  }, []);

  const countEmployeesByLeaveType = (leaveType) => {
    return employees.filter((employee) => employee.type === leaveType).length;
  };

  const leaveCards = [
    {
      id: "card1",
      title: "Casual leave",
      count: `${countEmployeesByLeaveType("Casual Leave")} employees`,
    },
    {
      id: "card2",
      title: "Sick leave",
      count: `${countEmployeesByLeaveType("Sick Leave")} employees`,
    },
    {
      id: "card3",
      title: "Earned leave",
      count: `${countEmployeesByLeaveType("Earned Leave")} employees`,
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const renderActiveComponent = () => {
    switch (activeCard) {
      case "card1":
        return <CausalLeaveNavigation />;
      case "card2":
        return <SickLeaveNavigation />;
      case "card3":
        return <EarnedLeaveNavigation />;
      default:
        return <div>Select a leave type to see details.</div>;
    }
  };

  return (
    <div className="  p-2 h-auto">
      <h1 className="text-xl ml-4">HR Management / Leaves</h1>

      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-span-1 p-4 mt-20">
          <div className="flex flex-col gap-4  ">
            {leaveCards.map(({ id, title, count }) => (
              <div
                key={id}
                className={`bg-white w-auto h-[70px] text-[#0098F1] rounded text-center cursor-pointer flex items-center justify-center ${
                  activeCard === id
                    ? "border-l-4 border-[#0098F1]"
                    : "border-none"
                }`}
                onClick={() => handleCardClick(id)}
              >
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <h1 className="text-[16px]">{count}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-auto col-span-4 p-4  ">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Leaves;
