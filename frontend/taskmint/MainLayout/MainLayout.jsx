import React from "react";
import SideBar from "../Components/SideBar";
const MainLayout = ({ children }) => {
  return (
    <main className="  bg-[rgb(25,25,25)] text-white ">
      <aside className="  h-screen w-[320px]  border-r border-white">
        <SideBar />
      </aside>
      <section>{children}</section>
    </main>
  );
};

export default MainLayout;
