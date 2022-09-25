import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { deleteUser } from "../../../Api/users";
import DeleteButton from "../../../components/buttons/DeleteButton";

const UserDelete = ({ user }) => {
  const queryClient = useQueryClient();
  const removeUser = useMutation(deleteUser, {
    onSuccess: (resp) => userDeleted(resp),
  });

  const userDeleted = (data) => {
    const userName = data.first_name;
    queryClient.invalidateQueries(["getCustomers"]);
    queryClient.invalidateQueries(["getEmployees"]);
    toast.success(`${userName} has been deleted`);
  };

  return (
    <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-black flex  space-x-10">
      <span>Are you sure you want to delete {user.first_name}?</span>
      <DeleteButton onClick={() => removeUser.mutate(user._id)} />
    </div>
  );
};

export default UserDelete;
