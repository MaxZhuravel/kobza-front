import axios from 'axios';

const URL = 'https://swapi.dev/api';

export async function getArticles() {
    const response = await axios.get(`${URL}/people`);
    return response.data;
}