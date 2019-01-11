import React, { Component } from 'react';

class FiveDayWeather extends Component {
    render() {
        console.log('5 Day props', this.props)
        return (
            <div className="weather-item">
                <div className="day">{this.props.day}</div>
                <div className="forecast-current-temp">
                    <p>{this.props.hiTemp}</p>
                    <span className="degree-symbol-5-day">º</span>
                </div>
                <div className="condition-info">
                    <img src={this.props.icon} alt=""/>
                    <div className="condition">{this.props.condition}</div>
                </div>
            </div>
        );
    }
}

export default FiveDayWeather;
