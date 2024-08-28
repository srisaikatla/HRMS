import React from "react";
import SocialApps from "./SocialApps";
import SocialStatistics from "./SocialStatistics";
import SocialMedia from "./SocialMedia";
import FacebookPosts from "./FacebookPosts";
import TwitterPosts from "./TwitterPosts";

const HrSocial = () => {
  return (
    <div className="p-4 mt-4">
      <h1 className="text-[#E65F2B] lg:text-lg  text-sm font-bold mb-4">
        <span>Hr / Hr social</span>
      </h1>
      <SocialApps />
      <SocialStatistics />
      <SocialMedia />
      <div className="flex justify-between gap-x-3">
        <FacebookPosts />
        <TwitterPosts />
      </div>
    </div>
  );
};

export default HrSocial;
