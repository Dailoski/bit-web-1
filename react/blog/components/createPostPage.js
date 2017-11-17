import React from "react";
import CreatePostForm from "./createPostForm";

class CreatePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.menagePost = this.menagePost.bind(this);
    }

    menagePost(title, body) {
        if (title === "" || body === "") {
            alert("POLJA NE SMEJU BITI PRAZNA!!!");
            return;
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                id: Math.round((Math.random() * 1000) + 1000),
                title: title,
                body: body,
                userId: 1001
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((result) => result.json())
            .then(function (data) {
                if (localStorage.getItem("post")) {
                    let niz = JSON.parse(localStorage.getItem("post"));
                    niz.unshift(data);
                    localStorage.setItem("post", JSON.stringify(niz));
                    console.log(JSON.parse(localStorage.getItem("post")));
                } else {
                    let niz = [];
                    niz.push(data);
                    localStorage.setItem("post", JSON.stringify(niz));
                }
            }).then(() => {
                window.location.href = "http://localhost:8080/#/posts";
               
            })
            .catch(function (error) {
                console.log("Fetch Error :-S", error);
            });
    }

    render() {
        return (
            <div className='container'>
                <CreatePostForm useCreatedPost={this.menagePost} />
            </div>
        );

    }


}


export default CreatePostPage;