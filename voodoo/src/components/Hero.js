import React from "react";
import comp1 from "../images/comp1.jpg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Hero() {
  return (
    <div className="flex justify-center bg-gray-800">
      <div className="max-w-7xl ">
        <img
          src={comp1}
          className="min-h-screen min-w-[800px] shadow-lg lg:rounded-xl z-0"
          alt=""
        />
        <div className="flex justify-center">
          <div
            className="absolute top-1/4 flex justify-between space-y-10 pt-8 
      lg:flex-row lg:space-x-10 lg:px-10 lg:space-y-0"
          >
            <div className="mt-0 h-fit w-[400px] md:w-[800px] bg-gray-800 text-gray-300 text-2xl text-center font-medium shadow-lg rounded-lg">
              <p className="p-8">
                Hey there! My name is Dakota Eakin. On this site you can see
                examples of my work and technologies I use. Please feel free to
                contact me using the methods below if you have questions!
              </p>
              {/* <p className="pb-2">Email [email popup on click]</p> */}
              <div className="flex justify-center pb-8">
                <a
                  href="https://github.com/xhellcat1942x"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-10 w-10" src={github} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dakota-eakin-0a782713b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-10  pl-8" src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
