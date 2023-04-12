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
const getUserPosts = (userId) => {
    return axiosInstance.get(`/users/${userId}/posts`);
}

export {getPosts, getUsers, getUserPosts}