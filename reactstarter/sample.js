import React from "react";
import ReactDOM from "react-dom";
import SecondChild from "./child";

const MyComponent = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{new Date().toString()}</p>
            <p>Some random text.</p>
            <p>{Math.floor(Math.random() * 10)}</p>
            <p>Some random text.</p>
            <p>Some random text.</p>
            <p>Some random text.</p>
            <ChildComponent label="bla" />
            <SecondChild bla="bla" />

        </div>
    );
};

const ChildComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h5>This is a child component</h5>
        </div>

    );
};

ReactDOM.render(<MyComponent name={Math.floor(10.8)} />, document.getElementById("app"));