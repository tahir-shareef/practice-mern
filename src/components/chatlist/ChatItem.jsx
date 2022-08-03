import { Avatar, Box, Button, Typography } from "@mui/material";
import { Done, DoneAll } from "@mui/icons-material";
import { formatAMPM } from "../../helperFunctions/timeformatter";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";

const ChatItem = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  const isSender = currentUser.id === props.lastMsg.sender;
  return (
    <NavLink
      to={"/chat/" + props.index}
      className={(nav) => `${nav.isActive ? "active" : ""} chat-link`}
    >
      <Button className="chat-item">
        <Box className="chat-item-wrapper">
          {/* Item left Side (profile) */}
          <Box className="chat-item-left">
            <Avatar src={props.profileImage} className="chat-item-avatar" />
          </Box>
          {/* Item right Side */}
          <Box className="chat-item-right">
            <Typography className="profile-name">{props.name}</Typography>
            <Typography color="#d2d2d2">{props.lastMsg.message}</Typography>
            <p className="time">{formatAMPM(Date.now())}</p>
            <Box className="delivereTick">
              {props.newMsg ? (
                <Box className="new-msg"></Box>
              ) : isSender ? (
                props.delivered || props.seen ? (
                  <DoneAll className={props.seen ? "seen" : ""} />
                ) : (
                  <Done />
                )
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
      </Button>
    </NavLink>
  );
};

export default ChatItem;
