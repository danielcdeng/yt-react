import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link, IndexLink } from 'react-router';
import LoadingDots from '../common/LoadingDots';
import * as actionTypes from '../../actions/actionTypes';
import * as catActions from '../../actions/categoryActions';
import * as localeActions from '../../actions/localeActions';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.home = this.home.bind(this);
    this.portfolio = this.portfolio.bind(this);
    this.indices = this.indices.bind(this);
    this.hightech = this.hightech.bind(this);
    this.financial = this.financial.bind(this);
    this.asset = this.asset.bind(this);
    this.crypto = this.crypto.bind(this);
    this.info = this.info.bind(this);
    this.owm = this.owm.bind(this);
    this.loadingDots = this.loadingDots.bind(this);
    this.onLinkClick  = this.onLinkClick.bind(this);
    this.onLocaleENUS = this.onLocaleENUS.bind(this);
    this.onLocaleZHTW = this.onLocaleZHTW.bind(this);
    this.state = {
      home: false,
      port: false,
      indices: false,
      hightech: false,
      financial: false,
      asset: false,
      crypto: false,
      info: false,
      owm: false, // open weather map
      reload: context.location.pathname
    };
    //console.log('path: ', context.location.pathname);
  }
  componentWillMount() {
    this.setState({home:true});
  }
  componentDidMount() {
  }

  home() {
    return(
      <IndexLink to="/" onClick={this.onLinkClick(actionTypes.TAB_HOME)}
        activeClassName={(this.state.reload == "/" || this.state.home) ? "active" : "inactive"}>Home</IndexLink>
    );
  }
  portfolio(catActions) {
    return(
      <Link to="/portfolio" onClick={this.onLinkClick(actionTypes.TAB_PORTFOLIO, catActions)}
        activeClassName={(this.state.reload == "/portfolio" || this.state.port) ? "active" : "inactive"}>Portfolio</Link>
    );
  }
  indices(catActions) {
    return(
      <Link to="/portfolio/indices" onClick={this.onLinkClick(actionTypes.TAB_INDICES, catActions)}
        activeClassName={(this.state.reload == "/portfolio/indices" || this.state.indices) ? "active" : "inactive"}>Indices</Link>
    );
  }
  hightech(catActions) {
    return(
      <Link to="/portfolio/hightech" onClick={this.onLinkClick(actionTypes.TAB_HIGHTECH, catActions)}
        activeClassName={(this.state.reload == "/portfolio/hightech" || this.state.hightech) ? "active" : "inactive"}>Hightech</Link>
    );
  }
  financial(catActions) {
    return(
      <Link to="/portfolio/financial" onClick={this.onLinkClick(actionTypes.TAB_FINANCIAL, catActions)}
        activeClassName={(this.state.reload == "/portfolio/financial" || this.state.financial) ? "active" : "inactive"}>Financial</Link>
    );
  }
  asset(catActions) {
    return(
      <Link to="/portfolio/asset" onClick={this.onLinkClick(actionTypes.TAB_ASSET, catActions)}
        activeClassName={(this.state.reload == "/portfolio/asset" || this.state.asset) ? "active" : "inactive"}>Asset</Link>
    );
  }
  crypto(catActions) {
    return(
      <Link to="/portfolio/crypto" onClick={this.onLinkClick(actionTypes.TAB_CRYPTO, catActions)}
        activeClassName={(this.state.reload == "/portfolio/crypto" || this.state.crypto) ? "active" : "inactive"}>Crypto</Link>
    );
  }
  info() {
    return(
      <Link to="/info" onClick={this.onLinkClick(actionTypes.TAB_ABOUT)}
        activeClassName={(this.state.reload == "/info" || this.state.info) ? "active" : "inactive"}>More Info</Link>
    );
  }
  owm(catActions) {
    return(
      <div style={{marginTop:"5px", fontSize:"14px"}}>
        Other resources:&nbsp;
        <Link to="/weather" onClick={this.onLinkClick(actionTypes.TAB_WEATHER, catActions)}
          activeClassName={(this.state.reload == '/weather' || this.state.owm) ? "active" : "inactive"}>Present and 5-Day Weather Forecast (USA only)</Link>
      </div>
    );
  }

  // Show dot q 25 ms, up to 30 dots
  loadingDots(loading) {
    return(loading > 0 && <LoadingDots interval={30} dots={30}/>);
  }

  locales(locale, localeActions) {
    return(
      <span className="btn-group pull-right">
        <button className={'btn btn-xs '+(locale == 'en-us'?'btn-info':'btn-default')} onClick={this.onLocaleENUS(localeActions)}>en</button>
        <button className={'btn btn-xs '+(locale == 'zh-tw'?'btn-info':'btn-default')} onClick={this.onLocaleZHTW(localeActions)}>ch</button>
      </span>
    );
  }

  onLinkClick(link, ca) {
    return(event => {
      this.setState({home:false,port:false,indices:false,hightech:false,financial:false,asset:false,crypto:false,info:false,owm:false});
      console.log('Header, onLinkClick, link = ', link);
      switch(link) {
        case actionTypes.TAB_HOME:
          this.setState({home: true});
          browserHistory.push('/');
          //ca.onCatClick(link);
          break;
        case actionTypes.TAB_PORTFOLIO:
          this.setState({port: true});
          browserHistory.push('/portfolio');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_INDICES:
          this.setState({indices: true});
          browserHistory.push('/portfolio/indices');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_HIGHTECH:
          this.setState({hightech: true});
          browserHistory.push('/portfolio/hightech');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_FINANCIAL:
          this.setState({financial: true});
          browserHistory.push('/portfolio/financial');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_ASSET:
          this.setState({asset: true});
          browserHistory.push('/portfolio/asset');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_CRYPTO:
          this.setState({crypto: true});
          browserHistory.push('/portfolio/crypto');
          ca.onCatClick(link);
          break;
        case actionTypes.TAB_ABOUT:
          this.setState({info: true});
          browserHistory.push('/info');
          break;
        case actionTypes.TAB_WEATHER:
          this.setState({owm: true});
          browserHistory.push('/weather');
          ca.onCatClick(link);
          break;
        default:
          console.log('Header, onLinkClick, undefined link = ', link);
          break;
      }
    });
  }

  onLocaleENUS(localeActions) {
    return(event => localeActions.localeENUS());
  }
  onLocaleZHTW(localeActions) {
    return(event => localeActions.localeZHTW());
  }

  render() {
    const {catActions, loading, locale, localeActions} = this.props;
    return (
      <div>
        <nav className="fontSize16px">
          <div>
            {/* Primary Menu */}
            {this.home()}{" | "}
            {this.portfolio(catActions)}{" | "}
            {this.indices(catActions)}{" | "}
            {this.hightech(catActions)}{" | "}
            {this.financial(catActions)}{" | "}
            {this.asset(catActions)}{" | "}
            {this.crypto(catActions)}{" | "}
            {this.info(catActions)}
            &nbsp;&nbsp;
            {this.loadingDots(loading)}
            &nbsp;&nbsp;
            {this.locales(locale, localeActions)}
          </div>
          {this.state.home ? this.owm(catActions) : null}
          <br/>
        </nav>
      </div>
    );
  }
}

Header.contextTypes = {
  location: PropTypes.object
};

Header.propTypes = {
  cat: PropTypes.string,
  catActions: PropTypes.object.isRequired,
  loading: PropTypes.number,
  locale: PropTypes.string.isRequired,
  localeActions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    catActions: bindActionCreators(catActions, dispatch),
    localeActions: bindActionCreators(localeActions, dispatch)
  };
}

function mapStateToProps(store, ownProps) {
  console.log('Header, mapStateToProps, store = ', store);
  return {
    cat:     store.market.cat,
    loading: store.market.ajax+store.weather.ajax,
    locale:  store.common.locale
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
