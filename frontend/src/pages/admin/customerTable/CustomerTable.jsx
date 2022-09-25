import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../../Api/users";

import Table from "../../../components/table";

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
      <Table usersData={customers} isEmployee={false} isAdmin={true}></Table>
    </>
  );
};

export default CustomerTable;
