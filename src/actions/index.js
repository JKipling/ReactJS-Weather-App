import axios from 'axios';

const API_KEY = '9951263291b3f590994022d1285690b9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;    //Template strings - wrap in back ticks then insert the variable with ${}

export const FETCH_WEATHER = 'FETCH_WEATHER';       //referencing this varialbe keeps consistancy, when applying this value and making changes, and also reduces bugs.

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);         //ajax request with axios.

    return {
        type: FETCH_WEATHER,
        payload: request        //returning the promise as the payload.
    };
}

// The axios library, which acts like jQuery's ajax method. 
// It reaches out and does an ajax request to the .get url and passes a promise back to the payload. 