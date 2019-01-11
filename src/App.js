import React, { Component } from 'react';
import Weather from './components/Weather';
import FiveDayWeather from './components/FiveDayWeather';
// import momentJs from 'moment';
import './App.css';

// let moment = momentJs();

const apiKey = 'WLnQVZq9VmGJU8QpbLIXdYzBLw5isNTL';
const url = `http://dataservice.accuweather.com/currentconditions/v1/54685_PC?apikey=${apiKey}`
const fiveDayUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/54685_PC?apikey=${apiKey}`


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: '',
            fiveDayData: [],
            weatherText: ''
        };
    }

    componentDidMount() {
        this.longPollCurrentWeather()
        this.getFiveDayForecast()
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

    getFiveDayForecast = () => {
        fetch(fiveDayUrl)
            .then(res => res.json())
            .then(fiveDayData => {
                // console.log(fiveDayData)
                this.setState({ fiveDayData: fiveDayData.DailyForecasts })
                // console.log('5daydata', this.state.fiveDayData)
            })
    }


    getWeekday = (date) => {
        let dateFormat = new Date(`${date}`)
        let weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateFormat)
        return weekday;
    }


    render() {
        return (
            <div className="weather-feed container-fluid">
                <Weather
                    weatherText={this.state.weatherText}
                    currentTemp={this.state.currentTemp}
                />
                <div className="five-day-forecast">
                    {this.state.fiveDayData.map((el, i) => (
                        <FiveDayWeather
                            key={i * Math.random()}
                            day={this.getWeekday(el.Date)}
                            hiTemp={el.Temperature.Maximum.Value}
                            condition={el.Day.IconPhrase}
                            icon={el.Day.Icon}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
