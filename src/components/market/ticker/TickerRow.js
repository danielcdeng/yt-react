import React from 'react';
import PropTypes from 'prop-types';
import * as acts from '../../../actions/actionTypes';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as marketActions from '../../../actions/marketActions';
import * as Const from '../../common/AppConstants';
import TickerState from './TickerState';

class TickerRow extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.addPlusSignIfPositive = this.addPlusSignIfPositive.bind(this);
    this.onTickerStateCodeClicked = this.onTickerStateCodeClicked.bind(this);
    this.renderStockChart = this.renderStockChart.bind(this);
  }

  addPlusSignIfPositive (num) {
    if (num > 0) return "+" + num;
    return num;
  }

  tickerRowBackgroundColor (ticker) {
    let backgroundColor;
    if (ticker.sess.netp === '0.0') {
      backgroundColor = 'lightGreyBackground';
    } else if (ticker.door.type === 'yang') {
      backgroundColor = 'yangrowbackground';
    } else {
      backgroundColor = 'yinrowbackground';
    }
    return backgroundColor;
  }

  onTickerStateCodeClicked (actions, ticker) {
    return(event => {
      actions.onTickerStateCodeClicked(ticker);
    });
  }

  renderStockChart (name) {
    let url = "";
    switch (name) {
      case acts.TICKER_AAPL:   url = 'http://schrts.co/KYKcjKAp'; break;
      case acts.TICKER_AMZN:   url = 'http://schrts.co/uCEGMzgM'; break;
      case acts.TICKER_CRM:    url = 'http://schrts.co/GqkqnVbV'; break;
      case acts.TICKER_GLD:    url = 'http://schrts.co/EkMBqerA'; break;
      case acts.TICKER_IYR:    url = 'http://schrts.co/zbTYNxYf'; break;
      case acts.TICKER_NASDAQ: url = 'http://schrts.co/BkfMdeUG'; break;
      case acts.TICKER_SHCOMP: url = 'http://schrts.co/KZJSetFJ'; break;
      case acts.TICKER_SLV:    url = 'http://schrts.co/ANjTFyCM'; break;
      case acts.TICKER_SP500:  url = 'http://schrts.co/ZYEKHxPv'; break;
      case acts.TICKER_TAIEX:  url = 'http://schrts.co/ajybMZJk'; break;
      case acts.TICKER_TQQQ:   url = 'http://schrts.co/cIwNBaxN'; break;
      case acts.TICKER_TRAN:   url = 'http://schrts.co/XmawxQUk'; break;
      case acts.TICKER_XLF:    url = 'http://schrts.co/zmQkQBTq'; break;
    }
    // console.log('Market: ' + name);
    // console.log('Stock chart url: ' + url);
    return url;
  }

  //------------------------------------------

  render () {
    const {actions, idx, locale, ticker} = this.props;
    return(
      <tbody>
        <tr className={this.tickerRowBackgroundColor(ticker)}>
          {/* # */}
          <td>{idx}</td>
          {/* Cycle Type */}
          <td>{ticker.door.type == "yang" ? Const.ENUS_POS : Const.ENUS_NEG}</td>
          {/* Ticker Name */}
          <td title={ticker.tick.titl}>
            <span className="marginRight3px">{ticker.tick.name}</span>
            {
              ticker.door.type == "yang" ?
              (parseFloat(ticker.door.lpri) < parseFloat(ticker.door.pri1) ? "-" : null) :
              (parseFloat(ticker.door.lpri) > parseFloat(ticker.door.pri1) ? "+" : null)
            }
          </td>
          {/* State Code */}
          <td>
            <span className="marginRight3px">{ticker.door.fore}</span>
            <input type="checkbox" checked={ticker.tick.scClicked} onClick={this.onTickerStateCodeClicked(actions, ticker)}/>
          </td>
          {/* Begin Date and Price */}
          <td>{ticker.door.dat1}<br/>{ticker.door.pri1}</td>
          {/* Highest Date, Price, +Net% */}
          <td>
            {ticker.door.type == "yang" ? ticker.sess.dat2 : null}<br/>
            {ticker.door.type == "yang" ? ticker.sess.pri2 + "," : null}<br/>
            {ticker.door.type == "yang" ? this.addPlusSignIfPositive(ticker.sess.netp) + "%" : null}
          </td>
          {/* Lowest Date, Price, -Net% */}
          <td>
            {ticker.door.type == "yin" ? ticker.sess.dat2 : null}<br/>
            {ticker.door.type == "yin" ? ticker.sess.pri2 + "," : null}<br/>
            {ticker.door.type == "yin" ? ticker.sess.netp + "%" : null}
          </td>
          {/* Last Date and Price */}
          <td>{ticker.door.ldat}<br/>{ticker.door.lpri}</td>
          {/* Stock Market Chart */}
          <td><a href={this.renderStockChart(ticker.tick.name)} target="_blank">Chart</a></td>
        </tr>
        {ticker.tick.scClicked ? <TickerState key={ticker.tick.name+"-StateCode"} locale={locale} ticker={ticker}/> : null}
      </tbody>
    );
  }
}

TickerRow.propTypes = {
  actions: PropTypes.object.isRequired,
  idx:     PropTypes.number.isRequired,
  locale:  PropTypes.string.isRequired,
  ticker:  PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(marketActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    //scClicked: state.data.scClicked // overall state code clicked, true or false
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerRow);

