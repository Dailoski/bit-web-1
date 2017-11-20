import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import { BASE_URL } from "./constants";

const Post = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?auto=format&fit=crop&w=800&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">{props.element.title}</h4>
                <p className="card-text">{props.element.body}</p>
                <p className="btn btn-primary"><Link to={`/posts/${props.element.id}`}>Read more</Link></p>
            </div>
        </div>
    );
};

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverData: [],
            storageData: [],
            data: []
        };
        this.searchTitles = this.searchTitles.bind(this);
        this.getPostsDataFromServer = this.getPostsDataFromServer.bind(this);
        this.getPostsDataFromStorage = this.getPostsDataFromStorage.bind(this);
        this.summArrays = this.summArrays.bind(this);
        

    }

    getPostsDataFromServer() {
        fetch(BASE_URL + "posts")
            .then((result) => result.json())
            .then((result) => {
                this.setState({ serverData: result });
                this.summArrays();
            });
        
    }

    getPostsDataFromStorage() {
        let storageArr = JSON.parse(localStorage.getItem("post"));

        this.setState({ storageData: storageArr });
        this.summArrays();  
    }

    summArrays() {
        let summArrays = this.state.storageData.concat(this.state.serverData);
        this.setState({ data: summArrays });
    }

    componentDidMount() {
        this.getPostsDataFromStorage();
        this.getPostsDataFromServer();
    }


    searchTitles(title) {
        this.summArrays();
        let filterPosts = [];
        if (title === "") {
            return;
        } else {
            this.state.data.forEach(element => {
                if (element.title.includes(title)) {
                    filterPosts.unshift(element);
                }
            });

            this.setState({ data: filterPosts });
         
        }
    }

    render() {

        return (

            <div className="row main">
                <Search useSearchString={this.searchTitles} />
                {this.state.data.map((element) => <Post element={element} key={element.id} />)}
            </div>
        );
    }

}


const MainPosts = () => {

    return (

        <div className="container">
            <Posts />
        </div>
    );
};

export default MainPosts;