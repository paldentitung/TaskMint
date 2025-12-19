import React from "react";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const DeleteTaskMessage = ({ deleteId }) => {
  const { setShowModal, deleteTask } = useContext(AppContext);

  const handleDelete = (id) => {
    deleteTask(id);
    setShowModal(false);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-3 ring-1 h-42 bg-neutral-800 text-white shadow-lg ring-gray-800 rounded-md">
      <p>Are you sure?</p>

      <div className="flex gap-3 items-center">
        <Button name="Cancel" onClick={() => setShowModal(false)} />
        <button
          onClick={() => handleDelete(deleteId)}
          className="bg-rose-400 text-gray-50 px-6 py-2 rounded-md shadow  transition-all duration-300  opacity-85 hover:cursor-pointer active:opacity-50 hover:opacity-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteTaskMessage;
