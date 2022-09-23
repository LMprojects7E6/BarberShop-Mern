import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { register } from "../../Api/session";

const Register = () => {
  const navigate = useNavigate();
  const createUser = useMutation(register, {
    onSuccess: () => {
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
    createUser.mutate(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
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
