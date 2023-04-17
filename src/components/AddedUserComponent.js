import React from 'react';

const AddedUserComponent = ({user}) => {
    return (
        <div className={'added-user'}>
            <h3>Congratulation! User was added! </h3>
            <div>id : {user.id}</div>
            <div>name : {user.name}</div>
            <div>username : {user.username}</div>
            <div>phone : {user.phone}</div>
            <div>email : {user.email}</div>


        </div>
    );
};

export default AddedUserComponent;