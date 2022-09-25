import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { getCustomers } from "../../../Api/users";
import Table from "../../../components/Table/Table";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const { isLoading, isError, data, error } = useQuery(
    ["getCustomers"],
    getCustomers,
    {
      onSuccess: setCustomers,
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
      <Table usersData={customers} isEmployee={false}></Table>
    </>
  );
};

export default CustomerTable;
