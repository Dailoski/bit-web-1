import React from "react";
import { Link } from "react-router-dom";
import {BASE_URL} from './constants';


const Author = (props) => {
    return (<li className='authorNameItem'><Link to={`/authors/${props.element.id}`}>{props.element.name}</Link></li>);
};

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    fetchRequest() {
        fetch(BASE_URL + "users")
            .then((result) => result.json())
            .then((users) => this.setState({ data: users }));
    }
    componentDidMount() {
        this.fetchRequest();
    }

    render() {
        let numOfauthors = this.state.data.length;
        if (numOfauthors === 0) {
            return (<p>loading</p>);
        }
        return (
            <div className='container Authors'>
                <h2 className='col-12'>Authors ({numOfauthors})</h2>
                <ul className='col-6 offset-3 authorName'>
                    {this.state.data.map((element) => <Author element={element} key={element.id} />)}
                </ul>
            </div>
        );
    }

}

export default Authors;