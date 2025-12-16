const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => console.log("server running", PORT));
