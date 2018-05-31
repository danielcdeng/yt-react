import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as acts from '../../actions/actionTypes';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as portfolioActions from "../../actions/portfolioActions";

class TickerRow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.addPlusSignIfPositive = this.addPlusSignIfPositive.bind(this);
    this.renderStockChart = this.renderStockChart.bind(this);
  }

  addPlusSignIfPositive(num) {
    if (num > 0) return "+" + num;
    return num;
  }

  renderStockChart(name) {
    let url = "";
    switch (name) {
      case acts.TICKER_AAPL:   url = "http://schrts.co/1WQHNj"; break;
      case acts.TICKER_AMZN:   url = "http://schrts.co/B522bC"; break;
      case acts.TICKER_BABA:   url = "http://schrts.co/kpxw5N"; break;
      case acts.TICKER_BTC:    url = "http://schrts.co/ko4DxG"; break;
      case acts.TICKER_CRM:    url = "http://schrts.co/s567pS"; break;
      case acts.TICKER_DAX:    url = "http://schrts.co/BZVUKD"; break;
      case acts.TICKER_FB:     url = "http://schrts.co/2oa3zw"; break;
      case acts.TICKER_GLD:    url = "http://schrts.co/XdsA1t"; break;
      case acts.TICKER_GOOGL:  url = "http://schrts.co/YiKMyE"; break;
      case acts.TICKER_IYR:    url = "http://schrts.co/9nWEcr"; break;
      case acts.TICKER_KOSPI:  url = "http://schrts.co/8dBMjt"; break;
      case acts.TICKER_MSFT:   url = "http://schrts.co/78cr96"; break;
      case acts.TICKER_NASDAQ: url = "http://schrts.co/sHLHtV"; break;
      case acts.TICKER_NFLX:   url = "http://schrts.co/eawMYC"; break;
      case acts.TICKER_NVDA:   url = "http://schrts.co/YkMhz1"; break;
      case acts.TICKER_SHCOMP: url = "http://schrts.co/jwZaMm"; break;
      case acts.TICKER_SLV:    url = "http://schrts.co/A8qPRU"; break;
      case acts.TICKER_SP500:  url = "http://schrts.co/htQwjW"; break;
      case acts.TICKER_TAIEX:  url = "http://schrts.co/xdnJNz"; break;
      case acts.TICKER_TQQQ:   url = "http://schrts.co/kPBCn9"; break;
      case acts.TICKER_TRAN:   url = "http://schrts.co/mLjwVb"; break;
      case acts.TICKER_TSLA:   url = "http://schrts.co/8BRrmL"; break;
      case acts.TICKER_TSM:    url = "http://schrts.co/28mbxu"; break;
      case acts.TICKER_XLE:    url = "http://schrts.co/YxSoaj"; break;
      case acts.TICKER_XLF:    url = "http://schrts.co/pf3qUY"; break;
    }
    // console.log('Market: ' + name);
    // console.log('Stock chart url: ' + url);
    return url;
  }

  render() {
    const {ticker} = this.props;
    return(
      <tr className={ticker.door.type == "yang" ? "yangrowbackground" : "yinrowbackground"}>
        <td>
          {ticker.door.type == "yang" ? "yang" : "yin"}
        </td>
        <td title={ticker.tick.titl}>
          {ticker.tick.name}&nbsp;
          {ticker.door.type == "yang" ? (parseFloat(ticker.door.lpri) < parseFloat(ticker.door.pri1) ? "-" : "") : (parseFloat(ticker.door.lpri) > parseFloat(ticker.door.pri1) ? "+" : "")}
        </td>
        <td>
          {ticker.door.fore}&nbsp;&nbsp;
          <input checked={ticker.tick.scClicked} type="checkbox"/>
        </td>
        <td>
          {ticker.door.dat1}<br/>
          {ticker.door.pri1}
        </td>
        <td>
          {ticker.door.type == "yang" ? ticker.sess.dat2 : ""}<br/>
          {ticker.door.type == "yang" ? ticker.sess.pri2 + ", " : ""}&nbsp;
          {ticker.door.type == "yang" ? this.addPlusSignIfPositive(ticker.sess.netp) + "%" : ""}
        </td>
        <td>
          {ticker.door.type == "yin" ? ticker.sess.dat2 : ""}<br/>
          {ticker.door.type == "yin" ? ticker.sess.pri2 + ", " : ""}&nbsp;
          {ticker.door.type == "yin" ? ticker.sess.netp + "%" : ""}
        </td>
        <td>
          {ticker.door.ldat}<br/>
          {ticker.door.lpri}
        </td>
        <td><a href={this.renderStockChart(ticker.tick.name)} target="_blank">Chart</a></td>
      </tr>
    );
  }

}

TickerRow.propTypes = {
  ticker: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(portfolioActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    //scClicked: state.data.scClicked // overall state code clicked, true or false
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerRow);

