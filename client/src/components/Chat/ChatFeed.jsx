import React from "react";
import { ChatBubble } from "./ChatBubble";
import "./Chat.css";
export const ChatFeed = ({ messages, loggedInUser }) => {
  const bubbles =
    messages &&
    [...messages].reverse().map((messageObject) => {
      const { sendBy, message, _id } = messageObject;
      const isOwn = loggedInUser?._id === sendBy._id;
      console.log("loggedInUser", loggedInUser);
      return (
        <ChatBubble
          key={_id}
          loggedInUser={loggedInUser}
          username={sendBy.name}
          message={message}
          isOwn={isOwn}
        />
      );
    });
  return <div id="messagesFeed">{bubbles}</div>;
};
