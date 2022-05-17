import React from "react";
import "./Chat.css";
export const ChatBubble = ({ username, message, isOwn, loggedInUser }) => {
  const className = isOwn ? "chat-bubble own" : "chat-bubble";

  console.log("other", username);
  console.log("");
  return (
    <div>
      <div className={className}>
        <p>
          {!isOwn && <span>{username}:</span>}
          {message}
        </p>
      </div>
    </div>
  );
};
