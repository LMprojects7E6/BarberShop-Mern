import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { deleteAppointment } from "../../../Api/appointment";
import DeleteButton from "../../../components/buttons/DeleteButton";
import { ContextGeneralModal } from "../../../context/GeneralModalProvider";
const DeleteAppointment = () => {
  const queryClient = useQueryClient();
  const deleteAppointmentMutation = useMutation(deleteAppointment, {
    onSuccess: (res) => {},
  });
  return (
    <div>
      <form action=""></form>
    </div>
  );
};

export default DeleteAppointment;
