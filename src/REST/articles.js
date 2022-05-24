import axios from 'axios';

//const URL = 'https://swapi.dev/api';
const URL = 'http://localhost:1337/api';

export async function getArticles() {
    const response = await axios.get(`${URL}/articles`);
    console.log(response.data);
    return response.data;
}