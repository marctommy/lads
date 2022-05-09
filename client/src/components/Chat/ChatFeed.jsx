import React from "react";
import { ChatBubble } from "./ChatBubble";
import "./Chat.css";
export const ChatFeed = ({ messages, loggedInUser }) => {
  console.log(messages);
  const bubbles =
    messages &&
    [...messages].reverse().map((messageObject) => {
      const { sendBy, message, _id } = messageObject;
      const isOwn = loggedInUser?._id === sendBy._id;
      return (
        <ChatBubble
          key={_id}
          username={sendBy.name}
          message={message}
          isOwn={isOwn}
        />
      );
    });
  return <div id="messagesFeed">{bubbles}</div>;
};
