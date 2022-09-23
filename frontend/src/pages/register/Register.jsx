import axios from "axios";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//Allow to send coockies header request
axios.defaults.withCredentials = true;
const Register = () => {
  const first_name = useRef(null);
  const last_name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate(null);
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        if (res.data.userRegistered && res.status === 200) {
          navigate("/dashboard");
        }
      })
      //TODO: handle error here
      .catch((err) => toast.error(err.response.data.errorMsg));
  };
  return (
    <div>
      <form action="" onSubmit={handleClick} className="flex flex-col">
        FIRST NAME:
        <input type="text" name="first_name" ref={first_name} />
        LAST NAME:
        <input type="text" name="last_name " ref={last_name} />
        EMAIL:
        <input type="email" name="email" ref={email} />
        PASSWORD:
        <input type="password" name="password" ref={password} />
        <button className="text-white bg-black">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
