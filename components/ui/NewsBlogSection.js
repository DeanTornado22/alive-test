import React from "react";
import { itemsBlogs, itemsNews } from "@/data/items";
import SeeMore from "@/components/ui/SeeMore";
import ItemCards from "../shared/cards/ItemCards";
function NewsBlogSection() {
  return (
    <section className="h-fit pt-[80px] pb-[80px] md:pt-[130px] md:pb-[160px] bg-[#ededed]">
      <h1 className="text-[32px] md:text-[36px] font-bold uppercase text-center tracking-wider  text-[#333333]">
        NEWS & BLOG
        <p className="font-normal font-sawarabi text-[20px] mt-[12px]">
          おしらせ
        </p>
      </h1>

      <div className="gap-[50px] md:gap-[100px] mt-[100px] lg:px-[150px] px-[16px] flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:w-1/2">
          <div className="w-full flex text-[#333333] justify-between relative items-center">
            <p className=" text-[24px] font-medium font-sawarabi tracking-wider z-10 relative">
              ニュース
            </p>
            <div className="absolute -top-[30px] md:-top-[55px] -left-2 text-[60px] md:text-[90px] font-bold z-[2] opacity-[8%]">
              NEWS
            </div>
            <SeeMore />
          </div>

          <div className="flex flex-col gap-[25px] mt-[50px]">
            {itemsNews.map((item, i) => {
              return <ItemCards key={`news-${i}`} item={item} />;
            })}
          </div>
        </div>
        <div className="w-full h-[1px] opacity-80 md:hidden bg-[#333333]"></div>
        <div className="flex flex-col md:w-1/2">
          <div className="w-full flex text-[#333333] justify-between relative items-center">
            <p className=" text-[24px] font-medium font-sawarabi tracking-wider z-10 relative">
              ニュース
            </p>
            <div className="absolute -top-[30px] md:-top-[55px] -left-2 text-[60px] md:text-[90px] font-bold z-[2] opacity-[8%]">
              BLOGS
            </div>
            <SeeMore />
          </div>
          <div className="flex flex-col gap-[25px] mt-[50px]">
            {itemsBlogs.map((item, i) => {
              return <ItemCards key={`news-${i}`} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsBlogSection;
