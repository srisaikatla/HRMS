import React from "react";
import Marketing from "../../../assets/project/projectDashboard/Marketing.png";
import Sales from "../../../assets/project/projectDashboard/sales.png";
import Web from "../../../assets/project/projectDashboard/web.png";
import profilepic from "../../../assets/project/projectDashboard/profilepic.png";

const TeamCard = ({
  teamName,
  teamLead,
  teamLeadImg,
  tags,
  employees,
  employeeImgs,
  ring = false, // Add a new prop for ring
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-[300px] h-[400px] hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-blue-600 text-xl font-semibold mb-4 text-center">
        {teamName}
      </h3>
      <img
        src={teamLeadImg}
        alt="Team Lead"
        className={`w-24 h-24 rounded-full mx-auto mb-2 ${
          ring ? "ring-4 ring-maroon-500" : ""
        }`}
      />
      <p className="text-center font-medium">{teamLead}</p>
      <p className="text-center text-sm text-[#E65F2B] mb-4">Team Lead</p>
      <div className="flex justify-center flex-wrap mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`bg-${tag.color} text-white mx-2 px-4 py-2 rounded-[10px] text-xs`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div className="flex">
        <p className="text-center mt-5 ml-8 text-sm text-[#E65F2B] mb-2">
          Employees:
        </p>
        <div className="flex justify-center mb-4 -space-x-6">
          {employeeImgs.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Employee ${idx + 1}`}
              className={`w-12 h-12 rounded-full border-2 border-gray-300 ${
                idx < 3 ? "ring-2 ring-maroon-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-blue-500">{employees}</p>
    </div>
  );
};

const TeamList = () => {
  const teams = [
    {
      teamName: "Web Designing Team",
      teamLead: "Ratnapriya",
      teamLeadImg: Web,
      tags: [
        { label: "ReactJS", color: "blue-500" },
        { label: "Angular", color: "blue-500" },
        { label: "VueJS", color: "blue-500" },
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic, // Five profile pictures
      ],
    },
    {
      teamName: "Marketing Team",
      teamLead: "Raghavendra",
      teamLeadImg: Marketing,
      tags: [
        { label: "Social", color: "blue-500" },
        { label: "HTML/CSS", color: "blue-500" },
        { label: "Twitter", color: "blue-500" },
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic, // Five profile pictures
      ],
    },
    {
      teamName: "Sales Team",
      teamLead: "Susie Willis",
      teamLeadImg: Sales,
      tags: [
        { label: "Photoshop", color: "blue-500" },
        { label: "HTML", color: "blue-500" },
        { label: "Java", color: "blue-500" },
      ],
      employees: "1 Lead, 3 Employees",
      employeeImgs: [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic, // Five profile pictures
      ],
    },
  ];

  return (
    <div className="bg-white w-auto   h-screen rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-start ml-10 text-[#E65F2B]">
        SpyD Team
      </h2>
      <p className="mb-8 text-center text-lg  text-[#E65F2B]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="grid grid-cols-1 ml-[50px] pt-4 shadow-lg md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {teams.map((team, idx) => (
          <div key={idx} className="relative">
            <TeamCard {...team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
