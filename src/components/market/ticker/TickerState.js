import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as marketActions from '../../../actions/marketActions';
import * as types from '../../../actions/actionTypes';
import * as Const from '../../common/AppConstants';
import { getICO } from '../../common/AppICO';

class TickerState extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.getElement = this.getElement.bind(this);
  }

  getElement(title, locale, stat, ticker, icostate) {
    switch (locale) {
      case types.LOCALE_ENUS:
        switch (title) {
          case 'LABEL1B':
            if (locale == types.LOCALE_ENUS && icostate.length > 0)      return <span><b>{Const.ENUS_LABEL1b}</b><br/><i>{icostate}</i></span>;
            else if (locale == types.LOCALE_ZHTW && icostate.length > 0) return <span><b>{Const.ZHTW_LABEL1b}</b><br/><i>{icostate}</i></span>;
            else return '';
          case 'LABEL2A':
            if (locale == types.LOCALE_ENUS && icostate.length > 0)      return <div><b>{Const.ENUS_LABEL2a}</b><br/><i>{icostate}</i></div>;
            else if (locale == types.LOCALE_ZHTW && icostate.length > 0) return <div><b>{Const.ZHTW_LABEL2a}</b><br/><i>{icostate}</i></div>;
            else return '';
          case 'LABEL2B':
            if (locale == types.LOCALE_ENUS && icostate.length > 0)      return <span><b>{Const.ENUS_LABEL2b}</b><i>{icostate}</i></span>;
            else if (locale == types.LOCALE_ZHTW && icostate.length > 0) return <span><b>{Const.ZHTW_LABEL2b}</b><i>{icostate}</i></span>;
            else return '';
        }
        //
        if (stat[ticker.tick.name][ticker.door.type].netp.length == 0) return '';
        else if (ticker.door.type == 'yang') {
          switch (title) {
            case 'AVERAGE': return <li>{Const.ENUS_YANG_AVG}{stat[ticker.tick.name].yang.average}</li>;
            case 'CYCLES':  return <li>{Const.ENUS_YANG_CYCLES}{stat[ticker.tick.name].yang.netp.length}</li>;
            case 'DISTCH':  return <li>{Const.ENUS_YANG_DISTCH} (TBA in D3.js)</li>;
            case 'MEDIAN':  return <li>{Const.ENUS_YANG_MED}{stat[ticker.tick.name].yang.median}</li>;
            case 'SEAEND':  return <li>{Const.ENUS_YANG_TOPMON} (TBA in D3.js)</li>;
          }
        }
        else {
          switch (title) {
            case 'AVERAGE': return <li>{Const.ENUS_YIN_AVG}{stat[ticker.tick.name].yin.average}</li>;
            case 'CYCLES':  return <li>{Const.ENUS_YIN_CYCLES}{stat[ticker.tick.name].yin.netp.length}</li>;
            case 'DISTCH':  return <li>{Const.ENUS_YIN_DISTCH} (TBA in D3.js)</li>;
            case 'MEDIAN':  return <li>{Const.ENUS_YIN_MED}{stat[ticker.tick.name].yin.median}</li>;
            case 'SEAEND':  return <li>{Const.ENUS_YIN_BOTMON} (TBA in D3.js)</li>;
          }
        }
        switch (title) {
          case 'SEABEGIN': return <li>{Const.ENUS_SEA_BEGIN} (TBA in D3.js)</li>;
          case 'STATDATA': return <h4>{Const.ENUS_STAT_DATA}</h4>;
        }
        break;
      case types.LOCALE_ZHTW:
        if (stat[ticker.tick.name][ticker.door.type].netp.length == 0) return '';
        else if (ticker.door.type == 'yang') {
          switch (title) {
            case 'AVERAGE': return <li>{Const.ZHTW_YANG_AVG}{stat[ticker.tick.name].yang.average}</li>;
            case 'CYCLES':  return <li>{Const.ZHTW_YANG_CYCLES}{stat[ticker.tick.name].yang.netp.length}</li>;
            case 'DISTCH':  return <li>{Const.ZHTW_YANG_DISTCH} (TBA in D3.js)</li>;
            case 'MEDIAN':  return <li>{Const.ZHTW_YANG_MED}{stat[ticker.tick.name].yang.median}</li>;
            case 'SEAEND':  return <li>{Const.ZHTW_YANG_TOPMON} (TBA in D3.js)</li>;
          }
        }
        else {
          switch (title) {
            case 'AVERAGE': return <li>{Const.ZHTW_YIN_AVG}{stat[ticker.tick.name].yin.average}</li>;
            case 'CYCLES':  return <li>{Const.ZHTW_YIN_CYCLES}{stat[ticker.tick.name].yin.netp.length}</li>;
            case 'DISTCH':  return <li>{Const.ZHTW_YIN_DISTCH}</li>;
            case 'MEDIAN':  return <li>{Const.ZHTW_YIN_MED}{stat[ticker.tick.name].yin.median}</li>;
            case 'SEAEND':  return <li>{Const.ZHTW_YIN_BOTMON}</li>;
          }
        }
        switch (title) {
          case 'SEABEGIN': return <li>{Const.ZHTW_SEA_BEGIN}</li>;
          case 'STATDATA': return <h4>{Const.ZHTW_STAT_DATA}</h4>;
        }
        break;
      default:
        return '';
    }
  }

  getYiXiang(locale) {
    switch (locale) {
      case types.LOCALE_ENUS: return Const.ENUS_YI_XIANG;
      case types.LOCALE_ZHTW: return Const.ZHTW_YI_XIANG;
    }
  }

  render() {
    const {actions, locale, stat, ticker} = this.props;
    const ico = getICO(locale, ticker);
    let label1a, label2a, label2b, statData;
    let seaEnd;
    switch (locale) {
      case types.LOCALE_ENUS:
        label1a = Const.ENUS_LABEL1a;
        label2a = Const.ENUS_LABEL2a;
        label2b = Const.ENUS_LABEL2b;
        statData = Const.ENUS_STAT_DATA;
        if (ticker.door.type == 'yang') {
          seaEnd = Const.ENUS_YANG_TOPMON;
        } else {
          seaEnd = Const.ENUS_YIN_BOTMON;
        }
        break;
      case types.LOCALE_ZHTW:
        label1a = Const.ZHTW_LABEL1a;
        label2a = Const.ZHTW_LABEL2a;
        label2b = Const.ZHTW_LABEL2b;
        statData = Const.ZHTW_STAT_DATA;
        if (ticker.door.type == 'yang') {
          seaEnd = Const.ZHTW_YANG_TOPMON;
        } else {
          seaEnd = Const.ZHTW_YIN_BOTMON;
        }
        break;
      default:
        alert('Unsupported locale, ' + locale);
        break;
    }
    return(
      <tr>
        <td colSpan={4}>
          <h4>{ticker.door.fore} {this.getYiXiang(locale)}:</h4>
          <div>
            <b>{label1a}</b><br/><i>{ico.state1a}</i>
            {this.getElement("LABEL1B", locale, stat, ticker, ico.state1b)}
            <br/>
            {this.getElement("LABEL2A", locale, stat, ticker, ico.state2a)}
            {this.getElement("LABEL2B", locale, stat, ticker, ico.state2b)}
          </div>
        </td>
        <td colSpan={5}>
          {this.getElement("STATDATA", locale, stat, ticker)}
          <ul>
            {/*{this.getElement("CYCLES", locale, stat, ticker)}*/} {/* total # of cycles of the door */}
            {this.getElement("AVERAGE", locale, stat, ticker)}
            {this.getElement("MEDIAN", locale, stat, ticker)}
            {this.getElement("DISTCH", locale, stat, ticker)}
            {this.getElement("SEABEGIN", locale, stat, ticker)} {/* SEABEGIN - seasonality begin months */}
            {this.getElement("SEAEND", locale, stat, ticker)} {/* SEAEND - seasonality top/bottom-out months */}
          </ul>
        </td>
      </tr>
    );
  }

}

TickerState.propTypes = {
  actions:  PropTypes.object.isRequired,
  //archives: PropTypes.object.isRequired,
  locale:   PropTypes.string.isRequired,
  stat:     PropTypes.object.isRequired,
  ticker:   PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  //console.log('state.market.stat = ', state.market.stat);
  return {
    //archives: state.data.archives,
    stat:     state.market.stat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerState);

