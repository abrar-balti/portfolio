import React from "react";
import image from "../../assets/svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelopeSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-wrapper  flex items-center justify-evenly mt-[200px] px-6 mb-[300px] w-full h-screen md:mt-0 ">
      <div className="container-body  md:flex  md:items-center md:justify-evenly flex-wrap ">
        <div className="contact-left   ">
          {/* <img
              src={image}
              alt=""
              className="w-[240px] h-[240px]  pt-3 md:w-[400px] md:h-[400px]"
            /> */}
          <h1 className="text-xl text-[#03CC5B] font-semibold my-2  ">
            Feel Free To Reach Out!
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            saepe.
          </p>
          <FontAwesomeIcon
            icon={faLocation}
            className="mt-12  bg-blue-600 px-2 py-2 rounded"
          />
          <h2>Islamabad</h2>
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className="mt-12 bg-blue-600  px-2 py-2 rounded"
          />
          <h2>abrarbulti@gmail.com</h2>
          <FontAwesomeIcon
            icon={faPhone}
            className="mt-12 bg-blue-600  px-2 py-2 rounded"
          />
          <h2>+92- 320-9798-287</h2>
        </div>
        <div className="contact-right  flex flex-col mt-12 gap-1 md:ml-3">
          <label htmlFor="Name">Your Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 rounded outline-none  bg-gray-200 text-black"
          />
          <label htmlFor="Name">Your Email</label>
          <input
            type="text"
            name="Email"
            id=""
            className="p-2 rounded outline-none  bg-gray-200 text-black"
          />
          <label htmlFor="Name">Subject</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 rounded outline-none bg-gray-200 text-black "
          />
          <label htmlFor="Message">Message</label>
          <input
            type="text"
            name=""
            id=""
            className="p-12 rounded outline-none  bg-gray-200 text-black"
            placeholder="Your Message"
          />
          <button className="bg-[#497ADE] text-white px-2 py-1 rounded mt-2 cursor-pointer hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
