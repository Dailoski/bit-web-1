import React from "react";
import Authors from "./author";
import AuthorsInfo from "./authorsPage";
import { Switch, Route } from "react-router-dom";


class ListOfAuthors extends React.Component {
    render() {
        return (<Authors />);
    }
}


const MainListOfAuthors = (props) => {

    return (
        <Switch>
            <Route exact path="/authors" component={ListOfAuthors} />
            <Route path="/authors/:id" component={AuthorsInfo} />
        </Switch>

    );
};



export default MainListOfAuthors;