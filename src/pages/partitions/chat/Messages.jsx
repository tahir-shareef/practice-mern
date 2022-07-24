import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Messages = ({ conversation }) => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Box className="conversation-wrapper">
      <Box className="conversation">
        {conversation.map((message, i) => {
          const isSender = message.sender == currentUser.id;
          return (
            <Box
              className={`message-row ${isSender ? "sender" : "reciever"}`}
              key={i}
            >
              <Box className="message">{message.message}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Messages;
