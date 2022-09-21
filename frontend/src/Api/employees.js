import api from "./api";

export const getEmployees = async () => {
  const employees = await api.get("/employees");
  return employees.data;
};
export const getEmployeeById = async (id) => {
  const employee = await api.get(`/employees/${id}`);
  return employee.data;
};
export const updateEmployee = async (id, employeeData) => {
  await api.patch(`/employees/${id}`, employeeData);
};

export const deleteEmployee = async (id) => {
  await api.delete(`/employees/${id}`);
};
