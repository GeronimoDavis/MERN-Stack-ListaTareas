import React, {useState} from "react";
import TaskList from "../componentes/TaskList.jsx";
import TaskForm from "../componentes/TaskForm.jsx";
import axios from "axios";

const Home = () => {
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [refresh, setRefresh] = useState(false); // Estado para forzar actualización de la lista de tareas

    const handleEdit = (task) => {
        setTaskToEdit(task);
        setRefresh(prev => !prev);
    };

    const handleToDelete = async (taskId) =>{
        try{
            await axios.delete(`http://localhost:5001/api/tasks/${taskId}`);
            setTaskToEdit(null);
            setRefresh(prev => !prev);//Actualizar la lista de tareas
        }catch(error){
            console.error('Error deleting task:', error);
        }

    }

    const handleSave = () => {
        setTaskToEdit(null);
        setRefresh(prev => !prev);
    };

    return(
        <div>
            <h1>Crear una tarea</h1>
            <TaskForm taskToEdit={taskToEdit} onSave={handleSave}></TaskForm>
            <TaskList onEdit={handleEdit} onDelete={handleToDelete} refresh={refresh}></TaskList>
        </div>
    )
    
}

export default Home;