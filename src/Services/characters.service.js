import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://rickandmortyapi.com/api',
    headers:{}
})
const getCharacters = () => {
    return axiosInstance.get('/character');
}
export {getCharacters}