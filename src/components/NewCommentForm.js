import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../validators/comment.validator";
import {postsAndCommentService} from "../services/postAndComments.service";

const NewCommentForm = ({lift}) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
         mode: "all",
         resolver:joiResolver(commentValidator)
    });
    const add = async (comment) => {
        const  addedComment = await postsAndCommentService.createComment(comment).then(comment => comment.data);
        lift(addedComment);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(add)}>
            <h3> Add comment for post</h3>
            <input type="text" placeholder={'postId'} {...register('postId')}/>
            {errors.postId && <span>{errors.postId.message}</span>}
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button>Add</button>
        </form>
    );
};

export default NewCommentForm;