import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {


    return (
        <div className="container-fluid">
            <header>
                <div className='row'>
                    <h1 className='col-6'><Link to='/'>BitSchool Blog</Link></h1>
                    <nav className='col-6'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/authors'>Authors</Link></li>
                            <li><Link to='/create'>Create</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;