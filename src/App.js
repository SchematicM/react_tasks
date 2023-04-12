import './App.css';
import UsersComponent from "./components/users/UsersComponent";
import {useState} from "react";
import PostComponent from "./components/post/PostComponent";
import LaunchesComponent from "./components/launches/LaunchesComponent";
import PostsComponent from "./components/posts/PostsComponent";

function App() {
    const[user, setUser] = useState(null);

    const toggleDetails = (user) => {
        setUser(user);
    }

        return (
            <div className="App">
                <LaunchesComponent/>
                <PostsComponent/>
                <UsersComponent toggleDetails={toggleDetails} />
                {
                    user && (
                        <div className={'user-posts'} >
                            {
                                user.posts.map(post => (<PostComponent post = {post} key = {post.id}/>))
                            }
                        </div>
                    )
                }
            </div>
        );
    }

    export default App;
