import React from 'react'
import Logo from '../../../../components/Logo/Logo'
import '../Appointment/Appointment.css'

const Appointment = () => {
  return (
    <section className='style_appointment-bg'>
        <div className='style_center-title flex'>
            <Logo/>
            <div className='style_appointment-title'>
                <h1>APPOINTMENT</h1>
                <div className='flex'>
                <a className='pr-2' href='/'>Home</a><a className='pl-3' href='#!'>/ Appointment</a>
                </div>
            </div>
        </div>
        <div className='style_bg-calendar'>
            <div className='calendar_container'>

            </div>
        </div>
    </section>
  )
}

export default Appointment