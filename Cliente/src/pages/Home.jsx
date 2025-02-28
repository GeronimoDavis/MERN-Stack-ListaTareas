import React, {useState} from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
    cosnt [taskToEdit, setTaskToEdit] = useState(null);

    const handleEdit = (task) => {
        setTaskToEdit(task);
    };

    const handleToDelete = async (taskId) =>{
        try{
            await axios.delete(`http://localhost:4000/api/tasks/${taskId}`);
            setTaskToEdit(null);//Limpiar el formulario
        }catch(error){
            console.error('Error deleting task:', error);
        }

        const handleSave = () => {
            setTaskToEdit(null);//Limpiar el formulario
        };

        return(
            <div>
                <h1>Lista de Tareas</h1>
                <taskForm taskToEdit={taskToEdit} onSave={handleSave}></taskForm>
                <taskList onEdit={handleEdit} onDelete={handleToDelete}></taskList>
            </div>
        )
    }
    
}

export default Home;