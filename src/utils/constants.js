export const options = {
    responsive: false,
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Years'
            },
            gridLines: {
                drawOnChartArea: false
            },
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Valuation (EUR)'
            }
        }]
    }
};

export const defultRiskl = 10;

export const fee = 0.01;