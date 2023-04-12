import './App.css';
import PostsComponent from "./components/posts/PostsComponent";
import LaunchesComponent from "./components/launches/LaunchesComponent";

function App() {


    return (
        <div className="App">
            <LaunchesComponent/>
            <PostsComponent />
        </div>
    );
}

export default App;
