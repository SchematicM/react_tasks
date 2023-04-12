import React from 'react';

const PostDetailsComponent = ({details}) => {
    return (
        <div>
            <p>Id: {details.id}</p>
            <p>UserId: {details.userId}</p>
            <p>Title: {details.title}</p>
            <p>Body: {details.body}</p>

        </div>
    );
};

export default PostDetailsComponent;