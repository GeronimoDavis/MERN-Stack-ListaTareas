import {useState, useEffect} from "react";
import axios from "axios";

const TaskList = ({onEdit, onDelete, refresh}) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const response = await axios.get("http://localhost:5001/api/tasks");
                setTasks(response.data);
            }catch(error){
                console.log('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, [refresh]); //Forzara a que se ejecute el useEffect cada vez que se actualice la variable refresh

    return(
        <>
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <span>{task.title}: </span>
                        <span>{task.description}</span>
                        <button onClick={() => onEdit(task)} style={{marginLeft: "10px"}}>Editar</button>
                        <button onClick={() => onDelete(task._id)} style={{marginLeft: "10px"}}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default TaskList;