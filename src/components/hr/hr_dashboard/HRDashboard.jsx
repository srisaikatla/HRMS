import React from "react";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import EmpolyeeData from "./data/EmployeeData.json";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import DonutChartData from "./data/DonutChartData.json";
import { Bar } from "react-chartjs-2";
import BarChartData from "./data/BarChartData.json";
import { Line } from "react-chartjs-2";
import LineChartData from "./data/LineChartData.json";
import EmployeePerformanceData from "./data/EmployeePerformaceData.json";
import EmployeeStructureData from "./data/EmployeeStructureData.json";

const HRDashboard = () => {
  const { data } = BarChartData;
  const { data1 } = DonutChartData;
  const { data2 } = LineChartData;
  const { data3 } = EmployeeStructureData;
  const performanceButtons = (performance) => {
    switch (performance) {
      case "Good":
        return (
          <button className="bg-[#2A8F4C] hover:bg-green-600 text-white px-12 py-2 rounded-xl">
            Good
          </button>
        );
      case "Average":
        return (
          <button className="bg-[#F78822] hover:bg-orange-600 text-white px-10 py-2 rounded-xl">
            Average
          </button>
        );
      case "Bad":
        return (
          <button className="bg-[#F20B0B] hover:bg-red-700 text-white px-14 py-2 rounded-xl">
            Bad
          </button>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="  pb-6 ml-4  w-auto">
        <h2 className="text-[#E65F2B] text-xl font-bold mb-4">
          Hr / Hrdashboard
        </h2>
        <div className="w-auto">
          <div className="flex justify-around items-center gap-2 mb-6">
            <div className="w-auto h-[360px] rounded-lg ">
              <div className="flex flex-col justify-center rounded-lg items-center w-[350px] h-full">
                {EmpolyeeData.map((data, index) => (
                  <div
                    key={index}
                    className="w-full  flex flex-col justify-center items-center h-full gap-y-[2px]"
                  >
                    <div className="flex w-full h-full justify-evenly items-center rounded-t-lg gap-2 bg-[#FF6C40]">
                      <BsPersonFillCheck className="text-xl rounded-full bg-white w-14 h-14 p-3 text-[#E65F2B]" />
                      <div className="text-white">
                        New Employee{" "}
                        <div className="text-center">{data.new_Employee}</div>
                      </div>
                    </div>
                    <div className="flex w-full h-full justify-evenly items-center gap-2 bg-[#FF6C40]">
                      <MdGroups className="text-xl rounded-full bg-white w-14 h-14 p-3 text-[#E65F2B]" />
                      <div className="text-white">
                        Total Employee{" "}
                        <div className="text-center">{data.Total_Employee}</div>
                      </div>
                    </div>
                    <div className="flex w-full h-full justify-evenly items-center gap-2 bg-[#FF6C40]">
                      <RiMoneyRupeeCircleLine className="text-xl rounded-full bg-white w-14 h-14 p-3 text-[#E65F2B]" />
                      <div className="text-white mr-6">
                        Total Salary{" "}
                        <div className="text-center">{data.Total_Salary}</div>
                      </div>
                    </div>
                    <div className="flex w-full h-full justify-evenly rounded-b-lg items-center gap-2 bg-[#FF6C40]">
                      <TbReportMoney className="text-xl rounded-full bg-white w-14 h-14 p-3 text-[#E65F2B]" />
                      <div className="text-white mr-8">
                        Avg Salary{" "}
                        <div className="text-center">{data.Avg_Salary}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[300px] h-[360px] bg-[#0098F1] rounded-lg">
              <div className="flex justify-center items-center flex-col p-6">
                <div className="text-white text-2xl">Income Analysis</div>
                <div className="text-white text-[12px]">
                  8% High then last month
                </div>
                <div className="w-full pt-3">
                  <Doughnut
                    data={data1}
                    options={{
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: {
                            font: {
                              size: 13,
                            },
                            boxWidth: 20,
                            boxHeight: 12,
                            color: "#FFFFFF",
                          },
                        },
                      },
                      elements: {
                        arc: {
                          borderWidth: 0,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-auto h-auto bg-[#0098F1] rounded-lg">
              <div className="flex flex-col px-4 mt-4  justify-center items-center h-[340px]">
                <div className="text-white text-2xl">Salary Statistics</div>
                <div className="w-full h-full flex justify-center items-center">
                  <Bar
                    data={data}
                    options={{
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: {
                            font: {
                              size: 13,
                            },
                            boxWidth: 20,
                            boxHeight: 12,
                            color: "#FFFFFF",
                          },
                        },
                      },
                      scales: {
                        x: {
                          grid: {
                            display: false,
                          },
                          ticks: {
                            font: {
                              weight: "bold",
                            },
                            color: "000000",
                          },
                          border: {
                            display: false,
                          },
                        },
                        y: {
                          grid: {
                            display: false,
                          },
                          ticks: {
                            font: {
                              weight: "bold",
                            },
                            color: "000000",
                          },
                          border: {
                            display: false,
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0098F1] max-w-full mb-6">
            <div className="px-5 py-10 flex flex-col justify-center items-center">
              <div className="text-white text-2xl mb-4">
                Total Salary By Unit
              </div>
              <Line
                data={data2}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                      border: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        color: "#FFFFFF",
                      },
                      border: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 w-full">
            <div className="bg-[#0098F1] w-2/3 py-8">
              <div className="text-white text-2xl px-6">
                Employee Performance
              </div>
              <table className="mt-9 w-full">
                <thead className="text-black bg-white table-header-group">
                  <tr>
                    <th className="table-cell p-4">Avatar</th>
                    <th>Name</th>
                    <th>Destination</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-center table-row-group">
                  {EmployeePerformanceData.map((data, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <img className="inline-block" src={data.pic} />
                      </td>
                      <td>{data.Name}</td>
                      <td>{data.Destination}</td>
                      <td className="pt-2">
                        {performanceButtons(data.Performance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#E65F2B] w-1/3 rounded-lg flex flex-col justify-start items-center p-7">
              <div className="text-white text-2xl">Employee Structure</div>
              <div className="w-full h-full p-10">
                <Doughnut
                  data={data3}
                  options={{
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          font: {
                            size: 15,
                          },
                          boxWidth: 20,
                          boxHeight: 20,
                          color: "#FFFFFF",
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                          grid: {
                            display: false,
                          },
                          border: {
                            display: false,
                          },
                        },
                        y: {
                          display: false,
                          grid: {
                            display: false,
                          },
                          border: {
                            display: false,
                          },
                        },
                      },
                    },
                    elements: {
                      arc: {
                        borderWidth: 0,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
