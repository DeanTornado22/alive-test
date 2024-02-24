"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
function BoxText() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-fit">
      <motion.div
        className="py-[23px] px-[114px] ml-32 w-[550px] lg:block hidden border border-white cursor-pointer text-center relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isHovered ? (
            <motion.p
              key="first-text"
              className="font-notosans text-white text-[14px] font-bold text-nowrap"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              新しいブランド名 コーポレートサイトはこちら
            </motion.p>
          ) : (
            <motion.p
              key="second-text"
              className="font-notosans text-[14px] text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              あらたな会社のロゴデザインはこちら
            </motion.p>
          )}
        </AnimatePresence>
        <motion.div
          className="border bottom-6  border-white border-l-0 border-r-0 w-[545px] h-[67px] absolute inset-0"
          animate={{ x: isHovered ? 700 : -700 }}
          transition={{ type: "tween", duration: 0.5 }}
        ></motion.div>
      </motion.div>
      <motion.div
        animate={{
          width: isHovered ? "110px" : "20px",
          right: isHovered ? "-5rem" : "0",
        }}
        transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
        className="w-[200px] hidden lg:block absolute top-[23%] overflow-hidden -right-8"
      >
        <Image
          src="/images/white_arrow.svg"
          className="min-w-[65px] "
          width={20}
          height={5}
          alt="white-arrow"
        />
      </motion.div>
    </div>
  );
}

export default BoxText;
// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// function BoxText() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <AnimatePresence initial={false} mode="wait">
//       {!isHovered ? (
//         <motion.div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           key="first-text"
//           animate={{ borderWidth: "1px", borderColor: "white" }}
//           exit={{ borderWidth: "0px", borderColor: "transparent" }}
//           className="py-[23px] px-[114px] ml-32 w-[550px] lg:block hidden border border-white text-center relative overflow-hidden"
//         >
//           <motion.p
//             className="font-notosans text-[14px] font-bold text-nowrap"
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             新しいブランド名 コーポレートサイトはこちら
//           </motion.p>
//         </motion.div>
//       ) : (
//         <motion.div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           key="second-text"
//           animate={{ borderWidth: "1px", borderColor: "white" }}
//           exit={{ borderWidth: "0px", borderColor: "transparent" }}
//           className="py-[23px] px-[114px] ml-32 w-[550px] lg:block hidden border border-white text-center relative overflow-hidden"
//         >
//           <motion.p
//             className="font-notosans text-[14px] font-bold"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             あらたな会社のロゴデザインはこちら
//           </motion.p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default BoxText;
