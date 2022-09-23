import React, { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../Api/session";

// axios.defaults.withCredentials = true;
const Login = () => {
  // const handleMutation = (data) => {
  //   axios
  //     .post("http://localhost:5000/login", data)
  //     .then((res) => {
  //       const { userExists } = res.data;
  //       if (userExists && res.status === 200) {
  //         navigate("/dashboard");
  //       }
  //     })
  //     //TODO: handle error here
  //     .catch((err) => toast.error(err.response.data.errorMsg));
  // };

  const navigate = useNavigate();

  const userLogIn = useMutation(logIn, {
    onSuccess: (res) => {
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    userLogIn.mutate(data);
    // handleMutation(data);
  };

  return (
    <div>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        EMAIL:
        <input type="email" name="email" className="mb-5" />
        PASSWORD:
        <input type="password" name="password" className="mb-5" />
        <button className="text-white bg-black">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
