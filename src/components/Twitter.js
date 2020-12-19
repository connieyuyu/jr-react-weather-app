import React from 'react';
import { twitterIcon, userIcon } from './Icons';

const tempMessage = temp => {
  let message;
  if (temp < 10) message = "It's freezing! Bring your coat!";
  else if (temp < 20) message = "It's cool outside. Keep warm.";
  else if (temp < 30) message = "Nice weather. Let's have a walk;";
  else message = "It's hot today. Remeber to keep hydrated.";
  return message;
};

const weatherMessage = desc => {
  let message;
  let currentWeather = desc.toLowerCase();

  if (currentWeather.includes('clouds')) message = 'Where is the sun?!';
  else if (currentWeather.includes('rain')) message = 'On no...I hate raining...';
  else if (currentWeather.includes('sky'))
    message = 'Woo hoo! Time for some outdoor activities.';
  else if (currentWeather.includes('thunderstorm')) message = 'Bring your umbrella!';
  else if (currentWeather.includes('snow')) message = 'Do you want to build a snowman?';
  else message = 'Misty.';
  return message;
};

export const Twitter = props => {
  const { city, temperature, description } = props;
  let message = tempMessage(temperature);
  let message2 = weatherMessage(description);

  return (
    <>
      <div className="twitter__title">
        { twitterIcon }
        <h3>
          Twitter Feed <span>#{city}</span>
        </h3>
      </div>
      <ul className="twitter__list">
        <li>
          <span>{userIcon}</span>
          <p>{message}</p>
        </li>
        <li>
          <span>{userIcon}</span>
          <p>{message2}</p>
        </li>
      </ul>
    </>
  );
};

export default Twitter;