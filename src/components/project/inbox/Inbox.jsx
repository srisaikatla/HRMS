import React, { useState } from "react";
import InboxSidebar from "./InboxSidebar";
import InboxPage from "./InboxPage";
import SentPage from "./SentPage";
import Compose from "./Compose";
import Draft from "./Draft";
import Outbox from "./Outbox";
import Starred from "./Starred";
import Trash from "./Trash";
import MessageDetailsPage from "./MessageDetailsPage";

const Inbox = () => {
  const [activePage, setActivePage] = useState("Inbox");
  const [sentMessage, setSentMessage] = useState([]);
  const [draftMessage, setDraftMessage] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleItemClick = (item) => {
    setActivePage(item);
    setSelectedMessage(null);
  };

  return (
    <div className="w-auto h-auto ">
      <h1 className="text-[#E65F2B] text-xl font-bold px-2">Inbox</h1>
      <div className="gap-2 px-2  justify-center items-center flex">
        <InboxSidebar onItemClick={handleItemClick} />
        {activePage === "Compose" && <Compose />}
        {activePage === "Inbox" && <InboxPage />}
        {activePage === "Sent" && <SentPage />}
        {activePage === "Draft" && <Draft />}
        {activePage === "Outbox" && <Outbox />}
        {activePage === "Starred" && <Starred />}
        {activePage === "Trash" && <Trash />}
      </div>
    </div>
  );
};

export default Inbox;
