import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const TopButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 600) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, [showBtn]);

  return (
    <>
      {showBtn && (
        <button
          type="button"
          className="fixed sm:bottom-10 sm:right-10 bottom-5 right-2 sm:w-12 sm:h-12 
          h-8 w-8  rounded-full bg-[#FFAB4A] z-20
      flex justify-center items-center text-white cursor-pointer hover:bg-white hover:text-[#FFAB4A]
      transition duration-200 ease-in-out sm:text-4xl text-2xl"
          onClick={() => {
            window.scroll({ top: 1, left: 0, behavior: "smooth" });
          }}
        >
          <MdOutlineKeyboardArrowUp />
        </button>
      )}
    </>
  );
};

export default TopButton;
