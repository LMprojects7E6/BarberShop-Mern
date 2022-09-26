import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAppointment } from "../../../Api/appointment";
import Button from "../../../components/buttons/Button";

const AppointmentCreate = ({ employee, setShowModal }) => {
  const queryClient = useQueryClient();

  //create mutation
  const addAppointmentMutation = useMutation(createAppointment, {
    onSuccess: (res) => {
      appointmentCreated(res);
    },
    onError: (error) => {
      toast.error(error.response.data.errrorMsg);
    },
  });

  const appointmentCreated = (res) => {
    queryClient.invalidateQueries(["appointments"]);
    setShowModal(false);
    toast.success(res.message, { style: { maxWidth: "100%" } });
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
    <div className="flex flex-col text-center">
      <h2 className="text-2xl mb-3">Let's find an appointment! </h2>
      <form onSubmit={handleSubmit} className="flex flex-col my-3">
        <input
          type="datetime-local"
          name="date"
          required
          className="border px-5 py-3 cursor-pointer"
        />
        <div className="text-center mt-5">
          <Button text={"Book appointment"} isForm={true} />
        </div>
      </form>
    </div>
  );
};

export default AppointmentCreate;
