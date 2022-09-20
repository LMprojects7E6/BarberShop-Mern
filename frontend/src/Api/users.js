import api from "./api";

export const signIn = (formData) => api.post("/signIn", formData);
export const signUp = (formData) => api.post("/signup", formData);
export const forgotPassword = (formData) => api.post("/forgot", formData);
export const resetPassword = (formData) => api.post("/reset", formData);
