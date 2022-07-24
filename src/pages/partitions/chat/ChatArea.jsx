import { Box } from "@mui/material";
import React from "react";
import ChatHeader from "../../../components/headers/ChatHeader";
import Conversation from "./Conversation";
import Footer from "./Footer";
import "./style.scss";

const ChatArea = () => {
  return (
    <Box className="chat-area">
      <ChatHeader />
      <Conversation />
      <Footer />
    </Box>
  );
};

export default ChatArea;
