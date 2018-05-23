import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';
import { bindActionCreators } from 'redux';
import * as portfolioActions from '../../actions/portfolioActions';
import TickerRow from './TickerRow';

class PortfolioPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.restorePortfolio = this.restorePortfolio.bind(this);
    this.sortActions = this.sortActions.bind(this);
    this.getTabName = this.getTabName.bind(this);
    this.uniqBy = this.uniqBy.bind(this);
    this.state = {
      reload: context.location.pathname
    };
  }

  //-----------------------------------------

  getTabName(cat) {
    switch (cat) {
      case actionTypes.TAB_INDICES: return actionTypes.TAB_INDICES.charAt(0).toUpperCase() + actionTypes.TAB_INDICES.slice(1);
      case actionTypes.TAB_HIGHTECH: return actionTypes.TAB_HIGHTECH.charAt(0).toUpperCase() + actionTypes.TAB_HIGHTECH.slice(1);
      case actionTypes.TAB_FINANCIAL: return actionTypes.TAB_FINANCIAL.charAt(0).toUpperCase() + actionTypes.TAB_FINANCIAL.slice(1);
      case actionTypes.TAB_ASSET: return actionTypes.TAB_ASSET.charAt(0).toUpperCase() + actionTypes.TAB_ASSET.slice(1);
      case actionTypes.TAB_CRYPTO: return actionTypes.TAB_CRYPTO.charAt(0).toUpperCase() + actionTypes.TAB_CRYPTO.slice(1);
      default: return actionTypes.TAB_PORTFOLIO.charAt(0).toUpperCase() + actionTypes.TAB_PORTFOLIO.slice(1);
    }
  }

  restorePortfolio(actions) {
    return event => {
      document.getElementById('filterinput').value = '';
      actions.onRestorePortfolio();
    };
  }

  sortActions(userClickOn, actions, portfolio) {

    const filter = portfolio.filter;
    const target = portfolio.target;

    switch (userClickOn) {

      // For filtering:
      case 'Filter': // inputs
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
          if (prefilter.length > 0) actions.onPortfolioFilter(prefilter);
          else actions.onPortfolioFilter([]);
        };

      // For column sorting:
      case 'BeginDate':     return(event => { actions.onTickerBeginDateSort(filter, target); });
      case 'Cycle':         return(event => { actions.onTickerCycleSort(filter, target); });
      case 'HighestDate':   return(event => { actions.onTickerHighestDateSort(filter, target); });
      case 'HighestNetPer': return(event => { actions.onTickerHighestNetPerSort(filter, target); });
      case 'LowestDate':    return(event => { actions.onTickerLowestDateSort(filter, target); });
      case 'LowestNetPer':  return(event => { actions.onTickerLowestNetPerSort(filter, target); });
    }
  }

  uniqBy(a, key) {
    let seen = {};
    return a.filter(item => { let k = key(item); return seen.hasOwnProperty(k) ? false : (seen[k] = true); });
  }

  //-----------------------------------------

  render() {
    const {cat, porActions, portfolio} = this.props;
    return(
      <div>
        <br/>
        <div style={{display: portfolio.target.length > 3 ? "block" : "none"}}>
          <div className="marginBottom5px">
            <b>Filter</b> (separates each ticker by a space)
          </div>
          <div>
            <input className="form-control" id="filterinput" type="text"
              onChange={this.sortActions("Filter", porActions, portfolio)}
              style={{textTransform: "uppercase"}}/>
          </div>
        </div>

        <h2>
          <span className="marginRight10px">{this.getTabName(cat)}</span> {/* "Portfolio" */}
          <span className="fontSize14px">This type of <a className="noGrab">Title</a> is clickable for sorting.</span>
          <button style={{display: portfolio.target.length > 3 ? "block" : "none"}}
            className="btn btn-sm btn-primary marginTop6px pull-right"
            onClick={this.restorePortfolio(porActions, portfolio)}>{"Reset " + this.getTabName(cat)}</button>
        </h2>

        <table className="table">
          <thead>
          <tr>
            <th width="10%">
              <a onClick={this.sortActions("Cycle", porActions, portfolio)}>Cycle</a>
            </th>
            <th width="10%">Ticker</th>
            <th width="10%">State</th>
            <th width="15%">
              <a onClick={this.sortActions("BeginDate", porActions, portfolio)}>Date</a>, Begin
            </th>
            <th width="15%">
              Highest&nbsp;
              <a onClick={this.sortActions("HighestDate", porActions, portfolio)}>Date</a>,&nbsp;
              <a onClick={this.sortActions("HighestNetPer", porActions, portfolio)}>%</a>
            </th>
            <th width="15%">
              Lowest Date, %
              {/*Lowest&nbsp;*/}
              {/*<a onClick={this.sortActions("LowestDate", porActions, portfolio)}>Date</a>,&nbsp;*/}
              {/*<a onClick={this.sortActions("LowestNetPer", porActions, portfolio)}>%</a>*/}
            </th>
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
        <div className="fontSizeSmall"><i>&#45; (minus sign): The ticker's <b>Last Close</b> is below its <b>Begin</b> of Cycle-I yang.</i></div>
        <div className="fontSizeSmall"><i>&#43; (plus sign): The ticker's <b>Last Close</b> is above its <b>Begin</b> of Cycle-II yin.</i></div>

      </div>
    );
  }
}

PortfolioPage.contextTypes = {
  location: PropTypes.object,
  router: PropTypes.object
};

PortfolioPage.propTypes = {
  cat: PropTypes.string, // category
  porActions: PropTypes.object.isRequired,
  portfolio: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    porActions: bindActionCreators(portfolioActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  console.log('PortfolioPage, mapStateToProps, state = ', state);
  return {
    cat: ownProps.params.cat,
    portfolio: state.portfolio
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
