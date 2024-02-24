"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
function ItemCards({ item }) {
  const { img, img2, date, type, title, content } = item;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex w-fit cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        {!isHovered ? (
          <motion.div
            key="first-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
            style={{
              position: "relative",
              minWidth: 120,
              minHeight: 120,
              mixBlendMode: "multiply",
            }}
          >
            <Image src={img} layout="fill" objectFit="cover" alt="item" />
          </motion.div>
        ) : (
          <motion.div
            key="second-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
            style={{
              position: "relative",
              minWidth: 120,
              minHeight: 120,
              mixBlendMode: "multiply",
            }}
          >
            <Image src={img2} layout="fill" objectFit="cover" alt="new item" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col ml-[24px] text-[#333333]">
        <p className="text-[16px] font-notosans font-bold opacity-[50%] mb-[12px]">
          {date} - {type === "news" ? "News" : "Blogs"}
        </p>
        <p className="text-[18px] font-sawarabi font-medium mb-[11px]">
          {title}
        </p>

        <p className="font-notosans text-[14px] font-normal line-clamp-2">
          {content}
        </p>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          className="w-full h-[2px] bg-[#222222]/30  mt-2"
        ></motion.div>
      </div>
    </div>
  );
}

export default ItemCards;
