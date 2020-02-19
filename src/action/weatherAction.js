import axios from 'axios';

// Requete GET 


export function getWeather(){
    return axios.get("http://api.openweathermap.org/data/2.5/weather?q=London");
}
