import axios from 'axios';

// Requete GET 

const baseUrl = "http://api.openweathermap.org/data/2.5";
const appId = "&appid=f6939eb98229a91f3410b12041f0295d";

export function getWeather(ville){
    return axios.get(baseUrl+"/weather?q="+ville+appId);
}
