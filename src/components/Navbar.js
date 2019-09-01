import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from "../actions/authedUser";

class Navbar extends Component {
    state = {
        needRedirect: false
    }

    handleSignout = (e) => {
        e.preventDefault()
        this.props.dispatch(logout())
        this.setState({ needRedirect: true })
        alert(`See you next time, ${this.props.user.name}!`)
    }

    render() {
        if (this.state.needRedirect) {
            return (<Redirect to="/login"/>)
        }

        return (
            <nav>
                <div className="nav-wrapper black">
                    <Link to="/"><h6 className="brand-logo center mt-3">{this.props.user.name}</h6></Link>
                    <ul>
                        <li>
                            <Link to="/"><i className="material-icons white-text">home</i></Link>
                        </li>
                        <li>
                            <Link to="/leaderboard"><i className="material-icons white-text">list_alt</i></Link>
                        </li>
                        <li>
                            <Link to="/add"><i className="material-icons white-text">add_circle_outline</i></Link>
                        </li>
                        <div className="right">
                            <Link to="#" onClick={this.handleSignout}><i className="material-icons white-text">time_to_leave</i></Link>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({authedUser, users}) => {
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Navbar);