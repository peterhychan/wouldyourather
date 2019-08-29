import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../actions/authedUser";
import {Redirect} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Login extends Component {
    state = {
        authedUser: '',
        loginCheck: false
    }
    handleSubmit = e => {
        e.preventDefault()
        const {authedUser} = this.state

        if (authedUser.trim().length > 0) {
            this.props.dispatch(login(authedUser))
            this.setState({loginCheck: true})
        }else{
            alert('Select An User !')
        }
    }
    handleChange = e => {
        this.setState({authedUser: e.target.value})
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        if (this.state.loginCheck) {
            return <Redirect to={from}/>
        }


        return (
                <div className="container center" style={{marginTop:100, width: 500, backgroundColor:'black'}}>   
            <div className="card"> 
                <form onSubmit={this.handleSubmit}>
                    <h2 style={{marginTop:50}}>Would You Rather</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="input-field col">
                            <select id="authedUser" 
                                    className="browser-default"
                                    value={this.state.authedUser}
                                    onChange={this.handleChange}
                            >      
                          <option value="" disabled>Select An User</option>
                             {this.props.users.map((user) => (
                             <option 
                                key={user.id} 
                                value={user.id}
                             >
                                 {user.name}
                            </option>
                            ))}
                        </select>
                      </div>
                    <button 
                        className="btn black"
                    >
                        Login
                    </button>
                    <br/>
                    <br/>
                </form>
                </div>
                </div>

        )
    }
}

const mapStateToProps = ({users, authedUser}) => {
    return {
        users: Object.values(users).map(res => {
            return ({
                id: res.id,
                name: res.name,
            })
        }),
        authedUser
    }
}

export default connect(mapStateToProps)(Login)