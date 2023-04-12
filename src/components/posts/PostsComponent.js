import React, {useEffect, useState} from 'react';
import PostComponent from "../post/PostComponent";
import {getPosts} from "../../services/jsonplaceholder.service";

const PostsComponent = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(response => {
            console.log(response);
            setPosts(response.data)
        })
    }, [])

    return (
        <div className="posts">
            <h1>Posts</h1>
            {
                posts.map((item) =>(
                    <PostComponent
                        key = {item.id}
                        post = {item}
                    />))
            }
        </div>
    );
};

export default PostsComponent;