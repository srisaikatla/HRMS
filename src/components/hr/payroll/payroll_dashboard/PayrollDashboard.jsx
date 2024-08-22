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
        backgroundColor: ['#379FFF', '#FF0099', '#FF3AE0', '#0098f1'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

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
        backgroundColor: ['#9D50FF', '#0098f1', '#FFA800'],
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
          color: '#0098f1',
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
          color: '#0098f1',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#0098f1',
        },
      },
      y: {
        ticks: {
          color: '#0098f1',
        },
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 ">
      <h1 className="text-[#E65F2B] text-xl font-bold mb-4">Payroll / Dashboard</h1>
      
      {/* First Row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[450px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaIndianRupeeSign className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">Pay Details</h2>
            <HiDotsVertical className="ml-auto text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex flex-col space-y-4 px-4 mb-4">
            {['Gross', 'Net Pay', 'TDS', 'PT'].map((label, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-[16px] text-[#0098f1] font-normal">{label}</p>
                <p className="flex items-center font-normal text-[16px] text-[#0098f1]">
                  <FaIndianRupeeSign className="mr-1 font-normal" />
                  {index === 0 ? '23100.00' : index === 1 ? '21,400' : index === 2 ? '1500' : '200'}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[450px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaChartPie className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">Pay Chart</h2>
            <HiDotsVertical className="ml-auto mt-0 text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex justify-center items-center h-[350px]">
            <Pie data={payDetailsData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[460px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaChartPie className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">PF/ESI Chart</h2>
            <HiDotsVertical className="ml-auto text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex justify-center items-center h-[350px]">
            <Pie data={pfEsiData} options={pieOptions} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[450px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaIndianRupeeSign className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">Pay Details</h2>
            <HiDotsVertical className="ml-auto mt-0 text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex flex-col space-y-4 px-4">
            {['Employee PF', 'Employer PF', 'Total PF', 'Employee ESI', 'Employer ESI', 'Total ESI'].map((label, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-[16px] text-[#0098f1] font-normal">{label}</p>
                <p className="flex items-center font-normal text-[16px] text-[#0098f1]">
                  <FaIndianRupeeSign className="mr-1 font-normal" />
                  {index === 0 ? '1500.00' : index === 1 ? '100.00' : index === 2 ? '1600.00' : index === 3 ? '1200.00' : index === 4 ? '1100.00' : '2300.00'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[450px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaChartLine className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">Employee Deduction</h2>
            <HiDotsVertical className="ml-auto text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex justify-center items-center h-[350px]">
            <Bar data={employeeDeductionData} options={barOptions} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-[450px] h-[450px] p-4">
          <div className="flex items-center border-b-2 border-[#0098f1] pb-2 mb-4">
            <FaChartLine className="h-[20px] w-[40px] text-[#0098f1]" />
            <h2 className="text-semibold text-[20px] text-[#0098f1] ml-2">Employer Deduction</h2>
            <HiDotsVertical className="ml-auto text-[20px] text-[#0098f1]" />
          </div>
          <div className="flex justify-center items-center h-[350px]">
            <Bar data={employerDeductionData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollDashboard;
