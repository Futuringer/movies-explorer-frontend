
import { LINKS } from "../../utils/constants";
import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  return  loggedIn ? <Outlet /> : <Navigate to={LINKS.MAIN}/>
};

export default ProtectedRoute;