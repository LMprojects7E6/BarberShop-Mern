// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import React from "react";
// import { getEmployees } from "../../Api/users";
import DashboardH1 from "../../components/dashboardH1/DashboardH1";
import AppointmentsTable from "./appointmentsTable/AppointmentsTable";
// import Table from "../../components/table";
import EmployeesTable from "./employeesTable";
const DashboardCustomer = () => {
  return (
    <div className="container m-auto px-4 sm:px-8">
      <DashboardH1>EMPLOYEES</DashboardH1>
      <EmployeesTable />
      <DashboardH1>CUSTOMER APPOINTMENTS</DashboardH1>
      <AppointmentsTable />
    </div>
  );
};

export default DashboardCustomer;
