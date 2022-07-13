import { Box } from "@mui/material";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const list = [
    {
      name: "Tahir Shareef",
      profileImage:
        "https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg",
      lastMsg: "How are you ?",
      seen: true,
    },
    {
      name: "Shahrukh King",
      profileImage:
        "https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-75-1024x1003.jpg",
      lastMsg: "Mein thk tm sunao !",
      tick: true,
    },
    {
      name: "Haseeb Khan",
      profileImage:
        "https://cdn.statusqueen.com/dpimages/thumbnail/Mask_boy_dp_-2599.jpg",
      lastMsg: "Han bolo",
      delivered: true,
    },
    {
      name: "Arsal Malik",
      profileImage:
        "https://ienglishstatus.com/wp-content/uploads/2022/02/Stylish-Standard-Whatsapp-DP-Boy.jpg",
      lastMsg: "Okay",
    },
  ];
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
