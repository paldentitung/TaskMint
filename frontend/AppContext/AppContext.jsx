import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <AppContext.Provider value={{ setSidebarOpen, sidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};
