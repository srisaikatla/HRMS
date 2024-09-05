/* eslint-disable react/prop-types */
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';


const OfficialInformation = () => {
    const auth = useSelector((state) => state.auth)
    // State for official information
    const [officialInfo, setOfficialInfo] = useState({
        dateOfJoining: auth.employee.joinDate,
        designation: auth.employee.designation,
        department: auth.employee.role,
        reportingTo: ''
    });


    // Handler for input changes
    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setOfficialInfo(prev => ({ ...prev, [id]: value }));
    }, []);



    return (
        <div className="bg-white p-6 ml-0 mr-0 md:ml-10 md:mr-10">
            <div className="flex justify-between items-center py-2 m-2">
                <h1 className="text-lg text-[#2A546D]">OFFICIAL INFO</h1>
            </div>
            <hr className="border-t-2 border-[#2A546D] mb-4" />

            <div className="flex flex-col items-center space-y-4">
                <div className="w-full lg:w-1/2">
                    <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Date of Joining
                    </label>
                    <input
                        id="dateOfJoining"
                        type="date"
                        value={officialInfo.dateOfJoining}
                        onChange={handleChange}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <label htmlFor="designation" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Designation
                    </label>
                    <input
                        id="designation"
                        type="text"
                        value={officialInfo.designation}
                        onChange={handleChange}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <label htmlFor="dateOfJoining" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Department
                    </label>
                    <input
                        id="department"
                        type="text"
                        value={officialInfo.department}
                        onChange={handleChange}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <label htmlFor="reportingTo" className="block text-lg font-medium text-[#2A546D] mb-2">
                        Reporting To
                    </label>
                    <input
                        id="reportingTo"
                        type="text"
                        value={officialInfo.reportingTo}
                        onChange={handleChange}
                        className="block w-full border border-[#2A546D] rounded-lg h-[40px] text-lg px-3"
                    />
                </div>

            </div>


        </div>
    );
};

export default OfficialInformation;
