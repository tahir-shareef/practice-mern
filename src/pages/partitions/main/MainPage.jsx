import React from "react";
import { useSelector } from "react-redux";
import ChatList from "../../../components/chatlist/ChatList";
import ListHeader from "../../../components/headers/ListHeader";

const MainPage = () => {
  const { currentUser, chats } = useSelector((state) => state.auth);

  return (
    <>
      <ListHeader user={currentUser} />
      <ChatList list={chats} />
    </>
  );
};

export default MainPage;
