import React from "react";
import "../DashboardCustomer/DashboardCustomer.css";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";
import ButtonAppointment from "../../components/ButtonAppointment/ButtonAppointment";
import OurBarber from "./Components/OurBarber/OurBarber";
import Appointment from "./Components/Appointment/Appointment";

const DashboardCustomer = () => {
  return (
    <>
      <div className="style_Background-Home flex">
        <Logo />
        <ButtonLogin />
        <Navbar />
      </div>
      <div className="style_title-home">
        <div className="style_h1-home">
          <h1>BARBERSHOP</h1>
        </div>
        <div className="style_p-home">
          <p>
            Premium barbershop is the prime spot for you haid grooming need in
            your city
          </p>
        </div>
        <div>
          <ButtonAppointment />
        </div>
        <div className="style_hr">
          <hr className="w-100" />
        </div>
        <div className="style_footer-home flex">
          <div className="style_footer_c1">
            <h2>ADDRESS </h2>
            <p>123, ARAGO STREET BARCELONA </p>
          </div>
          <hr />
          <div className="style_footer_c2">
            <h2>CALL US</h2>
            <p>667-456-7810 </p>
          </div>
          <hr />
          <div className="style_footer_c3">
            <h2>HOURS </h2>
            <p>MONDAY THROUGH</p>
            <p> SATURDAY 11 AM - 9PM</p>
            <p> SUNDAY 11 AM - 7PM</p>
          </div>
        </div>
      </div>
      <OurBarber />
      <Appointment/>
      <div>
      <Footer />
      </div>
      {/* <Calendar/>
    <Testimonials />
    <Footer/> */}
    </>
  );
};

export default DashboardCustomer;
