import React from 'react';
import './comment.css'
import {useNavigate} from "react-router-dom";

const CommentComponent = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            <div className={'comment'}>
                <div>Email: {item.email}</div>
                <div>Title: {item.name}</div>
                <div>Body: {item.body}</div>
                <button onClick={()=>{navigate(item.postId.toString())}}>Show Post</button>
            </div>
        </div>
    );
};

export default CommentComponent;