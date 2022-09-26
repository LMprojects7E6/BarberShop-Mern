import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEmployees } from "../../../Api/users";
import Table from "../../../components/table";

const EmployeesTable = () => {
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
      <div className="container m-auto px-4 sm:px-8">
        <Table usersData={employees} isCustomer={true} />
      </div>
    );
  }
};

export default EmployeesTable;
