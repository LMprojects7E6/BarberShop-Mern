import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCustomer from "../customer";
import DashboardEmployee from "../employee";
import DashboardAdmin from "../admin";

import { useQuery } from "@tanstack/react-query";
import { getRoleByToken } from "../../Api/session";

const Dashboard = () => {
  const [role, setRol] = useState();

  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery(
    ["getRole"],
    getRoleByToken,
    {
      onSuccess: (resp) => {
        setRol(resp.role);
      },
      onError: () => {
        navigate("/login");
      },
    }
  );

  if (isLoading) {
    return <div>IS LOADING</div>;
  }

  return <div>{chooseDashboard[role]}</div>;
};

const chooseDashboard = {
  admin: <DashboardAdmin />,
  employee: <DashboardEmployee />,
  customer: <DashboardCustomer />,
};

export default Dashboard;
