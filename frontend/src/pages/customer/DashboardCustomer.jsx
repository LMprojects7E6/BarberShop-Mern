import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEmployees } from "../../Api/users";
import CustomerTable from "./components/CustomerTable";
const DashboardCustomer = () => {
  const {
    isError,
    isLoading,
    data: employees,
    error,
  } = useQuery(["employees"], getEmployees);

  if (isLoading) {
    return <p>is loading...</p>;
  } else if (isError) {
    return <p>{error.message}</p>;
  } else {
    return (
      <div>
        <CustomerTable dataUsers={employees} />
      </div>
    );
  }
};

export default DashboardCustomer;
