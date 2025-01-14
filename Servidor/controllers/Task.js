const Task = require("../models/task.js");//coleccion de tareas

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks); 
        console.log(tasks);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const createTask = async(req, res) => {
    try{

        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
        
    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

const updateTask = async(req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message: error.message});
    }
    
}

const deleteTask = async(req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}



module.exports = {getAllTasks, createTask, updateTask, deleteTask};