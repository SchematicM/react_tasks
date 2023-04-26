import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostsComponent from "./components/posts/PostsComponent";
import CommentsComponent from "./components/comments/CommentsComponent";
import React from "react";
import CatsAndDogs from "./components/catsAndDogs/CatsAndDogs";

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
                <Route path={'/posts'} element={<PostsComponent/>}/>
                <Route path={'/comments'} element={<CommentsComponent/>}/>
                <Route path={'/cats-dogs'} element={<CatsAndDogs/>}/>
            </Routes>
        </div>

    </div>

   );
}

export default App;
