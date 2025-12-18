import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const updateTask = async (id, data) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update task");
      getTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    getTasks();
  };
  const toggleCompleteTask = async (task) => {
    // 1️⃣ Update UI immediately
    setData((prevData) =>
      prevData.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );

    // 2️⃣ Update backend (async)
    try {
      await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: task.title,
          priority: task.priority,
          dueDate: task.dueDate,
          completed: !task.completed,
        }),
      });
    } catch (err) {
      console.error("Failed to update task:", err);
      // Optionally revert UI change if API fails
      setData((prevData) =>
        prevData.map((t) =>
          t.id === task.id ? { ...t, completed: task.completed } : t
        )
      );
    }
  };

  const filterTaskData = data.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        updateTask,
        toggleCompleteTask,
        filterTaskData,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
