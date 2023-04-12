import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/jsonplaceholder.service";
import UserComponent from "../user/UserComponent";

const UsersComponent = ({toggleDetails}) => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div className="posts">
            <h1>Users</h1>
            {
                users.map((user) =>(
                    <UserComponent
                        key = {user.id}
                        user = {user}
                        toggleDetails ={toggleDetails}
                    />))
            }
        </div>
    );
};

export default UsersComponent;