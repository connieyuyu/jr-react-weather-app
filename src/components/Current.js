import React from 'react';

const Current = props => {
  const { temperature, description, humidity, wind } = props;

  return (
    <>
      <h1>Brisbane</h1>
      <div className="cafd_main_left">
        <h2>{temperature}</h2>
        <p>{description}</p>
        <div>
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
      </div>
    </>
  );
};

export default Current;
