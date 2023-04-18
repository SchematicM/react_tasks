import './App.css';
import UserFormComponent from "./components/UserFormComponent";
import React, {useState} from "react";
import AddedUserComponent from "./components/AddedUserComponent";
import PostsComponent from "./components/PostsComponent";
import NewCommentForm from "./components/NewCommentForm";
import AddedCommentComponent from "./components/AddedCommentComponent";

function App() {
    const [addedComment, setAddedComment] = useState(null);
    const [addedUser, setAddedUser] = useState(null);

    const liftComment =(comment)=>{
        console.log(comment);
        setAddedComment(comment);
        console.log(addedComment)
    }
    const lift =(user)=>{
        setAddedUser(user);
    }

    return (
        <div className="App">


            <UserFormComponent lift = {lift}/>
            {
                addedUser && (<AddedUserComponent user = {addedUser}  />)
            }
            <NewCommentForm lift = {liftComment}/>
            {
                addedComment && (<AddedCommentComponent addedComment={addedComment}   />)
            }
            <PostsComponent/>

        </div>
    );
}

export default App;
