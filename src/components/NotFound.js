import React from 'react';
import {Link} from 'react-router-dom';
const NotFound = () => {
    return (
		<div className="container text-center mt-5">
            <h1 className="display-1 mt-5 mb-5">Page Not found</h1>
            <img className="mb-5" src="https://i.pinimg.com/originals/fc/03/c6/fc03c6fdc6a23237a22ea47be5df79e7.png" alt="notfound" style={{height: 200, width:200}} />
            <h2><Link to="/"><i className="material-icons black-text large">arrow_back</i></Link></h2>
        </div>
    )
}

export default NotFound