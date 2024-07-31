import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import unChecked from "../../../assets/project/inbox/uncheckbox.png";
import Checked from "../../../assets/project/inbox/checkbox.png";
import filledStar from "../../../assets/project/inbox/filledstar.png";
import unfilledstar from "../../../assets/project/inbox/unfilledstar.png";

import { MdDeleteForever } from "react-icons/md";
const initialData = [
  {
    checkbox: false,
    star: true,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: true,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
  {
    checkbox: false,
    star: false,
    name: "Venu Kumar",
    description:
      "[Support] There are many variations of passages of Lorem ipsum available, but the majoity",
    time: "July 19",
  },
];

const InboxPage = () => {
  const [inboxData, setInboxData] = useState(initialData);
  const [mainCheckbox, setMainCheckbox] = useState(false);

  const handleCheckboxClick = (index) => {
    const updatedData = inboxData.map((item, i) =>
      i === index ? { ...item, checkbox: !item.checkbox } : item
    );
    setInboxData(updatedData);
  };

  const handleMainCheckboxClick = () => {
    const newMainCheckbox = !mainCheckbox; //true
    const updatedData = inboxData.map((item) => ({
      ...item,
      checkbox: newMainCheckbox,
    }));
    setInboxData(updatedData);
    setMainCheckbox(newMainCheckbox);
  };

  const handleStarClick = (index) => {
    const updatedStar = inboxData.map((item, i) =>
      i === index ? { ...item, star: !item.star } : item
    );
    setInboxData(updatedStar);
  };

  return (
    <>
      <div className="rounded-r-xl bg-[#0098f1] bg-opacity-10 mb-10">
        <div className="flex justify-between py-5 mx-10">
          <h1 className="text-xl font-semibold">Inbox</h1>
          <div className="flex items-center gap-1 border px-5 rounded-lg border-[#0098F1] bg-white">
            <CiSearch className="text-2xl text-[#0098F1]" />
            <input
              type="search"
              placeholder="Search for anything..."
              className="text-xs py-2 outline-none w-64 text-[#0098F1] placeholder:text-[#0098F1]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mx-10">
          <div className="flex gap-7 items-center">
            <button
              onClick={handleMainCheckboxClick}
              className="text-4xl text-[#E65F2B]"
            >
              <img
                src={mainCheckbox ? Checked : unChecked}
                alt="Main Checkbox"
              />
            </button>
            <div className="border border-[#E65F2B] rounded-lg">
              <button className="border-r border-[#E65F2B] px-3 py-1">
                Refresh
              </button>
              <button className="border-r border-[#E65F2B] px-3 py-1">
                Archive
              </button>
              <button className="px-3">Trash</button>
            </div>
            <button className="border border-r border-[#E65F2B] rounded-lg py-1 px-3">
              Tags
            </button>
            <button className="border border-r border-[#E65F2B] rounded-lg py-1 px-3">
              More
            </button>
          </div>
          <div className="flex gap-1">
            <button className="border rounded-l-lg bg-[#E65F2B] text-white w-8 h-8 px-1">
              <PiLessThan className="text-2xl" />
            </button>
            <button className="border rounded-r-lg bg-[#E65F2B] text-white w-8 h-8 px-1">
              <PiGreaterThan className="text-2xl" />
            </button>
          </div>
        </div>
        <ul className="m-10">
          {inboxData.map((data, index) => (
            <li
              key={index}
              className=" cursor-pointer flex justify-between border-b py-3 group"
            >
              <div className="flex gap-5">
                <button onClick={() => handleCheckboxClick(index)} className="">
                  <img
                    src={data.checkbox ? Checked : unChecked}
                    alt="checkbox"
                  />
                </button>
                <button onClick={() => handleStarClick(index)} className="">
                  <img src={data.star ? filledStar : unfilledstar} alt="star" />
                </button>
                <div>
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
              <div>
                <p className="group-hover:hidden">{data.time}</p>
                <button className="hidden group-hover:block bg-red-500 p-2 text-xl text-white rounded-lg">
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InboxPage;
