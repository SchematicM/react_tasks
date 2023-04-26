import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import React from "react";
import CatsAndDogsPage from "./pages/catsAndDogs/CatsAndDogsPage";

function App() {
   return( <div className="App">

        <div className={'menu'}>
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/posts'}>POSTS</Link></li>
                <li><Link to={'/comments'}>COMMENTS</Link></li>
                <li><Link to={'/cats-dogs'}>CATS AND DOGS</Link></li>

            </ul>
        </div>
        <div className={'content'}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
                <Route path={'/comments'} element={<CommentsPage/>}/>
                <Route path={'/cats-dogs'} element={<CatsAndDogsPage/>}/>
            </Routes>
        </div>

    </div>

   );
}

export default App;
