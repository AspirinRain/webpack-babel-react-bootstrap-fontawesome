/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import MainHeader from './main_header';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <MainHeader />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;