import axios from 'axios';

export const getTimeSeriesData = async (url) => {
    try {
        return await axios({
            url,
            method: 'get',
            responseType: 'json'
        })
    } catch (error) {
        return error;
    }
};