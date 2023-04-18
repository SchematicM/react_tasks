import React, {useEffect, useState} from 'react';
import {postsAndCommentService} from "../services/postAndComments.service";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsAndCommentService.getPosts()
            .then(posts => posts.data)
            .then(posts => setPosts(posts))
    }, [])
    return (
        <div>
            <h2>All Posts: </h2>
            {  posts.map( post => <PostComponent post = {post} key = {post.id}/> )}

        </div>
    );
};

export default PostsComponent;