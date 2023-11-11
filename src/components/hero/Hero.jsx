import React from 'react'
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper w-full flex justify-evenly items-center">
        <div className="hero-left w-[30%] border border-purple-700">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            illum?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi
            illum voluptatibus molestias repudiandae nemo saepe veritatis
            obcaecati! Ea voluptatum ipsam exercitationem rerum eum quod omnis
            nihil aspernatur saepe recusandae.
          </p>
          <button>Send me a message</button>
        </div>
        <div className="right w-[30%] border border-purple-700">
          <img src={profileImage} alt="" className="w-60 h-60" />
        </div>
      </div>
    </>
  );
}

export default Hero