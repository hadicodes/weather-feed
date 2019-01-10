import React, { Component } from 'react';
import Weather from './components/Weather';
import FiveDayWeather from './components/FiveDayWeather';
import './App.css';


const apiKey = 'WLnQVZq9VmGJU8QpbLIXdYzBLw5isNTL';
const url = `http://dataservice.accuweather.com/currentconditions/v1/54685_PC?apikey=${apiKey}`


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: '',
            fivedayTemps: [],
            conditions: ['sunny', 'rain', 'clear', 'cloudy'],
            days: [1, 2, 3, 4, 5],
            weatherText: ''
        };
    }

    componentDidMount() {
        this.longPollCurrentWeather()
    }


    getCurrentWeather = () => {
        fetch(url)
            .then(res => res.json())
            .then(weatherdata => {
                console.log(weatherdata)
                this.setState({ currentTemp: weatherdata[0].Temperature.Imperial.Value, weatherText: weatherdata[0].WeatherText })
            })
    }

    longPollCurrentWeather = () => {
        this.getCurrentWeather()
        setInterval(() => {
            this.getCurrentWeather()
            console.log('new weather')
        }, 300000);
    }



    render() {
        return (
            <div className="weather-feed container-fluid">
                <Weather
                    weatherText={this.state.weatherText}
                    currentTemp={this.state.currentTemp}
                />
                <div className="five-day-forecast">
                    {this.state.days.map((el, i) => (
                        <FiveDayWeather key={i * Math.random()} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
