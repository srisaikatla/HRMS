import React from "react";
import image3 from "../../../assets/project/projectGrid/img1.png";
import image4 from "../../../assets/project/projectGrid/profile.jpg";

const projects = [
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 50,
  },
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 75,
  },
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 30,
  },
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 90,
  },
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 60,
  },
  {
    title: "Word press - Theme Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    teamMembers: [image4, image4, image4, image4],
    progress: 40,
  },
  // Add more project objects here
];

const ProjectGrid = () => {
  return (
    <div className="p-4">
      <h2 className="text-[#e65f2b] font-bold text-xl mb-2">Project Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img src={image3} alt="Project" className="" />
            </div>
            <h3 className="text-[#0098F1] text-xl font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <div className="relative">
              <div className="h-2 w-full rounded-xl bg-[#E65F2B] opacity-35 mb-4"></div>
              <div
                className="absolute top-0 left-0 h-2 rounded-xl bg-[#E65F2B]"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Team :</span>
              <div className="flex">
                {project.teamMembers.map((member, idx) => (
                  <img
                    key={idx}
                    src={member}
                    alt={`Team member ${idx + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
