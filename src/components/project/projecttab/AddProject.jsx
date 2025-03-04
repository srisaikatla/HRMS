import React, { useState } from "react";
// import { BsCheck2Circle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          projectImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
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
      <div className="p-4 mt-4 min-h-screen">
        <div className="">
          <p className="text-[#0098F1] font-bold text-sm lg:text-lg">
            Projects / Add Project
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 content-center">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  required
                  value={formData.projectName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Client Name
                  </label>
                  <input
                    type="text"
                    required
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
                    required
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
                    required
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
                    required
                    value={formData.projectPriority}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rate In Rupees
                  </label>
                  <input
                    type="number"
                    name="rate"
                    required
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
                    required
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
                    required
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
                    required
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
                />
                {formData.projectImage && (
                  <div className="mt-2 h-auto w-full">
                    <img
                      src={formData.projectImage}
                      alt="Project Preview"
                      className="w-full h-60 border border-blue-400 rounded-md"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  required
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
                className="py-2 px-4 bg-[#0098F1] text-white font-semibold rounded-md shadow-md hover:bg-[#0098F1] focus:outline-none focus:ring-2 focus:ring-blue-300"
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
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-sky-500 p-8 rounded-lg text-center text-white">
              <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
              <h2 className="md:text-3xl mb-4">Project Added Successfully</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProject;
