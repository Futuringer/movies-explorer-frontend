
import { LINKS } from "../../utils/constants";
import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedIn }) => {
  return  loggedIn ? <Outlet /> : <Navigate to={LINKS.MAIN}/>
};

export default ProtectedRoute;