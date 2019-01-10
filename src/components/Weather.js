import React, { Component } from 'react';

class Weather extends Component {
    render() {
        let {currentTemp, weatherText} = this.props
        return (
            <div className="todays-weather">
                <i className="wi wi-day-cloudy" />
                <div className="current-temp">
                    <h1>{currentTemp}</h1>
                    <span className="degree-symbol">º</span>
                </div>
                <div className="condition">{weatherText}</div>
            </div>
        );
    }
}

export default Weather;
