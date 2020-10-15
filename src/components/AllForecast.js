import React from 'react';

const AllForecast = (props) => {

  const {dailyData, index} = props;
  const date = new Date(dailyData.dt * 1000).toLocaleTimeString("en-US", {weekday: "long"});
  const iconURL = `http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`

  return (
    <>
      <ul>
        <li key={index}>
          <h3>{date}</h3>
          <h3>{dailyData.temp.day}</h3>
          <img src={iconURL} />
          <p>{dailyData.weather[0].description}</p>
        </li>
      </ul>
    </>
  )
}

export default AllForecast;