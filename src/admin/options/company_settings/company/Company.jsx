import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import WorkLocations from "./WorkLocations";
import Departments from "./Departments";
import CostCenters from "./CostCenters";
import CompanyLogo from "./CompanyLogo";
import EmployeeFeedback from "./EmployeeFeedback";
import { format } from "date-fns";

const NavigationItem = ({ item, isActive, onClick }) => (
  <h2
    onClick={onClick}
    className={`text-[#E65F2B] text-lg p-2 cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white"
        : "hover:bg-gray-100"
    }`}
    role="button"
    aria-label={item}
    aria-selected={isActive}
  >
    {item}
  </h2>
);

const Company = () => {
  const [activeLeftItem, setActiveLeftItem] = useState("Work Locations");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adminName = "Mounika";

  // Separate activity logs for each section
  const [activities, setActivities] = useState({
    "Work Locations": [],
    Departments: [],
    "Cost Centers": [],
    "Company Logo": [],
    "Employee Feedback": [],
  });

  const handleLeftItemClick = (item) => {
    setActiveLeftItem(item);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Update the logActivity function to include the section name
  const logActivity = (section, updatedMessage) => {
    const now = new Date();
    const date = format(now, "dd/MM/yyyy");
    const time = format(now, "hh:mm:ss a");

    setActivities((prevActivities) => ({
      ...prevActivities,
      [section]: [
        {
          adminName,
          updated: updatedMessage,
          date,
          time,
        },
        ...prevActivities[section],
      ],
    }));
  };

  return (
    <div className="min-h-screen  p-4 flex flex-col">
      {/* Conditionally render the Add button */}
      {(activeLeftItem === "Work Locations" ||
        activeLeftItem === "Departments" ||
        activeLeftItem === "Cost Centers") && (
        <div className="flex justify-end ">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex  items-center text-lg bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white h-[50px] w-[140px] justify-center rounded-lg hover:from-[#d4551a] hover:to-[#ffc107] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
          >
            <FaPlusCircle className="text-2xl mr-2" aria-hidden="true" />
            Add New
          </button>
        </div>
      )}

      <div className="flex flex-1">
        <div className="w-full sm:w-1/4 p-4 flex flex-col">
          <div className="relative  flex-grow border-r-2 h-auto border-[#E65F2B]">
            {[
              "Work Locations",
              "Departments",
              "Cost Centers",
              "Company Logo",
              "Employee Feedback",
            ].map((item) => (
              <NavigationItem
                key={item}
                item={item}
                isActive={activeLeftItem === item}
                onClick={() => handleLeftItemClick(item)}
              />
            ))}
          </div>
        </div>

        <div className="w-full sm:w-3/4 p-4 flex flex-col flex-grow">
          {activeLeftItem === "Work Locations" && (
            <WorkLocations
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Work Locations", message)}
            />
          )}
          {activeLeftItem === "Departments" && (
            <Departments
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Departments", message)}
            />
          )}
          {activeLeftItem === "Cost Centers" && (
            <CostCenters
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Cost Centers", message)}
            />
          )}
          {activeLeftItem === "Company Logo" && (
            <CompanyLogo
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              logActivity={(message) => logActivity("Company Logo", message)}
            />
          )}
          {activeLeftItem === "Employee Feedback" && (
            <EmployeeFeedback
              logActivity={(message) =>
                logActivity("Employee Feedback", message)
              }
            />
          )}
        </div>
      </div>

      <div className="mt-8">
        <h1 className="flex items-center text-[#E65F2B] text-xl font-semibold ml-4">
          <LuMessagesSquare className="text-2xl mr-2" aria-hidden="true" />
          Activities
        </h1>
        <hr className="my-2 border-t-1 border-[#E65F2B]" />
        <div className="p-4 text-gray-700">
          {activities[activeLeftItem].length === 0 ? (
            <p>No recent activities.</p>
          ) : (
            <ul>
              {activities[activeLeftItem].map((activity, index) => (
                <li key={index} className="mb-4 flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {/* Placeholder logo with an 'S' */}
                    <div className="w-8 h-8 flex items-center justify-center bg-[#E65F2B] text-white rounded-full">
                      <span className="text-xl font-semibold">S</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-[#E65F2B]">
                      {activity.adminName}
                    </p>
                    <p>{activity.updated}</p>
                    <p className="text-gray-500 text-sm">
                      {activity.date} | {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
