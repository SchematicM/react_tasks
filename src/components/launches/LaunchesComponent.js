import React from 'react';
import LaunchComponent from "../launch/LaunchComponent";

const LaunchesComponent = ({missions}) => {
    return (
        <div className="spaceX">
            {
                missions.map((item,index) =>(
                    <LaunchComponent
                        key = {index}
                        item = {item}
                    />))
            }
        </div>
    );
};

export default LaunchesComponent;