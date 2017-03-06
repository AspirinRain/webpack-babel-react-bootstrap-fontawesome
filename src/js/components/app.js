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
                {this.props.children}
            </div>
        );
    }
}

export default App;