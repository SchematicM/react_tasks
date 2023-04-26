import axiosService from "./axios.service";
import {partUrl} from "../configs/urls";

const typicodeService = {
    getComments: () => axiosService.get(partUrl.comments),
    getPosts: () => axiosService.get(partUrl.posts),
}

export default typicodeService;
