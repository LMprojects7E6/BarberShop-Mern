import React from "react";

import DashboardH1 from "../../components/dashboardH1/DashboardH1";
import UserCreate from "./createUser";

import EmployeeTable from "./employeeTable";
import CustomerTable from "./customerTable/CustomerTable";

import Modal from "../../components/modal/Modal";

const DashboardAdmin = () => {
  return (
    <div className="container m-auto px-4 sm:px-8">
      <DashboardH1>EMPLOYEES</DashboardH1>
      <EmployeeTable />
      <Modal modalTitle={"CREATE A NEW EMPLOYEE"} buttonType={"create"}>
        <UserCreate />
      </Modal>
      <DashboardH1>CUSTOMERS</DashboardH1>
      <CustomerTable />
    </div>
  );
};

export default DashboardAdmin;
