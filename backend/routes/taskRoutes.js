const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
