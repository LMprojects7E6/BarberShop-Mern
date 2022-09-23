import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { register } from "../../Api/session";

//Allow to send cookies header request
axios.defaults.withCredentials = true;

const Register = () => {
  const navigate = useNavigate();

  const createUser = useMutation(register);

  const handleMutation = (data) => {
    createUser.mutate(
      data,
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      },
      {
        onError: (err) => {
          console.log(err.response.data);
          toast.error(err.response.data.errorMsg);
        },
      }
    );
  };

  const handleClick = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleMutation(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleClick} className="flex flex-col">
        FIRST NAME:
        <input type="text" name="first_name" />
        LAST NAME:
        <input type="text" name="last_name" />
        EMAIL:
        <input type="email" name="email" />
        PASSWORD:
        <input type="password" name="password" />
        <button className="text-white bg-black">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;
