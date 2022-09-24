import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import {
  getEmployees,
  getCustomers,
  deleteUser,
  createUser,
  updateUser,
} from "../../Api/users";

const DashboardAdmin = () => {
  const queryClient = useQueryClient();

  //with dataEmployee you can find a employee by his ID
  const {
    isLoading: isLoadingEmployees,
    isError: isErrorEmployees,
    data: dataEmployees,
    error: errorEmployees,
  } = useQuery(["getEmployees"], getEmployees, {
    onSuccess: () => {
      console.log(dataEmployees);
    },
    onError: () => {
      console.log(errorEmployees);
    },
  });

  //with dataCustomer you can find a customer by his ID
  const {
    isLoading: isLoadingCustomers,
    isError: isErrorCustomers,
    data: dataCustomers,
    error: errorCustomers,
  } = useQuery(["getCustomers"], getCustomers, {
    onSuccess: () => {
      console.log(dataCustomers);
    },
    onError: () => {
      console.log(errorCustomers);
    },
  });

  //delete user
  const removeUser = useMutation(deleteUser, {
    onSuccess: (resp) => userDeleted(resp),
  });

  //CREATE USER
  const createUserByAdmin = useMutation(createUser, {
    onSuccess: (resp) => {
      userCreated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const updateUserByAdmin = useMutation(updateUser, {
    onSuccess: (resp) => {
      userUpdated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const userCreated = (data) => {
    queryClient.invalidateQueries(["getCustomers", "getEmployees"]);
    toast.success(data);
  };
  const userUpdated = (data) => {
    queryClient.invalidateQueries(["getCustomers", "getEmployees"]);
    toast.success(data);
  };

  const userDeleted = (data) => {
    const userName = data.first_name;
    queryClient.invalidateQueries(["getCustomers", "getEmployees"]);
    toast.success(`${userName} has been deleted`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const updatedData = { ...data, rol: "customer" };
    updateUserByAdmin.mutate({
      id: "632cb9030324508cdd5fd910",
      userData: updatedData,
    });
  };

  return (
    <div>
      <div>DashboardAdmin</div>
      <button
        className="text-white bg-black"
        onClick={() => removeUser.mutate(`632edfa37b87d13265de826b`)}
      >
        DELETE USER
      </button>

      <div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
          FIRST NAME:
          <input type="text" name="first_name" />
          LAST NAME:
          <input type="text" name="last_name" />
          EMAIL:
          <input type="email" name="email" />
          PASSWORD:
          <input type="password" name="password" />
          <button className="text-white bg-black">CREATE USER</button>
        </form>
      </div>
    </div>
  );
};

export default DashboardAdmin;
