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
    this.onLinkClick  = this.onLinkClick.bind(this);
    this.onLocaleENUS = this.onLocaleENUS.bind(this);
    this.onLocaleZHTW = this.onLocaleZHTW.bind(this);
    this.state = {
      about: false,
      home: false,
      port: false,
      indices: false,
      hightech: false,
      financial: false,
      asset: false,
      crypto: false,
      reload: context.location.pathname
    };
    //console.log('path: ', context.location.pathname);
  }

  onLinkClick(link, ca) {
    return(event => {
      this.setState({about:false,home:false,port:false,indices:false,hightech:false,financial:false,asset:false,crypto:false});
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
          this.setState({about: true});
          browserHistory.push('/about');
          //ca.onCatClick(link);
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
          <IndexLink to="/" onClick={this.onLinkClick(actionTypes.TAB_HOME)}
            activeClassName={(this.state.reload == "/" || this.state.home) ? "active" : "inactive"}>Home</IndexLink>
          {" | "}
          <Link to="/portfolio" onClick={this.onLinkClick(actionTypes.TAB_PORTFOLIO, catActions)}
            activeClassName={(this.state.reload == "/portfolio" || this.state.port) ? "active" : "inactive"}>Portfolio</Link>
          {" | "}
          <Link to="/portfolio/indices" onClick={this.onLinkClick(actionTypes.TAB_INDICES, catActions)}
            activeClassName={(this.state.reload == "/portfolio/indices" || this.state.indices) ? "active" : "inactive"}>Indices</Link>
          {" | "}
          <Link to="/portfolio/hightech" onClick={this.onLinkClick(actionTypes.TAB_HIGHTECH, catActions)}
            activeClassName={(this.state.reload == "/portfolio/hightech" || this.state.hightech) ? "active" : "inactive"}>Hightech</Link>
          {" | "}
          <Link to="/portfolio/financial" onClick={this.onLinkClick(actionTypes.TAB_FINANCIAL, catActions)}
            activeClassName={(this.state.reload == "/portfolio/financial" || this.state.financial) ? "active" : "inactive"}>Financial</Link>
          {" | "}
          <Link to="/portfolio/asset" onClick={this.onLinkClick(actionTypes.TAB_ASSET, catActions)}
            activeClassName={(this.state.reload == "/portfolio/asset" || this.state.asset) ? "active" : "inactive"}>Asset</Link>
          {" | "}
          <Link to="/portfolio/crypto" onClick={this.onLinkClick(actionTypes.TAB_CRYPTO, catActions)}
            activeClassName={(this.state.reload == "/portfolio/crypto" || this.state.crypto) ? "active" : "inactive"}>Crypto</Link>
          {" | "}
          <Link to="/info" onClick={this.onLinkClick(actionTypes.TAB_ABOUT)}
            activeClassName={(this.state.reload == "/info" || this.state.about) ? "active" : "inactive"}>More Info</Link>
          &nbsp;&nbsp;
          {loading > 0 && <LoadingDots interval={30} dots={30}/>} {/* Show dot q.30ms, up to 30 dots */}
          &nbsp;&nbsp;
          <span className="btn-group pull-right">
            <button className={'btn btn-xs '+(locale == 'en-us'?'btn-info':'btn-default')} onClick={this.onLocaleENUS(localeActions)}>en</button>
            <button className={'btn btn-xs '+(locale == 'zh-tw'?'btn-info':'btn-default')} onClick={this.onLocaleZHTW(localeActions)}>ch</button>
          </span>
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

function mapStateToProps(state, ownProps) {
  console.log('Header, mapStateToProps, state = ', state);
  return {
    cat: state.data.cat,
    loading: state.data.ajax,
    locale: state.data.locale
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
