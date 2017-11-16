import React from "react";
import ButtonBack from './buttonBack';


class AuthorsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
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
            <div className='authorPage container'>
                <div className='row'><ButtonBack/></div>
                <div className='row'>

                    <div className='col-6'>
                        <img src="https://images.unsplash.com/photo-1451324119451-db0ac857463c?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" height="300px" />
                    </div>
                    <div className='col-6'>
                        <h2>{this.state.data.name}</h2>
                        <p><strong>email:</strong> {this.state.data.email}<br />
                            <strong>phone:</strong> {this.state.data.phone}</p>
                
                        <h3>Address</h3>
                        <p><strong>street:</strong> {this.state.data.address.street}<br />
                            <strong>zipcode: </strong>{this.state.data.address.zipcode}<br />
                            <strong>city: </strong>{this.state.data.address.city}</p>
                    
                        <h3>Company</h3>
                        <p><strong>name:</strong> {this.state.data.company.name}<br />
                            <strong>slogan:</strong><em> {this.state.data.company.catchPhrase}</em></p>
                    </div>
                </div>
            </div>
        );
    }

}


export default AuthorsInfo;