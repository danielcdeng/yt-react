import { browserHistory } from 'react-router';
import * as types from '../actions/actionTypes';
import initReducerState from './initReducerState';

export default function weatherReducer(state = initReducerState.weather, action) {

  console.log('weatherReducer:');
  console.log('  par state = ', state);
  console.log('  par action = ', action);

  // Init the new state:
  let newState = {
    ajax:     state.ajax,
    cities:   state.cities,   // object (hashed) holding only the names of all cities
    location: state.location, // as the city name given by the user
    forecast: state.forecast,
    present:  state.present,
    usCities: state.usCities,
    viewform: state.viewform // to view the input form, true (user can enter) or false (weather data)
  };

  switch (action.type) {

    case types.LOAD_CITY_COUNTRY_LIST_SUCCESS:
      console.log('weatherReducer, LOAD_CITY_COUNTRY_LIST_SUCCESS');
      switch (action.country) {
        case types.COUNTRY_US_NAME: // US
          newState.cities = {};
          newState.usCities = JSON.parse(JSON.stringify(action.cities));
          newState.usCities.forEach(city => {
            newState.cities[city.name.slice(0)] = true;
          });
          break;
        default: break;
      }
      break;

    case types.LOAD_FORECAST_WEATHER_SUCCESS:
      console.log('weatherReducer, LOAD_FORECAST_WEATHER_SUCCESS');
      newState.forecast = JSON.parse(JSON.stringify(action.forecast));
      break;

    case types.LOAD_PRESENT_WEATHER_SUCCESS:
      console.log('weatherReducer, LOAD_PRESENT_WEATHER_SUCCESS');
      newState.present = JSON.parse(JSON.stringify(action.present));
      break;

    case types.WEATHER_AJAX_CALL_BEGIN:
      console.log('weatherReducer, MARKET_AJAX_CALL_BEGIN');
      newState.ajax += 1;
      break;
    case types.WEATHER_AJAX_CALL_ERROR:
    case types.WEATHER_AJAX_CALL_SUCCESS:
      console.log('weatherReducer, WEATHER_AJAX_CALL_ERROR || action.type == types.WEATHER_AJAX_CALL_SUCCESS');
      newState.ajax -= 1;
      break;

    case types.ON_GO_HOME:
      console.log('weatherReducer, ON_GO_HOME');
      browserHistory.push('/');
      break;

    case types.ON_LOCATION_INPUT:
      console.log('weatherReducer, ON_LOCATION_INPUT');
      newState.location = action.location.slice(0);
      break;

    case types.ON_TOGGLE_FORM:
      console.log('weatherReducer, ON_TOGGLE_FORM');
      newState.viewform = action.viewform;
      break;

    case types.TAB_WEATHER:
      console.log('weatherReducer, TAB_WEATHER');
      newState.location = '';
      newState.forecast = [];
      newState.present = {};
      newState.viewform = true;
      break;

    default:
      console.log('weatherReducer, undefined, action.type = "' + action.type + '"');
      break;
  }

  console.log('weatherReducer, newState = ', newState);
  return newState;
}

