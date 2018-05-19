import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link, IndexLink } from 'react-router';
import LoadingDots from '../common/LoadingDots';
import * as actions from '../../actions/localeActions';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onLinkClick  = this.onLinkClick.bind(this);
    this.onLocaleENUS = this.onLocaleENUS.bind(this);
    this.onLocaleZHTW = this.onLocaleZHTW.bind(this);
    this.state = {
      about:  false,
      home:   false,
      port:   false,
      reload: context.location.pathname
    };
    //console.log('path: ', context.location.pathname);
  }

  onLinkClick(link) {
    return(event => {
      switch(link) {
        case "about":
          this.setState({home:  false});
          this.setState({port:  false});
          this.setState({about: true});
          browserHistory.push('/about');
          break;
        case "home":
          this.setState({home:  true});
          this.setState({port:  false});
          this.setState({about: false});
          browserHistory.push('/');
          break;
        case "portfolio":
          this.setState({home:  false});
          this.setState({port:  true});
          this.setState({about: false});
          browserHistory.push('/portfolio');
          break;
      }
    });
  }

  onLocaleENUS(actions) {
    return(event => actions.localeENUS());
  }

  onLocaleZHTW(actions) {
    return(event => actions.localeZHTW());
  }

  render() {
    const {actions, loading, locale} = this.props;
    return (
      <div>
        <nav className="fontSize16px">
          <IndexLink to="/" onClick={this.onLinkClick("home")}
            activeClassName={(this.state.reload == "/" || this.state.home) ? "active" : "inactive"}>Home</IndexLink>
          {" | "}
          <Link to="/portfolio" onClick={this.onLinkClick("portfolio")}
            activeClassName={(this.state.reload == "/portfolio" || this.state.port) ? "active" : "inactive"}>Portfolio</Link>
          {" | "}
          <Link to="/about" onClick={this.onLinkClick("about")}
            activeClassName={(this.state.reload == "/about" || this.state.about) ? "active" : "inactive"}>About</Link>
          &nbsp;&nbsp;
          {loading > 0 && <LoadingDots interval={30} dots={30}/>} {/* Show dot q.30ms, up to 30 dots */}
          &nbsp;&nbsp;
          <span className="btn-group pull-right">
            <button className={'btn btn-xs '+(locale == 'en-us'?'btn-info':'btn-default')} onClick={this.onLocaleENUS(actions)}>en</button>
            <button className={'btn btn-xs '+(locale == 'zh-tw'?'btn-info':'btn-default')} onClick={this.onLocaleZHTW(actions)}>ch</button>
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
  actions: PropTypes.object.isRequired,
  loading: PropTypes.number,
  locale:  PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress,
    locale:  state.locale
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
