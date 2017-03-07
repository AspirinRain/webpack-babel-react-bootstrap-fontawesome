/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ListSurveys from './components/list_surveys';
import AddSurvey from './components/add_survey';
import TakeSurveyCtrl from './components/take_survey_ctrl';
import EditSurvey from './components/edit_survey';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ListSurveys} />
                    <Route path="/list" component={ListSurveys} />
                    <Route path="/add" component={AddSurvey} />
                    <Route path="/take" component={TakeSurveyCtrl}/>
                    <Route path="/edit" component={EditSurvey}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter;