import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../../services/jsonplaceholder.service";
import './user.css'

const UserComponent = ({user, toggleDetails}) => {
    const [userPosts, setUserPosts] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    const showPosts = ()=>setShowDetails(!showDetails);


    useEffect(() => {
        getUserPosts(user.id).then(response => setUserPosts(response.data));
    }, [user.id]);
    user.posts = userPosts;

    return (
        <div className={'user'}>
            <h3>{user.id}. {user.name}</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => {
                showPosts();
                toggleDetails(user);
            }}>
              <a href={'#user-posts'}  >Show Posts</a>
            </button>
        </div>
    )
}
            export default UserComponent;