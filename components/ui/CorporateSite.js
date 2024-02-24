import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function CorporateSite() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-[200px] border lg:ml-[48px] text-center uppercase text-[13px] font-bold border-[#222222] py-[14px] px-[36px] font-notosans tracking-wider relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      Corporate Site
      <motion.div
        animate={{
          width: isHover ? "50px" : "20px",
          right: isHover ? "-2rem" : "0",
        }}
        transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
        className="w-[20px] absolute top-[23%] overflow-hidden -right-0"
      >
        <Image
          src="/images/arrow.svg"
          className="min-w-[45px] opacity-45"
          width={20}
          height={5}
          alt="arrow"
        />
      </motion.div>
    </div>
  );
}

export default CorporateSite;
