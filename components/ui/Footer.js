"use client";
import React from "react";
import BoxText from "@/components/ui/BoxText";
import Image from "next/image";

function Footer() {
  return (
    <footer className="h-fit flex flex-col ">
      <div className="h-[213px] lg:h-[320px] bg-white relative">
        <div className="flex flex-col items-center absolute bottom-10 right-[5px] gap-16">
          <div className="w-[64px] h-[1px] bg-black rotate-90"></div>
          <p
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="uppercase cursor-pointer   tracking-wider  text-[12px] font-bold font-notosans rotate-90 text-[#333333]"
          >
            TO TOP
          </p>
        </div>

        <div className="bg-[#222222] z-10 lg:py-[80px] w-fit py-[28px] px-[32px] lg:pl-[125px] lg:pr-[125px] absolute top-[100px] lg:top-1/2 flex justify-between items-center">
          <div className="grid  max-lg:hidden grid-cols-3 gap-y-[18px]  lg:gap-x-[4rem] row text-left">
            <p className="text-white uppercase font-notosans tracking-wide">
              Concept
            </p>
            <p className="text-white uppercase font-notosans text-nowrap tracking-wide">
              NEWS & BLOG
            </p>
            <p className="text-white uppercase font-notosans tracking-wide">
              CONTACT
            </p>
            <p className="text-white uppercase font-notosans tracking-wide">
              projects
            </p>
            <p className="text-white uppercase font-notosans tracking-wide text-nowrap">
              INFO & ACCESS
            </p>
          </div>
          <div className="grid lg:hidden grid-cols-2 gap-y-[18px] gap-x-4 row text-left">
            <p className="text-white uppercase font-notosans tracking-wide">
              Concept
            </p>
            <p className="text-white uppercase font-notosans text-nowrap tracking-wide">
              NEWS & BLOG
            </p>
            <p className="text-white uppercase font-notosans tracking-wide">
              CONTACT
            </p>
            <p className="text-white uppercase font-notosans tracking-wide text-nowrap">
              INFO & ACCESS
            </p>
            <p className="text-white uppercase font-notosans tracking-wide">
              projects
            </p>
          </div>

          <BoxText />
        </div>
      </div>
      <div className="bg-[#333333] pb-10 h-fit py-[16px] lg:pl-[125px] lg:pr-[125px] relative w-full">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between w-full pt-16 lg:pt-24 ">
          <div className="py-[18px] w-[80vw] mb-[34px] block lg:hidden border border-white text-center relative">
            <p className="font-notosans text-[14px] font-bold ">
              新しいブランド名 <br /> コーポレートサイトはこちら
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-center  lg:justify-between gap-[14px]">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] mr-[16px] rounded-full bg-[#ededed]"></div>
              <p className="font-cormorant font-bold text-white">
                NEW BRAND NAME
              </p>
            </div>
            <div className="flex gap-[16px] lg:ml-[70px]">
              <Image
                src="/images/insta.svg"
                width={24}
                height={24}
                alt="insta"
              />
              <Image
                src="/images/facebook.svg"
                width={12}
                height={24}
                alt="facebook"
              />
            </div>
          </div>

          <p className="text-[14px] text-white font-notosans  opacity-[60%] tracking-wide max-lg:mt-[22px]">
            © 2021 New Brand Name
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
