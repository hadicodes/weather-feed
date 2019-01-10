import React, { Component } from 'react';

class FiveDayWeather extends Component {
    render() {
        return (
            <div className="weather-item">
                <i className="wi wi-day-cloudy" />
                <div className="forecast-current-temp">
                    <p>34</p>
                    <span className="degree">º</span>
                </div>
                <div className="condition">Clear</div>
            </div>
        );
    }
}

export default FiveDayWeather;
