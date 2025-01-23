import React, { useState, useEffect } from "react";
import { FaComments } from "react-icons/fa";
import "./Chat.css";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Ensure the chatbox is closed by default on page load (optional)
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden"; // Optional: disable scrolling when chat is open
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isChatOpen]);

  return (
    <div>
      {/* Chat Icon */}
      <button className="header__chat-icon" onClick={toggleChat}>
        <FaComments />
      </button>

      {/* Chat Popup */}
      <div className={`chatbox-container ${isChatOpen ? "open" : ""}`}>
        <div className="chatbox">
          {/* Left Section: Customer List */}
          <div className="chat-history">
            <h4>Customers</h4>
            <ul className="customer-list">
              <li className="customer">
                <img
                  className="customer-avatar"
                  src="https://via.placeholder.com/40"
                  alt="Customer Avatar"
                />
                <span className="customer-name">Customer 1</span>
              </li>
              <li className="customer">
                <img
                  className="customer-avatar"
                  src="https://via.placeholder.com/40"
                  alt="Customer Avatar"
                />
                <span className="customer-name">Customer 2</span>
              </li>
            </ul>
          </div>

          {/* Right Section: Messages */}
          <div className="selected-customer-messages">
            <h4>Messages</h4>
            <div className="message sender">Hello! How can I help you?</div>
            <div className="message receiver">I need some assistance.</div>
          </div>
        </div>

        {/* Close Button */}
        <button className="chatbox-close-btn" onClick={toggleChat}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Chat;
