import { FaHome, FaTasks, FaCog, FaLandmark } from "react-icons/fa";
import { NavLink } from "react-router";
import { useContext, useState } from "react";

import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
const SideBar = () => {
  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
      icon: FaHome,
    },
    {
      id: 2,
      link: "/tasks",
      name: "Tasks",
      icon: FaTasks,
    },
    {
      id: 3,
      link: "/setting",
      name: "Settings",
      icon: FaCog,
    },
  ];
  const { setSidebarOpen, sidebarOpen } = useContext(AppContext);
  return (
    <div
      className={`h-screen bg-[rgb(31,31,31)] flex-col gap-8 p-4  transition-all duration-300
    ${sidebarOpen ? "flex w-[320px]" : "hidden w-0"} md:flex`}
    >
      <div className="flex items-center justify-between gap-1 p-2">
        <div className="flex gap-1 items-center">
          {" "}
          <span className="bg-indigo-400  p-2 text-white rounded-full">TM</span>
          <h1 className="text-2xl  font-semibold">TaskMint</h1>
        </div>
        <div
          className="block md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaTimes size={20} />
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <li
                key={link.id}
                className="  transition-all duration-300 hover:cursor-pointer hover:bg-[rgb(40,40,40)]  "
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) => {
                    return `flex-1 flex gap-2 items-center transition-all duration-300  p-3 ${
                      isActive ? "bg-[rgb(48,48,48)]" : " opacity-75"
                    }`;
                  }}
                >
                  <Icon size={20} />

                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
