const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/TaskData.json");

const getTasks = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

exports.getAllTasks = (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
};
