import React from "react";
import Authors from "./author";
import AuthorsInfo from "./authorsPage";
import { Switch, Route } from "react-router-dom";


class ListOfAuthors extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>Authors</h2>
                    <ul className='col-6 offset-3 authorName'>
                        <Authors />
                    </ul>
                </div>
            </div>
        );
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