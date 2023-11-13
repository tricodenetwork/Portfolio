"use client";
import React, { useState } from 'react';

export default function Professional() {
  // --------------------------------------------VARIABLES
  const [showMore, setShowMore] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id='professional_experience'
      className='flex w-full h-auto bg-[--background-start-rgb] mt-10 px-3 md:px-[3rem] py-[30px] flex-col justify-center items-center'
    >
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="text-slate-800 text-[26px] md:text-[52px] font-semibold font-['Poppins'] leading-[56px]">Professional Experience</div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-5 mx-[2rem] justify-center items-start gap-3">
        <div className="w-[90%] flex-col justify-start items-center gap-[15px]">
          <div className="w-full h-px bg-gray-600" />
          <div className="flex-col justify-start items-end gap-8 mt-3 inline-flex">
            <div className="w-full justify-center items-center inline-flex">
              <div className="flex flex-col justify-start items-start gap-8">
                <div className="text-slate-800 text-xl md:text-[20px] font-semibold">International Journal of
                  Public Administration and Management Research (IJPAMR),
                  <br />
                  <div className="mt-3">ISSN2346-7215(Print)<br /> ISSN: 2350-2231(Online).</div>

                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">Editorial Board Member: 2023-till date{" "}
                    <a href='https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam'
                      className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
                      https://journals.rcmss.com/index.php
                      /ijpamr/about/editorialTeam
                    </a>
                  </span>
                  <div className="text-gray-600 text-[16px] font-normal font-['Work Sans'] leading-[30px]">
                    {showMore ? (
                      <>
                        Reviewed and selected Journal papers for publication. Paper reviewed Invitation: Institute of
                        Management Consultants & London Graduate School Panel: Chartered Management Consultants Certification
                        Panel, Nigeria Paper: IMC-Nigeria: CMC Certification Workshop & Membership/Fellowship Induction Assessment Papers
                        Number of Papers Reviewed: Two Invitation: International Journal of Public Administration and Management
                        Research (IJPAMR), ISSN2346-7215(Print)ISSN: 2350-2231(Online). Numbers of Articles Reviewed: Two
                        Climate Change and Urban Poor: Water-related Behavior in Jakarta Population and Housing Census in Nigeria
                        Invitation: (The Author) Professor Mahmood Elsayess, Ph.D., PMP, MCS Book Endorser Author: Professor
                        Mahmood Elsayess, Ph.D., PMP, MCS Title: The-anatomy-of-an-English-paragraph ISBN: 9798823010689
                      </>
                    ) : (
                      <>
                        Reviewed and selected Journal...
                      </>
                    )}
                  </div>
                  <button onClick={toggleShowMore}>
                    <div className="text-gray-600 text-2xl font-semibold font-['Work Sans'] leading-[30px]">{showMore ? 'Read less' : 'Read more'}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-col lg:flex-row justify-start items-start gap-12">
          <div className="w-[90%] flex-col justify-start items-center gap-[15px]">
            <div className="w-full h-px bg-gray-600" />
            <div className="flex-col justify-start items-start gap-8 mt-3 inline-flex">
              <div className="text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">Exhibitor @ the 31st Council for the Regulation of Engineering in Nigeria Assembly, 2023</div>
              <div className="h-auto">
                <span className="text-gray-800 text-xl md:text-[16px] font-normal font-['Work Sans']">Editorial Board Member: 2023-till date </span>
                <a href='https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam'
                  className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
                  https://journals.rcmss.com/index.php
                  /ijpamr/about/editorialTeam
                </a>
              </div>
            </div>
          </div>

          <div className="w-[90%] flex-col justify-start items-center mx-3 ml-3 gap-[15px] inline-flex">
            <div className="w-full h-px bg-gray-600" />
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="w-full text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-7">Article Publication/Citations(4)</div>
              <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">Editorial Board Member: 2023-till date{' '}
                <a href='https://journals.rcmss.com/index.php/ijpamr/about/editorialTeam'
                  className="w-[90%] text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
                  https://journals.rcmss.com/index.php
                  /ijpamr/about/editorialTeam
                </a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
}
