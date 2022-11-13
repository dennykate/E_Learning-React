import React, { useEffect, useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { HiOutlineXCircle } from "react-icons/hi";
import {
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";

import Logo from "../assets/logo.png";
import Kids from "../assets/kids.svg";
import Cross from "../assets/cross.svg";
import Triangle from "../assets/double-triangle.svg";
import { navbarData } from "../utils/data";

const Home = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 80) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    });
  }, [scrollY]);

  return (
    <div className="w-full min-h-screen relative">
      <div
        className="w-full min-h-[50px] bg-white flex justify-between items-center px-5 border-b-[1px] border-color-black
      md:flex-row flex-col"
      >
        <div className="flex md:gap-5 gap-2 md:my-0 my-2 md:flex-row flex-col justify-center items-center">
          <div className="flex gap-1">
            <HiEnvelope size={19} color="#564FFF" />
            <a
              href="mailto:dennykate22@gmail.com"
              className=" text-black font-bold sm:text-xs text-[11px]"
            >
              dennykate22@gmail
            </a>
          </div>
          <div className="flex gap-1">
            <FaHome size={19} color="#564FFF" />
            <a
              href=""
              className=" text-black font-bold text-xs sm:text-xs text-[11px]"
            >
              4297 Libby Street, Beverly Hills, California
            </a>
          </div>
        </div>

        <div className="flex gap-7 mr-3 md:mb-0 mb-2">
          <a href="https://www.facebook.com">
            <FaFacebookF size={19} color="#564FFF" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram size={19} color="#564FFF" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter size={19} color="#564FFF" />
          </a>
        </div>
      </div>

      <div
        className={`w-full h-[100px] bg-white flex justify-between items-center lg:px-5 sm:px-20  px-5
      ${scrollY ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 shadow-xl `}
      >
        <img src={Logo} alt="logo" className="w-[100px] h-[40px]" />

        <ul className=" list-none hidden gap-4 lg:flex ">
          {navbarData.map((data, index) => (
            <li
              key={index}
              className="font-bold cursor-pointer group px-2 relative h-[60px] 
            flex justify-center items-center"
            >
              <h6 className="group-hover:text-[#564FFF]">{data}</h6>
              <div
                className=" h-[3px] absolute bottom-0 left-0 bg-[#564FFF] rounded-md w-0 
              group-hover:w-full transition-all duration-200 ease-in"
              ></div>
            </li>
          ))}
        </ul>

        <a
          href="tel:+959969969969"
          className="px-6 py-5 bg-[#564FFF] gap-3 items-center rounded-md cursor-pointer sm:flex
          hidden hover:-translate-y-1 transform transition-all duration-200 "
        >
          <GiRotaryPhone size={22} color="white" />
          <h6 className="text-white font-medium text-sm sm:text-lg font-poppins">
            +95 969 969 9696
          </h6>
        </a>

        <button
          className="lg:hidden visible"
          onClick={() => setShowNavItems(true)}
        >
          <BiMenuAltRight size={50} color="#FFAB4A" />
        </button>
      </div>

      <div className="w-full sm:py-20 py-8 relative bg-[#33415C] rounded-[40px] z-10">
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse">
          <div
            className="lg:w-1/2 sm:w-[575px] w-full mx-auto lg:ml-10 lg:mt-0 mt-0 
          sm:px-0 px-10"
          >
            <div className="font-medium lg:text-7xl xs:text-5xl text-3xl text-white sm:text-left text-center">
              We Are Child Care <br />
              <span className="lg:text-8xl xs:text-6xl text-4xl mt-5">
                Professinal
              </span>
            </div>

            <p
              className="mt-10 text-[#f5f5f5] sm:text-base xs:text-sm text-xs leading-8 sm:text-left text-center
            font-medium"
            >
              You must know that three is nothing higher and stronger and more
              wholesome and good for life in the future than some
              money,specially memory of Childhood.
            </p>

            <div className="sm:mt-18 mt-8 flex sm:justify-start justify-center sm:gap-10 gap-5 flex-wrap">
              <div
                className="sm:w-[160px] sm:h-[47px] w-[120px] h-[35px]
                flex justify-center items-center border-[1px] border-white
              rounded-md cursor-pointer group hover:border-[#564FFF] relative"
              >
                <h6 className="text-white z-10 font-medium sm:text-base xs:text-sm text-xs">
                  Apply Now
                </h6>
                <FaArrowRight
                  className="ml-3 text-white transform translate-y-[1px] group-hover:translate-x-2 
                  transition-all duration-200 ease-in z-10 text-sm sm:text-base"
                />

                <div
                  className="w-0 h-full absolute top-0 left-0 right-0
                group-hover:w-full transition-all duration-200 ease-in bg-[#564FFF] "
                ></div>
              </div>

              <div
                className="sm:w-[160px] sm:h-[47px] w-[120px] h-[35px] 
                flex justify-center items-center border-[1px] border-white
              rounded-md cursor-pointer group hover:border-[#564FFF] relative"
              >
                <h6 className="text-white z-10 font-medium sm:text-base xs:text-sm text-xs">
                  Learn More
                </h6>
                <FaArrowRight
                  className="ml-3 text-white transform translate-y-[1px] group-hover:translate-x-2 
                  transition-all duration-200 ease-in z-10 text-sm sm:text-base"
                />

                <div
                  className="w-0 h-full absolute top-0 left-0 right-0
                group-hover:w-full transition-all duration-200 ease-in bg-[#564FFF] "
                ></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:p-0 p-10 ">
            <img src={Kids} alt="kids" className="w-full h-full z-20" />
          </div>
        </div>

        <img src={Cross} alt="cross" className="absolute -left-4 top-1/3" />
        <img
          src={Triangle}
          alt="triangle"
          className="absolute left-1/2 top-1/2 -z-10"
        />
      </div>

      <div
        className={`w-full h-screen bg-white z-[100] fixed top-0 left-0 right-0 bottom-0 
      ${
        showNavItems
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } transition-all duration-500 ease-in-out`}
      >
        <button
          className="absolute top-10 right-10"
          onClick={() => setShowNavItems(false)}
        >
          <HiOutlineXCircle size={60} color="#FFAB4A" />
        </button>

        <ul className=" list-none m-10 flex flex-col sm:gap-8 gap-4">
          {navbarData.map((data, index) => (
            <li
              key={index}
              className="font-bold text-black sm:text-2xl text-lg first:text-[#564FFF]"
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
