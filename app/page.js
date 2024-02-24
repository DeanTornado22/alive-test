import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
import ItemCards from "@/components/shared/cards/ItemCards";
import { itemsBlogs, itemsNews } from "@/data/items";
import BoxText from "@/components/ui/BoxText";
import ScrollDown from "@/components/ui/ScrollDown";
import SeeMore from "@/components/ui/SeeMore";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-y-auto overflow-x-hidden bg-white max-w-[95rem] mx-auto">
      <Navbar />
      {/* Hero Section */}
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
      {/* News and Blog */}
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

      <footer className="h-fit flex flex-col ">
        <div className="h-[213px] lg:h-[320px] bg-white relative">
          <div className="flex flex-col items-center absolute bottom-10 right-[5px] gap-16">
            <div className="w-[64px] h-[1px] bg-black rotate-90"></div>
            <p className="uppercase   tracking-wider  text-[12px] font-bold font-notosans rotate-90 text-[#333333]">
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
                <p className="font-cormorant font-bold">NEW BRAND NAME</p>
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

            <p className="text-[14px] font-notosans  opacity-[60%] tracking-wide max-lg:mt-[22px]">
              © 2021 New Brand Name
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
