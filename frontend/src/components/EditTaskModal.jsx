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
            setDescription(task.tasks);
            setTitle(task.title);
        }
    }, [task]);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            // Atualiza a tarefa no banco de dados
            const updatedTask = await updateTask(task.id, title, description, task.completed, token);
            onSave(updatedTask);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Task">
            <h2>Editar Tarefa</h2>
            <form onSubmit={handleSave}>
                <label>
                    Título da tarefa:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Descrição da tarefa:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default EditTaskModal;