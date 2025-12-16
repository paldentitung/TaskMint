import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const getTasks = async () => {
    const res = await fetch("http://localhost:3000/api/tasks");
    const data = await res.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <AppContext.Provider
      value={{
        setSidebarOpen,
        sidebarOpen,
        setShowModal,
        showModal,
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
