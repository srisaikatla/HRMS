import React, { useState } from "react";

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);

  const Teamsdata = [
    {
      id: 1,
      teamName: "Web Development Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721635535/c43fe5abf19c94f85de5d4eae99d4dfd_n2cbaz.jpg",
      Name: "Susie Wills",
      Position: "Team Lead",
      Skills: "ReactJs,Angular,VueJs",
      Leads: 1,
      Employees: 3,
    },
    {
      id: 2,
      teamName: "Backend Engineering Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
      Name: "John Doe",
      Position: "Backend Lead",
      Skills: "Node.js,Express,MongoDB",
      Leads: 1,
      Employees: 4,
    },
    {
      id: 3,
      teamName: "Mobile App Development Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640501/0dece88c607f31e7347198d500f74644_tdoz36.png",
      Name: "Alice Smith",
      Position: "Mobile Lead",
      Skills: "Native,Flutter,Swift",
      Leads: 1,
      Employees: 5,
    },
    {
      id: 4,
      teamName: "UI/UX Design Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
      Name: "Emily Brown",
      Position: "Design Lead",
      Skills: "Node.js,Express,MongoDB",
      Leads: 1,
      Employees: 3,
    },
    {
      id: 5,
      teamName: "Data Science Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721635535/c43fe5abf19c94f85de5d4eae99d4dfd_n2cbaz.jpg",
      Name: "Michael Johnson",
      Position: "Data Lead",
      Skills: "Native,Flutter,Swift",
      Leads: 1,
      Employees: 6,
    },
    {
      id: 6,
      teamName: "DevOps Team",
      image:
        "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640501/0dece88c607f31e7347198d500f74644_tdoz36.png",
      Name: "David Wilson",
      Position: "DevOps Lead",
      Skills: "Docker,Kubernetes,AWS",
      Leads: 1,
      Employees: 4,
    },
  ];

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = Teamsdata.filter((team) =>
      team.teamName.toLowerCase().includes(query)
    );
    setFilteredTeams(filtered);
  };

  const teamsToDisplay = searchQuery.length > 0 ? filteredTeams : Teamsdata;

  return (
    <div className="p-4 mt-4">
      <h1 className="text-[#0098F1] font-bold text-sm lg:text-lg mb-3">
        Teams
      </h1>

      <div className="w-full mb-5">
        <input
          type="search"
          className="w-full  bg-transparent border-2 border-[#0098F1] rounded-lg outline-none px-3 py-2 placeholder-[#0098F1]"
          style={{
            borderColor: "#0098F1",
            color: "black",
          }}
          placeholder="Search Here........."
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamsToDisplay.map((team) => (
          <div
            key={team.id}
            className="flex flex-col bg-white rounded-lg bg-blue p-4 shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="text-center">
              <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0098F1]">
                {team.teamName}
              </h1>
              <img
                src={team.image}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0098F1] shadow-md mx-auto p-1"
                alt="Team avatar"
              />

              <p className="text-base sm:text-xl font-roboto text-[#0098F1] mt-2">
                {team.Name}
              </p>
              <p className="text-base sm:text-xl font-roboto text-[#0098F1]">
                {team.Position}
              </p>

              <div className="flex justify-center flex-wrap mt-2">
                {team.Skills.split(",").map((skill, index) => (
                  <h1
                    key={index}
                    className="bg-[#0098F1] h-8 w-[70px] sm:w-[80px] m-1 p-2 text-white rounded-lg flex items-center justify-center text-sm sm:text-base font-roboto"
                  >
                    {skill.trim()}
                  </h1>
                ))}
              </div>

              <div className="flex items-center justify-center mt-2">
                <h1 className="text-base sm:text-xl mt-2 mr-2 text-[#0098F1]">
                  Employees:
                </h1>
                <div className="flex items-center">
                  {[...Array(team.Employees)].map((_, index) => (
                    <img
                      key={index}
                      src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                      alt={`Employee ${index + 1}`}
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 mt-4 z-${
                        5 - index
                      }`}
                      style={{ zIndex: 5 - index }}
                    />
                  ))}
                </div>
              </div>

              <h1 className="mt-2 text-base sm:text-xl text-[#0098F1]">
                {team.Leads} Lead, {team.Employees} employees
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
