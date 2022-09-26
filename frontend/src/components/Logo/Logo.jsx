import React from 'react'
import '../Logo/Logo.css'

const Logo = () => {
  return (
    <section className='flex'>
        <a href="/" className="backGround_logo flex">
            <img src={require("../../assets/img/img_logo.png")} className="style_img-logo" alt="Flowbite Logo" />
        </a>
    </section>
  )
}

export default Logo