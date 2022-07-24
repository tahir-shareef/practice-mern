import { Box } from "@mui/material";
import React from "react";

const Conversation = () => {
  const conversation = [
    {
      message: "how are you ? ❤",
    },
    {
      message: "I am Fine 🔥",
    },
    {
      message: "hey this is a message to check ui of message box !",
    },
    {
      message:
        "Okay , tmhari Ui Perfect hai , mere paas bh blkl Ok arhi hai koi issue nh hai Thk hai blkl, pixels bh perfect hain !",
    },
    {
      message: "Thnxx !",
    },
    {
      message: "Or sunao",
    },
    {
      message: "bs Tm sunao ?",
    },
    {
      message: "kia kr rhy thy ?",
    },
    {
      message: "bs kuch khaas nh !",
    },
    {
      message: "Thk !",
    },
    { message: "Chalo ok i am bzy for now !" },
    {
      message: "ok ok do your work",
    },
    {
      message: "Bye",
    },
    {
      message: "Bye !",
    },
  ];
  return (
    <Box className="conversation-wrapper">
      <Box className="conversation">
        {conversation.map((message, i) => {
          const isSender = i % 2 === 0;
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

export default Conversation;
