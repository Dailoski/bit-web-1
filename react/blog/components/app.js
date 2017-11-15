import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import About from "./about";
import  MainListOfAuthors from "./authors";
import Footer from "./footer";
// import SinglePost from "./singlepost";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/posts" component={Main} />
                    <Redirect exact from="/" to="/posts" />
                    <Route path="/about" component={About} />
                    <Route path="/authors" component={MainListOfAuthors} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
