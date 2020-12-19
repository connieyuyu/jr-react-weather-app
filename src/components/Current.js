import React from 'react';

const Current = props => {
  const { temperature, description, humidity, wind, city } = props;

  return (
    <>
      <div className="card__main__left">
        <h2>{Math.round(temperature)}</h2>
        <p>{description}</p>
          <ul>
            <li>
              <h4>Humidity</h4>
              <p>{humidity}%</p>
            </li>
            <li>
              <h4>Wind</h4>
              <p>{wind} K/M</p>
            </li>
          </ul>
      </div>
      <div className="card__main__right">
        <h1>{city}</h1>
      </div>
    </>
  );
};

export default Current;
