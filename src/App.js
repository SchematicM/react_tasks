import './App.css';
import UserFormComponent from "./components/UserFormComponent";
import React, {useState} from "react";
import AddedUserComponent from "./components/AddedUserComponent";

function App() {
    const [addedUser, setAddedUser] = useState(null);

    const lift =(user)=>{
        setAddedUser(user);
    }
    return (
        <div className="App">
            <UserFormComponent lift = {lift}/>
            {
                addedUser && (<AddedUserComponent user = {addedUser}  />)
            }

        </div>
    );
}

export default App;
