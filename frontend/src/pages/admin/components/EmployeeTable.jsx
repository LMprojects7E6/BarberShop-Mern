import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { getEmployees } from "../../../Api/users";
import Table from "../../../components/Table/Table";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState();
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

  return (
    <>
      <Table usersData={employees} updateUser={updateUserByAdmin}></Table>
    </>
  );
};

export default EmployeeTable;
