const task = require("./models/Task");//coleccion de tareas

const getAllTasks = async (req, res) => {
    try{
        const tasks = await task.find();
        res.status(200).json(tasks);
        console.log(tasks);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const createTask = async(req, res) => {
    try{

        const task = new task(req.body);
        await task.save();
        res.status(201).json(task);
        
    }catch(error){
        res.status(500).json({message: error.message});
    }
}



module.exports = {getAllTasks};