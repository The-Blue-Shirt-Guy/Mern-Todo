const Tasks = require("../models/task");
const mongoose = require("mongoose");

const getTasks = async (req, res) => {
  const allTask = await Tasks.find({});
  res.status(200).json(allTask);
};

const createTask = async (req, res) => {
  const { title, task } = req.body;

  if (!title || !task) {
    return res.status(400).json({ msg: "please fill all fields" });
  }
  const Task = await Tasks.create({ title, task, completed });

  res.status(200).json({ Task });
};

const DeleteTask = async (req, res) => {
  const id = req.params.id;
  if (!id || !mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "please send valid id" });
  }

  const task = await Tasks.findByIdAndDelete(id);

  res.status(200).json({ task });
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, task } = req.body;
  if (!id || !mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: "please send valid id" });
  }

  const Task = await Tasks.findByIdAndUpdate({ _id: id }, { task, title });

  res.status(200).json({ Task });
};

module.exports = {
  getTasks,
  createTask,
  DeleteTask,
  updateTask,
};
