import axios from 'axios';
import CONFIG from './config';

const API_BASE_URL = `http://localhost:${CONFIG.API_PORT}/api`;

export const getGames = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games`);
        return response.data;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};
