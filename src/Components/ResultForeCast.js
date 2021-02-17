import React from 'react';
import '../App.css';

const ResultForeCast = ({forecasts}) => {

    return(
        <div>
        <h4>Forecast</h4>
        <div id="forecast-div">
            {
                forecasts.map(item =>{
                    let icon = item.weather[0].icon;
                    const iconUrl = `https://openweathermap.org/img/w/${icon}.png` ;
                    return  <div id="forecast-box" key={item.dt}>
                                <p>{item.dt_txt.slice(5,10)}</p>
                                <p>{item.dt_txt.slice(11,16)}</p>
                                <img src={iconUrl} alt={item.weather[0].main}/>
                                <p>{item.main.temp}&#176;</p>
                            </div>
                })
            }
            
        </div>
        </div>
    );
}
export default ResultForeCast;

// const iconUrl = `https://openweathermap.org/img/w/${icon}.png` ;
