import React from "react";
import SideBar from "../Components/SideBar";
const MainLayout = ({ children }) => {
  return (
    <main className="  bg-[rgb(25,25,25)] text-white flex  ">
      <aside className="h-screen w-[320px]  fixed border-r border-white">
        <SideBar />
      </aside>
      <section className="h-screen ml-80 w-full ">{children}</section>
    </main>
  );
};

export default MainLayout;
