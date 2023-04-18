import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../services/user.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";

const UserFormComponent = ({lift}) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        mode: "onSubmit",
        resolver:joiResolver(userValidator)
    });
    const add = async (user) => {
        const  addedUser = await userService.postUser(user).then(user => user.data);
        lift(addedUser);
        reset();
    }
    return (
            <form onSubmit={handleSubmit(add)}>
                <h3>Add new User</h3>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                {errors.phone && <span>{errors.phone.message}</span>}

                <button>Add</button>
            </form>
    );
};

export default UserFormComponent;