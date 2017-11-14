import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import About from './about';
import Authors from './authors';
import Footer from "./footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/authors" component={Authors} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
