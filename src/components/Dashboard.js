import React, {Component} from 'react'
import {TabContent, TabPane, Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
import Poll from './Poll'
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    state = {
        activeTab: '1'
    }

    display = e => {
        if (this.state.activeTab !== e) {
            this.setState({
                activeTab: e
            });
        }
    }

    render() {
        const {unAnswered, answered} = this.props
        return (
            <div className="container center mt-3">
                        <Jumbotron>
                          <h1>Would You Rather ?</h1>
                          <p>
                            Managed by React and Redux
                          </p>
                          <p>
                            <Link to="/add"><button className="btn btn-dark">Ask a Question</button></Link>
                          </p>
                        </Jumbotron>   

                        <span onClick={() => { this.display('1')}}>
                            <button className="btn btn-outline-dark">Unanswered</button>
                        </span>
                        <span onClick={() => { this.display('0')}}>
                            <button className="btn btn-outline-dark">Answered</button>
                        </span>
                <hr />
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">

                        <ul className="collection with-header">
                            {unAnswered.map(res => (
                                <li className="collection-item" key={res}><Poll id={res}/>
                                </li>
                            ))}
                            {unAnswered.length ===0 ? <li className="flow-text">Ask a Question ! <Link to="/add"><i className="material-icons">add</i></Link></li>: <li></li>}
                        </ul>
                    </TabPane>
                    <TabPane tabId="0">
                        <ul className="collection with-header">
                            {answered.map(res => (
                                <li className="collection-item" key={res}><Poll id={res}/>
                                </li>
                            ))}
                        </ul>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {
    return {
        unAnswered: Object.values(questions).filter(res =>
            !res.optionOne.votes.includes(authedUser) && !res.optionTwo.votes.includes(authedUser))
            .sort((a, b) => b.timestamp - a.timestamp).map(res => res.id),
        answered: Object.values(questions).filter(res =>
            res.optionOne.votes.includes(authedUser) || res.optionTwo.votes.includes(authedUser))
            .sort((a, b) => b.timestamp - a.timestamp).map(res => res.id)
    }
}

export default connect(mapStateToProps)(Dashboard)