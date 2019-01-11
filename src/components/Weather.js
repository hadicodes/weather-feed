import React, { Component } from 'react';

class Weather extends Component {
    render() {
        let { currentTemp, weatherText } = this.props
        return (
            <div className="todays-weather">
                <div className="current-temp">
                    <div className="today">Today</div>
                    <div className="condition">{weatherText}</div>
                    <h1>{currentTemp}</h1>
                    <span className="degree-symbol">º</span>
                </div>

                <div className="city">Syndey, Australia</div>
            </div>
        );
    }
}

export default Weather;
