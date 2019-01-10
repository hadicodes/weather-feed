import React, { Component } from 'react';
import Weather from './components/Weather';
import FiveDayWeather from './components/FiveDayWeather';
import './App.css';


const apiKey = 'WLnQVZq9VmGJU8QpbLIXdYzBLw5isNTL';
// const locationKey = 22889
// const  url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
const url = `http://dataservice.accuweather.com/currentconditions/v1/54685_PC?apikey=${apiKey}`


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: '',
            fivedayTemps: [],
            conditions: ['sunny', 'rain', 'clear', 'cloudy', 'hot'],
            weatherText: ''
        };
    }

    componentDidMount() {
        this.getCurrentWeather()
    }


    getCurrentWeather = () => {
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                this.setState({ currentTemp: responseJson[0].Temperature.Imperial.Value, weatherText: responseJson[0].WeatherText })
            })
    }



    render() {
        return (
            <div className="weather-feed container">
                <Weather
                    weatherText={this.state.weatherText}
                    currentTemp={this.state.currentTemp}
                />
                <div className="five-day-forecast">
                    {this.state.conditions.map((el, i) => (
                        <FiveDayWeather key={i * Math.random()} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
