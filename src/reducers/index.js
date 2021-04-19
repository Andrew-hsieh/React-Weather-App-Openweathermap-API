import { combineReducers } from 'redux';

const currentReducer = (prevState = {}, action) => {
    switch (action.type) {
      case 'FETCH_CURRENT_WEATHER':
        return action.payload;
      case 'FETCH_CURRENT_ERROR':
        return prevState;
      default:
        return prevState;
    }
  };

 const dailyReducer = (prevState = {}, action) => {
    switch (action.type) {
      case 'FETCH_DAILY_WEATHER':
        return action.payload;
      default:
        return prevState;
    }
  };
const tempScaleReducer = (prevState = 'celsius', action) => {
  switch (action.type) {
    case 'TOGGLE_TEMP_SCALE':
      return prevState === 'celsius' ? 'fahrenheit' : 'celsius';
    default:
      return prevState;
  }
};
  export default combineReducers({daily:dailyReducer, current:currentReducer,tempScale:tempScaleReducer});

