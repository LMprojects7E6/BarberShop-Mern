import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEmployees } from "../../Api/users";
const DashboardCustomer = () => {
  const {
    isError,
    isLoading,
    data: employees,
    error,
  } = useQuery(["employees"], getEmployees);
  return <div>{JSON.stringify(employees)}</div>;
};

export default DashboardCustomer;
