import axios from 'axios';

const URL = 'http://localhost:1337/api';
const token = localStorage.getItem('kobza-jwt');
const api = axios.create({baseURL:URL});

export async function getConversations() {
    const response = await api.get(`/conversations`);
    return response.data;
}
export async function getOneConversation(id) {
    const response = await api.get(`/conversations/${id}`);
    console.log(response.data);
    return response.data;
}