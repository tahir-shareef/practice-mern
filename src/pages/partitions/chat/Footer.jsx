import React from "react";
import { Box, Grid, IconButton, TextField } from "@mui/material";
import SmileIcon from "../../../assets/icons/face-smile-regular.svg";
import "./style.scss";

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container>
        <Grid item xs={2} md={1}>
          <IconButton className="emoji-btn">
            <div className="emoji-icon"></div>
          </IconButton>
        </Grid>
        <Grid item xs={10} md={11}>
          <TextField
            autoFocus
            fullWidth
            placeholder="Type Message"
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
