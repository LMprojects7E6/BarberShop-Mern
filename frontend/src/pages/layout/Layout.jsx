import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../../Api/session";
import DashboardCustomer from "../customer";
import DashboardEmployee from "../employee";
import DashboardAdmin from "../admin";
import "./layout.css";
const Layout = () => {
  const navigate = useNavigate();

  const storeSession = (resp) => {
    localStorage.setItem("first_name", resp.first_name);
    localStorage.setItem("role", resp.role);
  };

  const { isLoading, data } = useQuery(["getSession"], getSession, {
    onSuccess: storeSession,
    onError: () => {
      navigate("/login");
    },
  });

  if (isLoading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 flex items-center flex-col">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
        <p className="text-3xl mt-10">Is loading...</p>
      </div>
    );
  }
  return (
    <div
      className={`${data.role} background flex flex-col h-screen justify-between`}
    >
      <Navbar dashboard={data.role?.toUpperCase()} />
      {chooseDashboard[data.role]}
      <Footer />
    </div>
  );
};

const chooseDashboard = {
  admin: <DashboardAdmin />,
  employee: <DashboardEmployee />,
  customer: <DashboardCustomer />,
};

export default Layout;
