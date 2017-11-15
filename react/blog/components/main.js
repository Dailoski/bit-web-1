import React from "react";
import MainPosts from "./post";
import OnePostByAuthor from "./singlepost";
import { Switch, Route } from "react-router-dom";


const Main = (props) => {

    return (
        <Switch>
            <Route exact path="/posts" component={MainPosts} />
            <Route path="/posts/:id" component={OnePostByAuthor} />
        </Switch>

    );
};



export default Main;