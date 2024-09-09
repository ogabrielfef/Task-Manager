import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { fetchTasks } from "../services/apiTasks";

const TasksPage = () => {
    const { auth } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');

    useEffect(() => {
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

        loadTasks();
    }, [auth, userId, token]);

    return (
        <div>
            {error && <span>{error}</span>}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.tasks}</p>
                        <input type="checkbox" checked={task.completed}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksPage;