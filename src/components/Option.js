import React, {Component} from 'react'
import {connect} from 'react-redux'

class Option extends Component {
    handleClick = e => {
        this.props.onClick(this.props.optionName)
    }

    render() {
        const {option, showResults, percentage} = this.props
        return (
            !showResults ?
                <button className="btn btn-outline-dark btn-block" to="#" onClick={this.handleClick}>
                    <div>
                        <p>{option.text}</p>
                        {showResults === true &&
                        (<p>#Votes: {option.votes.length} ({percentage}%)</p>)
                        }
                    </div>
                </button>
                :
                <div>
                    <h3>{option.text}</h3>
                    {showResults &&
                        (<div className="btn btn-secondary"># Votes : {option.votes.length} <span className="badge badge-light">({percentage}%)</span></div>)
                    }
                </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {questionId, optionName}) {
    const option = questions[questionId][optionName];

    return {
        option,
        showResults: Object.keys(users[authedUser].answers).includes(questionId),
        percentage: ((option.votes.length / (questions[questionId].optionOne.votes.length + questions[questionId].optionTwo.votes.length)) * 100).toFixed(1),
        optionName
    }
}

export default connect(mapStateToProps)(Option)