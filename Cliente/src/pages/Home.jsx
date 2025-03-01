import React, {useState} from "react";
import TaskList from "../componentes/TaskList.jsx";
import TaskForm from "../componentes/TaskForm.jsx";
import axios from "axios";

const Home = () => {
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const handleToDelete = async (taskId) =>{
        try{
            await axios.delete(`http://localhost:5001/api/tasks/${taskId}`);
            setTaskToEdit(null);//Limpiar el formulario
        }catch(error){
            console.error('Error deleting task:', error);
        }

    }

    const handleSave = () => {
        setTaskToEdit(null);//Limpiar el formulario
    };

    return(
        <div>
            <h1>Crear una tarea</h1>
            <TaskForm taskToEdit={taskToEdit} onSave={handleSave}></TaskForm>
            <TaskList onEdit={handleEdit} onDelete={handleToDelete}></TaskList>
        </div>
    )
    
}

export default Home;