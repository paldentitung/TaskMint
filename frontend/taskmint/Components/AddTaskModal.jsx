import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Button from "./Button";

const AddTaskModal = ({ task }) => {
  const { createTask, setShowModal, updateTask } = useContext(AppContext);

  const [title, setTitle] = useState(task?.title || "");
  const [priority, setPriority] = useState(task?.priority || "");
  const [dueDate, setDueDate] = useState(task?.dueDate || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !priority || !dueDate) {
      alert("All fields are required");
      return;
    }

    if (task) {
      updateTask(task.id, { title, priority, dueDate });
    } else {
      createTask({ title, priority, dueDate });
    }

    setTitle("");
    setPriority("");
    setDueDate("");
    setShowModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 bg-neutral-900 flex flex-col gap-5"
    >
      <h3>Add Task</h3>

      <input
        type="text"
        placeholder="Go Gym..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 bg-neutral-800 rounded-md"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-3 bg-neutral-800 rounded-md"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-3 bg-neutral-800 rounded-md"
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <Button name="Add Task" type="submit" />
    </form>
  );
};

export default AddTaskModal;
