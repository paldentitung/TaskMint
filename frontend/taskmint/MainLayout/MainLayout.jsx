import React, { useContext } from "react";
import SideBar from "../Components/SideBar";
import { AppContext } from "../context/AppContext";
import Modal from "../Components/Modal";
import { Toaster } from "react-hot-toast";
const MainLayout = ({ children }) => {
  const { sidebarOpen } = useContext(AppContext);

  return (
    <main className="bg-[rgb(25,25,25)] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50
          transition-all duration-300
          ${sidebarOpen ? "w-[320px]" : "w-0 overflow-hidden"}
        `}
      >
        <SideBar />
      </aside>

      {/* Main content */}
      <section
        className={`min-h-screen transition-all duration-300
          ${sidebarOpen ? "ml-0 md:ml-80" : "ml-0"} w-full`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Modal /> {children}
      </section>
    </main>
  );
};

export default MainLayout;
