import axios from 'axios';

const API_KEY = '1895d4cbec4f5c0962b51d1ba678e006';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER  = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);             // Returns a promise

    // ReduxPromise middlewire (../components/app.js) resolves the promise, creates a new Action
    // (with json data in the same payload) and send it to reducers
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}