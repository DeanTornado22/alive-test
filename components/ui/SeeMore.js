"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function SeeMore() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="flex flex-col w-fit overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className=" flex items-center justify-between  flex-nowrap  w-fit">
        <p className="uppercase tracking-wider text-[12px] font-bold font-notosans mr-[39px]  relative">
          See More
          <motion.div
            animate={{ left: isHover ? "10.5rem" : "-10.5rem" }}
            transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
            className="bg-white/40 w-[50px] absolute -left-10 h-[7px] rotate-90"
          ></motion.div>
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.036"
          height="4.894"
          viewBox="0 0 15.036 4.894"
        >
          <g
            className="relative overflow-hidden"
            transform="translate(-843 -2226.606)"
          >
            <path
              d="M723,898.344v12"
              transform="translate(-55.344 2954) rotate(-90)"
              fill="none"
              stroke="#222"
              strokeWidth="1"
            />
            <path
              d="M0,0V6"
              transform="matrix(0.616, -0.788, 0.788, 0.616, 853, 2227)"
              fill="none"
              stroke="#222"
              strokeWidth="1"
            />
            <motion.div
              animate={{ left: isHover ? "5.5rem" : "-5.5rem" }}
              transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
              className="bg-white/40 w-[50px] absolute -left-10 h-[10px] rotate-90"
            ></motion.div>
          </g>
        </svg>
      </div>
      <motion.div
        animate={{ x: isHover ? "200px" : 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
        className="bg-[#333333]/30 mt-[4px] w-full h-[1px]"
      ></motion.div>
    </div>
  );
}

export default SeeMore;
