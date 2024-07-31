import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
// import ProfileList from "./profilelist";
import ToDoList from "./ToDoList";
import SectionItems from "./SectionItems";
import TeamList from "./TeamList";
// import SideBar from "../home/Sidebar";
import IncomeAnalysis from "./IncomeAnalysis";
import ProjectListTable from "./ProjectListTable";
import SalesIncome from "./SalesIncome";
const Dashboard = () => {
  const cardsData = [
    { color: "#FF1F3D", count: 19, label: "Today Works" },
    { color: "#FFB752", count: 15, label: "Today Tasks" },
    { color: "#FF5900", count: 125, label: "Statistics" },
    { color: "#38E8FC", count: 318, label: "Analytics" },
  ];
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Work Report",
        data: [
          500, 1000, 750, 1500, 1200, 1800, 2200, 1700, 2000, 2300, 2100, 2500,
        ],
        fill: true,
        backgroundColor: "#E65F2B",
        borderColor: "#E65F2B",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1, // Slightly smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
        ticks: {
          color: "#000", // X-axis label color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#ccc", // Y-axis grid line color
        },
        ticks: {
          color: "#000", // Y-axis label color
          stepSize: 500, // Step size for the y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Work Report",
        color: "#E65F2B",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };
  return (
    <>
      {/* <SideBar /> */}
      <div className="flex pt-6  justify-around items-center bg-white ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`w-[200px] h-[140px] text-white rounded-lg flex flex-col justify-center items-center shadow-lg relative ${
              card.color.startsWith("#") ? "" : card.color
            }`}
            style={{
              backgroundColor: card.color,
              // clipPath: "circle(32% at 99% 100%)",
            }}
          >
            <span className="text-3xl font-bold">{card.count}</span>
            <span className="text-xl">{card.label}</span>
            <div className="absolute bottom-0 right-0 bg-white opacity-20 rounded-full w-20 h-20 transform translate-x-1/4 translate-y-1/4"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="bg-white p-4 rounded shadow-lg w-[600px] mr-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Work Report
          </h2>
          <Line data={data} options={options} />
        </div>
        <div>
          <ToDoList />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex-1">
          <SectionItems />
        </div>
        {/* <div className="flex-1">
          <ProfileList />
        </div> */}
        <div className="flex-1 w-[300px]">
          <IncomeAnalysis />
        </div>
      </div>
      <div className="flex  space-x-1">
        <div className="flex-1">
          <ProjectListTable />
        </div>
        <div className="flex-1 mt-14 mr-12">
          <SalesIncome />
        </div>
      </div>
      <div className=" mt-10">
        <TeamList />
      </div>
    </>
  );
};

export default Dashboard;
