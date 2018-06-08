import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';
import { bindActionCreators } from 'redux';
import * as pActions from '../../actions/portfolioActions';
import TickerRow from './ticker/TickerRow';

class PortfolioPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.checkTableToExpand = this.checkTableToExpand.bind(this);
    this.filterInputHandler = this.filterInputHandler.bind(this);
    this.getFilterTickers = this.getFilterTickers.bind(this);
    this.getTabName = this.getTabName.bind(this);
    this.onViewReset = this.onViewReset.bind(this);
    this.ppRef = React.createRef();
    this.uniqBy = this.uniqBy.bind(this);
    this.userAction = this.userAction.bind(this);
    this.state = {
      reload: context.location.pathname,
      totalStateCodeChecked: false
    };
  }

  componentDidMount() {
    this.getFilterTickers();
    document.getElementById('filterinput').focus();
    console.log('************* FOCUSD');
  }

  //----------------------------------------

  checkTableToExpand(actions, view) {
    actions.onViewReset();
  }

  filterInputHandler() {
    const node = this.ppRef.current;
    const tickerName = node.value.toUpperCase();
    console.log('tickerName = ', tickerName);
  }

  getFilterTickers() {
    if (this.props.view.filter.length > 0) {
      let filterTickers = '';
      this.props.view.filter.forEach(ticker => filterTickers += ticker.tick.name + ' ');
      document.getElementById('filterinput').value = filterTickers;
    } else {
      document.getElementById('filterinput').value = '';
    }
  }

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

  onViewReset(actions) {
    return event => {
      document.getElementById('filterinput').value = '';
      actions.onViewReset();
    };
  }

  uniqBy(a, key) {
    let seen = {};
    return a.filter(item => { let k = key(item); return seen.hasOwnProperty(k) ? false : (seen[k] = true); });
  }

  userAction(userClickOn, actions, view) {

    const filter = view.filter;
    const target = view.target;

    switch (userClickOn) {

      // For filtering:
      case 'Filter': // inputs
        return event => {
          console.log('this.ppRef = ', this.ppRef);
          this.filterInputHandler();
          event.target.value = event.target.value.toUpperCase();
          let filterTickers = event.target.value.trim().split(' ').filter(ele => ele.length == 0 ? false : true);
          if (filterTickers.length == 0) { actions.onViewFilter([]); return; }
          let prefilter = [];
          filterTickers = this.uniqBy(filterTickers, JSON.stringify); // remove duplicates from users's input
          filterTickers = filterTickers.filter(ticker => {
            for(let idx1 = 0; idx1 < view.target.length; idx1++) {
              if (ticker == view.target[idx1].tick.name) {
                prefilter.push(view.target[idx1]);
                return true;
              }
            }
            return false;
          });
          if (prefilter.length > 0) actions.onViewFilter(prefilter);
        };

      // For state.view's column sorting:
      case 'BeginDate':     return(event => { actions.onTickerBeginDateSort(filter, target); });
      case 'Cycle':         return(event => { actions.onTickerCycleSort(filter, target); });
      case 'HighestDate':   return(event => { actions.onTickerHighestDateSort(filter, target); });
      case 'HighestNetPer': return(event => { actions.onTickerHighestNetPerSort(filter, target); });

      // For State Code click at the top:
      case 'scClicked': return(event => { actions.onViewStateCodeClicked(); });
    }
  }

  //--------------------------------------------------

  render() {
    const {actions, cat, locale, scClicked, view} = this.props;
    if (document.getElementById('filterinput')) document.getElementById('filterinput').focus();
    //this.checkTableToExpand(actions, view);
    return(
      <div>
        <br/>
        {/* <div style={{display: view.target.length > 3 ? "block" : "none"}}> */}
        <div>
          <div className="marginBottom5px">
            <b>Filter</b> (separates each ticker by a space)
          </div>
          {/* Filter input box */}
          <div>
            <input className="form-control" id="filterinput" type="text"
              onChange={this.userAction("Filter", actions, view)}
              ref={this.ppRef} style={{textTransform: "uppercase"}}/>
          </div>
        </div>

        <h2>
          <span className="marginRight10px">{this.getTabName(cat)}</span> {/* "Portfolio" */}
          <span className="fontSize14px">This type of <a className="noGrab">Title</a> is clickable for sorting.</span>
          <button style={{display: view.target.length > 3 ? "block" : "none"}}
            className="btn btn-sm btn-primary marginTop6px pull-right"
            onClick={this.onViewReset(actions)}>{"Reset " + this.getTabName(cat)}</button> {/* Reset view */}
        </h2>

        <table className="table">

          <thead className="tableHeaderBackgroundColor">
            <tr>
              {/* Cycle Type column */}
              <th width="10%"><a onClick={this.userAction("Cycle", actions, view)}>Cycle<br/>Type</a></th>

              {/* Stock Ticker */}
              <th width="10%">Stock<br/>Ticker</th>

              {/* State Code */}
              <th width="11%">
                State<br/>
                Code&nbsp;<input type="checkbox" checked={scClicked} onClick={this.userAction("scClicked", actions, view)}/>
              </th>

              {/* Begin Date, Begin Price */}
              <th width="15%">
                <a onClick={this.userAction("BeginDate", actions, view)}>Begin Date</a><br/>Price
              </th>

              {/* Highest Date, Price, +Net% */}
              <th width="15%">
                <a onClick={this.userAction("HighestDate", actions, view)}>Highest Date</a><br/>
                Price, <a onClick={this.userAction("HighestNetPer", actions, view)}>+Net%</a>
              </th>

              {/* Lowest Date, Price, -Net% */}
              <th width="15%">Lowest Date<br/>Price, -Net%</th>

              {/* Last Date, Close Price */}
              <th width="14%">Last<br/>Close</th>

              {/* Stock Market */}
              <th width="10%">Stock<br/>Market</th>
            </tr>
          </thead>

          {
            view.filter.length > 0 ?
            view.filter.map(ticker => <TickerRow key={ticker.tick.name} locale={locale} ticker={ticker}/>) :
            view.target.map(ticker => <TickerRow key={ticker.tick.name} locale={locale} ticker={ticker}/>)
          }

        </table>

        <div className="fontSizeSmall"><i>&#45; (minus sign): The ticker's <b>Last Close</b> is below its <b>Begin</b> of Cycle-I yang.</i></div>
        <div className="fontSizeSmall"><i>&#43; (plus sign): The ticker's <b>Last Close</b> is above its <b>Begin</b> of Cycle-II yin.</i></div>

      </div>
    );
  }
}

PortfolioPage.contextTypes = {
  location: PropTypes.object,
  router:   PropTypes.object
};

PortfolioPage.propTypes = {
  actions:   PropTypes.object.isRequired,
  cat:       PropTypes.string, // category
  locale:    PropTypes.string.isRequired,
  scClicked: PropTypes.bool.isRequired,
  view:      PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  console.log('PortfolioPage, mapStateToProps:');
  console.log('  par state = ', state);
  console.log('  par ownProps = ', ownProps);
  return {
    cat:       ownProps.params.cat,
    locale:    state.data.locale,
    scClicked: state.data.view.scClicked,
    view:      state.data.view
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
