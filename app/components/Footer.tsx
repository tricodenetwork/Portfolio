"use client";
import React, { useState } from 'react';

export default function Footer() {

  return (
    <section
      id='footer'
      className='flex w-full h-[120px] bg-slate-700 px-3 md:px-[3rem] py-[30px] flex-col justify-center items-center'
    >
      <div className="px-3 justify-center items-center gap-3 inline-flex">
        <div className="text-white text-xl md:text-[20px] font-normal font-['Work Sans'] leading-[30px]">Copyright © 2023.</div>
      </div>
    </section >
  );
}
