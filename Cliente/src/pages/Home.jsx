import React, {useState} from "react";
import TaskList from "../componentes/TaskList";
import TaskForm from "../componentes/TaskForm";

const Home = () => {
    const [taskToEdit, setTaskToEdit] = useState(null);

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
                <TaskForm taskToEdit={taskToEdit} onSave={handleSave}></TaskForm>
                <TaskList onEdit={handleEdit} onDelete={handleToDelete}></TaskList>
            </div>
        )
    }
    
}

export default Home;