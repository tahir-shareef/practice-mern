import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ChatArea from "./pages/partitions/chat/ChatArea";
import Authentication from "./pages/auth/Authentication";
import Home from "./pages/home/Home";

const PageRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/auth" />}>
        <Route path="chat/:id" element={<ChatArea />} />
      </Route>
      {/* Authentication Routes */}
      <Route
        path="auth"
        element={isLoggedIn ? <Navigate to="/" /> : <Authentication />}
      />
    </Routes>
  );
};

export default PageRoutes;
