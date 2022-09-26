import React from 'react'
import CalendarComponent from '../../components/CalendarComponent/CalendarComponent'
import Logo from '../../components/Logo/Logo'
import './Appointment.css'
import Button from 'react-bootstrap/Button';
import ModalComplement from '../../components/ModalComplement/ModalComplement';


const Appointment = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
        <section className='style_bg-calendar flex'>
            <div className='calendar_container  w-full'>
            <CalendarComponent />
            {/* test modal */}
            {/* end test modal */}
            </div>
            <ModalComplement/>
        </section>
    </section>
  )
}

export default Appointment