import React from "react";
import "./ButtonAppointment.css";

const ButtonAppointment = ({ onClick }) => {
  return (
    <button className="btn-appointment" onClick={onClick}>
      BOOK APPOINTMENT
    </button>
  );
};

export default ButtonAppointment;
