"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import SubMenu from "./Submenu";

const listStyle: string =
  "text-[16px] min-h-max   leading-[16px] list relative cursor-pointer hover:opacity- duration-200  flex flex-col items-center my-[14px] md:mb-0 mt-[40px] md:mt-0 md:text-[20px] md:leading-[20px] text-[#132238] font-semibold";
const skills = ["Skill", "Education", "Certification/License"];
const work = ["Work", "Professional", "Volunteer", "Research"];

const Navbar = () => {
  // --------------------------------------------VARIABLES
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState(0);
  // const Arrow = isOpen;

  //-----------------------------------------------------------FUNCTIONS
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglesubMenu = (index: number) => {
    setSubmenu(index);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='relative shadow-sm z-50 shadow-slate-300 w-full  flex items-center md:justify-end bg-white h-[7vh] md:h-[12vh]'>
      <ul
        className={`w-[70vw] menu px-4 mr-7 ${!isOpen
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100 scale-100"
          }  h-[93vh] md:h-full  duration-300 md:translate-x-0  md:opacity-100 transition-all ease-linear  md:flex-row items-start justify-start md:justify-between md:items-center absolute md:relative top-[6.5vh] md:top-0 left-0 flex flex-col bg-white`}
      >
        <li className={listStyle}>Honours/Awards</li>
        <li className={listStyle}>About Me</li>
        <li className={listStyle}>
          <div className='flex'>
            <p>Skillsets</p>
            <div
              onClick={(e) => {
                console.log(e);
              }}
              className='arrow hidden md:flex ml-2'
            >
              <RiArrowDropDownLine />
            </div>
          </div>
          <SubMenu list={skills} />
        </li>
        <li className={listStyle}>Certification</li>
        <li className={listStyle}>
          <div className='flex'>
            <p>Experience</p>
            <div className='arrow hidden md:flex ml-2'>
              <RiArrowDropDownLine />
            </div>
          </div>
          <SubMenu list={work} />
        </li>
        <button className='px-5 py-4 absolute md:relative top-[60vh] md:top-0  ml-[12px] md:mr-[  14px] font-semibold text-[20px] tracking-[var(--header-letter-spacing)] [font-style:var(--header-font-style)] leading-[var(--header-line-height)] text-white bg-header-color rounded-md'>
          Contact Me
        </button>
      </ul>
      <div
        onClick={toggleMenu}
        className={`md:hidden flex absolute right-2  items-center justifiy-center mr-2`}
      >
        {isOpen ? (
          <MdClose size={40} color={"#132238"} />
        ) : (
          <BiMenu size={40} color={"#132238"} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
