import React from "react";
import SocialApps from "./SocialApps";
import SocialStatistics from "./SocialStatistics";
import SocialMedia from "./SocialMedia";
import FacebookPosts from "./FacebookPosts";
import TwitterPosts from "./TwitterPosts";

const HrSocial = () => {
  return (
    <div className=" p-6">
      <h1 className="text-[#E65F2B] text-xl font-bold">
        <span>Hr/Hr social</span>
      </h1>
      <SocialApps />
      <SocialStatistics />
      <SocialMedia />
      <div className="flex justify-between gap-10">
        <FacebookPosts />
        <TwitterPosts />
      </div>
    </div>
  );
};

export default HrSocial;
