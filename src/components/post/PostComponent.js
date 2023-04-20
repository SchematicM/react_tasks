import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {typicodeService} from "../../services/typicode.service";
import "./post.css"

const PostComponent = () => {
    let {id} = useParams();
    let [post, setPost] = useState(null);
    useEffect(()=> {
        typicodeService.getPostById(id).then(value => value.data).then(value => setPost(value))
    },[id]);    return (
        post&&
        <div className={'post'}>
            <h3> Post: </h3>
            <h4>Title: {post.title}</h4>
            <p>Body : {post.body}</p>
        </div>
    );
};

export default PostComponent;