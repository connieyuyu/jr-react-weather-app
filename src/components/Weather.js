import React, { Component } from 'react';
import Current from './Current';
import AllForecast from './AllForecast';
import Twitter from './Twitter';


const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/onecall?';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      temperature: 0,
      humidity: 0,
      wind: 0,
      description: '',
      forecast: [],
      open: false,
      selectedCity: '',
      lat: '',
      lon: '',
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
        city: data.timezone.split('/')[1],
        temperature: data.current.temp,
        humidity: data.current.humidity,
        wind: data.current.wind_speed,
        description: data.current.weather[0].main,
        forecast: data.daily,
      });
    });
  }



  formateAllForecast = () => {
    return (this.state.forecast.slice(1, 6).map((dailyData, index) => <AllForecast dailyData={dailyData} key={index} />))
  }
  

  render() {
    const { temperature, humidity, wind, description, city } = this.state;
    return (
      <main>
        <div className="card">
          <div className="card__main">
            <Current
              city={city}
              temperature={temperature}
              humidity={humidity}
              wind={wind}
              description={description}
            />
          </div>
          <div className="card__details">
            <div className="card__details__left">
              <Twitter 
                city={city} 
                temperature={temperature}
                description={description}
              />
            </div>
            <div className="card__details__right">
              <ul>{this.formateAllForecast()}</ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Weather;
