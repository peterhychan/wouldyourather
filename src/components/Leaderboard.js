import React, {Component} from 'react'
import {connect} from 'react-redux'

import User from './User'

class Leaderboard extends Component {
    render() {
        return (
            <div className="container center" style={{marginTop: 50, width: 500}}>
                <h1>Leaderboard</h1>
                <hr />
                {this.props.users.map(res =>
                    <User key={res} id={res} />
                )}
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        users: Object.keys(users)
            .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length - Object.keys(users[a].answers).length - users[a].questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard)