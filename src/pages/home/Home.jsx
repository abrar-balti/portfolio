import React from "react";
import svg from "../../assets/svg.png";

const Home = () => {
  return (
    <>
      <div className="home-wrapper md:flex md:mt-12 md:px-4 ">
        <div className="home-container w-full  flex flex-col-reverse md:flex md:items-center md:flex-row md:justify-evenly  px-4 py-6 my-8 md:px-0 md:py-0  md:my-0 rounded-lg ">
          {/* body starts here */}
          <div className="content-body md:w-[60%] md:px-8 py-6 ">
            <h2 className="text-3xl hidden text-[#03CC5B] font-semibold my-6 md:my-3 text-justify md:flex flex-col text ">
              About Me
            </h2>
            <p className="text-justify ">
              <span className="text-3xl font-semibold "> Hey there</span>, I'm
              Abrar Balti, a proud graduate in software development with a knack
              for creating impactful web solutions. Specializing in the MERN
              stack—MongoDB, Express.js, React, and Node.js—I bring a unique
              blend of creativity and technical expertise to the digital realm.
              My journey in web development has equipped me with a deep
              understanding of crafting dynamic and efficient applications,
              where my focus on the frontend using React harmonizes seamlessly
              with my backend skills in Node.js and Express.js.
            </p>
            <p className="my-3 text-justify  ">
              Beyond coding, I love to keep learning and adapting. I stay
              updated with the newest tech trends because I'm passionate about
              pushing the limits of what's possible. My portfolio isn't just
              about showcasing skills; it's a reflection of my excitement for
              exploring new ideas in web development. Come join me on this
              journey where creativity meets technology!
            </p>
          </div>
          {/* svg starts here  */}
          <div className="flex justify-center items-center  mt-4 svg md:w-[30%] border border-[#0F172A]  rounded">
            <img
              src={svg}
              alt=""
              className="w-[240px] h-[240px] shadow-2xl pt-3 md:w-[400px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Home;
