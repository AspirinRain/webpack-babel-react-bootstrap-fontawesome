/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import { Link } from 'react-router';

class MainNav extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                <li><Link to='/list'>All Surveys</Link></li>
                <li><Link to="/add">Add Surveys</Link></li>
            </ul>
        );
    }
}

export default MainNav;