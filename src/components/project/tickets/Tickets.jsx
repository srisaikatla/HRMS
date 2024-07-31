import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

const Tickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 231,
      assignBy: "Airi Satou",
      assignTo: "Angelica Ramos",
      email: "airi@example.com",
      subject: "New Code Update",
      status: "PENDING",
      date: "24-07-24",
    },
    {
      id: 232,
      assignBy: "John Doe",
      assignTo: "Jane Smith",
      email: "john.doe@example.com",
      subject: "Bug Fix",
      status: "RESOLVED",
      date: "25-07-24",
    },
    {
      id: 233,
      assignBy: "Alice Johnson",
      assignTo: "Bob Brown",
      email: "alice.johnson@example.com",
      subject: "Feature Request",
      status: "PENDING",
      date: "26-07-24",
    },
    {
      id: 234,
      assignBy: "Emily Davis",
      assignTo: "Michael Scott",
      email: "emily.davis@example.com",
      subject: "UI Improvement",
      status: "PENDING",
      date: "27-07-24",
    },
    {
      id: 235,
      assignBy: "James Brown",
      assignTo: "Linda Harris",
      email: "james.brown@example.com",
      subject: "Security Patch",
      status: "RESOLVED",
      date: "28-07-24",
    },
    {
      id: 236,
      assignBy: "Laura Green",
      assignTo: "Chris Evans",
      email: "laura.green@example.com",
      subject: "Database Update",
      status: "PENDING",
      date: "29-07-24",
    },
    {
      id: 237,
      assignBy: "Daniel Lee",
      assignTo: "Nancy Drew",
      email: "daniel.lee@example.com",
      subject: "Code Review",
      status: "RESOLVED",
      date: "30-07-24",
    },
    {
      id: 238,
      assignBy: "Sophia Wilson",
      assignTo: "Tom Hardy",
      email: "sophia.wilson@example.com",
      subject: "API Integration",
      status: "PENDING",
      date: "31-07-24",
    },
    {
      id: 239,
      assignBy: "Mia Johnson",
      assignTo: "Paul Allen",
      email: "mia.johnson@example.com",
      subject: "Performance Tuning",
      status: "RESOLVED",
      date: "01-08-24",
    },
  ]);

  const handleEdit = (id) => {
    // Replace with your actual edit logic
    alert(`Edit ticket with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Confirm before deleting
    if (
      window.confirm(`Are you sure you want to delete ticket with ID: ${id}?`)
    ) {
      // Replace with your actual delete logic
      setTickets(tickets.filter((ticket) => ticket.id !== id));
      alert(`Deleted ticket with ID: ${id}`);
    }
  };

  // Sample card data for visualization
  const cardsData = [
    { count: 2078, label: "Total Tickets", color: "#FF1F23" },
    { count: 1278, label: "Resolved", color: "#FFC252" },
    { count: 521, label: "Pending", color: "#9038FC" },
    { count: 978, label: "Responded", color: "#00AAFF" },
  ];

  return (
    <>
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-around items-center mb-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`w-[200px] h-[140px] text-white rounded-lg flex flex-col justify-center items-center shadow-lg relative ${
                card.color.startsWith("#") ? "" : card.color
              }`}
              style={
                card.color.startsWith("#")
                  ? { backgroundColor: card.color }
                  : {}
              }
            >
              <span className="text-3xl font-bold">{card.count}</span>
              <span className="text-xl">{card.label}</span>
              <div className="absolute bottom-0 right-0 bg-white opacity-20 rounded-full w-20 h-20 transform translate-x-1/4 translate-y-1/4"></div>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Assign By
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Assign To
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  E-mail ID
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Subject
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Status
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Date
                </th>
                <th className="py-2 px-4 border-b border-blue-600 text-left text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.assignBy}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.assignTo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.subject}
                  </td>
                  <td
                    className={`py-2 px-4 mx-5 border-b border-gray-300 rounded-lg text-sm ${
                      ticket.status === "PENDING"
                        ? "text-white bg-[#2A8F4C]"
                        : "text-white bg-yellow-500"
                    }`}
                  >
                    {ticket.status}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm">
                    {ticket.date}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-sm flex items-center">
                    <button
                      className={`py-1 px-3 text-xs rounded-lg text-white ${
                        ticket.buttonType === "green"
                          ? "bg-green-500 hover:bg-green-700"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                      style={{ maxWidth: "60px" }}
                      onClick={() => handleEdit(ticket.id)}
                    >
                      ✏️
                    </button>
                    <button
                      className={`py-1 px-3 text-xs rounded-lg text-white ${
                        ticket.buttonType === "red"
                          ? "bg-red-500 hover:bg-red-700"
                          : "bg-red-500 hover:bg-red-700"
                      }`}
                      style={{ maxWidth: "60px" }}
                      onClick={() => handleDelete(ticket.id)}
                    >
                      <FaTrashAlt className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tickets;
