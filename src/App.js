import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ToDoPage from "./pages/todo/ToDoPage";
import AlbumsPage from "./pages/albums/AlbumsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import PostComponent from "./components/post/PostComponent";

function App() {
    return (
        <div className="App">
            <div className={'menu'}>
                <ul>
                    <li><Link to={'/'}>HOME</Link></li>
                    <li><Link to={'/todo'}>TO DO</Link></li>
                    <li><Link to={'/albums'}>ALBUMS</Link></li>
                    <li><Link to={'/comments'}>COMMENTS</Link></li>
                </ul>
            </div>
            <div className={'content'}>
                <Routes>
                    <Route path={'/'} element = {<HomePage/>}/>
                    <Route path={'/todo'} element = {<ToDoPage/>}/>
                    <Route path={'/albums'} element = {<AlbumsPage/>}/>
                    <Route path={'/comments'} element = {<CommentsPage/>}>
                        <Route path={':id'} element={<PostComponent/>}/>
                    </Route>

                </Routes>
            </div>
        </div>
    );
}

export default App;
