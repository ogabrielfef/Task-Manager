import React, { useState } from "react";
import { createNewTask } from "../services/apiTasks";

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const completed = false;
    const token = localStorage.getItem('authToken')

    const handleAddTask = async () => {
        try {
            if (!title || !description) {
                setError('Título e descrição são obrigatórios.');
                return;
            } 

            const createdTask = await createNewTask(userId, title, description, completed, token);

            setTitle('');
            setDescription('');
            setError('');

            onAddTask();
        } catch (err) {
            setError('Falha ao tentar criar tarefa.')
        }
    };

    return (
        <div>
            <div>
                <div>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título da tarefa"
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descrição da tarefa"
                    />
                </div>
                <div>
                    <button onClick={handleAddTask}>
                        Adicionar tarefa
                    </button>
                </div>
            </div>
            {error && <span>{error}</span>}
        </div>
    );
};

export default TaskForm;