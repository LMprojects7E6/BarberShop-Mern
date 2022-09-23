import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCustomer from "../customer/DashboardCustomer";
import DashboardEmployee from "../employee/DashboardEmployee";
import DashboardAdmin from "../admin/DashboardAdmin";
const Dashboard = () => {
  const [role, setRol] = useState(null);
  const navigate = useNavigate();
  const chooseDashboard = (role) => {
    switch (role) {
      case "employee":
        return <DashboardEmployee />;
      case "admin":
        return <DashboardAdmin />;
      case "customer":
        return <DashboardCustomer />;
      default:
        return null;
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((res) => {
        const { role } = res.data;
        if (role && res.status === 200) {
          setRol(role);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => navigate("/login"));
  }, []);

  return <div>{role && chooseDashboard(role)}</div>;
};

export default Dashboard;
