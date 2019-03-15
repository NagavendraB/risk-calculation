import React from 'react';
import PropTypes from 'prop-types';

const InitialSumTextField = ({onChangeInitialSum}) => (
    <React.Fragment>
        Initial Sum: <input className="initial-sum" type="text" value ='' onChange={onChangeInitialSum} />
    </React.Fragment>
);

InitialSumTextField.propTypes = {
    onChangeInitialSum: PropTypes.func
};

export default InitialSumTextField;