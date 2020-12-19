import React from 'react';
import moment from 'moment';

const AllForecast = (props) => {

  const {dailyData, index} = props;

  const date = new Date(dailyData.dt * 1000);
  
  const iconURL = `http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`

  return (
    <>
      <li key={index}>
        <h3>{moment(date).format('dddd').slice(0,3).toUpperCase()}</h3>
        <p>{moment(date).format('DD MM')}</p>
        <img src={iconURL} alt={dailyData.weather[0].main}  />
        <h2>{Math.round(dailyData.temp.day)} °</h2>
        <p>{dailyData.weather[0].description}</p>
      </li>
    </>
  );;
}

export default AllForecast;