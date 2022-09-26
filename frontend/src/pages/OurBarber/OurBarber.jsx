import React from "react";
import ButtonAppointment from "../../components/ButtonAppointment/ButtonAppointment";
import Logo from "../../components/Logo/Logo";
import "./OurBarber.css";

const OurBarber = () => {
  return (
    <section className="style_ourbarber-bg">
      <div className="style_ourbarber-center">
      <Logo />
        <div className="style_ourbarber-title">
            <div className="style_ourbarber-p">
                <p>- Our Barber -</p>
            </div>
            <div className="style_ourbarber-h2">
                <h2>OUR BARBER</h2>
                <hr/>
            </div>
        </div>
      </div>
      <div class="style_cards-fonts flex justify-around">
            {/* CARD OF STEVE*/}
        <div class=" max-w-[15%]">
          <button classNam="">
            <img
              class="rounded-1"
              src="https://berger.themerex.net/wp-content/uploads/2016/07/team-1-370x370.jpg"
              alt=""
            />
          </button>
          <div class="p-6 bg_style-card">
            <h5 class="text-white text-xl font-medium mb-2 text-center">
              Steven Brown
            </h5>
            <p class="text-gray-700 text-base mb-4 text-center">
              SENIOR BARBER
            </p>
            <div className="style_btn-ourbarber flex justify-around">
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <svg
              class="h-8 w-8 text-white"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <svg class="h-6 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
             <svg class="h-8 w-8 text-white"  width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            </button>
            </div>
          </div>
        </div>
        {/* CARD OF LENNY */}
        <div class="max-w-[15%]">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-1"
              src="https://berger.themerex.net/wp-content/uploads/2016/07/team-2-370x370.jpg"
              alt=""
            />
          </a>
          <div class="p-6 bg_style-card">
            <h5 class="text-white text-xl font-medium mb-2 text-center">
            Lenny Smith
            </h5>
            <p class="text-gray-700 text-base mb-4 text-center">
              BARBER
            </p>
            <div className="style_btn-ourbarber flex justify-around">
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <svg
              class="h-8 w-8 text-white"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <svg class="h-6 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
             <svg class="h-8 w-8 text-white"  width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            </button>
            </div>
          </div>
        </div>
        {/* CARD OF ANTHONY */}
        <div class="max-w-[15%]">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-1"
              src="https://berger.themerex.net/wp-content/uploads/2016/07/team-3-370x370.jpg"
              alt=""
            />
          </a>
          <div class="p-6 bg_style-card">
            <h5 class="text-white text-xl font-medium mb-2 text-center">
            Anthony Lynch
            </h5>
            <p class="text-gray-700 text-base mb-4 text-center">
              BARBER
            </p>
            <div className="style_btn-ourbarber flex justify-around">
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <svg
              class="h-8 w-8 text-white"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <svg class="h-6 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
            </button>
            <button
              type="button"
              class=" inline-block px-2 py-1.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
             <svg class="h-8 w-8 text-white"  width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            </button>
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center w-100 pt-3 pb-6">
            <ButtonAppointment />
        </div>
    </section>
  );
};

export default OurBarber;
