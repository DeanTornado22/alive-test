import React from "react";
import Image from "next/image";
import ScrollDown from "./ScrollDown";

function HeroSection() {
  return (
    <section className="bg-white pb-[135px] lg:pb-[160px] h-fit flex flex-col justify-center relative pt-[100px]">
      <div className="md:px-[56px] z-10 flex flex-col justify-center items-center relative mb-[80px] lg:mb-[160px]">
        <Image
          src="/images/hero.png"
          className="hidden md:block"
          width={1388}
          height={690}
          alt="hero-img"
        />
        <Image
          src="/images/hero_sp.png"
          className="block md:hidden"
          width={1388}
          height={690}
          alt="hero-mobile-img"
        />
        <ScrollDown />
      </div>

      <div className=" lg:px-[160px] px-[16px] relative z-10  flex xl:flex-row flex-col justify-center items-center h-fit w-full ">
        <Image
          src="/images/img_01.png"
          width={680}
          height={540}
          className="hidden max-lg:flex"
          alt="hero-sub-img"
        />
        <Image
          src="/images/img_01.png"
          width={780}
          height={640}
          className="hidden lg:flex"
          alt="hero-sub-img2"
        />
        <div className="flex ml-[16px]  flex-col mt-[30px] xl:mt-0  lg:ml-[120px]  max-w-[400px]">
          <p className="text-[#333333] opacity-40 uppercase tracking-wider text-[18px] font-notosans font-bold mb-[23px] relative">
            Concept
            <div className="hidden lg:block w-[124px] h-[2px] absolute -left-[150px] top-1/2 bg-[#333333]"></div>
            <div className="max-lg:block lg:hidden w-[124px] h-[2px] absolute -left-[135px] top-1/2 bg-[#333333]"></div>
          </p>
          <p className="text-[#333333] tracking-[5px] font-sawarabi text-[32px] font-medium mb-[41px]">
            題名題名題名題名題名
          </p>
          <p className="text-[#333333] tracking-[5px] font-notosans text-[15px] font-normal">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテテキストテキストテテ。
            ストテキストテキストテキストテキスト。
          </p>
        </div>
      </div>
      <div className="w-[315px] h-[462px] md:w-[740px] md:h-[779px] bg-[#ededed] absolute left-0 top-[30vh] md:top-auto  -z-1"></div>
    </section>
  );
}

export default HeroSection;
