import React from "react";
// import teamImage from '../assets/image1.png'; // Replace with your actual team image path

const EmployeeActivities = () => {
  const activities = [
    {
      time: "Just Now",
      title: "Add New Task",
      description:
        "Web by far While that's mock-ups and this is politics Lorem card.",
      team: true,
      teamMembers: 4,
      dotColor: "bg-green-500",
    },
    {
      time: "6 mins ago",
      title: "Lucid Admin Code Upload on Github",
      description:
        "web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.",
      by: "By : Venu",
      team: false,
      dotColor: "bg-yellow-500",
    },
    {
      time: "15 mins ago",
      title: "Assigning a project team",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      by: "Team Leader : kumar",
      team: true,
      teamMembers: 4,
      dotColor: "bg-orange-500",
    },
    {
      dotColor: "bg-red-500",
    },
  ];

  return (
    <div className="p-4 mt-4 w-full min-h-screen">
      <h2 className="text-[#2A546D] font-medium lg:text-lg text-sm mb-4">
        Employee / Activities
      </h2>
      <div className="relative">
        <div className="absolute left-5 top-1 h-full  border-l-2 border-zinc-300"></div>
        {activities.map((activity, index) => (
          <div className="flex items-start  mb-8 ml-8" key={index}>
            <div
              className={`w-3 h-3 ${activity.dotColor} rounded-full z-10 mt-1.5 pl-[9px] -ml-[17px] `}
            ></div>
            <div className=" grid ml-2 gap-2 text-[#2A546D]">
              <p className="">{activity.time}</p>
              <p className="font-bold">{activity.title}</p>
              {activity.by && <p>{activity.by}</p>}
              <p>{activity.description}</p>
              {activity.team && (
                <div className="flex  items-center mt-2">
                  <span className=" mr-3">Team :</span>
                  {[...Array(activity.teamMembers)].map((_, i) => (
                    <img
                      key={i}
                      // src={teamImage}
                      alt="team-member"
                      className="w-6 h-6 rounded-full ml-3"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeActivities;
