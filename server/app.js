const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const notFound = require("./middleware/notFound");
const taskRouter = require("./routes/taskRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home route");
});

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/tasks", taskRouter);
app.use(notFound);

port = process.env.PORT;

module.exports = app;
