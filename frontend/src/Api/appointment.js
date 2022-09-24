import api from "./api";

export const getAppointmentsByUserId = async (id) => {
  const response = await api.get(`/appointments/${id}`);
  return response.data;
};
export const createAppointment = async (formData) => {
  const response = await api.post(`/appointments`, formData);
  return response.data;
};

// export const updateAppointment = async (formData) => {
//   const response = await api.put(`/appointments${id}`, formData);
//   return response.data;
// };

export const deleteAppointment = async (id) => {
  const response = await api.post(`/appointments/${id}`);
  return response.data;
};
