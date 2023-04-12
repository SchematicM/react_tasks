import React, {useEffect, useState} from 'react';
import PostComponent from "../post/PostComponent";
import {getPosts} from "../../services/jsonplaceholder.service";
import './posts.css'

const PostsComponent = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        })
    }, [])
    return (
        <div className="posts-task">
            <h1>Posts</h1>
            <div className={'posts'}>
            {
                posts.map((item) =>(
                    <PostComponent
                        key = {item.id}
                        post = {item}
                    />))
            }
            </div>
        </div>
    );
};

export default PostsComponent;