import React from "react";
import DashboardH1 from "../../components/dashboardH1/DashboardH1";
import AppointmentsTable from "./appointmentsTable";

const DashboardEmployee = () => {
  return (
    <div className="container m-auto px-4 sm:px-8">
      <DashboardH1>APPOINTMENTS</DashboardH1>
      <AppointmentsTable />
    </div>
  );
};

export default DashboardEmployee;
