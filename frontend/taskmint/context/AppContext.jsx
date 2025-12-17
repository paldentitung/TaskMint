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
  const createTask = async (data) => {
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    (await res).json();
    getTasks();
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    getTasks();
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
        createTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
