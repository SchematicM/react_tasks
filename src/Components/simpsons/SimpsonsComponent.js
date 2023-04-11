import React from 'react';
import SimpsonComponent from "../simpson/SimpsonComponent";

const SimpsonsComponent = ({array}) => {

    return (
        <div className="Simpsons">
            {
                array.map((value, index) => (
                    <SimpsonComponent
                        item = {value}
                        key={index}/>))
            }
        </div>
    );
};
export default SimpsonsComponent;