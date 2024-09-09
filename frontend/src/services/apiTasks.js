import axios from 'axios';

// URL base
const API_BASE_URL = 'http://localhost:3000/tasks'

// config 
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Função para buscar as tarefas do usuário logado
export const fetchTasks = async (userId, token) => {
    try {
        const response = await api.get(`/${userId}`, {
            headers: {    
                'Authorization': token,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error('Falha ao consultar suas tarefas.')
    }
};

export const createNewTask = async (userId, title, task, completed, token) => {

    const requestData = {
        userId,
        title,
        task,
        completed
    };

    try {
        const response = await api.post('/', requestData, {
            headers: {    
                'Authorization': token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao tentar criar tarefa.');
    }
};

export const updateTask = async (taskId, title, task, completed, token) => {
    try {
        const response = await api.put(`/${taskId}`, {
            title,
            task,
            completed
        }, {
            headers: {    
                'Authorization': token,
            },
        });
        return response;
    } catch (error) {
        throw new Error('Falha ao tentar editar tarefa.');
    }

};

export const deleteTask = async (taskId, token) => {
    try {
        const response = await api.delete(`/${taskId}`, {
            headers: {    
                'Authorization': token,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Falha ao tentar excluir tarefa.');
    }
};