import React, { useContext } from "react";
import Header from "../Components/Header";
import {
  FaPlus,
  FaClipboardList,
  FaTags,
  FaEdit,
  FaTrash,
  FaCircle,
} from "react-icons/fa";
import Modal from "../Components/Modal";
import { Link } from "react-router";
import Button from "../Components/Button";
import { AppContext } from "../context/AppContext";
import TasksList from "../Components/TasksList";
import { useState } from "react";
const Home = () => {
  const OverviewCards = [
    {
      id: 1,
      cardName: "Completed",
      Task: 3,
    },
    {
      id: 2,
      cardName: "Pending",
      Task: 9,
    },
    {
      id: 3,
      cardName: "High Priority",
      Task: 10,
    },
    {
      id: 4,
      cardName: "Due Today",
      Task: 4,
    },
  ];
  const { showModal, setShowModal } = useContext(AppContext);

  return (
    <section className="w-full ">
      <Header title="Home" subtitle="Hers's your Productivity overview" />
      <section className="p-6 flex flex-col gap-10">
        {/* overview cards */}
        <section className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Overview Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
            {OverviewCards.map((card) => (
              <div
                key={card.id}
                className="bg-[rgb(31,31,31)] flex flex-col gap-2 p-4 transition-all duration-500  rounded-md hover:bg-[rgb(50,50,50)] "
              >
                <span className="text-gray-400">{card.cardName}</span>
                <span className="text-3xl">{card.Task}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Quick Actions sections */}
        <section className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Actons</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Task */}
            <button
              onClick={() => setShowModal(true)}
              className="
        bg-neutral-900 border border-neutral-800
        p-6 rounded-xl text-left
        hover:border-neutral-700 hover:bg-neutral-800
        transition-all duration-300 hover:cursor-pointer
      "
            >
              <div className="text-xl mb-2">
                <FaPlus />
              </div>
              <h3 className="font-medium">Add New Task</h3>
              <p className="text-sm text-gray-400 mt-1">
                Create a task and set priority
              </p>
            </button>

            {/* View Tasks */}
            <button
              className="
        bg-neutral-900 border border-neutral-800
        p-6 rounded-xl text-left
        hover:border-neutral-700 hover:bg-neutral-800
        transition-all duration-300 hover:cursor-pointer
      "
            >
              <Link to="/tasks">
                <div className="text-xl mb-2">
                  <FaClipboardList />
                </div>
                <h3 className="font-medium">View All Tasks</h3>
                <p className="text-sm text-gray-400 mt-1">
                  See and manage your task list
                </p>
              </Link>
            </button>

            <button
              className="
        bg-neutral-900 border border-neutral-800
        p-6 rounded-xl text-left
        hover:border-neutral-700 hover:bg-neutral-800
        transition-all duration-300 hover:cursor-pointer
      "
            >
              <div className="text-xl mb-2">
                <FaTags />
              </div>
              <h3 className="font-medium">Categories</h3>
              <p className="text-sm text-gray-400 mt-1">
                Organize tasks by type
              </p>
            </button>
          </div>
        </section>

        {/* recent tasks */}
        <section className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Recent Tasks </h3>
          <div>
            <TasksList />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
