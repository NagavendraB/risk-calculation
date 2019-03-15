import React from 'react';
import PropTypes from 'prop-types';

import {defultRiskl} from '../utils/constants';

const RiskLevelSelector = ({onChangeRiskLevel, maxRiskLevel}) => (
    <React.Fragment>
        Risk level:
        <select onChange={onChangeRiskLevel} defaultValue={defultRiskl}>
            {Array.apply(null, {length: maxRiskLevel}).map((item, k) => <option key={k} value={k}>{k}</option>)}
        </select>
    </React.Fragment>
);

RiskLevelSelector.defaultProps = {
    maxRiskLevel: 25,
    onChangeRiskLevel: () => {}
};

RiskLevelSelector.propTypes = {
    maxRiskLevel: PropTypes.number,
    onChangeRiskLevel: PropTypes.func
};

export default RiskLevelSelector;