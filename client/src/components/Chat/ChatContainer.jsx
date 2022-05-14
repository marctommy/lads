import React from "react";
import { ChatFeed } from "./ChatFeed";
import { ChatForm } from "./ChatForm";
import { chat } from "../../api/service";
import io from "socket.io-client";
import "./Chat.css";

const ChatContainer = ({ loggedInUser, conversation }) => {
  const [feed, setFeed] = React.useState(conversation);

  const socketRef = React.useRef();

  React.useEffect(() => {
    socketRef.current = io.connect(process.env.REACT_APP_API_BASE_URL);
    socketRef.current.on("message", (messageData) => {
      setFeed([...feed, messageData]);
    });
    return () => socketRef.current.disconnect();
  }, [feed]);

  const handleSendMessage = (newMessage) => {
    chat
      .sendMessage(loggedInUser, newMessage)
      .then((response) => {
        socketRef.current.emit("message", {
          ...response.data,
          sendBy: loggedInUser,
        });
        setFeed([...feed, { ...response.data, sendBy: loggedInUser }]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="chat-container">
      <h1>{loggedInUser?.name}</h1>
      <ChatFeed messages={feed} loggedInUser={loggedInUser} />
      <ChatForm sendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
