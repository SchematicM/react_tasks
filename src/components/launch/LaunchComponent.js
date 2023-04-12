import React from 'react';

const LaunchComponent = ({item}) => {
    return (
        <div className="launch">
            <h2>{item.mission_name} : {item.launch_year}</h2>
            <img src={item.links.mission_patch_small} alt = {item.mission_name}/>
        </div>
    );
};

export default LaunchComponent;