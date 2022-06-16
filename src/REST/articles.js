import axios from 'axios';

//const URL = 'https://swapi.dev/api';
const URL = 'http://localhost:1337/api';
const token = localStorage.getItem('kobza-jwt');
const api = axios.create({baseURL:URL});
const user_permissions_user = 1;//localStorage.getItem('kobza-username')

export async function getArticles() {
    const response = await api.get(`/articles`);
    return response.data;
}

export async function getOneArticle(id) {
    const response = await api.get(`/articles/${id}`);
    console.log(response.data);
    return response.data;
}

export async function postArticle(Title,Body){    
    const config = {
        headers: {Authorization:`Bearer ${token}`}
    };
    const bodyParameters = {
        data:{
            Title,
            Body,
            user_permissions_user
        }
    };

    await api.post(`/articles`, 
        bodyParameters,config)
    .then(console.log("well done"))
    .catch((error)=>{
        console.log('An error occurred:', error.response);
    });
}
