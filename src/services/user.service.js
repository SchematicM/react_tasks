import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getUsers :  () => axiosService.get(urls.users),
    postUser : (user) => axiosService.post(urls.users,user)
}
export {userService}