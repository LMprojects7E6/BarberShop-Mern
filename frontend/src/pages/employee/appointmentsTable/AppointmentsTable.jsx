import { useQuery } from "@tanstack/react-query";
import { getAppointmentsByUserId } from "../../../Api/appointment";
import toast from "react-hot-toast";
import TableAppointments from "../../../components/table/TableAppointments";
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
      <div className="container m-auto px-4 sm:px-8">
        <TableAppointments appointmentsData={appointments}></TableAppointments>
      </div>
    );
  }
};

export default AppointmentsTable;
