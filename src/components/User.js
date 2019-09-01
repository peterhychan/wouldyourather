import React, {Component} from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render() {
        const {user} = this.props;
        const totalScore = user.questions.length + Object.keys(user.answers).length;
        
        return (
          <div className="card">
            <div className="card-content">
                <img src={user.avatarURL} alt={user.avatarURL} style={{ width: 50, height: 50, borderRadius: 20}}/>
                <h4 className="card-title activator">{user.name}<i className="material-icons right">more_vert</i></h4>
                <h5>Total Score : {totalScore}</h5>
            </div>
            <div className="card-reveal">
                <h4 className="card-title activator">{user.name}<i className="material-icons right">more_vert</i></h4>
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