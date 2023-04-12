import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
});
const getPosts = () => {
    return axiosInstance.get('/posts');
}
const getUsers = () => {
    return axiosInstance.get('/users');
}
export {getPosts, getUsers}