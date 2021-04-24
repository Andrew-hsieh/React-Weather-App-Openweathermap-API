/* eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDailyAndCurrentWeather } from '../action';

const liClassName = 'col-md-3 d-flex flex-column justify-content-center list-group-item text-center  bg-dark text-white';

const CurrentWeather = ({
  fetchDailyAndCurrentWeather, current, temperature, daily,
}) => {
  useEffect(() => {
    fetchDailyAndCurrentWeather(-37.813629, 144.963058);
  }, [fetchDailyAndCurrentWeather]);
  if (Object.keys(current).length !== 0) {
    return (
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="p-0 text-center col-md border border-dark rounded">
          <div className="">
            <h1 className="mt-3">{current.name}</h1>
            <h6>{current.weather[0].description}</h6>
          </div>
          <div>
            <p style={{ fontSize: '5rem' }}>{temperature(current.main.temp)}</p>
          </div>
        </div>
        <div style={{ width: '15px' }} />
        <div className="col-md container my-3 p-0">
          <div className="list-group-flush d-flex flex-column flex-md-row justify-content-center">
            <li className={liClassName}>
              <small className="my-2">Highs temp</small>
              <h6>{temperature(current.main.temp_max)}</h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Lows temp</small>
              <h6>{temperature(current.main.temp_min)}</h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Feels-like</small>
              <h6>{temperature(current.main.feels_like)}</h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Humidity</small>
              <h6>
                {current.main.humidity}
                {' '}
                %
              </h6>
            </li>
          </div>
          <div className="list-group-flush d-flex flex-column flex-md-row justify-content-center">
            <li className={liClassName}>
              <small className="my-2">Wind speed</small>
              <h6>
                {current.wind.speed}
                {' '}
                m/sec
              </h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Wind deg</small>
              <h6>
                {current.wind.deg}
                {' '}
                °
              </h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Pressure</small>
              <h6>
                {current.main.pressure}
                {' '}
                hPa
              </h6>
            </li>
            <li className={liClassName}>
              <small className="my-2">Chance of rain</small>
              {daily ? `${(daily[0].pop * 100).toFixed(0)}%` : '/'}
            </li>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ current: state.current, daily: state.daily.daily });

export default connect(mapStateToProps, { fetchDailyAndCurrentWeather })(CurrentWeather);
