import React, { useRef } from "react";

const facebookPosts = [
  {
    image: "src/assets/hr/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hr/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hr/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
];

const FacebookPosts = () => {
  const imageRef = useRef(null);

  const onClickfile = () => {
    imageRef.current.click();
  };
  return (
    <div className="bg-white p-5 w-[465px]">
      <h1 className="text-[#E65F2B] text-xl font-bold mb-4">Facebook Recent Post</h1>

      <textarea
        className="outline-none border-2 rounded-md border-[#0098F1] w-full p-2 text-sm"
        placeholder="Type here..........."
        rows={5}
      />

      <div className="flex gap-3 justify-end">
        <button
          type="button"
          className="bg-[#E65F2B] rounded-md px-2 "
          onClick={onClickfile}
        >
          <img
            src="src/assets/hr/hrSocial/facebook/vector.png"
            className="w-[20px]"
            alt="file image"
          />
        </button>
        <input type="file" ref={imageRef} hidden />
        <button className="bg-[#E65F2B] rounded-md px-2">
          <img
            src="src/assets/hr/hrSocial/facebook/camera.png"
            className="w-[20px]"
            alt="camera image"
          />
        </button>
        <button className=" text-lg bg-[#E65F2B] text-white rounded-lg px-6">
          Post
        </button>
      </div>
      <div className="my-5">
        {facebookPosts.map((post) => (
          <div className="flex justify-between my-5 text-[#0098F1]">
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

export default FacebookPosts;
