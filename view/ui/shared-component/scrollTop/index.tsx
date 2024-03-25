"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle ,IoIosArrowUp  } from "react-icons/io";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className='fixed z-50 bottom-5 right-8 sm:bottom-8 sm:right-10 md:bottom-12 md:right-12 lg:bottom-20 lg:right-20 xl:bottom-20 xl:right-20'>
        <button className='bg-black rounded-full p-1' onClick={scrollToTop}>
          <IoIosArrowUp color='white' size={50} />
        </button>
      </div>
    )
  );
};

export default ScrollTop;