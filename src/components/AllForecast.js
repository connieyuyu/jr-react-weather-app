import React from 'react';
import moment from 'moment';

const AllForecast = (props) => {

  const {dailyData, index} = props;

  const date = new Date(dailyData.dt * 1000);
  
  const iconURL = `http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`

  return (
    <>
      <ul>
        <li key={index}>
          <h3>{moment(date).format('dddd')}</h3>
          <p>{moment(date).format('MMM Do YY')}</p>
          <img src={iconURL} alt={dailyData.weather[0].main}/>
          <h2>{Math.round(dailyData.temp.day)} °C</h2>
          <p>{dailyData.weather[0].description}</p>
        </li>
      </ul>
    </>
  )
}

export default AllForecast;