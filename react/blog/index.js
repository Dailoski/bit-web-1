import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import App from "./components/app";
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById("app"));