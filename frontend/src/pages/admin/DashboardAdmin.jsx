import React from "react";

import DashboardBackground from "../../components/DashboardBackground/DashboardBackground";
import Logo from "../../components/Logo/Logo";
import DashboardH1 from "../../components/DashboardH1/DashboardH1";
import UserCreate from "./components/UserCreate";

import EmployeeTable from "./components/EmployeeTable";

import CustomerTable from "./components/CustomerTable";
import Modal from "../../components/modal/Modal";

const DashboardAdmin = () => {
  return (
    <DashboardBackground>
      <Logo />
      <div className="container m-auto px-4 sm:px-8">
        <DashboardH1>EMPLOYEES</DashboardH1>
        <EmployeeTable />
        <Modal modalTitle={"CREATE A NEW EMPLOYEE"} buttonType={"create"}>
          <UserCreate />
        </Modal>
        <DashboardH1>CUSTOMERS</DashboardH1>
        <CustomerTable />
      </div>
    </DashboardBackground>
  );
};

export default DashboardAdmin;
