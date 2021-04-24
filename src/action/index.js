import axios from 'axios';

const API_KEY = 'd8c5145ea0875d1f99e3b8a99b54e033';

export const fetchCurrentWeather = (lat, lon) => async (dispatch) => {
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(
      (response) => {
        dispatch({
          type: 'FETCH_CURRENT_WEATHER',
          payload: response.data,
        });
      },
    )
    .catch(() => {
      dispatch({
        type: 'FETCH_CURRENT_ERROR',
      });
    });
};

export const fetchDailyWeather = (lat, lon) => async (dispatch) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}`,
  );
  dispatch({
    type: 'FETCH_DAILY_WEATHER',
    payload: response.data,
  });
};

export const fetchDailyAndCurrentWeather = (lat, lon) => async (dispatch) => {
  dispatch(fetchCurrentWeather(lat, lon));
  dispatch(fetchDailyWeather(lat, lon));
};

export const toggleTempScale = () => ({ type: 'TOGGLE_TEMP_SCALE' });
