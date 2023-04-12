import React, {useEffect, useState} from 'react';
import LaunchComponent from "../launch/LaunchComponent";
import {getLaunches} from "../../services/spase.service";
import './launches.css'
const LaunchesComponent = () => {
    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        getLaunches().then(response => {
            const results = response.data.filter(value => value.launch_year !== '2020');
            setLaunches(results)
        })
    }, [])
    return (
        <div className="spaceX">
            <h1>Missions</h1>
            <div className={'launches'}>
            {
                launches.map((item,index) =>(
                    <LaunchComponent
                        key = {index}
                        item = {item}
                    />))
            }
                </div>
        </div>
    );
};

export default LaunchesComponent;