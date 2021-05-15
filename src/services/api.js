import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);

const getUsers = () => {
    console.log('getUsers');
    return axiosInstance.get('/users'); // promise
};


const getPosts = () => axiosInstance.get('/posts');

export {
    getUsers,  axiosInstance, getPosts}