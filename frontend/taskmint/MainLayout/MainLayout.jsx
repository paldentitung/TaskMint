import React, { useState } from "react";
import SideBar from "../Components/SideBar";
const MainLayout = ({ children }) => {
  return (
    <main className="  bg-[rgb(25,25,25)] text-white flex flex-col md:flex-row  ">
      <aside className="h-screen  w-[320px]  fixed border-r border-white">
        <SideBar />
      </aside>
      <section className="h-screen ml-80 w-full ">{children}</section>
    </main>
  );
};

export default MainLayout;
