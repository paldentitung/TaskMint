import React from "react";
import Button from "./Button";
const Header = ({ title, subtitle }) => {
  return (
    <header className="p-6  w-full border-b border-b-gray-700 flex justify-between items-center ">
      <div>
        {" "}
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <h3 className="text-gray-300">{subtitle}</h3>
      </div>
      <div>
        <Button name="Get Started" />
      </div>
    </header>
  );
};

export default Header;
