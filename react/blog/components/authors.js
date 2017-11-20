import React from "react";
import Authors from "./author";
import AuthorsInfo from "./authorsPage";
import { Switch, Route } from "react-router-dom";


const MainListOfAuthors = (props) => {

    return (
        <Switch>
            <Route exact path="/authors" component={Authors} />
            <Route path="/authors/:id" component={AuthorsInfo} />
        </Switch>

    );
};



export default MainListOfAuthors;