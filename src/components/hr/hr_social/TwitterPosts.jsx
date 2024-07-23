import React from 'react'

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
    <div className="bg-white py-5 ">
          <h1 className="text-[#E65F2B] text-xl font-bold">Twitter Feed</h1>
          <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
            <textarea
              className="outline-none"
              placeholder="Type here..........."
              cols={55}
              rows={5}
            ></textarea>
          </div>
          <div className="flex gap-3 justify-between items-center my-5">
            <button className="px-10 py-1 text-xl bg-[#E65F2B] text-white rounded-lg">
              Post
            </button>
            <p className="text-[#0098F1]">13k users active</p>
          </div>
          <div className="my-5">
            {twitterPosts.map((post) => (
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
  )
}

export default TwitterPosts