import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Navbar from './Navbar'

const Helper = input => {
    for (let i in input) {
        if (input.hasOwnProperty(i)){
            return true;
        }
    }return false;
}

const PrivateRoute = ({component: Component, authedUser, ...rest}) => (
    <Route {...rest} render={props => {
        return (
            authedUser?
            <div>
                <Navbar/>
                <Component {...props}/>
            </div>
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
        }}/>
        )
    }}/>
)

function mapStateToProps({authedUser}) {
    return {
        authedUser: Helper(authedUser)
    }
}

export default connect(mapStateToProps)(PrivateRoute)