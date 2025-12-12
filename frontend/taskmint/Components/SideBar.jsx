import React from "react";
import { FaHome, FaTasks, FaCog } from "react-icons/fa";
import { NavLink } from "react-router";
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
  return (
    <div className="h-screen w-[320px] bg-[rgb(31,31,31)] flex flex-col gap-8 p-4">
      <div className="flex items-center gap-1 p-2">
        <span className="bg-green-400 text-gray-700 p-2 rounded-full">TM</span>
        <h1 className="text-2xl text-green-400 font-semibold">TaskMint</h1>
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
