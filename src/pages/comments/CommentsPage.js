import React, {useEffect, useState} from 'react';
import {typicodeService} from "../../services/typicode.service";
import CommentComponent from "../../components/comment/CommentComponent";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        typicodeService.getComments().then(value => value.data).then(value => setComments(value))
    },[]);
    return (
        <div>
          <h2>Comments</h2>
            <Outlet/>
            {
                comments.map(item => <CommentComponent key = {item.id} item = {item}/>)
            }

        </div>
    );
};

export default CommentsPage;