import React, {useEffect, useState} from "react";
import axios from "axios";

const TaskForm = ({taskToEdit, onSave}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(taskToEdit){
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const task = {title, description};

        try {
            if(taskToEdit){
                await axios.put(`http://localhost:4000/api/tasks/${taskToEdit._id}`, task);
            }else{
                await axios.post("http://localhost:4000/api/tasks", task);
            }
            onSave();
        }catch (error) {
            console.error('Error saving task:',error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <imput type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <textarea placeholder="Description" value={descriprion} onChange={(e) => setDescription(e.target.value)} required></textarea> 
            <button type="submit">{taskToEdit ? "Actualizar" : "Crear"}</button>
        </form>
    )
}

export default TaskForm;