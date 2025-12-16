const express = require("express");
const router = express.Router();
const { getAllTasks, createTask } = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/", createTask);

module.exports = router;
