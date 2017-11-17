import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    return (
        <div className='row singlePost'>
            <h2 className='col-12'>{props.title}</h2>
            <h5 className='col-12'><em>Post by: {props.name}</em></h5>
            <p className='col-12'>{props.body}</p>
        </div>
    );
};



const PostsByAuthor = (props) => {
    return (<p className='listOfPosts col-6 offset-3'><Link to={`/posts/${props.id}`}>{props.title}</Link></p>);
};




class ListOfPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId)
            .then((result) => result.json())
            .then((result) => {
                this.setState({ data: result });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
        return (<div>
            <h4>3 more posts from same author</h4>
            {this.state.data.map((element) => <PostsByAuthor title={element.title} key={element.id} id={element.id} />).slice(0, 3)}
        </div>);
    }
}



class OnePostByAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            user: null
        };
        this.showPostData = this.showPostData.bind(this);
    }
    componentDidMount() {
        let postId = this.props.match.params.id;
        this.showPostData(postId);
    }

    componentWillReceiveProps(nextProps){
        let postId = nextProps.match.params.id;
        // console.log("props: " + nextProps);
        this.showPostData(postId);
    
    }

    showPostData(postId){
        let boo = true;
        let niz = JSON.parse(localStorage.getItem("post"));
       
        if (niz) {
            for (let i = 0; i < niz.length; i++) {
                const element = niz[i];
                
                if (element.id == postId) {
                   
                    this.setState({
                        data: element,
                        user: element.userId
                    });
                    boo = false;
                    return;
                }
            }
        }

        if (boo) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then((result) => result.json())
                .then((result) => {
                    this.setState({ data: result });

                    fetch('https://jsonplaceholder.typicode.com/users/' + result.userId)
                        .then((user) => user.json())
                        .then((user) => this.setState({ user: user }))
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });


        }
    }



    render() {
        if (!this.state.data || !this.state.user) {
            return <h1>loading</h1>;
        }
        return (
            <div className='container'>
                <SinglePost title={this.state.data.title} body={this.state.data.body} name={this.state.user.name} />
                <ListOfPosts userId={this.state.data.userId} />
            </div>
        );
    }

}

export default OnePostByAuthor;
