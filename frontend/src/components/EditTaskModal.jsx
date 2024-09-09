import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { updateTask } from '../services/apiTasks';

Modal.setAppElement('#root');

const EditTaskModal = ({ isOpen, onRequestClose, task, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.tasks);
        }
    }, [task]);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const updatedTask = await updateTask(task.id, title, description, task.completed, token);
            onSave(updatedTask);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Tarefa"
            className="fixed inset-0 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
        >
            <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Editar Tarefa</h2>
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="title">
                            Título da tarefa:
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="description">
                            Descrição da tarefa:
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Salvar
                        </button>
                        <button
                            type="button"
                            onClick={onRequestClose}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditTaskModal;