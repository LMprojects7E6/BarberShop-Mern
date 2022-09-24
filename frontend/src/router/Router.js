import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardCustomer from "../pages/customer/DashboardCustomer";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import DashboardEmployees from "../pages/employee/DashboardEmployees";

const RouterPath = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<DashboardCustomer />} />
      <Route path="/admin" element={<DashboardAdmin />} />
      <Route path="/employees" element={<DashboardEmployees />} />
    </Routes>
  );
};

export default RouterPath;
