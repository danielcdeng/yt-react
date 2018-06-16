import axios from 'axios';

class weatherApi {

  static extractCityCountryList() {
    return new Promise((resolve, reject) => {
      axios({
        method:       'get',
        url:          '/extract.city.list.json',
        responseType: 'json',
        timeout:      20000
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log('GET /city.list.json, error = ', error);
        reject({error, 'message': 'Error in GET /city.list.json'});
      });
    });
  }

  static getCityCountryList(countryName) {
    return new Promise((resolve, reject) => {
      axios({
        method:       'get',
        url:          '/'+countryName+'.city.list.json',
        responseType: 'json',
        timeout:      5000
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log('GET /city.list.json, error = ', error);
        reject({error, 'message': 'Error in GET /city.list.json'});
      });
    });
  }

  static getWeatherData(choice, cityID) {
    const forecastWeatherKey = 'd36f55d8d40d4434c1b52efe4b7946ef';
    const presentWeatherKey  = '78a848a27e7745a932076377365a9556';
    const openWeatherMap = 'https://api.openweathermap.org/data/2.5/';
    let url;
    switch (choice) {
      case 'forecast': // 5-day forecast
        url = openWeatherMap + choice + '?id=' + cityID + '&units=imperial&APPID=' + forecastWeatherKey;
        break;
      case 'weather':  // present weather
        url = openWeatherMap + choice + '?id=' + cityID + '&units=imperial&APPID=' + presentWeatherKey;
        break;
    }
    return new Promise((resolve, reject) => {
      axios({
        method:       'get',
        url:          url,
        responseType: 'json',
        timeout:      5000
      })
      .then(response => {
        let currdate = '', data, desc, temp_max = -1000.0, temp_min = 1000.0;
        let temp_maxarr = [], temp_minarr = [];
        switch (choice) {
          case 'forecast':
            console.log('(5-day forecast) original data = ', response.data);
            response.data.list.forEach(dt => {
              dt.date = dt.dt_txt.split(' ')[0].slice(0);
              dt.time = dt.dt_txt.split(' ')[1].slice(0);
            });
            data = response.data.list.filter(dd => {
              if (response.data.list[0].date == dd.date &&
                  parseInt(response.data.list[0].time.split(':')[0]) > 12) {
                // My weather forecat cut-off time is 12:00:00 noon.
                return false;
              } // skip today's
              else if (currdate != dd.date) {
                if (currdate.length > 0) {
                  temp_maxarr.push(temp_max);
                  temp_minarr.push(temp_min);
                }
                currdate = dd.date.slice(0);
                temp_max = -1000.0;
                temp_min = 1000.0;
              }
              if (dd.main.temp_max > temp_max) temp_max = dd.main.temp_max;
              if (dd.main.temp_min < temp_min) temp_min = dd.main.temp_min;
              if (dd.time == '12:00:00') {
                dd.main.temp = dd.main.temp.toFixed(0);
                dd.main.temp_max = dd.main.temp_max.toFixed(0);
                dd.main.temp_min = dd.main.temp_min.toFixed(0);
                return true;
              }
              return false;
            });
            data.forEach((dd, idx) => {
              if ((idx+1) <= temp_maxarr.length) {
                dd.main.temp_max = temp_maxarr[idx];
                dd.main.temp_min = temp_minarr[idx];
              } else {
                dd.main.temp_max = temp_max;
                dd.main.temp_min = temp_min;
              }
            });
            break;
          case 'weather':
            console.log('(present) original data = ', response.data);
            data = response.data;
            data.main.temp = data.main.temp.toFixed(0);
            data.main.temp_max = data.main.temp_max.toFixed(0);
            data.main.temp_min = data.main.temp_min.toFixed(0);
            desc = data.weather[0].description.split(' ');
            data.weather[0].description = '';
            if (desc.length >= 1) {
              for (let idx = 0; idx < desc.length; idx++) {
                data.weather[0].description += (desc[idx].slice(0,1).toUpperCase() + desc[idx].slice(1)).slice(0);
                if ((idx + 1) < desc.length) data.weather[0].description += ' ';
              }
            }
            break;
        }
        resolve(data);
      })
      .catch(error => {
        console.log('GET ' + url + ', error = ', error);
        reject({error: error + '. Please check spelling.'});
      });
    });
  }
}

export default weatherApi;
