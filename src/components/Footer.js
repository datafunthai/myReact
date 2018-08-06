import React from 'react';

const Footer =(props) =>{
    const {company,email} = props;

    return (
    <div className="container-fluid">
        <hr/>
        <div className="text-center title text-uppercase">
            <small>
            <span class = "text-danger"> Powered by {company}</span> <br/>
            <span class = "text-moted">Contact by email : {email}</span>
            </small>
        </div>
    </div>)
}

export default Footer;