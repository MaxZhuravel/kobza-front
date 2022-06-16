import axios from 'axios';

// Request API.
export async function getAuth(identifier,password){
    return axios.post('http://localhost:1337/api/auth/local', {
        identifier,
        password
    })
    .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('kobza-jwt',response.data.jwt);
        localStorage.setItem('kobza-user-id',response.data.user.id);
        localStorage.setItem('kobza-username',response.data.user.username);
        return response.data.user;
    })
    .catch((error) => {
    // Handle error.
        localStorage.removeItem('kobza-jwt');
        console.log('An error occurred:', error.response);
    });

}

export async function registration(username,email,password){
    axios.post('http://localhost:1337/api/auth/local/register', {
        username,
        email,
        password
    })
    .then((response) => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('kobza-jwt',response.data.jwt);
        localStorage.setItem('kobza-user',response.data.user);
        return response.data.user;
    })
    .catch((error) => {
    // Handle error.
        console.log('An error occurred:', error.response);
        return null;
    });
}