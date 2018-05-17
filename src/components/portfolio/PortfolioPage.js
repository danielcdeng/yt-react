import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import * as portfolioActions from '../../actions/portfolioActions';
import TickerRow from './TickerRow';

class PortfolioPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //this.redirectToCustomizePortfolioPage = this.redirectToCustomizePortfolioPage.bind(this);
    this.restorePortfolio = this.restorePortfolio.bind(this);
    this.sortActions = this.sortActions.bind(this);
    this.uniqBy = this.uniqBy.bind(this);
  }

  //-----------------------------------------

  restorePortfolio(actions) {
    return(event => {
      document.getElementById('filterinput').value = '';
      actions.onRestorePortfolio();
    });
  }

  sortActions(userClickOn, actions, portfolio) {

    switch (userClickOn) {

      case 'BeginDate':
        return(event => actions.onTickerBeginDateSort(portfolio.target));

      case 'Cycle':
        return(event => actions.onTickerCycleSort(portfolio.target));

      case 'Filter':
        return event => {
          event.target.value = event.target.value.toUpperCase();
          let tickers = event.target.value.trim().split(' ').filter(ele => ele.length == 0 ? false : true);
          if (tickers.length == 0) { actions.onPortfolioFilter([]); return; }
          let prefilter = [];
          tickers = this.uniqBy(tickers, JSON.stringify); // remove duplicates from users's input
          tickers = tickers.filter(t1 => {
            for(let idx1 = 0; idx1 < portfolio.target.length; idx1++) {
              if (t1 == portfolio.target[idx1].tick.name) {
                prefilter.push(portfolio.target[idx1]);
                return true;
              }
            }
            return false;
          });
          if (prefilter.length > 0) {
            actions.onPortfolioFilter(prefilter); // firing
          } else {
            actions.onPortfolioFilter([]);
          }
        };

      case 'HighestDate':
        return(event => actions.onTickerHighestDateSort(portfolio.target));

      case 'HighestNetPer':
        return(event => actions.onTickerHighestNetPerSort(portfolio.target));

      case 'LowestDate':
        return(event => actions.onTickerLowestDateSort(portfolio.target));

      case 'LowestNetPer':
        return(event => actions.onTickerLowestNetPerSort(portfolio.target));
    }
  }

  uniqBy(a, key) {
    let seen = {};
    return a.filter(item => {
      let k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  //-----------------------------------------

  render() {
    const {actions, portfolio} = this.props;
    return(
      <div>
        <br/>
        <div className="marginBottom5px">
          <b>Portfolio Filter</b> (separates each ticker by a space)
        </div>
        <div>
          <input className="form-control" id="filterinput" type="text"
            onChange={this.sortActions("Filter", actions, portfolio)}
            style={{textTransform: "uppercase"}}/>
        </div>
        <h2>
          <span className="marginRight10px">Portfolio</span>
          <span className="fontSize14px">
            Clicks each <a className="noGrab">Title</a> to sort the list.&nbsp;
            Suggests to firstly click <a className="noGrab">Date</a> or <a className="noGrab">%</a> followed by <a className="noGrab">Cycle</a>.
          </span>
          <button className="btn btn-sm btn-primary marginTop6px pull-right" onClick={this.restorePortfolio(actions, portfolio)}>Restore Portfolio</button>
        </h2>
        <table className="table">
          <thead>
          <tr>
            <th width="10%">
              <a onClick={this.sortActions("Cycle", actions, portfolio)}>Cycle</a>
            </th>
            <th width="10%">Ticker</th>
            <th width="10%">State</th>
            <th width="15%">
              <a onClick={this.sortActions("BeginDate", actions, portfolio)}>Date</a>, Price
            </th>
            <th width="15%">
              Highest&nbsp;
              <a onClick={this.sortActions("HighestDate",   actions, portfolio)}>Date</a>,&nbsp;
              <a onClick={this.sortActions("HighestNetPer", actions, portfolio)}>%</a>
            </th>
            <th width="15%">
              Lowest&nbsp;
              <a onClick={this.sortActions("LowestDate",   actions, portfolio)}>Date</a>,&nbsp;
              <a onClick={this.sortActions("LowestNetPer", actions, portfolio)}>%</a></th>
            <th width="15%">Last Close</th>
            <th width="10%">Stock</th>
          </tr>
          </thead>
          <tbody>
          {
            portfolio.filter.length > 0 ?
            portfolio.filter.map(ticker => <TickerRow key={ticker.tick.name} ticker={ticker}/>) :
            portfolio.target.map(ticker => <TickerRow key={ticker.tick.name} ticker={ticker}/>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

PortfolioPage.propTypes = {
  actions: PropTypes.object.isRequired,
  portfolio: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(portfolioActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    portfolio: state.portfolio
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
