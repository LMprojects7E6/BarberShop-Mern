import api from "./api";

export const signIn = async (formData) => await api.post("/signIn", formData);
export const signUp = async (formData) => await api.post("/signup", formData);
export const forgotPassword = async (formData) => {
  await api.post("/forgot", formData);
};
export const resetPassword = async (formData) => {
  await api.post("/reset", formData);
};
