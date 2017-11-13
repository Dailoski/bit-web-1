import React from "react";
import data from "../data";

const Main = (props) => {

    let post = data.items;

    let blog = post.map(function (element, index) {
        return (
            <div key={index} >
                <h3>{element.title}</h3>
                <p>{element.body}</p>
            </div>);
    });


    return (
        <div>
            {blog}
        </div>
    );
};



export default Main;