import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { updateUser } from "../../../Api/users";

const UserUpdate = ({ user }) => {
  const queryClient = useQueryClient();
  const updateUserByAdmin = useMutation(updateUser, {
    onSuccess: (resp) => {
      userUpdated(resp);
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const userUpdated = (data) => {
    queryClient.invalidateQueries(["getEmployees"]);
    toast.success(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const updatedData = { ...data, rol: "customer" };
    updateUserByAdmin.mutate({
      id: user._id,
      userData: updatedData,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-s font-semibold px-1">
                First name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                  name="first_name"
                  defaultValue={user.first_name}
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-s font-semibold px-1">
                Last name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith"
                  name="last_name"
                  defaultValue={user.last_name}
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-s font-semibold px-1">
                Email
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                  name="email"
                  defaultValue={user.email}
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-s font-semibold px-1">
                Password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                  name="password"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                UPDATE USER
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserUpdate;
