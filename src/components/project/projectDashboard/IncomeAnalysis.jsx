import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function IncomeAnalysis() {
  const data = {
    // labels: ["Segment 1", "Segment 2", "Segment 3", "Segment 4"],
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: ["#0098F1", "#FFCC00", "#34D399", "#A855F7"],
        hoverBackgroundColor: ["#0098F1", "#FFCC00", "#34D399", "#A855F7"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <div className="p-8 bg-orange-500 mr-8  w-[500px] h-[450px] text-white rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-2">Income Analysis</h2>
        <p className="text-lg text-center mb-4  ">8% High than last month</p>
        <div className="relative ml-28 w-48 h-[500px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default IncomeAnalysis;
