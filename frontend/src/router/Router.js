import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import Layout from "../pages/layout/Layout";
import Login from "../pages/login";
import Register from "pages/register";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Layout />} />
      <Route path="*" element={<ErrorPage />} />
      <Route></Route>
    </Routes>
  );
};

export default Router;
