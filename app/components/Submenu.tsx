import React from "react";

type List = {
  list: Array<string>;
};

const SubMenu = ({ list }: List): JSX.Element => {
  return (
    <div className='absolute submenu  top-7 px-7 py-4 w-auto opacity-0 h-0  bg-white font-normal text-header-color rounded-[10px]'>
      <ul className='flex flex-col space-y-5  items-center '>
        {list.map((item) => (
          <li
            key={item}
            className='border-b  hover:text-fuchsia-600 hover:opacity-60 text-[18px] font-medium  border-header-color w-[95%] text-center pb-2'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
