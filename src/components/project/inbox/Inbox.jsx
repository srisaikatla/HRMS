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

    const handleSendMessage = (message) => {
        setSentMessage([...sentMessage, message]);
    };

    const handleDeleteMessage = (index) => {
        const filteredMessages = sentMessage.filter((item, i) => i !== index);
        setSentMessage(filteredMessages);
    };

    const handleSaveDraft = (draft) => {
        setDraftMessage([...draftMessage, draft]);
    };

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    return (
        <div className="pl-6">
            <h1 className="text-[#E65F2B] px-2">Inbox</h1>
            <div className="flex gap-2 px-2 mt-5">
                <InboxSidebar onItemClick={handleItemClick} />
                {activePage === "Compose" && <Compose onSendMessage={handleSendMessage} onSaveDraft={handleSaveDraft} />}
                {activePage === "Inbox" && !selectedMessage && <InboxPage onSelectMessage={handleSelectMessage} />}
                {activePage === "Inbox" && selectedMessage && <MessageDetailsPage message={selectedMessage} />}
                {activePage === "Sent" && !selectedMessage && <SentPage sentMessage={sentMessage} onDeleteMessage={handleDeleteMessage} onSelectMessage={handleSelectMessage} />}
                {activePage === "Sent" && selectedMessage && <MessageDetailsPage message={selectedMessage} />}
                {activePage === "Draft" && <Draft draftMessage={draftMessage} />}
                {activePage === "Outbox" && <Outbox />}
                {activePage === "Starred" && <Starred />}
                {activePage === "Trash" && <Trash />}
            </div>
        </div>
    );
};

export default Inbox;
