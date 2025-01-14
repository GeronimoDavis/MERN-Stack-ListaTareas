const mongoose = require("mongoose");
const route = require("express").Router();
const {getAllTasks, 
    createTask, 
    updateTask, 
    deleteTask} = require("../controllers/task.js");

route.get("/", getAllTasks);
route.post("/", createTask);
route.put("/:id", updateTask);
route.delete("/:id", deleteTask);

module.exports = route;