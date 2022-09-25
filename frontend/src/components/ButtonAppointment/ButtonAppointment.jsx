import React from "react";
import "../ButtonAppointment/ButtonAppointment.css";

const ButtonAppointment = ({ onClick }) => {
  return (
    <button className="btn-appointment" onClick={onClick}>
      MAKE IN APPOINTMENT
    </button>
  );
};

export default ButtonAppointment;
