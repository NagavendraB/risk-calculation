import React from 'react';
import 'babel-polyfill';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Menu, RiskLevelSelector, Table, Chart, InitialSumTextField} from "./components";
import {calculateTimeSeries} from './utils/index';
import {fee} from './utils/constants';
import {getTimeSeriesData} from './services/index';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            riskLevel: 3,
            initialSum: 1000,
            timeSeries: {}
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const {riskLevel, initialSum} = this.state;
        const result = await getTimeSeriesData("/api/cones"); 
        const data = result.data && result.data.filter(cone => cone.riskLevel == riskLevel)[0];

        this.setState({
            timeSeries: calculateTimeSeries({
                mu: data && data.mu,
                sigma : data && data.sigma,
                years: 10,
                initialSum: initialSum,
                monthlySum: 200,
                fee
            })
        });
    }

    onChangeInput = (event, type) => {
        this.setState({[type]: parseInt(event.target.value)});
        this.loadData();
    }

    render() {
        const {riskLevel, timeSeries} = this.state;
        return (
            <Router>
                <div>
                    <Menu/>
                    <RiskLevelSelector onChangeRiskLevel={(event) => this.onChangeInput(event, 'riskLevel')}/>
                    <InitialSumTextField onChangeInitialSum={(event) => this.onChangeInput(event, 'initialSum')}/>
                    <Route exact path="/" component={() => <Table timeSeries={timeSeries} />} />
                    <Route path="/table" component={() => <Table timeSeries={timeSeries} />} />
                    <Route path="/chart" component={() => <Chart timeSeries={timeSeries} />} />
                </div>
            </Router>
        );
    }

}