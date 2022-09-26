import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        BARBER SHOP © {new Date().getFullYear()}. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Ivan
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Volha
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Miguel
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Matias
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Reduan
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
