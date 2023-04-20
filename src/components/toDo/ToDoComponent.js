import React from 'react';
import './todo.css'

const ToDoComponent = ({item}) => {
    return (
        <div className={'to-do'}>
            <div>User Id: {item.userId}</div>
            <div>Title: {item.title}</div>
            <div>State: {item.completed.toString()}</div>
        </div>
    );
};

export default ToDoComponent;