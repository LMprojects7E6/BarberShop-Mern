import React from 'react'
import '../DashboardCustomer/DashboardCustomer.css'
import videoBackGround from '../../assets/video/video_backGround.mp4'
import Calendar from '../../components/Calendar/Calendar'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin'
import ButtonAppointment from '../../components/ButtonAppointment/ButtonAppointment'

const DashboardCustomer = () => {
  return (
    <>
    <div className='style_Background-Home flex'>
    <Logo />
    <ButtonLogin/>
    <Navbar/>
    </div>
    <div className='style_title-home'>
      <h1>BARBERSHOP</h1>
      <p>Premium barbershop is the prime spot for you haid grooming need in your city</p>
      <ButtonAppointment/>
    </div>
    {/* <Calendar/>
    <Testimonials />
    <Footer/> */}
    </>
  )
}

export default DashboardCustomer