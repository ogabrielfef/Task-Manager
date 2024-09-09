import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { fetchTasks, updateTask, deleteTask } from "../services/apiTasks";
import TaskForm from "../components/createNewTask";
import EditTaskModal from "../components/EditTaskModal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import NavBar from "../components/NavBar";

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
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <div className="max-w-4xl mx-auto">
                <TaskForm onAddTask={handleAddTask} />
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Tasks</h1>
                    <ul className="space-y-4">
                        {tasks.map(task => (
                            <li key={task.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center border border-solid">
                                <div className="flex flex-col max-w-70 break-words mr-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
                                    <p className="text-gray-600">{task.tasks}</p>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <label className="flex items-center space-x-2">
                                        <span className="text-gray-700">Concluída:</span>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleCheckBoxChange(task)}
                                            className="form-checkbox h-5 w-5 text-blue-500"
                                        />
                                    </label>
                                    <button
                                        onClick={() => openEditModal(task)}
                                        className="w-24 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => openDeleteModal(task)}
                                        className="w-24 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        Apagar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
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