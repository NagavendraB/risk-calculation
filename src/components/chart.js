import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Chart as ChartJs} from 'chart.js';

import {getChartConfig} from '../utils/index';

class Chart extends Component {

    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const {timeSeries} = this.props;

        const canvas = this.canvas;
        const context = canvas.getContext("2d");
        return new ChartJs(context, getChartConfig(timeSeries));
    }

    render() {
        return (
            <React.Fragment>
                <canvas
                    ref={ref => this.canvas = ref}
                    width={600}
                    height={400}
                />
            </React.Fragment>
        );
    }
}

export default Chart;

Chart.propTypes = {
    timeSeries: PropTypes.object
};