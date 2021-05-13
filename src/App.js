import './App.css';
import Users from './components/users/Users';
import React from "react";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div id="app">
            <Router>
                <Link to={'/Users'}><h2>Users</h2></Link>
                <Link to={'/Posts'}><h2>Posts</h2></Link>

                <Switch>
                    <Route path={'/Users'} render={() => <Users/>}/>
                    <Route path={'/Posts'} render={() => <Posts/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;