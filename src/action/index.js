import axios from 'axios';

const API_KEY = 'd8c5145ea0875d1f99e3b8a99b54e033';

export const fetchCurrentWeather = (city='melbourne') => {
  return async (dispatch) => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    .then(
      response=>{
        dispatch({
          type: 'FETCH_CURRENT_WEATHER',
          payload: response.data,
        });
      }
    )
    .catch((error) => {
      dispatch({
        type: 'FETCH_CURRENT_ERROR',
      });
    });
  };
};

export const fetchDailyWeather = (lat, lon) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`
    );
    dispatch({
      type: 'FETCH_DAILY_WEATHER',
      payload: response.data,
    });
  };
};

export const fetchDailyAndCurrentWeather = (city) => {
  return async (dispatch, getState) => {
    await dispatch(fetchCurrentWeather(city));
    const coords = getState().current.coord;
    await dispatch(fetchDailyWeather(coords.lat, coords.lon));
  };
};

export const toggleTempScale = () => {
  return { type: 'TOGGLE_TEMP_SCALE' };
};