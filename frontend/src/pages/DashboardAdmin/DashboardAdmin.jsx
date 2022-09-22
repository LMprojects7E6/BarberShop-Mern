import React from "react";

import DashboardBackground from "../../components/DashboardBackground/DashboardBackground";
import Table from "../../components/Table/Table";
import Logo from "../../components/Logo/Logo";

import { dataUsers } from "../../data";

const DashboardAdmin = () => {
  return (
    <DashboardBackground>
      <Logo />
      <Table dataUsers={dataUsers} />
    </DashboardBackground>
  );
};

export default DashboardAdmin;
