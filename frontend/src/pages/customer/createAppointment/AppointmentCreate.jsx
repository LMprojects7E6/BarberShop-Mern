import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { createAppointment } from "../../../Api/appointment";
import { ContextGeneralModal } from "../../../context/GeneralModalProvider";

const AppointmentCreate = ({ employee }) => {
  const queryClient = useQueryClient();
  const { setShowModal } = useContext(ContextGeneralModal);

  //create mutation
  const addAppointmentMutation = useMutation(createAppointment, {
    onSuccess: (res) => {
      appointmentCreated(res);
      setShowModal(false);
    },
    onError: (error) => {
      toast.error(error.errorMsg);
    },
  });

  const appointmentCreated = (res) => {
    queryClient.invalidateQueries(["employees"]);
    toast.success(res.message, { style: { padding: "4px 3px" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const { date } = Object.fromEntries(data);
    //use mutation
    addAppointmentMutation.mutate({
      employeeID: employee._id,
      appointment: { date: date, price: 50 },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="datetime-local" name="date" required />
        <button className="btn-save" type="submit">
          Book appointment
        </button>
      </form>
    </>
  );
};

export default AppointmentCreate;
