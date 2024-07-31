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

  // Function to handle input change and filter teams
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter teams based on search query
    const filtered = Teamsdata.filter((team) =>
      team.teamName.toLowerCase().includes(query)
    );
    setFilteredTeams(filtered);
  };

  const teamsToDisplay = searchQuery.length > 0 ? filteredTeams : Teamsdata;

  return (
    <div className=" p-5 ">
      <h1 className="text-[#e65f2b] font-bold text-xl mb-3">Teams</h1>

      <div className="w-full ">
        <input
          type="search"
          className="w-full h-14 bg-transparent border-2 border-blue-500 rounded-lg outline-none px-3 py-2 placeholder-[#0098F1] "
          style={{
            borderColor: "#0098F1",
            color: "black",
          }}
          placeholder="Search Here........."
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {teamsToDisplay.map((team) => (
          <div key={team.id} className="flex rounded-lg">
            <div className="bg-pink-400 p-4 rounded-xl shadow-lg mx-w-lg">
              <div className="text-center">
                <h1 className="text-xl font-bold mb-3 font-roboto text-[#0098F1]">
                  {team.teamName}
                </h1>
                <img
                  src={team.image}
                  className="w-20 h-20 rounded-full border-4 border-[#E65F2B] shadow-md mx-auto p-1"
                  alt="Team avatar"
                />

                <p className="text-xl font-roboto text-[#E65F2B] mt-2">
                  {team.Name}
                </p>
                <p className="text-xl font-roboto text-[#E65F2B]">
                  {team.Position}
                </p>

                <div className="flex justify-center mt-1">
                  {team.Skills.split(",").map((skill, index) => (
                    <h1
                      key={index}
                      className="bg-[#0098F1] h-8 w-[80px] m-2 p-5 text-white rounded-lg flex items-center justify-center text-base  font-roboto"
                    >
                      {skill.trim()}
                    </h1>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <h1 className="text-xl mt-2 mr-2 text-[#E65F2B]">
                    Employees:
                  </h1>
                  <div className="flex items-center ml-4">
                    {[...Array(team.Employees)].map((_, index) => (
                      <img
                        key={index}
                        src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
                        alt={`Employee ${index + 1}`}
                        className={`w-6 h-6 rounded-full -ml-2 mt-4 z-${
                          5 - index
                        }`}
                        style={{ zIndex: 5 - index }}
                      />
                    ))}
                  </div>
                </div>

                <h1 className="mt-4 text-xl text-[#0098F1]">
                  {team.Leads} Lead, {team.Employees} employees
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
