import React, { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const mediaData = [
    {
      id: 1,
      media: "src/assets/hr/hrSocial/socialMedia/linkedin.png",
      name: "LINKED IN",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
    {
      id: 2,
      media: "src/assets/hr/hrSocial/socialMedia/instagram.png",
      name: "INSTAGRAM",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
    {
      id: 3,
      media: "src/assets/hr/hrSocial/socialMedia/twitter.png",
      name: "TWITTER",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
    {
      id: 4,
      media: "src/assets/hr/hrSocial/socialMedia/facebook.png",
      name: "FACEBOOK",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
    {
      id: 5,
      media: "src/assets/hr/hrSocial/socialMedia/google.png",
      name: "GOOGLE PLUS",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
    {
      id: 6,
      media: "src/assets/hr/hrSocial/socialMedia/youtube.png",
      name: "YOUTUBE",
      like: "19K",
      comment: "19K",
      share: "19K",
      members: "3432",
    },
  ];

const SocialMedia = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mediaData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mediaData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) return setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) return setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-white rounded-lg my-5">
      <h1 className="text-[20px] text-[#E65F2B] font-bold ">Social Media</h1>
      <div className="flex flex-col gap-5 my-5">
        <table className="">
          <thead className="bg-[#0098F1] text-white ">
            <tr>
              <th className="py-2">Media</th>
              <th>Name</th>
              <th>Like</th>
              <th>Comment</th>
              <th>Share</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody className="text-center space-y-5">
            {currentItems.map((user) => (
              <tr key={user.id} className="text-[#0098F1] font-semibold">
                <td className="py-4">
                  <img
                    src={user.media}
                    alt={user.name}
                    className="h-10 mx-auto"
                  />
                </td>
                <td className="py-4">{user.name}</td>
                <td className="py-4">{user.like}</td>
                <td className="py-4">{user.comment}</td>
                <td className="py-4">{user.share}</td>
                <td className="py-4">
                  <button className="border-2 border-[#E65F2B] text-[#E65F2B] rounded-md px-8 py-1">
                    {user.members}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-3 self-end ">
          <p>
            {currentPage} of {totalPages}
          </p>
          <button
            onClick={handlePreviousPage}
            className="bg-[#E65F2B] rounded-full h-12 w-12 flex items-center justify-center text-white"
          >
            <GoChevronLeft size={24} />
          </button>

          <button
            onClick={handleNextPage}
            className="bg-[#E65F2B] rounded-full h-12 w-12 flex items-center justify-center text-white"
          >
            <GoChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
