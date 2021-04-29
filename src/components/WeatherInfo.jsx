import React from 'react';
import PropTypes from 'prop-types';
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

WeatherInfo.propTypes = {
  tempScale: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ tempScale: state.tempScale });
export default connect(mapStateToProps)(WeatherInfo);
