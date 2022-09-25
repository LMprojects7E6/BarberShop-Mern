import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoleByToken } from "../../Api/session";
import DashboardCustomer from "../customer";
import DashboardEmployee from "../employee";
import DashboardAdmin from "../admin";

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
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 flex items-center flex-col">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
        <p className="text-3xl mt-10">Is loading...</p>
      </div>
    );
  }
  if (isError) {
    navigate("/login");
  }

  return <div>{chooseDashboard[role]}</div>;
};

const chooseDashboard = {
  admin: <DashboardAdmin />,
  employee: <DashboardEmployee />,
  customer: <DashboardCustomer />,
};

export default Dashboard;
