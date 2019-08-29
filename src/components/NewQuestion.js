import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {handleAddQuestion} from "../actions/questions"

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChange = e => {
        const {value, id} = e.target
        this.setState(() => ({[id]: value}))
    }

    handleSubmit = e => {
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
        this.setState({
            optionOne: '',
            optionTwo: '',
        })
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container center" style={{marginTop: 50, width:600}}>
                <h1>Would You Rather...</h1>
                <form onSubmit={this.handleSubmit}>
                        <div className="input-field col s12">
                        <textarea
                            className="materialize-textarea"                        
                            id="optionOne"
                            onChange={this.handleChange}/>
                            <label htmlFor="optionOne">Option One</label>
                        </div>
                        <h2>OR</h2>
                        <div className="input-field col s12">
                            <textarea
                                className="materialize-textarea"
                                id="optionTwo"
                                onChange={this.handleChange}/>
                                <label htmlFor="optionTwo">Option Two</label>
                        </div>
                    <br />
                    <button
                        className="btn black"
                        disabled={this.state.optionOne === '' || this.state.optionTwo === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))