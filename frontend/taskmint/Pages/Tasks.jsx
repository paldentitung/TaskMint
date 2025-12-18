import React from "react";
import Header from "../Components/Header";
import TasksList from "../Components/TasksList";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AddTaskModal from "../Components/AddTaskModal";
const Tasks = () => {
  const {
    setShowModal,
    setModalContent,
    searchQuery,
    setSearchQuery,
    setPriorityFilter,
    priorityFilter,
    statusFilter,
    setStatusFilter,
  } = useContext(AppContext);
  return (
    <div>
      <Header title="Tasks" subtitle="All your Task " />
      <section className="p-6 flex flex-col gap-10">
        {/* search bar */}
        <section>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Task Here ...."
            className=" w-full text-sm p-4 rounded-md outline-0 ring-2 ring-gray-400 transition-all duration-300 focus:ring-indigo-400"
          />
        </section>
        {/* filtering the task */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Filter the Task</h3>
          <div className="flex justify-between gap-3">
            <div className="flex-1">
              <select
                name=""
                id=""
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full p-2 bg-neutral-900 rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              >
                <option value="">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                name=""
                id=""
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full p-2 bg-neutral-900 rounded-md ring-2  ring-gray-400 border-0 outline-0 transition-all duration-300 focus:ring-indigo-400"
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </section>
        {/* task */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            {" "}
            <h3 className="text-lg font-semibold">Tasks</h3>
            <button
              onClick={() => {
                setShowModal(true);
                setModalContent(<AddTaskModal />);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium rounded-md shadow-md transition-all duration-200 ring-1 ring-indigo-400 hover:ring-indigo-500 hover:cursor-pointer"
            >
              <FaPlus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </div>

          <TasksList />
        </section>
      </section>
    </div>
  );
};

export default Tasks;
