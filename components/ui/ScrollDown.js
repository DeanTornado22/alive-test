"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ScrollDown() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="hidden md:flex w-fit  absolute bottom-[70px] right-5 rotate-90 items-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className="uppercase mr-[50px] font-notosans text-[12px] tracking-widest font-bold">
        Scroll down
      </p>
      <div className="relative h-[70px] overflow-hidden rotate-90 bg-white/80 w-[2px]">
        <motion.div
          animate={{ y: isHover ? "-200px" : "200px" }}
          transition={{ duration: 1, type: "tween", ease: "linear" }}
          className="absolute bg-white/70  h-[70px] w-[2px]"
        ></motion.div>
      </div>
    </div>
  );
}

export default ScrollDown;
