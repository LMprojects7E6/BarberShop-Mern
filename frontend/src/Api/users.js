import api from "./api";

export const getEmployees = async () => {
  const response = await api.get(`/users?role=employee`);
  return response.data;
};

export const getCustomers = async () => {
  const response = await api.get(`/users?role=customer`);
  return response.data;
};

export const createUser = async (formData) => {
  const response = await api.post(`/users`, formData);
  return response.data;
};

export const updateUser = async (data) => {
  const response = await api.put(`/users?id=${data.id}`, data.userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users?id=${id}`);
  return response.data;
};
