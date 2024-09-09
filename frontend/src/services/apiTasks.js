import axios from 'axios';

// URL base
const API_BASE_URL = 'http://localhost:3000/tasks'

// config 
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Função para buscar as tarefas do usuário logado
export const fetchTasks = async (userId) => {
    try {
        const response = await api.get(`/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Falha ao consultar suas tarefas.')
    }
};