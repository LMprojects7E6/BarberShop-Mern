import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate(null);
  const handleSubmnit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        const { userExists } = res.data;
        if (userExists && res.status === 200) {
          navigate("/dashboard");
        }
      })
      //TODO: handle error here
      .catch((err) => {
        toast.error(err.response.data.errorMsg);
      });
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col"
        onSubmit={handleSubmnit}
        method="post"
      >
        EMAIL:
        <input type="email" name="email" className="mb-5" ref={email} />
        PASSWORD:
        <input
          type="password"
          name="password"
          className="mb-5"
          ref={password}
        />
        <button className="text-white bg-black">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
