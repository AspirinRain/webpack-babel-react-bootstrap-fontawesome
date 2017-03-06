/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import { Link } from 'react-router';
import MainNav from './main_nav';

class MainHeader extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/list" className="navbar-brand">SurveyBuilder</Link>
                    </div>
                    <nav className="navbar-collapse collapse">
                        <MainNav />
                    </nav>
                </div>
            </nav>
        );
    }
}

export default MainHeader;