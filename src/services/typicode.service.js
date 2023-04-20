import {axiosInstance} from "./axios.service";
import {albums, comments, posts, todo} from "../configs/urls";

const typicodeService = {
    getToDo: () => axiosInstance.get(todo),
    getAlbums: () => axiosInstance.get(albums),
    getComments: () => axiosInstance.get(comments),
    getPostById: (id) => axiosInstance.get(`${posts}/${id}`)
}

export {typicodeService};