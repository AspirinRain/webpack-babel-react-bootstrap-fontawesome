/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ListSurveys from './components/list_surveys';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ListSurveys} />
                    <Route path="/list" component={ListSurveys} />
                    <Route path="/add"  />
                </Route>
            </Router>
        )
    }
}

export default AppRouter;