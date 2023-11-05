import Link from "next/link";
import React from "react";

type List = {
  list: Array<listType>;
};

interface listType  {
  title: string,
  link: string
}

const SubMenu = ({ list }: List): JSX.Element => {
  return (
    <div className=' absolute submenu  z-50 top-7 px-7 py-4 w-auto opacity-0 h-0  bg-white font-normal text-header-color rounded-[10px]'>
      <ul className='flex flex-col space-y-5  items-center '>
        {list.map((item, i) => (
          <li
            key={i}
            className='border-b  hover:text-fuchsia-600 hover:opacity-60 text-[18px] font-medium  border-header-color w-[95%] text-center pb-2'
          >
            <Link href={item.link} className=" capitalize">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
