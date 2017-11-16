import React from "react";
import { Link } from "react-router-dom";

const Author = (props) => {

    return (<li className='authorNameItem'><Link to={`/authors/${props.element.id}`}>{props.element.name}</Link></li>);
};


class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((result) => result.json())
            .then((users) => this.setState({ data: users }));
    }

    render() {
        let numOfauthors = this.state.data.length;
        if (numOfauthors === 0) {
            return (<p>loading</p>);
        }
        return (
            <div className='container'>
                <h2 className='col-12'>Authors ({numOfauthors})</h2>
                <ul className='col-6 offset-3 authorName'>
                    {this.state.data.map((element) => <Author element={element} key={element.id} number={numOfauthors} />)}
                </ul>
            </div>
        );
    }

}

export default Authors;