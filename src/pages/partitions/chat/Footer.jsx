import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../store/reducers/chats-slice";
import { Box, Grid, IconButton, TextField } from "@mui/material";
import "./style.scss";

const Footer = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { id: receiverId } = useParams();

  const sendMessageHandler = (e) => {
    console.log("sending message to", receiverId);
    if (text) {
      const message = {
        message: text,
        receiverId,
      };
      dispatch(sendMessage(message));
      setText("");
    }
  };

  const sendWithEnterKey = (e) => {
    if (e.keyCode === 13) {
      sendMessageHandler();
    }
  };

  return (
    <Box className="footer">
      <Grid container>
        <Grid item xs={1} md={1}>
          <IconButton className="emoji-btn">
            <div className="emoji-icon"></div>
          </IconButton>
        </Grid>
        <Grid item xs={9} md={10}>
          <TextField
            autoFocus={!text}
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={sendWithEnterKey}
            placeholder="Type Message"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <IconButton
            className="emoji-btn send-btn"
            disabled={!text}
            onClick={sendMessageHandler}
          >
            <div className="emoji-icon"></div>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
