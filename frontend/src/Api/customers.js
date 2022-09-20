import api from "./api";

export const getCustomers = async () => {
  const customers = await api.get("/customers");
  return customers.data;
};
export const getCustomersById = async (id) => {
  const customers = await api.get(`/customers/${id}`);
  return customers.data;
};

export const deleteCustomers = async (id) => {
  await api.delete(`/customers/${id}`);
};
