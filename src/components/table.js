import React from 'react';
import PropTypes from 'prop-types';

const Table = ({timeSeries}) => {
    const months = timeSeries.median && timeSeries.median.map((v, idx) => idx);
    const dataGood = timeSeries.upper95 && timeSeries.upper95.map(v => v.y);
    const dataMedian = timeSeries.median && timeSeries.median.map(v => v.y);
    const dataBad = timeSeries.lower05 && timeSeries.lower05.map(v => v.y);

    const tableHeader = React.createElement('tr', {}, [
        React.createElement('th', {key: 'month'}, 'month'),
        React.createElement('th', {key: 'good'}, 'good'),
        React.createElement('th', {key: 'median'}, 'median'),
        React.createElement('th', {key: 'bad'}, 'bad')
    ]);

    return (
        <table>
            <thead>
                {tableHeader}
            </thead>
            <tbody>
                {months && months.map((entry, idx) => (
                    <tr key={idx}>
                        <td>{entry}</td>
                        <td>{dataGood[idx]}</td>
                        <td>{dataMedian[idx]}</td>
                        <td>{dataBad[idx]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    timeSeries: 3
};

Table.propTypes = {
    timeSeries: PropTypes.object
};

export default Table;