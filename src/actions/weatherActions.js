import * as types from './actionTypes';
import weatherApi from '../api/weatherApi';
import { ajaxStatusAction } from './ajaxStatusActions';

function loadCityCountryListSuccess(cities, country) {
  console.log('Action loadCityCountryListSuccess');
  return {type: types.LOAD_CITY_COUNTRY_LIST_SUCCESS, cities, country};
}

function loadForecastWeatherSuccess(forecast) {
  console.log('Action loadForecastWeatherSuccess');
  return {type: types.LOAD_FORECAST_WEATHER_SUCCESS, forecast};
}

function loadPresentWeatherSuccess(present) {
  console.log('Action loadPresentWeatherSuccess');
  return {type: types.LOAD_PRESENT_WEATHER_SUCCESS, present};
}

export function onGoHome() {
  console.log('Action onGoHome');
  return {type: types.ON_GO_HOME};
}

export function onToggleForm(viewform) {
  console.log('Action onToggleForm');
  return {type: types.ON_TOGGLE_FORM, viewform};
}

export function onLocationInput(location) {
  console.log('Action onCityStateInput');
  return {type: types.ON_LOCATION_INPUT, location};
}

/***** Thunk APIs *****/

export function extractCityCountryList() {
  return dispatch => {
    dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_BEGIN));
    return weatherApi.extractCityCountryList().then(cclist => {
    }).catch(error => {
      alert(error.error);
    });
  };
}

export function getCityCountryList(country) {
  return dispatch => {
    dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_BEGIN));
    return weatherApi.getCityCountryList(country).then(cities => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_SUCCESS));
      switch (country) {
        case types.COUNTRY_US_NAME: dispatch(loadCityCountryListSuccess(cities, types.COUNTRY_US_NAME)); break;
        default: alert('Only US weather forecast at this time.'); break;
      }
    }).catch(error => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_ERROR));
      alert(error.error);
    });
  };
}

export function getNewFiveDayForecast(cityID) {
  return dispatch => {
    return weatherApi.getWeatherData('forecast', cityID).then(forecast => {
      dispatch(loadForecastWeatherSuccess(forecast));
    }).catch(error => {
      alert(error.error);
    });
  };
}

export function getFiveDayForecast(cityID) {
  return dispatch => {
    dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_BEGIN));
    return weatherApi.getWeatherData('forecast', cityID).then(forecast => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_SUCCESS));
      dispatch(loadForecastWeatherSuccess(forecast));
    }).catch(error => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_ERROR));
      alert(error.error);
    });
  };
}

export function getNewPresentWeather(cityID) {
  return dispatch => {
    return weatherApi.getWeatherData('weather', cityID).then(present => {
      dispatch(loadPresentWeatherSuccess(present));
    }).catch(error => {
      alert(error.error);
    });
  };
}

export function getPresentWeather(cityID) {
  return dispatch => {
    dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_BEGIN));
    return weatherApi.getWeatherData('weather', cityID).then(present => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_SUCCESS));
      dispatch(loadPresentWeatherSuccess(present));
    }).catch(error => {
      dispatch(ajaxStatusAction(types.WEATHER_AJAX_CALL_ERROR));
      alert(error.error);
    });
  };
}

