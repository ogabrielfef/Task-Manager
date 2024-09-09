import axios from 'axios';

// URL base
const API_BASE_URL = 'http://localhost:3000/user'

// config
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Função de login
export const UserLogin = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Falha na autenticação. Verifique suas credenciais.');
    }
};

// Função de registrar usuário.
export const UserRegister = async (email, password) => {
    try {
        const response = await api.post('/register', { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Falha no cadastramento. Verifique suas credenciais.');
    }
};

// Função de logout
export const UserLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');

    
};