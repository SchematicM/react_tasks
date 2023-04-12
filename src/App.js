import './App.css';
import {getLaunches} from "./services/spase.service";
import {useEffect, useState} from "react";
import LaunchesComponent from "./components/launches/LaunchesComponent";

function App() {
  let [launches, setLaunches] = useState([]);
  useEffect(() => {
    getLaunches().then(response => {
        const results = response.data.filter(value=>value.launch_year!=='2020');
        setLaunches(results)
    })},[])
  return (
      <div className="App">
        <LaunchesComponent missions={launches}/>
      </div>
  );
}

export default App;
