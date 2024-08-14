import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import RolesDetails from "./RolesDetails";

const listOfRoles = [
  {
    name: "Employee",
    description:
      "This role is a basic role which allows users to enter time and expenses and also submit HR requests.",
  },
  {
    name: "HR Manager",
    description:
      "This role is a basic role which allows users to enter time and expenses and also submit HR requests.",
  },
  {
    name: "Payroll Manager",
    description:
      "This role is a basic role which allows users to enter time and expenses and also submit HR requests.",
  },
  {
    name: "Super Admin",
    description:
      "This role is a basic role which allows users to enter time and expenses and also submit HR requests.",
  },
];

const Roles = () => {
  const [addCustomerBtn, setAddCustomerBtn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [rolesList, setRolesList] = useState(listOfRoles);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowDropdown(false);
  };

  const handleSave = () => {
    if (name.trim() === "" || description.trim() === "") {
      alert("Please fill out both the role name and description.");
      return;
    }
    const newRole = {
      name: name,
      description: description,
    };
    setRolesList([...rolesList, newRole]);
    setName("");
    setDescription("");
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
  };

  return (
    <div className="pl-5 pb-5">
      <h1 className="font-semibold">Admin</h1>
      <p className="font-semibold">
        <span>Dashboard</span> / <span>Company Role</span>
      </p>
      <div className="flex gap-5 my-5">
        <button
          type="button"
          onClick={() => setAddCustomerBtn(false)}
          className="border px-3 py-1 rounded-md text-white bg-gradient-to-r from-[#E65F2B] to-[#FFC252]"
        >
          Select Role
        </button>
        <button
          type="button"
          onClick={() => setAddCustomerBtn(true)}
          className="border-2 text-[#E65F2B] border-[#E65F2B] px-3 py-1 rounded-md"
        >
          Add Customer Role
        </button>
      </div>

      {addCustomerBtn ? (
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center space-x-20">
            <label className="font-semibold text-[#E65F2B]">Role Name</label>
            <input
              type="text"
              className="w-80 py-1 border-2 rounded-md border-[#E65F2B] outline-none pl-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex items-center space-x-10">
            <label className="font-semibold text-[#E65F2B]">
              Role Description
            </label>
            <input
              type="text"
              className="w-80 py-1 border-2 rounded-md border-[#E65F2B] outline-none pl-1"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="space-x-8 font-semibold">
            <button
              onClick={handleSave}
              className="px-4 py-2 w-32 rounded-lg bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 w-32 rounded-lg border-2 border-[#E65F2B] text-[#E65F2B]"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-5">
            <label className="font-semibold text-[#E65F2B]">Role Name</label>
            <div className="w-80">
              <div className="rounded-sm flex justify-between items-center bg-[#E65F2B] border-2 border-[#E65F2B] cursor-pointer">
                <input
                  type="text"
                  className="w-full py-1 bg-transparent text-[#E65F2B] pl-2 outline-none bg-white"
                  value={selectedRole ? selectedRole.name : ""}
                  placeholder="Select Role"
                  readOnly
                />
                <button
                  className="px-1"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <RiArrowDownSLine className="text-3xl text-white" />
                </button>
              </div>

              {showDropdown && (
                <div className="absolute w-80 z-10 bg-white border border-[#E65F2B] mt-1 max-h-48">
                  {rolesList.map((role, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer text-[#E65F2B] hover:bg-[#E65F2B] hover:text-white"
                      onClick={() => handleRoleSelect(role)}
                    >
                      {role.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {selectedRole && (
            <div className="mt-5 flex space-x-5 w-96 -ml-9">
              <h1 className="text-[#E65F2B] font-semibold">Description</h1>
              <p className="text-gray-700 text-xs mt-1">
                {selectedRole.description}
              </p>
            </div>
          )}
          {selectedRole && <RolesDetails selectedRole={selectedRole.name} />}
        </div>
      )}
    </div>
  );
};

export default Roles;
