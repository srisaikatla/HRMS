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
    <div className="bg-white py-5 ">
      <h1 className="text-[#E65F2B] text-xl font-bold">Facebook Recent Post</h1>
      <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
        <textarea
          className="outline-none"
          placeholder="Type here..........."
          cols={55}
          rows={5}
        ></textarea>
      </div>
      <div className="flex gap-3 justify-end my-5">
        <button
          type="button"
          className="bg-[#E65F2B] p-2 rounded-md"
          onClick={onClickfile}
        >
          <img
            src="src/assets/hr/hrSocial/facebook/vector.png"
            className="w-[30px]"
            alt="file image"
          />
        </button>
        <input type="file" ref={imageRef} hidden />
        <button className="bg-[#E65F2B] p-2 rounded-md">
          <img
            src="src/assets/hr/hrSocial/facebook/camera.png"
            className="w-[25px]"
            alt="camera image"
          />
        </button>
        <button className="px-10 py-1 text-xl bg-[#E65F2B] text-white rounded-lg">
          Post
        </button>
      </div>
      <div className="my-5">
        {facebookPosts.map((post) => (
          <div className="flex justify-between my-5  text-[#0098F1]">
            <div className="flex gap-5">
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
