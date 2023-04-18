import React from 'react';

const PostComponent = ({post}) => {

    return (
        <div className={'post'} id={`post-${post.id}`}>
            <h3>post Id {post.id}</h3>
            <h3>{post.title} </h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;