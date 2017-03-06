/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';

class Divider extends React.Component {
    render() {
        return (
            <div className="divider">
                <h2>{this.props.children}</h2>
                <hr />
            </div>
        );
    }
}

export default Divider;