import React, { useState } from "react";
import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

// Sample ticket data
const initialTicketsData = [
  {
    id: 1,
    ticketSubject: "Login Issue",
    ticketId: "#1001",
    assignStaff: "Jane Doe",
    Client: "Acme Corp",
    Priority: "High",
    CC: "support@acmecorp.com",
    Assign: "John Smith",
    TicketAssignee: "Jane Doe",
    AddFollowers: ["admin@acmecorp.com", "it@acmecorp.com"],
    TicketFollowers: ["admin@acmecorp.com"],
    Description:
      "Client is unable to log into their account. The error message indicates an authentication failure.",
    file: "login_issue_report.pdf",
  },
  {
    id: 2,
    ticketSubject: "Payment Gateway Error",
    ticketId: "#1002",
    assignStaff: "Emily Clark",
    Client: "Beta LLC",
    Priority: "Medium",
    CC: "finance@betallc.com",
    Assign: "Michael Johnson",
    TicketAssignee: "Emily Clark",
    AddFollowers: ["billing@betallc.com"],
    TicketFollowers: ["billing@betallc.com"],
    Description:
      "There is an issue with the payment gateway integration on the checkout page. Transactions are failing.",
    file: "payment_gateway_issue.pdf",
  },
  {
    id: 3,
    ticketSubject: "Bug in Dashboard",
    ticketId: "#1003",
    assignStaff: "Sarah Brown",
    Client: "Gamma Solutions",
    Priority: "Low",
    CC: "support@gammasolutions.com",
    Assign: "David Lee",
    TicketAssignee: "Sarah Brown",
    AddFollowers: ["developer@gammasolutions.com"],
    TicketFollowers: ["developer@gammasolutions.com"],
    Description:
      "The dashboard displays incorrect data after the latest update. Data synchronization seems to be the issue.",
    file: "dashboard_bug_report.pdf",
  },
];
const Tickets = () => {
  const [tickets, setTickets] = useState(initialTicketsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    ticketSubject: "",
    ticketId: "",
    assignStaff: "",
    Client: "",
    Priority: "",
    CC: "",
    Assign: "",
    TicketAssignee: "",
    AddFollowers: "",
    TicketFollowers: "",
    Description: "",
    file: null,
  });
  const [editTicketId, setEditTicketId] = useState(null);

  const openModal = (ticket = null) => {
    if (ticket) {
      setEditTicketId(ticket.id);
      setNewTicket({
        ticketSubject: ticket.ticketSubject,
        ticketId: ticket.ticketId,
        assignStaff: ticket.assignStaff,
        Client: ticket.Client,
        Priority: ticket.Priority,
        CC: ticket.CC,
        Assign: ticket.Assign,
        TicketAssignee: ticket.TicketAssignee,
        AddFollowers: ticket.AddFollowers.join(", "),
        TicketFollowers: ticket.TicketFollowers.join(", "),
        Description: ticket.Description,
        file: null,
      });
    } else {
      setEditTicketId(null);
      setNewTicket({
        ticketSubject: "",
        ticketId: "",
        assignStaff: "",
        Client: "",
        Priority: "",
        CC: "",
        Assign: "",
        TicketAssignee: "",
        AddFollowers: "",
        TicketFollowers: "",
        Description: "",
        file: null,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditTicketId(null);
    setNewTicket({
      ticketSubject: "",
      ticketId: "",
      assignStaff: "",
      Client: "",
      Priority: "",
      CC: "",
      Assign: "",
      TicketAssignee: "",
      AddFollowers: "",
      TicketFollowers: "",
      Description: "",
      file: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewTicket((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTicketId) {
      // Update existing ticket
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === editTicketId
            ? {
                ...newTicket,
                id: editTicketId,
                AddFollowers: newTicket.AddFollowers.split(","),
                TicketFollowers: newTicket.TicketFollowers.split(","),
              }
            : ticket
        )
      );
    } else {
      // Add new ticket
      const maxId = tickets.reduce(
        (max, ticket) => Math.max(max, ticket.id),
        0
      );
      const newId = maxId + 1;
      const newTicketWithId = {
        ...newTicket,
        id: newId,
        ticketId: `#${newId.toString().padStart(4, "0")}`,
      };
      setTickets((prev) => [
        ...prev,
        {
          ...newTicketWithId,
          AddFollowers: newTicket.AddFollowers.split(","),
          TicketFollowers: newTicket.TicketFollowers.split(","),
        },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="min-h-screen p-4 mt-4">
      <div className=" flex flex-col md:flex-row justify-between">
        <div>
          <span className="text-[#2A546D] text-sm lg:text-lg font-medium">
            Employee / Tickets
          </span>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="flex items-center mr-2 bg-[#2A546D] text-white px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
          onClick={() => openModal()}
        >
          <FaPlusCircle className="text-xl mr-2" aria-hidden="true" />
          Add Ticket
        </button>
      </div>

      <div className="overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D] pt-4 mx-2">
        {tickets.length > 0 ? (
          <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
            <thead className="bg-[#2A546D] text-white text-sm md:text-base">
              <tr>
                {[
                  "Ticket ID",
                  "Subject",
                  "Client",
                  "Priority",
                  "Assign Staff",
                  "Assign",
                  "Ticket Assignee",
                  "Add Followers",
                  "Ticket Followers",
                  "Description",
                  // "File",
                  // "Actions",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-4 border-b text-left whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-gray-100 border-[1px] border-[#2A546D] "
                >
                  <td className="py-2 px-4 text-left border-[1px] border-[#2A546D]  whitespace-nowrap">
                    {ticket.ticketId}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.ticketSubject}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.Client}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.Priority}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.assignStaff}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.Assign}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.TicketAssignee}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.AddFollowers.join(", ")}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.TicketFollowers.join(", ")}
                  </td>
                  <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
                    {ticket.Description}
                  </td>
                  {/* <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap">
        {ticket.file?.name || "No file"}
      </td> */}
                  {/* <td className="py-2 px-4 border-[1px] border-[#2A546D]  text-left whitespace-nowrap flex space-x-2">
        <button
          className="text-[#2A546D] hover:text-[#2A546D]"
          onClick={() => openModal(ticket)}
        >
          <FaEdit aria-hidden="true" />
        </button>
        <button
          className="text-[#2A546D] hover:text-red-800"
          onClick={() => handleDelete(ticket.id)}
        >
          <FaTrash aria-hidden="true" />
        </button>
      </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-lg">No tickets available</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 lg:p-8 w-auto h-80 relative overflow-y-auto  scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#2A546D]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes aria-hidden="true" />
            </button>
            <h2 className="text-xl mb-4 flex items-center text-[#2A546D]">
              <FaPlusCircle className="text-2xl mr-2" aria-hidden="true" />
              {editTicketId ? "Edit Ticket" : "Add New Ticket"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "ticketSubject",
                  "ticketId",
                  "assignStaff",
                  "Client",
                  "Priority",
                  "CC",
                  "Assign",
                  "TicketAssignee",
                  "AddFollowers",
                  "TicketFollowers",
                ].map((field, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="mb-1 font-semibold text-[#2A546D] capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type={field === "file" ? "file" : "text"}
                      name={field}
                      value={field === "file" ? "" : newTicket[field]}
                      onChange={handleChange}
                      className="border border-[#2A546D] p-2 rounded focus:outline-[#2a546d]"
                      accept={
                        field === "file"
                          ? ".pdf,.doc,.docx,.xls,.xlsx"
                          : undefined
                      }
                      aria-label={field.replace(/([A-Z])/g, " $1")}
                    />
                  </div>
                ))}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#2A546D]">
                    Description
                  </label>
                  <textarea
                    name="Description"
                    value={newTicket.Description}
                    onChange={handleChange}
                    className="border border-[#2A546D] p-2 rounded"
                    rows="4"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#2A546D] text-white px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#2A546D]"
                >
                  {editTicketId ? "Update Ticket" : "Add Ticket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tickets;
