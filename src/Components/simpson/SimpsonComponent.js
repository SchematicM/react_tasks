import React from 'react';

const SimpsonComponent = ({item}) => {
    return (
        <div className="simpson">
            <h2>{item.name} {item.surname} : {item.age}</h2>
            <p>{item.info}</p>
            <img src={item.photo} alt ="simpson"/>
        </div>
    );
};

export default SimpsonComponent;