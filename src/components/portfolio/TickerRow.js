import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as market from './TickerSymbols';

const TickerRow = ({ticker}) => {

  function addPlusSignIfPositive(num) {
    if (num > 0) return "+" + num;
    return num;
  }

  function cycleType(doorType) {
    switch (doorType) {
      case 'yang': return "I";
      default:     return "II";
    }
  }

  function renderStockChart(name) {
    let url = "";
    switch (name) {
      case market.AAPL:   url = "http://schrts.co/1WQHNj"; break;
      case market.AMZN:   url = "http://schrts.co/B522bC"; break;
      case market.BABA:   url = "http://schrts.co/kpxw5N"; break;
      case market.BTC:    url = "http://schrts.co/ko4DxG"; break;
      case market.CRM:    url = "http://schrts.co/s567pS"; break;
      case market.DAX:    url = "http://schrts.co/BZVUKD"; break;
      case market.FB:     url = "http://schrts.co/2oa3zw"; break;
      case market.GLD:    url = "http://schrts.co/XdsA1t"; break;
      case market.GOOGL:  url = "http://schrts.co/YiKMyE"; break;
      case market.IYR:    url = "http://schrts.co/9nWEcr"; break;
      case market.KOSPI:  url = "http://schrts.co/8dBMjt"; break;
      case market.MSFT:   url = "http://schrts.co/78cr96"; break;
      case market.NASDAQ: url = "http://schrts.co/sHLHtV"; break;
      case market.NFLX:   url = "http://schrts.co/eawMYC"; break;
      case market.NVDA:   url = "http://schrts.co/YkMhz1"; break;
      case market.SHCOMP: url = "http://schrts.co/jwZaMm"; break;
      case market.SLV:    url = "http://schrts.co/A8qPRU"; break;
      case market.SPX:    url = "http://schrts.co/htQwjW"; break;
      case market.TAIEX:  url = "http://schrts.co/xdnJNz"; break;
      case market.TQQQ:   url = "http://schrts.co/kPBCn9"; break;
      case market.TRAN:   url = "http://schrts.co/mLjwVb"; break;
      case market.TSLA:   url = "http://schrts.co/8BRrmL"; break;
      case market.TSM:    url = "http://schrts.co/28mbxu"; break;
      case market.XLE:    url = "http://schrts.co/YxSoaj"; break;
      case market.XLF:    url = "http://schrts.co/pf3qUY"; break;
    }
    return url;
  }

  return(
    <tr className={ticker.door.type == "yang" ? "yangrowbackground" : "yinrowbackground"}>
      <td>{ticker.door.type == "yang" ? "I yang" : "II yin"}</td>
      <td title={ticker.tick.titl}>{ticker.tick.name}</td>
      <td><a>{ticker.door.fore}</a></td>
      <td>{ticker.door.dat1}<br/>{ticker.door.pri1}</td>
      <td>{ticker.sess.dat2}<br/>{ticker.sess.pri2}<br/>{addPlusSignIfPositive(ticker.sess.netp)+"%"}</td>
      <td>{ticker.sess.dat3}<br/>{ticker.sess.pri3}<br/>{addPlusSignIfPositive(ticker.sess.afnp)+"%"}</td>
      <td>{ticker.door.ldat}<br/>{ticker.door.lpri}</td>
      <td><a href={renderStockChart(ticker.tick.name)} target="_blank">Chart</a></td>
    </tr>
  );

};

TickerRow.propTypes = {
  ticker: PropTypes.object.isRequired
};

export default TickerRow;

