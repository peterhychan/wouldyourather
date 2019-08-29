import React, {Component} from 'react'
import {TabContent, TabPane, Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
import Poll from './Poll'
import classnames from 'classnames';
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
            <div className="container center" style={{marginTop: 50}}>
                        <Jumbotron>
                          <h1>Would You Rather Application</h1>
                          <p>
                            This is a simple React-Redux application.
                          </p>
                          <p>
                            <Link to="/add"><button className="btn black white-text">Ask a Question</button></Link>
                          </p>
                        </Jumbotron>   

                        <button
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => { this.display('1')}}
                        >
                            Unanswered
                        </button>
                        <button
                            className={classnames({active: this.state.activeTab !== '1'})}
                            onClick={() => { this.display('0')}}
                        >
                            Answered
                        </button>
                <hr />
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">

                        <ul className="collection with-header">
                            {unAnswered.map(res => (
                                <li className="collection-item" key={res}><Poll id={res}/>
                                </li>
                            ))}
                            {unAnswered.length ===0 ? <li className="flow-text ">Ask a Question ! <Link to="/add" className="secondary-content"><i className="material-icons">exposure_plus_1</i></Link></li>: <li></li>}
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