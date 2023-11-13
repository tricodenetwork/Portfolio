import Image from "next/image";

import Hero from "@/public/assets/hero.png";
import HandA from "./components/HandA";
import AboutMe from "./components/AboutMe";
import ProfessionalA from "./components/ProffesionalA";
import ContactMe from "./components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className=''>
      <section
        id='hero'
        className='m-auto w-full flex flex-col gap-3 md:flex-row  mt-10 relative min-h-[88vh]  justify-between items-center'
      >
        <div className='space-y-10 max-h-max w-[90%] m-auto md:pl-10'>
          <h4 className=" w-full md:w-[60vw]  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-header-color text-[22px] md:text-[66px] tracking-[0] leading-8 md:leading-[70px]">
            Engr. Dr, A. Malik FIMC, CMC.
          </h4>
          <p className=" [font-family:'Poppins-Regular',Helvetica] font-normal text-body-color text-[18px] md:text-[26px] tracking-[0] leading-[39px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
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
        <div className='relative  2xl w-full md:w-[50%]  h-[88vh]'>
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
              objectFit: "contain",
              zIndex: "-10",
            }}
            src={Hero}
            alt='hero'
            quality={100}
          />
        </div>
      </section>

      <section>
        <HandA />
      </section>
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
