import React, {Component} from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render() {
        const {user} = this.props;
        const totalScore = user.questions.length + Object.keys(user.answers).length;
        
        return (
          <div className="card small">
            <div className="card-content">
                <img src={user.avatarURL} alt={user.avatarURL} style={{ width: 120, height: 120, borderRadius: 40}}/>
                <hr />
                <span className="card-title activator grey-text text-darken-4">{user.name}<i className="material-icons right">more_vert</i></span>
                <h5>Total Score : {totalScore}</h5>
            </div>
            <div className="card-reveal">
                <span className="card-title activator grey-text text-darken-4">{user.name}<i className="material-icons right">more_vert</i></span>
                <h5>Total Score : {totalScore}</h5>
                <h5 id="asked">Asked : {user.questions.length}</h5>
                <h5 id="answered">Answered: {Object.keys(user.answers).length}</h5>       
            </div>
          </div>
        )
    }
}

const mapStateToProps = ({users}, {id}) => {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(User)