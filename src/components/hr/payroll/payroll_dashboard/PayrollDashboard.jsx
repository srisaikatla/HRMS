
import React from 'react';
import { FaIndianRupeeSign, FaChartPie, FaChartLine } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register components needed for charts
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

function PayrollDashboard() {
  const payDetailsData = {
    labels: ['Gross', 'Net Pay', 'TDS', 'PT'],
    datasets: [
      {
        data: [23100.00, 21400, 1500, 200],
        backgroundColor: ['#379FFF', '#FF0099', '#FF3AE0', '#E65F2B'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  // Updated PF/ESI Chart data with EPF, EESI, ER PF, and ER ESI
  const pfEsiData = {
    labels: ['EPF', 'EESI', 'ER PF', 'ER ESI'],
    datasets: [
      {
        data: [1500, 1200, 1000, 1100], // Example data
        backgroundColor: ['#FF9F40', '#FFCD56', '#9D50FF', '#FFA800'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const employeeDeductionData = {
    labels: ['PF', 'PT', 'ESI'],
    datasets: [
      {
        label: 'Yearly Deduction (Employee)',
        data: [1500, 200, 1200],
        backgroundColor: ['#9D50FF', '#E65F2B', '#FFA800'],
        borderColor: '#ffffff',
        borderWidth: 2,
        barThickness: 80,
      },
    ],
  };

  const employerDeductionData = {
    labels: ['PF', 'ESI'],
    datasets: [
      {
        label: 'Yearly Deduction (Employer)',
        data: [1000, 1100],
        backgroundColor: ['#9D50FF', '#FFA800'],
        borderColor: '#ffffff',
        borderWidth: 2,
        barThickness: 80,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#E65F2B',
        },
      },
      tooltip: {
        callbacks: {
          labelColor: (tooltipItem) => {
            return {
              backgroundColor: tooltipItem.dataset.backgroundColor[tooltipItem.dataIndex],
            };
          },
        },
      },
    },
    hover: {
      mode: null,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const barOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#E65F2B',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#E65F2B',
        },
      },
      y: {
        ticks: {
          color: '#E65F2B',
        },
      },
    },
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#E65F2B]">Employee</h1>
      <div className="flex justify-center mt-8">
        <div className="flex gap-4">
          <div className="bg-white shadow-lg rounded-lg w-[450px] h-[450px] p-4">
            <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
              <FaIndianRupeeSign className="h-[20px] w-[40px] text-[#E65F2B]" />
              <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">Pay Details</h2>
              <HiDotsVertical className="ml-auto text-[20px] text-[#E65F2B]" />
            </div>
            <div className="flex justify-between bg-white items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Gross</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />23100.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Net Pay</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />21,400
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">TDS</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />1500
              </p>
            </div>
            <div className="flex justify-between items-center px-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">PT</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />200
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-[450px] h-[450px] p-4">
            <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
              <FaChartPie className="h-[20px] w-[40px] text-[#E65F2B]" />
              <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">Pay Chart</h2>
              <HiDotsVertical className="ml-auto mt-0 text-[20px] text-[#E65F2B]" />
            </div>
            <div className="flex justify-center items-center h-[350px]">
              <Pie data={payDetailsData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex gap-4">
          <div className="bg-white shadow-lg rounded-lg w-[460px] h-[450px] p-4">
            <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
              <FaChartPie className="h-[20px] w-[40px] text-[#E65F2B]" />
              <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">PF/ESI Chart</h2>
              <HiDotsVertical className="ml-auto text-[20px] text-[#E65F2B]" />
            </div>
            <div className="flex justify-center items-center h-[350px]">
              <Pie data={pfEsiData} options={pieOptions} />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-[450px] h-[450px] p-4">
            <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
              <FaIndianRupeeSign className="h-[20px] w-[40px] text-[#E65F2B]" />
              <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">Pay Details</h2>
              <HiDotsVertical className="ml-auto mt-0 text-[20px] text-[#E65F2B]" />
            </div>
            <div className="flex justify-between bg-white items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Employee PF</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />1500.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Employer PF</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />100.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Total PF</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />1600.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Employee ESI</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />1200.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Employer ESI</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />1100.00
              </p>
            </div>
            <div className="flex justify-between items-center px-4">
              <p className="text-[16px] text-[#E65F2B] font-normal">Total ESI</p>
              <p className="flex items-center font-normal text-[16px] text-[#E65F2B]">
                <FaIndianRupeeSign className="mr-1 font-normal" />2300.00
              </p>
            </div>
          </div>
        </div>
      </div> 
      <div className="bg-white mt-4 ml-32 shadow-lg rounded-lg w-[930px] h-[450px] p-4">
        <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
          <FaChartLine className="h-[20px] w-[40px] text-[#E65F2B]" />
          <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">Yearly Deduction (Employee)</h2>
          <HiDotsVertical className="ml-auto text-[20px] text-[#E65F2B]" />
        </div>
        <div className="flex justify-center items-center h-[350px]">
          <Bar data={employeeDeductionData} options={barOptions} />
        </div>
      </div> 
      <div className="bg-white mt-4 ml-32 shadow-lg rounded-lg w-[930px] h-[450px] p-4">
        <div className="flex items-center border-b-2 border-[#E65F2B] pb-2 mb-4">
          <FaChartLine className="h-[20px] w-[40px] text-[#E65F2B]" />
          <h2 className="text-semibold text-[20px] text-[#E65F2B] ml-2">Yearly Deduction (Employer)</h2>
          <HiDotsVertical className="ml-auto text-[20px] text-[#E65F2B]" />
        </div>
        <div className="flex justify-center items-center h-[350px]">
          <Bar data={employerDeductionData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}

export default PayrollDashboard;
