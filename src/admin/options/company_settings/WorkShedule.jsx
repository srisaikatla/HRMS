// import React from "react";

// function WorkShedule() {
//   return <div></div>;
// }

// export default WorkShedule;
import React, { useState } from "react";
import { FaPlus, FaEdit } from 'react-icons/fa';
import { CiCircleInfo } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

// Dummy data
const initialData = [
  {
    id: 1,
    policyName: 'Schedule A',
    description: 'Description for Schedule A',
    employeeCount: 10,
    status: 'Active',
    workSchedule: { sun: true, mon: true, tue: true, wed: true, thu: true, fri: true, sat: false }
  },
  {
    id: 2,
    policyName: 'Schedule B',
    description: 'Description for Schedule B',
    employeeCount: 8,
    status: 'Inactive',
    workSchedule: { sun: false, mon: true, tue: true, wed: false, thu: true, fri: true, sat: true }
  },
  // Add more rows as needed
];

function WorkShedule() {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState(null);

  const colors = ['#E65F2B', '#4A90E2', '#FFC700'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle adding a new policy
  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentPolicy(null);
    toggleModal();
  };

  // Function to handle editing an existing policy
  const handleEdit = (policy) => {
    setIsEditing(true);
    setCurrentPolicy(policy);
    toggleModal();
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPolicy = {
      id: currentPolicy ? currentPolicy.id : data.length + 1,
      policyName: formData.get('policyName'),
      description: formData.get('description'),
      employeeCount: currentPolicy ? currentPolicy.employeeCount : 0, // Assuming employee count isn't editable here
      status: currentPolicy ? currentPolicy.status : 'Active', // Default to Active for new policies
      workSchedule: {
        sun: formData.get('sun') === 'on',
        mon: formData.get('mon') === 'on',
        tue: formData.get('tue') === 'on',
        wed: formData.get('wed') === 'on',
        thu: formData.get('thu') === 'on',
        fri: formData.get('fri') === 'on',
        sat: formData.get('sat') === 'on',
      }
    };

    if (isEditing) {
      // Update existing policy
      setData(data.map(item => item.id === currentPolicy.id ? newPolicy : item));
    } else {
      // Add new policy
      setData([...data, newPolicy]);
    }

    toggleModal();
  };

  // Handle checkbox change and cycle colors
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    setData(data.map(item => 
      item.id === currentPolicy.id 
        ? {
          ...item,
          workSchedule: { ...item.workSchedule, [name]: checked }
        } 
        : item
    ));
  };

  return (
    <div>
      <div className='mt-7 w-full h-screen overflow-auto scrollbar-custom'>
        <div className="flex justify-end items-center mb-3">
          <p className="flex items-center text-[22px] text-[#E65F2B] mr-3">
            <CiCircleInfo className="text-[#E65F2B] text-[22px] mr-2" />
            info
          </p>

          <button
            onClick={handleAddNew}
            className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white py-2 px-4 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaPlus className="text-xl" />
            Add new
          </button>
        </div>
        
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] w-[330px] rounded-sm text-white font-semibold text-nowrap py-3 px-9 border border-r-white'>Work Schedule Policy Name</th>
              <th className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] w-[330px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white'>Work Schedule Description</th>
              <th className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] w-[330px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white'>Employee Count</th>
              <th className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] w-[330px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white'>Status</th>
              <th className='bg-gradient-to-r from-[#E65F2B] to-[#FFC252] w-[150px] rounded-sm text-white font-semibold py-3 px-9 text-nowrap border border-r-white'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='py-2 px-4 border text-[#E65F2B] border-r-white'>{item.policyName}</td>
                <td className='py-2 px-4 border text-[#E65F2B] border-r-white'>{item.description}</td>
                <td className='py-2 px-4 border text-[#E65F2B] border-r-white'>{item.employeeCount}</td>
                <td className='py-2 px-4 border text-[#E65F2B] border-r-white'>{item.status}</td>
                <td className='py-2 px-4 border border-r-white'>
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit className="ml-[40px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10">
          <div className="flex px-4">
            <p className="">
              <TiMessages className="w-6 text-[#e65f2b] h-6" />
            </p>
            <p className="flex pl-1 font-medium text-lg text-[#e65f2b]">
              Activity
            </p>
          </div>
          <hr className="border border-[#e65f2b]" /> 
          <div className="flex items-center justify-center ">
            <p className="text-[#e65f2b]">No recent activities.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
            <h2 className="text-2xl font-bold mb-6">
              {isEditing ? 'Edit Work Schedule Policy' : 'Add Work Schedule Policy'}
            </h2>
            
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#E65F2B] text-sm font-bold mb-2" htmlFor="policyName">
                  Work Schedule Policy Name*
                </label>
                <input
                  id="policyName"
                  name="policyName"
                  type="text"
                  defaultValue={isEditing ? currentPolicy.policyName : ''}
                  className="shadow appearance-none border-2 border-[#E65F2B] rounded w-full py-2 px-3 text-gray-700 leading-tight placeholder:text-[#E65F2B] focus:outline-none focus:shadow-outline"
                  placeholder="Work Schedule Policy Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#E65F2B] text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={isEditing ? currentPolicy.description : ''}
                  className="shadow appearance-none placeholder:text-[#E65F2B] rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 border-[#E65F2B] focus:outline-none focus:shadow-outline"
                  placeholder="Description"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#E65F2B] text-sm font-bold mb-2">Work Schedule</label>
                <div className="grid grid-cols-7 gap-2">
                  {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day) => (
                    <label key={day} className={`flex items-center justify-center border rounded-lg p-2 ${currentColorIndex === 0 ? 'bg-[#E65F2B]' : 'bg-[#FFC252]'}`}>
                      <input
                        type="checkbox"
                        name={day}
                        defaultChecked={isEditing ? currentPolicy.workSchedule[day] : false}
                        onChange={handleCheckboxChange}
                        className="hidden"
                      />
                      <span className="text-white capitalize">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#E65F2B] hover:bg-[#FFC252] text-white font-bold py-2 px-4 rounded"
                >
                  {isEditing ? 'Save Changes' : 'Add Policy'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkShedule;
