import React, { useState } from "react";
import InboxSidebar from "./InboxSidebar";
import InboxPage from "./InboxPage";
import SentPage from "./SentPage";
import Compose from "./Compose";
import Draft from "./Draft";
import Outbox from "./Outbox";
import Starred from "./Starred";
import Trash from "./Trash";

const Inbox = () => {
    const [activePage, setActivePage] = useState("Inbox")

    const handleItemClick = (item) =>{
        setActivePage(item)
    } 

  return (
    <div className="pt-24 pl-6">
      <h1 className="text-[#E65F2B] px-2">Inbox</h1>
      <div className="flex gap-2 px-2 mt-5">
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
