import axios from 'axios';

// URL base
const API_BASE_URL = 'http://localhost:3000/tasks'

// config 
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Função para buscar usuário pelo id
export const fetchUserById = async (userId) => {
    try {
        const response = await api.get(`/${userId}`)
    } catch (error) {
        throw new Error('No momento não foi possível consultar esse usuário.')
    }
};