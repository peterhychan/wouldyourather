import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Login extends Component {
    state = {
        authedUser: '',
        loginCheck: false
    };
    handleSubmit = e => {
        e.preventDefault();
        const { authedUser } = this.state;

        if (authedUser.trim().length > 0) {
            this.props.dispatch(login(authedUser));
            this.setState({ loginCheck: true });
        } else {
            alert('Select An User !');
        }
    };
    handleChange = e => {
        this.setState({ authedUser: e.target.value });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };

        if (this.state.loginCheck) {
            return <Redirect to={from} />;
        }

        return (
            <div className="container h-100 mt-5">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-8 mt-5 text-center">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Would You Rather</h2>
                            <img src={logo} className="App-logo" alt="logo" />
                            <div>
                                <select
                                    id="authedUser"
                                    className="browser-default"
                                    value={this.state.authedUser}
                                    onChange={this.handleChange}
                                >
                                    <option value="" disabled>
                                        Select An User
                                    </option>
                                    {this.props.users.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                                <button className="btn btn-block btn-outline-dark mt-3">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ users, authedUser }) => {
    return {
        users: Object.values(users).map(res => {
            return {
                id: res.id,
                name: res.name
            };
        }),
        authedUser
    };
};

export default connect(mapStateToProps)(Login);
