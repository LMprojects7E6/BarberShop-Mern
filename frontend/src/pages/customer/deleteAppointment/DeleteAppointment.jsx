import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { deleteAppointment } from "../../../Api/appointment";
import Button from "../../../components/buttons/Button";
// import DeleteButton from "../../../components/buttons/DeleteButton";
import { ContextGeneralModal } from "../../../context/GeneralModalProvider";
const DeleteAppointment = (appointment, setShowModal) => {
  const queryClient = useQueryClient();

  const deleteAppointmentMutation = useMutation(deleteAppointment, {
    onSuccess: (res) => {
      appointmentDeleted(res);
    },
    onError: (error) => {
      toast.error(error.response.data.errrorMsg);
    },
  });

  const appointmentDeleted = (res) => {
    setShowModal(false);
    toast.success(`Appointment has been deleted`);
  };

  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl mb-3">
        Are you sure you want to delete this appointment?{" "}
      </h2>
      <div className="text-center mt-5">
        <Button onClick={() => deleteAppointmentMutation.mutate(appointment._id)} text={"DELETE"} />
      </div>
    </div>
  );
};

export default DeleteAppointment;
