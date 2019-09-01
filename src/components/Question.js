import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'
import Option from "./Option"
import User from './User'
import {Link} from 'react-router-dom';
import NotFound from "./NotFound";

class Question extends Component {
    state = {
        vote: false
    }

    handleVote = e => {
        this.props.dispatch(handleAnswerQuestion(this.props.question.id, e))
    }

    render() {
        const {question} = this.props
        return (
            <div className="container mt-5">
                {question
                    ?
                    (<div className="text-center col-lg-6 offset-lg-3 col-sm-12 col-md-12">
                        <div style={{display: 'none'}}><User id={question.author} /></div>
                        <div>
                            <i className="material-icons large">how_to_vote</i>
                            <h1 className="m-4">Would You Rather</h1>
                            <Option questionId={question.id} optionName="optionOne" onClick={this.handleVote}/>
                            <h2 className="m-4">OR</h2>
                            <Option questionId={question.id} optionName="optionTwo" onClick={this.handleVote}/>
                        </div>
                        <Link to="/"><i className="material-icons medium black-text m-4">keyboard_backspace</i></Link>
                    </div>)
                    : <NotFound/>}
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    return {
        question: questions[props.match.params.question_id],
        authedUser,
        showResults: Object.keys(users[authedUser].answers).includes(props.match.params.question_id)
    }
}

export default connect(mapStateToProps)(Question)