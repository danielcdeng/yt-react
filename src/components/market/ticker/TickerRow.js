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
      case acts.TICKER_AAPL:   url = "http://schrts.co/jfVLqk"; break;
      case acts.TICKER_AMZN:   url = "http://schrts.co/Ch3wnn"; break;
      case acts.TICKER_BABA:   url = "http://schrts.co/Ekv8hV"; break;
      case acts.TICKER_BTC:    url = "http://schrts.co/Px6Rea"; break;
      case acts.TICKER_CRM:    url = "http://schrts.co/RExjWn"; break;
      case acts.TICKER_DAX:    url = "http://schrts.co/FT2Ejz"; break;
      case acts.TICKER_FB:     url = "http://schrts.co/y2JDzF"; break;
      case acts.TICKER_GLD:    url = "http://schrts.co/kTTHzz"; break;
      case acts.TICKER_GOOGL:  url = "http://schrts.co/Sfck46"; break;
      case acts.TICKER_IYR:    url = "http://schrts.co/dy4cAe"; break;
      case acts.TICKER_KOSPI:  url = "http://schrts.co/Td4Tt8"; break;
      case acts.TICKER_MSFT:   url = "http://schrts.co/wjjiQh"; break;
      case acts.TICKER_NASDAQ: url = "http://schrts.co/5KDzTL"; break;
      case acts.TICKER_NFLX:   url = "http://schrts.co/9iy7iT"; break;
      case acts.TICKER_NVDA:   url = "http://schrts.co/kjvbYz"; break;
      case acts.TICKER_SBUX:   url = "http://schrts.co/Z9V6E9"; break;
      case acts.TICKER_SHCOMP: url = "http://schrts.co/qq3CkZ"; break;
      case acts.TICKER_SLV:    url = "http://schrts.co/GCs84C"; break;
      case acts.TICKER_SP500:  url = "http://schrts.co/dnpDro"; break;
      case acts.TICKER_TAIEX:  url = "http://schrts.co/bRSnhX"; break;
      case acts.TICKER_TRAN:   url = "http://schrts.co/BHgXmi"; break;
      case acts.TICKER_TSLA:   url = "http://schrts.co/5adNFv"; break;
      case acts.TICKER_TSM:    url = "http://schrts.co/xwDT2s"; break;
      case acts.TICKER_XLE:    url = "http://schrts.co/6hxVNP"; break;
      case acts.TICKER_XLF:    url = "http://schrts.co/9rfcAv"; break;
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

