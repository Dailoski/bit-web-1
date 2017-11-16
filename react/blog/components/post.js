import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';

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
        this.state = { data: [] };
        this.searchTitles = this.searchTitles.bind(this);
    }

    getPostsData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => result.json())
            .then((result) => this.setState({ data: result }));
    }



    componentDidMount() {
        this.getPostsData();
    }

    searchTitles(title) {
        let a = [];
        if (title === '') {
            this.getPostsData();
        } else {
            for (let i = 0; i < this.state.data.length; i++) {
                const element = this.state.data[i];
                if (element.title.includes(title)) {
                    a.push(element);
                }
            }
            this.setState({ data: a });
        }

    }

    render() {

        if (this.state.data.length === 0) {
            return (
                <div>
                    <p>Post not found</p>
                    <Search useSearchString={this.searchTitles} />
                </div>);
        }

        return (

            <div className="row main">
                <Search useSearchString={this.searchTitles} />
                {this.state.data.map((element) => <Post element={element} key={element.id} />)}
            </div>
        );
    }

}


const MainPosts = (props) => {

    return (

        <div className="container">
            <Posts />
        </div>
    );
};

export default MainPosts;