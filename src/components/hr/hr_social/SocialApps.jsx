import React from "react";

const socialApps = [
  {
    image: "src/assets/hr/hrSocial/socialMedia/linkedin.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/instagram.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/twitter.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/facebook.png",
    followers: "Followers 2519",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/google.png",
    followers: "Followers 2519",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/youtube.png",
    followers: "Followers 2519",
  },
];

const SocialApps = () => {
  return (
    <div className="flex justify-between my-5 pl-2 ">
      {socialApps.map((app) => (
        <div className="flex flex-col items-center bg-white rounded-lg p-2 ">
          <img src={app.image} className="h-[20px]" />
          <p className="text-sm ">{app.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialApps;
