import React from 'react';

const AddedCommentComponent = ({addedComment}) => {
    return (
        <div className={'added-comment'}>
            <h3>Congratulation! Comment was added! </h3>
            <div>id : {addedComment.id}</div>
            <div>postId : {addedComment.postId}</div>
            <div>name : {addedComment.name}</div>
            <div>email : {addedComment.email}</div>
            <div>body : {addedComment.body}</div>
            <button><a href={`#post-${addedComment.postId}`}>View commented post</a></button>
            <br/>
        </div>
    );
};

export default AddedCommentComponent;