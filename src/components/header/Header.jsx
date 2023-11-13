import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUserTie,
  faCode,
  faUserGraduate,
  faListCheck,
  faAddressBook,
  faEnvelope,
  faPhone
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
      <nav className="header-wrapper  text-black font-semibold w-full">
        <div className="header-container w-full fixed bottom-0  bg-gray-300 py-2 flex justify-around items-center mt-[124px]  md:py-0 md:flex md:justify-evenly md:items-center ">
          <div className="log md:block">
            <img
              src={profileImage}
              alt=""
              className="rounded-[100%] w-12 h-12 border-[2px] border-zinc-800 cover"
            />
          </div>
          <div className="menu-items">
            <ul className="hidden md:flex md:items-center">
              <li className="md:px-3 px-1 ">
                <a
                  href="https://github.com/abrar-balti/"
                  className="md:py-[16px] md:px-2 hover:bg-[#497ADE] hover:text-white "
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-xl px-1 mx-1 text-white mt-1 bg-[#0F172A] rounded"
                  ></FontAwesomeIcon>
                  @abrar-balti
                </a>
              </li>
              <li className="md:px-3 px-1 ">
                <a
                  href="https://github.com/abrar-balti/"
                  className="md:py-[16px] md:px-2 hover:bg-[#497ADE] hover:text-white "
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xl px-1 mx-1 text-white mt-1 bg-[#0F172A] rounded"
                  ></FontAwesomeIcon>
                  @abrarbulti@gmail.com
                </a>
              </li>
              <li className="md:px-3 px-1 ">
                <a
                  href="https://github.com/abrar-balti/"
                  className="md:py-[16px] md:px-2 hover:bg-[#497ADE] hover:text-white "
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-xl px-1 mx-1 text-white mt-1 bg-[#0F172A] rounded"
                  ></FontAwesomeIcon>
                  +92 -320- 9798- 287
                </a>
              </li>
      
            </ul>
          </div>
          <div className="btn hidden md:block">
            <button className="md:py-[13.5px] md:px-2 bg-[#497ADE] text-white hover:bg-blue-800">
              Hire Me 👉
            </button>
          </div>
          <div className="mobile-menu-icon">
            <a
              className="text-[34px] font-bold text-center md:hover:cursor-pointer text-[#497ADE] hover:text-blue-800"
              onClick={toggleMobileMenu}
            >
              &#8801;
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:h-[600px] md:w-[300px] bg-[#0F172A] text-white border rounded-md ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <a
            className="close-mobile-menu float-right pr-2 pt-3 text-gray-300 font-semibold md:hover:cursor-pointer"
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
                  className="mr-4 text-[#497ADE]"
                />{" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faCode}
                  className="mr-3 text-[#497ADE] md:text-xl"
                />
                Skills
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  className="mr-4 text-[#497ADE]"
                />
                Education
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="mr-4 text-[#497ADE]"
                />
                Projects
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-4 text-[#497ADE]"
                />
                Contact
              </a>
            </li>
          </ul>

          <img
            src={mobileImage}
            alt=""
            className="rounded-lg shadow-xl border-[2px] border-[#ffffff] overflow-hidden mt-[180px] md:w-[300px] h-[320px] md:mt-0"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
