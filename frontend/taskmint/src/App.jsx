import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Tasks from "../Pages/Tasks";
import Setting from "../Pages/Setting";
import { Route, Routes } from "react-router";
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/tasks"
        element={
          <MainLayout>
            <Tasks />
          </MainLayout>
        }
      />{" "}
      <Route
        path="/setting"
        element={
          <MainLayout>
            <Setting />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
