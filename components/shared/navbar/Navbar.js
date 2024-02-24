"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import Image from "next/image";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import CorporateSite from "@/components/ui/CorporateSite";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const close = () => {
    setIsOpen(!isOpen);
  };
  const ref = useDetectClickOutside({
    onTriggered: close,
    disableTouch: true,
  });

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white py-[33px] max-w-[95rem] mx-auto text-[#222222] fixed left-0 right-0 z-[100]">
      <div className="mx-[16px] lg:mx-[56px] flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] mr-[16px] rounded-full bg-[#ededed]"></div>
          <p className="font-cormorant font-bold">NEW BRAND NAME</p>
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-[41px] font-notosans tracking-wider">
            <li
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[14px]  font-bold uppercase"
            >
              <Link href="#">Concept</Link>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === 0 ? "100%" : "0%" }}
                className="w-full h-[2px] bg-[#222222]/30  mt-2"
              ></motion.div>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[14px] font-bold uppercase"
            >
              <Link href="#">Projects</Link>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === 1 ? "100%" : "0%" }}
                className="w-full h-[2px] bg-[#222222]/30  mt-2"
              ></motion.div>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[14px] font-bold uppercase"
            >
              <Link href="#">News & Blog</Link>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === 2 ? "100%" : "0%" }}
                className="w-full h-[2px] bg-[#222222]/30  mt-2"
              ></motion.div>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[14px] font-bold uppercase"
            >
              <Link href="#">Info & Access</Link>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === 3 ? "100%" : "0%" }}
                className="w-full h-[2px] bg-[#222222]/30  mt-2"
              ></motion.div>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[14px] font-bold uppercase"
            >
              <Link href="#">Contact</Link>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === 4 ? "100%" : "0%" }}
                className="w-full h-[2px] bg-[#222222]/30  mt-2"
              ></motion.div>
            </li>
          </ul>
          <CorporateSite />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none focus:text-black"
          >
            <AnimatePresence initial={false} mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  animate={{ opacity: 1, rotate: 180 }}
                  exit={{ opacity: 0, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/close_mobile.svg"
                    width={20}
                    height={20}
                    alt="close_mobile"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  animate={{ opacity: 1, rotate: -360 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/open_mobile.svg"
                    width={25}
                    height={12}
                    alt="open_mobile"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute w-screen h-screen
         -bottom-[100vh]  bg-black/55 z-20"
          >
            <motion.div
              initial={{ opacity: 0, top: "-30.25rem" }}
              animate={{ opacity: 1, top: "-1.25rem" }}
              exit={{
                opacity: 0,
                top: "-30.25rem",
                transition: {
                  top: { duration: 0.1 },
                  opacity: { duration: 0.08 },
                },
              }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
              className="lg:hidden mt-4 absolute h-fit -top-5  w-full z-30 bg-white pt-10 pb-10"
              ref={ref}
            >
              <div className="flex flex-col space-y-[28px] justify-center items-center ">
                <Link
                  href="#"
                  className="text-[14px] font-bold font-notosans uppercase"
                >
                  CONCEPT
                </Link>
                <Link
                  href="#projects"
                  className="text-[14px] font-bold font-notosans uppercase"
                >
                  projects
                </Link>
                <Link
                  href="#"
                  className="text-[14px] font-bold font-notosans uppercase"
                >
                  NEWS & BLOG
                </Link>
                <Link
                  href="#"
                  className="text-[14px] font-bold font-notosans uppercase"
                >
                  INFO & ACCESS
                </Link>
                <Link
                  href="#"
                  className="text-[14px] font-bold font-notosans uppercase"
                >
                  CONtact
                </Link>
                <CorporateSite />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
