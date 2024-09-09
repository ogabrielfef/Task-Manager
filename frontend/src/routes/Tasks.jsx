import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { fetchTasks } from "../services/apiTasks";
import TaskForm from "../components/createNewTask";

const TasksPage = () => {
    const { auth } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');

    const loadTasks = async () => {
        if (auth) {
            try {
                const taskData = await fetchTasks(userId, token);
                setTasks(taskData);
            } catch (err) {
                setError('Failed to load tasks: ' + err.message);
            }
        } else {
            setError('User not logged.')
        }
    };

    useEffect(() => {
        loadTasks();
    }, [auth, userId, token]);

    const handleAddTask = async (newTask) => {
        try {
            // Adiciona a nova tarefa ao estado
            loadTasks();
        } catch (err) {
            setError('Failed to add task: ' + err.message);
        }
    };

    return (
        <div>
            {error && <span>{error}</span>}
            <TaskForm onAddTask={handleAddTask} />
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div>
                            <h2>{task.title}</h2>
                            <p>{task.tasks}</p> 
                        </div>
                        <div>
                            <button>Editar</button>
                            <button>Apagar</button>
                            <input type="checkbox" checked={task.completed}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksPage;