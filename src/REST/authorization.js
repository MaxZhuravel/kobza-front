import axios from 'axios';

// Request API.
export async function getAuth(identifier,password){
    axios.post('http://localhost:1337/api/auth/local', {
        identifier,
        password
    })
    .then((response) => {
        // Handle success.
        console.log('Well done!');
        //console.log('User profile', response.data.user);
        //console.log('User token', response.data.jwt);
        localStorage.setItem('kobza-jwt',response.data.jwt);
        return response.data;
    })
    .catch((error) => {
    // Handle error.
        localStorage.removeItem('kobza-jwt');
        console.log(localStorage.getItem('kobza-jwt'));
        console.log('An error occurred:', error.response);
    });
}

export async function registration(e,username,email,password){
    e.preventDefault();
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
    })
    .catch((error) => {
    // Handle error.
        console.log('An error occurred:', error.response);
    });
}