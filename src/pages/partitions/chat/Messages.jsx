import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Done, DoneAll } from "@mui/icons-material";
import { Box } from "@mui/material";

const Messages = ({ conversation, delivered, seen }) => {
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
              <Box className="message">
                {message.message}

                {isSender ? (
                  <div className="sender-info">
                    <span className="sender-time">7:13 PM</span>
                    <div className="delivered-status">
                      {delivered || seen ? (
                        <DoneAll className={seen ? "seen" : ""} />
                      ) : (
                        <Done />
                      )}
                    </div>
                  </div>
                ) : (
                  <span className="time">7:13 PM</span>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Messages;
