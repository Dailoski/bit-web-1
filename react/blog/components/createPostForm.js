import React from "react";
// import { Link } from "react-router-dom";

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postBody: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickForPostInput = this.handleClickForPostInput.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleClickForPostInput() {
        let postTitle = this.state.postTitle;
        let postBody = this.state.postBody;
        this.props.useCreatedPost(postTitle, postBody);
    }

    render() {
        return (
            <div className='row createPost'>

                <label className='col-12' htmlFor='postTitle'>Title</label>
                <input className='col-12' id='postTitle' name="postTitle" type='text' value={this.state.postTitle} onChange={this.handleChange} />

                <label className='col-12' htmlFor='postBody'>Post</label>
                <textarea className='col-12' id='postBody' name='postBody' value={this.state.postBody} onChange={this.handleChange}></textarea>

                <button className='col-3' onClick={this.handleClickForPostInput}>Create post</button>
            </div>
        );
    }


}


export default CreatePostForm;

