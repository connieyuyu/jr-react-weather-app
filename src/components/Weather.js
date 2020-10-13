import React, { Component } from 'react';

const api = {
  key: '756ad1856cdebbf61b23cdccbab2a5b9',
  base: 'http://api.openweathermap.org/data/2.5/',
};

class Weather extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }

  render() {
    return (
      <>
        <h1>Brisbane</h1>
        <div className="cafd_main_left">
          <h2>12</h2>
          <p>Cloudy</p>
          <div>
            <ul>
              <li>
                <h4>Humidity</h4>
                <p>64%</p>
              </li>
              <li>
                <h4>Wind</h4>
                <p>12 K/M</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Weather;
