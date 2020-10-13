import React, { Component } from 'react';
import { Sun, Rain, Storm, Cloud } from './Icons';

const Forecast = () => {
  const items = [
    {
      weekday: 'mon',
      temperature: '9°',
      icon: Rain,
      description: 'raining',
    },
    {
      weekday: 'tue',
      temperature: '9°',
      icon: Sun,
      description: 'sunny',
    },
    {
      weekday: 'wed',
      temperature: '9°',
      icon: Storm,
      description: 'sunny',
    },
    {
      weekday: 'thu',
      temperature: '9°',
      icon: Cloud,
      description: 'cloudy',
    },
    {
      weekday: 'fri',
      temperature: '9°',
      icon: Sun,
      description: 'sunny',
    },
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <h1>{item.weekday}</h1>
          <p>{item.icon}</p>
          <p>{item.temperature}</p>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
export default Forecast;
