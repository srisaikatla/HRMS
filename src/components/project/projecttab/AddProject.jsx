import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
// import SideBar from "../../Sidebar";
const AddProject = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    startDate: "",
    endDate: "",
    projectPriority: "",
    rate: "",
    rateType: "",
    teamLead: "",
    team: "",
    projectImage: "",
    projectDescription: "",
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((prevProjects) => [...prevProjects, formData]);
    setFormData({
      projectName: "",
      clientName: "",
      startDate: "",
      endDate: "",
      projectPriority: "",
      rate: "",
      rateType: "",
      teamLead: "",
      team: "",
      projectImage: "",
      projectDescription: "",
    });
    localStorage.setItem(
      "projectData",
      JSON.stringify([...projects, formData])
    );
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  };

  return (
    <>
      {/* <SideBar /> */}
      <div className="pt-4">
        <div className="ml-5">
          <p className="text-[#e65f2b] font-bold text-xl">
            Projects/Add Project
          </p>
        </div>

        <div className=" p-6 bg-white  ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 content-center ">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Client Name
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Project Priority
                  </label>
                  <input
                    type="text"
                    name="projectPriority"
                    value={formData.projectPriority}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rate In Rupees
                  </label>
                  <input
                    type="number"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Rate Type
                  </label>
                  <input
                    type="text"
                    name="rateType"
                    value={formData.rateType}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Team Lead
                  </label>
                  <input
                    type="text"
                    name="teamLead"
                    value={formData.teamLead}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Team
                  </label>
                  <input
                    type="text"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Image
                </label>
                <textarea
                  name="projectImage"
                  value={formData.projectImage}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  rows="2"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end pt-3 space-x-4">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Create
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={() =>
                  setFormData({
                    projectName: "",
                    clientName: "",
                    startDate: "",
                    endDate: "",
                    projectPriority: "",
                    rate: "",
                    rateType: "",
                    teamLead: "",
                    team: "",
                    projectImage: "",
                    projectDescription: "",
                  })
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        {showSuccess && (
          <div className="fixed inset-0 bg-[#0098f1] bg-opacity-10 flex justify-center items-center">
            <div className="bg-[#0098f1] w-[320px] h-[240px] sm:w-[440px] sm:h-[320px] py-8 px-4 sm:py-10 sm:px-16 rounded-lg text-white flex flex-col justify-center items-center">
              <BsCheck2Circle className="text-3xl sm:text-4xl md:text-6xl mb-4" />
              <p className="text-center text-xl sm:text-2xl">
                Project Added Successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProject;
