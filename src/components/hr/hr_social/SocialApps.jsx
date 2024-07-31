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
    <div className="flex justify-between my-5 px-8 gap-20">
      {socialApps.map((app) => (
        <div className="flex flex-col items-center bg-white rounded-lg gap-2 ">
          <img src={app.image} className="h-[30px]" />
          <p className="text-sm ml-4">{app.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialApps;
