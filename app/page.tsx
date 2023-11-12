import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "@/public/hero.png";
import Work from "./components/Works/index";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <Navbar />
      <section
        id='hero'
        className=' flex w-full mt-10 relative h-[88vh]  justify-between items-center'
      >
        <div className='space-y-10 pl-10 max-h-max'>
          <h4 className=" w-[60vw] md:w-[60vw]  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-header-color text-[22px] md:text-[66px] tracking-[0] leading-8 md:leading-[70px]">
            Engr. Dr, A. Malik FIMC, CMC.
          </h4>
          <p className=" w-[38vw] [font-family:'Poppins-Regular',Helvetica] font-normal text-body-color text-[18px] md:text-[26px] tracking-[0] leading-[39px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <button className='flex w-[200px] items-center justify-center gap-[10.67px] px-[42.67px] py-[18.67px] relative bg-[#28293e] rounded-[5.33px]  box-border'>
            <div className='relative w-fit mt-[-1.33px] ml-[-29.17px] mr-[-29.17px] font-header font-[number:var(--header-font-weight)] text-white text-[length:var(--header-font-size)] tracking-[var(--header-letter-spacing)] leading-[var(--header-line-height)] whitespace-nowrap [font-style:var(--header-font-style)]'>
              Get In Touch
            </div>
          </button>
        </div>
        <div className='relative  2xl w-[630px]  h-[88vh]'>
          <Image
            fill
            priority
            // width={722}
            // height={600}
            // sizes='40vw'
            className=''
            style={{
              // width: "100%",
              // height: "auto",
              objectFit: "cover",
            }}
            src={Hero}
            alt='hero'
            quality={100}
          />
        </div>
      </section>
      <section className='h-auto w-full'>
        <Work />
      </section>
    </main>
  );
}
