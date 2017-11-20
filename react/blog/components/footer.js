import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className='row'>
                <h1 className='col-12'><Link to='/'>BLOG</Link></h1>
                <p className='col-12'>copyright BitSchool</p>
            </div>
        </div>
    );
};

export default Footer;

