import React from "react";

import videoBackGround from "../../assets/video/video_backGround.mp4";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";
import ButtonAppointment from "../../components/ButtonAppointment/ButtonAppointment";

import DashboardBackground from "../../components/DashboardBackground/DashboardBackground";

import "../DashboardCustomer/DashboardCustomer.css";
const DashboardCustomer = () => {
  return (
    <>
      <DashboardBackground>
        <Logo />
        <ButtonLogin />
        <Navbar />
      </DashboardBackground>
      <div className="style_title-home">
        <h1>BARBERSHOP</h1>
        <p>
          Premium barbershop is the prime spot for you haid grooming need in
          your city
        </p>
        <ButtonAppointment />
      </div>
      {/* <Calendar/>
    <Testimonials />
    <Footer/> */}
    </>
  );
};

export default DashboardCustomer;
