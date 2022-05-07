import React from "react";
import "./Chat.css";
export const ChatBubble = ({ name, message, isOwn }) => {
  const className = isOwn ? "chat-bubble own" : "chat-bubble";

  return (
    <div className={className}>
      <p>
        {!isOwn && <span>{name}</span>}
        {message}
      </p>
    </div>
  );
};
