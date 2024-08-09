import React from "react";

const twitterPosts = [
  {
    image: "src/assets/hr/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hr/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hr/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
];

const TwitterPosts = () => {
  return (
    <div className="bg-white p-5 w-[465px]">
      <h1 className="text-[#E65F2B] text-xl font-bold mb-4">Twitter Feed</h1>

      <textarea
        className="outline-none border-2 rounded-md border-[#0098F1] w-full p-2 text-sm"
        placeholder="Type here..........."
        rows={5}
      />

      <div className="flex gap-3 justify-between items-center">
        <button className="text-lg bg-[#E65F2B] text-white rounded-lg px-6">
          Post
        </button>
        <p className="text-[#0098F1]">13k users active</p>
      </div>
      <div className="my-5">
        {twitterPosts.map((post) => (
          <div className="flex justify-between my-5  text-[#0098F1]">
            <div className="flex gap-x-2">
              <img src={post.image} alt="post pic" />
              <div>
                <h1>{post.name}</h1>
                <p>{post.description}</p>
              </div>
            </div>
            <p>{post.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterPosts;
