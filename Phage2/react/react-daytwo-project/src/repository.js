import axios from 'axios';

export function login(data){
    return axios.get('http://localhost:5001/users')
    .then(response => {
         console.log(response.data);
        for (var user of response.data) {
            if (user.username === data.username && user.password === data.password) {
                localStorage.setItem('isloggedIn','true');
                localStorage.setItem('username',data.username);
                break;
            }
        }
    }).catch(error => {
        Promise.reject('Authentication Failed');
    }
    );

}

export const isAuthenticated = () => {
    return localStorage.getItem('isloggedIn') && localStorage.getItem('username');
}

export const Logout = () => {
    console.log('logout');
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('username');
}

export const register = (data) => {
    return axios.post('http://localhost:5001/users',data)
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        Promise.reject('Registration Failed');
    }
    );
}