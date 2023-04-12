import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/jsonplaceholder.service";
import UserComponent from "../user/UserComponent";
import './users.css'

const UsersComponent = ({toggleDetails}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div className="users-task">
            <h1>Users</h1>
            <div className={'users'}>
            {
                users.map((user) =>(
                    <UserComponent
                        key = {user.id}
                        user = {user}
                        toggleDetails ={toggleDetails}
                    />))
            }
            </div>
        </div>
    );
};

export default UsersComponent;