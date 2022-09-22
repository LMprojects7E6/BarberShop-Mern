import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/error/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register></Register>} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
      <Route></Route>
    </Routes>
  );
};

export default Router;
