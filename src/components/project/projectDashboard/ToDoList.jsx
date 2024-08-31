import React, { useState } from "react";

const ToDoList = () => {
  // State to manage the checked status of the to-do items
  const [items, setItems] = useState([
    "New Logo Design",
    "New Logo Design",
    "New Logo Design",
    "New Logo Design",
    "New Logo Design",
    "New Logo Design",
  ]);

  const handleChange = (index) => {
    // Handle checkbox state change
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <div className="  bg-white h-[400px] shadow-lg p-6  w-[300px]  rounded-lg max-w-sm ">
      <h2 className="text-xl font-bold text-[#0098F1] mb-4">To Do List</h2>
      <ul className="space-y-2 py-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center py-1">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-[#0098F1] border border-[#0098F1] rounded"
              checked={item.checked || false}
              onChange={() => handleChange(index)}
            />
            <span className="ml-2 text-[#0098F1]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
