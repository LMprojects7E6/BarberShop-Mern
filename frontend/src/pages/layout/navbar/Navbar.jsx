import React from "react";
import Button from "../../../components/buttons/Button";
import Logo from "../../../components/logo/Logo";
import { SessionContext } from "../../../context/SessionContext";
import { useContext } from "react";

const Navbar = ({ dashboard }) => {
  const { userSession } = useContext(SessionContext);

  return (
    <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5">
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
                WELCOME BACK {userSession?.toUpperCase()}
              </span>
            </li>
            <li>
              <Button text={"LOG OUT"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
