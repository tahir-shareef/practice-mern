import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatHeader from "../../../components/headers/ChatHeader";
import Messages from "./Messages";
import { Box } from "@mui/material";
import { getChatUserFromLocal } from "../../../store/reducers/chats-slice";
import Footer from "./Footer";
import "./style.scss";

const ChatArea = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { messages, user } = useSelector((state) => state.chats.conversation);

  useEffect(() => {
    // dispatch(getConevrsation(id));
    dispatch(getChatUserFromLocal({ id }));
  }, [id, dispatch]);

  return (
    <Box className="chat-area">
      <ChatHeader user={user} />
      <Messages conversation={messages} />
      <Footer />
    </Box>
  );
};

export default ChatArea;
