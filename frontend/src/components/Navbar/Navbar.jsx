import React from 'react'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import Logo from '../Logo/Logo'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
<nav className="style__navBar px-2 md:px-4 py-2.5 flex">
    <div className="flex flex-wrap justify-between  mx-auto max-w-screen-xl text-center">
        <div id="mega-menu-icons" className="style_Text-navBar hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 text-xl font-large md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#!" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        HOME</a>
                </li>
                <li>
                    <a href="#!" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        OUR SERVICE</a>
                </li>
                <li>
                    <a href="#!" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        ABOUT US</a>
                </li>
                <li>
                    <a href="#!" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-50 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        CONTACT</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


  )
}

export default Navbar