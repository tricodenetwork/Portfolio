"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
//import { RiArrowDropUpLine } from "react-icons/ri";
import SubMenu from "./Submenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/aw17.png";

const listStyle: string =
  "text-[16px] min-h-max   leading-[16px] list relative cursor-pointer hover:opacity- duration-200  flex flex-col items-center my-[14px] lg:mb-0 mt-[40px] lg:mt-0 md:text-[20px] lg:leading-[20px] text-[#132238] font-semibold";
const skills = [
  { title: "Skill", link: "skill" },
  { title: "Education", link: "#Education" },
  // { title: "Certification/License", link: "#Certification" },
];
const work = [
  { title: "Experience", link: "Experience" },
  { title: "Professional", link: "#Professional" },
  { title: "Volunteer", link: "#Volunteer" },
  { title: "Research", link: "#Research" },
];
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
    <div className='relative shadow-sm  shadow-slate-300 z-20   flex items-center lg:justify-around bg-white h-[7vh] lg:h-[12vh]'>
      <Image
        alt='logo'
        className='ml-5 lg:ml-0'
        width={37}
        height={67}
        src={Logo}
      />
      <ul
        className={`pl-5 w-[60vw] menu  ${
          !isOpen
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100 scale-100 z-10"
        }  h-[95vh] lg:h-full  duration-300 lg:translate-x-0  lg:opacity-100 transition-all ease-linear  lg:flex-row items-start justify-start lg:justify-between lg:items-center absolute lg:relative top-[6.5vh] lg:top-0 left-0 flex flex-col bg-white`}
      >
        <li className={listStyle}>
          <Link href={"#handa"}>Honours/Awards</Link>
        </li>
        <li className={listStyle}>
          <Link href={"#about-me"}>About Me</Link>
        </li>
        <li className={listStyle}>
          <div className='flex'>
            <p>Skillsets</p>
            <div
              onClick={(e) => {
                console.log(e);
              }}
              className='arrow hidden lg:flex ml-2'
            >
              <RiArrowDropDownLine />
            </div>
          </div>
          <SubMenu toggle={toggleMenu} list={skills} />
        </li>
        <li className={listStyle}>
          <Link href={"#certification"}>Certification</Link>
        </li>
        <li className={listStyle}>
          <div className='flex'>
            <p>Experience</p>
            <div className='arrow hidden lg:flex ml-2'>
              <RiArrowDropDownLine />
            </div>
          </div>
          <SubMenu toggle={toggleMenu} list={work} />
        </li>
        <Link
          href={"#contact"}
          className='px-5 py-4 absolute lg:relative lg:hidden flex top-[60vh] lg:top-0  ml-[12px] lg:mr-[  14px] font-semibold text-[20px] tracking-[var(--header-letter-spacing)] [font-style:var(--header-font-style)] leading-[var(--header-line-height)] text-white bg-header-color rounded-md'
        >
          Contact
        </Link>
      </ul>
      <Link
        href={"#contact"}
        className='px-5 py-4 absolute lg:relative lg:flex hidden top-[60vh] md:top-0  ml-[12px] md:mr-[  14px] font-semibold text-[20px] tracking-[var(--header-letter-spacing)] [font-style:var(--header-font-style)] leading-[var(--header-line-height)] text-white bg-header-color rounded-md'
      >
        Contact
      </Link>
      <div
        onClick={toggleMenu}
        className={`lg:hidden flex absolute right-2  items-center justifiy-center mr-2`}
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
