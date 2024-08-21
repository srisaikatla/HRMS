import React, { useState } from "react";

// Import your components
import AccountDetails from "./AccountOverview";
import BillingHistory from "./BillingHistory";
import SubscriptionHistory from "./SubscriptionHistory";
import OtherServices from "./OtherServices";
import ManageAddress from "./ManageAddons";

function AccountNavigation() {
  const [activeTab, setActiveTab] = useState("AccountDetails");

  const renderComponent = () => {
    switch (activeTab) {
      case "AccountDetails":
        return <AccountDetails />;
      case "BillingHistory":
        return <BillingHistory />;
      case "SubscriptionHistory":
        return <SubscriptionHistory />;
      case "OtherServices":
        return <OtherServices />;
      case "ManageAddress":
        return <ManageAddress />;
      default:
        return <AccountDetails />;
    }
  };

  return (
    <>
      <div id="main" className="text-[24px] px-4 w-auto h-auto">
        <div className="font-semibold">
          <span className="flex">Admin</span>
          <span className="text-[16px] font-medium">
            Dashboard / Account Details / Account: Overview
          </span>
        </div>

        <iv className="w-auto bg-white rounded-3xl  mt-10 text-lg h-16 flex justify-between items-center">
          <div
            style={
              activeTab === "AccountDetails"
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #E65F2B, #FFC252)",
                    color: "white",
                    borderRadius: "8px 0px 0px 8px", // Text color when the tab is active
                  }
                : {
                    backgroundColor: "white", // Background color when the tab is inactive
                    color: "#e65f2b",
                    borderRadius: "8px 0px 0px 8px", // Text color when the tab is inactive
                  }
            }
            className="w-48 px-4 justify-center items-center flex h-16 cursor-pointer"
            onClick={() => setActiveTab("AccountDetails")}
          >
            <span>Account Details</span>
          </div>
          <div
            style={
              activeTab === "BillingHistory"
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #E65F2B, #FFC252)",
                    color: "white", // Text color when the tab is active
                  }
                : {
                    backgroundColor: "white", // Background color when the tab is inactive
                    color: "#e65f2b", // Text color when the tab is inactive
                  }
            }
            className="w-48 px-4 justify-center items-center flex h-16 cursor-pointer"
            onClick={() => setActiveTab("BillingHistory")}
          >
            <span>Billing History</span>
          </div>

          <div
            style={
              activeTab === "SubscriptionHistory"
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #E65F2B, #FFC252)",
                    color: "white", // Text color when the tab is active
                  }
                : {
                    backgroundColor: "white", // Background color when the tab is inactive
                    color: "#e65f2b", // Text color when the tab is inactive
                  }
            }
            className="w-48 px-4 justify-center items-center flex h-16 cursor-pointer"
            onClick={() => setActiveTab("SubscriptionHistory")}
          >
            <span>Subscription History</span>
          </div>
          <div
            style={
              activeTab === "OtherServices"
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #E65F2B, #FFC252)",
                    color: "white", // Text color when the tab is active
                  }
                : {
                    backgroundColor: "white", // Background color when the tab is inactive
                    color: "#e65f2b", // Text color when the tab is inactive
                  }
            }
            className="w-48 px-4 justify-center items-center flex h-16 cursor-pointer"
            onClick={() => setActiveTab("OtherServices")}
          >
            <span>Other Services</span>
          </div>
          <div
            style={
              activeTab === "ManageAddress"
                ? {
                    backgroundImage:
                      "linear-gradient(to right, #E65F2B, #FFC252)",
                    color: "white",
                    borderRadius: "0px 8px 8px 0px", // Text color when the tab is active
                  }
                : {
                    backgroundColor: "white", // Background color when the tab is inactive
                    color: "#e65f2b",
                    borderRadius: "0px 8px 8px 0px", // Text color when the tab is inactive
                  }
            }
            className="w-48 px-4 justify-center items-center flex h-16 cursor-pointer"
            onClick={() => setActiveTab("ManageAddress")}
          >
            <span>Manage Address</span>
          </div>
        </iv>

        <div className="mt-10">{renderComponent()}</div>
      </div>
    </>
  );
}

export default AccountNavigation;
