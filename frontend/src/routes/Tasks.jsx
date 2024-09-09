import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { fetchTasks, updateTask, deleteTask } from "../services/apiTasks";
import TaskForm from "../components/createNewTask";
import EditTaskModal from "../components/EditTaskModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const TasksPage = () => {
    const { auth } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [taskToDelete, setTaskToDelete] = useState(null);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('authToken');

    // lista tarefas.
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

    // atualiza lista após adicionar uma tarefa
    const handleAddTask = async () => {
        try {
            loadTasks();
        } catch (err) {
            setError('Failed to add task: ' + err.message);
        }
    };

    // edição de uma tarefa
    const openEditModal = (task) => {
        setEditingTask(task);
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
        setEditingTask(null);
    };

    const handleSaveChanges = async (updatedTask) => {
        try {
            await loadTasks();  
            closeEditModal();
        } catch (err) {
            setError('Failed to edit task: ' + err.message);
        }
    };

    // exclusão de uma tarefa
    const openDeleteModal = (task) => {
        setTaskToDelete(task);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setTaskToDelete(null);
    };

    const handleDeleteTask = async () => {
        try {
            if (taskToDelete) {
                await deleteTask(taskToDelete.id, token);
                await loadTasks();
                closeDeleteModal();
            }
        } catch (err) {
            setError('Failed to delete task: ' + err.message);
        }
    };

    // marca a tarefa como concluida.
    const handleCheckBoxChange = async (task) => {
        try {
            const newStatus = !task.completed;
            await updateTask(task.id, task.title, task.tasks, newStatus, token);
            await loadTasks();
        } catch (err) {
            setError('Failed to update task status: ' + err.message);
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
                            <button onClick={() => openEditModal(task)}>Editar</button>
                            <button onClick={() => openDeleteModal(task)}>Apagar</button>
                            <label>
                                Concluido:
                                <input 
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleCheckBoxChange(task)}
                                />
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
            <EditTaskModal
                isOpen={isModalOpen}
                onRequestClose={closeEditModal}
                task={editingTask}
                onSave={handleSaveChanges}
            />
            <ConfirmDeleteModal
                isOpen={isDeleteModalOpen}
                onRequestClose={closeDeleteModal}
                onConfirm={handleDeleteTask}
            />
        </div>
    );
};

export default TasksPage;