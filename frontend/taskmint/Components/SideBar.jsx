import React from "react";
import { FaHome, FaTasks, FaCog } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="h-screen w-[320px] bg-[rgb(31,31,31)] flex flex-col gap-5 p-4">
      <div className="flex items-center gap-1">
        <span className="bg-green-400 text-gray-700 p-2 rounded-full">TM</span>
        <h1 className="text-2xl text-green-400 font-semibold">TaskMint</h1>
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          <li className="flex items-center gap-3  transition-all duration-300 hover:cursor-pointer hover:bg-[rgb(40,40,40)] p-3  ">
            <FaHome size={20} />
            Home
          </li>
          <li className="flex  items-center gap-3  transition-all duration-300 hover:cursor-pointer hover:bg-[rgb(40,40,40)] p-3 ">
            <FaTasks size={20} />
            Task
          </li>
          <li className="flex items-center gap-3  transition-all duration-300 hover:cursor-pointer hover:bg-[rgb(40,40,40)] p-3 ">
            <FaCog size={20} />
            Setting
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
