import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tasks");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
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
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
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
        deleteId,
        setDeleteId,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
