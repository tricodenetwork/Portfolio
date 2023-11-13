import Image from "next/image";

import Hero from "@/public/assets/hero.png";
import HandA from "./components/HandA";
import AboutMe from "./components/AboutMe";
import ProfessionalA from "./components/ProffesionalA";
import ContactMe from "./components/Contact";
import Link from "next/link";
import useFonts from "@/hooks/useFonts";

export default function Home() {
  const { poppins } = useFonts();
  return (
    <div className=''>
      <section
        id='hero'
        className='m-auto w-full flex flex-col gap-3 md:flex-row h-[802px]  relative  justify-between items-center'
      >
        <div className='space-y-10 max-h-max z-10 ml-[52px]'>
          <h4
            style={poppins.style}
            className=' w-full md:w-[543px] font-semibold text-header-color text-[22px] lg:text-[52px] tracking-[0] leading-8 lg:leading-[70px]'
          >
            Dr. Eng. Malik Abdullahi Adaviriku FIMC, CMC.
          </h4>
          <p className=" [font-family:'Poppins-Regular',Helvetica] lg:w-[645px] font-normal text-body-color text-[18px] md:text-[26px] tracking-[0] leading-[39px]">
            Engineering Solutions with Expert Consultation. Bridging Vision and
            Execution for Optimal Results. Where Technical Prowess Meets
            Strategic Insight.
          </p>
          <button className='flex w-[200px] items-center justify-center gap-[10.67px] px-[42.67px] py-[18.67px] relative bg-[#28293e] rounded-[5.33px]  box-border'>
            <Link
              href={"#contact"}
              className='relative w-fit mt-[-1.33px] ml-[-29.17px] mr-[-29.17px] font-header font-[number:var(--header-font-weight)] text-white text-[length:var(--header-font-size)] tracking-[var(--header-letter-spacing)] leading-[var(--header-line-height)] whitespace-nowrap [font-style:var(--header-font-style)]'
            >
              Get In Touch
            </Link>
          </button>
        </div>
        <div className='relative  2xl w-full md:w-[482px]  h-[802px]'>
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
              zIndex: "-10",
            }}
            src={Hero}
            alt='hero'
            quality={100}
          />
          <div className='w-[752px] border border-blue-950 absolute bottom-0 right-[0px] opacity-50 -z-20 h-[752px] rounded-full bg-header-color' />
        </div>
      </section>

      <section>{/* <HandA /> */}</section>
      <section>
        <AboutMe />
      </section>
      <section>
        <ProfessionalA />
      </section>
      <section className='bg-[#F6F5F5] p-2'>
        <div className='text-center'>
          <h2 className=' font-bold text-[52px] py-10'>Interest</h2>
          <p>
            Politics: Aspirant for Senate House, 2019 Federal Republic of
            Nigeria, Community service and environmental protection programs.
          </p>
        </div>

        <ContactMe />
      </section>
    </div>
  );
}
