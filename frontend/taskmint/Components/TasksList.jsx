import React, { useContext } from "react";
import { FaEdit, FaTrash, FaCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const TasksList = () => {
  const { data, deleteTask } = useContext(AppContext);
  return (
    <div className="space-y-3">
      {data.map((task, index) => (
        <div
          key={task.id}
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
              onClick={() => deleteTask(task.id)}
              className="transition-all duration-500 hover:cursor-pointer hover:text-red-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
