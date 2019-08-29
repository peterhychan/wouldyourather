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
                <button to="#" onClick={this.handleClick}>
                    <div>
                        <h3>{option.text}</h3>
                        {showResults === true &&
                        (<h4>#Votes: {option.votes.length} ({percentage}%)</h4>)
                        }
                    </div>
                </button>
                :
                <div>
                    <h3>{option.text}</h3>
                    {showResults &&
                        (<div className="badge blue"># Votes : {option.votes.length} <div className="badge red">({percentage}%)</div></div>)
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