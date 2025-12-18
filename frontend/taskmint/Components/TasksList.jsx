import React, { useContext } from "react";
import { FaEdit, FaTrash, FaCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import DeleteTaskMessage from "./DeleteTaskMessage";
import AddTaskModal from "./AddTaskModal";
const TasksList = () => {
  const {
    data,
    deleteTask,
    setShowModal,
    deleteId,
    setDeleteId,
    setModalContent,
    updateTask,
    toggleCompleteTask,
  } = useContext(AppContext);

  const priorityColors = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  return (
    <div className="space-y-3">
      {data.map((task, index) => (
        <div
          key={task.id}
          className="bg-neutral-900 p-3 rounded-md flex justify-between items-center
          hover:bg-neutral-700 transition-all duration-300 shadow-md"
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleteTask(task)}
            />
          </div>
          <div className="flex flex-col gap-1 mr-auto ml-4">
            <span
              className={`font-semibold ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <FaCircle className={priorityColors[task.priority]} size={12} />
              {task.priority} • Due: {task.dueDate}
            </span>
          </div>

          <div className="flex gap-4">
            <FaEdit
              size={20}
              onClick={() => {
                setShowModal(true);
                setModalContent(<AddTaskModal task={task} />);
              }}
              className="transition-all duration-500 hover:cursor-pointer hover:text-blue-500"
            />
            <FaTrash
              size={20}
              onClick={() => {
                setDeleteId(task.id);
                setModalContent(<DeleteTaskMessage deleteId={deleteId} />);
                setShowModal(true);
              }}
              className="transition-all duration-500 hover:cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
