import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Listbar from "../partitions/main/Listbar";
import { Grid } from "@mui/material";
import "./style.scss";

const Home = () => {
  const location = useLocation();
  const isOnChatArea = location.pathname.includes("chat");
  
  return (
    <>
      <Grid container className="home-grid-container">
        <Grid
          item
          xs={12}
          md={4}
          display={{ xs: isOnChatArea ? "none" : "block", md: "block" }}
          className="home-grid left-section"
        >
          <Listbar />
        </Grid>
        <Grid
          item
          display={{ xs: isOnChatArea ? "block" : "none", md: "block" }}
          md={8}
          xs={12}
          className="home-grid right-section"
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
