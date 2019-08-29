import React from 'react';
import {Link} from 'react-router-dom';
const NotFound = () => {
    return (
		<div className="center container" style={{marginTop:200}}>
            <h1>404 Not found</h1>
            <img src="https://i.pinimg.com/originals/fc/03/c6/fc03c6fdc6a23237a22ea47be5df79e7.png" alt="notfound" style={{height: 200, width:200}} />
            <hr/>
            <h2><Link to="/"><i className="material-icons black-text large">arrow_back</i></Link></h2>
        </div>
    )
}

export default NotFound