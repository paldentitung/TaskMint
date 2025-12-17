import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Modal from "./Modal";
import Button from "./Button";

const AddTaskModal = () => {
  const { showModal, setShowModal, createTask } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !priority || !dueDate) {
      alert("All fields are required");
      return;
    }

    createTask({ title, priority, dueDate });

    // reset + close
    setTitle("");
    setPriority("");
    setDueDate("");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <Modal>
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
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <Button name="Add Task" type="submit" />
      </form>
    </Modal>
  );
};

export default AddTaskModal;
