import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const MyPage = (props) => {

    return (
        <App>
            <Header />
            <Main />
            <Footer/>
        </App>
    );
};

ReactDOM.render(<MyPage />, document.getElementById("app"));