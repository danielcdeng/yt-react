import React from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSearch, faTimes} from '@fortawesome/fontawesome-free-solid';
import {CITY_COUNTRY_LIST} from '../common/AppConstants';
import * as weatherActions from '../../actions/weatherActions';
/* eslint-disable */
import I01d from '../../styles/images/01d.png';
import I02d from '../../styles/images/02d.png';
import I03d from '../../styles/images/03d.png';
import I04d from '../../styles/images/04d.png';
import I09d from '../../styles/images/09d.png';
import I10d from '../../styles/images/10d.png';
import I11d from '../../styles/images/11d.png';
import I13d from '../../styles/images/13d.png';
import I50d from '../../styles/images/50d.png';
/* eslint-enable */

class WeatherPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.getMonthDateStr = this.getMonthDateStr.bind(this);
    this.getWeatherIconImage = this.getWeatherIconImage.bind(this);
    this.inputForm = this.inputForm.bind(this);
    this.llLink = this.llLink.bind(this);
    this.latLongLinks = this.latLongLinks.bind(this);
    this.onGoHome = this.onGoHome.bind(this);
    this.onLatLongCityClick = this.onLatLongCityClick.bind(this);
    this.onLocationInput = this.onLocationInput.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.presentWeatherAsyncPoll = this.presentWeatherAsyncPoll.bind(this);
    this.presentWeatherTable = this.presentWeatherTable.bind(this);
    this.render = this.render.bind(this);
    this.weather = this.weather.bind(this);
    this.wRef = React.createRef();
    browserHistory.push('/weather');
    this.state = {
      coords: [], // cities of the same name
      disableInputSubmit: true,
      selectedCity: {}
    };
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    if (this.timerID) clearInterval(this.timerID);
  }

  //-----------------------

  getMonthDateStr(dtTxt) {
    const dtarr = (dtTxt.split(' ')[0]).split('-');
    let dstr = '';
    switch (parseInt(dtarr[1])) {
      case 1:  dstr += 'Jan '; break; case 2:  dstr += 'Feb '; break; case 3:  dstr += 'Mar '; break;
      case 4:  dstr += 'Apr '; break; case 5:  dstr += 'May '; break; case 6:  dstr += 'Jun '; break;
      case 7:  dstr += 'Jul '; break; case 8:  dstr += 'Aug '; break; case 9:  dstr += 'Sep '; break;
      case 10: dstr += 'Oct '; break; case 11: dstr += 'Nov '; break; case 12: dstr += 'Dec '; break;
    }
    dstr += dtarr[2][0] == '0' ? dtarr[2][1] : dtarr[2];
    return dstr;
  }

  getWeatherIconImage(icon) {
    switch (icon) {
      case '01d': return I01d; case '02d': return I02d; case '03d': return I03d; case '04d': return I04d;
      case '09d': return I09d; case '10d': return I10d; case '11d': return I11d; case '13d': return I13d;
      case '50d': return I50d;
      case '01n': return I01d; case '02n': return I02d; case '03n': return I03d; case '04n': return I04d;
      case '09n': return I09d; case '10n': return I10d; case '11n': return I11d; case '13n': return I13d;
      case '50n': return I50d;
      default: break;
    }
  }

  inputForm(actions, cities, location, usCities) {
    return(
      <div className="owmCloudsOnInputForm">
        <div className="owmInputContainer">
          <label style={{color:"white", fontSize:"larger"}}>City or County Name <span style={{fontSize:"large"}}>(case sensitive, US only):</span></label>
          <input ref={this.wRef} className="form-control" id="weatherinput" type="text"
            onChange={this.onLocationInput(actions, cities)}/>
          <br/>
          {/* Change the Submit button color if the city name is not ready to be submitted. */}
          {(this.state.disableInputSubmit||location.length==0) ? <input type="submit" className="btn btn-outline-secondary" disabled={this.state.disableInputSubmit}/> : null}
          {!this.state.disableInputSubmit ? <input type="submit" className="btn btn-info owmInputBox" onClick={this.onToggleForm(actions,false,location,usCities)}/> : null}
          <button className="btn btn-warning owmHomeBox alignRight"
             onClick={this.onGoHome(actions)}>Home</button>
          <br/><br/>
          <div style={{color:"gold"}}>
            Reference: Click <a style={{color:"pink"}} href="https://openweathermap.org/forecast5#5days" target="_blank">here</a> for more information regarding the API.
          </div>
          <br/><br/><br/>
        </div>
      </div>
    );
  }

  llLink(city) {
    const qstr = "https://www.latlong.net/c/?lat=" + city.coord.lat + "&long=" + city.coord.lon;
    return(
      <a href={qstr} target="_blank" style={{color:"whitesmoke"}}>({city.coord.lat}, {city.coord.lon})</a>
    );
  }

  // Latitude, longtitude link
  latLongLinks(actions, location, usCities) {
    const coords = this.state.coords;
    return(
        <div className="row">
          <div className="col-sm-12">
            <div align="center">
              {coords.length > 1 ? <div style={{color:"whitesmoke"}} className="owmLatLongClickInstruction">Click the (lat, long) link to identify your city on Google Map.</div> : null}
              <table>
                <tbody>
                  {
                    coords.map((city, idx) => {
                      return(
                        <tr key={idx}>
                          <td align="right" className="col-sm-2" >
                            <input type="radio" value="lastlon.{idx}" checked={city.clicked}
                              onChange={this.onLatLongCityClick(actions, usCities, idx)}/>
                          </td>
                          <td align="left" className="col-sm-10">
                            {this.llLink(city)}
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }

  onGoHome(actions) {
    return event => {
      actions.onGoHome();
    };
  }

  onLatLongCityClick(actions, usCities, idx) {
    return(event => {
      const coords = JSON.parse(JSON.stringify(this.state.coords));
      if (coords.length == 1) return;
      coords.forEach(city => city.clicked = false);
      coords[idx].clicked = true;
      this.setState({coords});
      const cityID = coords[idx].id;
      actions.getNewPresentWeather(cityID);
      actions.getNewFiveDayForecast(cityID);
    });
  }

  onLocationInput(actions, cities) {
    return event => {
      const node = this.wRef.current;
      if (node) {
        let location = node.value;
        this.setState({disableInputSubmit: true});
        if (!location || location.length == 0) {
          actions.onLocationInput('');
        } else if (cities[location]) {
          this.setState({disableInputSubmit: false}); // city exists!
          actions.onLocationInput(location);
        }
      }
    };
  }

  onToggleForm(actions, viewform, location, usCities) {
    return event => {
      if (viewform) {
        this.setState({coords:[]}); // re-beginning
      }
      else {
        // Retire the view form (input box) and get the weather data:
        let cityID = -1, idx = 0;
        for (; !viewform && idx < usCities.length; idx++) {
          if (usCities[idx].name == location) {
            cityID = usCities[idx].id;
            this.setState({selectedCity:usCities[idx]});
            break;
          }
        }
        if (cityID < 0) {
          alert('Error: The city of "' + location + '" does not have a City ID in the list.');
          this.setState({disableInputSubmit: true});
          return;
        }
        // Location (city) found:
        let coords = []; // cities of the same name
        usCities.forEach(city => {
          if (city.name == location) {
            city = JSON.parse(JSON.stringify(city));
            city.clicked = false;
            coords.push(city);
          }
        });
        coords[0].clicked = true;
        this.setState({coords});
        actions.getPresentWeather(cityID);
        actions.getFiveDayForecast(cityID);
      }
      actions.onToggleForm(viewform);
    };
  }

  presentWeatherAsyncPoll(actions) {
    const location = this.props.location;
    this.timerID = setInterval(location => {
      actions.getPresentWeather(location);
    }, 3*3600*1000);
  }

  presentWeatherTable(actions, present) {
    // this.presentWeatherAsyncPoll(actions); // my weather api key has time limits
    return(
      <table className="owm" id="owmPresentWeatherDataTable">
        <tbody>
        <tr>
          <td width="60%" className="mainTempText">
            <span>{present.main.temp}<sup className="owm mainTempDegree">{'° F'}</sup></span>
          </td>
          <td width="40%" className="mainTempDesc">
            <span>{present.weather[0].description}</span><br/>
            <span>{present.main.humidity + '% Humidity'}</span>
          </td>
        </tr>
        </tbody>
      </table>
    );
  }

  weather(actions, location, forecast, present, usCities) {
    if (forecast && forecast.length > 0 && present && present['main']) {
      return (
        <div className="owmCloudsOnWeatherData">
          <div className="container owm">
            <div className="panel panel-info owm">
              <div className="panel-heading owm">
                <FontAwesomeIcon icon={faSearch} className="alignLeft marginRight10px"/>
                <span>{location}&nbsp;&nbsp;({this.state.selectedCity.coord.lat}, {this.state.selectedCity.coord.lon})</span>
                <FontAwesomeIcon className="alignRight" icon={faTimes} onClick={this.onToggleForm(actions, true)}/>
                <hr className="hrMarginTop"/>
                {this.presentWeatherTable(actions, present)} {/* present weather data table */}
              </div>
              <div className="panel-body">
                <table className="owm">
                  <tbody>
                  <tr className="textAlignCenter">
                    {
                      forecast.map((data, idx) => {
                        return (
                          <td key={idx} width="20%" className="vl">
                            <div className="panelBodyDateStr">{this.getMonthDateStr(data.dt_txt)}</div>
                            <div><img src={this.getWeatherIconImage(data.weather[0].icon)}/></div>
                            <div><b className="maxTemp">{Math.round(data.main.temp_max)}</b></div>
                            <div><b className="minTemp">{Math.round(data.main.temp_min)}</b></div>
                          </td>
                        );
                      })
                    }
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{color: "gold", textAlign: "center"}}>
              {/*The react-auto-polling is applied to update the weather forecast every 3 hours.<br/>*/}
              To enter a new location, click the <span style={{fontSize:"20px"}}>&times;</span> located at the right of <i>{location}</i>.<br/>
            </div>
            {this.latLongLinks(actions, location, usCities)}
            <br/><br/>
          </div>
        </div>
      );
    } else {
      return(
        <div className="container owm">
          <h3 style={{color:"orange"}}><i>Weather Data Loading.........</i></h3>
        </div>
      );
    }
  } // weather

  //-----------------------

  render() {
    const {actions, cities, forecast, location, present, usCities, viewform} = this.props;
    if (document.getElementById('weatherinput')) document.getElementById('weatherinput').focus();
    return(
      <div className="owmBackground">
        {viewform ? this.inputForm(actions, cities, location, usCities) : this.weather(actions, location, forecast, present, usCities)}
      </div>
    );
  }
} // class OpenWeatherMapPage

WeatherPage.propTypes = {
  actions:  PropTypes.object.isRequired,
  cities:   PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
  location: PropTypes.string,
  present:  PropTypes.object.isRequired,
  usCities: PropTypes.array.isRequired,
  viewform: PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  };
}

function mapStateToProps(store) {
  //console.log('WeatherPage, mapStateToProps, store = ', store);
  return {
    cities:   store.weather.cities,  // hashed object that contains city name with value always true
    forecast: store.weather.forecast,
    locale:   store.common.locale,
    location: store.weather.location,
    present:  store.weather.present,
    usCities: store.weather.usCities,
    viewform: store.weather.viewform  // true or false to view the input form
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);

