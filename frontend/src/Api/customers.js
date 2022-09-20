import api from "./api";

export const getCostumers = async () => {
  const costumers = await api.get("/costumers");
  return costumers.data;
};
export const getCostumersById = async (id) => {
  const costumers = await api.get(`/costumers/${id}`);
  return costumers.data;
};

export const deleteCostumers = async (id) => {
  await api.delete(`/costumers/${id}`);
};
