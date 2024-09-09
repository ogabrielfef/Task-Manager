import React, { useState } from "react";
import { createNewTask } from "../services/apiTasks";

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const completed = false;
    const token = localStorage.getItem('authToken');

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
            setError('Falha ao tentar criar tarefa.');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Nova Tarefa</h2>
            <div className="space-y-4">
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título da tarefa"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição da tarefa"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddTask}
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Adicionar tarefa
                </button>
            </div>
            {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
        </div>
    );
};

export default TaskForm;