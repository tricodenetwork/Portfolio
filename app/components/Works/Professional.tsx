import Image from "next/image";
import Navbar from "../Navbar";
import Hero from "@/public/hero.png";
import { works } from "./datas";

export default function Professional() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <section
        id='professional_experience'
        className='flex w-[70%] h-auto bg-[--background-start-rgb] mt-10 px-3 md:px-[3rem] py-[30px] flex-col justify-center items-center'
      >
        <div className="flex-col justify-start items-center gap-6 flex">
          <div className="text-slate-800 text-[26px] md:text-[52px] font-semibold font-['Poppins'] leading-[56px]">Professional Experience</div>
        </div>

        <div className="w-full flex flex-col md:flex-row mt-3 justify-center items-start gap-2.5">
          <div className="w-[239px] h-px bg-gray-600" />
          <div className="w-full pb-[27px] rounded-[10px] flex-col justify-start items-center gap-[27px] inline-flex">
            <div className="self-stretch flex-col justify-start items-end gap-[30px] inline-flex">
              <div className="w-full justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-8 inline-flex">
                  <div className="self-stretch text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">International Journal of Public Administration and Management Research (IJPAMR), <br /><br />ISSN2346-7215(Print)<br />ISSN: 2350-2231(Online).</div>
                  <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div className="w-full">
                      <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">Editorial Board Member: 2023-till date </span>
                      <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam</span>
                    </div>
                    <div className="self-stretch text-gray-600 text-[16px] font-normal font-['Work Sans'] leading-[30px]">Reviewed and selected Journal papers for publication. Paper reviewed<br />Invitation: Institute of Management Consultants & London Graduate School<br />Panel: Chartered Management Consultants Certification Panel, Nigeria<br />Paper: IMC-Nigeria: CMC Certification Workshop & Membership/Fellowship Induction Assessment Papers<br />Number of Papers Reviewed: Two<br />Invitation: International Journal of Public Administration and Management Research (IJPAMR), ISSN2346-7215(Print)ISSN: 2350-2231(Online).<br />Numbers of Articles Reviewed: Two<br />Climate Change and Urban Poor: Water-related Behavior in Jakarta<br />Population and Housing Census in Nigeria<br />Invitation: (The Author) Professor Mahmood Elsayess, Ph.D., PMP, MCS<br />Book Endorser<br />Author: Professor Mahmood Elsayess, Ph.D., PMP, MCS<br />Title: The-anatomy-of-an-English-paragraph<br />ISBN: 9798823010689</div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-5 inline-flex">
                <div className="w-[149px] h-6 text-gray-600 text-2xl font-semibold font-['Work Sans'] leading-[30px]">Read more...</div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>

          <div className="w-full flex-col justify-start items-center gap-[22px]">
            <div className="w-[80%] h-px bg-gray-600" />
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">Exhibitor @ the 31st Council for the Regulation of Engineering in Nigeria Assembly, 2023</div>
              <div className="h-auto">
                <span className="text-gray-800 text-xl md:text-[16px] font-normal font-['Work Sans']">Editorial Board Member: 2023-till date </span>
                <span className="text-gray-800 text-xl md:text-[16px] font-normal font-['Work Sans']">https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam</span>
              </div>
            </div>
          </div>

          <div className="w-full flex-col justify-start items-center gap-[22px] inline-flex">
            <div className="w-[239px] h-px bg-gray-600" />
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">Article Publication/Citations(4)</div>
              <div className="w-full">
                <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">Editorial Board Member: 2023-till date </span>
                <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
