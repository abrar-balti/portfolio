import React, { useState } from "react";
import image from "../../assets/svg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelopeSquare,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const handleSubmitButton = () => {
    
    if (name === "") {
      setNameError("Name cannot be empty");
    }

    if (email === "") {
      setEmailError("Email cannot be empty");
    }

    if (subject === "") {
      setSubjectError("Subject cannot be empty");
    }

    if (message === "") {
      setMessageError("Message cannot be empty");
    }
  };
  return (
    <div className="contact-wrapper  flex  justify-evenly mt-[50px] px-6 mb-[300px] w-full h-screen md:mt-5 ">
      <div className="container-body  md:flex   md:justify-evenly flex-wrap mt-6 ">
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
            Let's connect and turn ideas into reality. Reach out – I'm just a
            message away!
          </p>
          <FontAwesomeIcon
            icon={faLocation}
            className="mt-12  bg-blue-600 px-2 py-2 rounded hover:bg-blue-800 hover:cursor-pointer"
          />
          <h2>Islamabad</h2>
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className="mt-12 bg-blue-600  px-2 py-2 rounded hover:bg-blue-800 hover:cursor-pointer"
          />
          <h2>abrarbulti@gmail.com</h2>
          <FontAwesomeIcon
            icon={faPhone}
            className="mt-12 bg-blue-600  px-2 py-2 rounded hover:bg-blue-800 hover:cursor-pointer"
          />
          <h2>+92- 320-9798-287</h2>
        </div>
        <div className="contact-right  flex flex-col mt-12 md:mt-0 gap-1 md:ml-3 md:w-96">
          <label htmlFor="Name">Your Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 rounded outline-none  bg-gray-200 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm text-red-700 py-1">{nameError}</p>
          <label htmlFor="Name">Your Email</label>
          <input
            type="text"
            name="Email"
            id=""
            className="p-2 rounded outline-none  bg-gray-200 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm text-red-700 py-1 ">{emailError}</p>
          <label htmlFor="Name">Subject</label>
          <input
            type="text"
            name="name"
            id=""
            className="p-2 rounded outline-none bg-gray-200 text-black "
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <p className="text-sm text-red-700 py-1">{subjectError}</p>
          <label htmlFor="Message">Message</label>
          <textarea
            name="message"
            id="message"
            className="px-2 py-1 rounded outline-none bg-gray-200 text-black"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className="text-sm text-red-700 py-1">{messageError}</p>
          <button
            className="bg-[#497ADE] text-white px-2 py-1 rounded mt-2 cursor-pointer hover:bg-blue-600"
            onClick={handleSubmitButton}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
