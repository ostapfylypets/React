import axiosInstance from "axios";
let options = {
    baseURL: 'https://jsonplaceholder.typicode.com',
};
axiosInstance.create(options)
const getPosts = () => {
    return axiosInstance.get('/posts');
}

const getUser = () => {
    return axiosInstance.get('/user');
}

export {
    getPosts,getUser,axiosInstance
}