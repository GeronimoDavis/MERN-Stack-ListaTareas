import React, {useEffect, useState} from "react";
import axios from "axios";

const TaskForm = ({taskToEdit, onSave}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(taskToEdit){
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        }else{
            // Limpiar el formulario si no hay tarea para editar
            setTitle("");
            setDescription("");
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const task = {title, description};
        console.log("handleSubmit ejecutado");
        try {
            if(taskToEdit){
                await axios.put(`http://localhost:5001/api/tasks/${taskToEdit._id}`, task);
                console.log("Tarea creada con éxito");
            }else{
                await axios.post("http://localhost:5001/api/tasks", task);
                console.log("Tarea creada con éxito");
            }
             //Limpiar los inputs después de crear o actualizar
            setTitle("");
            setDescription("");

            onSave();
        }catch (error) {
            console.error('Error saving task:',error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{marginBottom: "10px"}}required/>
            <br />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea> 
            <br />
            <button type="submit">{taskToEdit ? "Actualizar" : "Crear"}</button>
        </form>
    )
}

export default TaskForm;