// import React, { useRef, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { GoChevronRight, GoChevronLeft } from "react-icons/go";

// const socialMedia = [
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/linkedin.png",
//     followers: "Followers 2510",
//   },
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/instagram.png",
//     followers: "Followers 2510",
//   },
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/twitter.png",
//     followers: "Followers 2510",
//   },
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/facebook.png",
//     followers: "Followers 2519",
//   },
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/google.png",
//     followers: "Followers 2519",
//   },
//   {
//     image: "src/assets/hr/hrSocial/socialMedia/youtube.png",
//     followers: "Followers 2519",
//   },
// ];

// const facebookPosts = [
//   {
//     image: "src/assets/hrSocial/facebook/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
//   {
//     image: "src/assets/hrSocial/facebook/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
//   {
//     image: "src/assets/hrSocial/facebook/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
// ];

// const twitterPosts = [
//   {
//     image: "src/assets/hrSocial/twitter/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
//   {
//     image: "src/assets/hrSocial/twitter/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
//   {
//     image: "src/assets/hrSocial/twitter/post_pic.png",
//     name: "Chris Fox",
//     description: "Contrary to popular belief not simply text",
//     time: "1 hr ago",
//   },
// ];

// const mediaData = [
//   {
//     id: 1,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/linkedin.png",
//     name: "LINKED IN",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
//   {
//     id: 2,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/instagram.png",
//     name: "INSTAGRAM",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
//   {
//     id: 3,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/twitter.png",
//     name: "TWITTER",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
//   {
//     id: 4,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/facebook.png",
//     name: "FACEBOOK",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
//   {
//     id: 5,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/google.png",
//     name: "GOOGLE PLUS",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
//   {
//     id: 6,
//     media:
//       "src/assets/hr/hrSocial/socialMedia/youtube.png",
//     name: "YOUTUBE",
//     like: "19K",
//     comment: "19K",
//     share: "19K",
//     members: "3432",
//   },
// ];

// const data = [
//   { name: "Jan", LinkedIn: 500, Facebook: 700, Instagram: 1000 },
//   { name: "Feb", LinkedIn: 700, Facebook: 900, Instagram: 1200 },
//   { name: "Mar", LinkedIn: 1000, Facebook: 1200, Instagram: 1500 },
//   { name: "Apr", LinkedIn: 800, Facebook: 1100, Instagram: 1400 },
//   { name: "May", LinkedIn: 900, Facebook: 1300, Instagram: 1600 },
//   { name: "Jun", LinkedIn: 1100, Facebook: 1400, Instagram: 1800 },
//   { name: "Jul", LinkedIn: 1300, Facebook: 1500, Instagram: 1900 },
//   { name: "Aug", LinkedIn: 1200, Facebook: 1600, Instagram: 2000 },
//   { name: "Sep", LinkedIn: 1400, Facebook: 1700, Instagram: 2100 },
//   { name: "Oct", LinkedIn: 1500, Facebook: 1900, Instagram: 2200 },
//   { name: "Nov", LinkedIn: 1700, Facebook: 2100, Instagram: 2400 },
//   { name: "Dec", LinkedIn: 1800, Facebook: 2300, Instagram: 2500 },
// ];

// const HrSocial = () => {
//   const imageRef = useRef(null)
//   const [currentPage, setCurrentPage] = useState(1)

//   const onClickfile = () =>{
//     imageRef.current.click()
//   }

//   const legendPayload = [
//     { value: 'LinkedIn', type: 'square', color: 'rgba(0, 152, 241, 1)' },
//     { value: 'Facebook', type: 'square', color: 'rgba(0, 152, 241, 0.6)' },
//     { value: 'Instagram', type: 'square', color: 'rgba(0, 152, 241, 0.3)' },
//   ];

//   const itemsPerPage = 2;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = mediaData.slice(indexOfFirstItem, indexOfLastItem)
//   const totalPages = Math.ceil(mediaData.length / itemsPerPage)

//   const handleNextPage = () =>{
//     if(currentPage < totalPages) return setCurrentPage(currentPage + 1)
//   }
//   const handlePreviousPage = () =>{
//     if(currentPage > 1) return setCurrentPage(currentPage - 1)
//   }



//   return (
//     <div className="mt-24 pl-8">
//       <h1 className="text-[#E65F2B] text-[20px]">
//         <span>HR</span> / <span>HR Social</span>
//       </h1>
//       <div className="flex flex-row items-center gap-8 my-8">
//         {socialMedia.map((app) => (
//           <div className="flex flex-col items-center gap-2 bg-white rounded-lg px-14 py-8">
//             <img src={app.image} className="h-[50px]" />
//             <p>{app.followers}</p>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white my-5 p-5">
//         <div className="flex justify-between items-center">
//           <h1 className="text-[#E65F2B] text-[20px] font-bold">
//             Social Statistics
//           </h1>
//         </div>
//         <BarChart
//           width={1400}
//           height={500}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend payload={legendPayload}/>
//           <Bar dataKey="LinkedIn" stackId="a" fill="rgba(0, 152, 241, 1)" />
//           <Bar dataKey="Facebook" stackId="a" fill="rgba(0, 152, 241, 0.6)" />
//           <Bar dataKey="Instagram" stackId="a" fill="rgba(0, 152, 241, 0.3)" />
//         </BarChart>
//       </div>

      

//       <div className="bg-white rounded-lg my-5 p-5">
//         <h1 className="text-[20px] text-[#E65F2B] font-bold ">Social Media</h1>
//         <div className="flex flex-col gap-5 my-5">
//           <table className="">
//             <thead className="bg-[#0098F1] text-white">
//               <tr>
//                 <th className="py-2">Media</th>
//                 <th>Name</th>
//                 <th>Like</th>
//                 <th>Comment</th>
//                 <th>Share</th>
//                 <th>Members</th>
//               </tr>
//             </thead>
//             <tbody className="text-center space-y-5">
//               {currentItems.map((user) => (
//                 <tr key={user.id} className="text-[#0098F1] font-semibold">
//                   <td className="py-4">
//                     <img
//                       src={user.media}
//                       alt={user.name}
//                       className="h-10 mx-auto"
//                     />
//                   </td>
//                   <td className="py-4">{user.name}</td>
//                   <td className="py-4">{user.like}</td>
//                   <td className="py-4">{user.comment}</td>
//                   <td className="py-4">{user.share}</td>
//                   <td className="py-4">
//                     <button className="border-2 border-[#E65F2B] text-[#E65F2B] rounded-md px-8 py-1">
//                       {user.members}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex items-center gap-3 self-end mx-32">
//             <p>{currentPage} of {totalPages}</p>
//             <button
//             onClick={handlePreviousPage} className="bg-[#E65F2B] rounded-full h-12 w-12 flex items-center justify-center text-white">
//               <GoChevronLeft size={24} />
//             </button>

//             <button
//             onClick={handleNextPage} className="bg-[#E65F2B] rounded-full h-12 w-12 flex items-center justify-center text-white">
//               <GoChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-10">
//         <div className="bg-white p-5">
//           <h1 className="text-[#E65F2B] text-xl font-bold">
//             Facebook Recent Post
//           </h1>
//           <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
//             <textarea
//               className="outline-none"
//               placeholder="Type here..........."
//               cols={75}
//               rows={5}
//             ></textarea>
//           </div>
//           <div className="flex gap-3 justify-end my-5">
//             <button type="button" className="bg-[#E65F2B] p-2 rounded-md" onClick={onClickfile}>
//               <img
//                 src="src/assets/hrSocial/facebook/vector.png"
//                 className="w-[30px]"
//                 alt="file image"
//               />
//             </button>
//             <input type="file" ref={imageRef} hidden />
//             <button className="bg-[#E65F2B] p-2 rounded-md">
//               <img
//                 src="src/assets/hrSocial/facebook/camera.png"
//                 className="w-[25px]"
//                 alt="camera image"
//               />
//             </button>
//             <button className="px-10 py-1 text-xl bg-[#E65F2B] text-white rounded-lg">
//               Post
//             </button>
//           </div>
//           <div className="my-5">
//             {facebookPosts.map((post) => (
//               <div className="flex justify-between my-5  text-[#0098F1]">
//                 <div className="flex gap-5">
//                   <img src={post.image} alt="post pic" />
//                   <div>
//                     <h1>{post.name}</h1>
//                     <p>{post.description}</p>
//                   </div>
//                 </div>

//                 <p>{post.time}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-white p-5">
//           <h1 className="text-[#E65F2B] text-xl font-bold">Twitter Feed</h1>
//           <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
//             <textarea
//               className="outline-none"
//               placeholder="Type here..........."
//               cols={75}
//               rows={5}
//             ></textarea>
//           </div>
//           <div className="flex gap-3 justify-between items-center my-5">
//             <button className="px-10 py-1 text-xl bg-[#E65F2B] text-white rounded-lg">
//               Post
//             </button>
//             <p className="text-[#0098F1]">13k users active</p>
//           </div>
//           <div className="my-5">
//             {twitterPosts.map((post) => (
//               <div className="flex justify-between my-5  text-[#0098F1]">
//                 <div className="flex gap-5">
//                   <img src={post.image} alt="post pic" />
//                   <div>
//                     <h1>{post.name}</h1>
//                     <p>{post.description}</p>
//                   </div>
//                 </div>

//                 <p>{post.time}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HrSocial;


import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const socialMedia = [
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

const facebookPosts = [
  {
    image: "src/assets/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hrSocial/facebook/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
];

const twitterPosts = [
  {
    image: "src/assets/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
  {
    image: "src/assets/hrSocial/twitter/post_pic.png",
    name: "Chris Fox",
    description: "Contrary to popular belief not simply text",
    time: "1 hr ago",
  },
];

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

const originalData = [
  [400, 500, 300],
  [600, 700, 400],
  [800, 600, 500],
  [1200, 800, 700],
  [900, 1000, 600],
  [1100, 900, 800],
  [1400, 1200, 1000],
  [1300, 1100, 900],
  [1200, 1300, 1100],
  [1500, 1400, 1200],
  [1600, 1500, 1300],
  [1800, 1600, 1400],
];

// Normalize the data
const normalizedData = originalData.map((monthData) => {
  const total = monthData.reduce((acc, value) => acc + value, 0);
  return monthData.map((value) => (value / total) * 2500); // scale to max height 2500
});

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "LinkedIn",
      data: normalizedData.map((monthData) => monthData[0]),
      backgroundColor: "rgba(0, 123, 255, 0.8)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness : 17
    },
    {
      label: "Facebook",
      data: normalizedData.map((monthData) => monthData[1]),
      backgroundColor: "rgba(0, 123, 255, 0.6)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness : 17
    },
    {
      label: "Instagram",
      data: normalizedData.map((monthData) => monthData[2]),
      backgroundColor: "rgba(0, 123, 255, 0.4)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness : 17
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: {size:12},
        padding:14,
        boxWidth: 20,
        boxHeight :20,
        usePointStyle: false,
        pointStyle: "rectRounded",
        generateLabels: (chart) => {
          const datasets = chart.data.datasets;
          return datasets.map((dataset, i) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor,
            strokeStyle: dataset.backgroundColor,
            index: i,
          }));
        },
      },
    },
    title: {
      display: false,
      text: "Social Statistics",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      max: 2500,
    },
  },
};

const HrSocial = () => {
  const imageRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickfile = () => {
    imageRef.current.click();
  };

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
    <div className="mt-24 pl-8 lg:w-[calc(100%-240px)]">
      <h1 className="text-[#E65F2B] text-[20px] font-semibold">
        <span>HR</span> / <span>HR Social</span>
      </h1>
      <div className="flex flex-row items-center gap-8 my-4">
        {socialMedia.map((app) => (
          <div className="flex flex-col items-center gap-2 bg-white rounded-lg px-14 py-8">
            <img src={app.image} className="h-[30px]" />
            <p>{app.followers}</p>
          </div>
        ))}
      </div>

      <div className="bg-white my-1 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-[#E65F2B] text-[20px] font-bold">
            Social Statistics
          </h1>
        </div>
        <div className="p-4 max-w-full">
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="bg-white rounded-lg my-5 p-5">
        <h1 className="text-[20px] text-[#E65F2B] font-bold ">Social Media</h1>
        <div className="flex flex-col gap-5 my-5">
          <table className="">
            <thead className="bg-[#0098F1] text-white">
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
          <div className="flex items-center gap-3 self-end mx-32">
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

      <div className="flex gap-10">
        <div className="bg-white p-5">
          <h1 className="text-[#E65F2B] text-xl font-bold">
            Facebook Recent Post
          </h1>
          <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
            <textarea
              className="outline-none"
              placeholder="Type here..........."
              cols={75}
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
                src="src/assets/hrSocial/facebook/vector.png"
                className="w-[30px]"
                alt="file image"
              />
            </button>
            <input type="file" ref={imageRef} hidden />
            <button className="bg-[#E65F2B] p-2 rounded-md">
              <img
                src="src/assets/hrSocial/facebook/camera.png"
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
        <div className="bg-white p-5">
          <h1 className="text-[#E65F2B] text-xl font-bold">Twitter Feed</h1>
          <div className="border-2 rounded-md border-[#0098F1] my-2 p-2">
            <textarea
              className="outline-none"
              placeholder="Type here..........."
              cols={75}
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
      </div>
    </div>
  );
};

export default HrSocial;
