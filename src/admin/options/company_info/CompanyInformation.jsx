import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";

const data = [{
    hrmsid: 'SPYD32323',
    companyName: 'SPY D Technology',
    Tan: 'HYDS75973C',
    PAN: 'ABKCS8757J',
    Address: 'Plot no,518,Meea complex, Madhapur-Hyderabad,Hyderabad,Ts,India-500081',
    MainPhone: '99124-5759',
    Industry: 'Information Technology',
    website: 'http://spydtech.com',
    Createdon: 'Jul 24, 2024 at 03:28 PM, by Sathish Chiluveru',
    Modified: 'Jul 24, 2024 at 06:11 PM'
}];

const CompanyInformation = () => {
  const [editable, setEditable] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(data[0]);
  const [editedInfo, setEditedInfo] = useState(companyInfo);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);
    const formattedTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    setCompanyInfo({ ...editedInfo, Modified: `${formattedDate} at ${formattedTime}` });
    setEditable(false);
  };

  const handleCancel = () => {
    setEditedInfo(companyInfo);
    setEditable(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };

  return (
    <div className="max-w-full mx-auto overflow-hidden">
      <div className="p-4 ml-7">
        <h2 className="text-xl font-bold">Admin</h2>
        <h3 className="text-lg font-semibold mb-2">Dashboard/Company Information</h3>
      </div>
      <div className="p-4 flex justify-between items-start">
        <div>
          <h2 className='text-2xl font-semibold mb-[30px] ml-7'>SPYD Technology</h2>
          <div className="space-y-4 text-left rounded-lg bg-white ml-[80px] w-[840px] p-8 pb-10 pt-1 shadow">
            <div className='flex pt-6 justify-end -mb-[30px]'>
              {editable ? (
                <div className="text-right">
                  <button onClick={handleSave} className="mr-4 bg-[#E65F2B] font-semibold w-[80px] h-[35px] text-[20px] text-white rounded-md">Save</button>
                  <button onClick={handleCancel} className="text-[#E65F2B] font-semibold w-[80px] h-[35px] text-[20px] border border-[#E65F2B] rounded-md">Cancel</button>
                </div>
              ) : (
                <FiEdit className="cursor-pointer text-white text-[28px] rounded-md p-[6px] bg-[#E65F2B]" onClick={handleEdit} />
              )}
            </div>
            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>HRMS ID</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="hrmsid" value={editedInfo.hrmsid} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.hrmsid
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Company Name</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="companyName" value={editedInfo.companyName} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.companyName
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>TAN</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="Tan" value={editedInfo.Tan} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.Tan
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>PAN</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="PAN" value={editedInfo.PAN} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.PAN
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Address</div>
              <div className='text-[#E65F2B] font-semibold ml-[120px] w-[500px] text-left'>
                {editable ? (
                  <textarea name="Address" value={editedInfo.Address} onChange={handleChange} className="border p-1 w-full border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none" />
                ) : (
                  companyInfo.Address
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Main Phone</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="MainPhone" value={editedInfo.MainPhone} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.MainPhone
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Industry</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="Industry" value={editedInfo.Industry} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  companyInfo.Industry
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Website</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>
                {editable ? (
                  <input type="text" name="website" value={editedInfo.website} onChange={handleChange} className="border p-1 border-[#E65F2B] border-opacity-40 rounded-md focus:outline-none w-full" />
                ) : (
                  <a href={companyInfo.website} className="underline">{companyInfo.website}</a>
                )}
              </div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Created On</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>{companyInfo.Createdon}</div>
            </div>

            <div className='flex items-center ml-[80px]'>
              <div className='font-semibold text-[#E65F2B] text-left pr-4 text-[18px] w-40'>Modified</div>
              <div className='text-[#E65F2B] font-semibold ml-[100px] text-left'>{companyInfo.Modified}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
