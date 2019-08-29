import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Poll extends Component {
    render() {
        const {id, optionOne, optionTwo} = this.props.question;
        return (
            <Link to={`/questions/${id}`}>
                <span className="black-text">{optionOne.text} OR {optionTwo.text}</span>
                <i className="material-icons right">send</i>
            </Link>
        )
    }

}

const mapStateToProps = ({questions}, {id}) => {
    return {
        question: questions[id]
    }

}

export default connect(mapStateToProps)(Poll)