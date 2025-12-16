import React, { useContext } from "react";
import { FaEdit, FaTrash, FaCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const tasks = [
  { title: "Go Gym", priority: "High", color: "red-500", due: "Dec 15, 2025" },
  {
    title: "Finish Project Report",
    priority: "Medium",
    color: "yellow-500",
    due: "Dec 18, 2025",
  },
  {
    title: "Team Meeting",
    priority: "Low",
    color: "green-500",
    due: "Dec 20, 2025",
  },
  {
    title: "Prepare Presentation",
    priority: "High",
    color: "red-500",
    due: "Dec 16, 2025",
  },
  {
    title: "Read Documentation",
    priority: "Medium",
    color: "yellow-500",
    due: "Dec 21, 2025",
  },
  {
    title: "Code Review",
    priority: "High",
    color: "red-500",
    due: "Dec 17, 2025",
  },
  {
    title: "Client Call",
    priority: "Low",
    color: "green-500",
    due: "Dec 22, 2025",
  },
  {
    title: "Write Blog Post",
    priority: "Medium",
    color: "yellow-500",
    due: "Dec 19, 2025",
  },
];

const TasksList = () => {
  const { data } = useContext(AppContext);
  return (
    <div className="space-y-3">
      {data.map((task, index) => (
        <div
          key={index}
          className="bg-neutral-900 p-3 rounded-md flex justify-between items-center
          hover:bg-neutral-700 transition-all duration-300 shadow-md"
        >
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{task.title}</span>
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <FaCircle className={`text-${task.color}`} size={12} />
              {task.priority} • Due: {task.dueDate}
            </span>
          </div>

          <div className="flex gap-4">
            <FaEdit
              size={20}
              className="transition-all duration-500 hover:cursor-pointer hover:text-blue-500"
            />
            <FaTrash
              size={20}
              className="transition-all duration-500 hover:cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
