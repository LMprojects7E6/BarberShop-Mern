import React from "react";
import Logo from "../../../components/logo/Logo";
import Logout from "../logout/Logout";
const Navbar = ({ dashboard }) => {
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-0.5 bg-white opacity-90 mb-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Logo />
          <div className="flex flex-col">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              BARBER SHOP
            </span>
            <span className="self-center text-lg  whitespace-nowrap dark:text-white">
              {dashboard} DASHBOARD
            </span>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-wrap items-center mt-3 text-lg whitespace-nowrap dark:text-black font-extrabold sm:mt-0">
            <li>
              <span className="mr-4  md:mr-6">
                WELCOME BACK{" "}
                {localStorage.getItem("first_name").toLocaleUpperCase()}
              </span>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
