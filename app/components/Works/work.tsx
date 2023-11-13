import Image from "next/image";
import Navbar from "../Navbar";
import Hero from "@/public/hero.png";
import { works } from "./datas";

export default function Work() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      {/* <Navbar /> */}
      <section
        id='work_experience'
        className='flex w-full mt-10 px-3 md:px-[5rem] py-[60px] bg-white flex-col justify-center items-center inline-flex'
      >
        <div className="self-stretch flex-col justify-start items-center gap-5 md:gap-[50px] inline-flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="text-slate-800 text-[26px] md:text-[52px] font-semibold font-['Poppins'] leading-[56px]">Work Experience</div>
          </div>

          <div className="flex-col justify-center items-center gap-[50px] flex">
            <div className="w-full h-auto mx-3 py-8 pr-3 sm:pr-8 bg-white border border-l-amber-400 border-solid border-2 rounded-[10px] shadow justify-center items-center gap-4 flex">
              <div className="flex-col flex pl-6 gap-4">
                <div className="self-stretch text-slate-800 text-xl md:text-lg font-semibold font-['Work Sans'] leading-7">
                  Unique Oil and Integrated Services Limited Lagos, Nigeria Founder/CEO 2007-Till Date
                </div>
                <p className="">Managed the Unique Oil and
                  Integrated services to secure and manage critical support services for the Federal Government Agencies of the Federal Republic
                  of Nigeria (NAFDAC, FAAN, NPA), Kogi State Government, and Private companies (GAS GROUP, CITI BANK) that services multinationals
                  such as CHEVRON, AGIP, CNOO
                </p>
              </div>
            </div>

            <div className="w-full h-auto py-8 pr-3 sm:pr-8 bg-white border border-l-amber-400 border-solid border-2 rounded-[10px] shadow justify-center items-start gap-4 flex">
              <div className="flex-col flex pl-6 gap-4">
                <div className="self-stretch text-slate-800 text-xl md:text-lg font-semibold">
                  <span className="font-['Work Sans'] leading-7">NAFDAC </span>
                  <span className="font-['Work Sans'] leading-7">https://www.nafdac.gov.ng</span>
                </div>
                <p className="self-stretch text-gray-600">
                  <span className=" font-normal font-['Work Sans'] leading-[30px]">
                    <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                    Led the company(Unique Oil and Integrated Services) to forge an indomitable partnership
                    with the esteemed National Agency for Food and Drug Administration and Control
                    (The US equivalent of the FDA).<br />
                  </span>
                  <span className="text-gray-600 font-normal font-['Work Sans'] leading-[30px]">
                    Developed and implemented strategic plans to gain 70% improved energy sufficiency for operations of the
                    national laboratories of NAFDAC.
                    <br />
                    My leadership and unwavering dedication to excellence have been so unparalleled that the NAFDAC retained our services through
                    successive outgone and incoming Director Generals (Four Administrations), spanning a remarkable era from 2010 until now.
                    <br />
                    My extraordinary contributions to the institution (NAFDAC) led to the establishment's energy support service that ensured
                    uninterrupted power supply and orchestrated efficient energy management, allowing the organization to execute its regulatory
                    functions with unparalleled effectiveness and efficiency.
                  </span>
                </p>
              </div>
            </div>

            {works.map(({ id, title, subtitle }) => {
              return (
                <div key={id} className="w-full h-auto py-8 pr-3 sm:pr-8 bg-white border border-l-amber-400 border-solid border-2 rounded-[10px] shadow justify-center items-start gap-4 flex">
                  {/* <hr className="w-3 h-[300px] bg-amber-400" /> */}
                  <div className="flex-col flex pl-6 gap-4">
                    <div className="self-stretch text-slate-800 text-xl md:text-lg font-semibold font-['Work Sans'] leading-7">
                      {title}
                    </div>
                    <p className="self-stretch text-gray-600 font-normal font-['Work Sans'] leading-[30px]">
                      {subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <section className='h-[973px] bg-white w-full'></section> */}
    </main>
  );
}
