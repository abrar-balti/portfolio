import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faCode,
  faUserGraduate,
  faListCheck,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import profileImage from "../../assets/abrar.jpg";
import mobileImage from "../../assets/profile.jpg";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="header-wrapper py-2 text-black font-semibold w-full">
        <div className="header-container w-full bg-gray-300 py-2 flex justify-around items-center  md:w-[900px] md:mx-auto md:py-0 md:flex md:justify-evenly md:items-center md:rounded-3xl">
          <div className="log md:block">
            <img
              src={profileImage}
              alt=""
              className="rounded-[100%] w-12 h-12 border-[2px] border-zinc-800 cover"
            />
          </div>
          <div className="menu-items">
            <ul className="hidden md:flex">
              <li className="md:px-3 px-1">
                <a
                  href="#"
                  className="md:py-[15px] md:px-2 hover:bg-blue-700 hover:text-white text-center"
                >
                  Experience
                </a>
              </li>
              <li className="md:px-3 px-1">
                <a
                  href="#"
                  className="md:py-[15px] md:px-2 hover:bg-blue-700 hover:text-white text-center"
                >
                  Skills
                </a>
              </li>
              <li className="md:px-3 px-1">
                <a
                  href="#"
                  className="md:py-[15px] md:px-2 hover:bg-blue-700 hover:text-white text-center"
                >
                  Education
                </a>
              </li>
              <li className="md:px-3 px-1">
                <a
                  href="#"
                  className="md:py-[15px] md:px-2 hover:bg-blue-700 hover:text-white text-center"
                >
                  Projects
                </a>
              </li>
              <li className="md:px-3 px-1">
                <a
                  href="#"
                  className="md:py-[15px] md:px-2 hover:bg-blue-700 hover:text-white text-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="btn hidden md:block">
            <button className="md:py-[13.5px] md:px-2 bg-blue-700 text-white">
              Hire Me 👉
            </button>
          </div>
          <div className="mobile-menu-icon">
            <a
              className="text-[34px] font-bold text-center md:hidden"
              onClick={toggleMobileMenu}
            >
              &#8801;
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <a
            href="#"
            className="close-mobile-menu float-right pr-2 pt-3 text-gray-300 font-semibold"
            onClick={closeMobileMenu}
          >
            &#x2717;
          </a>
          <ul>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="mr-4 text-blue-700"
                />{" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon icon={faCode} className="mr-4 text-blue-700" />
                Skills
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  className="mr-4 text-blue-700"
                />
                Education
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="mr-4 text-blue-700"
                />
                Projects
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-4 text-blue-700"
                />
                Contact
              </a>
            </li>
          </ul>

          <img
            src={mobileImage}
            alt=""
            className="rounded-lg shadow-xl border-[4px] border-blue-700 overflow-hidden mt-[180px]"
          />
          
        </div>
      </nav>
    </>
  );
};

export default Header;
