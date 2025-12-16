const fs = require("fs");
const path = require("path");
const { title } = require("process");
const { json } = require("stream/consumers");

const filePath = path.join(__dirname, "../data/TaskData.json");

const getTasks = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const saveTasks = (task) => {
  fs.writeFileSync(filePath, JSON.stringify(task, null, 2));
};

exports.getAllTasks = (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
};
exports.createTask = (req, res) => {
  const tasks = getTasks();
  const { title, priority, dueDate, IsCompleted } = req.body;

  if ((!title || !priority || !dueDate, !IsCompleted)) {
    res.status(201).json({
      message: "Invalid Input",
    });
  }
  const newTask = {
    id: Date.now(),
    title,
    priority,
    dueDate,
    IsCompleted,
  };

  tasks.push(newTask);

  saveTasks(tasks);

  res.status(200).json({ message: "Task Created" });
};
