import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { getEmployees } from "../../../Api/users";
import Table from "../../../components/table";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const { isLoading, isError, data, error } = useQuery(
    ["getEmployees"],
    getEmployees,
    {
      onSuccess: setEmployees,
    }
  );

  if (isLoading) {
    return <div>IS LOADING</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>is loading</div>;
  }

  return (
    <>
      <Table usersData={employees} isEmployee={true} isAdmin={true}></Table>
    </>
  );
};

export default EmployeeTable;
