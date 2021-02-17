import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog } from '@fortawesome/free-solid-svg-icons';
import ResultForeCast from './ResultForeCast';

const date = new Date().toDateString();

const Result = ({weather}) => {

    const data = weather;

    const forecasts = data.forecast;
    
    const main = data.main;
    let weatherIcon = null;

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
        } else if (main === 'Drizzle') {
            weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
        } else if (main === 'Rain') {
            weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        } else if (main === 'Snow') {
            weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
        } else if (main === 'Clear') {
            weatherIcon = <FontAwesomeIcon icon={faSun} />
        } else if (main === 'Clouds') {
            weatherIcon = <FontAwesomeIcon icon={faCloud} />;
        } else {
            weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }
    
    return ( 
        <div>
            <div id="city-div">
                <h1>{data.city}, {data.country}</h1>
                <p>{date}</p>
            </div>
            
            <div id="weather-container">

                <div className="weather-box" id="today-weather">
                
                    <span>{weatherIcon}</span> 
                    {/* <img src={weatherIcon} alt="type_of_weather" width="200" height="200"/> */}
                    <div id="today-temp">
                        <h1>{data.temp}&#176;</h1>
                        <p>{data.description}</p>
                    </div>
                </div>

                <div className="weather-box daily-data">
                    <div>
                        <span>Max</span>
                        <h4>{data.highestTemp}&#176;</h4>
                    </div>
                    <div>
                        <span>Wind</span>
                        <h4>{data.wind}mph</h4>
                    </div>
                    <div>
                        <span>Sunrise</span>
                        <h4>{data.sunrise}am</h4>
                    </div>
                    <div>
                        <span>Min</span>
                        <h4>{data.lowestTemp}&#176;</h4>
                    </div>
                    <div>
                        <span>Rain</span>
                        <h4>{data.humidity}%</h4>
                    </div>
                    <div>
                        <span>Sunset</span>
                        <h4>{data.sunset}pm</h4>
                    </div>
                </div>
            </div>

            {<ResultForeCast forecasts={forecasts}/>}
        </div>
    );
    
}
 
export default Result;