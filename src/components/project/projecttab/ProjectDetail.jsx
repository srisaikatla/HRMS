import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { format } from "date-fns";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const ProjectDetail = () => {
  const ProjectDetailProgress = [
    {
      Progress: "40%",
    },
  ];
  const TeamLeadDetail = [
    {
      img: "src/assets/project/projectDetails/download_3.png",
      name: "Jessica Doe",
      location: "Washington, d.c.",
    },
  ];
  const AssignedTeam = [
    {
      image: "src/assets/project/projectDetails/download_2.png",
      name: "Fidel Tonn",
      mail: "info@spyd.com",
      designation: "Project Lead",
    },
    {
      image: "src/assets/project/projectDetails/download_1.png",
      name: "M.Venu",
      mail: "",
      designation: "Designer, Blogger",
    },
    {
      image: "src/assets/project/projectDetails/download_1.png",
      name: "K.Pavan",
      mail: "",
      designation: "Designer, Blogger",
    },
    {
      image: "src/assets/project/projectDetails/download_1.png",
      name: "M.sai",
      mail: "",
      designation: "Designer, Blogger",
    },
  ];
  const ProjectDetailData = [
    {
      Cost: "16,785",
      Created: "14-July-2024",
      Deadline: "24-Aug-2024",
      Priority: "Highest-Priority",
      Status: "Working",
    },
  ];
  const ViewedTeamMembers = [
    {
      teamMembers: 4,
      Team: "src/assets/project/projectDetails/download_3.png",
    },
  ];
  const progressString = ProjectDetailProgress[0].Progress;
  const percentage = progressString.endsWith("%")
    ? parseInt(progressString, 10)
    : 0;

  const [textareaContent, setTextareaContent] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [messages, setMessages] = useState([]);

  const fileInputRef = React.createRef();
  const imageInputRef = React.createRef();

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setUploadedImages((prevImages) => [...prevImages, ...imageFiles]);
  };

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value);
  };

  const handleAddMessage = () => {
    if (textareaContent.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: textareaContent,
          timestamp: new Date(),
          images: uploadedImages,
          files: uploadedFiles,
        },
      ]);
      setTextareaContent("");
      setUploadedFiles([]);
      setUploadedImages([]);
    }
  };

  const formatTimestamp = (timestamp) => {
    return format(new Date(timestamp), "dd MMM yyyy HH:mm");
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low-Priority":
        return "bg-blue-400";
      case "Medium-Priority":
        return "bg-orange-400";
      case "Highest-Priority":
        return "bg-red-600";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600";
      case "Working":
        return "bg-orange-400";
      case "Not Started":
        return "bg-red-600";
      default:
        return "";
    }
  };
  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className=" p-2">
      <h2 className="text-[#e65f2b] font-bold text-xl mb-4">Project Detail</h2>
      <div className="w-full flex flex-row gap-2">
        <div className="w-2/3 bg-[#E65F2B] text-white p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-7">
            iNext - One Page Responsive Template
          </h3>
          <div className="mb-5">
            A responsive page template is a web design framework that ensures a
            website adapts seamlessly to different screen sizes and devices. It
            includes a fluid grid layout, where elements are sized in
            percentages instead of fixed units, allowing them to resize and
            rearrange based on the screen width.
          </div>
          <div className="mb-5 font-semibold">Project Setup</div>
          <div className="h-3 w-4/5 bg-[#FFFFFF] bg-opacity-35 rounded-md">
            <div
              className={`h-full bg-[#FFFFFF] rounded-full`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <div className="w-2/3 px-7 py-5 bg-white shadow-xl rounded-md">
          <h3 className="w-full text-2xl font-semibold text-[#0098F1] mb-4">
            Project Activity
          </h3>
          <textarea
            className="border border-[#0098F1] rounded-lg w-full p-3 focus:outline-none mb-3"
            placeholder="Type here......"
            rows="6"
            id="message"
            value={textareaContent}
            onChange={handleTextareaChange}
          ></textarea>
          <div className="flex flex-row gap-2">
            <div
              className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
              onClick={() => imageInputRef.current.click()}
            >
              <MdOutlineCameraAlt />
              <input
                type="file"
                className="hidden"
                ref={imageInputRef}
                onChange={handleImageUpload}
                multiple
                accept="image/*"
              />
            </div>
            <div
              className="flex justify-center items-center text-2xl text-white w-[45px] rounded-md h-[35px] bg-[#0098F1] cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <FiLink />
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileUpload}
                multiple
              />
            </div>
            <div className="flex justify-center items-center text-lg text-white w-[70px] rounded-md h-[35px] bg-[#0098F1]">
              <button onClick={handleAddMessage} className="w-full">
                Add
              </button>
            </div>
          </div>
          <div className="mt-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <span className="text-[#0098F1]">{image.name}</span>
                <button
                  className="text-red-400 hover:text-red-500"
                  onClick={() => handleRemoveImage(index)}
                >
                  <MdOutlineCancel className="w-5 h-5" />
                </button>
              </div>
            ))}
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <span className="text-[#0098F1]">{file.name}</span>
                <button
                  className="text-red-400 hover:text-red-500"
                  onClick={() => handleRemoveFile(index)}
                >
                  <MdOutlineCancel className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-row gap-x-3">
        <div className="w-1/3">
          <div className="w-full h-auto mt-2 bg-white rounded-md">
            {ProjectDetailData.map((item, index) => {
              return (
                <div
                  className="w-full flex flex-col text-[#0098F1] font-medium p-9 shadow-xl rounded-md"
                  key={index}
                >
                  <div className="mb-4 flex justify-between">
                    <div>Cost:</div>
                    <div className="bg-[#1D7616] text-white w-[70px] h-[25px] rounded-lg flex justify-center items-center">
                      {item.Cost}
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div>Created: </div>
                    <div className="text-white bg-[#1D7616]  w-[110px] h-[25px] rounded-lg flex justify-center items-center">
                      {item.Created}
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div>Deadline: </div>
                    <div className="text-white bg-[#1D7616] w-[110px] h-[25px] rounded-lg flex justify-center items-center">
                      {item.Deadline}
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div>Priority: </div>
                    <div
                      className={`${getPriorityColor(
                        item.Priority
                      )} text-white px-2 py-1 rounded-lg flex justify-center items-center`}
                    >
                      {item.Priority}
                    </div>
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div>Status: </div>
                    <div
                      className={`${getStatusColor(
                        item.Status
                      )} text-white px-2 py-1 rounded-md`}
                    >
                      {item.Status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
            <h3 className="text-[#E65F2B] text-lg font-semibold">
              Assigned Team
            </h3>
            <div>
              {AssignedTeam.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row p-2 border-b border-[#0098F1] border-opacity-25"
                  >
                    <img src={item.image} alt="teamlead" />
                    <div className="flex flex-col ml-4">
                      <div className="text-black font-semibold">
                        {item.name}
                      </div>
                      <div className="text-[#0098F1]">{item.mail}</div>
                      <div className="text-[#000000] text-opacity-35 text-[15px]">
                        {item.designation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full h-auto mt-4 bg-white rounded-md p-6 shadow-xl">
            <h3 className="text-[#E65F2B] text-center text-xl font-semibold">
              About Clients
            </h3>
            <div>
              {TeamLeadDetail.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center p-2"
                  >
                    <img src={item.img} alt="teamlead" />
                    <div className="flex flex-col justify-center items-center py-2">
                      <div className="text-[#E65F2B] font-semibold">
                        {item.name}
                      </div>
                      <div className="text-[#000000] text-sm">
                        {item.location}
                      </div>
                      <div className="gap-5 flex flex-row items-center justify-center mt-9">
                        <button className="border-[#0098F1] bg-[#0098F1] border-2 border-opacity-50 text-white rounded-md w-24 h-8">
                          Profile
                        </button>
                        <button className="border-[#0098F1] border-2 border-opacity-50 text-[#0098F1] w-24 h-8 bg-white rounded-md">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-white h-[976px] mt-2 pt-4 pl-2 shadow-xl rounded-md overflow-y-auto">
          <div className="relative ">
            <div className="absolute left-5 top-1 h-full border-l-2 border-[#E65F2B]"></div>
            {messages
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((message, index) => (
                <div className="relative flex items-start mb-8" key={index}>
                  <div className="absolute left-5 top-1 h-full border-l-2 border-[#E65F2B]"></div>
                  <div className="flex items-start ml-8">
                    <div className="w-3 h-3 bg-[#E65F2B] rounded-full z-10 mt-1.5 pl-3 -ml-4"></div>
                    <div className="grid ml-6 gap-2">
                      <p className="text-sm text-gray-500">
                        {formatTimestamp(message.timestamp)}
                      </p>
                      <p className="font-semibold">{message.content}</p>
                      {ViewedTeamMembers.map((item, index) => (
                        <div key={index} className="flex flex-row gap-3">
                          <div className="font-semibold">Team:</div>
                          <div className="flex flex-row">
                            {Array.from({ length: item.teamMembers }).map(
                              (_, memberIndex) => (
                                <img
                                  key={memberIndex}
                                  src={item.Team}
                                  alt="Team Member"
                                  className="w-6 h-6 rounded-full"
                                />
                              )
                            )}
                          </div>
                        </div>
                      ))}
                      {message.images.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {message.images.map((image, i) => (
                            <div key={i} className="flex flex-row">
                              <img
                                key={i}
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                className="w-24 h-24 object-cover rounded-md"
                              />
                              <a
                                href={URL.createObjectURL(image)}
                                download
                                className="text-blue-500 underline flex items-end"
                              >
                                <MdOutlineFileDownload className="w-[21px] h-[21px] " />
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                      {message.files.length > 0 && (
                        <div className="mt-2">
                          {message.files.map((file, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-[#0098F1]">
                                {file.name}
                              </span>
                              <a
                                href={URL.createObjectURL(file)}
                                download
                                className="text-blue-500 underline flex items-end  "
                              >
                                <MdOutlineFileDownload className="w-[21px] h-[21px]" />
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
