import React,{ useState, useEffect } from 'react';
import {getWeather} from '../action/weatherAction';
import { mockWeather } from '../mork/mockWeather';


function Weather() {

    const [weather, setweather] = useState(mockWeather);
    const [ville, setville] = useState("Nancy");

    useEffect(() => {
        loadWeatherData();
    }, [ville])

    function KelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather(ville);
        console.log(weatherAjax);
        setweather(weatherAjax.data)
    }


    function loadIconWeather(idIcon){
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png"
    }
    return (
        <div>
            <input type="text" value={ville} onChange={ville} />
                { weather ?
                    <div>
                        <h1>Météo : {weather.name}</h1> 
                        <img alt ="" src={loadIconWeather(weather.weather[0].icon)}></img>
                        <p>{weather.weather[0].description}</p>
                        <p>{KelvinToCelsius(weather.main.temp)} °C</p>
                        <p>Humidité dans l'air : {weather.main.humidity} %</p>
                        <p>Vitesse du vent : {weather.wind.speed}</p>
                        <p>Température ressentis : {KelvinToCelsius(weather.main.feels_like)} °C</p>
                    </div>
                    : <div>
                        <h1>Météo en attente de chargement</h1>
                    </div>
                    }
        </div>
    )
}

export default Weather
