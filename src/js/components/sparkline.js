/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import max from 'lodash/max';

const SparkLine = React.createClass({
    propTypes: {
        points: React.PropTypes.array.isRequired
    },

    render: function () {
        let width = 200;
        let height = 20;

        let path = this.generatePath(width, height, this.props.points);

        return (
            <svg width={width} height={height}>
                <path d={path} stroke="#7ED321" strokeWidth="2" fill="none" />
            </svg>
        )
    },

    generatePath: function (width, height, points) {
        let maxHeight = max(points);
        let maxWidth = points.length;

        return points.map(function (p, i) {
            let xPct = i / maxWidth * 100;
            let x = (width / 100) * xPct;

            let yPct = 100 - (p / maxHeight * 100);
            let y = (height / 100) * yPct;

            if (i === 0){
                return 'M0,' + y;
            }else {
                return 'L' + x + ',' + y;
            }
        }).join(' ');
    }
});

export default SparkLine;