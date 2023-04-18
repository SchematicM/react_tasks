import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postsAndCommentService = {
    getPosts :  () => axiosService.get(urls.posts),
    getPostById :  (post_id) => axiosService.get(urls.posts+`/${post_id}`),
    getComments : (post_id) => axiosService.get(urls.comments+`?postId=${post_id}`),
    createComment :(comment) => axiosService.post(urls.comments, comment)
}
export {postsAndCommentService}