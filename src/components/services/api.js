import axiosInstance from "axios";
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
let getPosts = () => {
    return axiosInstance.get('/posts');
}

let getUser = () => {
    return axiosInstance.get('/user');
}

export {
    getPosts,getUser
}