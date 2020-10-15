import React, { Component } from 'react';
import Current from './Current';
import AllForecast from './AllForecast';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/onecall?';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temperature: 0,
      humidity: 0,
      wind: 0,
      description: '',
      forecast: [],
    };
    this.formateAllForecast = this.formateAllForecast.bind(this);
  }

  componentDidMount() {
    fetch(
      `${API_URL}lat=-27.468228&lon=153.024203&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          temperature: data.current.temp,
          humidity: data.current.humidity,
          wind: data.current.wind_speed,
          description: data.current.weather[0].main,
          forecast: data.daily,
        });
        console.log(data);
      });
  }

  formateAllForecast = () => {
    return (this.state.forecast.slice(1, 6).map((dailyData, index) => <AllForecast dailyData={dailyData} key={index} />))
  }

  render() {
    const { temperature, humidity, wind, description,forecast } = this.state;
    return (
      <>
        <Current
          temperature={temperature}
          humidity={humidity}
          wind={wind}
          description={description}
        />
        {this.formateAllForecast()}
      </>
    );
  }
}

export default Weather;
