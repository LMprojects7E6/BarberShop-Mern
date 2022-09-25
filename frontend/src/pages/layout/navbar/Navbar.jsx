import React from "react";
import Button from "../../../components/buttons/Button";
import Logo from "../../../components/logo/Logo";

const Navbar = ({ dashboard }) => {
  return (
    <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a className="flex items-center">
          <Logo />
          <div className="flex flex-col">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              BARBER SHOP
            </span>
            <span className="self-center text-lg  whitespace-nowrap dark:text-white">
              {dashboard} DASHBOARD
            </span>
          </div>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-wrap items-center mt-3 text-lg whitespace-nowrap dark:text-white font-extrabold sm:mt-0">
            <li>
              <a className="mr-4  md:mr-6">WELCOME BACK USERNAME! </a>
            </li>
            <li>
              <Button onClick={""} text={"LOG OUT"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
