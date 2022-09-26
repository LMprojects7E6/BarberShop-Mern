import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logOut } from "../../../Api/session";
import Button from "../../../components/buttons/Button";

const Logout = () => {
  const navigate = useNavigate();
  const logOutMutation = useMutation(logOut, {
    onSuccess: () => {
      localStorage.clear();
      navigate("/login");
    },
  });
  const handleClick = () => {
    logOutMutation.mutate();
  };
  return (
    <div>
      <Button text={"LOG OUT"} onClick={handleClick} />
    </div>
  );
};

export default Logout;
