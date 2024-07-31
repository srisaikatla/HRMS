import React from "react";
import tableicone from "../../../assets/project/projectDashboard/tableicone.png";
import profilepic from "../../../assets/project/projectDashboard/profilepic.png";

const data = [
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
  {
    team: [profilepic, profilepic, profilepic, profilepic, profilepic],
    change: (
      <img src={tableicone} alt="Increase" className="w-6 h-6 text-green-500" />
    ),
    sales: 11200,
    price: 12400,
    total: 12400,
  },
];
const timer = setTimeout(() => {
  setIsPopupOpen(false);
}, 10000);

const ProjectListTable = () => {
  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold  text-blue-500 mb-4">Project List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[680px] bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-blue-500 text-white border-b text-left">
                Team
              </th>
              <th className="py-3 px-4 bg-blue-500 text-white border-b text-left">
                Change
              </th>
              <th className="py-3 px-4 bg-blue-500 text-white border-b text-center">
                Sales
              </th>
              <th className="py-3 px-4 bg-blue-500 text-white border-b text-center">
                Price
              </th>
              <th className="py-3 px-4 bg-blue-500 text-white border-b text-center">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-3 border-b border-blue-500">
                  <div className="relative flex items-center">
                    {item.team.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`Profile ${imgIdx + 1}`}
                        className="absolute w-8 h-8 rounded-full border-2 border-maroon-500"
                        style={{
                          left: `${imgIdx * 20}px`,
                          zIndex: imgIdx + 1,
                        }}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 border-b border-blue-500 flex justify-center items-center">
                  {item.change}
                </td>
                <td className="py-3 px-4 border-b border-blue-500 text-center">
                  {item.sales}
                </td>
                <td className="py-3 px-4 border-b border-blue-500 text-center">
                  {item.price}
                </td>
                <td className="py-3 px-4 border-b border-blue-500 text-center">
                  {item.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectListTable;
