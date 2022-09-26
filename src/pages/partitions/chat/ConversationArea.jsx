import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatHeader from "../../../components/headers/ChatHeader";
import { getchatuser, getConversation } from "../../../store/actions/chats";
import Messages from "./Messages";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer";
import "./style.scss";

const ChatArea = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chats.conversation);
  const { chats } = useSelector((state) => state.auth.currentUser);
  const [loading, setLoading] = useState(true);
  const [messageLoading, setmessageLoading] = useState(true);
  const [chatUser, setChatUser] = useState(null);

  const getUserConversation = () => {
    dispatch(getConversation({ id })).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    // getting chat if it find from local
    const chatFromLocal = chats.find((chatUser) => chatUser._id === id);
    if (chatFromLocal && chatFromLocal._id) {
      setChatUser(chatFromLocal);
      getUserConversation();
      setLoading(false);
    } else {
      // if not on local then get it from server
      dispatch(getchatuser({ id })).then((res) => {
        if (res.error) {
          setLoading(false);
          setChatUser(null);
        } else {
          const user = res.payload.user;
          setChatUser(user);
          getUserConversation();
          setLoading(false);
        }
      });
    }
  }, [id, dispatch, chats]);

  return (
    <Box className="chat-area">
      {loading ? (
        <Box className="page-center">
          <Typography>Loading your chat..</Typography>
        </Box>
      ) : (
        <>
          {chatUser && chatUser._id ? (
            <>
              <ChatHeader user={chatUser} />
              <Messages conversation={messages} loading={messageLoading} />
              <Footer />
            </>
          ) : (
            <Box className="page-center">
              <Typography sx={{ color: "#ff6868" }}>
                Sorry no chat user were found !
              </Typography>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ChatArea;
