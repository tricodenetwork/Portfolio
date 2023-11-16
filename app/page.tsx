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
    <div className='w-full h-max'>
      <section
        id='hero'
        className='m-auto w-full  flex flex-col  pt-[30px] gap-3 md:flex-row  lg:h-[802px]  relative  justify-between items-center'
      >
        <div className='space-y-10 h-[1006px] lg:h-full  lg:max-h-max flex flex-col sm:justify-between lg:justify-center  z-10 ml-[52px]'>
          <h4
            style={poppins.style}
            className=' w-full md:w-[543px] font-semibold text-header-color text-[52px] lg:text-[52px] tracking-[0] leading-[70px]'
          >
            Dr. Malik Abdullahi Adaviriku CMC
          </h4>
          <div className='space-y-10'>
            <p className=" [font-family:'Poppins-Regular',Helvetica] lg:w-[645px] font-normal text-body-color text-[18px] md:text-[26px] tracking-[0] leading-[39px]">
              Unique Group, Inc.
              Founder CEO
              Beverly Hills, CA, USA.
              
            </p>
          
          </div>
        </div>
        <div className=' sm:absolute top-[239px] right-0 lg:relative lg:right-0 lg:top-0 sm:w-[385.43px] sm:h-[561px] 2xl w-full lg:w-[482px]  lg:h-[802px]'>
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
          <div className='sm:w-[527px] sm:h-[527px] lg:w-[752px]  border border-blue-950 absolute bottom-0 right-[0px]  -z-20 lg:h-[752px] rounded-full bg-header-color' />
        </div>
      </section>

      <section><HandA /> </section>
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
            <strong>Politics Experience:</strong> 
            Aspirant for Senate House, 2019 Federal Republic of
            Nigeria, Community service and environmental protection programs.
          </p>
        </div>

        <ContactMe />
      </section>
    </div>
  );
}
