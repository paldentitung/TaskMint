import React, { useContext } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
const Header = ({ title, subtitle }) => {
  const { sidebarOpen, setSidebarOpen, userData } = useContext(AppContext);
  return (
    <header className="p-6  w-full border-b border-b-gray-700 flex justify-between items-center  relative">
      <div className="flex gap-3 items-center">
        {" "}
        <div className="block md:hidden">
          <button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
              console.log("clicked");
            }}
          >
            <FaBars size={20} />
          </button>
        </div>
        <div>
          {" "}
          <h1 className=" md:text-2xl font-semibold ">{title}</h1>
          <h3 className="text-gray-300 text-sm md:text-md">{subtitle}</h3>
        </div>
      </div>
      <div>
        {userData ? (
          <>
            <Link to="/setting" className="flex items-center gap-3">
              <FaUser size={20} />
              <p>{userData.username}</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/setting">
              {" "}
              <Button name="Get Started" />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
