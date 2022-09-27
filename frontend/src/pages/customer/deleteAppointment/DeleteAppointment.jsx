import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteAppointment } from "../../../Api/appointment";
import DeleteButton from "../../../components/buttons/DeleteButton";
const DeleteAppointment = ({ appointmentID }) => {
  console.log(appointmentID);
  const queryClient = useQueryClient();
  const deleteAppointmentMutation = useMutation(deleteAppointment, {
    onSuccess: (res) => {
      toast.success("Appointment deleted!!");
      queryClient.invalidateQueries(["appointments"]);
    },
    onError: (error) => {
      toast.error("Cannot delete appointment");
      console.log(error);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteAppointmentMutation.mutate(appointmentID);
  };
  return (
    <div>
      <h2 className="text-2xl mb-3">
        Are you sure you want to delete this appointment?
      </h2>
      <DeleteButton isCustomer={true} onClick={handleSubmit}></DeleteButton>
    </div>
  );
};

export default DeleteAppointment;
