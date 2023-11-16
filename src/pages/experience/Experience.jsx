import React from "react";
import xgrid from "../../assets/xgrid-logo-1.png";
import hanjra from "../../assets/hanjra.png";
const Experience = () => {
  return (
    <>
      <div className="experience-wrapper w-full flex md:justify-center py-9">
        {/* experience container starts here  */}
        <div className="experience-container w-full md:w-[50%] flex flex-col px-4">
          <div className="experience-title">
            <h1 className="text-3xl text-[#03CC5B] font-semibold my-2 ">
              Experience
            </h1>
          </div>

          <div className="experience-header flex justify-start items-center  px-4 bg-[#121c31] shadow my-3 rounded">
            <div className="header-left mr-5 border-2 text-center px-4 py-1 rounded my-3 border-blue-600 shadow-xl w-[120px] ">
              <img src={hanjra} alt="" className="h-[80px] ml-3 text-center " />
            </div>
            <div className="header-right">
              <p>
                <span className="text-blue-600 font-semibold ">From</span> 1-
                September{" "}
                <span className="text-blue-600 font-semibold ">To </span>
                Present
              </p>
              <p>Web Developer</p>
              <p className="text-[#03CC5B]">MERN + Wordpress</p>
            </div>
          </div>
          <div className="experience-body px-4 py-4 bg-[#121c31] shadow my-3 rounded ">
            <p className="text-justify">
              As a dedicated web developer at Hanjra Group of Companies Pvt Ltd,
              I play a pivotal role in designing, developing, and maintaining
              the company's web presence. In this dynamic position, I am tasked
              with creating visually appealing and functional websites that
              align with the company's goals and values. Whether it's crafting
              responsive user interfaces, implementing robust backend
              functionalities, or ensuring the seamless maintenance of existing
              sites, I am deeply committed to delivering high-quality web
              solutions. This role has provided me with valuable insights into
              the corporate landscape, allowing me to combine creativity with
              technical expertise to meet the diverse needs of the company.
              Through my work at Hnajra, I continue to refine my skills, stay
              abreast of industry best practices, and contribute to the digital
              success of the organization.
            </p>
          </div>
          <div className="experience-header flex justify-start items-center  px-4 bg-[#121c31] shadow my-3 rounded">
            <div className="header-left mr-5 border-2 text-center px-4 py-6 rounded my-3 border-blue-600 shadow-xl">
              <img src={xgrid} alt="" className="w-[100px]" />
            </div>
            <div className="header-right">
              <p>
                <span className="text-blue-600 font-semibold  ">From</span> 17-
                July <span className="text-blue-600 font-semibold ">To </span>
                30 Augest
              </p>
              <p>Internee</p>
              <p className="text-[#03CC5B]">MERN- Stack</p>
            </div>
          </div>
          <div className="experience-body px-4 py-4 bg-[#121c31] shadow my-3 rounded mb-8">
            <p className="text-justify">
              During my time at xgrid.co, I had the invaluable opportunity to
              participate in a comprehensive bootcamp where I collaborated with
              a dynamic and talented team. Together, we embarked on a
              challenging journey to develop a cutting-edge ecommerce
              application. This hands-on experience not only honed my technical
              skills but also provided a deep understanding of the collaborative
              nature of real-world projects. From conceptualization to
              implementation, I actively contributed to the design and
              development of the app, gaining practical insights into the
              intricacies of creating a seamless and user-friendly ecommerce
              platform.
            </p>
          </div>
        </div>
        {/* experience container ends here */}
      </div>
    </>
  );
};

export default Experience;
