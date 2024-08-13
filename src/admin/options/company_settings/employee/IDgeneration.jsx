import React, { useState } from "react";

function IDgeneration() {
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [prefix, setPrefix] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [suffix, setSuffix] = useState("");
  const [adminName, setAdminName] = useState("Mounika Ch"); // Admin name is set

  const handleAutoGenerateChange = () => {
    setAutoGenerate(true);
  };

  const handleManualEntryChange = () => {
    setAutoGenerate(false);
  };

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleSuffixChange = (e) => {
    setSuffix(e.target.value);
  };

  const handleSave = () => {
    const combinedId = `${prefix}${employeeId}${suffix}`;
    const timestamp = new Date().toLocaleString();

    const newEntry = {
      prefix,
      employeeId,
      suffix,
      combinedId,
      adminName,
      timestamp,
    };

    // Retrieve existing IDs from localStorage
    const existingIds =
      JSON.parse(localStorage.getItem("generatedEmployeeIDs")) || [];

    // Add the new entry to the existing IDs
    const updatedIds = [...existingIds, newEntry];

    // Store the updated array back to localStorage
    localStorage.setItem("generatedEmployeeIDs", JSON.stringify(updatedIds));

    // Clear input fields
    setPrefix("");
    setEmployeeId("");
    setSuffix("");
  };

  return (
    <>
      <div className="ml-20 p-4">
        <div className="text-[#e65f2b] text-start pl-20 space-y-3">
          <p>
            Your Employee ID is set on auto-generate mode to save your time.
          </p>
          <p>Are you sure about changing this setting?</p>
        </div>

        <div className="pl-20 text-[#e65f2b] mt-4 space-y-4">
          <div>
            <input
              type="radio"
              id="autoGenerate"
              name="idMode"
              value="auto"
              checked={autoGenerate}
              onChange={handleAutoGenerateChange}
            />
            <label htmlFor="autoGenerate" className="ml-2">
              Continue auto-generating Employee ID
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="manualEntry"
              name="idMode"
              value="manual"
              checked={!autoGenerate}
              onChange={handleManualEntryChange}
            />
            <label htmlFor="manualEntry" className="ml-2">
              I will add them manually each time
            </label>
          </div>
        </div>

        {autoGenerate && (
          <div className="pl-20 text-[#e65f2b] mt-6 space-y-4">
            <div className="flex gap-x-2">
              <div className="">
                <label className="w-32 pb-1 block" htmlFor="prefix">
                  Prefix:
                </label>
                <input
                  type="text"
                  id="prefix"
                  value={prefix}
                  onChange={handlePrefixChange}
                  className="border rounded-lg border-[#e65f2b] outline-[#e65f2b] p-2 w-full"
                />
              </div>

              <div className="">
                <label className="w-32 pb-1 block" htmlFor="employeeId">
                  Employee ID:
                </label>
                <input
                  type="text"
                  id="employeeId"
                  value={employeeId}
                  onChange={handleEmployeeIdChange}
                  className="border rounded-lg border-[#e65f2b] outline-[#e65f2b] p-2 w-full"
                />
              </div>

              <div className="">
                <label className="w-32 pb-1 block" htmlFor="suffix">
                  Suffix:
                </label>
                <input
                  type="text"
                  id="suffix"
                  value={suffix}
                  onChange={handleSuffixChange}
                  className="border rounded-lg border-[#e65f2b] outline-[#e65f2b] p-2 w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[#e65f2b]">
                Preview: <strong>{`${prefix}${employeeId}${suffix}`}</strong>
              </p>
            </div>

            <button
              onClick={handleSave}
              className=" bg-gradient-to-r from-[#E65F2B] to-[#FFC252]  text-white px-4 py-2 rounded mt-4"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default IDgeneration;
