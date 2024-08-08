import React, { useState } from 'react';

import { FaPlusCircle, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';


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
    Description: "Client is unable to log into their account. The error message indicates an authentication failure.",
    file: "login_issue_report.pdf"
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
    Description: "There is an issue with the payment gateway integration on the checkout page. Transactions are failing.",
    file: "payment_gateway_issue.pdf"
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
    Description: "The dashboard displays incorrect data after the latest update. Data synchronization seems to be the issue.",
    file: "dashboard_bug_report.pdf"
  }
];

const Tickets = () => {
  const [tickets, setTickets] = useState(initialTicketsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({
    ticketSubject: "",
    ticketId: "", // Initialize ticketId here
    assignStaff: "",
    Client: "",
    Priority: "",
    CC: "",
    Assign: "",
    TicketAssignee: "",
    AddFollowers: "",
    TicketFollowers: "",
    Description: "",
    file: null
  });
  const [editTicketId, setEditTicketId] = useState(null);

  const openModal = (ticket = null) => {
    if (ticket) {
      setEditTicketId(ticket.id);
      setNewTicket({
        ticketSubject: ticket.ticketSubject,
        ticketId: ticket.ticketId, // Set ticketId here
        assignStaff: ticket.assignStaff,
        Client: ticket.Client,
        Priority: ticket.Priority,
        CC: ticket.CC,
        Assign: ticket.Assign,
        TicketAssignee: ticket.TicketAssignee,
        AddFollowers: ticket.AddFollowers.join(', '),
        TicketFollowers: ticket.TicketFollowers.join(', '),
        Description: ticket.Description,
        file: null
      });
    } else {
      setEditTicketId(null);
      setNewTicket({
        ticketSubject: "",
        ticketId: "", // Reset ticketId here
        assignStaff: "",
        Client: "",
        Priority: "",
        CC: "",
        Assign: "",
        TicketAssignee: "",
        AddFollowers: "",
        TicketFollowers: "",
        Description: "",
        file: null
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
      file: null
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewTicket(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTicketId) {
      // Update existing ticket
      setTickets(prev => prev.map(ticket => 
        ticket.id === editTicketId
          ? { ...newTicket, id: editTicketId, AddFollowers: newTicket.AddFollowers.split(','), TicketFollowers: newTicket.TicketFollowers.split(',') }
          : ticket
      ));
    } else {
      // Add new ticket
      const maxId = tickets.reduce((max, ticket) => Math.max(max, ticket.id), 0);
      const newId = maxId + 1;
      const newTicketWithId = { ...newTicket, id: newId, ticketId: `#${newId.toString().padStart(4, '0')}` };
      setTickets(prev => [
        ...prev,
        { ...newTicketWithId, AddFollowers: newTicket.AddFollowers.split(','), TicketFollowers: newTicket.TicketFollowers.split(',') }
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setTickets(prev => prev.filter(ticket => ticket.id !== id));
  };

  return (
    <div className=" min-h-screen p-5">
      <div>
        <h1 className="text-2xl font-bold mb-4">Employee Dashboard / Tickets</h1>

        <div className="flex justify-end mb-4">
          <button
            className="flex items-center text-lg bg-[#E65F2B] text-white h-[50px] w-[200px] justify-center rounded-lg hover:bg-[#d4551a] focus:outline-none focus:ring-2 focus:ring-[#E65F2B]"
            onClick={() => openModal()}
          >
            <FaPlusCircle className="text-2xl mr-2" aria-hidden="true" />
            Add Ticket
          </button>
        </div>

        <div className="overflow-x-auto">
          {tickets.length > 0 ? (
            <table className="min-w-full bg-white border border-[#E65F2B] rounded-lg shadow-lg">
              <thead className="bg-[#E65F2B] text-white">
                <tr>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Ticket ID</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Subject</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Client</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Priority</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Assign Staff</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Assign</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Ticket Assignee</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Add Followers</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Ticket Followers</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Description</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">File</th>
                  <th className="py-3 px-4 border-b text-left whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(ticket => (
                  <tr key={ticket.id} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.ticketId}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.ticketSubject}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.Client}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.Priority}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.assignStaff}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.Assign}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.TicketAssignee}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.AddFollowers.join(', ')}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.TicketFollowers.join(', ')}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.Description}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap">{ticket.file?.name || 'No file'}</td>
                    <td className="py-3 px-4 border-b text-left whitespace-nowrap flex space-x-2">
                      <button
                        className="text-[#E65F2B] hover:text-[#d4551a]"
                        onClick={() => openModal(ticket)}
                      >
                        <FaEdit aria-hidden="true" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(ticket.id)}
                      >
                        <FaTrash aria-hidden="true" />
                      </button>
                    </td>
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
          <div className="bg-white p-5 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl mb-4 flex text-[#E65F2B]">
              <FaPlusCircle className="text-2xl mr-2 pt-1 text-[#E65F2B]" />
              Add New Ticket
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Ticket Subject</label>
                  <input
                    type="text"
                    name="ticketSubject"
                    value={newTicket.ticketSubject}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Ticket Id</label>
                  <input
                    type="text"
                    name="ticketId"
                    value={newTicket.ticketId}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Assign Staff</label>
                  <input
                    type="text"
                    name="assignStaff"
                    value={newTicket.assignStaff}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Client</label>
                  <input
                    type="text"
                    name="Client"
                    value={newTicket.Client}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Priority</label>
                  <input
                    type="text"
                    name="Priority"
                    value={newTicket.Priority}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">CC</label>
                  <input
                    type="text"
                    name="CC"
                    value={newTicket.CC}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Assign</label>
                  <input
                    type="text"
                    name="Assign"
                    value={newTicket.Assign}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Ticket Assignee</label>
                  <input
                    type="text"
                    name="TicketAssignee"
                    value={newTicket.TicketAssignee}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Add Followers</label>
                  <input
                    type="text"
                    name="AddFollowers"
                    value={newTicket.AddFollowers}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Ticket Followers</label>
                  <input
                    type="text"
                    name="TicketFollowers"
                    value={newTicket.TicketFollowers}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded"
                  />
                </div>
                {/* Description Textarea */}
                <div className="col-span-2 flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Description</label>
                  <textarea
                    name="Description"
                    value={newTicket.Description}
                    onChange={handleChange}
                    className="border border-[#E65F2B] p-2 rounded w-full h-32 resize-none"
                    placeholder="Enter your Description here"
                    required
                  />
                </div>
                {/* File Input */}
                <div className="col-span-2 flex flex-col">
                  <label className="mb-1 font-semibold text-[#E65F2B]">Select File</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="border border-[#E65F2B] h-[60px] w-full text-white cursor-pointer file:bg-[#E65F2B] file:h-[60px] file:w-[150px] file:text-white file:border-[#E65F2B]"
                    aria-label="Select File"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#E65F2B] text-white h-[50px] w-[150px] rounded hover:bg-[#d4551a]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Tickets;