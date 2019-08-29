import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import NewQuestion from './NewQuestion'
import {connect} from 'react-redux'
import {initData} from "../actions/shared"
import Leaderboard from "./Leaderboard"
import Question from './Question'
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(initData())
    }

    render() {
        return (
            <Router>
                <div>
                    <LoadingBar/>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/" exact component={Dashboard}/>
                        <PrivateRoute path="/leaderboard" component={Leaderboard}/>
                        <PrivateRoute path="/add" component={NewQuestion}/>                            <PrivateRoute path="/questions/:question_id" component={Question}/>
                        <Route path="/*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
