import React, {useEffect, useState} from 'react';
import {typicodeService} from "../../services/typicode.service";
import ToDoComponent from "../../components/toDo/ToDoComponent";

const ToDoPage = () => {
    const [toDoes, setToDoes] = useState([]);
    useEffect(()=> {
        typicodeService.getToDo().then(value => value.data).then(value => setToDoes(value))
    },[]);
    return (
        <div>
            <h2>To Do page </h2>
            {
                toDoes.map(item => <ToDoComponent key = {item.id} item = {item}/>)
            }
        </div>
    );
};

export default ToDoPage;