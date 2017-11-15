import React from "react";
import {Link} from "react-router-dom";

const Author = (props) => {

    return (<li className='authorNameItem'><Link  to={`/authors/${props.element.id}`}>{props.element.name}</Link></li>);
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
        return (this.state.data.map((element) => <Author element={element} key={element.id}/>));
    }

}

export default Authors;