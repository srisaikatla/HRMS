import React from "react";
import SocialApps from "./SocialApps";
import SocialStatistics from "./SocialStatistics";
import SocialMedia from "./SocialMedia";
import FacebookPosts from "./FacebookPosts";
import TwitterPosts from "./TwitterPosts";

const HrSocial = () => {
  return (
    <div className="mt-24 p-6">
      <h1 className="text-[#E65F2B] text-[20px] font-semibold">
        <span>HR</span> / <span>HR Social</span>
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
