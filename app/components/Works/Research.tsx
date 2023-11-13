"use client";
import React, { useState } from 'react';

export default function Research() {
  // --------------------------------------------VARIABLES
  const [showMore, setShowMore] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id='research_experience'
      className='flex w-full h-auto bg-white pt-10 px-3 md:px-[3rem] py-[30px] flex-col justify-center items-center'
    >
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="text-slate-800 text-[26px] md:text-[52px] font-semibold font-['Poppins'] leading-[56px]">Research Experience</div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 mx-[2rem] justify-center items-start gap-3">
        <div className="w-[94%] flex flex-col justify-start items-center gap-[15px]">
          <div className="text-slate-800 text-xl md:text-[20px] font-semibold">
            Westcliff University/Department of Business Administration/Irvine, CA, USA Doctoral Student 2017-2022
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              Dissertation Chairman: Professor Elsayess Mahmood: Ph.D., PMP, MCS. Methodologist: Professor Simin Hojat, Ph.D.
              Subject Matter Expert: Professor Omar Haddad DBA Program Chair: Professor Alex Sherm
              Doctoral Dissertation: Integrating Blockchain into Electronic Stamp Duty Collections (A Case Study).
            </span>
            <div className="text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-normal">Brief description of Project</div>
            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              In this scholarly presentation, I embark on an immersive journey into the heart of a profound
              financial syndicate fraud that has cast a shadow over Nigeria's banking landscape. This
              comprehensive examination seeks to unravel the intricate layers of the orchestrated deception,
              dissecting the mechanisms, methodologies, and underlying factors that culminated in its advanced
              form. Moreover, my exploration extends beyond analysis, culminating in the proposal of a pioneering
              solution poised to redefine the trajectory of financial integrity within the nation.
            </span>

            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              <span className="font-bold">Unveiling the Fraud Landscape:</span>{" "}
              In this scholarly presentation, I embark on an immersive journey into the heart of a profound
              financial syndicate fraud that has cast a shadow over Nigeria's banking landscape. This
              comprehensive examination seeks to unravel the intricate layers of the orchestrated deception,
              dissecting the mechanisms, methodologies, and underlying factors that culminated in its advanced
              form. Moreover, my exploration extends beyond analysis, culminating in the proposal of a pioneering
              solution poised to redefine the trajectory of financial integrity within the nation.
            </span>

            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              <span className="font-bold">Understanding the "How" and "Methods":</span>{" "}
              Central to my academic endeavor is a comprehensive understanding of the modus operandi adopted
              by the syndicate. I meticulously dissect the intricate methods employed, ranging from falsified
              documentation to strategic collusion, unveiling the intricate tactics that
              enabled the fraud's gradual evolution into an advanced and complex
            </span>
            <button onClick={toggleShowMore}>
              <div className="text-gray-600 text-2xl font-semibold font-['Work Sans'] leading-[30px]">{showMore ? 'Read less' : 'Read more'}</div>
            </button>
          </div>
        </div>

        <div className="w-[94%] flex flex-col justify-start items-center gap-[15px]">
          <div className="text-slate-800 text-xl md:text-[20px] font-semibold">
            Coventry University, London Campus/Department of Business Administration/London, UK
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              Consulting Fellow 2015 -2016
              Mentor: Doctor Beeker (Ph.D., MEI, MCMI, FHEA, FRSA).
              Project Title: “Developing Entry Strategy into the South American and the Caribbean Oil and Gas Market.”
            </span>
            <div className="text-slate-800 text-xl md:text-[20px] font-semibold font-['Work Sans'] leading-normal">Tasks</div>
            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              Conducted extensive research to identify market entry strategies into South America and the Caribbean region
              and made categorized recommendations for Genesis Oil and Gas.
            </span>

            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              <span className="font-bold">Short-term:</span>{" "}
              Projects in the production phase are under five years old. Short-term recommendations consist of
              ongoing projects at the producing stage. Due to the oil price downturn, most Oil and Gas companies
              are looking for better opportunities to enhance their production while reducing costs. As a
              short-term strategy, Genesis can enter projects immediately in the producing stages to take advantage
              of the volatility in the oil and gas industry.
            </span>

            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              <span className="font-bold">Mid-term:</span>{" "}
              Projects in the development phase are 5 – 10 years old. <br />
              Mid-term recommendations include projects at the exploration stage. This stage of the hydrocarbon
              production process is a complex and costly business. In contrast, a positive result is not granted,
              and hydrocarbons can be located in the most inhospitable parts of the world (BP 2008). Oil companies
              prefer to save funds nowadays, and it is an excellent opportunity for Genesis, with its area of
              expertise, to join the projects.
            </span>

            <span className="text-gray-600 text-xl md:text-[16px] font-normal font-['Work Sans'] leading-[30px]">
              <span className="font-bold">Long-term:</span>{" "}
              Prospective projects are for more than ten years. <br />

              According to PWC (2016), every oil and gas player, including service providers, can adopt long-term strategies:<br />
              1. Develop a more robust supply chain management capability;<br />
              2. Invest in human capital & cost structure,<br />
              3. Capture the value of technologies, and<br />
              4. Align the asset and investment portfolio with a future source of value.<br />

              Based on research findings identified that Guyana and Chile are the two countries that seize
              emerging strategic opportunities. The table below shows the long-term
            </span>
          </div>
        </div>

      </div>
    </section >
  );
}
