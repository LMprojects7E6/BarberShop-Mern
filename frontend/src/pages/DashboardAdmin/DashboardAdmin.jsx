import React from "react";

import DashboardBackground from "../../components/DashboardBackground/DashboardBackground";
import Table from "../../components/Table/Table";
import Logo from "../../components/Logo/Logo";

import { dataUsersCustomers, dataUsersEmployees } from "../../data";

const DashboardAdmin = () => {
  return (
    <DashboardBackground>
      <Logo />
      <Table dataUsersCustomers={dataUsersCustomers} dataUsersEmployees={dataUsersEmployees}/>
    </DashboardBackground>
  );
};

export default DashboardAdmin;
