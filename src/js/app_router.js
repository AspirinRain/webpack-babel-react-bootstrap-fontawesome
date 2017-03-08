/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/app';
import ListSurveys from './components/list_surveys';
import AddSurvey from './components/add_survey';
import TakeSurveyCtrl from './components/take_survey_ctrl';
import EditSurvey from './components/edit_survey';
import NotFoundHandler from './components/not_found';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ListSurveys} />
                    <Route path="/list" component={ListSurveys} />
                    <Route path="/add_survey" component={AddSurvey} />
                    <Route path="/surveys/:surveyId/edit" component={EditSurvey}/>
                    <Route path="/surveys/:surveyId"  component={TakeSurveyCtrl}/>
                    <Route path="*" component={NotFoundHandler}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter;