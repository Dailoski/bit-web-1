import React from 'react';

const SinglePost = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    );
};

const PostsByAuthor = (props) => {
    return (
        <p className='listOfPosts col-6 offsett-3'>{props.title}</p>
    );
};

class ListOfPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId)
            .then((result) => result.json())
            .then((result) => this.setState({ data: result }))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
        return (
            this.state.data.map((element) => <PostsByAuthor title={element.title} key={element.id} />));

    }
}



class OnePostByAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then((result) => result.json())
            .then((result) => this.setState({ data: result }))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
        return (
            <div>
                <SinglePost title={this.state.data.title} body={this.state.data.body} />
                <ListOfPosts userId={this.state.data.userId} />
            </div>
        );
    }

}

export default OnePostByAuthor;
