import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Messages = ({ conversation }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const conversationRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      conversationRef.current.scroll(0, conversationRef.current.scrollHeight);
    }, 100);
  }, [conversation]);

  return (
    <Box className="conversation-wrapper">
      <Box className="conversation" ref={conversationRef}>
        {conversation.map((message, i) => {
          const isSender = message.sender === currentUser.id;
          return (
            <Box
              className={`message-row ${isSender ? "sender" : "reciever"}`}
              key={i}
            >
              <Box className="message">{message.message}</Box>
              <span>7:13PM</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Messages;
