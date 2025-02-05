import React from "react";
import { MdFastfood } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

function Nav() {
  return (
    <div className="w-full h-[80px] flex justify-between items-center px-8">
      <div className="w-[60px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-400" />
      </div>
      <form className="w-[70%] h-[50px] bg-white flex items-center px-5 gap-5 shadow-md w-[20px] h-[20px] rounded">
        <CiSearch className=" text-green-400"/>
        <input
          type="text"
          placeholder="Search here.."
          className="w-[100%] outline-none text-[20px]"
        />
      </form>
      <div className="w-[60px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <span className="absolute top-0 right-1 text-green-400 font-bold">0</span>
        <FaCartArrowDown className="w-[30px] h-[30px] text-green-400" />
      </div>
    </div>
  );
}

export default Nav;
