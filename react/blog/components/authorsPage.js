import React from "react";



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
                <div className='row'>
                    <div className='col-6'>
                        <img src="https://images.unsplash.com/photo-1451324119451-db0ac857463c?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" height="200px" />
                        <h2>{this.state.data.name}</h2>
                        <li>Email: {this.state.data.email}</li>
                        <li>phone: {this.state.data.phone}</li>
                    </div>
                    <div className='col-6'>
                        <h3>Address</h3>
                        <li>street:{this.state.data.address.street}</li>
                        <li>zipcode:{this.state.data.address.zipcode}</li>
                        <li>city:{this.state.data.address.city}</li>
                    </div>
                    <div className='col-6'>
                        <h3>Company</h3>
                        <li>Name:{this.state.data.company.name}</li>
                        <li>slogan:{this.state.data.company.catchPhrase}</li>
                    </div>
                </div>
            </div>
        );
    }

}


export default AuthorsInfo;