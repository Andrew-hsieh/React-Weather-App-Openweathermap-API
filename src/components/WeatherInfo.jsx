/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import { kelvinToCelsius, kelvinToFahrenheit } from '../helper';

const WeatherInfo = ({ tempScale }) => {
  const temperature = (temp) => (tempScale === 'celsius' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp));

  return (
    <div>
      <CurrentWeather temperature={temperature} />
      <DailyWeather temperature={temperature} />
    </div>
  );
};

const mapStateToProps = (state) => ({ tempScale: state.tempScale });
export default connect(mapStateToProps)(WeatherInfo);
