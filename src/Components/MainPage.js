import React,{Component} from 'react';
import '../App.css';
import Result from './Result';
import NotFound from './NotFound';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName:'',
            weatherData: null,
            error:false,
        }
    };

    setCityName = (e) =>{
        this.setState({
            cityName:e.target.value
        })
    }

    loadData = (e) => {
        e.preventDefault();
        Promise.all([fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&APPID=d055ded8da2a06b0617f888ee4e903a6`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&units=metric&APPID=d055ded8da2a06b0617f888ee4e903a6`)
        ])
        .then(([res1, res2]) => {
            if (res1.ok && res2.ok) {
              return Promise.all([res1.json(), res2.json()]);
            }
            throw Error(res1.statusText, res2.statusText);
        })
        .then(([data1, data2])=>{
            console.log(data1);
            const weatherData = {
                city: data1.name,
                country: data1.sys.country,
                date : new Date().toDateString(),
                description: data1.weather[0].description,
                icon : data1.weather[0].icon,
                main: data1.weather[0].main,
                temp: data1.main.temp,
                highestTemp: data1.main.temp_max,
                lowestTemp: data1.main.temp_min,
                sunrise : new Date(data1.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit',hour12:true}).slice(0, 5),
                sunset : new Date(data1.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12:true}).slice(0, 5),
                clouds: data1.clouds.all,
                humidity: data1.main.humidity,
                wind: data1.wind.speed,
                forecast: data2.list,
            };

            this.setState({
                weatherData,
                error: false
            })
        })
        .catch((error)=> {
            console.log(error);

            this.setState({
                error: true,
                weatherInfo: null,
            });
        });
    }    
    
    
    render() {
        const {weatherData,error} = this.state
        return ( 
            <div className="input-container">
                <form onSubmit={this.loadData} className="form-inline d-flex flex-row justify-content-center align-items-center">
                    <input 
                        value={this.state.cityName} 
                        id="citySerach"
                        className="cityInput" 
                        type="text" 
                        placeholder="Enter City Name" 
                        aria-label="Search"
                        onChange={this.setCityName}
                        onSubmit={this.loadData}
                    />
                </form>
                
                {weatherData && <Result weather={weatherData} />}
                {error && <NotFound error={error} />}
            </div>
        );
    }
}
 
export default MainPage;

// `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=d055ded8da2a06b0617f888ee4e903a6`

