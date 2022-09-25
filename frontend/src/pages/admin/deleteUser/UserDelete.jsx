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
    <>
      <div>Are you sure you want to delete the user: {user.first_name}?</div>
      <DeleteButton onClick={() => removeUser.mutate(user._id)} />
    </>
  );
};

export default UserDelete;
