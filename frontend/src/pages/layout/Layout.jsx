import React from "react";
import DashboardBackground from "./dashboardBackground";
import Footer from "./footer";
import Navbar from "./navbar";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoleByToken } from "../../Api/session";
import DashboardCustomer from "../customer";
import DashboardEmployee from "../employee";
import DashboardAdmin from "../admin";
import { SessionContext } from "../../context/SessionContext";
import { useContext } from "react";
const Layout = () => {
  const { userSession } = useContext(SessionContext);
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
  return (
    <DashboardBackground>
      <Navbar dashboard={role?.toUpperCase()} />
      {chooseDashboard[role]}
      <Footer />
    </DashboardBackground>
  );
};

const chooseDashboard = {
  admin: <DashboardAdmin />,
  employee: <DashboardEmployee />,
  customer: <DashboardCustomer />,
};

export default Layout;
