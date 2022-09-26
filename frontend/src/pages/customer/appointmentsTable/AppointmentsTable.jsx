import { useQuery } from "@tanstack/react-query";
import { getAppointmentsByUserId } from "../../../Api/appointment";
import toast from "react-hot-toast";
import dateFormat from "../../../utils/dateFormat";
const AppointmentsTable = () => {
  const {
    isLoading,
    isError,
    data: appointments,
    error,
  } = useQuery(["appointments"], getAppointmentsByUserId);
  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    toast.error(error);
  } else {
    return (
      <div>
        {appointments.map((appointment) => {
          const { date, time } = dateFormat(appointment.date);
          return (
            <li>
              {date} - {time}
            </li>
          );
        })}
      </div>
    );
  }
};

export default AppointmentsTable;
