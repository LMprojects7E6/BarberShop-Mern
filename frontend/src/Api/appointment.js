import api from "./api";

export const getAppointments = async () => {
  const appointments = await api.get("appointments");
  return appointments.data;
};

export const getEmployeeByRole = async (role) => {
  const appointment = await api.get(`/appointments/${role}`);
  return appointment.data;
};

export const deleteAppointment = async (role, appointmentId) => {
  await api.delete(`/appointments/${role}/${appointmentId}`);
};
