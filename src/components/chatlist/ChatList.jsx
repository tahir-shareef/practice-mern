import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { list } = useSelector((state) => state.chats);

  return (
    <Box sx={{ p: 2 }}>
      {list.length ? (
        list.map(
          ({ name, profileImage, lastMsg, seen, tick, delivered }, i) => {
            return (
              <ChatItem
                key={i}
                index={i}
                name={name}
                profileImage={profileImage}
                lastMsg={lastMsg}
                seen={seen}
                tick={tick}
                delivered={delivered}
              />
            );
          }
        )
      ) : (
        <>No Chats To Show</>
      )}
    </Box>
  );
};

export default ChatList;
